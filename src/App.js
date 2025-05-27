import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import logo from "./logo.svg";
import store from "./Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path:'',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      }
    ]
  }
]);


function App() {
  return (
    <Provider store={store}>
      <div className="no-scrollbar">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
