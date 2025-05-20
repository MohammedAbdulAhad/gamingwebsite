import { useEffect, useRef } from "react";

const BannerAd = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '551457ce24150502ee135620f79cf233',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;
    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src =
      "//www.highperformanceformat.com/551457ce24150502ee135620f79cf233/invoke.js";

    if (adRef.current) {
      adRef.current.innerHTML = ""; // Clear any previous script
      adRef.current.appendChild(script1);
      adRef.current.appendChild(script2);
    }
  }, []);

  return <div className="w-full flex justify-center my-4" ref={adRef}></div>;
};

export default BannerAd;
