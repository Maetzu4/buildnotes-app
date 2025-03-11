import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface SearchDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const SearchDrawer: React.FC<SearchDrawerProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Drawer
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <DrawerContent className="h-5/6 flex flex-col dark:bg-opacity-20 backdrop-blur-md dark:bg-black">
        <DrawerHeader>
          <DrawerTitle>Buscar Notas</DrawerTitle>
        </DrawerHeader>

        <div className="px-6 flex-1 flex flex-col overflow-hidden">
          {children}
        </div>

        <DrawerFooter className="px-6">
          <Button onClick={onClose}>Cerrar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
