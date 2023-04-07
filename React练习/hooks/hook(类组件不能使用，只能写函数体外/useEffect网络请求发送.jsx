//类组件 如何发送网络请求
// 生命周期钩子函数 componentDidMount
// 组件挂载（完成DOM渲染）后执行，初始化的时候执行一次

import { useEffect } from 'react'

// useEffect
// 1.不加依赖项 -初始化 + 重新渲染
// 2.加[]- 初始化执行一次
// 3.加特定的依赖项 [count,name] - 首次执行 + 任意一个变化执行
// fetch方法自行拓展，新一代网络发送请求方法但没有一些 axios特殊功能，不如其成熟

function App() {
  useEffect(() => {
    // 发送请求
    async function loadDate() {
      const res = await fetch('http://geek.itheima.net/v1_0/channels')
      console.log(res)
    }
    loadDate()
  }, [])
  return <div></div>
}

export default App
