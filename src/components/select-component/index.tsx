/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import Modal from "../modal";
import Select, { OptionType } from "../select";

const options: OptionType[] = [
  { value: "text", label: "Text" },
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
  { value: "button", label: "Button" },
];

type SelectComponentProps = {
  idx: number;
  onSelectComponent?: (idx: number, component: string) => void;
};

const SelectComponent = ({ idx, onSelectComponent }: SelectComponentProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedComponent, setSelectedComponent] = useState<string>("");

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSelectedComponent = (value: string) => {
    setSelectedComponent(value);
  };

  const handleApply = () => {
    selectedComponent &&
      onSelectComponent &&
      onSelectComponent(idx, selectedComponent);

    setOpenModal(false);
  };

  return (
    <>
      <div
        className="border-dashed border flex justify-center items-center p-4 rounded-md bg-gray-100 cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
        <PlusIcon />
      </div>
      <Modal
        isOpen={openModal}
        onClose={handleCloseModal}
        onConfirm={handleApply}
        title="Select component"
      >
        <Select options={options} onSelected={handleSelectedComponent} />
      </Modal>
    </>
  );
};
export default SelectComponent;
