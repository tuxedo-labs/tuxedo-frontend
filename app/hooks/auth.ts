import { useState } from "react";
import { authRegister, authLogin, verifyToken } from "~/repository/auth";

export const useAuthRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await authRegister(name, email, password);
      if (response) {
        setMessage(response.message);
        setIsRegistered(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unknown error occurred");
      }
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    message,
    isRegistered,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit,
  };
};

export const useAuthLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await authLogin(email, password);
      if (response) {
        setMessage("Login successful");
        const token = response.token;
        localStorage.setItem("accessToken", token);
        setIsLoggedIn(true);
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unknown error occurred");
      }
    }
  };

  return {
    email,
    password,
    message,
    isLoggedIn,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export const useAuthVerifyToken = () => {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await verifyToken(token);
      setMessage(response.message);
      setIsVerified(true);
    } catch (error) {
      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage("An unknown error occurred.");
      }
    }
  };

  return {
    token,
    message,
    isVerified,
    setToken,
    handleSubmit,
  };
};
