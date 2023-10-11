import {data_MacBook_product} from "../data/data_MacBook";
export function Menu({ onAddProduct }){
    const handleAddProduct = () => {
        const newProduct = {
            name: data_MacBook_product.name,
            level: data_MacBook_product.level,
            category: data_MacBook_product.category,
            code_barre: data_MacBook_product.code_barre,
        };
        onAddProduct(newProduct);
    }

    return(

        <nav className=" border-gray-200 bg-gray-900">
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl mr-0 ml-0 p-1" >
                <a href="https://flowbite.com" className="flex items-center">
                    <img src="/picture/logo1.svg" className="h-16 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">My product App</span>
                </a>
                <div className="flex items-center md:order-2">
                    <a href="#" className="text-white   focus:ring-4  font-medium rounded-lg text-sm px-1 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Login</a>
                    <button data-collapse-toggle="mega-menu-icons" type="button" className=" ml-auto inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700" aria-controls="mega-menu-icons" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div id="mega-menu-icons" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                        <button type="button"  onClick={handleAddProduct} className="text-white bg-green-900 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Ajouter</button>

                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 border-b md:border-0 md:p-0 text-blue-500 md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700" aria-current="page">Home</a>
                        </li>
                        <li>
                            <button id="mega-menu-icons-dropdown-button" data-dropdown-toggle="mega-menu-icons-dropdown" className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium border-b md:w-auto md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-blue-500 md:hover:bg-transparent border-gray-700">
                                Rayons
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}