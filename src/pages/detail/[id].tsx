import React from 'react'
import {useParams} from 'umi'

interface IParams{
    id: string
}

// 动态路由使用[] 包裹参数名字
export default function Detail(props: any) {

    const params = useParams<IParams>()
    // 这里可以直接访问
    console.log(params.id);
    
    return (
        <div>detail {props.match.params.id}</div>
    )
}
