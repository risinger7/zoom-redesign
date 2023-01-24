import zmProductWheel from "./assets/zm-product-wheel.png"

export default function MakeWork() {


    return (
        <div className="flex md:flex-row flex-col items-center justify-center bg-zoom-blue md:h-72 h-auto">   

            <div>
                <img className="wheel md:ml-8 mt-8" src={zmProductWheel} alt="" />
            </div>        
            
            <div className=" text-white flex flex-col md:p-8 pl-8 md:max-w-xl max-w-sm space-y-4 md:mb-0 md:mt-0 mt-4 mb-12">
                <h1 className="md:text-5xl text-3xl font-handwriting font-bold">Make work less work!</h1>
                <p>Securely connect and collaborate so you can work better together. 
                    Simple to manage and delightful to use, Zoom powers the modern workforce.
                </p>
                <a href="https://zoom.us/" className="font-bold text-xl underline underline-offset-8 hover:text-gray-300">Discover the Possibilities</a>
            </div>
        </div>
    )
}