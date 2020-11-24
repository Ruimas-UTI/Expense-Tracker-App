import React,{useContext}  from 'react';
import {GlobalContext} from "./context/globalState";
import Transaction from "./Transaction";

export default function TransactionList() {
    const {transaction} = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
              {transaction.map(el => (
                     <Transaction el={el}/>
              ))}
            </ul>
        </>
    )   
}
