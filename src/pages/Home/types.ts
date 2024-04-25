import { EnumComponentType } from "../../components/types/ComponentTypes";

export type WidgetDataType = {
  type?: EnumComponentType;
  data?: Record<string, unknown>;
}

export type PageType = {
  id?: string;
  slug?: string;
  widgets: {
    id: string;
    widgetData?: WidgetDataType[];
    column: number;
  }[];

}

export type FormValues = {
  page: PageType
};

export const FormFields = {
  page: "page" as const,
  widgets: "page.widgets" as const,
};
