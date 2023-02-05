import App from '../../layouts/app'
import Hero from '@/components/hero'
import ArticleList from '@/components/articleList'

function articles({ articles, users }) {
  return (
    <App>
      <Hero></Hero>
      <ArticleList articles={articles} author={users}></ArticleList>
    </App>
  )
}
export default articles

export async function getServerSideProps() {
  const response = await fetch('https://gorest.co.in/public/v2/posts')
  const data = await response.json()

  const responseUser = await fetch('https://gorest.co.in/public/v2/users')
  const users = await responseUser.json()

  return {
      props: {
          articles: data,
          users: users,
      }
  }
}