import Image from 'next/image'
import React from 'react'
import Link from 'next/link'


export default function ArticleItem({id, title, body, author_id, author}) {
    function limit (string = '', limit = 0) {  
        return string.substring(0, limit)
      }

  return (
    <div className='articleItem flex flex-col rounded-lg h-full border-2 drop-shadow-sm' id={id}>
         <div className="card-head">
             <Image src={"/img/2.jpg"} width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-t-lg" alt={title}/>
        </div>
        <div className="card-body p-4 text-justify">
            <h3 className='font-bold my-3'>{title}</h3>
            <p className='my-3'>{limit(body, 150)}...</p>
        </div>
        <div className="buttonContainer flex items-end p-4 h-full">
                <Link href={`/articles/${id}`} className='button drop-shadow-lg'>Read More</Link>
        </div>
    </div>
  )
}
