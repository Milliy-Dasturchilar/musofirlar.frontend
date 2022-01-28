import React from "react";
import CardTop from "./CardTop";
import MainCardBottom from "./MainCardBottom";

class MainCard extends React.Component {
  render() {
    const a = <div>Arzon narxda <br/> shinam va keng uy</div>
    return (
      <div>
        <section className="container">
          <CardTop
            cardTitle={"Ijara uylar"}
            cartText={
              "MUSOFIRLAR.UZ yordamida o'zingiz uchun qulay va hamyonbop ijara uylarinitopishingiz mumkin!"
            }
          />
<MainCardBottom mainCardTitle={a}/>
            
        </section>
      </div>
    );
  }
}

export default MainCard;
