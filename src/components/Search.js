import axios from "axios";
import React, { useState } from 'react';
import useSWR from 'swr';
import DisplayRecommendations from "./DisplayRecommendations";

export default function Search() {
    const [search, setSearch] = useState('')
    const CancelToken = axios.CancelToken
    const source = CancelToken.source()
    const parameters = {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
      };
    
    var url = `https://www.omdbapi.com/?s=${search}&apikey=${process.env.REACT_APP_API_KEY}`
    
    //adding fetcher for SWR 
    const fetcher = (...args) => axios.get(url, {
        cancelToken: source.token
    })
    .then(res=>res.data)
    
    const {data, error} = useSWR(url, fetcher, parameters)
    
    //error checking
    if (error) return (
        <>
            "An error has occurred."
            <pre>{JSON.stringify(error)}</pre>
        </>
    )
    
    return (
        <div>
            {
                console.log("repsonse from api is:", search)
            }
            <form className="mt-10">
                <input onChange={event => {
                    source.cancel("Operation canceled")
                    setSearch(event.target.value)
                }
            } 
                className="max-w-30 w-96 p-5 rounded shadow-lg" placeholder="What do you want to know?"/>
                <button className="bg-gray-100 m-2 p-5 rounded-md text-sm shadow-xl border hover:bg-gray-300">Search</button>
            </form>
            {/* passing data as props to the component */}
            <DisplayRecommendations data={data}/> 
        </div>
    )
}
