import React from "react";
import AboutHero from "../components/aboutHero";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import bg from "../assets/imagens/bg.png"


const AboutPage = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                <AboutHero Img={bg}/>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default AboutPage