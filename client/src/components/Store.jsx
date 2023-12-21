import React, { useState } from "react";
import image_1 from "./images/images1.jpeg";
import image_2 from "./images/images2.jpg";
import image_3 from "./images/images3.jpeg";
import image_4 from "./images/images4.jpg";
import image_5 from "./images/images5.jpg";
import image_6 from "./images/images6.jpeg";

const Store = ({ onTotalAmountChange }) => {
  const [amount1, setAmount1] = useState(0);
  const [amount2, setAmount2] = useState(0);
  const [amount3, setAmount3] = useState(0);

  const updateTotalAmount = () => {
    const totalAmount = amount1 + amount2 + amount3;
    onTotalAmountChange(totalAmount);
  };

  return (
    <div className="bg-gray-800 h-full flex-1 items-center justify-between w-full flex-col">



      <h2 className="text-white text-5xl font-bold text-center py-5">
        Cooperative Store
      </h2>

      <div className="grid grid-cols-3 gap-5">
        {/* 3-in-a-row */}
        <div className="p-4">
          <div className="bg-white p-4 rounded-lg">
            <img src={image_1} alt="Image 1" className="w-full" />
            <h5 className="text-gray-700 text-2xl font-bold mt-4">
              Solar Ironing Cart
            </h5>
            <p className="text-gray-500 mt-4">
            a mobile ironing cart, which uses solar panels to power a steam iron box. This can be powered by pre-charged batteries, electricity or diesel-powered generator in the absence of sunlight.
            </p>
            <br />

            <h4>Name : Vinisha Umashankar </h4>
            <h4>Student Account Address : </h4>
            <h4>Org _ Account Address : </h4>
          </div>
        </div>




        <div className="p-4">
          <div className="bg-white p-4 rounded-lg">
            <img src={image_2} alt="Image 2" className="w-full" />
            <h5 className="text-gray-700 text-2xl font-bold mt-4">
              Smart dustbin
            </h5>
            <p className="text-gray-500 mt-4">
            The idea of a dustbin with separate slots for bio-degradable and non bio-degradable waste that will send a message to the municipality once the dustbin is filled up to a pre-set level.

            </p>
            <br />

            
            <h4>Name : Prem Ranjan Singh, Shivani Singh  & Ankush Pal. </h4>
            <h4>Student Account Address : </h4>
            <h4>Org _ Account Address : </h4>

          
          </div>


        </div>
        
        
        
        <div className="p-4">
          <div className="bg-white p-4 rounded-lg">
            <img src={image_3} alt="Image 3" className="w-full" />
            <h5 className="text-gray-700 text-2xl font-bold mt-4">
            
            </h5>
            <p className="text-gray-500 mt-4">
            A seed drill which can plant different sizes of seeds at variable depth while maintaining varying space between two seeds. The best part about this drill - it is powered by the sun!
            </p>
            <br />

            
            <h4>Name : Subash Chandra Bose </h4>
            <h4>Student Account Address : </h4>
            <h4>Org _ Account Address : </h4>
          
          </div>
        </div>
        







        {/* 2x3 */}


        <div className="p-4">
          <div className="bg-white p-4 rounded-lg">
            <img src={image_4} alt="Image 3" className="w-full" />
            <h5 className="text-gray-700 text-2xl font-bold mt-4">
            Stress monitoring mechanism in animals 
            </h5>
            <p className="text-gray-500 mt-4">
            an app that will monitor a variety of parameters such as the animal's rate, temperature, pulse rate, heart beat through sensors attached to their bodies and then check if they're undergoing any stress.
            </p>
            <br />

           
            <h4>Name : Jayprakash B Rathwa</h4>
            <h4>Student Account Address : </h4>
            <h4>Org _ Account Address : </h4>
          
          </div>
        </div>

        <div className="p-4">
          <div className="bg-white p-4 rounded-lg">
            <img src={image_5} alt="Image 5" className="w-full" />
            <h5 className="text-gray-700 text-2xl font-bold mt-4">
              Smart Walking Stick
            </h5>
            <p className="text-gray-500 mt-4">
            This "smart" walking stick can be a boon for the elderly and visually challenged once it materialises. Features include counting of steps, medicine reminder, locator, emergency alarm, fall detector and automatic torch etc.
            </p>
            <br />

          
            <h4>Name : Siddhant Khanna </h4>
            <h4>Student Account Address : </h4>
            <h4>Org _ Account Address : </h4>
          
          </div>
        </div>

        <div className="p-4">
          <div className="bg-white p-4 rounded-lg">
            <img src={image_6} alt="Image 6" className="w-full" />
            <h5 className="text-gray-700 text-2xl font-bold mt-4">
             Water filter/purifier at source
            </h5>
            <p className="text-gray-500 mt-4">
            the idea of putting a filter/purifier at the source of water so that everyone has access to clean water. This filter can be centralised (i.e. at the point of distribution like water tank) or can be attached to public taps.
            </p>
            <br />
         
            <h4>Name : Soring Lepcha and Subash Prodhan, </h4>
            <h4>Student Account Address : </h4>
            <h4>Org _ Account Address : </h4>


          
          </div>
        </div>
       
      </div>

        <h2 className=" my-20 py-10 text-white text-2xl font-bold text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam saepe asperiores explicabo odit corrupti earum excepturi corporis libero error. Nobis!
      </h2>    
      
      
      </div>
  );
};

export default Store;
