import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, Outlet, Route, RouterProvider } from "react-router-dom";
import { About } from "./src/About/components/About";
import Contact from "./src/Contact/components/Contact";
import Others from "./src/Others/components/Others";
import Error from "./src/Error";
import {Home} from "./src/Home/components/Home";
import CompanyCard from "./src/Home/components/CompanyCard";



const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src='./img/imag.jpg' />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Me</Link></li>
                    <li><Link to='/contact'>Contact Me</Link></li>
                    <li><Link to='/others'>Others</Link></li>
                </ul>
            </div>
        </div>
    )
}



const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet />
        </div>
    )
}

// created at the bottom because if created at top we get error : can't access AppLayout before intialization 


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
               path:'/',
               element: <Home/>
            },
            {
                path: '/about',
                element: <About name={"dinesh..kumar."} />
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/others',
                element:<Others/>
            },
            {
                path:'/experience/:orgId',
                element:<CompanyCard/>
            }
        ],
        errorElement: <Error/>
    }

])

const root = createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

