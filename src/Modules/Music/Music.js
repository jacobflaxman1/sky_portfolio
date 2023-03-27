import "./Music.css"
import React, { forwardRef } from "react"
import DemosIII from '../../Assets/DemosIII.jpg'

const Music = forwardRef(function Music(props, ref) {
    return (
        <div className={"music_wrapper"} ref={ref}>
            <div className={"album_wrapper"}>
                <img src={DemosIII} className={"demos_img"}/>
                <iframe
                    src="https://open.spotify.com/embed/track/0scbSKFKjTrngJUFrz9twe?utm_source=generator" width="20%"
                    height="100" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
            <div className={"album_wrapper"}>
                <img src={DemosIII} className={"demos_img"}/>
                <iframe
                    src="https://open.spotify.com/embed/track/0scbSKFKjTrngJUFrz9twe?utm_source=generator" width="20%"
                    height="100" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
            <div className={"album_wrapper"}>
                <img src={DemosIII} className={"demos_img"}/>
                <iframe
                    src="https://open.spotify.com/embed/track/0scbSKFKjTrngJUFrz9twe?utm_source=generator" width="20%"
                    height="100" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
            <div className={"album_wrapper"}>
                <img src={DemosIII} className={"demos_img"}/>
                <iframe
                    src="https://open.spotify.com/embed/track/0scbSKFKjTrngJUFrz9twe?utm_source=generator" width="20%"
                    height="100" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
            <div className={"album_wrapper"}>
                <img src={DemosIII} className={"demos_img"}/>
                <iframe
                    src="https://open.spotify.com/embed/track/0scbSKFKjTrngJUFrz9twe?utm_source=generator" width="20%"
                    height="100" frameBorder="0" allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
        </div>
    )
})

export default Music