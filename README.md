## vue3-element-vite-template

> 一款 vue3 开箱即用的纯净的后台管理系统，只包含 ui/权限/axios 封装/svg 等

[github在线预览地址](https://maxfengyan.github.io/vue3-admin-template-vite/#/)<br>

[gitee在线预览地址](https://maxfengyan.gitee.io/vue3-admin-template-vite/#/)

> 此项目是在 pan 大佬的<a href=https://github.com/PanJiaChen/vue-admin-template>vue-admin-template</a>项目基础上进行功能微改的 vue3 版本,基本沿用 vue-admin-template 项目构造，添加了一些更贴合实际项目的改动和功能。如果有使用过 vue-admin-template 或者 vue-element-admin 的同学，轻松上手无缝切换。没使用过的话可以当作 vue3 的入门练习。

#### 技术栈：vue3.x + vite2.x + element-plus + vue-router4.x + vuex4.x

#### Build Setup

```bash
git clone https://gitee.com/Maxfengyan/vue3-admin-template-vite.git
cd vue3-admin-template-vite
npm install
npm run dev
```
#### 项目截图

![登录](./markimg/0.png)

![登录](./markimg/1.png)

![登录](./markimg/2.png)

![登录](./markimg/3.png)

#### 相对于 <a href=https://github.com/PanJiaChen/vue-admin-template>vue-admin-template</a> 改动

1. **Vite**:使用 vite 构建工具，放弃 webpack。(vite 真香)
2. **Axios 封装请求**：<br>

   > (1) 根据实际项目开发需求，系统中可能会请求多个不同的 **baseurl**，为方便处理封装 axios 类(自定义修改响应拦截在*src/core/request.js*)。<br>

   > (2) 为了项目打包后也可以灵活调整后端接口地址，在打包后自动切换为闭包形式读取 baseurl（_public/api.js_），方便项目打包后部署时随便修改接口地址。

3. **权限过滤拦截**：权限处理更加颗粒化/灵活化。<br>

   > (1) 在.env 配置文件中设置 VITE_POWER_TYPE 是否启用**动态权限**路由功能<br>

   > (2) 改变动态路由逻辑，原本通过角色来确定路由权限，现改为每个路由中添加各自的唯一的路由标识，通过接口获取用户的权限标识，进行颗粒化的比对分配权限，更加灵活一些。<br>

   > (3) 权限数据并非统一结构，可以结合项目进行调整(修改逻辑在*src/core/addRoutePermission*)

4. **Sidebar**:剔除了侧边栏适配 mobile 的响应式(懒...)，调整代码逻辑，在.env 文件中设置。 
```
   VITE_SYSTEM_SWITCH: 是否展示系统标题和logo
   VITE_SYSTEM_NAME: 系统标题
   VITE_SYSTEM_LOGO: 系统 logo
```
5. **svg**：下载 svg 文件存放于*src/plugin/icons/svg/*下，使用方式如下
```html
<!-- logo.svg -->
<svg-icon name="logo" color="xxx" class="xxxx" />
```
6. **mockJs**:因为本地开发时使用 **mockJs** 无法在浏览器捕捉到响应信息，故放弃，可采用以下两种方法：<br>

   > (1) <a href="https://github.com/easy-mock/easy-mock">easy-mock</a>(推荐):服务
器搭建 easy-mock 服务进行接口管理，前后端开发方便协作规范。<br>

   > (2) public:vite 项目 public 文件夹下文件会自动变为静态资源服务，可以在 public 文件夹下根据接口规范创建相应路径的 json 文件达到 ajax 请求目的。


tips：**如果需要前后端联调接口需要在 vite.config.js 配置 proxy**

#### 目录结构

```
|- public                                // 公共静态资源以及模拟接口json文件
|- src                                   // 开发文件夹
|   |- api                               // 项目请求接口
|   |- assets                            // 静态图片
|   |- components                        // 公共组件
|   |   |- ColorPicker                   // 颜色组件(修改全局皮肤，未完成)
|   |   |- Layout                        // 项目布局核心组件
|   |- core                              // 封装核心功能
|   |   |- addRoutePermission            // 权限校验
|   |   |- auth                          // 存放缓存
|   |   |- get-page-title                // 网页标题
|   |   |- request                       // Axios封装
|   |- directive                         // 自定义指令
|   |- mixin                             // vue mixin
|   |   |- global                        // 读取全局参数(颜色组件相关，未用)
|   |- plugin                            // 全局插件
|   |   |- icons                         // 封装svg plugin
|   |- router                            // vue路由
|   |- store                             // vuex
|   |   |- modules                       // vuex modules
|   |   |- getters                       // vuex getters
|   |   |- index                         // vuex入口
|   |- stylus                            // css-stylus
|   |   |- chrome                        // chrome 覆盖原生css
|   |   |- elementUI                     // element 覆盖原生css
|   |   |- index                         // 入口styl
|   |   |- sidebar                       // 侧边栏
|   |   |- transition                    // 过渡动画
|   |   |- variables                     // stylus变量
|   |- views                             // 页面
|   |   |- 404                           // 404
|   |   |- dashboard                     // 根页面
|   |   |- login                         // 登录
|   |- App                               // vue入口组件
|   |- elementui                         // 按需加载elementui组件
|   |- main                              // vue入口文件
|- .env                                  // 全局配置参数
|- vite.config.js                        // vite配置文件
```

#### 未完待续

- 实现<a href="https://github.com/PanJiaChen/vue-element-admin"> vue-element-admin</a>中的组件功能
- typescript 版本
- 采用setup方式，进行精简代码

#### 路过的同学不要走 😀，如果本项目对你有帮助，请给我~~一键三连~~ 一个 star⭐~
