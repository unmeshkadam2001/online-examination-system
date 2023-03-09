// import "./App.css";
//import "./product.css";

// import NavigationBar from "./component/NavigationBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Question from './component/Question';




// const router = createBrowserRouter([
//   {path:'/',element:<Home />},
//   {path:'/Login',element:<Login />},
//   {path:'/Register',element:<Register />},
//   {path:'/DashBoard',element:<DashBoard />},
//   {path:'/Weather',element:<Weather />},
//   {path:'/SaveContact',element:<SaveContact />},
// ])

// const router = createBrowserRouter([
//   {path:'/SaveContact',element:<SaveContact />},
// ])

function App() {

  return (    
    <>    
      <Question />
    </>
    
  );

  // return <AddCustomer />;
  //  return <Login />;
  // return(
  //   <div>
  //     <PhoneBookHeader />
  //     <Contacts />
  //   </div>
  // )

  // return(
  //   <div>
  //     <Header />
  //     <NavigationBar />
  //     <RouterProvider router={router} />
  //   </div>
  // )



  // return <Register />;

  // return <LuckyNumber />;
  // return <ProductListing />;

  // const products = [
  //   {
  //     url: "https://m.media-amazon.com/images/I/71H8ElS2p1L._AC_SL1500_.jpg",
  //     name: "Gaming Keyboard",
  //     price: "249",
  //   },
  //   {
  //     url: "https://m.media-amazon.com/images/I/61AQ4REoUJL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  //     name: "Gaming Headphone",
  //     price: "119",
  //   },
  //   {
  //     url: "https://m.media-amazon.com/images/I/61t4mpabO+L._AC_SL1500_.jpg",
  //     name: "Gaming Chair",
  //     price: "99",
  //   },
  // ];
  // let p = [];
  // for (const product of products) {
  //   p.push(
  //     <Product
  //       key={product.url}
  //       url={product.url}
  //       name={product.name}
  //       price={product.price}
  //     />
  //   );
  // }
  // return (
  //   <div className="App">
  //     {p}
  //     {/* {products.map((product)=>{
  //       return <Product url={product.url} name={product.name} price={product.price} />
  //     })} */}
  //   </div>
  // );
}

export default App;
