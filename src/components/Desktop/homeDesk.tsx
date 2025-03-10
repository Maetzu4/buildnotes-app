import { Profile } from "@/components/General/profile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  House,
  Minus,
  Notebook,
  Plus,
  Search,
  Settings,
  Trash2,
} from "lucide-react";
import { ModeToggle } from "@/components/General/modeToggle";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          minSize={15}
          maxSize={25}
          className="p-4 bg-zinc-200 dark:bg-zinc-900"
        >
          <div className="flex justify-between items-center pb-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://pa1.narvii.com/6745/708392843760fd6f532548c9fe5e1d13124afff9_128.gif" />
                <AvatarFallback>NO</AvatarFallback>
              </Avatar>
              <h2>Nate4</h2>
            </div>
            <div className="flex align-top">
              <Settings size={22} className="text-violet-600" />
            </div>
          </div>

          <div className="flex w-full justify-center">
            <Button className="w-full">
              <Plus /> Crear
            </Button>
          </div>

          <div className="flex w-full justify-center">
            <Minus />
          </div>

          <div>
            <div className="flex w-full justify-center">
              <Button className="w-full justify-start bg-transparent text-black dark:text-white hover:text-white">
                <Search /> Buscar
              </Button>
            </div>
            <div className="flex w-full justify-center">
              <Button className="w-full justify-start bg-transparent text-black dark:text-white hover:text-white">
                <House /> Inicio
              </Button>
            </div>
            <div className="flex w-full justify-center">
              <Button className="w-full justify-start bg-transparent text-black dark:text-white hover:text-white">
                <Trash2 /> Papelera
              </Button>
            </div>

            <div className="flex w-full justify-center">
              <Minus />
            </div>

            <div className="flex w-full justify-center">
              <Button className="w-full justify-start bg-transparent text-black dark:text-white hover:text-white">
                <Notebook /> Nota 1
              </Button>
            </div>
            <div className="flex w-full justify-center">
              <Button className="w-full justify-start bg-transparent text-black dark:text-white hover:text-white">
                <Notebook /> Nota 2
              </Button>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle className="bg-zinc-300 dark:bg-zinc-900" />

        <ResizablePanel className="p-4 dark:bg-zinc-950">
          <Profile Toggle={true} />

          <div className="grid grid-cols-[20%_60%_20%]  items-center">
            <div className="flex justify-center text-violet-600">
              <ModeToggle />
            </div>

            <h1 className="text-xl font-bold text-center">
              Buenas tardes, Nate4
            </h1>

            <div className="flex justify-center text-violet-600">
              <ModeToggle />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
