import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import { getAllPosts, parseBody } from '../../../../src/utils/FrontMatters'
import { Post } from '../../../../src/types/types'
import PostRenderer from '../../../../src/components/Post/Post'
import Layout from '../../../../src/components/Layout'
import config from '../../../../src/config'

export default function PostPage({ post }: { post?: Post }) {
  return post ? (
    <Layout
      title={post.frontmatter.title}
      description={post.frontmatter.description || config.subtitle}
    >
      <PostRenderer post={post} />
    </Layout>
  ) : null
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPosts()
  const paths = allPosts.reduce((prev, { fields: { slug } }) => {
    const splits = `${slug.replace('.md', '')}`.split('/')
    if (splits.length === 4) {
      const [year, month, day, title] = splits
      prev.push({ params: { year, month, day, title } })
    }
    return prev
  }, [] as Array<{ params: { year: string; month: string; day: string; title: string } }>)

  return {
    paths,
    fallback: true,
  }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post: Post | undefined
  if (params) {
    const { year, month, day, title } = params
    const slug = [year, month, day, title].join('/')
    const posts = await getAllPosts()
    post = posts.find(({ fields: { slug: postSlug } }) => postSlug === slug)

    if (post) {
      post.parsedBody = await parseBody(post.body)
    }
  }

  return {
    props: { post },
  }
}
