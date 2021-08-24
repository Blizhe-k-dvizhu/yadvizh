import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonLabel, IonMenuButton, IonPage, IonToolbar } from '@ionic/react';
import './Page.css';
import { arrowBack, exitOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import { loginInterface, tags } from '../components/interfaces';

interface tagsProps extends loginInterface {

}

const TagsPage: React.FC<tagsProps> = ({ showLoginModal }) => {
  const [selected, setSelected] = useState<Array<number>>([]);
  function change(id: number) {
    console.log(id, selected);
    var newArr = selected;
    const index = newArr.indexOf(id);
    if (index > -1) {
      newArr.splice(index, 1);
    } else {
      newArr.push(id);
    }
    setSelected(newArr);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton style={{ marginTop: -30 }}>
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
          >Выберите свои интересы</p>
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: 13,
              marginTop: 5,
              marginRight: 27,
              marginBottom: 7
            }}
          >Это поможет нам точно подбирать для вас интересные события</p>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div className="tagsContainer">
          {
            selected ?
              tags.map((tag, idx) => {
                return (
                  <IonButton
                    fill="clear"
                    className="tagButton"
                    key={idx}
                    onClick={
                      (e) => {
                        e.currentTarget.classList.toggle("selected" + tag.color);
                        change(tag.id);
                      }
                    }
                  >
                    {tag.name} 
                    <IonImg slot="end" style={{ height: "10%", width: "10%", paddingLeft: 5}} src={tag.logo} />
                  </IonButton>
                )
              })
              : ""
          }
        </div><br /><br /><br />
        <div className="cardButtons">
            <IonButton fill="clear" className="button save">
              <IonLabel>Сохранить</IonLabel>
            </IonButton>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default TagsPage;
