import SelectComponentModal from "../select-component-modal";

type SelectComponentProps = {
  totalColumn: number;
  type?: string;
  idx: number;
  onSelectedComponent: (widgetDataIdx: number, component: string) => void;
};

const SelectComponent = ({
  idx,
  type,
  totalColumn,
  onSelectedComponent,
}: SelectComponentProps) => {
  const handleSelectedComponent = (
    widgetDataIdx: number,
    component: string
  ) => {
    onSelectedComponent(widgetDataIdx, component);
  };

  return (
    <div
      className="px-2"
      style={{
        width: `calc(${100 / totalColumn}%)`,
      }}
    >
      {type}
      <SelectComponentModal
        idx={idx}
        onSelectComponent={handleSelectedComponent}
        value={type}
      />
    </div>
  );
};

export default SelectComponent;
