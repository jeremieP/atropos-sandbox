import './App.css';
import 'atropos/css';

import Atropos from 'atropos/react';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Example</h1>
        <Atropos className="atropos-banner" highlight={false} onEnter={() => console.log('enter')}>
          <img className="atropos-banner-spacer" src="/atropos/demo/atropos-bg.svg" alt="" />
          <img data-atropos-offset="-4.5" src="/atropos/demo/atropos-bg.svg" alt="" />
          <img data-atropos-offset="-2.5" src="/atropos/demo/atropos-mountains.svg" alt="" />
          <img data-atropos-offset="0" src="/atropos/demo/atropos-forest-back.svg" alt="" />
          <img data-atropos-offset="2" src="/atropos/demo/atropos-forest-mid.svg" alt="" />
          <img data-atropos-offset="4" src="/atropos/demo/atropos-forest-front.svg" alt="" />
          <img data-atropos-offset="5" src="/atropos/demo/atropos-logo-en.svg" alt="" />
        </Atropos>

        <h2>PS5 Boxes</h2>
        <div className="ps5-case">
          <Atropos className="atropos-ps5" highlight={false} rotateXMax={25} rotateYMax={25} rotateChildren={<>
            <span class="atropos-ps5-t"></span>
            <span class="atropos-ps5-r"></span>
            <span class="atropos-ps5-b"></span>
            <span class="atropos-ps5-l"></span>
          </>}>
            <img data-atropos-offset="0" className="atropos-ps5-size" src="/atropos/ps5/box-size.svg" alt="" />
            <img data-atropos-offset="3" className='atropos-ps5-bg' src="/atropos/ps5/ratchet-bg.jpg" alt="" />  
            <img data-atropos-offset="0" src="/atropos/ps5/box-ribbon.svg" alt="" />
            <img data-atropos-offset="3" src="/atropos/ps5/ps-studios-logo.svg" alt="" />
            <img data-atropos-offset="5" src="/atropos/ps5/ratchet-logo.png" alt="" />
            <img data-atropos-offset="6" src="/atropos/ps5/platinum-layer-bl.png" className="platinum" alt="" />
          </Atropos>
        </div>

        <div className="ps5-case">
          <Atropos className="atropos-ps5" highlight={false} rotateXMax={25} rotateYMax={25}  rotateChildren={<>
            <span class="atropos-ps5-t"></span>
            <span class="atropos-ps5-r"></span>
            <span class="atropos-ps5-b"></span>
            <span class="atropos-ps5-l"></span>
          </>}>
            <img data-atropos-offset="0" className="atropos-ps5-size" src="/atropos/ps5/box-size.svg" alt="" />
            <img data-atropos-offset="3" className='atropos-ps5-bg' src="/atropos/ps5/gow-ragnarok-bg.png" alt="" />
            <img data-atropos-offset="0" src="/atropos/ps5/box-ribbon.svg" alt="" />
            <img data-atropos-offset="3" src="/atropos/ps5/gow-ragnarok-logo.png" alt="" />
            <img data-atropos-offset="5" src="/atropos/ps5/ps-studios-logo.svg" alt="" />
            <img data-atropos-offset="6" src="/atropos/ps5/platinum-layer-bl.png" className="platinum" alt="" />
          </Atropos>

        </div>
      </div>
    </div>
  );
}

export default App;
