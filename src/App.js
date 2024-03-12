import { useEffect, useState } from 'react';
import './App.css';
import {apiKey, filterData} from './Data' ;
import Card from './Components/Card';
import NavBar from './Components/NavBar';
import DateTime from './Components/DateTime';
import Spinner from './Components/Spinner' ;
import Footer from './Components/Footer';

function App() {
  const [loading, setLoading] = useState(false) ;
  const [articles, setArticles] = useState([]) ;
  const [catagory, setCatagory] = useState(filterData[0].title) ;

  console.log(catagory) ;
 
  // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`

  async function fetchNewsData(){
    const url2 = `https://newsapi.org/v2/top-headlines?country=in&category=${catagory}&apiKey=${apiKey}` ;

    setLoading(true)
    try {
      const response = await fetch(url2) ;
      const data = await response.json() ;

      console.log(data.articles) ;
      setArticles(data.articles) ;
    } catch (error) {
      console.log(error) ;
    }
    setLoading(false) ;
  }

  useEffect( () => {
    fetchNewsData() ;
  }, [catagory] ) ;

  return (
    <div className="App">
      <NavBar />
      <DateTime />
      <div className='flex justify-center items-center gap-x-5 flex-wrap '>
        {
          filterData.map( (cat) => (
            <button onClick={ () => setCatagory(cat.title)}
            key={cat.id} className='bg-[#3d348b] mx-2 mb-8  font-bold text-white cursor-pointer transition-all duration-[0.3s] ease-[ease] relative inline-block shadow-[0_5px_#2c0b8e] px-3 py-1 rounded-[5px] border-[none] hover:shadow-[0_3px_#2c0b8e] hover:top-px active:shadow-[0_0_#2c0b8e] active:top-[5px] outline-none ' > {cat.title} </button>
          ) )
        }

      </div>
      
      {
        loading === true ? (<Spinner />) :
         articles.length > 0 ? 
          (
            <div className='flex justify-center gap-10 flex-wrap my-8 '>
              {
                articles.map((post) => (
                  <Card key={post.url} post={post}  />
                ))
              }
            </div>
          ) : 
          (
            <div className='flex justify-center items-center h-[60vh] font-bold text-2xl'>Data Not Found</div>
          )
      }

      <Footer />

    </div>
  );
}

export default App;
