import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import './Menu.css';
import { Cell } from './Cell';
import { useEffect, useState } from 'react';
import { getSession, loginWithVK, sessionType } from './storage';
import { LoginModal } from './LoginModal';
import { loginInterface } from './interfaces';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Домой',
    url: '/Home',
    iosIcon: "/assets/icons/homeWhite.svg",
    mdIcon: "/assets/icons/homeBlack.svg"
  },
  {
    title: 'Теги',
    url: '/Tags',
    iosIcon: "/assets/icons/tagsWhite.svg",
    mdIcon: "/assets/icons/tagsBlack.svg"
  },
  {
    title: 'Календарь',
    url: '/Calendar',
    iosIcon: "/assets/icons/calendarWhite.svg",
    mdIcon: "/assets/icons/calendarBlack.svg"
  },
];


interface menuProps extends loginInterface {

}

const Menu: React.FC<menuProps> = ({ showLoginModal }) => {
  const location = useLocation();
  const [sessionData, setSessionData] = useState<sessionType | null>(null);
  useEffect(() => {
    getSession();
  }, [location, true])
  return (
    <IonMenu contentId="main" type="overlay" style={{
      "--max-width": "200pt"
    }}>
      <IonContent>
        <IonList id="inbox-list">
          {
            sessionData ?
              <Cell firstName={sessionData.first_name} lastName={sessionData.last_name} img={sessionData.img ? sessionData.img : undefined} />
              :
              <IonMenuToggle autoHide={false}>
                <IonItem className="selected" style={{ borderRadius: "0px 22px 22px 0px" }} routerDirection="none" lines="none" detail={false} onClick={() => { if (showLoginModal) showLoginModal(true) }}>
                  <IonLabel style={{ marginLeft: "auto", marginRight: "auto" }}>Войти</IonLabel>
                </IonItem>
              </IonMenuToggle>
          }
          <hr className="delimiter" />
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" src={location.pathname === appPage.url ? appPage.mdIcon : appPage.iosIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })
          }
          <hr className="delimiter" />
          <IonMenuToggle autoHide={false}>
            <IonItem className={location.pathname === "/Settings" ? 'selected' : ''} routerLink={"/Settings"} routerDirection="none" lines="none" detail={false}>
              <IonIcon slot="start" src={location.pathname === "/Settings" ? "/assets/icons/settingsBlack.svg" : "/assets/icons/settingsWhite.svg"} />
              <IonLabel>Настройки</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
