import React from 'react';
import './Home.css'

export default function Home() {
    return (
        <section className="container">      
            <img src="./headshot.gif" alt="Deividi Silva" className="photo"/>
            <p className="who">
            My name is Deividi Silva and I'm a software engineer in Brazil.
            </p>
            <p className="why">
            I'm passionate about creating software solutions that help people's life.
            </p>
            <p className="where">
            I'm currently working for Whirpool S.A - Embraco compressors on an <a href="http://www.diili.com.br">awesome IoT solution</a>.       
            </p>
        </section>
    )
}