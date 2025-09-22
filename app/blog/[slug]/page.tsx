import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import { GetStaticPaths, GetStaticProps } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';

// Define the path to the posts directory
const postsDirectory = path.join(process.cwd(), 'posts');

type Post = {
  frontmatter: {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
  };
  mdxSource: MDXRemoteSerializeResult;
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
export async function getPostData(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  import('next-mdx-remote/rsc').then((mdxRemote) => {
    // The MDXRemote will handle the serialization
  });

  return {
    frontmatter: {
      ...data,
      date: data.date ? new Date(data.date) : new Date(),
    },
    mdxSource: {
      compiledSource: '', // For RSC, we compile in the component
      scope: {},
      options: {
        mdxOptions: {
          rehypePlugins: [],
          remarkPlugins: [],
        },
      },
    },
    content,
  } as { frontmatter: any; mdxSource: MDXRemoteSerializeResult; content: string };
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = await getPostData(params.slug);

  if (!frontmatter) {
    notFound();
  }

  return (
    <article className="container max-w-3xl mx-auto px-4 py-12 prose dark:prose-invert">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
        <time className="text-sm text-muted-foreground">
          {format(frontmatter.date as Date, 'MMMM dd, yyyy')}
        </time>
        {frontmatter.tags && (
          <ul className="flex flex-wrap gap-2 mt-4">
            {frontmatter.tags.map((tag: string) => (
              <li key={tag} className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </header>
      <MDXRemote source={content} />
    </article>
  );
}