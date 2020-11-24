import React, {useContext} from 'react';
import {GlobalContext} from "./context/globalState";

export default function Transaction({el}) {
    const sign = el.amount < 0 ? "-" : "+" ;
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <div>
            <li key={el.id} className={el.amount<0 ? "minus": "plus"}>
                {el.text} <span>{sign}{Math.abs(el.amount)}</span><button onClick={() =>deleteTransaction(el.id)} className="ui delete button">x</button>
            </li>
        </div>
    )
}
