import React from 'react';
import Dash from './Dash';
import Image from 'next/image';

const feature = () => {
  return (
    <div className="container pt-40">
        <h2 className="text-6xl font-bold">Our</h2>
        <h2 className="text-6xl font-bold pt-2">
            Featured<span className="text-accent">Food</span>
        </h2>

        <p className="max-w-[550px] pt-10 text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit facere sunt vero aliquam repellendus, necessitatibus quaerat in voluptatibus, distinctio nam eligendi repellat quo optio officia sed sequi doloremque, asperiores soluta.
        </p>

        <Dash/>
        <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
            <div className="w-fit mx-auto self-end">
                <Image 
                  className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl" 
                  src="/pexels-eduardo-krajan-424982200-15476375.jpg" 
                  width={300} 
                  height={600} 
                  alt="grid image"
                  />

                  <div className="space-y-4">
                    <Dash/>
                    <h2 className="font-medium text-xl" >Double Daccer Cheezy Burger</h2>
                    <p className="text-gray-700 text-[14px] xl:text-[16px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,nesciunt distinctio.
                    </p>
                  </div>
            </div>
            <div className="w-fit mx-auto">
                <Image 
                  className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl" 
                  src="/pexels-farhad-19239118.jpg" 
                  width={500} 
                  height={900} 
                  alt="grid image"
                  />

                  <div className="space-y-4">
                    <Dash/>
                    <h2 className="font-medium text-xl" >(Pizza) Chicken tikka Flavour </h2>
                    <p className="text-gray-700 text-[14px] xl:text-[16px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.  Dignissimos,nesciunt distinctio.
                    </p>
                  </div>
            </div>
            <div className="w-fit mx-auto self-end">
                <Image 
                  className="w-[100%] max-w-[400px] sm:max-w-full h-auto shadow-2xl" 
                  src="/pexels-jonathanborba-2983099.jpg" 
                  width={300} 
                  height={600} 
                  alt="grid image"
                  />

                  <div className="space-y-4">
                    <Dash/>
                    <h2 className="font-medium text-xl" >Bacon Cheeseburger</h2>
                    <p className="text-gray-700 text-[14px] xl:text-[16px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,nesciunt distinctio.
                    </p>
                  </div>
            </div>
        </div>

    </div>

  );
};

export default feature;