import React, { createContext } from 'react'

//渲染列表
function ListItem({ item, delItem }) {
  //function函数组件 可以使用解构赋值对象item和delitem接收父组件内容 再子传父删除
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={() => delItem(item.id)}>删除</button>
    </>
  )
}

//数据提供者，渲染ListItem组件
//先不抽离组件 用map方法遍历列表完成基础渲染后再抽离
class App extends React.Component {
  state = {
    list: [
      // 列表数据
      {
        id: 1,
        name: '超级好吃的棒棒糖',
        price: 18.8,
        info: '开业大酬宾，全场8折',
      },
      {
        id: 2,
        name: '超级好吃的大鸡腿',
        price: 34.2,
        info: '开业大酬宾，全场8折',
      },
      {
        id: 3,
        name: '超级无敌的冰激凌',
        price: 14.2,
        info: '开业大酬宾，全场8折',
      },
    ],
  }
  delItem = (id) => {
    //接受子类id属性，使用fliter方法使list列表排除此id只保留下排除后的id
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }

  render() {
    return (
      //使用map用item返回我们需要渲染的结构，再加上一个幽灵节点防止报错
      <div>
        {this.state.list.map((item) => (
          <ListItem key={item.id} item={item} delItem={this.delItem} />
        ))}
      </div>
    )
  }
}

export default App
