import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./modeToggle";
import { Settings } from "lucide-react";
import { Button } from "./ui/button";

interface ProfileProps {
  Toggle: boolean;
}

export const Profile: React.FC<ProfileProps> = ({ Toggle }) => {
  const toggle = Toggle;

  return (
    <div className="flex justify-between items-center pb-2">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://pa1.narvii.com/6745/708392843760fd6f532548c9fe5e1d13124afff9_128.gif" />
          <AvatarFallback>NO</AvatarFallback>
        </Avatar>
        <h2>Nate4</h2>
      </div>
      <div className="flex justify-center">
        {toggle && <ModeToggle />}
        {!toggle && (
          <Button className="bg-transparent px-3 rounded-sm dark:text-white text-black">
            <Settings />
          </Button>
        )}
      </div>
    </div>
  );
};
