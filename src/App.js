import React from 'react';
import Navbar from "./components/navbar";
import StorePage from "./screens/store";
import OrderPage from "./screens/orders";
import AnalyticPage from "./screens/analytics";
import { MainWrapper } from './styles/Navbar';

function App() {
  let component
  switch (window.location.pathname) {
    case '/store':
      component = <StorePage />
      break;
    case '/order':
      component = <OrderPage />
      break;
    case '/analytic':
      component = <AnalyticPage />
      break;  
    default:
      component = <OrderPage />
      break;
  }
  return (
    <MainWrapper>
      <Navbar />
      {component}
    </MainWrapper>
  );
}

export default App;
