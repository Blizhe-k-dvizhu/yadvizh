import { IonContent, IonPage, IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import { useState } from 'react';
import EventCard from '../components/EventCard';
import { TestData } from '../components/interfaces';
import './Page.css';

const FeedPage: React.FC = () => {
  const [selected, setSelected] = useState("feed");
  return (
    <IonPage>
      <IonContent fullscreen>
        {/* <IonSegment value={selected} onIonChange={(e) => { setSelected(e.detail.value as string); console.log(e.detail.value) }}>
          <IonSegmentButton value="feed">
            <IonLabel>Лента</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="online">
            <IonLabel>Онлайн</IonLabel>
          </IonSegmentButton>
        </IonSegment> */}
        <br /><br />
        {
          selected === "feed" ?
            <div>
              {TestData.map((item, idx) => {

                return (<EventCard key={idx} id={idx} date={item.date} name={item.name} img={item.img} warnings={item.warnings} marked={item.marked} />)
              })}
            </div>
            : {}
        }
      </IonContent>
    </IonPage>
  );
};

export default FeedPage;
