import React from "react";

const ShimmerButton = ({
  title,
  icon,
  index,
  otherClasses,
}: {
  title: string;
  icon: string;
  index: number;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`inline-flex text-xs lg:text-base h-12 animate-shimmer items-center justify-evenly gap-x-2 lg:gap-x-0 lg:justify-between rounded-md border border-slate-800 bg-[linear-gradient(110deg,rgba(4,7,29,1),45%,#EAECEC,50%,rgba(12,14,35,1))] bg-[length:200%_100%] px-6 font-medium text-[#C1C2D3] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
    >
      <div
        key={icon}
        className={`lg:w-10 lg:h-10 w-5 h-5 
          ${index === 1 && "bg-white rounded-full w-6 h-6 lg:w-8 lg:h-8"} 
          ${index === 6 && "bg-white rounded-full w-6 h-6 lg:w-8 lg:h-8"} 
          ${index === 9 && "w-6 h-6 lg:w-10 lg:h-10"}    
        flex justify-center items-center`}
      >
        <img
          src={icon}
          alt={icon}
          className={`lg:p-2
            ${index === 1 && "lg:p-0 w-6 h-6 lg:w-8 lg:h-8"} 
            ${index === 3 && "w-6 h-6 lg:w-11 lg:h-11"} 
            ${index === 4 && "w-8 h-8 lg:w-10 lg:h-10"} 
            ${index === 6 && "w-6 h-6 lg:w-8 lg:h-8"}   
            ${index === 9 && "w-6 h-6 lg:w-10 lg:h-10"} 
          `}
        />
      </div>
      {title}
    </button>
  );
};

export default ShimmerButton;
