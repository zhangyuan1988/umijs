import React from 'react'

function Center() {
  return (
    <div>Center</div>
  )
}


// 权限验证先包装 创建一个父组件
// 固定写法，传入包装在外面的组件名
// 此时Auth组件是 center的父组件 类似高阶组件，然后在Auth中判断登录权限
Center.wrappers = ['@/wrappers/Auth']

export default Center