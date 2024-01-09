import { ReactNode } from "react";

interface text{
    text:ReactNode 
}
function Header({text}:text) {
    return ( 
        <div className="p-2 mt-2 mb-2 border-2-blue rounded-md">
            <p className="text-blue-400 p-3 font-extrabold text-2xl text-center font-primary">{text}</p>
        </div>
     );
}

export default Header;