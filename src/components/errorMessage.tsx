import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center p-6 shadow-lg rounded-lg">
        <p className="font-bold text-xl text-red-500">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
