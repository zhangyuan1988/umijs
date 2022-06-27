import React from 'react'
import { NavBar, Space, Toast } from 'antd-mobile'
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons'

export default function Cinema() {
  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    })

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
      <NavBar backArrow={false} back="北京" right={right} onBack={back}>标题</NavBar>
    </div>
  )
}
