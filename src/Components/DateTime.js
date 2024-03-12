// Show Real time and date
import React, { useEffect, useState } from 'react'

const DateTime = () => {
	const [date, setDate] = useState(new Date()) ;

	useEffect( () => {

		const timer = setInterval( () => (setDate(new Date()) ), 1000);

		return function cleanup(){
            clearInterval(timer) ;
		}

	} ) ;   // every second rendering

  return (
	<div className='text-end mr-16 my-2 font-semibold'>
	    <p>Time : <span className='font-bold text-gray-800'> {date.toLocaleTimeString() } </span> </p>
        <p> Date : <span className='font-bold text-gray-800'> { date.toLocaleDateString()} </span> </p>
	</div>
  )
}
 
export default DateTime ;
