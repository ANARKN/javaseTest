import { useWindowScroll } from './hooks/useWindowScroll'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  //根组件
  const [y] = useWindowScroll()
  const [message, setMssage] = useLocalStorage('hook-key', 'hihi')
  setTimeout(() => {
    setMssage('cp')
  }, 5000)
  return (
    <div style={{ height: '12000px' }}>
      {y} {message}
    </div>
  )
}

export default App
