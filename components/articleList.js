import React from 'react'
import Image from 'next/image'
import App from '../layouts/app'
import ArticleItem from './articleItem'

function articleList({ articles, author }) {
  return (
        <div className="articleList grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-5 mx-14 my-8">
        {
            articles && articles.map(article => {
                return(
                    <ArticleItem id={article.id} key={article.id} title={article.title} body={article.body} author_id={article.user_id} author={author}></ArticleItem>
                )
            })
        }
        </div>
  )
}
export default articleList