import getHospitals from "@/libs/getHospitals";
import HospitalCatalog from "@/components/HospitalCatalog";
import {Suspense} from "react";
import {LinearProgress} from "@mui/material";
import UserProfileCard from "@/components/UserProfileCard";
import getUserProfile from "@/libs/getUserProfile";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";

export default async function Hospital(){
  const hospitals = getHospitals()
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;
  const profile = await getUserProfile(session.user.token)
  return(
    <main className="text-center p-5 my-8">
      <h1 className="text-xl font-medium">Hospital list</h1>
      <Suspense fallback={<p>Loading... <LinearProgress/> </p>}>
        <HospitalCatalog hospitalJson={hospitals} />
      </Suspense>
      <UserProfileCard />
      {
        profile.data.role === "admin" && <AddHospitalForm/>
      }
    </main>
  )
}