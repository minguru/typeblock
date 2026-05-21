import KeyboardLayoutData from '@/constants/KeyboardLayoutData';
import Key from '@/components/Key';

import '@/styles/Keyboard.scss';

function Keyboard() {
  return <>
    <div id="freakinkeyboard">
      <Key layoutData={KeyboardLayoutData}/>
    </div>
  </>
}

export default Keyboard;
