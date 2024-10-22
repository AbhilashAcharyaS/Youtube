import { Provider } from 'react-redux';
import Body from './Components/Body';
import Header from './Components/Header';
import logo from './logo.svg';
import store from './Utils/store';

function App() {
  return (
    <Provider store={store}>

    <div className=''>
      <Header/>
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
