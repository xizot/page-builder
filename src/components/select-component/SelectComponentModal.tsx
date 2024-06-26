import { useState } from "react";
import PlusIcon from "../icons/PlusIcon";
import Modal from "../common/modal";
import Select from "../common/select";
import { EnumComponentType, componentOptions } from "../types/ComponentTypes";

type SelectComponentModalProps = {
  idx: number;
  value?: string;
  onSelectComponent?: (idx: number, component: EnumComponentType) => void;
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
      onSelectComponent(idx, selectedComponent as EnumComponentType);

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
          options={componentOptions}
          onSelected={handleSelectedComponent}
          value={selectedComponent}
        />
      </Modal>
    </div>
  );
};
export default SelectComponentModal;
