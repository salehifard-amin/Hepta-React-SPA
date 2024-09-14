import { Fragment } from "react";
import "./style.css"
export default function WelcomeSection( { image , title , description } ) {
    return (
        <Fragment>
            <div class="introduction container">
            <div class="padding-section">
                <div class="grid align-center">
                    <div class="left-item col-6 pr-30">
                        <img src= {image} className="width-100" />
                    </div>
                    <div class="right-item col-6 pl-30">
                        <h2 class="font-30 mb-30">{title}</h2>
                        <p class="font-18"> {description} </p>
                        <p class="font-18">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <a href="#" class="play trans-250ms flex align-center uppercase">
                            <i class="fa-solid fa-play"></i>
                            <span>watch the video</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}