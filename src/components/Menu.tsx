import React from 'react';
import Dash from './Dash';
import Image from 'next/image';
import MenuCard from './MenuCard';


const menuData = [
    {
        img:"/pexels-kpaukshtite-1998920.jpg",
        title: "Grilled Spot Prawns With Lime",
        desc: " Juicy prawns grilled with zesty lime for a fresh taste.",
        price:"$88.80",
    },
    {
        img:"/pexels-ella-olsson-572949-1640777.jpg",
        title: "Quinoa Salad",
        desc: "A colorful quinoa salad with fresh veggies and citrus dressing.",
        price:"$47.50",
    },
    {
        img:"/pexels-nano-erdozain-120534369-27905923.jpg",
        title: "Burger with bacon, egg and cheese",
        desc: "Hearty beef burger topped with crispy bacon, egg, and cheese.",
        price:"$100.30",
    },
    {
        img:"/pexels-fotios-photos-1279330.jpg",
        title: "Italian cuisine",
        desc: " Authentic Italian dishes with homemade pasta and rich sauces.",
        price:"$79.50",
    },
    {
        img:"/Chocolate Birthday Cake Images With Name Free Download.jpeg",
        title: "Chocolate Cake",
        desc: " Rich chocolate layers with velvety frosting—pure indulgence.",
        price:"$150.50",
    },
    {
        img:"/pexels-mikegz-400576129-15110222.jpg",
        title: "Grilled cheese sandwich",
        desc: " Crispy bread filled with gooey melted cheese, served warm.",
        price:"$56.50",
    },
    {
        img:"/pexels-pixabay-416471.jpg",
        title: "Crispy Cheese and Bacon Filled Chicken Rolls",
        desc: " Fried chicken rolls stuffed with cheese and crispy bacon.",
        price:"$29.50",
    },
    {
        img:"/pexels-pixabay-262897.jpg",
        title: "Korean cuisine",
        desc: " Flavorful Korean dishes with marinated meats and vibrant sauces.",
        price:"$99.90",
    },
   
    {
        img:"/pexels-robinstickel-70497.jpg",
        title: "Mutton Cheese Burger",
        desc: " Gourmet mutton patty topped with melted cheese and fresh toppings.",
        price:"$100.50",
    },
    {
        img:"/pexels-snappr-27626477.jpg",
        title: "Elote",
        desc: " Grilled corn with creamy sauce, cheese, chili, and lime for a tasty treat",
        price:"$29.50",
    },
]


const Menu = () => {
  return (
    <div className="container pt-40">
        <div className="space-y-4 w-fit mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold">
                Our <span className="text-accent">Menu</span>
            </h2>
            <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem 
            <br />
            quidem esse eum animi?
            </p>
            <div className="w-fit mx-auto">
                <Dash/>
            </div>
        </div>
        <ul className="mt-10 hidden sm:flex gap-6 md:gap-20 w-fit mx-auto">
            <li className="bg-accent text-white p-1">Appetizers</li>
            <li>Breakfast</li>
            <li>Salads</li>
            <li>Meat & Fish</li>
            <li>Soup</li>
            <li>Desert</li>
            <li>Drinks</li>
        </ul>
        <div className="grid lg:grid-cols-[35%,1fr] gap-10 pt-10">
            <div className="w-fit mx-auto">
                <Image
                  className="w-[100%] max-w-[400px] h-auto"
                  src="/pexels-valeriya-1860204.jpg"
                  width={500}
                  height={500}
                  alt="dish"
                />  

            </div>
            <div className="grid w-fit max-auto sm:grid-cols-2 gap-4">
            {menuData.map((item, index) => (
                 <MenuCard 
                     key={index} 
                     img={item.img} 
                     title={item.title} 
                     desc={item.desc} 
                     price={item.price}
                 />
            ))}

            </div>
        </div>
    </div>
  );
};

export default Menu; 