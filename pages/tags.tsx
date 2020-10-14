import { GetStaticProps } from 'next'
import Link from 'next/link'
import React from 'react'

import Layout from '../src/components/Layout/Layout'
import Page from '../src/components/Page/Page'
import Sidebar from '../src/components/Sidebar/Sidebar'
import config from '../src/config'
import { getAllTagsFromPosts } from '../src/utils/frontMatters'
export default function Tags({ tags }: { tags: string[] }) {
  return (
    <Layout title={`Tags-${config.title}`}>
      <Sidebar />
      <Page title="tags">
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>
              <Link href={`/tag/${tag}/page/1`}>{tag}</Link>
            </li>
          ))}
        </ul>
      </Page>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTagsFromPosts()
  return {
    props: { tags },
  }
}