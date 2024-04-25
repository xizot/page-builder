import { PlusIcon } from "@heroicons/react/16/solid";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { v4 } from "uuid";
import Input from "../../components/common/input";
import Section from "../../components/section";
import { FormFields, FormValues } from "./types";
import { useState } from "react";
import Preview from "../../components/preview";

const initialValues: FormValues = {
  page: {
    widgets: [],
  },
};

const Home = () => {
  const methods = useForm<FormValues>({
    defaultValues: initialValues,
  });
  const { control, getValues, handleSubmit } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: FormFields.widgets,
    keyName: "_id",
  });

  const [openPreview, setOpenPreview] = useState<boolean>(false);

  const handleOpenPreview = () => setOpenPreview(true);

  const handleClosePreview = () => setOpenPreview(false);

  const handleAddNewSection = () => {
    append({ id: v4(), column: 1 });
  };

  const handleDeleteSection = (idx: number) => {
    remove(idx);
  };

  const onSubmit = (data: FormValues) => {
    console.log("--> data", data);
    // data.page.widgets = data.page.widgets
    //   .map((widget) => {
    //     if (widget.widgetData) {
    //       widget.widgetData = widget.widgetData.filter((data) => data.type);
    //     }
    //     widget.column = widget.widgetData?.length || 0;
    //     return widget;
    //   })
    //   .filter((widget) => widget.column > 0);
    // localStorage.setItem("page", JSON.stringify(data));
  };
  return (
    <>
      <Preview
        isOpen={openPreview}
        onClose={handleClosePreview}
        pageData={getValues("page")}
      />
      <FormProvider {...methods}>
        <form className="container mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="border rounded-md p-4">
            <div className="flex gap-4 justify-end">
              <button
                type="submit"
                className="flex gap-2 items-center bg-primary px-4 py-2 rounded-md text-white mt-4 hover:opacity-65"
              >
                Save changes
              </button>
              <button
                onClick={handleOpenPreview}
                className="flex gap-2 items-center bg-purple-300 px-4 py-2 rounded-md text-white mt-4 hover:opacity-65"
              >
                Preview
              </button>
            </div>
            <div>
              <label htmlFor="page-title">Title</label>
              <Input
                name="page.name"
                className="w-full"
                placeholder="Title of page"
              />
            </div>
            <div>
              <label htmlFor="page-slug">Slug</label>
              <Input
                name="page.slug"
                className="w-full"
                placeholder="Path of page"
              />
            </div>
          </div>

          {fields.map((item, idx) => (
            <Section
              control={control}
              key={item.id}
              sectionIndex={idx}
              onDelete={handleDeleteSection}
            />
          ))}

          <button
            onClick={handleAddNewSection}
            className="flex gap-2 items-center mx-auto bg-primary px-4 py-2 rounded-md text-white mt-4 hover:opacity-65"
          >
            <PlusIcon className="w-6 h-8" /> Add Section
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default Home;
