import { ConnectButton } from "@rainbow-me/rainbowkit";

const LeftComp = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center space-around align-center self-center">
      <div className="w-fit flex-start m-auto">
{/* eslint-disable-next-line @next/next/no-img-element*/}
<img className="text-black  " src="logo.svg" alt="logo" />

      </div>
      
      <div className="m-auto h-fit flex-end w-fit">
        <ConnectButton showBalance={false} chainStatus="none" />
      </div>
    </div>
  );
};

export default LeftComp;
