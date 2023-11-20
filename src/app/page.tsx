"use client"


import { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';
import VideoComponent from './VideoComponent/page';



interface SearchCatImage {
  id : string;
  url:string;
  width : number;
  height:number;
  
}


interface IndexPageProps {
initialCatImageUrl : string;
}


const fetchCatImage = async ():Promise<SearchCatImage> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search",{cache:'no-store'});
  const result =await res.json();
  // console.log(result);
  // console.log(result[0].url);
  return result[0];

};

const Home : NextPage<IndexPageProps>  = ({initialCatImageUrl}) => {



  const [catImageUrl,setCatImageUrl] = useState(initialCatImageUrl); 
  //毎回変わっていくから状態変数で保持する意図からuseState() また、ここの()の中の"”を忘れないようにしよう




  const handleClick = async () => {
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);

  }

  //useEffectを試してみよう
  useEffect(() => {

    fetchCatImage().then((result)=>{
      // console.log(result);
      setCatImageUrl(result.url);
      
     })
    
    
    

  },[]);


  return (
    <div className=' w-screen h-screen '>
      <div className=' border-b-2 border-blue-600 '>
        <div className=' ml-80 pl-60 mt-20'>
          <div className=' text-4xl font-bold ml-24 mb-5 pl-3'>Hello</div>
            {/* <Image src="https://cdn2.thecatapi.com/images/3lc.jpg" alt='' width={300} height={300}/> */}
            <Image src={catImageUrl} alt='' width={300} height={300}/>
            <button className=' border-2 rounded-lg border-black mt-5 ml-24 px-5 mb-20 hover:scale-105 active:scale-95' onClick={handleClick}>
              クリック
            </button>
          </div>
        </div>
        <div className='ml-80 pl-60'>
          <VideoComponent />
        </div>
    </div>
  )
}


// export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
//  const catImage:SearchCatImage = await fetchCatImage();

//   return {
//     props : {
//       initialCatImageUrl : catImage.url,
//     },
//   }

// }

export default Home ;


