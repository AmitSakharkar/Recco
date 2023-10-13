import React from 'react';
import { useSelector } from 'react-redux';
import { orders } from '../store/orderSlice';
import Button from '../components/button';
import OrderDetails from '../components/orderDetails';
import OrderItemsList from '../components/orderItemsList';
import { OrderNumberDetails, OrderBreadcrumb, OrderActionArea, OrderNumberHeader, OrderConfirmationAction, OrderDetailsContainer } from '../styles/Navbar';

const OrderPage = () => {
  const orderData = useSelector(orders);
  const filteredData = Object.fromEntries(Object.entries(orderData).filter(([key, value]) => key !== 'order_list_data'));    
  const titles = Object.keys(filteredData);
  return (
    <>
        <OrderNumberDetails>
            <OrderBreadcrumb> Orders > <u>{orderData.number}</u> </OrderBreadcrumb> 
            <OrderActionArea>
                <OrderNumberHeader>Order {orderData.number}</OrderNumberHeader>
                <OrderConfirmationAction>
                    <Button>Back</Button>
                    <Button>Approve Order</Button>
                </OrderConfirmationAction>
            </OrderActionArea>
        </OrderNumberDetails>
        <OrderDetailsContainer>
            <OrderDetails data={filteredData} titles={titles}/>
            <OrderItemsList data={orderData.order_list_data}/>
        </OrderDetailsContainer>
    </>
  );
};

export default OrderPage;