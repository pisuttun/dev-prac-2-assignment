import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import {Suspense} from "react";
import {LinearProgress} from "@mui/material";

export default async function Hospital(){
  const hospitals = getHospitals()
  return(
    <main className="text-center p-5 my-8">
      <h1 className="text-xl font-medium">Hospital list</h1>
      <Suspense fallback={<p>Loading... <LinearProgress/> </p>}>
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
    </main>
  )
}