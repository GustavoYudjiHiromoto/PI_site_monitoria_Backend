import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import Image from "next/image";

const imageStyle = {
  objectFit: "cover",
};

export const PageLayout = (props) => {
  return (
    <>
      <main className="flex w-full px-6 h-full bg-gradient-to-br from-[#82A0BC] font-sans">
        <Image
          className="blur-md"
          src="/biblio.png"
          fill={true}
          alt="imagem biblioteca maua"
          style={imageStyle}
        />
        <div className="flex flex-col lg:flex-row lg:justify-between w-full h-full items-center">
          <div className="flex justify-center lg:w-1/2 h-full">
            <div className="flex z-10 items-center font-extrabold text-4xl text-center text-white drop-shadow-[0_1.4px_1.4px_rgba(0,0,0,0.8)] select-none">
              Bem vindo à monitoria da Mauá!
            </div>
          </div>
          <div className="flex z-10 flex-col lg:w-1/2 h-full justify-center">
            <div className="flex justify-center text-xl font-bold text-center select-none text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Faça login usando seu email institucional
            </div>
            <div className="flex justify-center mt-5">
              <SignInButton className="flex justify-center" />
            </div>
          </div>
        </div>
        {props.children}
      </main>
    </>
  );
};
