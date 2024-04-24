import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import Modal from "../common/modal";
import Select, { OptionType } from "../common/select";

const options: OptionType[] = [
  { value: "text", label: "Text" },
  { value: "image", label: "Image" },
  { value: "video", label: "Video" },
  { value: "button", label: "Button" },
];

type SelectComponentModalProps = {
  idx: number;
  value?: string;
  onSelectComponent?: (idx: number, component: string) => void;
  className?: string;
  style?: React.CSSProperties;
};

const SelectComponentModal = ({
  idx,
  value = "",
  onSelectComponent,
  ...rest
}: SelectComponentModalProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedComponent, setSelectedComponent] = useState<string>(value);

  const handleCloseModal = () => {
    setSelectedComponent(value);
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
    <div {...rest}>
      <div
        className="border-dashed border-2 flex justify-center items-center p-4 rounded-md bg-gray-100 cursor-pointer"
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
        <Select
          options={options}
          onSelected={handleSelectedComponent}
          value={selectedComponent}
        />
      </Modal>
    </div>
  );
};
export default SelectComponentModal;
