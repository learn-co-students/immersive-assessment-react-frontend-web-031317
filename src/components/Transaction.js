import React from 'react'

const Transaction = (props) => {
	// const find = props.userSearch

	const oneTrans = props.trans.map(one =>  
		( <tr><td>{one.posted_at}</td>
        <td>{one.description}</td>
        <td>{one.category}</td>
        <td>{one.amount}</td></tr>
        ))

	// const descTrans = props.trans.filter(tran =>
	// 	tran.description.split(' ').includes(find)
	// ) // description words split

	// const filtered = descTrans.map(one => ( <tr><td>{one.posted_at}</td>
 //        <td>{one.description}</td>
 //        <td>{one.category}</td>
 //        <td>{one.amount}</td></tr>
 //        ))

	// console.log(filtered)

  return (
  	<div>
  	{oneTrans}    
    </div>
  )
}

export default Transaction

