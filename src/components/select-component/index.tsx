import { DeleteIcon } from "../icons";
import SelectComponentModal from "./SelectComponentModal";

type SelectComponentProps = {
  totalColumn: number;
  type?: string;
  idx: number;
  onSelectComponent: (idx: number, component: string) => void;
  onDeleteComponent: (idx: number) => void;
};

const SelectComponent = ({
  idx,
  type,
  totalColumn,
  onSelectComponent,
  onDeleteComponent,
}: SelectComponentProps) => {
  const handleSelectedComponent = (idx: number, component: string) => {
    onSelectComponent(idx, component);
  };

  const handleRemoveComponent = () => {
    onDeleteComponent(idx);
  };

  return (
    <div
      className="px-2 "
      style={{
        width: `calc(${100 / totalColumn}%)`,
      }}
    >
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
    </div>
  );
};

export default SelectComponent;
