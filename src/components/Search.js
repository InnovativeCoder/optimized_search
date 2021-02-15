import axios from "axios";
import React, { useState } from 'react';
import useSWR from 'swr';
import DisplayResult from "./DisplayResult";

export default function Search() {
    const [search, setSearch] = useState('')
    var url = `http://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`
    const fetcher = (...args) => axios(url).then(res=>res.data)
    const {data, error} = useSWR(url, fetcher)

    if (error) return "An error has occurred.";

    return (
        <div>
            <form className="mt-10">
                <input onChange={event => setSearch(event.target.value)} className="max-w-30 w-96 p-5 rounded shadow-lg" placeholder="What do you want to know?"/>
                <button className="bg-gray-100 m-2 p-5 rounded-md text-sm shadow-xl border hover:bg-gray-300">Search</button>
            </form>
            <DisplayResult data={data}/> 
        </div>
    )
}
