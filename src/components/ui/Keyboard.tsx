import KeyboardLayoutData from '@/constants/KeyboardLayoutData'
import Key from '@/components/ui/utils/Key'

import '@/styles/Keyboard.scss'

interface Props {
  pressedKeys: Set<string>
}

export default function Keyboard ({ pressedKeys }: Props) {
  return <>
    <div id="freakinkeyboard">
      <Key layoutData={KeyboardLayoutData} pressedKeys={pressedKeys} />
    </div>
  </>
}
