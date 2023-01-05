import { Link } from "@chakra-ui/react";

interface QuestionProps {
  profile: any;
}

const Question = ({ profile }: QuestionProps) => {
  return (
    <div className="p-3 border-2 rounded-md font-regular border-black m-2">
      <Link href={`https://lenster.xyz/u/${profile.handle}`}>{profile.handle}</Link>
    </div>
  );
};

export default Question;
