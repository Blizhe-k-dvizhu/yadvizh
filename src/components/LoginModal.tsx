import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonModal, IonPage, IonToolbar } from "@ionic/react";
import { closeOutline, closeSharp } from "ionicons/icons";
import "./LoginModal.css";

interface LoginModalProps {
    showModal: boolean,
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginModal: React.FC<LoginModalProps> = ({ showModal, setShowModal }) => {
    return (
        <IonModal
            isOpen={showModal}
            cssClass="loginModal"
            swipeToClose={true}
            backdropDismiss={true}
            onDidDismiss={() => setShowModal(false)}>
            <IonPage>
                {/* <IonHeader> */}
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton slot="start" onClick={() => { setShowModal(false) }}>
                            <IonIcon md={closeOutline} ios={closeSharp} size="large"></IonIcon>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
                {/* </IonHeader> */}
                <IonContent>
                    <div style={{
                        textAlign: "center",
                        paddingLeft: 35,
                        paddingRight: 35,
                    }}>
                        <h1>
                            <b>
                                Зарегистрироваться в <br />
                                Ближе к движу
                            </b>
                        </h1>
                        <p style={{ color: "#7A7A7A" }}>
                            Создайте профиль, чтобы сохранять события, прокладывать к ним маршрут и делиться ими. А также публикуйте свои события.
                        </p>
                    </div>
                    <IonButton fill="clear" className="loginButton">
                        <IonIcon slot="start" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" size="large" />
                        <p>Продолжить в Google</p>
                    </IonButton>
                    <IonButton fill="clear" className="loginButton">
                        <IonIcon slot="start" src="https://upload.wikimedia.org/wikipedia/commons/0/00/Vk_Logo.svg" size="large" />
                        <p>Продолжить в VK</p>
                    </IonButton>
                    <IonButton fill="clear" className="loginButton">
                        <IonIcon slot="start" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" size="large" />
                        <p>Продолжить в Facebook</p>
                    </IonButton>
                    <div style={{
                        textAlign: "center",
                        paddingLeft: 35,
                        paddingRight: 35,
                    }}>
                        <p style={{ color: "#7A7A7A", paddingBottom: 80 }}>Регистрируясь, вы принимаете наши <a href=""><b>Условия использования</b></a> и подтверждаете, что вами прочитана наша <a href=""><b>Политика конфиденциальности</b></a>, где описано,
                            как мы собираем, используем и передаём ваши
                            данные.</p>
                    </div>
                    <div className="loginBottom">
                        <p><b>Уже есть аккаунт?</b> <a href="">Войти</a></p>
                    </div>
                </IonContent>
            </IonPage>
        </IonModal>
    );
};