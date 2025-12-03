import './index.scss';
import image1 from "/src/assets/sekil1.png"
import image2 from "/src/assets/favicon.png"
import image3 from "/src/assets/sekil2.png"
import image4 from "/src/assets/Group 4.png"
import image5 from "/src/assets/sekil3.png"

import sekil1 from "/src/assets/sekil1.png"
import sekil2 from "/src/assets/sekil2.png"
import sekil3 from "/src/assets/sekil3.png"

function WhyChooseUs() {
    return (
        <section id="whyChooseUs">
            <div className={"row"}>
                <div className={"box col-6"}></div>
                <div className={"box1 col-6"}></div>
            </div>
            <div className={"aboutUs"}>
                <div className={"container"}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "start",
                        width: "100%",
                    }}>
                        {/*<div style={{width: '200px', display: 'flex', alignItems: 'center'}}>*/}
                        {/*    <div className={"dot"}></div>*/}
                        {/*    <div className={"line"}></div>*/}
                        {/*</div>*/}
                        <div className={"text"} style={{
                            textAlign: "start",
                        }}>Why choose us?</div>
                    </div>
                    <div className={"mg100 row"}>
                        <div className={"yazi p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Timeless Craftsmanship</div>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Authenticity and Quality</div>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Affordable Luxury</div>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Trusted by Many</div>
                            <div className={"subTitle"}>
                                <img src={image2} alt={"Image"}/>
                                Cultural Heritage</div>
                        </div>
                        <div className={"zirt p16 col-6 col-md-6 col-sm-12 col-xs-12"}>
                            <img style={{
                            position: "relative",
                            zIndex: 2,
                        }} className={"carpet"} src={sekil1} alt={"Image"}/>
                            <img style={{
                            position: "relative",
                            zIndex: 2,
                        }} className={"carpet carr"} src={sekil2} alt={"Image"}/>
                            <img style={{
                            position: "relative",
                            zIndex: 2,
                        }} className={"carpet cart"} src={sekil3} alt={"Image"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className={"box2 col-6"}></div>
                <div className={"box3 col-6"}></div>
            </div>
        </section>
    );
}

export default WhyChooseUs;