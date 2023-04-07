//累加运算 usestate
// 快速使用
// 1.导入useState函数 react
// 2.执行这个函数并传入初始值 必须在函数组件中
// 3.结构[数据，修改数据的方法]
// 4.使用数据 修改数据

// 解释
// const [count, setCount] = useState(0)
// 1.useState传过来的参数 作为count的初始值
// 2.[count, setCount]这里的写法是一个解构赋值 useState(0)返回值是一个数组

// [count, setCount]名字可以自定义吗？->可以自定义保持语义化
// [count, setCount]顺序可以换吗？->不可以 第一个参数是数据状态，第二个就是修改数据的方法

// 3.setCount函数 作用用来修改count 依旧保持不能修改原值还是生成一个新值替换原值
//  setCount(基于原值计算得到新值)
// 4.count和setCount是一对 是帮在一起的 setCount只能用来修改对应的count值

//组建的更新
// 当调用setCount的时候 更新过程

// 首次渲染
// 首次被渲染的时候 组件内部的代码会被执行一次
// 其中useState也会跟着执行 这里重点注意 初始值旨在首次渲染时候生效

// 更新渲染setCount都会更新
// 1.app组件会再次渲染 这个函数会再次执行
// 2.useState再次执行 得到的新的count值不是0而是修改之后的1 模板会用新值渲染

// 重点一句话：useState初始值旨在首次渲染生效 后续只要调用setCount整个app中代码都会执行
// 此时的count每次拿到的值都是最新值
import { useState } from 'react'
function App() {
  // count:数据状态
  // setCount:修改count的函数(专有函数)
  const [count, setCount] = useState(0)
  console.log(count)
  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default App
