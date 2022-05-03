import React, { forwardRef } from "react";

export default function Input(props) {
  const { className, register, name, ...rest } = props;
  return (
    <div className="flex flex-col items-start">
      <input
        className={
          `border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm ` +
          className
        }
        {...register(name)}
        {...rest}
      />
    </div>
  );
}
