import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import SimpleTabs from '../layout/SimpleTabs'

function Home() {
    return (
        <div>
            <div className="section">
                <Header/>
                <SimpleTabs />
            </div>
             <Footer/>
        </div>
    )
}

export default Home
