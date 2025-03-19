import Logo from '../../assets/images/logo.svg';
import '../styles/Header.css';
import SearchIcon from '../../assets/images/bx-search.svg'
export default function Header() {
    return (
        <header >
            <div className="grid grid-cols-2 gap-4  ">
                <div className='right-section '>
                    <div className='flex  items-center p-4 space-x-4 '>
                        <img src={Logo} alt="" />
                        <ul className="flex justify-end space-x-4 text-white font-bold text-xl">
                            <li><a href="#">VISIT</a></li>
                            <li><a href="#" className="active">SEE & DO</a></li>
                            <li><a href="#">COLLECTION</a></li>
                            <li><a href="#">ABOUT US</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1>
                            SEE & DO
                        </h1>
                        <h2>Discover exhibitions and activities at the Frans Hals Museum</h2>
                    </div>
                </div>
                <div className='left-section'>
                    <div className='flex  items-center p-4 space-x-4 '>
                        <img src={SearchIcon} alt="" />
                        <div className="language-switch rounded-[10px] border-[2px] border-white font-bold text-md text-white px-[10px] py-[10px] space-x-2">
                            <span>NL</span> <span className="active ">EN</span>
                        </div>
                        <button> </button>
                    </div>
                </div>
            </div>

        </header>
    )
}