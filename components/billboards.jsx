import React from "react";

const Billboards = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.6/1] overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      >
        <div className="h-full w-full flex items-center justify-center flex-col text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-3xl max-w-xs">
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboards;
