import { Geolocation } from '@capacitor/geolocation';
import { IonButton, IonContent, IonIcon, IonLabel, IonPage, useIonRouter } from '@ionic/react';
import { useEffect, useState } from 'react';
import { TestData } from '../components/interfaces';
import Filter from '../components/FilterComponent';
import MapComponent from '../components/Map';
import './Page.css';
import { newspaperOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  const router = useIonRouter();
  const [selected, setSelected] = useState("feed");
  const [geo, setGeo] = useState<any>(null);
  const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [filter, setFilter] = useState({});
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  prefersDark.addListener((mediaQuery) => {
    setTheme(mediaQuery.matches);
    toggleDarkTheme(mediaQuery.matches);
  });
  function toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  useEffect(() => {
    async function a() {
      let a = (await Geolocation.getCurrentPosition()).coords;
      setGeo([a.latitude, a.longitude]);
    }
    a();
  }, [1]);

  return (
    <IonPage>
      <IonContent fullscreen>
        <Filter callback={() => {
          console.log("измена");
        }} setFilter={setFilter} />
        <MapComponent place={geo} events={TestData} />
        <div className="mapButtons">
          <IonButton onClick={() => {router.push("/Feed")}} fill="clear">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>Лента</IonLabel>
          </IonButton>
          <IonButton fill="clear">
            <IonLabel>Добавить метку</IonLabel>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
