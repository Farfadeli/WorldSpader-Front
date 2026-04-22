
import { Background } from "../components/background";
import { HomeButton } from "../components/home_not_connected/homeButton";
import { Title } from "../components/Title";

export const HomeNotConnected = () => {
  return (
    <div id="Home-not-connected">
      <Background/>
      <Title/>
      <HomeButton />
    </div>
  );
};
