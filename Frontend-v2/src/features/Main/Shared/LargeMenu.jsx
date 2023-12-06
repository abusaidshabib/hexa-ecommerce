import { Link } from "react-router-dom";
import { menu } from "../../../json/main";

const LargeMenu = () => {
    return (
        <div className="bg-dark2 h-12">
            <ul className="list-none flex justify-center text-light1 gap-8 items-center h-full capitalize">
                {
                    menu.map((data)=>(
                        <li className="text-sm" key={data?.id}>
                            <Link to={data?.url}>{data?.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default LargeMenu;