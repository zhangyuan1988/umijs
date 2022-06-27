import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Redirect, useLocation } from 'umi'

interface IProps extends RouteComponentProps {
    name: string
}

// 嵌套路由的写法
const Film: React.FC<IProps> = (props) => {
    console.log(props);

    // 使用use
    const location = useLocation()

    // 重定向
    if (location.pathname === '/film' || location.pathname === '/film/') {
        return <Redirect to='/film/nowplaying' />
    }

    return (
        <div>
            <div style={{ height: '200px', background: 'pink' }} >大轮播</div>
            {/* 需要留插槽 */}
            {props.children}
        </div>
    )
}

export default Film
