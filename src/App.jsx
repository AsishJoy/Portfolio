import Navbar from "./componets/Navbar";
import Contact from "./Pages/contact";
import Education from "./Pages/education";
import ProfilePage from "./Pages/Personal";
import Project from "./Pages/project";


function App() {
  return (
    <>
      <Navbar />
      <ProfilePage />
      <Project/>
      <Education/>
      <Contact/>
      
    </>
  );
}

export default App;
