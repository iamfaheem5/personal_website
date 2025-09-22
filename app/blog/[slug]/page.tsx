import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import React from 'react';

// Define the path to the posts directory
const postsDirectory = path.join(process.cwd(), 'posts');

type Post = {
  frontmatter: {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
  };
  mdxSource: React.ReactNode;
};

// Generate static params for each post
export async function generateStaticParams() {
  const fileNames = await fs.readdir(postsDirectory);
  const paths = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => ({
      slug: fileName.replace('.mdx', ''),
    }));
  return paths;
}

// Get post data by slug
export async function getPostData(slug: string): Promise<Post> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const { content: mdxSource } = await compileMDX({
      source: content,
      options: {
        mdxOptions: {
          rehypePlugins: [],
          remarkPlugins: [],
        },
      },
    });

    return {
      frontmatter: {
        ...data,
        date: data.date ? new Date(data.date) : new Date(),
      },
      mdxSource,
    };
  } catch (error) {
    console.error('Error reading post for slug', slug, ':', error);
    return null as any;
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, mdxSource } = post;

  return (
    <article className="container max-w-4xl mx-auto px-6 py-16 prose prose-lg dark:prose-invert">
      <header className="mb-8">
        <h1 className="text-5xl font-bold mb-4">{frontmatter.title}</h1>
        <time className="text-sm text-muted-foreground">
          {format(frontmatter.date as Date, 'MMMM dd, yyyy')}
        </time>
        {frontmatter.tags && (
          <ul className="flex flex-wrap gap-3 mt-4">
            {frontmatter.tags.map((tag: string) => (
              <li key={tag} className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>
      {mdxSource}
    </article>
  );
}