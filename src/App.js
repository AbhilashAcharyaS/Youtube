import { Provider, useSelector } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";
import logo from "./logo.svg";
import store from "./Utils/store";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import WatchPage from "./Components/WatchPage";
import SearchResult from "./Components/SearchResult";

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
      },
      {
        path:'search/:query',
        element: <SearchResult/>
      }
    ]
  }
]);


function App() {

  const darkMode= useSelector(store=>store.app.darkMode);
  
  return (
    <Provider store={store}>
      <div className={`${darkMode? " bg-black text-white" : "bg-white text-black"} no-scrollbar bg-black text-white`}>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
