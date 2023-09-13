'use client'
import React from "react";

export default function InteractiveCard({children,title}:{children:React.ReactNode,title:string}){
  function onSelected(){
    alert("Select " + title)
  }
  function onCardMouseAction(event:React.SyntheticEvent) {
    if(event.type=='mouseover'){
      event.currentTarget.classList.remove('bg-white')
      event.currentTarget.classList.remove('shadow-lg')
      event.currentTarget.classList.add('bg-neutral-200')
      event.currentTarget.classList.add('shadow-2xl')
    }
    else{
      event.currentTarget.classList.remove('bg-neutral-200')
      event.currentTarget.classList.remove('shadow-2xl')
      event.currentTarget.classList.add('bg-white')
      event.currentTarget.classList.add('shadow-lg')
    }
  }

  return(
    <div className="w-1/5 h-[300px] rounded-lg shadow-lg"
    onClick={()=>onSelected()}
    onMouseOver={(e)=>onCardMouseAction(e)}
    onMouseOut={(e)=>onCardMouseAction(e)}
    >
      {children}
    </div>
  )
}