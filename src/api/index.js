/**
 * * * * * * * * * * * * * * *
 * author: 马丰彦
 * date: 2022-02-15
 * function: 多实例写法是考虑到同一系统调取不同后台接口资源地址的情况
 * /example：调取登录等接口为：http://www.aa.com/xxx
 * \example：调取内容列表接口为：http://www.list.com/zzz
 * tips1: DEV为true时为本地开发环境，false时为线上正式环境，根据环境区分接口地址
 * tips2: 本地开发环境接口模拟方法：在public/mock下新建json文件，直接请求 http://localhost:3000/mock/xxx.json即可，或者使用mock-server(fastmock以及easymock等)
 * tips3: 正式环境接口地址window.api.xx具体配置在public/api.js下(不写在.env文件下是可以做到线上修改接口地址不必重新打包本项目)
 * * * * * * * * * * * * * * *
 */

import Axios from "../core/request";

const vue3RequestUrl = import.meta.env.DEV ? "/mock" : window.api.vue3;
const otherRequestUrl = import.meta.env.DEV ? "/other" : window.api.other;

export const vue3Request = new Axios(vue3RequestUrl).getInstance();
export const otherRequest = new Axios(otherRequestUrl).getInstance();
