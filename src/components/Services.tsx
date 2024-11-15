import React from 'react';
import Dash from './Dash';
import ServiceCard from './ServiceCard';

const servicesData = [
    {
        img: "/cooking_17546300.png",
        title: "Professional Kitchen",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio."
    },
    {
        img: "/delivery-bike_9557973.png",
        title: "Delivery",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio."
    },
    {
        img: "/soft-drink_2405597 (1).png",
        title: "Soft Drink List",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio."
    },
    {
        img: "/wifi-signal_3694299.png",
        title: "Free Wifi",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, odio."
    },
];

const Services = () => {
  return( 
    <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
                Choose Best <span className="text-accent">Service</span>
            </h2>
            <p className="text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem <br />
                quidem esse eum animi?
            </p>
            <div className="w-fit mx-auto"> 
                <Dash/>
            </div>
        </div>
        <div className="grid gap-10 md:grid-cols-4 md:gap-4 pt-8">
            {servicesData.map((item, index) => (
                 <ServiceCard 
                     key={index} 
                     img={item.img} 
                     title={item.title} 
                     desc={item.desc} 
                 />
            ))}
        </div>
    </div>
  );
};

export default Services;
