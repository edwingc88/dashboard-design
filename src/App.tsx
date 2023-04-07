import React, { useState } from "react";

import { RiDashboardLine, RiBriefcaseLine, RiCalendar2Line, RiMessage2Line , RiLogoutBoxRLine, RiMenu3Fill, RiCloseLine, RiNotification3Fill, RiArrowDownSFill, RiSearch2Line, RiCheckboxBlankCircleFill, RiFilter3Line, RiMapPinRangeFill, RiArrowDownLine, RiDropboxFill, RiTwitchLine} from "react-icons/ri";

function App() {

  const [sidebar,setSidebar]= useState(true)
  const handleSidebar = ()=>{
    setSidebar(!sidebar)
  }


  return (
   <div className='min-h-screen grid grid- md:grid-cols-6 lg:grid-cols-6'>
     {/*Sidebar*/}
    <div className={`col-span-1 md:w-[40%] fixed lg:static  lg:w-full top-0 z-40 bg-white transition-all ${sidebar &&'-left-full'} w-full h-full p-8 border-r`} >
       {/* Logotipo */}
      <div className="text-center p-8">
           <h1 className="uppercase text-base font-bold tracking-[4px]">
         Tu logo
       </h1>
      </div>

      <div className="flex flex-col justify-between max-h-full">
      {/* Menu */}
       <nav>
        <ul>
          <li>
            <a href="#" className="flex items-center gap-4 text-gray-500 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors font-semibold">
            <RiDashboardLine />
            Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 text-gray-500 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors font-semibold">
            <RiBriefcaseLine />
            Job Board
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 text-gray-500 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors font-semibold">
            <RiCalendar2Line />
            Shedule
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-4 text-gray-500 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors font-semibold">
            <RiMessage2Line />
            Messenger
            </a>
          </li>
        </ul>
       </nav>
       {/* Image and logout */}
       <div className="flex flex-col gap-4 mt-2">
          <img src="/startup_life.svg" alt="startup" />
            {/* Update */}
            <div className="bg-purple-50 p-8 flex flex-col gap-4 rounded-3x1">
              <h3 className="text-xl text-center">Get upgrade</h3>
              <p className="text-gray-500 text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <button className="bg-purple-600 text-white p-2 rounded-lg">
                Learn more
              </button>
            </div>
          <a href="#" className="flex items-center gap-4 text-gray-500 hover:bg-purple-600 p-4 hover:text-white rounded-lg transition-colors font-semibold">
            <RiLogoutBoxRLine />
            Logout
          </a>
       </div>
       </div> 
  
        
     </div>
     {/*Btn menu movil*/}
     <button onClick={handleSidebar} className="block lg:hidden fixed
       bottom-4 right-4 bg-purple-600 p-2 text-white rounded-full text-2xl z-40">
        {sidebar ? <RiMenu3Fill />: <RiCloseLine />}
     </button>
     {/*Content*/}
     <div className="col-span-5 md:w-[100%] ">
        {/* Header */}
        <header className="flex flex-col md:flex-row gap-4 items-center  justify-between p-4 md:px-8 lg:px-12 w-full">
          <form className="w-full md:w-[70%] lg:w-[70%] order-1 md:-order-none">
            {/* Search */}
            <div className="relative">
              <RiSearch2Line className="absolute left-2 top-3"/>
              <input type="text" className="bg-gray-100 py-2 pl-8 pr-4 outline-none rounded-lg w-full" placeholder="Buscar" />
            </div>
          </form>
            {/* Notifications */}
            <nav className="w-full  md:w-[30%] lg:w-[30%] flex justify-center md:justify-end">
              <ul className="flex items-center gap-4">
                <li>
                  <a href="#" className="relative">
                    <RiNotification3Fill className="text-xl" />
                    <RiCheckboxBlankCircleFill className="absolute -right-1 -top-1 text-xs text-red-500 drop-shadow-lg shadow-black" />
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-1">
                    Jorge Luis Trejo <RiArrowDownSFill />
                  </a>
                </li>
              </ul>
            </nav>
        </header>
         {/* Content child */}
         <div className="p-4 md:p-8 lg:p-12 bg-gray-100">
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-3xl font-semibold">Job Board</h1>
          </div>
          {/* Search */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
          <form className="col-span-2">
            <div className="relative">
              <RiSearch2Line className="absolute left-2 top-3 text-purple-600"/>
              <input type="text" className="bg-white py-2 pl-8 pr-4 outline-none w-full" placeholder="Search" />
            </div>
          </form> 
          <form className="col-span-1">
            <div className="relative">
              <RiSearch2Line className="absolute left-2 top-3 text-purple-600"/>
              <select typeof="text" className="bg-white py-[10px] pl-8 pr-4 outline-none w-full" placeholder="Search">
                <option>Anywhere</option>
              </select>
            </div>
          </form>
          <form className="col-span-1">
            <div className="relative">
              <RiMapPinRangeFill className="absolute left-2 top-3 text-purple-600"/>
              <input type="text" className="bg-white py-2 pl-8 pr-4 outline-none w-full" placeholder="Filters" />
              <span className="absolute text-sm right-2 top-[7px] bg-purple-600 text-white py-1 px-[9px] rounded-full">4</span>
            </div>
          </form>
          </div>
          {/* Burble*/}
          <div className="flex items-center flex-wrap gap-4">
            <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full"> 
              <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs"><RiCloseLine /></button>
              {" "}<span className="text-gray-500">Design </span>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full"> 
              <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs"><RiCloseLine /></button>
              {" "}<span className="text-gray-500">Regular  </span>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full"> 
              <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs"><RiCloseLine /></button>
              {" "}<span className="text-gray-500">Full Time </span>
            </span>
            <span className="bg-white flex items-center gap-4 py-2 pl-4 pr-6 rounded-full"> 
              <button className="bg-purple-100 p-1 rounded-full text-purple-600 text-xs"><RiCloseLine /></button>
               {" "}<span className="text-gray-500">B2B </span>
            </span>
            <button className="text-gray-500 ml-4">Clear All</button>
          </div>
          {/* Results*/}
          <div className="flex justify-between mt-4 mb-4">
            <p className="text-gray-500">
              We've found <span className="text-gray-600">523</span> jobs!
            </p>
            <div className="flex justify-items-center">
              <p>Sorb by:<span>Date</span></p>
              <RiArrowDownLine /> 
            </div>
          </div>
          {/* Card */}
          <a href="" className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-400  transition-all mb-4 ">
            <div className="w-full md:w-[10%] flex items-center md:justify-center justify-start">
              <RiTwitchLine  className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md"/>
            </div>
            <div className=" w-full md:w-[70%]">
              <h1 className="text-xl flex items-center gap-4 mb-2">
                Product Designer {" "}
                <span className="text-sm py-1 px-2 bg-purple-100 text-purple-700 font-bold   "> Remote</span>
                <span className="text-sm py-1 px-2 bg-green-100 text-green-700 font-bold  ">Sketch</span>
              </h1>
              <p className="text-gray-500"> Twitch --- Wroclaw</p>
            </div>
            {/* Time */}
            <div className="w-full md:w-[20%] flex flex-col items-end">
              <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PLM</h3>
              <p className="text-gray-500">2 days Ago</p>
            </div>
          </a >
          <a href="" className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-400  transition-all mb-4 ">
            <div className="w-full md:w-[10%] flex items-center md:justify-center justify-start">
              <RiDropboxFill  className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md"/>
            </div>
            <div className=" w-full md:w-[70%]">
              <h1 className="text-xl flex items-center gap-4 mb-2">
                UX Designer {" "}
                <span className="text-sm py-1 px-2 bg-purple-100 text-purple-700 font-bold   "> Remote</span>
                <span className="text-sm py-1 px-2 bg-green-100 text-green-700 font-bold  ">Sketch</span>
              </h1>
              <p className="text-gray-500"> Dropbox --- Warzarrd</p>
            </div>
            {/* Time */}
            <div className="w-full md:w-[20%] flex flex-col items-end">
              <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PLM</h3>
              <p className="text-gray-500">2 days Ago</p>
            </div>
          </a >
          <a href="" className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-400  transition-all mb-4 ">
            <div className="w-full md:w-[10%] flex items-center md:justify-center justify-start">
              <RiDropboxFill  className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md"/>
            </div>
            <div className=" w-full md:w-[70%]">
              <h1 className="text-xl flex items-center gap-4 mb-2">
                UX Designer {" "}
                <span className="text-sm py-1 px-2 bg-purple-100 text-purple-700 font-bold   "> Remote</span>
                <span className="text-sm py-1 px-2 bg-green-100 text-green-700 font-bold  ">Sketch</span>
              </h1>
              <p className="text-gray-500"> Dropbox --- Warzarrd</p>
            </div>
            {/* Time */}
            <div className="w-full md:w-[20%] flex flex-col items-end">
              <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PLM</h3>
              <p className="text-gray-500">2 days Ago</p>
            </div>
          </a >
          <a href="" className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg border-2 border-transparent hover:border-purple-400  transition-all mb-4 ">
            <div className="w-full md:w-[10%] flex items-center md:justify-center justify-start">
              <RiDropboxFill  className="text-7xl bg-purple-100 text-purple-600 p-4 rounded-md"/>
            </div>
            <div className=" w-full md:w-[70%]">
              <h1 className="text-xl flex items-center gap-4 mb-2">
                UX Designer {" "}
                <span className="text-sm py-1 px-2 bg-purple-100 text-purple-700 font-bold   "> Remote</span>
                <span className="text-sm py-1 px-2 bg-green-100 text-green-700 font-bold  ">Sketch</span>
              </h1>
              <p className="text-gray-500"> Dropbox --- Warzarrd</p>
            </div>
            {/* Time */}
            <div className="w-full md:w-[20%] flex flex-col items-end">
              <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7k PLM</h3>
              <p className="text-gray-500">2 days Ago</p>
            </div>
          </a >

         </div>
     </div>
   </div>
  )
}

export default App
