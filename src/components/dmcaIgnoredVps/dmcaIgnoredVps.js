import React, { useState, useEffect } from "react";
import HeroComponent from "../commonComponent/heroComponent";
import DmcaIgnoredVpsPlan from "./components/dmcaIgnoredVpsPlan";
import TechnicalSpecification from "../commonComponent/technicalSpecification";
import InstallationPanel from "../commonComponent/installationPanel";
import DmcaFeatureElement from "./components/dmcaFeatureElement";
import QlodHostServices from "../commonComponent/qlodHostServices";
import Testimonials from "../commonComponent/testimonial";
import FAQsSection from "../commonComponent/faqSection";
import WebHostingGurantees from "../offShoreHosting/components/webHostingGurantees";




const DmcaIgnoredVps = () => {
  const [data, setData] = useState(); // State to store the JSON data

  // Fetch data dynamically
  const getData = async () => {
    try {
      const response = await fetch("/data/dmcaIgnoredVps.json"); // Fetch from public folder
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Show a loader or fallback UI until data is loaded
  if (!data) {
    return <div>Loading...</div>;
  }

  // Destructure data for cleaner usage
  const { heroComponent, installationPanel, hostingGurantees } = data;
  return (
    <div>
      <HeroComponent {...heroComponent}

      />
      <DmcaIgnoredVpsPlan />
      <WebHostingGurantees {...hostingGurantees}
      />
      <TechnicalSpecification />
      <InstallationPanel
      {...installationPanel}
      />
      <DmcaFeatureElement />
      <QlodHostServices
      heading={data.featureHeading.Heading}
      content={data.featureHeading.subHeading}
      features={data.features}
      />
      <Testimonials />
      <FAQsSection faqs={data.faqsData} />
    </div>
  );
};

export default DmcaIgnoredVps;
