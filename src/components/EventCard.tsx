import {
  IonIcon,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonModal,
  IonButton
} from "@ionic/react";
import { placeData, event } from '../components/interfaces';
import React from 'react';
import { alertCircleOutline, book, bookmark, bookmarkOutline, locationOutline, warningSharp } from "ionicons/icons";
import { Link } from "react-router-dom";
interface EventCardInterface extends event {
  id: number,
  place?: Array<number>,
  img: string,
  events?: Array<placeData>
}

var warningIcon = [
  "/assets/icons/NeedReg.svg",
  "/assets/icons/SeatsLimit.svg",
  "/assets/icons/Paid.svg"
]
var warningIconStyle = [
  "blue"
]

export const EventCard: React.FC<EventCardInterface> = ({ id, name, img, desc, geo, date, marked, warnings }) => {
  return (
    <div className="eventCard">
      <Link to={"/event/" + id}>
        <div className="eventCardImageBlock">
          <img loading="lazy" src={img} alt={name} />
          <div className="circle">
            <IonIcon icon={bookmark} style={marked ? { color: "#FE7259" } : { color: "white" }} />
          </div>
          <div className="warnings">
            {
              warnings?.map((warning, idx) => {
                if (warning) {
                  return (
                    <IonIcon style={{
                      maxWidth: "100%"
                    }} key={idx} src={warningIcon[idx]} />
                  );
                }
              })
            }
          </div>
        </div>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>{geo + " от вас" + " • " + (date.getUTCDate() + " " + date.toLocaleString('ru', { month: 'long' }))}</IonCardSubtitle>
      </Link>
    </div>
  );
};

export const MiniEventCard: React.FC<EventCardInterface> = ({ name, img, geo, date }) => {
  return (
    <div>
      <table className="miniEventCard">
        <tbody>
          <tr>
            <td className="miniEventCardImageBlock" width="50%">
              <img src={img} alt={name} loading="lazy" width="50%" />
            </td>
            <td className="miniEventCardText">
              <p className="time">{date.getHours() + ":" + date.getMinutes()}</p>
              <p className="name">{name}</p>
              <p className="place"><IonIcon icon={locationOutline} /> {geo ? geo[2] : "Онлайн"}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EventCard;
