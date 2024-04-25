// const ListPage = () => {
//     return (
//         <div className="p-4 w-full bg-white">
//             <div className="text-3xl font-extrabold text-orange-500">
//                 Todo 리스트 페이지 (List Page Component)
//             </div>
//         </div>
//     );
// }
// export default ListPage;

import { useSearchParams } from "react-router-dom";

const ListPage = () => {

    const [queryParams] = useSearchParams()

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    return (
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold text-orange-500">
                Todo 리스트 페이지 (List Page Component)  {page} 에서 부터 {size} 까지
            </div>
        </div>
    );
}
export default ListPage;