import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
} from "react-icons/rx";

import hanumanImage from "../Home/image/hanuman.jpg";
import iconImage from "../Home/image/icon.png";
import omImage from "../Home/image/Om.png";
import peakpxImage from "../Home/image/peakpx.jpg";
import ramImage from "../Home/image/Ram.jpg";

export const ServiceData = [
    {
        icon: RxCrop,
        title: "Development",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: peakpxImage,
    },
    {
        icon: RxPencil2,
        title: "Branding",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: hanumanImage,
    },
    {
        icon: RxDesktop,
        title: "Design",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: ramImage,
    },
    {
        icon: RxReader,
        title: "Seo",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: omImage,
    },
    {
        icon: RxAccessibility,
        title: "Management",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: iconImage,
    },
    {
        icon: RxRocket,
        title: "Production",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        backgroundImage: ramImage, // or any other image you intended to use
    },
];
