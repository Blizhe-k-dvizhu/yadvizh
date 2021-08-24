import { IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getSession, sessionType } from '../components/storage';

import './ProfilePage.css';

const ProfilePage: React.FC = () => {
    const [profileData, setProfileData] = useState<sessionType | 0>(0);
    useEffect(() => {
        async function getdata() {
            setProfileData(await getSession());
        }
    }, [true])

    return (
        <IonPage>
            <IonHeader>

            </IonHeader>

            <IonContent fullscreen>
                <div className="profilePage-body">
                    <div className="profilePage-photo">
                        <img src={profileData === 0 ? "https://sun1-29.userapi.com/s/v1/if1/WMeYub7VHbNY4Fr1DH6e9hBDYQ277Cm1naz_cL6tr6XWpcZVTQU6HmjBlMGtvpRaexAmnMOq.jpg?size=200x201&quality=96&crop=54,54,1536,1544&ava=1" : profileData?.img} alt="" />
                    </div>
                    <IonLabel><b>Полина Немчинова</b></IonLabel>
                    <IonLabel>
                        Белгород
                    </IonLabel>
                    <div className="star-wrapper">
                        <a className="fas fa-star s1"></a>
                        <a className="fas fa-star s2"></a>
                        <a className="fas fa-star s3"></a>
                        <a className="fas fa-star s4"></a>
                        <a className="fas fa-star s5"></a>
                    </div>
                </div>
                <div className="profilePage-list">
                    <div className="profilePage-list-item">
                        <p style={
                            {
                                fontSize: 22
                            }
                        }><b>История</b></p>
                        <p><a>
                            Показать всё
                        </a></p>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ProfilePage;