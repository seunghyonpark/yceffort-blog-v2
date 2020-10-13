import { join } from 'path'

import { statSync, readdirSync, readFile } from 'promise-fs'
import frontMatter from 'front-matter'

import { FrontMatter, Post } from '../types/types'

const POST_PATH = `${process.cwd()}/content/posts/articles`
const DIR_REPLACE_STRING = '/posts/articles'

export async function getAllPosts(): Promise<Array<Post>> {
  const files = getFilesRecursively(POST_PATH).reverse()

  const posts = (
    await Promise.all(
      files.map(async (f) => {
        const file = await readFile(f, { encoding: 'utf8' })
        const { attributes: fm, body } = frontMatter(file)

        const slug = f.slice(
          f.indexOf(DIR_REPLACE_STRING) + DIR_REPLACE_STRING.length + 1,
        )

        return {
          frontmatter: {
            ...(fm as any),
            date: new Date((fm as any).date).getTime(),
          },
          body,
          fields: {
            slug,
            categorySlug: (fm as any).category,
            tagSlugs: (fm as any).tags,
          },
          path: f,
        }
      }),
    )
  ).sort((a, b) => b.frontmatter.date - a.frontmatter.date)

  return posts
}

function getFilesRecursively(path: string) {
  const getFiles = (path: string) =>
    readdirSync(path)
      .map((name) => join(path, name))
      .filter((path: string) => statSync(path).isFile())

  const isDirectory = (path: string) => statSync(path).isDirectory()

  const getDirectories = (path: string) =>
    readdirSync(path)
      .map((name) => join(path, name))
      .filter(isDirectory)

  const dirs = getDirectories(path)

  const files: string[] = dirs
    .map((dir) => getFilesRecursively(dir))
    .reduce((a, b) => a.concat(b), [])

  return files.concat(getFiles(path)).filter((f) => f.endsWith('.md'))
}