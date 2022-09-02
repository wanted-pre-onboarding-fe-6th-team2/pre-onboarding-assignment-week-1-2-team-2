import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';

function App() {
  return (
    <div>
      <Global styles={resetCss} />
    </div>
  );
}

export default App;
