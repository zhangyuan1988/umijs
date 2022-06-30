import React, { useEffect } from 'react'
import { connect, history } from 'umi'
import { RouteComponentProps } from 'react-router-dom'
import { NavBar, Space, Toast, DotLoading } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'

function Cinema(props: any) {

  useEffect(() => {
    if (props.list.length === 0) {
      props.dispatch({
        type: 'cinema/getList',
        // 同时传入id
        payload: {
          cityId: props.city.cityId
        }
      })
    } else {
      console.log('缓存');

    }

    return () => {

    }
  }, [])



  const back = () => {
    // 同时清理列表 防止 选择城市时 不被请求
    props.dispatch({
      type: 'cinema/clearList'
    })
    history.push('/city')
  }

  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <SearchOutline />
        <MoreOutline />
      </Space>
    </div>
  )
  return (
    <div>
      <NavBar backArrow={false} back={props.city.cityName} right={right} onBack={back}>标题</NavBar>
      {
        props.loading && <div style={{ fontSize: 24, textAlign: 'center' }}>
          <DotLoading color='primary' />
        </div>
      }
      <ul>
        {
          props.list.map((item: any) => (
            <li key={item.cinemaId}>
              {item.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}


// 使用高阶组件
interface IStoreState {

}
const mapStateToProps = (state: any) => {
  return {
    city: state.city,
    list: state.cinema.list,
    // 状态自带loading属性，异步请求结束会置位false
    loading: state.loading.global
  }
}
export default connect(mapStateToProps)(Cinema)
