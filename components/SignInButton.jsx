import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";
import { Button } from "./ui/button";
import { TfiMicrosoftAlt } from "react-icons/tfi";

export const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
    if (loginType === "popup") {
      instance
        .loginPopup(loginRequest)
        .then(() => {
          window.location.href = "/admin";
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <Button
      variant="outline"
      className="w-64 flex justify-evenly border-black"
      onClick={() => handleLogin("popup")}
    >
      Login com Microsoft
      <TfiMicrosoftAlt />
    </Button>
  );
};
