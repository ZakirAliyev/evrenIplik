import './index.scss';
import image1 from "/src/assets/Rectangle 4.webp"
import image2 from "/src/assets/carpet vector 1.png"

function Hero() {
    return (
        <section id="hero">
            <img className={"img"} src={image1} alt={"Image"}/>
            <img className={"img1"} src={image2} alt={"Image"}/>
            <img className={"img2"} src={image2} alt={"Image"}/>
            <div className={"text"}>
                <div className={"text2"}>Discover the Timeless Beauty of Rugs Woven <span style={{
                    fontFamily: 'Poppins',
                    fontSize: '25px',
                }}>&</span> With Centuries of Tradition
                </div>
                <div className={"text1"}>Hand-woven masterpieces that carry the warmth, soul, and heritage of
                    generations into your home.
                </div>
            </div>
        </section>
    );
}

export default Hero;