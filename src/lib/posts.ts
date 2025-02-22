import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  [key: string]: string | number | boolean
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(postsDirectory)

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '')
    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      description: data.description,
      ...data,
    } as BlogPost
  })

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string) {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    return { data, content }
  } catch {
    return null
  }
} 