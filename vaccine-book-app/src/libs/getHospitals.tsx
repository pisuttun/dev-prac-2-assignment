export default async function getHospitals(){
  const res = await fetch("http://localhost:5000/api/v1/hospitals")
  if(!res.ok) {
    throw new Error("Failed to fetch hospitals")
  }
  return await res.json()
}