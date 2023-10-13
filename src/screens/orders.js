import React from 'react';
import { useSelector } from 'react-redux';
import { orders } from '../store/orderSlice';
import Button from '../components/button';
import OrderDetails from '../components/orderDetails';
import OrderItemsList from '../components/orderItemsList';

const OrderPage = () => {
  const orderData = useSelector(orders);
  const filteredData = Object.fromEntries(Object.entries(orderData).filter(([key, value]) => key !== 'order_list_data'));    
  const titles = Object.keys(filteredData);
  return (
    <>
        <div>
            <div>
                <span> Orders > {orderData.number} </span> 
            </div>
            <div>
                <span>{orderData.number}</span>
                <div>
                    <Button>Back</Button>
                    <Button>Approve Order</Button>
                </div>
            </div>
        </div>
        <div>
            <OrderDetails data={filteredData} titles={titles}/>
            <OrderItemsList data={orderData.order_list_data}/>
        </div>
    </>
  );
};

export default OrderPage;