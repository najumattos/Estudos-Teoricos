import './App.css'
import  ProfileAna  from "./screens/ProfileAna";
import ProfileTainara from "./screens/ProfileTainara";

function App() {

return (
    <div className="App">
      <section className="cv-item">
      <ProfileAna/>
      </section> 
       <section className="cv-item">
      <ProfileTainara/>
      </section>      
    </div>
  );
}

export default App
