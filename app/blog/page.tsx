import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { format } from 'date-fns';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest posts from the blog',
};

// Define the path to the posts directory
const postsDirectory = path.join(process.cwd(), 'posts');

// Get static props for blog posts
type Post = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
  };
};

export default async function Blog() {
  // Read the files from the posts directory
  const fileNames: string[] = await fs.readdir(postsDirectory);

  // Get the frontmatter from posts
  const posts: Post[] = [];
  for (const fileName of fileNames) {
    if (!fileName.endsWith('.mdx')) {
      continue;
    }
    const slug = fileName.replace('.mdx', '');
    const filePath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data } = matter(fileContents);
    posts.push({
      slug,
      frontmatter: {
        ...data,
        date: data.date ? new Date(data.date) : new Date(),
      },
    });
  }

  // Sort posts by date
  posts.sort((a, b) => (b.frontmatter.date as Date).getTime() - (a.frontmatter.date as Date).getTime());

  // Render the page
  return (
    <section className="container max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="block hover:text-primary transition-colors"
            >
              <h2 className="text-2xl font-semibold mb-1">{post.frontmatter.title}</h2>
              <p className="text-sm text-muted-foreground mb-2">
                {format(post.frontmatter.date as Date, 'MMMM dd, yyyy')}
              </p>
              {post.frontmatter.excerpt && (
                <p className="text-muted-foreground">{post.frontmatter.excerpt}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
      {posts.length === 0 && (
        <p className="text-center text-muted-foreground py-8">
          No posts yet. Check back soon!
        </p>
      )}
    </section>
  );
}