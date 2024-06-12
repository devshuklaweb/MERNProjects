import React from 'react'
import ListProduct from './ListProduct';

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="sectionbody text-center" style={{marginTop: '60px'}}>
                    <ListProduct/>
                </div>
            </div>

        </>
    )
}
export default Home;