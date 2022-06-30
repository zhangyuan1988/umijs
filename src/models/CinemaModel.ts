
export default {
    namespace: 'cinema',
    state: {
        list: []
    },

    reducers: {
        changeList(prevState: any, action: any) {
            return {
                ...prevState,
                list: action.payload
            }
        },
        clearList(prevState: any) {
            return {
                ...prevState,
                list: []
            }
        }
    },

    // 副作用函数
    effects: {
        // 写成生成器函数
        *getList(action: any, obj: any): any {
            const { call, put } = obj
            // 接收参数
            // 第二个参数是传给函数的值
            const res = yield call(getListForCinema, action.payload.cityId)
            console.log(res);

            yield put({
                type: 'changeList',
                payload: res
            })
        }
    }
}


const getListForCinema = async (id: string | number) => {
    console.log('请求', id);
    try {
        const res = await fetch(`https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=8851606`, {
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => res.json())

        return res.data.cinemas
    } catch (error) {
        console.log(error);
    }
}