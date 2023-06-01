import React from "react"
import './Home.css'
import { Navbar } from "../Components/Navbar"
import { Footer } from "../Components/Footer"

export const Home = () => {

    let bodyImage = require('../Images/home-page-img1.jpg')
    let actionImage = require('../Images/god-of-war.jpg')
    let rpgImage = require('../Images/witcher-3.jpg')
    let fpsImage = require('../Images/cod-mw.jpg')
    return(
        <div>
            <Navbar/>
        <div className="home-body">
            <div className="body-first-container">
                <img src={bodyImage} alt="home wallpaper" className="home-img"/>
                <div className="img-text-section">
                <h1> Welcome Gamers, to Syed's Arcade. </h1>
                <br/>
                <h2> Curated games for you </h2>
                {/* <input placeholder="Search"/> */}
                </div>
            </div>

            <h1 className="heading"> Highest Selling video games by Genre: </h1>

            <div className="layout">
                <div className="home-card action">
                    <img src={actionImage} alt="" className="home-card-img" />

                    <div className="home-card-body">
                        <h1 className="home-card-heading">Action</h1>
                        <h2 className="home-card-sub-heading">Find our best action games</h2>
                        <p className="home-card-info">
                            Immerse yourself into the best action games that are on the market. These are games of genre that emphasize physical challenges, including hand-eye coordination and reaction times. We have included only the games that offer good narratives.
                        </p>
                        <button className="home-card-btn">View Games</button>
                    </div>
                </div>

                <div className="home-card rpg">
                    <img src={rpgImage} alt="" className="home-card-img" />

                    <div className="home-card-body">
                        <h1 className="home-card-heading">RPG</h1>
                        <h2 className="home-card-sub-heading">Find our best role playing games</h2>
                        <p className="home-card-info">
                            RPGs are role playing games. These are games where YOU assume the role of a character that you can customize as you take on a ficitional setting. Your decisions, lead to multiple outcomes and different story narratives. 
                        </p>
                        <button className="home-card-btn">View Games</button>
                    </div>
                </div>

                <div className="home-card fps">
                    <img src={fpsImage} alt="" className="home-card-img" />

                    <div className="home-card-body">
                        <h1 className="home-card-heading">FPS</h1>
                        <h2 className="home-card-sub-heading">Find our best shooter games</h2>
                        <p className="home-card-info">
                            FPS are first person shooter games. Centered on a gun and other weapon-based combat in a first-person perspective, with the player experiencing the action through the eyes of the protagonist who is armed in a three-dimensional space. 
                        </p>
                        <button className="home-card-btn">View Games</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}