import { useEffect, useState } from 'react'

function Tset() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了')
    }, 1000)
    return () => {
      // 清理动作
      clearInterval(timer)
    }
  }, [])
  return <div>this is test</div>
}

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? <Tset /> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}

export default App
