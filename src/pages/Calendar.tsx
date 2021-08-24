import { IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Calendar from 'react-calendar';
import './Page.css';
import { arrowBack } from 'ionicons/icons';
import React, { useState } from 'react';
import { EventCard, MiniEventCard } from '../components/EventCard';
import { loginInterface, TestData } from '../components/interfaces';

interface calendarProps extends loginInterface{

}

const CalendarPage: React.FC<calendarProps> = ({ showLoginModal }) => {
  const [selectedDay, setDay] = useState(new Date());
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton style={{ marginTop: -6 }}>
              <IonIcon icon={arrowBack} />
            </IonMenuButton>

          </IonButtons>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: 22,
              marginTop: 15,
              marginBottom: 0,
            }}
          >Календарь</p>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: 13,
              marginTop: 0,
              marginRight: 27,
              marginBottom: 7
            }}
          >Здесь вы можете посмотреть сохранённые события </p>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <Calendar locale="ru-RU" value={selectedDay} view="month" onChange={(value) => { setDay(value) }} />
        <div style={{
          marginTop: "5%",
          marginLeft: "5%",
          marginRight: "3%"
        }}>
          <h4>{selectedDay ?
            (
              (
                selectedDay === new Date() ?
                  selectedDay.getUTCDate() :
                  selectedDay.toLocaleString('ru', { month: 'long' })
              ) + " " + selectedDay.getUTCDate()
            ) : ""
          }</h4>
        </div>
        {
          TestData.map((item, idx) => {
            if (idx < 3)
            return (<MiniEventCard key={idx} id={idx} date={item.date} name={item.name} img={item.img} warnings={item.warnings} marked={item.marked} geo={item.geo} />)
          })
        }
        <h2 style={{
          marginLeft: "3%",
          marginRight: "3%"
        }}><b>Также в этот день</b></h2>
        {TestData.map((item, idx) => {
          return (<EventCard key={idx} id={idx} date={item.date} name={item.name} img={item.img} warnings={item.warnings} marked={item.marked} />)
        })}
      </IonContent>
    </IonPage>
  );
};

export default CalendarPage;
