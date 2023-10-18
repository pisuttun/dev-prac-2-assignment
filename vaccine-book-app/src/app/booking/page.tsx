import { Input } from "@mui/material";
import LocationDateReserve from "@/components/LocationDateReserve";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import getUserProfile from "@/libs/getUserProfile";
export default async function Booking() {

  const session = await getServerSession(authOptions);
  if(!session || !session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  let createdAt = new Date(profile.data.createdAt);

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[5vh]">
      <div className="bg-white rounded-xl w-fit flex flex-col shadow-xl p-4">
        <table className={`table-auto border-separate border-spacing-3`}>
          <tbody>
          <tr>
            <td>Name</td>
            <td className="font-bold">{profile.data.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td className="font-bold">{profile.data.email}</td>
          </tr>
          <tr>
            <td>Tel.</td>
            <td className="font-bold">{profile.data.tel}</td>
          </tr>
          <tr>
            <td>Member Since</td>
            <td className="font-bold">{createdAt.toLocaleDateString()}</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="text-xl font-medium">New Booking</div>
      <div className="w-fit space-y-2">
        <div className="text-md text-left text-gray-600">Name</div>
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[100%] px-10 py-5">
          <Input placeholder="name"/>
          <Input placeholder="surname"/>
        </div>
        <div className="text-md text-left text-gray-600">ID card number</div>
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-[100%] px-10 py-5">
          <Input placeholder="id card number"/>
        </div>
        <div className="text-md text-left text-gray-600">Location & Date</div>
        <LocationDateReserve />
      </div>
    </main>
  );
}
