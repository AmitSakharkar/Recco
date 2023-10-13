import React from 'react';

const OrderDetails = (props) => {
    let orderDetails = props.data;
    const { order_list_data, ...updatedData} = orderDetails;
    console.log(updatedData);
  return (
        <span>OrderDetails {Object.keys(updatedData).length}</span>
    );
};

export default OrderDetails;