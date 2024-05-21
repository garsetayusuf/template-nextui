import { usePathname } from "next/navigation";
import { HomeIcon } from "../icons/sidebar/home-icon";
import React from "react";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";

export const useListMenu = () => {
  const pathname = usePathname();
  const menuItems = [
    {
      title: "Home",
      icon: <HomeIcon />,
      isActive: pathname === "/",
      href: "/",
    },
    {
      title: "Main Menu",
      subMenu: [
        {
          isActive: pathname === "/accounts",
          title: "Accounts",
          icon: <AccountsIcon />,
          href: "accounts",
        },
        {
          isActive: pathname === "/payments",
          title: "Payments",
          icon: <PaymentsIcon />,
        },
        {
          title: "Banks",
          items: [
            {
              title: "Banks Accounts",
              icon: <ViewIcon />,
              href: "",
            },
            { title: "Credit Cards", icon: <ViewIcon />, href: "" },
            { title: "Loans", icon: <ViewIcon />, href: "" },
          ],
          icon: <BalanceIcon />,
        },
        {
          isActive: pathname === "/customers",
          title: "Customers",
          items: [
            {
              title: "Banks Accounts",
              icon: <ViewIcon />,
              href: "",
            },
            { title: "Credit Cards", icon: <ViewIcon />, href: "" },
            { title: "Loans", icon: <ViewIcon />, href: "" },
          ],
          icon: <CustomersIcon />,
        },
        {
          isActive: pathname === "/products",
          title: "Products",
          icon: <ProductsIcon />,
        },
        {
          isActive: pathname === "/reports",
          title: "Reports",
          icon: <ReportsIcon />,
        },
      ],
    },
    {
      title: "General",
      subMenu: [
        {
          isActive: pathname === "/developers",
          title: "Developers",
          icon: <DevIcon />,
        },
        {
          isActive: pathname === "/view",
          title: "View Test Data",
          icon: <ViewIcon />,
        },
        {
          isActive: pathname === "/settings",
          title: "Settings",
          icon: <SettingsIcon />,
        },
      ],
    },
    {
      title: "Updates",
      subMenu: [
        {
          isActive: pathname === "/changelog",
          title: "Changelog",
          icon: <ChangeLogIcon />,
        },
      ],
    },
  ];

  return menuItems;
};
