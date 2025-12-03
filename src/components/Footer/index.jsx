import './index.scss';
import image1 from "/src/assets/Group 5.png"

function Footer() {
    return (
        <section id="footer">
            <div className={"image"}>
                <img src={image1} alt={"Image"}/>
            </div>
            <div className={"name"}>
                <div className={"text"}>
                    <div className={"text"} style={{
                        textAlign: "start",
                        color: "white"
                    }}>Phone
                    </div>
                    <div className={"text"} style={{
                        margin: '0',
                        textAlign: "start"
                    }}>00 90 212 685 27 84
                    </div>
                </div>
                <div style={{
                    width: "220px",
                    textAlign: "center"
                }}>
                    <div style={{
                        width: "240px",
                    }} className={"royal"}>Evren İplik
                    </div>
                    <div style={{
                        color: "white",
                        fontSize: "20px",
                        marginTop: "20px",
                        width: "240px"
                    }} className={"royal1"}>Created by <span style={{
                        color: "#eddfc4",
                        cursor: "pointer",
                    }} onClick={() => window.location.href = "https://buyontech.net/"}>BuyonTech</span></div>
                </div>
                <div className={"text"}>
                    <div className={"text"} style={{
                        textAlign: "end",
                        color: "white",
                    }}>Location
                    </div>
                    <div className={"text"} style={{
                        margin: '0',
                        textAlign: "end"
                    }}>Hucret Mh. Yildirim Beyazit Cd. No:165/3
                    </div>
                    <div className={"text"} style={{
                        margin: '0',
                        textAlign: "end"
                    }}>Arnavutkoy/İSTANBUL
                    </div>
                </div>
            </div>
            <div style={{
                fontSize: "12px",
                position: "absolute",
                bottom: "0",
                color: '#450210',
                textAlign: "center",
                margin: "0 auto",
                transform: "translateX(-50%, -50%)",
                left: "5px",
                marginBottom: '5px',
                width: "100%",
            }}>© 2025 Evren İplik – Crafted with heritage. All rights reserved.
            </div>
        </section>
    );
}

export default Footer;