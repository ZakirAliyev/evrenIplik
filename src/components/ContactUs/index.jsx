import './index.scss';
import image1 from "/src/assets/carpetsss 1.png"
import image2 from "/src/assets/Frame 18.png"
import image3 from "/src/assets/Mask group 1.png"
import {IoLogoWhatsapp} from "react-icons/io";
import {FaLocationDot} from "react-icons/fa6";
import {BsFillBuildingFill} from "react-icons/bs";

function ContactUs() {
    return (
        <section id="contactUs">
            <div className={"row"}>
                <div className={"box col-6"}></div>
                <div className={"box1 col-6"}></div>
            </div>
            <div className={"aboutUs"}>
                <div className={"container"}>
                    <div className={"mg100 row"}>

                        <div className={"yazi p16 col-6 col-md-6 col-sm-12 col-xs-12"} style={{
                            position: "relative",
                            zIndex: 2,
                        }}>
                            <img className={"carpet1"} src={image2} alt={"Image"}/>
                            <div className={"title"}>Contact us</div>
                            <div className={"title1"}>
                                <BsFillBuildingFill className={"icon"}/>
                                <div style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div>Company</div>
                                    <div style={{
                                        color:'#191919',
                                        marginLeft:'-30px',
                                        marginTop:'4px',
                                        fontSize:'19px',
                                    }}>Evren İplikçilik Sanayi və Ticaret Limited Şirketi</div>
                                </div>
                            </div>
                            <div className={"title2"}>
                                <IoLogoWhatsapp className={"icon"}/>
                                <div style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div>Contact and Fax</div>
                                    <div style={{
                                        color:'#191919',
                                        marginLeft:'-30px',
                                        marginTop:'4px',
                                        fontSize:'19px',
                                    }}>00 90 212 685 27 84 <br/> 00 90 212 685 27 85 </div>
                                </div>
                            </div>
                            <div className={"title3"}>
                                <FaLocationDot className={"icon"}/>
                                <div style={{
                                    display:'flex',
                                    flexDirection: 'column',
                                }}>
                                    <div style={{
                                        fontSize: '24px'
                                    }} className={"naji"}>Location</div>
                                    <div style={{
                                        color:'#191919',
                                        marginLeft:'-30px',
                                        marginTop:'10px',
                                        fontSize: '20px',
                                    }} className={"naji ii"}>AHucret Mh. Yildirim Beyazit Cd. No:165/3 Arnavutkoy/İSTANBUL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img style={{
                    maxWidth: '500px',
                    width: '100%',
                    position: 'absolute',
                    left: '-100px',
                    marginLeft: '-100px',
                    bottom: '-150px',
                }} src={image3} alt={"Image"}/>

                <img style={{
                    maxWidth: '500px',
                    width: '100%',
                    position: 'absolute',
                    right: '-200px',
                    marginLeft: '-100px',
                    top: '-150px',
                    rotate: '180deg'
                }} src={image3} alt={"Image"}/>
            </div>
            <div className={"row"}>
                <div className={"box2 col-6"}></div>
                <div className={"box3 col-6"}></div>
            </div>
        </section>
    );
}

export default ContactUs;