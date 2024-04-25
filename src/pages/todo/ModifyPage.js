// function ModifyPage({tno}) {}
// const ModifyPage = ({ tno }) => {
//     return (
//         <div className="text-3xl font-extrabold text-center">
//             Todo 수정/삭제 페이지(Modify Page)
//         </div>
//     );
// }
// export default ModifyPage;

//# 2. 수정/삭제 처리 후 이동
import { useNavigate } from "react-router-dom";

const ModifyPage = ({ tno }) => {

    const navigate = useNavigate()
    const moveToRead = () => {
        navigate({ pathname: `/todo/read/${tno}` })
    }

    const moveToList = () => {
        navigate({ pathname: `/todo/list` })
    }

    return (
        <div className="text-3xl font-extrabold text-center">
            Todo 수정/삭제 페이지(Modify Page)
        </div>
    );
}
export default ModifyPage;