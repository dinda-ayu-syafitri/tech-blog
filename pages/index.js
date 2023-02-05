import App from '../layouts/app'
import Hero from '@/components/hero'
import ArticleList from '@/components/articleList'

export default function Home() {
  return (
    <App>
      <Hero></Hero>
      <ArticleList></ArticleList>
    </App>
  )
}

