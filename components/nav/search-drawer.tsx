import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

export const SearchDrawer = () => {
  return (
    <Drawer direction="top">
      <DrawerTrigger>검색</DrawerTrigger>
      <DrawerContent className="-top-24 h-72 flex2 border-none rounded-t-none rounded-b-lg">
        <div className="relative w-full max-w-lg">
          <SearchIcon className="absolute top-1/2 left-3 -translate-y-1/2" />
          <Input
            className="pl-10 pr-2 py-6 w-full rounded-3xl"
            placeholder="검색어를 입력해주세요"
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};
