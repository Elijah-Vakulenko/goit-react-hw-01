import React from 'react'
import s from './TransactionHistory.module.css';


const TransactionHistory = ({transactions}) => {
  return (
      <div>
          <table className={s.table}>
            <thead className={s.thead}>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                    <tr className={s.list_item} key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                    </tr>
              ))}
            </tbody>
          </table>
      </div>
  )
}

export default TransactionHistory