import React, { useState, createContext } from "react";

interface AuthContextProps {
  // hospital: string;
  // setHospital: React.Dispatch<React.SetStateAction<string>>;
  // savedHospital: any[];
  // setSavedHospital: React.Dispatch<React.SetStateAction<any[]>>;
  currentUser: any;
  setCurrentUser: React.Dispatch<React.SetStateAction<any>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  // modal: any[];
  // setModalContent: (hospital: string) => void;
}

export const AuthContext = createContext<AuthContextProps>({
  // hospital: "",
  // setHospital: () => {},
  // savedHospital: [],
  // setSavedHospital: () => {},
  currentUser: null,
  setCurrentUser: () => {},
  isOpen: false,
  setIsOpen: () => {},
  // modal: [],
  // setModalContent: () => {},
});

const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // const [hospital, setHospital] = useState("");
  // const [savedHospital, setSavedHospital] = useState<any[]>([]);
  const [currentUser, setCurrentUser] = useState<any | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  // const [modal, setModal] = useState<any[]>([]);

  // const setModalContent = (hospital: string) => {
  //   setModal([hospital]);
  //   setIsOpen(!isOpen);
  // };

  return (
    <AuthContext.Provider
      value={{
        // hospital,
        // setHospital,
        // savedHospital,
        // setSavedHospital,
        currentUser,
        setCurrentUser,
        isOpen,
        setIsOpen,
        // modal,
        // setModalContent,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
