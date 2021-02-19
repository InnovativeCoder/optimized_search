import React from 'react'

export default function DisplayRecommendations({data}) {
    return (
        <div className="mt-10">
            <div className="flex flex-col">
                <div className="md:my-2 overflow-x-auto">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:inline">
                                    Type
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                                    IMDB
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:inline">
                                    Year
                                </th>
                            </tr>
                        </thead>
                        {
                            // check if data is loaded or not, if loaded , check for sarch array then show data else show error message
                            (data!==undefined)?((data.Search!==undefined)?data.Search.map((result)=>{
                                return(
                                    <tbody className="bg-white divide-y divide-gray-200" key={result.imdbID}>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 hidden md:inline-flex">
                                                        <img className="h-10 w-10 rounded-full" src={result.Poster} alt="" />
                                                    </div>
                                                    <div className="md:ml-4">
                                                        <div className="text-left text-sm font-medium text-gray-900">
                                                            {result.Title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-center text-gray-900 hidden md:block">
                                                    {result.Type}
                                                </div>
                                                <div className="text-sm text-center text-gray-500 hidden md:inline">Optimization</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="px-4  text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 hidden md:inline">
                                                    {result.imdbID}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 sm:px-0 hidden md:inline">
                                                {result.Year}
                                            </td>
                                        </tr>
                                    </tbody>
                                    )
                                }):
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">  
                                                No results
                                            </div>     
                                        </td>
                                    </tr>
                                </tbody>
                            ):
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">  
                                            Loading ...
                                        </div>     
                                    </td>
                                </tr>
                            </tbody>
                        }
                        </table>
                    </div>
                    </div>
                </div>
                </div>
        </div>
    )
}
