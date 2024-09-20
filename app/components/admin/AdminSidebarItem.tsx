import Link from "next/link";
import { IconType } from "react-icons";

interface AdminSidebarItemProps {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}

const AdminSidebarItem: React.FC<AdminSidebarItemProps> = ({
  selected,
  name,
  icon: Icon,
  url,
}) => {
  return (
    <div>
      <Link
        className={`cursor-pointer flex items-center gap-2 ${
          selected ? "semibold text-2xl" : " text-gray-600 text-lg"
        }`}
        href={url}
      >
        <Icon size={"25"} />
        <div>{name}</div>
      </Link>
    </div>
  );
};

export default AdminSidebarItem;
