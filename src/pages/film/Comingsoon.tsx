import React, { useEffect } from 'react'

export default function Comingsoon() {
    useEffect(() => {
        fetch('/api/mmdb/movie/v3/list/hot.json?ct=%E6%9D%AD%E5%B7%9E&ci=50&channelId=4').then(res => res.json())
            .then((res)=>{
                console.log(res);
                
            })
    }, [])
    return (
        <div>Comingsoon</div>
    )
}
