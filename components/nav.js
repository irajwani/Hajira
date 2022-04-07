import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import { MenuAlt3Icon } from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/outline'

import { useRouter } from 'next/router'

const LINKS = [
    {title: 'About', link: '/'},
    // {title: 'Posts', link: '/posts'}, 
    {title: 'Publications', link: '/publications'},
    // {title: 'Research', link: '/research'},
    {title: 'Videos', link: '/videos'},
    {title: 'Photo Stories', link: '/photos'}
];
const SOCIALS = [
    // {title: 'Insta', image: 'instagram.png'},
    { title: 'LinkedIn', image: 'linkedin.svg', url: 'https://www.linkedin.com/in/hajiramaryam/'},
    { title: 'Twitter', image: 'twitter.svg', url: 'https://twitter.com/hajiramirza'},
]

const FooterItem = ({image, url, key}) => (
    <a
    href={url}
    key={key} 
    className='flex flex-col transition duration-300 cursor-pointer hover:opacity-40'
    >
        <img src={`/${image}`} className="w-8 h-8"/>
        {/* <p className="text-left opacity-0 group-hover:opacity-100">{title}</p> */}
    </a>
)

function Nav() {
    const router = useRouter();
    const [isVisible, toggleIsVisible] = useState(false); 

    const toggleMenu = () => toggleIsVisible(!isVisible)

    const renderMenu = () => {
        return (
            <ul className="flex-col justify-between hidden space-y-3 md:flex">
                {LINKS.map((link) => {
                    const isCurrentPage = router.route === link.link;
                    return (
                        <li>
                            <a 
                            onClick={() => router.push(`${link.link}`)} 
                            className={`text-s hover:text-gray-400 ${ isCurrentPage ? 'border-b-2 border-brown' : ' '} cursor-pointer`}>
                                {link.title}
                            </a>
                        </li>  
                )})}
            </ul>
        )
    }

    const renderFooter = () => (
        <div className="flex flex-row pt-4 space-x-2">
            {SOCIALS.map(({title, image, url}) => <FooterItem key={title} image={image} url={url}/>)}
        </div>
    )

    const renderMobileMenu = () => {
        const iconStyle = "h-8 w-8 opacity-80";
        return (
        <div className="md:hidden">
            {isVisible ? <ChevronDownIcon onClick={toggleMenu} className={iconStyle} /> : <MenuAlt3Icon onClick={toggleMenu} className={iconStyle} />}
            {isVisible && 
            <div className="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg">
                <ul className="px-2 py-2 rounded-md shadow bg-paper">
                    {LINKS.map((link) => {
                        const isCurrentPage = router.route === link.link;
                        return (
                            <li key={link}>
                                <a
                                onClick={() => {
                                    toggleIsVisible(false);
                                    router.push(`${link.link}`);
                                }}
                                    className={`block px-4 py-2 mt-2 md:mt-0 focus:outline-none focus:shadow-outline`}
                                >
                                    <p className={`text-sm font-semibold bg-transparent ${isCurrentPage ? 'text-brown' : ' '} focus:text-brown hover:text-brown`}>
                                        {link.title}
                                    </p>
                                </a>
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
        <nav className='flex justify-between w-full md:w-1/5 md:flex-col md:flex-none md:justify-start md:items-start md:mb-8 md:px-4 md:py-0 md:space-y-8'>
        
            <div>
                <a href="/" className="text-2xl font-normal text-gray-700 transition duration-300 hover:text-gray-400 md:text-2xl ">Hajira Maryam</a>
                {renderFooter()}
            </div>
            {renderMenu()}
            {renderMobileMenu()}
        </nav>
    )    
}

export default Nav;

{/* <div className="hidden md:flex">
                <img alt='Profile Picture' className="rounded-md md:w-200 md:h-200" src={'/profile.jpeg'} />
            </div> */}