/* eslint-disable @typescript-eslint/no-explicit-any */
import Video from "../Video";
import Carousel from "../carousel";
import { OptionType } from "../common/select";
import Contact from "../contact";
import Image from "../image";

export enum EnumComponentType {
  Video = "Video",
  Carousel = "Carousel",
  Image = "Image",
  Contact = "Contact",
}

export const componentOptions: OptionType[] = [
  {
    value: EnumComponentType.Image,
    label: "Image",
  },
  {
    value: EnumComponentType.Carousel,
    label: "Carousel",
  },
  {
    value: EnumComponentType.Contact,
    label: "Contact",
  },
  {
    value: EnumComponentType.Video,
    label: "Video",
  },
];

interface ComponentMap {
  [key: string]: React.ComponentType<any>;
}

export const componentMap: ComponentMap = {
  [EnumComponentType.Video]: Video,
  [EnumComponentType.Carousel]: Carousel,
  [EnumComponentType.Image]: Image,
  [EnumComponentType.Contact]: Contact,
};
