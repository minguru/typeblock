import '@/styles/Common.scss'
import '@/styles/App.scss'

import Keyboard from '@/components/ui/Keyboard'
import TypingBox from '@/components/ui/TypingBox'
import { useKeyPress } from '@/hooks/useKeyPress'

export default function App () {
  const { pressedKeys, typedText } = useKeyPress()

  return <div id="App">
    <Keyboard pressedKeys={pressedKeys} />
    <TypingBox typedText={typedText}/>
  </div>
}
