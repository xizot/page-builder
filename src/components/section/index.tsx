import { useEffect, useState } from "react";
import {
  Control,
  useFieldArray,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { FormValues, WidgetDataType } from "../../pages/Home/types";
import DeleteIcon from "../icons/DeleteIcon";
import ViewColumnIcon from "../icons/ViewColumnIcon";
import SelectComponent from "../select-component";

export type SectionProps = {
  control: Control<FormValues>;
  idx: number;
  onDelete: (idx: number) => void;
};

const MAX_COLUMNS = 4;

const Section = ({ control, idx, onDelete }: SectionProps) => {
  const [openSelectColumns, setOpenSelectColumns] = useState<boolean>(false);

  const { setValue, getValues } = useFormContext<FormValues>();

  const totalColumn = useWatch({
    control,
    name: `page.widgets.${idx}.column`,
  });

  const { fields } = useFieldArray({
    control,
    name: `page.widgets.${idx}.widgetData`,
  });

  useEffect(() => {
    const widgetData = getValues(`page.widgets.${idx}.widgetData`) || [];
    let newWidgetData: WidgetDataType[] = new Array(totalColumn)
      .fill(0)
      .map(() => ({ type: "", data: {} }));

    if (!widgetData.length) {
      newWidgetData = newWidgetData.map(
        (_, index) => widgetData?.[index] ?? { type: "", data: {} }
      );
    }
    setValue(`page.widgets.${idx}.widgetData`, newWidgetData);
  }, [totalColumn, idx, getValues, setValue]);

  const handleChangeColumn = (column: number) => {
    return () => {
      setValue(`page.widgets.${idx}.column`, column);
      setOpenSelectColumns(false);
    };
  };
  const handleToggleSelectColumns = () => {
    setOpenSelectColumns((prevState) => !prevState);
  };

  const handleDeleteSection = () => {
    onDelete(idx);
  };

  const handleSelectedComponent = (
    widgetDataIdx: number,
    component: string
  ) => {
    setValue(`page.widgets.${idx}.widgetData.${widgetDataIdx}.type`, component);
  };

  return (
    <div className="border p-4 rounded-md mt-4">
      <div className="flex bg-p mb-4 gap-2 min-h-[40px] items-center justify-end">
        {openSelectColumns &&
          new Array(MAX_COLUMNS).fill(0).map((_, index) => (
            <div
              key={index}
              className={`border p-2 cursor-pointer w-8 h-8 leading-none rounded-md text-center hover:bg-gray-100 ${
                totalColumn == MAX_COLUMNS - index && "!bg-primary text-white"
              }`}
              onClick={handleChangeColumn(MAX_COLUMNS - index)}
            >
              {MAX_COLUMNS - index}
            </div>
          ))}
        <ViewColumnIcon
          onClick={handleToggleSelectColumns}
          className="cursor-pointer"
        />
        <DeleteIcon className="cursor-pointer" onClick={handleDeleteSection} />
      </div>
      <div className={`grid grid-cols-${totalColumn} gap-4`}>
        {fields.map((_, index) => (
          <SelectComponent
            key={index}
            idx={index}
            onSelectComponent={handleSelectedComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
