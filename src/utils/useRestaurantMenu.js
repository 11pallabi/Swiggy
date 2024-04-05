import  { useEffect, useState } from 'react'
import { Rest_Menu } from './const';

const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
       fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(Rest_Menu + resId);
        const json = await data.json();
        setResInfo(json.data)
    }
return resInfo
}

export default useRestaurantMenu