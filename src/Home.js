import React from 'react';
import './Home.css'

export default function Home() {
    return (
        <section className="container">
            <img src="/headshot.jpeg" alt="Deividi Silva" className="photo"/>
            <div className="social">
                <a href="https://github.com/deividi86" aria-label="Github profile">
                    <i className="fa fa-github" aria-hidden></i>
                </a>
                <a href="https://www.linkedin.com/in/deividisilva/" aria-label="Linkedin profile">
                    <i className="fa fa-linkedin-square" aria-hidden></i>
                </a>
                <a href="https://stackoverflow.com/users/2146559/deividi-silva" aria-label="StackOverflow profile">
                    <i className="fa fa-stack-overflow" aria-hidden></i>
                </a>
                <a href="mailto:deividi@gmail.com?Subject=Website%20contact" target="_top" aria-label="Send me an email to deividi@gmail.com">
                    <i className="fa fa-envelope" aria-hidden></i>
                </a>
            </div>
            <p className="who">
            Deividi Silva, Software Professional from Brazil.
            </p>
        </section>
    )
}