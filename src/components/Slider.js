// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";

// export const Slider = React.forwardRef(
//   ({ items = [], activeIndex = 0, centerMode, magnifiedIndex = 0, activeSlideCss = "scale-75", ...props }, ref) => {
//     const isSmall = (index) => {
//       if (props?.activeIndex + magnifiedIndex >= items?.length) {
//         return index !== props?.activeIndex + magnifiedIndex - items?.length;
//       } else {
//         return index !== props?.activeIndex + magnifiedIndex;
//       }
//     };

//     const slideItems = centerMode
//       ? items?.map((child, index) => {
//           if (isSmall(index)) {
//             return React.cloneElement(child, {
//               ...child.props,
//               className: [child.props?.className, activeSlideCss].filter(Boolean).join(" "),
//             });
//           }
//           return React.cloneElement(child);
//         })
//       : items;

//     return (
//       <AliceCarousel
//         items={slideItems}
//         infinite
//         ref={ref}
//         {...props}
//         touchTracking
//         mouseTracking
//         disableButtonsControls
//       />
//     );
//   }
// );


import React, { useState, useRef, useEffect } from "react";

export const Slider = ({
  items = [],
  activeIndex = 0,
  centerMode,
  magnifiedIndex = 0,
  activeSlideCss = "scale-75",
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(activeIndex);
  const sliderRef = useRef(null);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const isSmall = (index) => {
    if (currentIndex + magnifiedIndex >= items.length) {
      return index !== currentIndex + magnifiedIndex - items.length;
    } else {
      return index !== currentIndex + magnifiedIndex;
    }
  };
  
  let startPos = 0;

  useEffect(() =>{
    const interval = setTimeout(nextSlide,2000);
    return() => {
        clearInterval(interval);
    }
  })

  return (
    <div
      className="relative overflow-hidden w-full"
      ref={sliderRef}    
      onMouseDown={(e) => (startPos = e.clientX)}   
    >
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((child, index) => {
          return (
            <div
              key={index}
              className={`flex-shrink-0 w-full ${isSmall(index) && activeSlideCss}`}
            >
              {React.cloneElement(child, {
                ...child.props,
                className: [
                  child.props?.className,
                  index === currentIndex ? "active" : "",
                ]
                  .filter(Boolean)
                  .join(" "),
              })}
            </div>
          );
        })}
      </div>     
    </div>
  );
};
export default Slider;

