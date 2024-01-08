import { ReactNode } from "react";

interface text{
    text:ReactNode 
}
function Header({text}:text) {
    return ( 
        <div className="p-2 mt-2 mb-2 bg-blue-600 border-gray-400">
            <p className="text-white p-3 font-extrabold text-4xl text-center font-primary">{text}</p>
        </div>
     );
}

export default Header;