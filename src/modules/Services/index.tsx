import Residents from "./Residents";
import DueDiligence from "./DueDiligence";
import Fellows from "./Fellows";

function Sections() {
  return (
    <div className="h-full flex flex-col m-3 my-8 lg:mx-[20vw]">
      <Residents />
      <Fellows />
      <DueDiligence />
    </div>
  );
}

export default Sections;
