import React from 'react'
import { data } from '../../store/data'
import {useDispatch, useSelector } from 'react-redux'
import { add_order, delete_all, remove_order } from '../../store/actions'
import './index.css'



const TotalCalc=()=>{
  const orderItems = useSelector((state) => state.order);
  return orderItems.reduce((total, item) => total + item.price, 0);
}


export const OrderBasket = () => {
 
  const dispatch = useDispatch()
  const orderData = useSelector((state) => state.order)

  console.log(orderData);
  
  return (
    <div style={styles.orderContainer}>
      <div style={styles.menuContainer}>
        <h1 className='maintext'>MENU</h1>
        <ul>
             <div className='cad'>
             {data.map((el)=>{
                    return <div className='card'>
                       <img src={el.img} alt="" />
                      <li className='order' onClick={()=>dispatch(add_order(el))} key={el.id}>
                        {el.title} - <b>{el.price}</b>
                    </li>
                    </div>
                })
            }
             </div>
                
        </ul>
      </div>
      <div style={styles.basketContainer}>
        <h1 className='maintext'>Orders</h1>
        <h2 className='price'>Total price:{TotalCalc()}</h2>
        <h2 className='price'>Total items</h2>
        <ul>
        <button onClick={()=>(dispatch(remove_order(orderData.length - 1)))}>Cancel</button>
        <button onClick={()=>dispatch(delete_all())}>Delete all</button>
        <div className='zakaz'>{
          orderData.map((item,index)=>(
            <li key={index}>{item.title}-{item.price}</li>
          ))
        }</div>
        
        </ul>
      </div>
     
    </div>
    
  )
}

const styles = {
    orderContainer:{
        display: "flex",
        justifyContent : "space-between"
    },
    menuContainer:{
        width:"50%",
        backgroundColor: '#BBA9FF',
        
    },
    basketContainer:{
        width:"50%",
        backgroundColor: '#EAC1FF',
    }
}
