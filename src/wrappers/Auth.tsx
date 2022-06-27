import React from 'react'
import { Redirect } from 'umi'

// 权限验证的写法
export default function Auth(props: any) {

    // 判断登录状态 然后进行渲染
    if (localStorage.getItem('token')) {
        return (
            <div>Auth

                {/* 留一个占位符 */}
                {props.children}
            </div>
        )
    }

    return <Redirect to='/login' />

}
