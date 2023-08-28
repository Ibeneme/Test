import React from "react";

interface ErrorProps {
  src: string;
  message: string;
}

const CustomError: React.FC<ErrorProps> = (props) => {
  return (
    <div className="Error-div">
      <img className="image-error" src={props.src} alt="Error Illustration" />
      <p className="error-p">{props.message}</p>
    </div>
  );
};

export default CustomError;
