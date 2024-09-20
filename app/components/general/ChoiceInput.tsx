import { IconType } from "react-icons";

interface ChoiceInputProps {
  text: string;
  icon: IconType;
  onClick: (value: string) => void;
  selected?: boolean;
}
const ChoiceInput: React.FC<ChoiceInputProps> = ({
  text,
  icon: Icon,
  onClick,
  selected,
}) => {
  return (
    <div
      onClick={() => onClick(text)}
      className={`cursor-pointer rounded-md flex items-center gap-2 my-2 mx-2 p-4 justify-center h-16 border ${
        selected ? "border-green-500" : "border-red-600"
      }`}
    >
      <Icon />
      <span className="text-slate-600 text-lg">{text} </span>
    </div>
  );
};

export default ChoiceInput;
