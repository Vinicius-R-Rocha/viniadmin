import "./widgetSm.css";

export default function WidgetSm({ data }) {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Fornecedores</span>
      <ul className="widgetSmList">
        {data.map((item) => {
          return (
            <li className="widgetSmListItem">
              <img
                src="https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
                alt=""
                className="widgetSmImg"
              />
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{item.name}</span>
                <span className="widgetSmUserTitle">{item.title}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
