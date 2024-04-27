"use client";
import { useMemo, useState } from "react";
import { ChevronDown, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import SubMenuItem from "./sub-item";

const SidebarItem = ({ item, currentCategoryURL }) => {
  const { name, items, path } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  // console.log(pathname)

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    // console.log(path)
    return router.push(path);
  };
  const isActive = useMemo(() => {
    if (items && items.length > 0) {
      if (currentCategoryURL === pathname) {
        setExpanded(true);
        return true;
      }
    }

    return currentCategoryURL === pathname;
  }, [items, currentCategoryURL, pathname]);

  return (
    <>
      <div
        className={`flex items-center p-3 rounded-lg hover:bg-sidebar-background cursor-pointer hover:text-sidebar-active justify-between
     ${isActive && "text-sidebar-active bg-sidebar-background"}
    `}
        onClick={onClick}
      >
        <div className="flex items-center space-x-2">
          <p className="text-sm font-semibold">{name} </p>
        </div>
        {items && items.length > 0 && <ChevronDown size={18} />}
      </div>
      {expanded && items && items.length > 0 && (
        <div className="flex flex-col space-y-1 ml-10">
          {items.map((item) => (
            <SubMenuItem key={currentCategoryURL} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
