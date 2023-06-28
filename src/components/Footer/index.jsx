import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function Footer(){
  return (
    <section className="bg-black">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-300">
                        About
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-300">
                        Blog
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-300">
                        Team
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-300">
                        Pricing
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-300">
                        Contact
                    </a>
                </div>
                <div className="px-5 py-2">
                    <a href="#" className="text-base leading-6 text-gray-500 hover:text-gray-300">
                        Terms
                    </a>
                </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">                
                <a href="https://www.instagram.com/lets.codegirl/" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon />                    
                </a>
                <a href="https://github.com/lesantosx" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">GitHub</span>
                    <GitHubIcon />                    
                </a>
            </div>
            <p className="mt-8 text-base leading-6 text-center text-gray-400">
                © 2023 lesantosx
            </p>
        </div>
    </section>
  )
}