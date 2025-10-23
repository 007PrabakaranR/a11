// "use client";
// import { useState } from "react";
// import { BarChart3, Package, Users, ShoppingBag } from "lucide-react";

// export default function AdminSidebar() {
//   const [active, setActive] = useState("inventory");

//   const menuItems = [
//     { id: "inventory", label: "Inventory Management", icon: <Package size={18} /> },
//     { id: "analytics", label: "Analytics", icon: <BarChart3 size={18} /> },
//     { id: "customers", label: "Customer Management", icon: <Users size={18} /> },
//     { id: "orders", label: "Order Management", icon: <ShoppingBag size={18} /> },
//   ];

//   return (
//     <aside className="flex flex-col bg-gradient-to-b from-red-600 to-red-800 text-white w-64 h-screen p-4 shadow-lg">
//       <h2 className="text-xl font-bold mb-6 text-center">Admin Panel</h2>

//       <nav className="flex flex-col space-y-2">
//         {menuItems.map((item) => (
//           <button
//             key={item.id}
//             onClick={() => setActive(item.id)}
//             className={`flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all duration-200 
//               ${
//                 active === item.id
//                   ? "bg-white text-red-700 font-semibold"
//                   : "hover:bg-red-500 hover:pl-5"
//               }`}
//           >
//             {item.icon}
//             <span>{item.label}</span>
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// }


"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BarChart3, Package, Users, ShoppingBag, Network } from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { id: "inventory", label: "Inventory Management", icon: <Package size={18} />, href: "/admin/inventry" },
    { id: "analytics", label: "Analytics", icon: <BarChart3 size={18} />, href: "/admin/analytics" },
    { id: "customers", label: "Customer Management", icon: <Users size={18} />, href: "/admin/customers" },
    { id: "orders", label: "Order Management", icon: <ShoppingBag size={18} />, href: "/admin/orders" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="flex flex-col bg-gradient-to-b from-red-600 to-red-800 text-white w-60 h-screen p-6 shadow-lg m-2 rounded-lg">
        <h2 className="text-2xl font-bold mb-10 text-center">Admin Panel</h2>

        <nav className="flex flex-col justify-between flex-1">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.id} href={item.href} passHref className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                      ${isActive ? "bg-white text-red-700 font-semibold" : "hover:bg-red-500 hover:pl-5"}`}>

                    {item.icon}
                    <span>{item.label}</span>
  
                </Link>
              );
            })}
          </div>

          <div className="text-sm text-center text-red-200 mt-10">
            © 2025 Admin Panel
            <Network className="inline-block ml-1" size={12} />
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="bg-yellow-700 w-full h-screen m-2 rounded-lg p-6">
        <h2>Hello</h2>
      </div>
    </div>
  );
}
