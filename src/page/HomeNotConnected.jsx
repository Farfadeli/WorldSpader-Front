
import { Background } from "../components/background";
import { HomeButton } from "../components/home_not_connected/homeButton";
import { Title } from "../components/Title";

export const HomeNotConnected = () => {
  return (
    <div id="Home-not-connected">
      <Background/>
      <Title/>
      <HomeButton />
      <div id="text-home-not-connected">
        <h2>Simulate your own world</h2>
        <p>
          With our technologies you can simulate your own world. with changing
          different parameters like the mortality rate, economic fluctuation,...
        </p>
        <b>
          Show your world growth and analyse with graphics the future prediction
        </b>
      </div>
    </div>
  );
};
