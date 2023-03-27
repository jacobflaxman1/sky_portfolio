import "./Hero.css"
import React, {useState, useEffect, forwardRef} from "react"
import transparent_back_sky from  '../../Assets/transparent_back_sky.png'

const Hero = forwardRef(function Hero(props, ref) {

    const letters = ['S', 'K', 'Y', 'F', 'O', 'R', 'N', 'O','W']

    const [isScrolling, setIsScrolling] = useState(false)
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsScrolling(true)
        }
        else {
            setIsScrolling(false)
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, true)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const HeaderLetters = letters.map((letter, index) =>
        <h1 key={index} className={isScrolling ? "header_letter_scroll" : "header_letter"}>{letter}</h1>);


    return (
        <div className={"hero_wrapper"} ref={ref}>
            <div className={"text_wrapper"}>
                {HeaderLetters}
            </div>
            <img src={transparent_back_sky} className={isScrolling ? "sky_transparent" : "sky_transparent img_header_scroll"}/>
        </div>
    )
})

export default Hero
