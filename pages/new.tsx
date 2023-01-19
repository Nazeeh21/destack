import { useState } from "react";
import Markdown from "../components/Mdeditor";

const NewQuestion = () => {
  const [question, setQuestion] = useState<{ text: string; html: string }>({
    text: "",
    html: "",
  });
  return (
    <>
      <div className="text-lg font-semibold">Ask a Question!</div>
      <div>Title</div>
      <Markdown value={question} setValue={setQuestion} />
    </>
  );
};

export default NewQuestion;
