import { useEffect } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({});             //deafault value of data is empty object
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/
                currency-api@2024-03-02/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
    },[currency])
}