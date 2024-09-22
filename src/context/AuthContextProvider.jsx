import React, { useContext, useState } from "react";
import PropTypes from "prop-types"; // Импортируем PropTypes

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "https://metalabs.kg:8089";

const AuthContextProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [errorr, setErrorr] = useState("");
  const [regSt, setRegSt] = useState(false);

  async function register(formData, fork) {
    try {
      const response = await fetch(`${API}${fork}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData);
        setRegSt(true);
      } else {
        const errorData = await response.json();
        console.log(errorData);
        console.log(JSON.stringify(formData));
      }
    } catch (err) {
      setErrorr(err);
      console.error("Error:", err);
    }
  }

  async function sendFile(formData) {
    const response = await fetch(`${API}/register_company/it_expo/`, {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <authContext.Provider
      value={{
        role,
        errorr,
        regSt,
        setRegSt,
        sendFile,
        setRole,
        register,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

// Добавляем PropTypes для children
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
