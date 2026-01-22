import s from "./Input.module.scss";
import Search from "../../../public/search.svg";
import Image from "next/image";
type Props = {};

const Input = (props: Props) => {
  return (
    <div className={s.input}>
      <Image src={Search} width={20} height={20} alt="search svg icon" />
      <input type="text" placeholder="Search music" />
    </div>
  );
};

export default Input;
