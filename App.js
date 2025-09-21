import {React} from "react"
import ReactDom from 'react-dom/client'
const Header = ()=>{
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src='./img/imag.jpg'/>
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
const AppLayout = ()=>{
    return (
        <div className='app'>
            <Header/>
        </div>
    )
}

console.log(ReactDom,"chekcing the reactdom..")
const root = ReactDom.createRoot(document.getElementById('root'))
const renderCompound = root.render(<AppLayout/>)

export {renderCompound}