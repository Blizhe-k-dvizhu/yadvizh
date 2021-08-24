import {
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonMenuButton,
  IonPage,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonImg
} from "@ionic/react";
import {
  searchOutline,
} from "ionicons/icons";
import EventCard from "../components/EventCard";
import { loginInterface, TestData } from "../components/interfaces";

import "./Page.css";

interface searchProps extends loginInterface {

}

const SearchPage: React.FC<searchProps> = ({ showLoginModal }) => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonInput type="text" placeholder="Поиск" />
          <IonIcon
            style={{ fontSize: "20pt", border: "10px double rgba(0, 0, 0, .0)" }}
            slot="end"
            icon={searchOutline}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {
          TestData.map((item, idx) => {
            return (<EventCard key={idx} id={idx} date={item.date} name={item.name} img={item.img} />)
          })
        }
      </IonContent>
    </IonPage>
  );
};

export default SearchPage;
