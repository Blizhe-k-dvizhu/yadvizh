import { IonButton, IonContent, IonIcon, IonLabel, IonPage, useIonRouter } from '@ionic/react';
import { arrowBackOutline, bookmark, shareSocialOutline } from 'ionicons/icons';
import { useHistory, useParams } from 'react-router';
import { event, loginInterface, TestData } from '../components/interfaces';
import './Page.css';

interface eventPageProps extends loginInterface {

}

const EventPage: React.FC<eventPageProps> = ({ showLoginModal }) => {
  const router = useIonRouter();
  var warningsIconNameById = [
    {
      name: "Обязательная регистрация",
      iconName: "NeedReg",
      color: "#70B2FF"
    },
    {
      name: "Количество мест ограничено",
      iconName: "SeatsLimit",
      color: "#FF3347"
    },
    {
      name: "Платный вход",
      iconName: "Paid",
      color: "#32B332"
    },
  ]
  const { id } = useParams<{ id: string; }>();

  var data: event = TestData[parseInt(id)];

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="eventPage">
          <div className="eventCardImageBlock cardImage">
            <img src={data.img} alt={data.name} loading="lazy" />
            <div className="circle backCircle" onClick={() => { router.goBack() }}>
              <IonIcon icon={arrowBackOutline} />
            </div>
            <div className="circle">
              <IonIcon icon={bookmark} style={data.marked ? { color: "#FE7259" } : { color: "white" }} />
            </div>
          </div>
          <div className="eventCardImageBlock cardBody">
            <div className="cardBodyText">
              <h1 style={{ marginBottom: 15 }}>{data.name}</h1>
              <h6>
                <IonIcon src="/assets/icons/location.svg" />
                {data.geo ? data.geo[2] : "Онлайн"}
              </h6>
              <h6 style={{ marginBottom: 20 }}>
                <IonIcon src="/assets/icons/time.svg" />
                {
                  data.date.getDate() + " " +
                  data.date.toLocaleString('ru', { month: 'long' }) + ", " +
                  data.date.getHours() + ":" +
                  data.date.getMinutes()
                }
              </h6>
              {
                data.warnings?.map((warn, idx) => {
                  if (warn) {
                    return (
                      <div key={idx} className="warning" style={{ color: warningsIconNameById[idx].color }}>
                        <IonIcon src={"/assets/icons/" + (warningsIconNameById[idx].iconName) + ".svg"} />
                        {warningsIconNameById[idx].name}
                      </div>);
                  }
                })
              }
              <div className="cardDesc">
                <h3>О событии</h3>
                <p style={{ lineHeight: "23,03px", fontSize: "15px" }}>{data.desc}</p>
                <h3>Ссылка на источник</h3>
                {data.src ? 
                <a style={{ lineHeight: "23,03px", fontSize: "15px" }}>{data.src}</a> : <p>Нет)</p>}
                <br />
                <br />
              </div>
            </div>
          </div>
          <div className="cardButtons">
            <IonButton fill="clear" className="button buttonShare">
              <IonIcon slot="icon-only" size="large" icon={shareSocialOutline} />
            </IonButton>
            <IonButton fill="clear" className="button buttonRoute">
              <IonLabel>Маршрут</IonLabel>
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EventPage;
