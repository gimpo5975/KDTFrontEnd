// const ReadPage = () => {
//     return (
//         <div className="text-3xl font-extrabold text-center text-neutral-50 bg-lime-900">
//             Todo 조회 페이지(Read Page Component)
//         </div>
//     );
// }
// export default ReadPage;

//#2 
// import { useParams } from "react-router-dom";

// const ReadPage = () => {
//     const { tno } = useParams()
//     return (
//         <div className="text-3xl font-extrabold text-center text-neutral-50 bg-lime-900">
//             Todo 조회 페이지(Read Page Component) {tno}
//         </div>
//     );
// }
// export default ReadPage;


//#3  조회 -> 수정/삭제 이동
// import { useCallback } from "react";
// import { useNavigate, useParams } from "react-router-dom";


// const ReadPage = (props) => {
//     // function ReadPage(props) {
//     const { tno } = useParams()

//     const navigate = useNavigate()
//     const moveToModify = useCallback((tno) => {
//         navigate({ pathname: `/todo/modify/${tno}` })
//     }, [tno])

//     return (
//         <div className="text-3xl font-extrabold text-center text-neutral-50 bg-lime-900">
//             Todo 조회 페이지(Read Page Component) {tno}

//             <div>
//                 <button onClick={() => moveToModify(123)} >Test 수정/삭제(Modify)</button>
//             </div>
//         </div>
//     );
// }
// export default ReadPage;

//#4 쿼리스트링의 유지
// import { useCallback } from "react";
// import { useNavigate, useParams, createSearchParams, useSearchParams } from "react-router-dom";


// const ReadPage = (props) => {
//     // function ReadPage(props) {
//     const { tno } = useParams()

//     const navigate = useNavigate()

//     const [queryParams] = useSearchParams()
//     const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
//     const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

//     const queryStr = createSearchParams({ page, size }).toString()

//     const moveToModify = useCallback((tno) => {
//         navigate({
//             pathname: `/todo/modify/${tno}`,
//             search: queryStr
//         })
//     }, [tno, page, size])

//     return (
//         <div className="text-3xl font-extrabold text-center text-neutral-50 bg-lime-900">
//             Todo 조회 페이지(Read Page Component) {tno}

//             <div>
//                 <button onClick={() => moveToModify(tno)} >Test 수정/삭제(Modify)</button>
//             </div>
//         </div>
//     );
// }
// export default ReadPage;

//#5  조회 -> 목록 이동
import { useCallback } from "react";
import { useNavigate, useParams, createSearchParams, useSearchParams } from "react-router-dom";


const ReadPage = (props) => {
    // function ReadPage(props) {
    const { tno } = useParams()

    const navigate = useNavigate()

    const [queryParams] = useSearchParams()
    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({ page, size }).toString()

    const moveToModify = useCallback((tno) => {
        navigate({
            pathname: `/todo/modify/${tno}`,
            search: queryStr
        })
    }, [tno, page, size])


    const moveToList = useCallback(() => {
        navigate({
            pathname: `/todo/list`,
            search: queryStr
        })
    }, [page, size])



    return (
        <div className="text-3xl font-extrabold text-center text-neutral-50 bg-lime-900">
            Todo 조회 페이지(Read Page Component) {tno}

            <div>
                <button onClick={() => moveToModify(tno)} >Test 수정/삭제(Modify)</button>
                <br />
                <button onClick={() => moveToList()} >Test 리스트(List)</button>
            </div>
        </div>
    );
}
export default ReadPage;