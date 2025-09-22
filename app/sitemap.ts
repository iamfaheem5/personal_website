import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = 'https://mapfix.shop'; // Replace with your actual domain

  const baseUrls: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Dynamically generate sitemap entries for blog posts
  const { promises: fs } = await import('fs');
  const path = await import('path');
  const postsDirectory = path.default.join(process.cwd(), 'posts');
  const fileNames = await fs.readdir(postsDirectory);
  const postUrls: MetadataRoute.Sitemap = [];

  for (const fileName of fileNames) {
    if (fileName.endsWith('.mdx')) {
      const slug = fileName.replace('.mdx', '');
      postUrls.push({
        url: `${siteUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return [...baseUrls, ...postUrls];
}