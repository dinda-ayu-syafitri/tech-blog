import Image from 'next/image'
import React from 'react'


export default function ArticleItem() {
  return (
    <div className='articleItem flex flex-col justify-center rounded-lg bg-slate-300'>
        <div className="card-head">
            <Image src={"/img/2.jpg"} width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto rounded-t-lg"/>
        </div>
        <div className="card-body p-4">
            <h3>Judul Artikel</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem amet expedita necessitatibus sapiente, deleniti tempore cumque aperiam ipsam facere!</p>
            <div className="authorDate">
                <span>Author Name</span>
                <span>|</span>
                <span>Date</span>
            </div>
        </div>
    </div>
  )
}
