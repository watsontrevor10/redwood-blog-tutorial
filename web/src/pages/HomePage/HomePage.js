import BlogPostsCell from 'src/components/BlogPostsCell'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const HomePage = () => {
  return (
    <BlogLayout>
      <h1>HomePage</h1>
      <BlogPostsCell />
    </BlogLayout>
  )
}

export default HomePage
