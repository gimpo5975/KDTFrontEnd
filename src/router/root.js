import { createBrowserRouter } from "react-router-dom";
//createBrowserRouter : 어떤 경로(path)에는 어떤 컴포넌트를 보여 줄 것인지를 결정하는 역할
//                      경로의 추가는 파라미터로 전달되는 배열의 내용으로 결정

const { createBrowserRouter } = require("react-router-dom");


const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))

const About = lazy(() => import("../pages/AboutPage"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))

const TodoList =  lazy(() => import("../pages/todo/ListPage"))


const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
      },
      {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
      },
      {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
      }
    
]);

export default root;