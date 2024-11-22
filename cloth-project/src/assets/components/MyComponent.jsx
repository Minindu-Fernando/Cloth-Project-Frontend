import React, { useEffect } from "react";
import AOS from "aos";

const MyComponent = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return <div data-aos="fade-up"><h1 style={{color:'danger'}}>Hello
</h1></div>;
  
};
export default MyComponent;
