import { useContext } from 'react';
import { PriceContext } from './context/PriceContext';
import Toogle from './component/Toogle';
import "./App.css"

function App() {
  const { pricing, enabled, setEnabled } = useContext(PriceContext)
  return (
    <div className={enabled ? "box yearly" : "box monthly"}>
      <Toogle title="Yıllık" />
      {/*enabled ? <h1>TRUE</h1> : <h1>FALSE</h1>*/}
      {enabled
        ?
        <>
          <p>Basic: {pricing.full.basic}</p>
          <p>Pro: {pricing.full.pro}</p>
          <p>Master: {pricing.full.master}</p>
        </>
        :
        <>
          <p>Basic: {pricing.monthly.basic}</p>
          <p>Pro: {pricing.monthly.pro}</p>
          <p>Master: {pricing.monthly.master}</p>
        </>
      }
    </div>
  );
}

export default App;
