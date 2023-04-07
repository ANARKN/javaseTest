import { useState } from "react"
// export导入
export function useWindowScroll () {
  const [y, sety] = useState(0)
  // 在滚动行为发生的时候 不断获取滚动值然后交给y
  window, addEventListener('scroll', () => {
    const h = document.documentElement.scrollTop
    sety(h)
  })
  return [y]
}