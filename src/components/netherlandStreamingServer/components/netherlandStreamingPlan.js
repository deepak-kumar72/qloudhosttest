
import React from 'react';
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const streamingplansData = [
    {
      id: 1,
      name: 'AMD EPYC 7502P (32c/64t)',
      price: '$349.00',
      time: '/month',
      yearlyPrice: "Renew at $349.00/mo",
      save: "SAVE 30%",
      features: ['2.0-3.0 GHz GHz', '256 GB DDR4 ECC*', '2×1.92 TB NVMe SSD', 'Unmetered Transfer', '1 Gbit Port Speed', '1 IPv4 Address'],
      url: "https://my.qloudhost.com/store/dedicated/amd-epyc-7502p",
      popular: true
    },
    {
      id: 2,
      name: 'AMD EPYC 7551P(32c/64t)',
      yearlyPrice: "",
      save: "SAVE 30%",
      features: ['3.8 GHz', '64 GB DDR4', '960 GB NVMe SSD', '50 TB Transfer', '1 Gbit Port Speed', '1 IPv4 Address'],
      url: "https://my.qloudhost.com/submitticket.php?step=2&deptid=2",
      onDemand: true
      
    },  
    {
      id: 3, 
    name: "Intel Xeon Gold 6230",
    price: "$399.00",
    time: '/month',
    yearlyPrice: "Renew at $399.00/mo",
    discount: "Save 30%",
    features: ["2.1 GHz", "256GB RAM DDR4", "2X1.92TB NVMe SSD", "100TB Transfer", "1 Gbit Port Speed", "1 IPv4 IP Address"],
  url: "https://my.qloudhost.com/store/dedicated/intel-xeon-gold-6230",
    
  }
     
  ];
  

const NetherLandStreamingPlan = () => {
  return (
    <div className="hosting-plan mb-5">
      <div className="container plan-sec mt-5">
      <h2 className="text-center m-auto mb-3">Offshore Netherlands Streaming Servers Pricing!</h2>
      <p className="text-center mb-5 planHead-con m-auto">Tell us your needs, and we will prepare a Best Netherlands streaming servers according to your needs.
      </p>
      
        <div className="row qloudHost-plan justify-content-center m-auto" id='explore'>
          {streamingplansData.map((plan) => (
            <div key={plan.id} className="col-12 col-md-6 col-lg-4 mb-4 explore-plan-col">
            <div
                className={`${plan.popular ? "popular-qloudhost-card h-100 position-relative p-3" : "card-body offshore-plan-body position-relative h-100"}`}
              >
                {plan.popular && (
                  <div className="popular-badge streaming-badge position-absolute">Popular</div>
                )}
               
                <div>
                  <h5 className="card-title mt-3 mb-3">{plan.name}</h5>
                  <h3 className="card-price qloudHostplan-price mb-3">{plan.price} <span className="price-unit">{plan.time}</span></h3>

                  {plan.onDemand && (
                  <div className="best-streaming mb-2">On Demand</div>
                )}

                  <p className="save-streaming fw-bold mb-3">{plan.save} <span className="save-price ms-3"> {plan.yearlyPrice}</span></p>
                  <Link href={plan.url} className='qloudPlans-btn'>
                  <button className="plan-btn dedicated-plan-btn d-flex justify-content-between mb-4">
                    Buy Now <FaArrowRight className=""/>
                  </button></Link>
                  <h4 className='mb-3 top-feature'>Top Features</h4>
                  <ul className="list-unstyled mb-4 streaming-server-feature">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2 streaming-features">
                        <FaCheck className="check" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetherLandStreamingPlan;

  