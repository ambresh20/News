import React from 'react'
// import { Link } from 'react-router-dom';
import newspaper from './newspaper.jpg' ;

const Card = ({post}) => {

	// formating published date and time 
	// Parse the ISO string into a Date object
	const dateObject = new Date(post.publishedAt);

  return (
	<div className='flex flex-col min-w-[330px] w-2/5 border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-t-2xl bg-gray-100'>

        <div>
		    <img src={post.urlToImage || newspaper} alt='' className='h-[30vh] w-full rounded-t-2xl' />
	    </div>

		<div className='m-2 flex flex-col  '>

	        <div className='font-bold text-lg '>
	            {post.title}
	        </div>

			<div className='flex justify-between mt-2 mx-4 flex-col md:flex-row '>
				<div>
					author : {post.author == null ? (post.source.name) : (post.author)}
				</div>
				<div>
					publised at : 
					    {/* <span> { dateObject.toLocaleTimeString() } </span>  */}
					    {' '}  <span>{ dateObject.toLocaleDateString() }</span> 
				</div>
			</div>

	        <div className='mx-3 font-semibold'>
                {post.description || post.content}
	        </div>

            <a href={post.url} target='_blank' rel='noopener noreferrer' className="text-indigo-700 border border-indigo-600 p-2 rounded inline-flex items-center w-[130px] m-3 ml-5 hover:bg-indigo-600 hover:text-white transition duration-400 ease-in ">
                View More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 ml-2">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
            </a>


		</div>

	</div>
  )
}

export default Card ;
