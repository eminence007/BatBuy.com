import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

export const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const toast = useToast();
  const navigate = useNavigate();
  const [batUser, setBatUser] = React.useState(
    JSON.parse(localStorage.getItem("batUser")) || {}
  );
  const [isAuth, setIsAuth] = React.useState(batUser.id ? true : false);

  //for user authentication
  const login = (loginDetails) => {
    axios
      .get(` http://localhost:8080/users/${loginDetails.email}`)
      .then((res) => {
        Promise.resolve(res);
        if (res.data.password === loginDetails.password) {
          setIsAuth(true);
          localStorage.setItem("batUser", JSON.stringify(res.data));
          setBatUser(res.data);
          navigate("/");
          toast({
            title: "Login Successful",
            description: "You are now logged in, Explore our amazing Products",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          toast({
            title: "Ooops! Wrong Password",
            description: "Kindly enter the correct password",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        toast({
          title: "Ooops! Not a bat Member yet.",
          description:
            "Please enter a registered email or create a new account",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const logout = () => {
    localStorage.removeItem("batUser");
    setIsAuth(false);
    toast({
      title: "Logged Out",
      description: "We will miss you. Please login back soon.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };
  return (
    <AuthContext.Provider value={{ isAuth, batUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
