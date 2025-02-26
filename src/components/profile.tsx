import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./modeToggle";
import { Settings } from "lucide-react";

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
      <div className="flex justify-center text-violet-600">
        {toggle && <ModeToggle />}
        {!toggle && <Settings size={22} className="text-violet-600" />}
      </div>
    </div>
  );
};
