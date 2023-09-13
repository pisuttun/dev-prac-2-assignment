"use client"
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Select, MenuItem } from "@mui/material";

export default function LocationDateReserve(){
  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white"/>
      </LocalizationProvider>
      <Select variant="standard" name="location" className="h-[2em] w-[200px]">
        <MenuItem value="Chulalongkorn Hospital">Chulalongkorn Hospital</MenuItem>
        <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat University Hospital">Thammasat University Hospital</MenuItem>
      </Select>
    </div>
  )

}
