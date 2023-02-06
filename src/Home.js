import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import Navbar from './Navbar';
function Home(){
    return(
        <div>
            <Navbar/>
            <section className="p-3 text-center text-sm-start text-white image">
                <div className="mt-3">
                    <div className="fs-5 d-sm-flex align-items-center justify-content-between ">
                        <div>
                            <h2>Confused in deciding your career ?</h2>
                            <p className="my-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat vel adipisci tempora
                                quas autem excepturi ex, quo quaerat. Magnam, amet facere quasi soluta perferendis atque impedit
                                autem quas iure.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae deleniti laborum.
                                Molestiae sit repellendus quas fugit placeat recusandae quo ipsum nisi, minus temporibus magnam
                                cupiditate officia quos, hic porro?
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-5 d-block">
                        <NavLink to="/Login" className="btn btn-success btn-lg">Get Started</NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home;