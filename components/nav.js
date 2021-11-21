import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import { MenuAlt3Icon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { useRouter } from 'next/router'

const LINKS = [
    {title: 'About', link: '/'},
    {title: 'Posts', link: '/posts'}, 
    {title: 'Publications', link: '/publications'},
    {title: 'Research', link: '/research'},
    {title: 'Videos', link: '/videos'},
    {title: 'Photo Stories', link: '/photos'}
];
const SOCIALS = [
    // {title: 'Insta', image: 'instagram.png'},
    {title: 'LinkedIn', image: 'linkedin.png'},
    {title: 'Twitter', image: 'twitter.png'},
]

const FooterItem = ({image, title, url, key}) => (
    <a
    href={url}
    key={key} 
    className='flex flex-col cursor-pointer group space-y-4'
    >
        <img src={`/${image}`} className="w-12 h-12 group-hover:scale-125 transition-transform duration-500"/>
        <p className="opacity-0 group-hover:opacity-100 text-left">{title}</p>
    </a>
)

function Nav() {
    const router = useRouter();
    const [isVisible, toggleIsVisible] = useState(false); 

    const toggleMenu = () => toggleIsVisible(!isVisible)

    const renderMenu = (isHidden = true) => {
        return (
            <ul className={`${isHidden && "hidden"} md:flex flex-col justify-between space-y-3`}>
                {LINKS.map((link) => {
                    const isCurrentPage = router.route === link.link;
                    return (
                        <li className="hover:scale-y-125 transition duration-500">
                            <a 
                            onClick={() => router.push(`${link.link}`)} 
                            className={`text-xs p-2 rounded-lg md:text-xl hover:text-yellow-800 ${ isCurrentPage ? 'text-yellow-800 bg-gray-200' : ' '} cursor-pointer`}>
                                {link.title}
                            </a>
                        </li>  
                )})}
            </ul>
        )
    }

    const renderFooter = () => (
        <div className="hidden md:flex space-x-4">
            {SOCIALS.map(({title, image}) => <FooterItem key={title} title={title} image={image}/>)}
        </div>
    )

    const renderMobileMenu = () => {
        const iconStyle = "h-8 w-8";
        return (
        <div className="md:hidden">
            {isVisible ? <ChevronDownIcon onClick={toggleMenu} className={iconStyle} /> : <MenuAlt3Icon onClick={toggleMenu} className={iconStyle} />}
            {isVisible && 
            <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg">
                <ul className="px-2 py-2 bg-white rounded-md shadow">
                    {LINKS.map((link) => {
                        const isCurrentPage = router.route === link.link;
                        return (
                            <li>
                                <a
                                className="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                >{link.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            }
        </div>
    )}

    // console.log(router.route);
    return (
        <nav className='flex w-full p-8 justify-between md:w-1/5 md:flex-col md:justify-start md:items-start md:mb-8 md:px-4 md:py-0 md:space-y-8 md:border-r border-gray-400'>
                <div className="hidden md:flex">
                    <img alt='Profile Picture' className="md:w-200 md:h-200 rounded-md" src={'/profile.jpeg'} />
                </div>
                <div>
                    <a href="/" className="md:text-xl font-semibold hover:text-yellow-800 transition duration-300">Hajira Maryam</a>
                </div>
                {renderMenu(true)}
                {renderFooter()}
                {renderMobileMenu()}
        </nav>
    )    
}

export default Nav;