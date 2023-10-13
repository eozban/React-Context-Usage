import { useContext } from "react";
import { PriceContext } from "../context/PriceContext";

export default function Toogle({title}) {
    const { enabled, setEnabled } = useContext(PriceContext)
    return (
        <div>
            <input type="checkbox" onChange={(e)=>setEnabled(!enabled)}/> {title}
        </div> 
    );
}