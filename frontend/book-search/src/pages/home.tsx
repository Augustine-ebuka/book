import Header from "../component/header";
import Search from "../component/search";

function Home() {
    return ( 
        <>
        <Header text="Welcome to your book search app" />
        <Search></Search>
        </>
     );
}

export default Home;