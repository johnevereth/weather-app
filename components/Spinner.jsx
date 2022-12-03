import Loader from "../public/loader.gif";
import Image from "next/image";

const Spinner = () => {
  return (
    <>
      <Image className="w-[200px] m-auto block" src={Loader} alt="Loading..." />
    </>
  );
};

export default Spinner;
