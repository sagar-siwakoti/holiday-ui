import React, {Component} from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";
import Title from "./Title";
class Services extends Component {
    state={
        services:[
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info : "We provide free cocktails for customer " +
                    "who rent the DELUX rooms for 2 nights."
            },
            {
                icon: <FaHiking />,
                title: "Endless Hikings",
                info : "We provide free cocktails for customer " +
                    "who rent the DELUX rooms for 2 nights."
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info : "We provide free cocktails for customer " +
                    "who rent the DELUX rooms for 2 nights."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info : "We provide free cocktails for customer " +
                    "who rent the DELUX rooms for 2 nights."
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index)=> {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}

export default Services;