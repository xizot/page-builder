export type WidgetDataType = {
  type?: string;
  data?: Record<string, unknown>;
}

export type FormValues = {
  page: {
    id?: string;
    slug?: string;
    widgets: {
      id: string;
      widgetData?: WidgetDataType[];
      column: number;
    }[];
  };
};

export const FormFields = {
  page: "page" as const,
  widgets: "page.widgets" as const,
};
