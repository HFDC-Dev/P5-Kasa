import { Link } from "react-router-dom";
import "../Pages/notfound.scss"


function NotFound() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oups ! La page que vous cherchez n’existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link> {/* Lien qui ramène l’utilisateur à la page d’accueil */}
    </div>
  );
}

export default NotFound;