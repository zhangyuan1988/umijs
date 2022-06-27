import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { NavLink,  } from 'umi'
import './index.less'

// 这个是全局的 根组件 布局组件 与nuxt比较像
const IndexLayout: React.FC<RouteComponentProps> = (props) => {

  if (props.location.pathname === '/city' || props.location.pathname.includes('/detail')) {
    return <div>{ props.children }</div>
  }
  return (
    <>
      IndexLayout
      {/* 留一个插槽 */}
      {props.children}

      {/* tabbar写在布局组件里 */}
      <ul>
        <li>
          <NavLink to='/film' activeClassName='active'>film</NavLink>
        </li>
        <li>
          <NavLink to='/cinema' activeClassName='active'>cinema</NavLink>
        </li>
        <li>
          <NavLink to='/center' activeClassName='active'>center</NavLink>
        </li>
      </ul>
    </>
  )
}
export default IndexLayout