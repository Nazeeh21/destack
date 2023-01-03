/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit";

const navItems = [
  {
    name: "Home",
    href: "/",
    src: "/icons/home.svg",
  },
  {
    name: "Questions",
    href: "/my-questions",
    src: "/icons/questions.svg",
  },
  {
    name: "Explore",
    href: "/explore",
    src: "/icons/explore.svg",
  },
];

const LeftComp = () => {
  return (
    <div className="w-full h-full font-regular flex flex-col  space-around align-center self-center">
      <div className="w-fit h-fit mb-[4.25rem] m-auto">
        <img className="text-black" src="logo.svg" alt="logo" />
      </div>
      <div className="m-auto h-full flex-start">
        {navItems.map((item) => (
          <div
            key={item.name}
            className="flex cursor-pointer font-semibold gap-3 mb-4 color-black align-center"
          >
            <img className="w-5" src={item.src} alt={item.name} />
            <div className="text-lg ">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="m-auto h-fit flex-end w-fit">
        <ConnectButton showBalance={false} chainStatus="none" />
      </div>
    </div>
  );
};

export default LeftComp;
