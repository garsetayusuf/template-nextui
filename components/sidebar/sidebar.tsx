import React, { useCallback, useEffect, useState } from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems, PropsSubItem } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";
import { AcmeIcon } from "../icons/acme-icon";
import { useListMenu } from "./list-menu";

export const SidebarWrapper = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([""]));
  const { collapsed, setCollapsed } = useSidebarContext();
  const menuItems = useListMenu();
  const [visible, setVisible] = useState(false);

  const handleResize = useCallback(() => {
    const scroled = document.documentElement.offsetWidth;
    setVisible(scroled <= 768);
    collapsed && setSelectedKeys(new Set(["0"]));
  }, [collapsed]);

  const handleCollapseOnResize = useCallback(() => {
    if (window.innerWidth <= 768 && collapsed) {
      setCollapsed(false);
      setSelectedKeys(new Set(["0"]));
    }
  }, [collapsed, setCollapsed]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleCollapseOnResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleCollapseOnResize);
    };
  }, [handleResize, handleCollapseOnResize]);

  return (
    <aside
      className={`h-screen z-[20] sticky top-0 ${visible ? "" : "hidden"}`}
    >
      {collapsed ? (
        <div
          className={Sidebar.Overlay()}
          onClick={(e: any) => setCollapsed(!collapsed)}
        />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.hasOwnProperty("subMenu") ? (
                  item.subMenu && (
                    <SidebarMenu title={item.title}>
                      {item.subMenu.map((subItem, subIndex) => (
                        <React.Fragment key={subIndex}>
                          {subItem.items ? (
                            subItem.items.map(
                              (y, indexY) =>
                                indexY === 0 && (
                                  <CollapseItems
                                    key={indexY}
                                    keys={subIndex.toString()}
                                    icon={subItem.icon}
                                    items={subItem.items}
                                    title={subItem.title}
                                    onSelectionChange={setSelectedKeys}
                                    isSelected={selectedKeys}
                                  />
                                )
                            )
                          ) : (
                            <SidebarItem
                              key={subIndex}
                              isActive={subItem.isActive}
                              title={subItem.title}
                              icon={subItem.icon}
                              href={subItem.href}
                            />
                          )}
                        </React.Fragment>
                      ))}
                    </SidebarMenu>
                  )
                ) : (
                  <SidebarItem
                    title={item.title}
                    icon={item.icon}
                    isActive={item.isActive}
                    href={item.href}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
