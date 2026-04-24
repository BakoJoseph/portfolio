import { useState, useEffect } from "react";
import NeXus from "./NeXus.jsx";
import ProjectsPage from "./ProjectsPage.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Simple routing based on URL path
    const path = window.location.pathname;
    if (path === "/projects") {
      setCurrentPage("projects");
    } else {
      setCurrentPage("home");
    }

    // Handle browser back/forward
    const handlePopState = () => {
      const newPath = window.location.pathname;
      if (newPath === "/projects") {
        setCurrentPage("projects");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPage(path === "/projects" ? "projects" : "home");
  };

  if (currentPage === "projects") {
    return <ProjectsPage navigateHome={() => navigateTo("/")} />;
  }

  return <NeXus navigateToProjects={() => navigateTo("/projects")} />;
};

export default App;
