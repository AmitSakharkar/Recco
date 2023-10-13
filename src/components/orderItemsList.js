import React from 'react';
import SearchableInput from './searchableInput';
import Button from './button';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { OrderItemListContainer, FilterContainer, FilterActionContainer } from '../styles/Navbar';

const OrderItemsList = (props) => {
  return (
    <OrderItemListContainer>
      <FilterContainer>
        <SearchableInput />
        <FilterActionContainer>
          <Button title={'Add item'} isOutlined={true} operation={'addItem'}/>
          <Button />
        </FilterActionContainer>
      </FilterContainer>
      <table>
        <tr>
          <th></th>
          <th>Product name</th>
          <th>Brand</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>total</th>
          <th>Status</th>
          <th></th>
        </tr>
          {props.data.map((el, i) => (
            <tr index={i}>
              <td></td>
              <td key={el.product_name +'_'+i}>{el.product_name}</td>
              <td key={el.brand +'_'+i}>{el.brand}</td>
              <td key={el.price +'_'+i}>{el.price}</td>
              <td key={el.quantity +'_'+i}>{el.quantity}</td>
              <td key={el.total +'_'+i}>{el.total}</td>
              <td key={el.status +'_'+i}>{el.status}</td>
              <td><><CheckIcon/> <CloseIcon /> <Button /></></td>
            </tr>
          ))}
      </table>
    </OrderItemListContainer>
  );
};

export default OrderItemsList;