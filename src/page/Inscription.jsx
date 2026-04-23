import { Background } from "../components/background";
import { FormulaireInscription } from "../components/inscription/formulaireInscription";
import { Title } from "../components/Title";

export const Inscription = () => {
  return (
    <div id="auth">
      <div id="image-container-auth">
        <Background />
      </div>
      <div id="form-container-auth">
        <Title />
        <FormulaireInscription />
      </div>
    </div>
  );
};
