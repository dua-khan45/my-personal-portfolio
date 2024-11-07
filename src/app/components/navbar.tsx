import Link from "next/link";
import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5"
const Navbar=()=>{
    return(
        <section className="bg-yellow-800">
            <div className="text-white font-bold flex pt-3">Dua khan</div>
            <header className="text-white flex justify-center gap-10">
               
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"#home"} className="mr-5 hover:text-white">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-white">About</Link>
           
            <Link href={"#contact"} className="mr-5 hover:text-white">Contact</Link>
          </nav>
            
                
            </header>
        </section>
    )
}
export default Navbar 