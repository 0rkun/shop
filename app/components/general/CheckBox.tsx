import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckBoxProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({ id, label, register }) => {
  return (
    <div className="flex items-center gap-2 my-2">
      <input type="checkbox" {...register(id)} />
      <label className="text-sm text-slate-500" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
