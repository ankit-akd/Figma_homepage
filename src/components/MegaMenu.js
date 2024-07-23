import { Text } from "./Text";
import React from "react";

export default function MegaMenu() {
  return (
    <div className="absolute top-auto z-[9] min-w-[200px] pt-1">
      <div className="w-full rounded-lg bg-white-A700 p-5 shadow-xs">
        <div className="flex flex-row items-start gap-4 sm:gap-5">
          <div className="flex flex-col items-start gap-3 sm:gap-3">
            <Text className="font-opensans text-[16px] font-bold sm:text-[15px]">Title 1</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#">
                <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 1</Text>
              </a>
              <a href="#" className="self-center sm:text-[12px]">
                <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 2</Text>
              </a>
              <a href="#" className="self-center sm:text-[12px]">
                <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 3</Text>
              </a>
              <a href="#" className="self-center sm:text-[12px]">
                <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 4</Text>
              </a>
              <a href="#" className="self-center sm:text-[12px]">
                <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 5</Text>
              </a>
              <a href="#" className="self-center sm:text-[12px]">
                <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 6</Text>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="font-opensans text-[16px] font-bold sm:text-[15px]">Title 2</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#">
                <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 1</Text>
              </a>
            </div>
            <Text className="self-center font-opensans text-[14px] font-normal text-black-900 sm:text-[13px]">
              Menu 2
            </Text>
            <Text className="self-center font-opensans text-[14px] font-normal text-black-900 sm:text-[13px]">
              Menu 3
            </Text>
            <Text className="self-center font-opensans text-[14px] font-normal text-black-900 sm:text-[13px]">
              Menu 4
            </Text>
            <a href="#" className="self-center sm:text-[12px]">
              <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 5</Text>
            </a>
          </div>
          <div className="flex flex-col items-start gap-4 sm:gap-4">
            <Text className="font-opensans text-[16px] font-bold sm:text-[15px]">Title 3</Text>
            <div className="flex flex-col items-start gap-3 sm:gap-3">
              <a href="#">
                <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 1</Text>
              </a>
            </div>
            <a href="#" className="self-center sm:text-[12px]">
              <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 2</Text>
            </a>
            <a href="#" className="self-center sm:text-[12px]">
              <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 3</Text>
            </a>
            <a href="#" className="self-center sm:text-[12px]">
              <Text className="font-opensans text-[14px] font-normal text-black-900">Menu 4</Text>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}