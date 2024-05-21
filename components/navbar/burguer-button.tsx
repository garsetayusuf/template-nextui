import React from "react";
import { useSidebarContext } from "../layout/layout-context";
import { StyledBurgerButton } from "./navbar.styles";

export const BurguerButton = () => {
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <div
      className={StyledBurgerButton({
        open: collapsed,
      })}
      onClick={(e: any) => setCollapsed(!collapsed)}
    >
      <div />
      <div />
    </div>
  );
};
