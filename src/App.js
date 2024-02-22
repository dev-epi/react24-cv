import logo from './logo.svg';
import './App.css';
import Apropos from './components/Apropos';
import Competences from './components/Competences';
import Profil from './components/Profil';
import Experiences from './components/Experiences';
import Formations from './components/Formations';
import { userData } from './data';

function App() {
  let user = userData
  return (
    <div className="cv-container">
    <div className="left-column">
      <img className="portait" src="https://www.codeur.com/tuto/wp-content/uploads/2022/01/MG_0110-4-293x300.jpg" alt="avatar" />
      <div className="section">
        <p>
          <i className="icon fab fa-linkedin text-darkblue"></i> pierre-gomba
        </p>
      </div>
      
      <Apropos about = {user.about} 
      title="A propos" ></Apropos>


      <Competences />
      <div className="section">
        <h2>Langues</h2>
        <p>
          Français, langue maternelle
          <br />
          Anglais, compétence professionnelle
        </p>
      </div>
      <div className="section">
        <h2>Centres d'intérêt</h2>
        <p>
          Jeux vidéo, jouer et développer
          <br />
          Musique, écoute et composition
          <br />
          Art en général
          <br />
          Sport
          <br />
          Informatique en général
        </p>
      </div>
    </div>
    <div className="right-column">
     <Profil />
      <div className="content">
     
     <Experiences  items={user.experiences}/>
        <div className="section">
          <p>
            <strong>2021</strong>
            <br />
            Freelance en activité
          </p>
          <ul className="experience-list">
            <li>Freelance Front-end Developer</li>
            <li>Unity Developer / Sound Designer</li>
          </ul>
        </div>
       <Formations  />
        <div className="section">
          <h2>Autres <br /><span className="text-blue">expériences</span></h2>
          <p>
            Permis B, possession d’une voiture
            <br />
            Animateur Scout pendant 6 ans
            <br />
            Brevet d’animateur de Centre de Vacances
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
