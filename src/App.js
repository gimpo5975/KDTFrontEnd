// function App() {
//   return (
//     <div className="text-6xl text-red-600 font-bold underline text-center">
//      Hello react world!!;
//     </div>
//   );
// }    
// export default App;


import { RouterProvider } from "react-router-dom";
import root from "./router/root";

function App(){
  return(
    <RouterProvider router={root} />
  );

}
export default App;