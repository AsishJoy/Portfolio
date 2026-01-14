import Navbar from "./componets/Navbar";
import Contact from "./Pages/contact";
import Education from "./Pages/education";
import ProfilePage from "./Pages/Personal";
import Project from "./Pages/project";


function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <ProfilePage />
      <Project/>
      <Education/>
      <Contact/>
      </div>
    </>
  );
}

export default App;
