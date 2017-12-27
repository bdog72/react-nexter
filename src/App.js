import React, { Component } from 'react'

import story1 from './img/story-1.jpeg'
import story2 from './img/story-2.jpeg'
import home1 from './img/house-1.jpeg'
import home2 from './img/house-2.jpeg'
import home3 from './img/house-3.jpeg'
import home4 from './img/house-4.jpeg'
import home5 from './img/house-5.jpeg'
import home6 from './img/house-6.jpeg'

import gal1 from './img/gal-1.jpeg'
import gal2 from './img/gal-2.jpeg'
import gal3 from './img/gal-3.jpeg'
import gal4 from './img/gal-4.jpeg'
import gal5 from './img/gal-5.jpeg'
import gal6 from './img/gal-6.jpeg'
import gal7 from './img/gal-7.jpeg'
import gal8 from './img/gal-8.jpeg'
import gal9 from './img/gal-9.jpeg'
import gal10 from './img/gal-10.jpeg'
import gal11 from './img/gal-11.jpeg'
import gal12 from './img/gal-12.jpeg'
import gal13 from './img/gal-13.jpeg'
import gal14 from './img/gal-14.jpeg'
import imageLogo from './img/logo.png'
import imageLogo1 from './img/logo-bbc.png'
import imageLogo2 from './img/logo-forbes.png'
import imageLogo3 from './img/logo-techcrunch.png'
import imageLogo4 from './img/logo-bi.png'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="sidebar">
                    <button className="nav-btn" />
                </div>
                <header className="header">
                    <img src={imageLogo} alt="" className="header__logo" />
                    <h3 className="heading-3">Your Own Home</h3>
                    <h1 className="heading-1">The Ultimate Personal Freedom</h1>
                    <button className="btn header__btn">
                        View Our Properties
                    </button>
                    <div className="header__seenon-text">Seen On</div>
                    <div className="header__seenon-logos">
                        <img src={imageLogo1} alt="" />
                        <img src={imageLogo2} alt="" />
                        <img src={imageLogo3} alt="" />
                        <img src={imageLogo4} alt="" />
                    </div>
                </header>
                <div className="realtors">Top 3 Realtors</div>

                <section className="features">
                    <div className="feature">
                        <h4 className="heading-4--dark">
                            Worlds Best Luxury Homes
                        </h4>
                        <p className="feature__text">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Tenetur distinctio necessitatibus pariatur
                            voluptatibus.
                        </p>
                    </div>

                    <div className="feature">
                        <h4 className="heading-4--dark">
                            Only The Best Properties
                        </h4>
                        <p className="feature__text">
                            Voluptatum mollitia quae. Vero ipsum sapiente
                            molestias accusamus rerum sed a eligendi aut quia.
                        </p>
                    </div>

                    <div className="feature">
                        <h4 className="heading-4--dark">
                            All Homes In Top Locations
                        </h4>
                        <p className="feature__text">
                            Tenetur distinctio necessitatibus pariatur
                            voluptatibus quidem consequatur harum.
                        </p>
                    </div>

                    <div className="feature">
                        <h4 className="heading-4--dark">
                            New Home In One Week
                        </h4>
                        <p className="feature__text">
                            Vero ipsum sapiente molestias accusamus rerum.
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <div className="feature">
                        <h4 className="heading-4--dark">Top 1% Realtors</h4>
                        <p className="feature__text">
                            Quidem consequatur harum, voluptatum mollitia quae.
                            Tenetur distinctio necessitatibus pariatur
                            voluptatibus.
                        </p>
                    </div>
                    <div className="feature">
                        <h4 className="heading-4--dark">
                            Secure Payment On XXX
                        </h4>
                        <p className="feature__text">
                            Pariatur voluptatibus quidem consequatur harum,
                            voluptatum mollitia quae.
                        </p>
                    </div>
                </section>

                <div className="story__pictures">
                    <img
                        src={story1}
                        alt="couple with new house"
                        className="story__img--1"
                    />
                    <img
                        src={story2}
                        alt="couple with new house"
                        className="story__img--2"
                    />
                </div>
                <div className="story__content">
                    <h3 className="heading-3 mb-sm">Happy Customers</h3>
                    <h2 className="heading-2 heading-2-dark mb-md">
                        &ldquo;The Best Decision Of Our Lives&rdquo;
                    </h2>
                    <p className="story__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Tenetur distinctio necessitatibus pariatur
                        voluptatibus. Quidem consequatur harum volupta!
                    </p>
                    <button className="btn">Find Your Own Home</button>
                </div>

                <section className="homes">
                    <div className="home">
                        <img src={home1} alt="" className="home__img" />
                        <h5 className="home__name">Beautiful family Home</h5>
                        <div className="home__location" />
                        <p>USA</p>
                        <div className="home__rooms" />
                        <p>5 Rooms</p>
                        <div className="home__area" />
                        <p>
                            325 m<sup>2</sup>
                        </p>
                        <div className="home__price" />
                        <p>$1,200,000</p>
                        <button className="btn home__btn">
                            Contact Realtors
                        </button>
                    </div>
                    <div className="home">
                        <img src={home2} alt="" className="home__img" />
                        <h5 className="home__name">Beautiful family Home</h5>
                        <div className="home__location" />
                        <p>USA</p>
                        <div className="home__rooms" />
                        <p>5 Rooms</p>
                        <div className="home__area" />
                        <p>
                            325 m<sup>2</sup>
                        </p>
                        <div className="home__price" />
                        <p>$1,200,000</p>
                        <button className="btn home__btn">
                            Contact Realtors
                        </button>
                    </div>
                    <div className="home">
                        <img src={home3} alt="" className="home__img" />
                        <h5 className="home__name">Beautiful family Home</h5>
                        <div className="home__location" />
                        <p>USA</p>
                        <div className="home__rooms" />
                        <p>5 Rooms</p>
                        <div className="home__area" />
                        <p>
                            325 m<sup>2</sup>
                        </p>
                        <div className="home__price" />
                        <p>$1,200,000</p>
                        <button className="btn home__btn">
                            Contact Realtors
                        </button>
                    </div>
                    <div className="home">
                        <img src={home4} alt="" className="home__img" />
                        <h5 className="home__name">Beautiful family Home</h5>
                        <div className="home__location" />
                        <p>USA</p>
                        <div className="home__rooms" />
                        <p>5 Rooms</p>
                        <div className="home__area" />
                        <p>
                            325 m<sup>2</sup>
                        </p>
                        <div className="home__price" />
                        <p>$1,200,000</p>
                        <button className="btn home__btn">
                            Contact Realtors
                        </button>
                    </div>
                    <div className="home">
                        <img src={home5} alt="" className="home__img" />
                        <h5 className="home__name">Beautiful family Home</h5>
                        <div className="home__location" />
                        <p>USA</p>
                        <div className="home__rooms" />
                        <p>5 Rooms</p>
                        <div className="home__area" />
                        <p>
                            325 m<sup>2</sup>
                        </p>
                        <div className="home__price" />
                        <p>$1,200,000</p>
                        <button className="btn home__btn">
                            Contact Realtors
                        </button>
                    </div>
                    <div className="home">
                        <img src={home6} alt="" className="home__img" />
                        <h5 className="home__name">Beautiful family Home</h5>
                        <div className="home__location" />
                        <p>USA</p>
                        <div className="home__rooms" />
                        <p>5 Rooms</p>
                        <div className="home__area" />
                        <p>
                            325 m<sup>2</sup>
                        </p>
                        <div className="home__price" />
                        <p>$1,200,000</p>
                        <button className="btn home__btn">
                            Contact Realtors
                        </button>
                    </div>
                </section>

                <section className="gallery">
                    <figure className="gallery__item gallery__item--1">
                        <img src={gal1} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--2">
                        <img src={gal2} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--3">
                        <img src={gal3} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--4">
                        <img src={gal4} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--5">
                        <img src={gal5} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--6">
                        <img src={gal6} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--7">
                        <img src={gal7} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--8">
                        <img src={gal8} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--9">
                        <img src={gal9} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--10">
                        <img src={gal10} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--11">
                        <img src={gal11} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--12">
                        <img src={gal12} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--13">
                        <img src={gal13} alt="" className="gallery__img" />
                    </figure>
                    <figure className="gallery__item gallery__item--14">
                        <img src={gal14} alt="" className="gallery__img" />
                    </figure>
                </section>
                <footer className="footer">
                    <ul className="nav">
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Find Your Dream Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Request A Proposal
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Download Home Planner
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Contact us
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Submit Your Property
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#" className="nav__link">
                                Come Work With Us
                            </a>
                        </li>
                    </ul>
                    <p className="copyright">
                        &copy; Copyright 2017 by Brian Bycynski.
                    </p>
                </footer>
            </div>
        )
    }
}

export default App
