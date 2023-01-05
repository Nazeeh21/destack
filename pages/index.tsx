import { Heading, Link, Spinner, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../api";
import Question from "../components/Question";
import { exploreProfiles } from "../queries/exploreProfiles";

export default function Home() {
  const [profiles, setExploreProfiles] = useState<null | []>();
  const [fetchingProfiles, setFetchingProfiles] = useState<boolean>(false);

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
    <>
      <div className="w-full">
        <Heading textAlign='center' fontFamily={"regular"}>Explore Profiles</Heading>
        {fetchingProfiles ? (
          <Spinner />
        ) : (
          profiles?.map((profile: any) => (
            <Question key={profile.handle} profile={profile} />
          ))
        )}
      </div>
    </>
  );
}
