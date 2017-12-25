import React, { Component } from 'react'

import story1 from './img/story-1.jpeg'
import story2 from './img/story-2.jpeg'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="sidebar">Sidebar</div>
                <header className="header">Header</header>
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

                <section className="homes">Homes</section>
                <section className="gallery">Gallery</section>
                <footer className="footer">Footer</footer>
            </div>
        )
    }
}

export default App
