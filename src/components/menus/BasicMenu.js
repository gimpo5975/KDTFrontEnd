import { Link } from "react-router-dom";

const BasicMenu = () => {
    return(
        <nav id="navbar" className="flex ">
            <div className="w-4/5">
                <ul className="flex p-4 ">
                    <li className="pr-6 text-2xl">
                        <Link to={"/"}>Main</Link>
                    </li>

                    {/* /todo/ 위해 추가 부분 */}
                    <li className="pr-6 text-2xl">
                        <Link to={"/about"}>About</Link>
                    </li>                    
                    <li className="pr-6 text-2xl">
                        <Link to={"/todo/"}>Todo</Link>
                    </li>

                </ul>
            </div>

            <div className="w-1/5 flex justify-end  p-4 font-medium">
                <div className=" text-2xl m-1 rounded">
                    Login
                </div>
            </div>
        </nav>
    );
}

export default BasicMenu;