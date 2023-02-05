import { useRouter } from "next/router";
import App from './../../layouts/app'
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { IconContext } from "react-icons";

function articleDetail({ articles, comments }) {
    const router = useRouter()
    const articleId = router.query.articleId

    return (
    <App>
        <IconContext.Provider
      value={{ color: 'black' }}
    >
      <div className='mx-5'>
        <Link href='/'><FaArrowLeft className="text-3xl my-5" value={{ color: 'white' }}></FaArrowLeft></Link>
      </div>
    </IconContext.Provider>
        
        {
            articles && articles.map(article => {
                if(articleId == article.id){
                return(
                    <div className="articleDetail mx-5 sm:mx-14">
                        <h1 className="font-bold text-2xl my-8">{article.title}</h1>
                        <p className="text-justify">{article.body}</p>
                    </div>
                )
            }
            })
        }

        <h3 className="my-5 mx-5 font-bold sm:mx-14">Comments</h3>

        {
            comments && comments.map(comment => {
                return(
                    <div className="articleDetail mx-5 border-2 rounded-lg p-3 mb-8 sm:mx-14 w-1/2">
                        <h5 className="font-bold">{comment.name}</h5>
                        <p>{comment.body}</p>
                    </div>
                )
            })
        }

    </App>
    );
};
export default articleDetail;

export async function getServerSideProps() {
    const response = await fetch('https://gorest.co.in/public/v2/posts')
    const data = await response.json()

    const Commentsresponse = await fetch('https://gorest.co.in/public/v2/posts/642/comments')
    const comments = await Commentsresponse.json()
  
    return {
        props: {
            articles: data,
            comments: comments,
        }
    }
  }