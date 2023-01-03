import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo({data}) {
  return (
    <div className="featured">
      {data.map((item) => {
        return (
          <div className="featuredItem">
            <span className="featureTitle">{item.name}</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">{item.value.toLocaleString("pt-br", {style:"currency", currency:"BRL"})}</span>
              <span className="featuredMoneyRate">
                {item.moneyRate} {item.moneyRate>0?<ArrowUpward className="featuredIcon"/>:<ArrowDownward className="featuredIcon negative"/>} 
              </span>
            </div>
            <span className="featureSub">Comaparação ao mes passado</span>
          </div>
        );
      })}
    </div>
  );
}



