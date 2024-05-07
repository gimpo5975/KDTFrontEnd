import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/MainPage"
import { Suspense, lazy } from "react";

const Loading = <div>Loading...</div>
const Main = lazy(()=> <MainPage/>)

const root  =createBrowserRouter([
    {
        path : "",
        element : <Suspense fallback={Loading}>Main</Suspense>
    }
])

export default root;