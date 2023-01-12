import { Heading, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAccount, useEnsName } from "wagmi";
import { client } from "../../api";
import { exploreProfiles } from "../../queries/exploreProfiles";
import Question from "../Question";

const MainComp = () => {
  const [profiles, setExploreProfiles] = useState<null | []>();
  const [fetchingProfiles, setFetchingProfiles] = useState<boolean>(false);
  const { address } = useAccount();
  const { data: ens } = useEnsName({
    address
  });

  const getExploreProfiles = async () => {
    setFetchingProfiles(true);
    const response = await client.query({ query: exploreProfiles });

    const profiles = response.data.exploreProfiles.items;

    setExploreProfiles(profiles);
    setFetchingProfiles(false);
  };

  useEffect(() => {
    getExploreProfiles();
  }, []);
  return (
    <div className="w-full p-2">
      <div className="w-full px-2 flex justify-center align-middle">
        <div className="w-1/2 text-xl font-semibold">
        {address && `Welcome, ${ens ? ens : address}`}
        </div>
        <div className="flex justify-between gap-2 w-1/2 align-middle">
          <input placeholder="Search Question" className="bg-white border-black border-2 rounded px-1 w-8/12" />
          <button className="bg-black text-['1rem'] font-medium text-white rounded-md w-4/12 p-2">Ask Question</button>
        </div>
      </div>
      {fetchingProfiles ? (
        <Spinner />
      ) : (
        profiles?.map((profile: any) => (
          <Question key={profile.handle} profile={profile} />
        ))
      )}
    </div>
  );
};

export default MainComp;
