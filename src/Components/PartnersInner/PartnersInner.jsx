// Import => React
import React from "react";

// Import => Img Component
import PartnersImg from "../../Assets/Img/partners-inner.png";

// Import => Component
import Container from "../Container/Container";

// Import => Style Component
import "../../Components/PartnersInner/PartnersInner.scss";

function PartnersInner() {
    return (
        <>

            <section className="partners-inner">
                <Container>
                    <div className="partners-inner__box">
                        <h3 className="partners-inner__title">Bizning xamkorlarimiz</h3>
                        <p className="partners-inner__desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium ducimus in, voluptate deserunt magni fugit error atque modi iure maiores possimus nesciunt? Tempore odit ratione sunt, ut dignissimos, exercitationem a mollitia necessitatibus, aliquam asperiores neque! Quae id quod voluptate quos.</p>
                        <img className="partners-inner__img" src={PartnersImg} alt="partners-img" />
                    </div>
                </Container>
            </section>

        </>
    )
}

export default PartnersInner