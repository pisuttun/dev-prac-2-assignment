'use client'
import {useReducer} from 'react'
import ProductCard from "./ProductCard";

export default function CardPanel() {
  const ratingReducer = (ratingList:Map<string,number>, action:{type:string, hospitalName:string, score:number})=>{
    switch(action.type) {
      case 'add' : {
        return new Map(ratingList.set(action.hospitalName,action.score))
      }
      case 'remove' : {
        ratingList.delete(action.hospitalName)
        return new Map(ratingList)
      }
      default : return ratingList
    }
  }

  const [ratingList, dispatchRating] = useReducer(ratingReducer, new Map<string,number>())

  return (
    <div className= "w-full">
      <div className= "m-5 flex flex-row content-around justify-around flex-wrap" >
        <ProductCard title='Chulalongkorn Hospital' imgUrl='/img/chula.jpg'
                     score={ratingList.has('Chulalongkorn Hospital') ? ratingList.get('Chulalongkorn Hospital')! : 0}
                     onRating={(hospitalName:string, score:number) => dispatchRating({type:'add', hospitalName:hospitalName, score:score })}/>
        <ProductCard title='Rajavithi Hospital' imgUrl='/img/rajavithi.jpg'
                     score={ratingList.has('Rajavithi Hospital') ? ratingList.get('Rajavithi Hospital')! : 0}
                     onRating={(hospitalName:string, score:number) => dispatchRating({type:'add', hospitalName:hospitalName, score:score })}/>
        <ProductCard title='Thammasat University Hospital' imgUrl='/img/thammasat.jpg'
                     score={ratingList.has('Thammasat University Hospital') ? ratingList.get('Thammasat University Hospital')! : 0}
                     onRating={(hospitalName:string, score:number) => dispatchRating({type:'add', hospitalName:hospitalName, score:score })}/>
      </div>
      {Array.from(ratingList).map(([hospitalName, score]) => (
        <div className= "m-2" key={hospitalName}
             onClick={()=>dispatchRating({type:'remove', hospitalName:hospitalName, score:score})}>
          {hospitalName} Rating = {score}
        </div>
      ))}
    </div>
  )
}