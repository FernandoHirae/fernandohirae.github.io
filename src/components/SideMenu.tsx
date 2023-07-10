import Link from 'next/link'

function SideMenu() {
    return (
        <div>
            <ul className="fixed top-20 flex flex-col text-xs right-1 h-screen text-white font-bold gap-1 lg:bg-transparent lg:gap-12 lg:top-1/3 xl:right-20 lg:text-sm">
                <li>
                    <Link href="/" className="flex flex-row items-center lg:gap-4">
                        <svg className="h-6 lg:h-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#f0f0f0" viewBox="0 0 256 256"><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path></svg>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/Projects" className="flex flex-row items-center lg:gap-4">
                        <svg className="h-6 lg:h-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><rect x="32" y="56" width="192" height="144" rx="16" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></rect><path d="M32,120H88.8a7.9,7.9,0,0,1,7.8,6.4,32.1,32.1,0,0,0,62.8,0,7.9,7.9,0,0,1,7.8-6.4H224" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><line x1="32" y1="88" x2="224" y2="88" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line></svg>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link href="/AboutMe" className="flex flex-row items-center lg:gap-4">
                        <svg className="h-6 lg:h-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="96" r="64" fill="none" stroke="#ffffff" strokeMiterlimit="10" strokeWidth="16"></circle><path d="M31,216a112,112,0,0,1,194,0" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
                        About Me
                    </Link>
                </li>

                <li>
                    <Link href="/Contact" className="flex flex-row items-center lg:gap-4">
                        <svg className="h-6 lg:h-auto" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
};

export default SideMenu;