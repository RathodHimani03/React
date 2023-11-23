import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route
} from 'react-router-dom';
import HomePage from './pages/Home';
import Product from './pages/Product';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';


//priviously in oldVersion
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/product" element={<Product/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinitions)



//defined createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/root',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'product', element: <Product /> },
      { path: 'product/:productId', element: <ProductDetail /> }
    ]

  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
