import React from 'react'
//目标，B组件中的数据穿给A
//技术方案：先把b中的数据传给父 再把父接收到的的数据传给a

function SonA(props) {
  return <div>this is A,{props.sendAmsg}</div>
}
function SonB(props) {
  const bMsg = '接收到来自b组件中的数据'
  return (
    <div>
      this is B <button onClick={() => props.change1(bMsg)}>发送数据</button>
    </div>
  )
}

class App extends React.Component {
  state = {
    sendAmsg: '测试A有没有接收到',
  }
  //申明一个传给b的方法
  change1 = (msg) => {
    console.log(msg)

    this.setState({
      sendAmsg: msg,
    })
  }

  render() {
    return (
      <div>
        <SonA sendAmsg={this.state.sendAmsg} />
        <SonB change1={this.change1} />
      </div>
    )
  }
}
export default App
