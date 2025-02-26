import React from "react";
import { Button } from "./ui/button";
import { House, Search, Settings } from "lucide-react";

export const MobileOptions = () => {
  return (
    <div className="flex justify-between">
      <Button className="bg-transparent">
        <House />
      </Button>
      <Button className="bg-transparent">
        <Search />
      </Button>
      <Button className="bg-transparent">
        <Settings />
      </Button>
    </div>
  );
};
