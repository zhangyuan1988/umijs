export default {
    // 命名空间
    namespace: 'city',
    state: {
        cityName: '北京',
        cityId: '110010'
    },

    reducers: {
        // 改变state方法
        changeCity(prevState: any, action: any) {
            console.log(action);

            // 展开对象 再进行合并操作
            return {
                ...prevState,
                cityName: action.payload.cityName,
                cityId: action.payload.cityId
            }
        }
    }
}