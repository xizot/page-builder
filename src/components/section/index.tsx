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
  sectionIndex: number;
  onDelete: (idx: number) => void;
};

const MAX_COLUMNS = 6;

const Section = ({ control, sectionIndex, onDelete }: SectionProps) => {
  const [openSelectColumns, setOpenSelectColumns] = useState<boolean>(false);

  const { setValue, getValues } = useFormContext<FormValues>();

  const totalColumn = useWatch({
    control,
    name: `page.widgets.${sectionIndex}.column`,
  });

  const { fields, update, remove } = useFieldArray({
    control,
    name: `page.widgets.${sectionIndex}.widgetData`,
    keyName: "_id",
  });

  useEffect(() => {
    const widgetData =
      getValues(`page.widgets.${sectionIndex}.widgetData`) || [];
    let newWidgetData: WidgetDataType[] = [];
    let totalColumnNeeded = totalColumn;

    if (widgetData.length) {
      newWidgetData = widgetData
        .filter((item) => item.type)
        .slice(0, totalColumn);
      totalColumnNeeded = totalColumn - newWidgetData.length;
    }

    newWidgetData.push(
      ...new Array(totalColumnNeeded)
        .fill(0)
        .map(() => ({ type: "", data: {} }))
    );

    setValue(`page.widgets.${sectionIndex}.widgetData`, newWidgetData);
  }, [totalColumn, sectionIndex, getValues, setValue]);

  const handleChangeColumn = (column: number) => {
    return () => {
      setValue(`page.widgets.${sectionIndex}.column`, column);
      setOpenSelectColumns(false);
    };
  };
  const handleToggleSelectColumns = () => {
    setOpenSelectColumns((prevState) => !prevState);
  };

  const handleDeleteSection = () => {
    onDelete(sectionIndex);
  };

  const handleSelectedComponent = (
    widgetDataIdx: number,
    component: string
  ) => {
    update(widgetDataIdx, { type: component });
  };

  const handleDeleteSelectedComponent = (widgetDataIdx: number) => {
    update(widgetDataIdx, { type: "" });
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
      <div className={`flex flex-wrap -mx-2 gap-y-4`}>
        {fields.map((item, index) => (
          <SelectComponent
            key={item._id}
            idx={index}
            type={item.type}
            totalColumn={totalColumn}
            onSelectComponent={handleSelectedComponent}
            onDeleteComponent={handleDeleteSelectedComponent}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
