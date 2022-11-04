import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  console.log(services);
  return (
    <div>
      <h1 className="text-center text-orange-600 font-bold text-2xl">
        Services
      </h1>
      <h1 className="my-10 font-bold text-5xl text-center ">
        Our Service Area
      </h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
