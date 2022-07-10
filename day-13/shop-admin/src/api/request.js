// 对于axios进行二次封装
import axios from "axios";

// 引入nprogress
import nprogress from "nprogress";
import "nprogress/nprogress.css"

const requests = axios.create({
    // api 基础路径前缀
    baseURL: "/api",
    // 请求超时时间
    timeout: 5000
});

requests.interceptors.request.use((config) => {
    // config：配置对象，对象里面有一个属性很重要，headers请求头
    nprogress.start();
    return config;
})

requests.interceptors.response.use((res) => {
    // 成功回调函数
    nprogress.done();
    return res.data;
}, (error) => {
    // 失败回调函数
    console.log(error)
    return Promise.reject(new Error('false'))
})

export default requests;