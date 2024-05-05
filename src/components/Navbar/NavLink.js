import BellIcon from "../../assets/svg/BellIcon";
import HomeIcon from "../../assets/svg/HomeIcon";
import OverviewIcon from "../../assets/svg/OverviewIcon";

//Aza adino le "/" aloha path rehetra
const linksNavData = [
  {
    type: "menu",
    menuLabel: "Dashboard",
    rows: [
      {
        type: "link",
        linkTo: "/",
        label: "Home",
        icon: <HomeIcon />,
      },

      {
        type: "link_list",
        label: "List ",
        icon: <BellIcon />,
        sublinks: [
          {
            label: "Les agents",
            linkTo: "/list/agent",
          },
          {
            label: "Missions",
            linkTo: "/list/missions",
          },
          {
            label: "Suspect",
            linkTo: "/list/suspect",
          },
        ],
      },
    ],
  },
];

export const link_to_hide_nav = ["/login"];

export default linksNavData;
