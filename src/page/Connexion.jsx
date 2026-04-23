import { Background } from "../components/background";
import { FormulaireConnexion } from "../components/connexion/formulaireConnexion";
import { Title } from "../components/Title";

export const Connexion = () => {
  return (
    <div id="auth">
          <div id="image-container-auth">
            <Background />
          </div>
          <div id="form-container-auth">
            <Title />
            <FormulaireConnexion />
          </div>
        </div>
  );
};
