// Import => React
import React, { useContext } from "react";
import { NavLink as Redirect } from "react-router-dom";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

// Import => Mui
import { Box, Button, IconButton } from "@mui/material";

// Import => Components
import Cards from "../Card/Card";
import LogoImg from "../../Lib/Svg/logo";
import ArrowDown from "../../Assets/Img/Icon/arrow-down.svg";
import PaperClip from "../../Assets/Img/Icon/paperclip.svg";
import PaperPlane from "../../Assets/Img/Icon/paper-plane.svg";
import Dots from "../../Assets/Img/Icon/dots.svg";
import Person1 from "../../Assets/Img/person1.jpg";
import Person2 from "../../Assets/Img/person2.jpg";
import Person3 from "../../Assets/Img/person3.jpg";
import HeroImg1 from "../../Assets/Img/home-hero-1.jpg";

// Import => Style
import "./Chat.scss";

// Import useContext => Localization
import { Context } from "../../Context/LangContext";
import content from "../../Localization/Content";


function Chat() {
    const { lang, setLang } = useContext(Context);

    function attachFile() {
        let attachInput = document.querySelector(".attachFile__input");
        attachInput.click();
    }
    const images = [Person1, Person2, Person3, Person1, Person2, Person3];

    // return (
    //     <Box className="chat" maxWidth={1700} margin={'0 auto'} padding={'0 15px'}>
    //         <section className="chatsPanel">
    //             <Box className="chatsPanel__header">
    //                 <LogoImg width={45} height={45} />
    //                 <h4 className="chatsPanel__header__title">{content[lang].ChatNews}</h4>
    //                 <span className="arrowDown"><img src={ArrowDown} alt="" /></span>
    //                 <span className="chats__indicator">6</span>
    //             </Box>
    //             <Box className="chatsPanel__main">
    //                 <Box className="chatsPanel__chats">
    //                     {images.map((img) => (
    //                         <Redirect to={"/plonchini__yozishmasi"}>
    //                             <div className="chatProfile">
    //                                 <img src={img} alt="" className="chatProfile__img" />
    //                                 <div className="chatProfile__content">
    //                                     <Box className="chatProfile__content__item">
    //                                         <h3 className="chatProfile__name">Elmer Polonchi</h3>
    //                                         <span className="chatProfile__text">Haha oh man 🔥</span>
    //                                     </Box>
    //                                     <span className="chatProfile__lastTime">12m</span>
    //                                 </div>
    //                             </div>
    //                         </Redirect>
    //                     ))}

    //                 </Box>
    //             </Box>
    //             <Box></Box>
    //         </section>
    //         <section className="messagesPanel">
    //             <Box className="messagesPanel__header">
    //                 <Box className="chatProfile">
    //                     <img src={Person2} alt="" className="chatProfile__img" />
    //                     <Box className="chatProfile__content">
    //                         <h3 className="chatProfile__name">Elmer Polonchi</h3>
    //                         <span className="chatProfile__text">{content[lang].ChatType}</span>
    //                     </Box>
    //                 </Box>
    //                 <div className="header__more">
    //                     <IconButton className="header__more__btn">
    //                         <img src={Dots} alt="" />
    //                     </IconButton>
    //                 </div>
    //             </Box>
    //             <Box className="messages">
    //                 <Box className="message incoming">
    //                     <img src={Person2} alt="" className="message__sender" />
    //                     <div className="sender__messages">
    //                         <p className="message__text">Salom</p>
    //                         <p className="message__text">Uyni narxi buncha qimmat</p>
    //                     </div>
    //                 </Box>
    //                 <Box className="message outgoing">
    //                     <div className="sender__messages">
    //                         <p className="message__text">Salom</p>
    //                         <p className="message__text">Narxiga yarasha</p>
    //                     </div>
    //                 </Box>
    //             </Box>
    //             <div className="inputMessage">
    //                 <IconButton className="attachFile" onClick={attachFile}>
    //                     <img src={PaperClip} alt="" />
    //                     <input type="file" className="attachFile__input" style={{ display: 'none' }} />
    //                 </IconButton>
    //                 <div className="chatInput">
    //                     <input type="text" className="message__input" autoFocus placeholder="Type a message" />
    //                     <IconButton className="sendBtn" title="Yuborish">
    //                         <img src={PaperPlane} alt="" />
    //                     </IconButton>
    //                 </div>
    //             </div>
    //         </section>
    //         <section className="infoPanel">
    //             <Box className="infoPanel__header">
    //                 <h5 className="infoPanel__title">{content[lang].addPic}<img src={ArrowDown} alt="" className="arrowDown" /></h5>
    //                 <img src={HeroImg1} alt="" className="infoPanel__header__img" />
    //             </Box>
    //             <Box className="infoPanel__main">
    //                 <h5 className="infoPanel__title">{content[lang].doyou}<img src={ArrowDown} alt="" className="arrowDown" /><span className="chats__indicator">2</span></h5>
    //                 <div className="infoPanel__cards">

    //                 </div>
    //             </Box>
    //             <Box></Box>
    //         </section>
    //     </Box>
    // )
}
export default Chat;
