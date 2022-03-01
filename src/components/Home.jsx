import React from "react";
import "./Styles-pages/Home.css"
import HimgPC from "./../assets/images/desktop/image-hero.jpg"
import HimgMB from "./../assets/images/mobile/image-hero.jpg"
import MimgPC from "./../assets/images/desktop/image-interactive.jpg"
import MimgMB from "./../assets/images/mobile/image-interactive.jpg"
import Creations from "./Creations/Creations"
import { CreationsData } from "./data";
import Footer from "./Nav-footer/Nav-footer"

const Home = () => {

  return (
    <>
      <header className="Header">
        <img src={HimgPC} alt="header-IMG" className="Header-imgPC" />
        <img src={HimgMB} alt="header-IMG" className="Header-imgMB" />
        <div className="div-p-header">
          <p className="p-header">Immersive experiences that deliver</p>
        </div>
      </header>

      <main>
          <article className="article1">
            <img src={MimgPC} alt="main-img" className="Main-imgPC" />
            <img src={MimgMB} alt="main-img" className="Main-imgMB" />
            <div className="main-TEXT">
              <h1 className="h1-main">The leader in interactive VR</h1>
              <p className="p-main">Founded in 2011, Loopstudios has been producing world-class virtual reality 
                  projects for some of the best companies around the globe. Our award-winning 
                  creations have transformed businesses through digital experiences that bind 
                  to their brand.</p>
            </div>
          </article>
          <article className="article2">
              <h1 className="h1-main-article2">Our creations</h1> 
              <button className="BTNall">see all</button>
            <div className="Creations">
                {CreationsData.map((data, key) => {
                  return (
                    <div key={key}>
                      <Creations title={data.title} imgSrc={data.imgSrc} link={data.link} MbileImgSrc={data.MbileImgSrc}/>
                    </div>
                  );
                })}
            </div>
          </article>
      </main>

      <footer className="footer-home">   
        <Footer />
      </footer>
    </>
  )
};
export default Home;
