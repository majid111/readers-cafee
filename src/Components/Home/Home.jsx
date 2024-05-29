import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { createContext, useState } from "react";

export const DataProviderContext = createContext(null);

const Home = () => {
  const [wishListBooksData, setWishListBooksData] = useState([]);
  const [readBooksData, setReadBooksData] = useState([]);
  const data = {
    wishListBooksData,
    setWishListBooksData,
    readBooksData,
    setReadBooksData,
  };

  return (
    <div className="max-w-6xl mx-auto">
      <DataProviderContext.Provider value={data}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </DataProviderContext.Provider>
    </div>
  );
};

export default Home;
