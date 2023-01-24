
export default function Hero() {

    return (
        <div className="flex md:flex-row flex-col md:mt-60 mt-48 md:mb-48 mb-24 max-w-5xl ml-auto mr-auto">

            <div className="flex flex-col md:justify-center md:items-start">
                <h1 className="font-open-sans font-bold md:text-6xl mr-8 ml-8 text-4xl">
                    One Platform <br/>
                    to <span className="text-zoom-blue">connect</span>
                </h1>

                <p className="font-open-sans font-medium md:ml-8 md:mr-8 mt-4 mr-8 ml-8 max-w-5xl">
                  Bring teams together, reimagine workspaces, engage new 
                  audiences, and delight your customers - all on the
                  Zoom platform you know and love.
                </p>

                <button className="button2 md:mt-10 mt-10 ml-auto mr-auto">
                    Sign up for free!
                </button>
            </div>

            <div className="md:mr-10 md:ml-10">
                <img className="md:w-140 w-auto md:rounded-3xl md:mt-0 mt-12" src='https://st1.zoom.us/static/6.3.10973/image/home2/slide1-4.jpg' alt="" /> {/* Change later*/}
            </div>

            
            
        </div>
        
    )
}

// background-image: url('https://st1.zoom.us/static/6.3.10973/image/home2/slide1-4.jpg');