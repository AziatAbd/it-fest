import React, { useContext, useState } from "react";
import PropTypes from "prop-types"; // Импортируем PropTypes
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "https://itfest.peaksoft.house";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [role, setRole] = useState(null);
  const [errorr, setErrorr] = useState("");
  const [regSt, setRegSt] = useState(false);

  async function register(formData, fork) {
    try {
      await fetch(`${API}/api${fork}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setRegSt(true);
      navigate("/");
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
