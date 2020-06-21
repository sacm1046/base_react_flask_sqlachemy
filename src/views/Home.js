import React from 'react';
import Navbar from '../components/Navbar'
import Gallery from '../components/Gallery'

const Home = props => {
    return (
        <>
        <Navbar />
        <div className="container pt-5" >
            <div className="row">
                <div className="col-md-12">
                    <h1>Home</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Gallery />
                </div>
            </div>
            <div className="row" id="row">
                <div className="col-md-12">
                    <Gallery />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;