// Import Style File
import "./app.scss";

// Import Components
import Sidebar from "./components/sidebar/Sidebar";
import Profile from "./components/profile/Profile";
import Content from "./components/content/Content";

// Import Page Mode Context
import { PageModeContext } from "./contexts/PageModeContext";

// Import Hooks
import { useState } from "react";

function App() {
  const [mode, setIsMode] = useState("light");

  const handleMode = (mode) => {
    setIsMode(mode);
  };

  return (
    <PageModeContext.Provider value={{ mode, handleMode }}>
      <div className={`app ${mode}`}>
        <div className={`container ${mode}`}>
          <Sidebar />

          <Profile mode={mode} />

          <Content />
        </div>
      </div>
    </PageModeContext.Provider>
  );
}

export default App;
