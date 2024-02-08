"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignUp() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  return (
    <>
    
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="">SignUp</h1>
        <hr />
        <label htmlFor="username">User Name</label>
       
        <input
        id="username"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="username"
        />
      </div>
    </>
  );
}
