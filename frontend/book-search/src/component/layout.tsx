import { ReactNode } from "react";

interface layoutProps{
    children: ReactNode
}
function Layout({children}:layoutProps) {
    return (  
        <div className=" p-6 mr-auto ml-auto ">
            {children}
        </div>
    );
}

export default Layout;