import React, { useEffect, useState } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { useHistory } from 'umi'

interface IState {
    cityId: number;
    isHot: number;
    name: string;
    pinyin: string
}

interface INewCity {
    title: string;
    items: Array<IState>
}
export default function City() {
    const [citys, setCitys] = useState<INewCity[]>([])

    const history = useHistory()

    const filterCity = (cityes: IState[]) => {

        const letterArr: string[] = []
        const newCity: Array<INewCity> = []
        // 循环出来A-Z
        for (let i = 65; i < 91; i++) {
            letterArr.push(String.fromCharCode(i))
        }

        console.log(letterArr);


        for (const key in letterArr) {
            const arr: Array<IState> = cityes.filter((item: IState) => {
                return item.pinyin.substring(0, 1).toLocaleUpperCase() === letterArr[key]
            })
            // 排除数量为0的项目
            if (arr.length === 0) {
                continue
            }
            newCity.push({
                title: letterArr[key],
                // 筛选数组
                items: arr
            })
        }

        return newCity
    }

    const changeCity = (item: IState) => {
        console.log(item.name);
        history.push('/cinema')
    }
    useEffect(() => {
        fetch('https://m.maizuo.com/gateway?k=3971368', {
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                "X-Host": "mall.film-ticket.city.list"
            }
        }).then(res => res.json())
            .then(res => {
                setCitys(filterCity(res.data.cities))
            })
    }, [])
    return (
        <div style={{ height: window.innerHeight }}>
            <IndexBar>
                {citys.map((group: INewCity) => {
                    const { title, items } = group
                    return (
                        <IndexBar.Panel
                            index={title}
                            title={title}
                            key={title}
                        >
                            <List>
                                {items.map((item: IState) => (
                                    <List.Item key={item.cityId} onClick={() => { changeCity(item) }}>{item.name}</List.Item>
                                ))}
                            </List>
                        </IndexBar.Panel>
                    )
                })}
            </IndexBar>
        </div>
    )
}
