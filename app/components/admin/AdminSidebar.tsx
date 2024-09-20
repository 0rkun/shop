"use client";

import AdminSidebarItem from "./AdminSidebarItem";
import { MdDashboard, MdCreate } from "react-icons/md";
import { FaJediOrder } from "react-icons/fa";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();

  const adminPanel = [
    {
      name: "Özetler",
      icon: MdDashboard,
      url: "/admin",
    },
    {
      name: "Ürün Oluştur",
      icon: MdCreate,
      url: "/admin/create",
    },
    {
      name: "Ürünleri Yönet",
      icon: MdCreate,
      url: "/admin/manage",
    },
    {
      name: "Siparişlerim",
      icon: FaJediOrder,
      url: "/admin/order",
    },
  ];

  return (
    <div className="w-1/5 border-r h-screen p-4 bg-yellow-500">
      <div className="space-y-4">
        {adminPanel.map((admin, i) => (
          <AdminSidebarItem
            key={i}
            selected={pathname == admin.url}
            icon={admin.icon}
            name={admin.name}
            url={admin.url}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
