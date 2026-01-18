import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 6000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF_YEARLY",
      price: 10000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 20000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>SLAIN FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Pro Grade Equipments
                </p>
                <p>
                  <Check /> Personal Training Available
                </p>
                <p>
                  <Check /> Separate Restrooms
                </p>
                <p>
                  <Check /> 24/7 Skilled Support
                </p>
                <p>
                  <Check /> 20 Days Freezing Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
