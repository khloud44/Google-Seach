import React ,{createContext, useContext, useState } from "react";
import axios from "axios";

const ResultContext= createContext();
const baseUrl ='https://google-search3.p.rapidapi.com/api/v1'; 
export const ResultContextProvider=({children})=>{
    const [results , setResults]=useState([]);
    const [isLoading , setIsLoading]=useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults =async(type)=>{
        setIsLoading(true);

        axios({
            method: 'GET',
            url: `${baseUrl}${type}`,
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '7b6094459cmsh4f621f2b88b6764p133bc8jsn75c9be80ae87',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }
        }).then(res => {
            setResults(res)
            setIsLoading(false);
        })
        .catch(err => console.log(err));

    }

    return (
        <ResultContext.Provider value={{getResults , results, searchTerm, setSearchTerm, isLoading}}>
            {children}
        </ResultContext.Provider>
    )
}


export const useResultContext = ()=>useContext(ResultContext);