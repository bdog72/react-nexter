import React, { Component } from 'react'

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="sidebar">Sidebar</div>
                <header className="header">Header</header>
                <div className="realtors">Top 3 Realtors</div>
                <section className="features">Features</section>
                <div className="story__pictures">Story Pictures</div>
                <div className="story__content">Story Content</div>
                <section className="homes">Homes</section>
                <section className="gallery">Gallery</section>
                <footer className="footer">Footer</footer>
            </div>
        )
    }
}

export default App
