import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";

const Input: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <input
        placeholder="Search"
        className="w-full py-3 px-4 border border-karcis-black rounded focus:outline-none"
      />
      <Button
        type="primary"
        icon={faSearch}
        className="absolute right-2"
      ></Button>
    </div>
  );
};

export default Input;
