// const BasicLayout = ({children}) => {
//   return ( 
//    <>
//     <header className="bg-teal-400 p-5">
//      <h1 className="text-2xl md:text-4xl">
//         Header
//      </h1>
//     </header>
//     <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row
//     md:space-x-4 md:space-y-0">
//         <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
//             {children}
//         </main>
//         <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
//             <h1 className="text-2xl md:text-4xl">
//                 Sidebar
//             </h1>
//         </aside>

//      </div>
//     </>
//      );
//    }
// export default BasicLayout;

// //#2
// import BasicMenu from "../components/menus/BasicMenu";

// const BasicLayout = ({children}) => {
//   return ( 
//    <>
//    <BasicMenu></BasicMenu>  
//     {/* <header className="bg-teal-400 p-5">
//      <h1 className="text-2xl md:text-4xl">
//         Header
//      </h1>
//     </header> */}
//     <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row
//     md:space-x-4 md:space-y-0">
//         <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
//            <h1 className="text-2xl md:text-4xl"> {children} </h1> 
//         </main>
//         <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
//             <h1 className="text-2xl md:text-4xl">
//                 Sidebar
//             </h1>
//         </aside>

//      </div>
//     </>
//      );
//    }
// export default BasicLayout;

//#3 하위 경로 설정
import BasicMenu from "../components/menus/BasicMenu";

const BasicLayout = ({children}) => {
  return ( 
   <>
   <BasicMenu />
    {/* <header className="bg-teal-400 p-5">
     <h1 className="text-2xl md:text-4xl">
        Header
     </h1>
    </header> */}
    {/* 상단 여백 my-5(상/하 마진) 제거 */}
    <div className="bg-white w-full flex flex-col space-y-4 md:flex-row
     md:space-y-0 ">
        {/* py(위/아래 패딩)-40  --> py-5 */}
        <main className=" md:w-4/5 lg:w-3/4 px-5 py-20">
           <h1 className="text-2xl md:text-4xl"> 
               {children}
           </h1> 
        </main>
        <aside className=" md:w-1/5 lg:w-1/4 px-5 py-20">
            <h1 className="text-2xl md:text-4xl">
                Sidebar
            </h1>
        </aside>

     </div>
    </>
     );
   }
export default BasicLayout;