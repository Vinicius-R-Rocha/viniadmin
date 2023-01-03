import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredinfo/FeaturedInfo"
import "./home.css"
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import GraphPie from "../../components/piechart/PieChart";
import Areachart from "../../components/areachart/AreaChart";
import { useEffect, useState } from "react";
import api from "../../api/api";

export default function Home() {
  const [users, setUsers] = useState([])
  const [trade, setTrade] = useState([])
  const [graph, setGraph] = useState([])
  const [area, setArea] = useState([])
  const [areaColors, setColors] = useState([])
  const [userData, setData] = useState([])
  useEffect(()=> {
    async function getDados (){
      const user = await api.get("/users").then((response)=> response.data ) ;
      setUsers (user)
      const launch = await api.get("/launch").then((response)=>response.data);
      setTrade (launch)
      const pie = await api.get("/pie").then((response)=>response.data);
      setGraph (pie)
      const respArea = await api.get("/area").then((response)=>response.data);
      setArea (respArea.data)
      setColors (respArea.colors)
      const resultchart = await api.get("/chart").then((response)=>response.data);
      setData (resultchart)
    }
    getDados()
  },[])
  return (
    <div className="home">
      <FeaturedInfo data={graph} />
      <Chart data={userData} title="Saldo do fim do mês" grid dataKey="Saldo"/>
      <div className="junction">
      <GraphPie data={graph} title = "Resumo"/>
      <Areachart data = {area} colors = {areaColors} title = "Relatório Semanal"/>
      </div>
      <div className="homeWidgets">
        <WidgetSm data={users} />
        <WidgetLg data={trade} />
      </div>
    </div>
  )
}
