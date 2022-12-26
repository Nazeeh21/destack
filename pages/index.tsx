import { Link, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { client } from "../api";
import { exploreProfiles } from "../queries/exploreProfiles";

export default function Home() {
  const [profiles, setExploreProfiles] = useState<null | []>();

  const getExploreProfiles = async () => {
    const response = await client.query({ query: exploreProfiles });

    const profiles = response.data.exploreProfiles.items;

    setExploreProfiles(profiles);
  };

  useEffect(() => {
    getExploreProfiles();
  }, []);
  return (
    <>
      <VStack gap={2}>
        {profiles?.map((profile: any) => (
          <Link
            target="_blank"
            key={profile.id}
            href={`https://lenster.xyz/u/${profile.handle}`}
          >
            {profile.handle}
          </Link>
        ))}
      </VStack>
    </>
  );
}
