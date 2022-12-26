import { useEffect } from "react";
import { client } from "../api";
import { exploreProfiles } from "../queries/exploreProfiles";

export default function Home() {
  const getExploreProfiles = async () => {
    const response = await client.query({ query: exploreProfiles })

    console.log('exploreProfilesRes: ', response)
  }

  useEffect(() => {
    getExploreProfiles()
  }, [])
  return <></>;
}
