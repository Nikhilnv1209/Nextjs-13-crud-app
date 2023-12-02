import { notFound } from "next/navigation";
import React from "react";

const About = () => {
  const userrr = "Nikhil";
  return <div>{userrr === "" ? notFound() : userrr }</div>;
};

export default About;
