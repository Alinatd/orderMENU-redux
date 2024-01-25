import { OrderBasket } from "./components/OrderBasket";
import {createStore} from "redux"
import { Provider } from 'react-redux';
import {rootReducer} from './store/reducers'


const store = createStore(rootReducer)


function App() {
  return (
    <Provider store={store}>
    <OrderBasket/>
      </Provider>
  );
}

export default App;
 