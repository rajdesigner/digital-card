import React from "react"
import ReactDOM from "react-dom"
import MyImage from "./components/MyImage";
import Intro from "./components/Intro";
import Button from "./components/Button";
import StaticContent from "./components/StaticContent";
import Footer from "./components/Footer";
export default function App(){
    return(
        <div className="container">
            <MyImage/>
            <div className="main-content">
                <Intro/>
                <div className="btn-container">
                    <Button classname = "btn-email" title="Email"/>
                    <Button classname = "btn-linkedIn" title="LinkedIn"/>
                </div>
                
                <div>
                    <StaticContent title="About" text ="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."/>
                
                    <StaticContent title="Interests" text ="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."/>
                </div> 
                
                <div className="footer">
                    <Footer/>
                </div>           
            </div>
        </div>
    )
}