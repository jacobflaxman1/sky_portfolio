import './About.css'
import React, {forwardRef, useEffect} from 'react'
import text from './about_text.js'
import sky_robo from '../../Assets/sky_robo.png'

const About = forwardRef(function About(props, ref) {

    const colors = ['#16B1E0', '#304ACF', '#191F5C', '#DA0150', '#F2C50F', '#4CC273']
    const rand_text = []
    for (let i = 0; i < 50; i++) {
        rand_text[i] = "SKYFORNOW"
    }
    let rand_color = 0
    let rand_comp = rand_text.map((c) => {
        rand_color = Math.floor((Math.random() * colors.length))
        return (
            <div className={"rand_text"}
                 style={{
                     position: "relative",
                     color: colors[rand_color]
                 }}>
                {c}
            </div>
        )
    })

    return (
        <div className={"about_wrapper"} ref={ref}>
            <div className={"rand_wrapper"}>
                {rand_comp}
            </div>
            <div className={"rand_wrapper"}>
                {rand_comp}
            </div>
            <div className={"rand_wrapper"}>
                {rand_comp}
            </div>
            <div className={"about_text_wrapper"}>
                <img src={sky_robo} className={"sky_robo"} style={{'-webkit-box-shadow': "10px 10px 0px #07bccc,\n" +
                        "    15px 15px 0px #e601c0,\n" +
                        "    20px 20px 0px #e9019a,\n" +
                        "    25px 25px 0px #f40468,\n" +
                        "    45px 45px 10px #482896;"}}/>
                <p className={"about_text"}>
                    {text}
                </p>
                <img src={sky_robo} className={"sky_robo"}/>
            </div>
            <div className={"rand_wrapper_bottom"}>
                {rand_comp}
            </div>
            <div className={"rand_wrapper_bottom"}>
                {rand_comp}
            </div>
            <div className={"rand_wrapper_bottom"}>
                {rand_comp}
            </div>
        </div>
    )
})
export default About