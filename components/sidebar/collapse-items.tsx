"use client";
import React, { useEffect, useState } from "react";
import { ChevronUpIcon } from "../icons/sidebar/chevron-up-icon";
import { Accordion, AccordionItem } from "@nextui-org/react";
import clsx from "clsx";
import NextLink from "next/link";
import { useSidebarContext } from "../layout/layout-context";
import { NextPage } from "next";

export interface PropsSubItem {
  title: string;
  icon: React.ReactNode;
  isActive?: boolean;
  href?: string | any;
}

interface Props {
  keys: any;
  icon: React.ReactNode;
  title: string;
  items: PropsSubItem[];
  isSelected: any;
  onSelectionChange: (keys: Set<any>) => void;
}

export const CollapseItems: NextPage<Props> = ({
  keys,
  icon,
  items,
  title,
  onSelectionChange,
  isSelected,
}) => {
  const { collapsed, setCollapsed } = useSidebarContext();
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setCollapsed(false);
    }
  };

  const onSelectionChangeFunction = (index: any) => {
    if (index.currentKey === undefined) {
      onSelectionChange(new Set(["0"]));
    } else {
      onSelectionChange(keys);
    }
  };

  return (
    <div className="flex gap-4 h-full items-center cursor-pointer">
      <Accordion
        className="px-0"
        selectedKeys={isSelected}
        onSelectionChange={onSelectionChangeFunction}
      >
        <AccordionItem
          key={keys}
          indicator={<ChevronUpIcon />}
          classNames={{
            indicator: "data-[open=true]:-rotate-180",
            trigger:
              "py-0 min-h-[44px] hover:bg-default-100 rounded-xl active:scale-[0.98] transition-transform px-3.5",

            title:
              "px-0 flex text-base gap-2 h-full items-center cursor-pointer",
          }}
          aria-label={title}
          title={
            <div className="flex flex-row gap-2">
              <span>{icon}</span>
              <span>{title}</span>
            </div>
          }
        >
          <div className="pl-6">
            {items.map((item, index) => (
              <span
                key={index}
                className="w-full flex  text-default-500 hover:text-default-900 transition-colors"
              >
                <NextLink
                  href={item.href}
                  className="text-default-900 active:bg-none max-w-full"
                >
                  <div
                    className={clsx(
                      item.isActive
                        ? "bg-primary-100 [&_svg_path]:fill-primary-500"
                        : "hover:bg-default-100",
                      "flex gap-2 w-full min-h-[44px] h-full items-center px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                    )}
                    onClick={handleClick}
                  >
                    {item.icon}
                    <span className="text-default-900">{item.title}</span>
                  </div>
                </NextLink>
              </span>
            ))}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
