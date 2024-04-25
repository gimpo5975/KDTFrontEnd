//     import { Link } from "react-router-dom";

//     const MainPage = () => {
//     return (
//         <div>
//             <div className="flex">
//                 <Link to={'/about'}>About으로 이동</Link>
//             </div>
//             <div className="text-4xl text-center font-bold">
//                 <h2>Main Page</h2>
//             </div>

//         </div>
//     );
// }

// export default MainPage;

import BasicLayout from "../layouts/BasicLayout";

const MainPage = () => {
    return(
        <BasicLayout>
            <div className="text-3xl">MainPage</div>
        </BasicLayout>
    );
}
export default MainPage;