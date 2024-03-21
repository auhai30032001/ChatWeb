import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMessage,
  faCalendar,
  faTag,
  faFile,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import ChatPage from "../pages/chats/ChatPage";
import { RouteType } from "./config";
import NotFound from "../components/NotFound";
import BuildPage from "../pages/build/Build";
const routesConfig: RouteType[] = [
  {
    index: true,
    element: <BuildPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faHouse} />,
      displayText: "Properties",
    },
  },
  {
    path: "/chat",
    element: <ChatPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faMessage} />,
      displayText: "Chat",
    },
  },
  {
    path: "/calendar",
    element: <BuildPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faCalendar} />,
      displayText: "Calendar",
    },
  },
  {
    path: "/offers",
    element: <BuildPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faTag} />,
      displayText: "Offers",
    },
  },
  {
    path: "/documents",
    element: <BuildPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faFile} />,
      displayText: "Documents",
    },
  },
  {
    path: "/setting",
    element: <BuildPage />,
    sidebarProps: {
      icon: <FontAwesomeIcon icon={faGear} />,
      displayText: "Settings",
    },
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routesConfig;
