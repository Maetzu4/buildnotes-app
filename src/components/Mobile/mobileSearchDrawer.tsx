"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { useSearchNotes } from "@/hooks/useSearchNotes";
import { NoteList } from "@/components/General/noteList";
import { SearchDrawer } from "@/components/General/searchDrawer";

interface MobileSearchDrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileSearchDrawer: React.FC<MobileSearchDrawerProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const { searchTerm, setSearchTerm, notes, loading, handleSearch } =
    useSearchNotes();

  const handleCloseDrawer = () => {
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <SearchDrawer isOpen={isOpen} onClose={handleCloseDrawer}>
      <Input
        type="text"
        placeholder="Buscar notas..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          handleSearch(e.target.value);
        }}
        className="my-4 bg-transparent dark:bg-transparent"
      />

      <NoteList notes={notes} loading={loading} searchTerm={searchTerm} />
    </SearchDrawer>
  );
};

export default MobileSearchDrawer;
