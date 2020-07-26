import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import Services from "../components/Services";
export  default function Home() {
    return (
        <>
            <Hero>
                <Banner title="Book your holidays with Holiday" subtitle="delux rooms starting at रू2999">
                    <Link to="/rooms" className="btn-primary">our rooms</Link>
                </Banner>
            </Hero>
            <Services />
        </>
    );
};

