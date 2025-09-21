import { createRoot } from "react-dom/client";


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
        <div className="res-card" >
            <h3>Stande Foods</h3>
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

const root = createRoot(document.getElementById('root'));
root.render(<AppLayout />);

