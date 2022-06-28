
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
        }
    },

    // 副作用函数
    effects: {
        // 写成生成器函数
        *getList(action: any, obj: any): any {
            const { call, put } = obj

            const res = yield call(getListForCinema)
            console.log(res);

            yield put({
                type: 'changeList',
                payload: res
            })
        }
    }
}

const getListForCinema = async () => {
    try {
        const res = await fetch('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8851606', {
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