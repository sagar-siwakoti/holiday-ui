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
                info : "We have multiple routes (long and short)" +
                    "for Hiking for any customer in our Hotel."

            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info : "We provide shuttle van for customer " +
                    "who wants to spend some time in Nature."
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info : "We provide free and strongest beer in" +
                    "the whole world."
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