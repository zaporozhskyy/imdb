"use client"
import React, { useState } from 'react'
import {useRouter} from "next/navigation"

export default function SearchSection() {
    const [search, setSearch] = useState("")
    const router = useRouter();
    function handleSubmit(e){
        e.preventDefault()
        if(!search) return
        router.push(`/search/${search}`)
    }
  return (
    <form onSubmit={handleSubmit} 
    className="flex ma-w-6xl mx-auto justify-between items-center px-7">
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1">

        </input>
        <button disabled={!search} type="submit" className="font-semibold text-amber-600 disabled:text-gray-400">Search</button>
    </form>
    
  )
}
