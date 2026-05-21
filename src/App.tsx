import '@/styles/Common.scss';
import '@/styles/App.scss';

import Keyboard from '@/views/Keyboard';
import TypingBox from '@/views/TypingBox';

function App() {
  return <div id="App">
    <Keyboard/>
    <TypingBox/>
  </div>
}

export default App;
