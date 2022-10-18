import React from "react";

const ProductCount = ({product, onPressAdd, onPressSubs, cantidad} : any) => {
  return (
    <div>
      <div className="flex items-center ">
        <button
          className="px-2 rounded border-2 border-hidia-blue text-hidia-blue text-lg font-medium"
          onClick={() => onPressSubs()}
        >
          -
        </button>
        <p className="mx-4">{cantidad}</p>
        <button
          className="px-2 rounded border-2 border-hidia-blue text-hidia-blue text-lg font-medium"
          onClick={() => onPressAdd()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCount;
