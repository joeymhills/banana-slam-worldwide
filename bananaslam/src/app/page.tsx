"use client"

import { useState } from 'react';

export default function Home() {

  const [albums, setAlbums] = useState("")

  async function goGet(){

    const response = await fetch("https://fiber-test-production.up.railway.app/albums", {
    method: "GET",
    mode: "no-cors", 
    })
  
    if (response?.ok){
      setAlbums(response)
    }
    else{
      console.log("error")
    }
  }
  
  goGet();

  return (
  <div className="bg-black w-full min-h-screen">
      <h1 className='w-full text-yellow-500 flex flex-col justify-center items-center pt-6 font-bold text-5xl'>Banana SLAM!</h1>
      <div>{albums}</div>
  </div> //white background with yellow text (centered)
  )
}
