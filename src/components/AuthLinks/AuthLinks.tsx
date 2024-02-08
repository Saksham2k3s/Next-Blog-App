import Link from 'next/link';
import React from 'react'
import style from './authLinks.module.css'
function AuthLinks() {
    const isAuth = true;
  return (
    <div  >
    {
        isAuth === true ? (
            <div className={style.links} ><Link href='/post' >Post</Link>
            <Link href='/pofile' >Proile</Link>
            <Link href='/myposts' >My Post</Link>
            <Link href='/logout' >Logout</Link>
            </div>
        ) : (
            <div className={style.links} ><Link href='/login' >Login</Link>
            <Link href='/signup' >SignUp</Link>
            
            </div>
        )
    }
    </div>
  )
}

export default AuthLinks