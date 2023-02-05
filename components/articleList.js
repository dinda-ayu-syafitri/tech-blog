import React from 'react'
import Image from 'next/image'
import App from '../layouts/app'

function articleList({ articles }) {
  return (
        <div className="articleList grid grid-cols-3 gap-5 mx-12">
        {
            articles && articles.map(article => {
                return(
                    <div className='articleItem flex flex-col justify-center rounded-lg bg-slate-300'>
        <div className="card-head">
            <Image src={"/img/2.jpg"} width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-t-lg"/>
        </div>
        <div className="card-body p-4">
            <h3>{article.title}</h3>
            <p>{article.body}</p>
            <div className="authorDate">
                <span>Author Name</span>
                <span>|</span>
                <span>Date</span>
            </div>
        </div>
    </div>
                )
            })
        }
                {console.log(articles)}

        </div>

        
    
    // <div>
    //         <main>
    //             <button onClick={callAPI}>Make API call</button>
    //         </main>
    //     </div>
    // <div className="articleList grid grid-cols-3 gap-5 mx-12">
    //     <ArticleItem onClick={callAPI}></ArticleItem>
    //     <ArticleItem onClick={callAPI}></ArticleItem>
    //     <ArticleItem onClick={callAPI}></ArticleItem>
    //     <ArticleItem onClick={callAPI}></ArticleItem>
    // </div>

    // console.log(articles)

  )
}
export default articleList

export async function getServerSideProps() {
    const response = await fetch('https://gorest.co.in/public/v2/posts')
    const data = await response.json()

    return {
        props: {
            articles: data,
        }
    }
}