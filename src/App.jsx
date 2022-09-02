import { Global } from '@emotion/react';
import resetCss from '@/styles/reset';

const App = () => (
  <div>
    <Global styles={resetCss} />
  </div>
);

export default App;
