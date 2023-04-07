import { useState, useEffect } from 'react'
//在修改数据后 把count值放到页面标题中
// 1.导入useEffect函数
// 2.在函数组件中执行 传入回调 并且定义副作用
// 3.当我们通过修改状态更新组件时，副作用也会不断执行

// 依赖项控制副作用的执行时机
// 1.默认状态(无依赖项)
// 组件初始化的时候先执行一次 等到每次数据修改组件更新再次执行
// 2.添加一个空数组依赖项
// 组件初始化的时候执行一次

// 3.依赖特定项
// 组件初始化的时候执行一次 依赖的特定项发生变化会再次执行

// 4.注意事项
// 只要在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中声明 否则可能有bug
// 某种意义上 hook的出现 就是想不用声明周期概念也可以写业务代码

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('xxx')
  // useEffect(() => {
  //   // 1. 不添加依赖项
  //   document.title = count
  // })

  // useEffect(() => {
  //   // 2.添加一个空数组依赖项
  //   console.log('副作用又执行了')
  //   document.title = count
  // }, [])

  useEffect(() => {
    // 3.依赖特定项
    // 回调函数中用到的数据状态(name)就应该出现在依赖项数组中声明
    console.log('副作用又执行了')
    document.title = count
    console.log(name)
  }, [count, name])
  // 此时初始化+count/name被修改时候都会执行副作用函数
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName('haha')}>{name}</button>
    </div>
  )
}

export default App
