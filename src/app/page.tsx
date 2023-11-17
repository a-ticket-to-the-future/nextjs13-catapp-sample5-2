"use client"


import Image from 'next/image'
import { useState } from 'react';

export default function Home() {

  interface SearchCatImage {
    id : string;
    url:string;
    width : number;
    height:number;
  }

  const [catImageUrl,setCatImageUrl] = useState(""); 



  const fetchCatImage = async ():Promise<SearchCatImage> => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const result =await res.json();
    // console.log(result);
    
    return result[0];

  };

  const handleClick = async () => {
    const catImage = await fetchCatImage();
    setCatImageUrl(catImage.url);

  }


  return (
    <div className=' w-screen h-screen'>
    <div>Hello</div>
    {/* <Image src="https://cdn2.thecatapi.com/images/3lc.jpg" alt='' width={300} height={300}/> */}
    <Image src={catImageUrl} alt='' width={300} height={300}/>
    <button className=' border-2 rounded-lg border-black hover:scale-105 active:scale-95' onClick={handleClick}>
      クリック
    </button>
    </div>
  )
}
