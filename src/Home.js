import React from 'react';
import './Home.css'

export default function Home() {
    return (
        <section className="container">                  
            <img src="./headshot.jpg" alt="Deividi Silva" className="photo"/>
            <p className="who">
            Hi! I'm Deividi Silva and I'm a software engineer from Brazil.
            </p>
            <p className="what">
            I love creating software solutions that help people's life. By day I'm currently working for Whirpool S.A - Embraco compressors on an <a href="http://www.diili.com.br">awesome IoT solution</a>.       
            </p>
        </section>
    )
}