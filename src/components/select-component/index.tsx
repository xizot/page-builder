import { DeleteIcon } from "../icons";
import { EnumComponentType } from "../types/ComponentTypes";
import SelectComponentModal from "./SelectComponentModal";

type SelectComponentProps = {
  type?: EnumComponentType;
  idx: number;
  onSelectComponent: (idx: number, component: EnumComponentType) => void;
  onDeleteComponent: (idx: number) => void;
};

const SelectComponent = ({
  idx,
  type,
  onSelectComponent,
  onDeleteComponent,
}: SelectComponentProps) => {
  const handleSelectedComponent = (
    idx: number,
    component: EnumComponentType
  ) => {
    onSelectComponent(idx, component);
  };

  const handleRemoveComponent = () => {
    onDeleteComponent(idx);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      {type && (
        <div className="flex gap-2 mb-4 bg-gray-100 p-4 rounded-md">
          <p>
            Component Type: <b>{type}</b>
          </p>
          <DeleteIcon onClick={handleRemoveComponent} />
        </div>
      )}
      <SelectComponentModal
        idx={idx}
        onSelectComponent={handleSelectedComponent}
        value={type}
      />
    </div>
  );
};

export default SelectComponent;
