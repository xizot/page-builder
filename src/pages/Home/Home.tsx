import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { v4 } from "uuid";
import Section from "../../components/section";
import { FormFields, FormValues } from "./types";
import Input from "../../components/common/input";

const initialValues: FormValues = {
  page: {
    widgets: [],
  },
};

const Home = () => {
  const methods = useForm<FormValues>({
    defaultValues: initialValues,
  });
  const { control } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: FormFields.widgets,
    keyName: "_id",
  });

  const handleAddNewSection = () => {
    append({ id: v4(), column: 1 });
  };

  const handleDeleteSection = (idx: number) => {
    remove(idx);
  };

  return (
    <FormProvider {...methods}>
      <div className="container mx-auto mt-4">
        <div className="border rounded-md p-4">
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
            idx={idx}
            onDelete={handleDeleteSection}
          />
        ))}

        <button
          onClick={handleAddNewSection}
          className="block mx-auto bg-primary px-4 py-2 rounded-md text-white mt-4 hover:opacity-65"
        >
          Add Section
        </button>
      </div>
    </FormProvider>
  );
};

export default Home;
