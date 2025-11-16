import { createRoot } from "react-dom/client";
import { createBrowserRouter,Route,RouterProvider } from "react-router-dom";
import { About } from "./src/components/About";
import Error from "./src/components/Error";

const styledCard = {
    backgroundColor:'#f0f0f0'
}


const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src='./img/imag.jpg' />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestroCard = () => {
    return (
        <div className="res-card" style={styledCard}>
            <img className="res-logo" src="https://expressinnindia.com/wp-content/uploads/2022/08/ASTER-2-scaled.jpg" />
            <h3>Stande Foods</h3>
            <h4>North Indian, Chinese</h4>
            <h4>45 mins</h4>
            <h4>4.2 stars</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search comming soon..</div>
            {/* restro card container  */}
            <div className="res-container">
                <RestroCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Body/>
        </div>
    )
}

// created at the bottom because if created at top we get error : can't access AppLayout before intialization 


const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:'/about',
        element:<About/>
    }
])

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

