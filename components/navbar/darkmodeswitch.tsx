import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";

export const DarkModeSwitch = () => {
  const { setTheme, resolvedTheme } = useNextTheme();
  return (
    <Button
      variant="light"
      isIconOnly
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Icon
          icon="ic:outline-light-mode"
          width="30"
          height="30"
          style={{ color: "#ababab" }}
        />
      ) : (
        <Icon
          icon="ic:baseline-dark-mode"
          width="30"
          height="30"
          style={{ color: "#ababab" }}
        />
      )}
    </Button>
  );
};
