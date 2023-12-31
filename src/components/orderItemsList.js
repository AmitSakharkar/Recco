import React from 'react';
import SearchableInput from './searchableInput';
import Button from './button';
import IconButtons from './iconButton';
import { OrderItemListContainer, FilterContainer, FilterActionContainer, TableTitleRow, ProductImage, TableTitle } from '../styles/Navbar';

const OrderItemsList = (props) => {
  return (
    <OrderItemListContainer>
      <FilterContainer>
        <SearchableInput />
        <FilterActionContainer>
          <Button title={'Add item'} isOutlined={true} operation={'addItem'}/>
          <IconButtons iconButtonFor={'shop'}/>
        </FilterActionContainer>
      </FilterContainer>
      <table>
        <TableTitleRow>
          <TableTitle></TableTitle>
          <TableTitle>Product name</TableTitle>
          <TableTitle>Brand</TableTitle>
          <TableTitle>Price</TableTitle>
          <TableTitle>Quantity</TableTitle>
          <TableTitle>total</TableTitle>
          <TableTitle>Status</TableTitle>
          <TableTitle></TableTitle>
        </TableTitleRow>
          {props.data.map((el, i) => (
            <tr index={i}>
              <td><ProductImage src='/images/Avocado Hass.jpg' alt='product_image'/></td>
              <td key={el.product_name +'_'+i}>{el.product_name}</td>
              <td key={el.brand +'_'+i}>{el.brand}</td>
              <td key={el.price +'_'+i}>{el.price}</td>
              <td key={el.quantity +'_'+i}>{el.quantity}</td>
              <td key={el.total +'_'+i}>{el.total}</td>
              <td key={el.status +'_'+i}>{el.status}</td>
              <td>
                <IconButtons iconButtonFor={'select'} />
                <IconButtons iconButtonFor={'close'} />
                <Button title={'Edit'}/>
              </td>
            </tr>
          ))}
      </table>
    </OrderItemListContainer>
  );
};

export default OrderItemsList;