import { useWindowScroll } from './hooks/useWindowScroll'

function App() {
  //根组件
  const [y] = useWindowScroll()
  return <div style={{ height: '12000px' }}>{y}</div>
}

export default App
