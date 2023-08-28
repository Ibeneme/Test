import React from "react";
import { useTheme } from "./ThemeProvider"; // Adjust the import path

import { BsSun, BsMoonStarsFill} from "react-icons/bs";

const ThemeIcons: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle-fab" onClick={toggleTheme}>
      {theme === "light" ? <BsMoonStarsFill /> : <BsSun />}
    </button>
  );
};

export default ThemeIcons;
