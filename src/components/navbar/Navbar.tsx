"use client"
import React from "react";
import style from './navbar.module.css'
import Link from "next/link";
import AuthLinks from "../AuthLinks/AuthLinks";

const navbar = () => {
    return(
        <>
        <div className={style.container} >
            
            <div className={style.logo} >BlogUp</div>
            <div className={style.links} >
                <Link href='/'>HomePage</Link>
                <AuthLinks/>
            </div>
        </div>
        </>
    )
}
export default navbar