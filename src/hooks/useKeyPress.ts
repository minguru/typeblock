import { useState, useEffect, useRef } from 'react'

export function useKeyPress() {
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set())
  const [typedText, setTypedText] = useState<string>('')
  const clickedKeyRef = useRef<HTMLElement | null>(null)

  function typing( code: string, data: string ) {
    if (code === 'Backspace') { // 백스페이스 동작
      setTypedText(prev => prev.slice(0, -1))
    } 
    else if (code === ' ') { // 스페이스바 동작
      setTypedText(prev => prev + ' ')
    }
    else if (data.length === 1) { // 그 외 입력
      setTypedText(prev => prev + data)
    }
  }

  useEffect(() => {
    // 키보드 동작
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKeys(prev => new Set(prev).add(e.code)) // 동시입력 지원

      typing(e.key, e.key)
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      setPressedKeys(prev => {
        const next = new Set(prev)
        next.delete(e.code)
        return next
      })
    }
    const handleBlur = () => setPressedKeys(new Set())

    // 마우스 동작
    const handleMouseDown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const key = target.getAttribute('data-key-actual')?.toString() ?? ''
      target.classList.add('p') // 누름 효과
      clickedKeyRef.current = target // 키보드 키가 다시 올라올 수 있게 눌렀던 요소 지정

      typing(key, key)
    }
    const handleMouseUp = (e: MouseEvent) => {
      clickedKeyRef.current?.classList.remove('p') // 눌렀던 키보드 키를 다시 올림
      clickedKeyRef.current = null // 마우스 이벤트 키보드 키 초기화
    }

    // 키보드 동작 이벤트 추가
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)
    window.addEventListener('blur', handleBlur)
    // 마우스 동작 이벤트 추가
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      // 키보드 동작 언마운트 이벤트 제거
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      window.removeEventListener('blur', handleBlur)
      // 마우스 동작 언마운트 이벤트 제거
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return { pressedKeys, typedText }
}
