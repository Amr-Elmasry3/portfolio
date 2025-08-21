// Import Style File
import "./sidebar.scss";

// Import React Icons
import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { FaRegFolderOpen } from "react-icons/fa";
import { GrSend } from "react-icons/gr";

// Import Hooks
import { useContext } from "react";

// Import Page Mode Context
import { PageModeContext } from "../../contexts/PageModeContext";

function Sidebar() {
  const { mode, handleMode } = useContext(PageModeContext);

  const links = [
    {
      id: 1,
      icon:
        mode === "light" ? (
          <FiMoon className="icon" />
        ) : (
          <IoSunnyOutline className="icon" />
        ),
      title: mode,
      hash: "#",
    },
    {
      id: 2,
      icon: <CgProfile className="icon" />,
      title: "About",
      hash: "#about-me",
    },
    {
      id: 3,
      icon: <ImProfile className="icon" />,
      title: "Skills",
      hash: "#my-skills",
    },
    {
      id: 4,
      icon: <FaRegFolderOpen className="icon" />,
      title: "Projects",
      hash: "#my-projects",
    },
    {
      id: 5,
      icon: <GrSend className="icon" />,
      title: "Contact",
      hash: "#contact-me",
    },
  ];

  return (
    <div className={`sidebar ${mode}`}>
      <div
        className="settings"
        onClick={() => {
          handleMode(mode === "light" ? "dark" : "light");
        }}
      >
        {mode === "light" ? (
          <FiMoon className="icon" />
        ) : (
          <IoSunnyOutline className="icon" />
        )}
      </div>

      <ul className={`links ${mode}`}>
        {links.map((item) => {
          return (
            <a
              href={item.hash}
              key={item.id}
              onClick={() => {
                if (item.id === 1) {
                  handleMode(mode === "light" ? "dark" : "light");
                }
              }}
            >
              {item.icon} {item.title}
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
