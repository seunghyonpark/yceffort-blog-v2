import { format } from 'date-fns'

import { Post } from '#src/type'
import CustomLink from '#components/Link'
import Tag from '#components/Tag'

export default function ListLayout({
  posts,
  title,
  pageNo = 1,
  hasNextPage = false,
  prevPath,
  nextPath,
}: {
  pageNo: number
  hasNextPage: boolean
  posts: Post[]
  title: string
  prevPath?: string
  nextPath?: string
}) {
  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <ul>
          {posts.map(
            (
              {
                fields: { slug },
                frontMatter: { date, title, description, tags },
              },
              index,
            ) => {
              const updatedAt = format(new Date(date), 'yyyy-MM-dd')
              return (
                <li key={`${slug}_${index}`} className="py-4">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={updatedAt}>{updatedAt}</time>
                      </dd>
                    </dl>
                    <div className="space-y-3 xl:col-span-3">
                      <div>
                        <h3 className="text-2xl font-bold leading-8 tracking-tight">
                          <CustomLink
                            href={`/${slug}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </CustomLink>
                        </h3>
                        <div className="flex flex-wrap">
                          {tags.map((tag) => (
                            <Tag key={tag} text={tag} />
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                        {description}
                      </div>
                    </div>
                  </article>
                </li>
              )
            },
          )}
        </ul>
      </div>
      <div className="flex">
        <div className="flex w-1/2 justify-start text-base font-medium leading-6">
          {pageNo !== 1 && (
            <CustomLink
              href={prevPath || `/pages/${pageNo - 1}`}
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="all posts"
            >
              Page {pageNo - 1} &larr;
            </CustomLink>
          )}
        </div>

        <div className="flex w-1/2 justify-end text-base font-medium leading-6">
          {hasNextPage && (
            <CustomLink
              href={nextPath || `/pages/${pageNo + 1}`}
              className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="all posts"
            >
              Page {pageNo + 1} &rarr;
            </CustomLink>
          )}
        </div>
      </div>
    </>
  )
}
