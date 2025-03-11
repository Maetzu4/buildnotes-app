import React from "react";

interface ErrorMessageProps {
  message: string;
  type?: "error" | "warning" | "success"; // Tipo de mensaje (opcional)
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  type = "error",
}) => {
  const getColor = (): string => {
    switch (type) {
      case "warning":
        return "text-yellow-500";
      case "success":
        return "text-green-500";
      default:
        return "text-red-500";
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center p-6 shadow-lg rounded-lg">
        <p className={`font-bold text-xl ${getColor()}`}>{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
