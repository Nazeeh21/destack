import { Divider, Link } from "@chakra-ui/react";
import MenuComp from "../MenuComp";
import Tag from "../Tag";

interface QuestionProps {
  profile: any;
}

const tags = ["react", "typescript"];
const Question = ({ profile }: QuestionProps) => {
  return (
    <div className="p-3 relative border-2 rounded-md  border-black m-2">

        <div className="absolute right-2 top-2">
        <MenuComp />

        </div>
      <div className="text-lg font-semibold">
        <Link href={`https://lenster.xyz/u/${profile.handle}`}>
          {profile.handle}
        </Link>
      </div>
      <div className="my-2">
        Lorem ipsum dolor sit amet consectetur. Orci vulputate suspendisse sem
        sed. Vitae tellus vulputate fames proin ac penatibus tristique eros. Id
        vitae porta magna mattis. Tellus viverra urna adipiscing tincidunt felis
        nullam. Nunc pulvinar mauris viverra non dolor non aliquet eu.
      </div>
      <div className="flex text-sm align-middle justify-between">
        <div className="flex align-middle gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="flex  align-middle gap-2">
          <div>{profile.handle}</div>
          <div>asked 1 day ago</div>
        </div>
      </div>
    </div>
  );
};

export default Question;
