import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'
interface IItem {
    name: string;
    filmId: number
}
export default function Nowplaying() {
    const history = useHistory()
    const [list, setList] = useState([])

    useEffect(() => {
        fetch('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8275221',
            {
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(response => {
                return response.json()
            }).then(res => {
                console.log(res.data.films);
                setList(res.data.films)
            })

        return () => {

        }
    }, [])

    return (
        <div>
            {
                list.map((item: IItem) => (
                    <li key={item.filmId} onClick={
                        () => {
                            history.push('/detail/' + item.filmId)
                        }
                    }>
                        {item.name}
                    </li>
                ))
            }
        </div>
    )
}
