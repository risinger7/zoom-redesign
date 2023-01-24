import zoomLogo from "./assets/zoomLogo.svg" 
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {

    return (
        
        <nav className="flex flex-row justify-between items-center h-24 fixed top-0 w-full bg-white">

            <div className="flex">

                <img className="ml-8" src={zoomLogo} alt="Zoom-logo" />

                <ul class="hidden lg:flex text-base text-gray-500 font-open-sans font-regular space-x-6 ml-8">
                    <li className="hover:text-zoom-blue">Products</li>
                    <li className="hover:text-zoom-blue">Solutions</li>
                    <li className="hover:text-zoom-blue">Resources</li>
                    <li className="hover:text-zoom-blue">Plans & Pricing</li>
                </ul>

            </div>
            

            <div className="flex justify-items-end no-wrap space-x-4 min-w-40 mr-8">
                <button className="hover:bg-zoom-blue hover:text-white hover:border-0 hidden md:block button min-w-40 text-zoom-blue">Contact Sales</button>
                <button className="hover:bg-zoom-blue hover:text-white button">Sign up</button>
                
                <div className="w-10 items-end block lg:hidden">
                    <RxHamburgerMenu color={"#0b5cff"} size={40}/>
                </div>
            </div>

            
               
        </nav>
        
    )
}