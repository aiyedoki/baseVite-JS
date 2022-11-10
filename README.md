## ❤base-vite-vue3 模板框架，开箱即用

**一个 Vue3 + Vite + 🍍pinia 的开箱即用的开发模板。**



## 🎉简单说明

- vue 版本是 **3.2.38**，使用 **vite** 进行搭建。
- **css**预处理默认使用 **SCSS**，同时集成了常用样式方便快速开发。
- 状态管理使用 **Pinia**。
- 使用 **Prettier**进行代码格式化。
- 对 **axios** 的使用进行了封装，可通过文档了解。
- 引入 **i18n** 进行多语言切换。
- 这个模板比较干净，可根据自己的需求进行编写。



## 📙目录

- 项目预览
- 安装
- **prettierrc** 格式化插件
- 已封装 **axios** 请求工具
- 关于 **css** 样式
- **pinia**
- **i18n** 国际化



## 项目预览

[点击查看](https://dokidokis.gitee.io/base-vue-js-demo/)



## ✨安装

```
1、克隆项目
git clone git@github.com:aiyedoki/baseVite-JS.git

2、安装依赖
npm install

3、启动项目
npm run dev
```



## 💜prettierrc 格式化插件

> 本项目没有采用ESlint，需要使用的同学可以自行安装。

 ![image-20220921045252593.png](https://s2.loli.net/2022/09/21/RvXgZYDpnxKl4zb.png)

- VSCode 安装 Prettier 后，将 Prettier 设置成默认格式化工具，即可使用Prettier进行代码格式化。
- 根目录下的 `.prettierrc`  便是 Prettier 的配置工具，需要使用哪些可根据下表自行添加或移除。
- 如果不需要使用 prettierrc 进行格式化，删除 .prettierrc 即可，对代码没有任何影响。

```
{
  tabWidth: 4,               // 使用4个空格缩进
  semi: false,               // 代码结尾是否加分号
  trailingComma: 'none',     // 代码末尾不需要逗号
  singleQuote: true,         // 是否使用单引号
  printWidth: 100,           // 超过多少字符强制换行
  arrowParens: 'avoid',      // 单个参数的箭头函数不加括号 x => x
  bracketSpacing: true,      // 对象大括号内两边是否加空格 { a:0 }
  endOfLine: 'auto',         // 文件换行格式 LF/CRLF
  useTabs: false,            // 不使用缩进符,而使用空格
  quoteProps: 'as-needed',   // 对象的key仅在必要时用引号
  jsxSingleQuote: false,     // jsx不使用单引号,而使用双引号
  jsxBracketSameLine: false, // jsx标签的反尖括号需要换行
  rangeStart: 0,             // 每个文件格式化的范围是文件的全部内容
  rangeEnd: Infinity,        // 结尾
  requirePragma: false,      // 不需要写文件开头的 @prettier
  insertPragma: false,       // 不需要自动在文件开头插入 @prettier
  proseWrap: 'preserve',     // 使用默认的折行标准
  htmlWhitespaceSensitivity: 'css'  // 根据显示样式决定html要不要折行
}
```



## ✅已封装 axios 请求工具

1、打开 `根目录/utils/env.ts`，配置开发环境和生产环境下的默认请求地址。

```js
window.BASE_URL = (function () {
  if (import.meta.env.MODE === 'development') {
    // 开发环境
    return 'http://127.0.0.1:2333/api'
  } else {
    // 生产环境
    return 'http://119.29.147.193:2333/api'
  }
})()
```



2、（可选）在 `根目录/utils/request/index.ts` 可以配置**请求拦截器**和**响应拦截器**

```js
/* 请求拦截器 */
instance.interceptors.request.use(
  config => {
    /* 这里为配置区域，例如让请求携带token等 */
    return config
  },
  err => {
    /* 错误时候的处理 */
    return Promise.reject(err)
  }
)
```

```js
/* 响应拦截器 */
instance.interceptors.response.use(
  res => res.data,
  err => {
      /* 这里为配置区域，例如token失效清空无效用户信息然后跳转到登录页面等 */
    return Promise.reject(err)
  }
)
```



3、如何发起请求？

- 在 `/src/api` 文件夹新建 `.ts` 文件，例如 `home.ts`

- ```js
    import request from '@/utils/request'	// 引入工具文件
    
    export const getTest = () => {
      return request('/FAutoWmw', 'get')
    }
    
    /* 伪代码说明：
    *  export const 自定义请求名称 = () => {
    *     return request('/请求地址', '请求方式 get或者post')
    */ }
    ```

- 打开需要发起请求的组件

    ```vue
    <script setup lang="ts">
    import { getTest } from '@/api/test'
        
    const test = async () => {
      const res = await getTest()
      console.log(res)
    }    
    </script>
    ```

    

## 🔹 关于 css 样式 

- **CSS** 的预处理器使用的是 **SCSS**。
- 该项目集成了常用 **css** 样式的预设，例如**flex、font-size、width、margin**等，可以到 `src/styles/` 文件夹下进行查看。

- 案例：

    ```html
    // 设置一个 宽500px、高100px、字体大小33px、内容居中的div盒子
    <div class="s-w-500 s-h-100 s-f-33 flex-center"> 盒子 </div>
    ```

    

## 🍍pinia

**pinia** 这个就没什么好说的了，**vue** 生态里 **Vuex** 的替代者，一个全新的 **vue** 状态管理库。



没什么好说的，那就帮大家避个坑吧hhh ：

使用 **vue3 + ts + pinia** 开发项目中，我相信好多人使用 **vuex** 的传统思想在 **router** 中使用，但是用这种思想对于 **pinia** 就行不通了，会报错。报错如下：`（getActivePinia was called with no active Pinia. Did you forget to install pinia）`，下面是简单的解决方案，如有更好的方案希望大家留言分享。

- 首先创建 ` src/stores/index.ts` 文件

    ```js
    import { createPinia } from 'pinia'
    const pinia = createPinia()
    export default pinia
    ```

- 替代 **vite** 默认的 **pinia** 引入方式

    ```js
    import { createApp } from "vue"
    import App from './App.vue'
    import pinia from "./store/store"
    
    const app = createApp(App)
    app.use(pinia)
    ```

- 在 `router.ts` 中使用 **pinia**

    ```js
    import { createRouter, createWebHistory } from 'vue-router'
    import pinia from '../store/store' 
    import { useUser} from "../store/useUser"
    
    const store = useUser(pinia)
    console.log(store) 
    // 接下来就可以使用store中的方法和属性了
    ```

    

## 🎈i18n 国际化

- 在 `src/language/components` 中自行分类文件填写中文与英文信息，再导出到 `en.ts` 和 `cn.ts` 中既可实现网页中英文的切换。

- 使用：

    - **language** 文件夹用于存放语言包

    - 新建对应的要用到的语言文件例如`zh.ts`, `en.ts`等其他语言文件

    - 编写语言文件

        ```js
        // zh.ts
        const zh = {
            message: {
                lang: '中文',
                personal: '个人中心',
                logout: '退出登录',
                hello: '您好',
            }
        }
        export default zh
        ```

        ```js
        // en.ts
        const en = {
            message: {
                lang: 'english',
                personal: 'Personal Center',
                logout: 'Log out',
                hello: 'hello',
            }
        }
        export default en
        ```

    - 在template中使用

        ```html
        <div>
            {{ $t('message.lang') }}
        </div>
        ```
    
    - 在 setup 中使用
    
        ```js
        import { useI18n } from 'vue-i18n'
        const { t } = useI18n()
        console.log(t('message.lang'))
        ```
    
    - 语言切换
    
        ```js
        import { useI18n } from 'vue-i18n'
        const { locale } = useI18n()
        const changeLanguage = () => {
          locale.value = 'en'
          //缓存到localStorage中 下次进来还是切换后的语言
          localStorage.setItem('lang', "en")
        }
        ```

- 不需要该插件：
    - 删除 **language** 文件，再运行 `npm uninstall vue-i18n`
    
    - 删除各组件中引入 vue-i18n 的代码。
    
        ```diff
        // 示例代码 src/views/home/components/header.vue
        - import { useI18n } from 'vue-i18n'
        - const { locale } = useI18n()
        
        - const lang = ref('cn')
        - const changeLan = () => {
        -   locale.value = lang.value === 'cn' ? 'en' : 'cn'
        -   lang.value = locale.value
        - }
        ```
    
        
