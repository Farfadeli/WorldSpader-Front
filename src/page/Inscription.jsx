import { Background } from "../components/background";
import { FormulaireInscription } from "../components/inscription/formulaireInscription";
import { Title } from "../components/Title";

export const Inscription = () => {
  return (
    <div id="Inscription">
      <Background />
      <Title/>
      <FormulaireInscription/>
    </div>
  );
};
