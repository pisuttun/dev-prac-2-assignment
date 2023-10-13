import ProductCard from "./ProductCard";
import Link from 'next/link';

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Object}) {
  const hospitalJsonReady = await hospitalJson

  return (
    <div className= "w-full">
      <div className= "m-5 flex flex-row content-around justify-around flex-wrap" >
        {hospitalJsonReady.data.map((hospitalItem:Object)=>(
          <Link href={`/hospital/${hospitalItem.id}`} className='w-1/4'>
            <ProductCard title={hospitalItem.name} imgUrl={hospitalItem.picture} />
          </Link>
        ))}
      </div>
    </div>
  )
}