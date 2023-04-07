import React, { createContext } from 'react'
/*
钩子 函数                           触发时机                                           作用
constructor               创建组件时，最先执行，初始化的时候只执行一次            1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等
render                    每次组件渲染都会触发                                渲染UI（注意： 不能在里面调用setState() ）
componentDidMount         组件挂载（完成DOM渲染）后执行，初始化的时候执行一次     1. 发送网络请求   2.DOM操作
render                         每次组件渲染都会触发                          渲染UI（与 挂载阶段 是同一个render）
componentDidUpdate             组件更新后（DOM渲染完毕）                      DOM操作，可以获取到更新后的DOM内容，不要直接调用setState
componentWillUnmount       组件卸载（从页面中消失）                           DOM操作，可以获取到更新后的DOM内容，不要直接调用setState
*/

class Test extends React.Component {
  //如果数据是组件的状态需要去影响视图 定义到state中
  // 而如果我们需要的数据状态 不和视图绑定 定义成一个普通的实例属性就可以了
  // state中尽量保持精简
  timer = null
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('定时器开启')
    }, 1000)
  }

  //创建一个用来测试卸载和定时器的类组件
  componentWillUnmount() {
    console.log('componentWillUnmount')
    //清理定时器
    clearInterval(this.timer)
  }
  render() {
    return <div>Test</div>
  }
}

class App extends React.Component {
  constructor() {
    super()
    console.log('我是构造器先执行，只执行一次')
  }
  state = {
    count: 0,
    flag: true,
  }
  componentDidMount() {
    console.log('我是componentDidMount最后执行')
  }
  componentDidUpdate() {
    console.log('我是componentDidUpdate，组件更新后执行')
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag,
    })
  }
  render() {
    console.log('我是render，每次组件渲染都会触发')
    return (
      <div>
        {/* 通过一个三元运算符来让我们的 Test组件实现销毁重建 */}
        {this.state.flag ? <Test /> : null}
        点击按钮更新cuont状态,卸载Test组件
        <button onClick={this.changeCount}>{this.state.count}</button>
      </div>
    )
  }
}

export default App
