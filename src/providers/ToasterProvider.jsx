import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 5000,
        style: {
          background: "#333",
          color: "#fff",
        },
        success: {
          duration: 4000,
          theme: {
            primary: "#4caf50",
            secondary: "#fff",
          },
        },
        error: {
          duration: 4000,
          theme: {
            primary: "#f44336",
            secondary: "#fff",
          },
        },
      }}
    />
  );
};

export default ToasterProvider;
