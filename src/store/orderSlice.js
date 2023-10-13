import { createSlice } from '@reduxjs/toolkit'
import orderData from '../data/orderData'

const initialState = {
  orderData,
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    increment: (state) => {
      state.orderData += 1
    },
    decrement: (state) => {
      state.orderData -= 1
    },
    incrementByAmount: (state, action) => {
      state.orderData += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = orderSlice.actions

export const orders = state => state.order.orderData

export default orderSlice.reducer