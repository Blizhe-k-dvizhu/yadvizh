import { IonApp, IonBadge, IonIcon, IonLabel, IonRouterOutlet, IonSplitPane, IonTabBar, IonTabButton, IonTabs, IonToast, isPlatform, useIonRouter } from '@ionic/react';
import { Network } from '@capacitor/network';
import { Geolocation } from '@capacitor/geolocation';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, useHistory, useLocation, withRouter } from 'react-router-dom';
import { Plugins } from "@capacitor/core";
import { App as AApp } from '@capacitor/app';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import Home from './pages/Home';
import SearchPage from './pages/Search';
import { useEffect, useState } from 'react';
import CalendarPage from './pages/Calendar';
import EventPage from './pages/EventPage';
import TagsPage from './pages/TagsPage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/ProfilePage';
import 'react-calendar/dist/Calendar.css';
import './YSD-Regular/style.css'
import './theme/variables.css';

import { LoginModal } from './components/LoginModal';
import { bookmarksOutline, homeOutline, searchSharp } from 'ionicons/icons';

const App: React.FC = () => {
  const [networkConn, setNetworkConn] = useState(true);
  const [showLoginModal, setLoginModal] = useState(false);
  const router = useIonRouter();
  const history = useHistory();
  useEffect(() => {
    async function a() {
      let status = await Network.getStatus();
      setNetworkConn(!status.connected);
    }
    a();
  })
  if (isPlatform("capacitor")) {
    Geolocation.checkPermissions().then((res) => {
      if (res.location === "prompt" || res.location === "denied" || res.location === "prompt-with-rationale")
        Geolocation.requestPermissions();
    })
  }
  Network.addListener('networkStatusChange', status => {
    setNetworkConn(!status.connected);
  });

  useEffect(() => {
    if (isPlatform("capacitor")) {
      document.addEventListener('ionBackButton', (ev) => {
        if (window.location.pathname === "/" || window.location.pathname === "/Home") {
          Plugins?.App?.exitApp();
        }
      });
    }
    // AApp.addListener('appUrlOpen', data => {
    //   console.log('App opened with URL:', "/" + data?.url.split('/')[3] + "/" + data?.url.split('/')[4]);
    //   page = ("/" + data?.url.split('/')[3] + "/" + data?.url.split('/')[4]);
    //   router.push("/" + data?.url.split('/')[3] + "/" + data?.url.split('/')[4]);
    //   history.push("/" + data?.url.split('/')[3] + "/" + data?.url.split('/')[4]);
    // });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/" exact={true}>
              <Redirect to="/Home" />
            </Route>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route exact path="/Search">
              <SearchPage />
            </Route>
            <Route exact path="/Tags">
              <TagsPage />
            </Route>
            <Route exact path="/Calendar">
              <CalendarPage />
            </Route>
            <Route path="/event/:id" exact={true}>
              <EventPage />
            </Route>
            <Route path="/Feed">
              <FeedPage />
            </Route>
            <Route path="/Profile">
              <ProfilePage />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/Home">
              <IonIcon src={"/assets/icons/homeBlack.svg"} />
            </IonTabButton>
            <IonTabButton tab="tags" href="/Tags">
              <IonIcon src={"/assets/icons/tagsBlack.svg"} />
            </IonTabButton>
            <IonTabButton tab="search" href="/Search">
              <IonIcon icon={searchSharp} />
            </IonTabButton>
            <IonTabButton tab="calendar" href="/Calendar">
              <IonIcon icon={bookmarksOutline} />
            </IonTabButton>
            <IonTabButton tab="profile" href="/Profile">
              <IonIcon src={"/assets/icons/profile.svg"} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      <IonToast isOpen={networkConn} message={"Подключение к интернету отсутствует"} />
      <LoginModal setShowModal={setLoginModal} showModal={showLoginModal} />
    </IonApp>
  );
};

export default App;