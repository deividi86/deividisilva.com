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
            <div className="professional">
                <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2017-05-10&ci=AWS00257056" alt="AWS certified architect"><img src="/architect.png" alt="I am an AWS certified architect" /></a>
                <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2017-04-12&ci=AWS00257056" alt="AWS certified developer"><img src="/developer.png" alt="I am an AWS certified developer" /></a>                
            </div>
            <p className="who">
            Welcome! I am Deividi Silva and I'm a software development manager from Brazil. With over 10 years of professional experience, I've worked as a software engineer, solutions architect and in the last
             3 years as a software development manager. Most recently I managed AWS DynamoDB Metadata team develering amazing new datastore solutions, with throughput over 325 million requests per second and 6 9's of avalability.
            </p>
        </section>
    )
}