import './App.css';
import {BrowserRouter as Router , Route ,Switch} from 'react-router-dom'
import ListCustomerComponent from './component/ListCustomerComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import CreateCustomerComponent from './component/CreateCustomerComponent';
import UpdateCustomerComponent from './component/UpdateCustomerComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className="container">
            <Switch> 
              <Route path='/' exact component = {ListCustomerComponent}></Route>
              <Route path='/cus' component = {ListCustomerComponent}></Route>
              <Route path='/add-customer' component = {CreateCustomerComponent}></Route>
              <Route path='/update-customer' component = {UpdateCustomerComponent}></Route>
              <ListCustomerComponent/>
            </Switch>
          </div>
          <FooterComponent/>
      </Router>
      
    </div>
    
  );
}

export default App;
