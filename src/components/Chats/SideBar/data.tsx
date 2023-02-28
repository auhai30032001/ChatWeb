import { Icon } from "@iconify/react";
export const data = [
  {
    path: "/",
    icon: (
      <Icon
        icon="material-symbols:home-outline-sharp"
        width={32}
        height={32}
        color="#818181"
      />
    ),
    heading: "Properties",
  },
  {
    path: "chat",
    icon: (
      <Icon
        icon="material-symbols:mark-chat-read-outline-sharp"
        width={32}
        height={32}
        color="#818181"
      />
    ),
    heading: "Chat",
  },
  {
    path: "calendar",
    icon: (
      <Icon
        icon="material-symbols:calendar-month-outline-rounded"
        width={32}
        height={32}
        color="#818181"
      />
    ),
    heading: "Calendar",
  },
  {
    path: "offer",
    icon: (
      <Icon
        icon="ic:outline-local-offer"
        width={32}
        height={32}
        color="#818181"
      />
    ),
    heading: "Offers",
  },
  {
    path: "/document",
    icon: (
      <Icon
        icon="material-symbols:edit-document-outline-sharp"
        width={32}
        height={32}
        color="#818181"
      />
    ),
    heading: "Document",
  },
  {
    path: "setting",
    icon: <Icon icon="ep:setting" width={32} height={32} color="#818181" />,
    heading: "Setting",
  },
];
