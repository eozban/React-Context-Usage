import { useContext } from "react";
import { PriceContext } from "../context/PriceContext";

export default function Toogle({title}) {
    const { enabled, setEnabled } = useContext(PriceContext)
    return (
        <div className="toogle">
            <span className={!enabled ? "active" : ""} onClick={()=>setEnabled(false)}>Monthly</span>
            <span className={enabled ? "active" : ""} onClick={()=>setEnabled(true)}>Yearly</span>
            {/*<input type="checkbox" onChange={(e)=>setEnabled(!enabled)}/> {title}*/}
        </div> 
    );
}