import "./widgetLg.css";

export default function WidgetLg({data}) {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle"> Ultimas Transações </h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Clientes</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Valor</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {data.map((item) => {
          return (
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{item.name}</span>
              </td>
              <td className="widgetLgDate">{item.date}</td>
              <td className="widgetLgQtd">R${item.amount}</td>
              <td className="widgetLgStatus">
                {item.status?<Button type="Aprovado" />:<Button type="Negado" />}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
