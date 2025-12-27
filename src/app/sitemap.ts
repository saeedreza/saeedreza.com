import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

function getAllNoteSlugs(): string[] {
  const notesDir = path.join(process.cwd(), 'src', 'app', 'notes');
  const slugs: string[] = [];
  
  try {
    const items = fs.readdirSync(notesDir, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory() && item.name !== '[slug]') {
        const pagePath = path.join(notesDir, item.name, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          slugs.push(item.name);
        }
      }
    }
  } catch (error) {
    console.error('Error reading notes directory:', error);
  }
  
  return slugs;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saeedreza.com'
  const noteSlugs = getAllNoteSlugs();
  
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/notes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  const noteRoutes: MetadataRoute.Sitemap = noteSlugs.map((slug) => ({
    url: `${baseUrl}/notes/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...noteRoutes];
}
