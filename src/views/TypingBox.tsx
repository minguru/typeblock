import '@/styles/TypingBox.scss';
import { useRef, useEffect } from 'react';

useEffect(() => {

}, []);

function TypingBox() {
  return <>
    <div id="typingbox">
      <div className="text-box">
        <p className="sentence">
          Hi, this is just dummy sentence.
        </p>
      </div>
      <div className="typing-area">
        <div className="cursor"></div>
      </div>
    </div>
  </>
}

export default TypingBox
