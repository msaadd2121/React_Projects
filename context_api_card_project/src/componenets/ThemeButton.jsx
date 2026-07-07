import React from "react";
import useTheme from "../context/theme";


export default function ThemeBtn() {
    const {thememode,lighttheme,darktheme}=useTheme()
    const onChangebtn=(e)=>{
        const DarkModeStatus=e.currentTarget.checked
        if(DarkModeStatus) {
            darktheme()
        }else{
            lighttheme()
        }
    }
    
    return (
        <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangebtn}
        checked= {thememode==='dark'}
      />

      <div className="h-8 w-14 rounded-full bg-slate-600 transition-all duration-300 peer-checked:bg-blue-600 peer-checked:shadow-[0_0_10px_rgba(37,99,235,0.6)]"></div>

      <div className="absolute left-1 top-1 h-6 w-6 rounded-full bg-white shadow-md transition-all duration-300 peer-checked:translate-x-6"></div>
    </label>

    );
}

