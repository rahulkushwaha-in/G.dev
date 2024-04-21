"use client";
import { useParams } from 'next/navigation'
import {
  LucideIcon,
  LayoutDashboard,
  BadgeDollarSign,
  CircleUserRound,
  Settings,
  WalletCards,
  HelpCircle,
} from "lucide-react";
import SidebarItem from "./item";


const items = [
  {
    name: "Dashboard",
    path: `/learn/react/dashboard`,
    icon: LayoutDashboard,
  },
  {
    name: "Transaction",
    path: "/learn/react/transaction",
    icon: BadgeDollarSign,
  },
  {
    name: "Payment",
    path: "/learn/react/payment",
    icon: WalletCards,
  },

  {
    name: "Accounts",
    path: "/learn/react/accounts",
    icon: CircleUserRound,
  },
  {
    name: "Settings",
    path: "/learn/react/settings",
    icon: Settings,
    items: [
      {
        name: "General",
        path: "/learn/react/settings",
      },
      {
        name: "Security",
        path: "/learn/react/settings/",
      },
      {
        name: "Notifications",
        path: "/learn/react/settings/",
      },
    ],
  },
  {
    name: "help",
    path: "/settings",
    icon: HelpCircle,
    items: [
      {
        name: "General",
        path: "/settings",
      },
      {
        name: "Security",
        path: "/settings/security",
      },
      {
        name: "Notifications",
        path: "/settings/notifications",
      },
    ],
  },
];

const SidebarLeft = () => {
  const params = useParams()
  const currentCategory = params.category || 'learn'
  console.log(params.category)
  return (
    <div>
      <div className="flex flex-col space-y-6 w-full">
      <h3 class="bg-gray-300 py-4 px-2 sticky top-0 z-30">Menu</h3>
        <div className="flex flex-col space-y-2">
          {items.map((item, index) => (
            <SidebarItem key={index} item={item}  categoryURL={currentCategory} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;