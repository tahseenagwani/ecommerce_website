import "./App.css";
import React, { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getCategories } from "./fetcher";

import ProductDetail from "./components/ProductDetail";
import Basket from "./components/basket";
import Checkout from "./components/CheckOut";
import Category from "./components/Category";
import Home from "./components/Home";
// import OrderConfirmation from "./components/order";
import Layout from "../src/components/Layout"
// import SearchResults from "./components/searchResults";

function App() {
    const [categories, setCategories] = useState({
        errorMessage: "",
        data: [],
    });

    React.useEffect(() => {
        const fetchData = async () => {
            const responseObject = await getCategories();
            setCategories(responseObject);
        };
        fetchData();
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout
                                categories={categories}
                            />
                        }
                    >
                        <Route index element={<Home />} />
                        <Route path="basket" element={<Basket />} />
                        <Route path="checkout" element={<Checkout />} />
                        {/* <Route path="orderconfirmation" element={<OrderConfirmation />} /> */}
                        {/* <Route path="search" element={<SearchResults /> } /> */}
                        <Route
                            path="categories/:categoryId"
                            element={<Category />}
                        />
                        <Route
                            path="products/:productId"
                            element={<ProductDetail />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
