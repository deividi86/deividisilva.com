import React from 'react';
import './Home.css'

export default function Home() {
    return (
        <section className="container">
            <img src="/headshot.jpeg" alt="Deividi Silva" className="photo"/>
            <div className="social">
                <a href="https://www.facebook.com/deividi.dvd" alt="facebook profile" className="fa fa-facebook-official"></a>                
                <a href="https://github.com/deividi86" alt="github profile" className="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/deividisilva/" alt="linkedin profile" className="fa fa-linkedin-square"></a>
                <a href="https://stackoverflow.com/users/2146559/deividi-silva"  alt="stackoverflow profile" className="fa fa-stack-overflow"></a>
                <a href="mailto:deividi@gmail.com?Subject=Website%20contact" target="_top" alt="send me an e-mail" className="fa fa-envelope"></a>
            </div>
            <div className="professional">
                <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2017-05-10&ci=AWS00257056" alt="AWS certified architect"><img src="/architect.png" alt="I am an AWS certified architect" /></a>
                <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2017-04-12&ci=AWS00257056" alt="AWS certified developer"><img src="/developer.png" alt="I am an AWS certified developer" /></a>
                <a href="https://www.codementor.io/deividisilva?utm_source=github&utm_medium=button&utm_term=deividisilva&utm_campaign=github"><img src="https://cdn.codementor.io/badges/i_am_a_codementor_light.svg" alt="I am a codementor" /></a>
            </div>
            <p className="who">
            Hi! My name is Deividi Silva and I'm a software engineer from Brazil.
            </p>
            <p className="what">
            I love creating software solutions that help people's life. By day I'm currently working for Whirpool S.A - Embraco compressors on an <a href="http://www.diili.com.br">awesome IoT solution</a>.       
            </p>
        </section>
    )
}