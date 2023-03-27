import './NavBar.css'
import React, {useRef, useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSoundcloud, faSpotify} from "@fortawesome/free-brands-svg-icons";
function NavBar(props) {

    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false)
    const handleScroll = () => {
        if (window.scrollY >= 3000) {
            setIsScrolledToBottom(true)
        }
        else {
            setIsScrolledToBottom(false)
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className={"nav_wrapper"}>
            <div className={"links_wrapper"}>
                <FontAwesomeIcon className={"link_icon"} icon={faSpotify} size="2xs"/>
                <FontAwesomeIcon className={"link_icon"} icon={faSoundcloud} size="2xs"/>
            </div>
            <ul>
                <li
                    className={isScrolledToBottom ? "a_black": "a_orange"}
                    onClick={() => props.parent_refs[2].current.scrollIntoView( { behavior: "smooth" })}
                >
                    Home
                </li>
                <li
                    className={isScrolledToBottom ? "a_black": "a_orange"}
                    onClick={() => props.parent_refs[0].current.scrollIntoView( { behavior: "smooth" })}
                >
                    About
                </li>
                <li
                    className={isScrolledToBottom ? "a_black": "a_orange"}
                    onClick={() => props.parent_refs[1].current.scrollIntoView( { behavior: "smooth" })}
                >
                    Music
                </li>
            </ul>
        </div>
    )
}

export default NavBar
