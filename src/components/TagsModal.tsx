import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonLabel, IonModal, IonPage, IonToolbar } from "@ionic/react";
import { closeOutline, closeSharp } from "ionicons/icons";
import { tags } from "./interfaces";
import "./TagsModal.css";

interface LoginModalProps {
    state: {
        date: number,
        tags: number[]
    },
    setState: React.Dispatch<React.SetStateAction<{
        date: number;
        tags: number[];
    }>>,
}

export const TagsModal: React.FC<LoginModalProps> = ({ state, setState }) => {
    function change(id: number) {
        var newArr = state.tags;
        const index = newArr.indexOf(id);
        if (index > -1) {
            newArr.splice(index, 1);
        } else {
            newArr.push(id);
        }
        // setState({date: state.date, tags: newArr});
    }
    return (
        <IonPage>
            <IonToolbar>
                <IonButtons slot="start">
                </IonButtons>
            </IonToolbar>
            <IonContent className="tagsContainer">
                {tags.map((tag, idx) => {
                    return (<IonButton class={tag.id in state.tags ? "selected" + tag.color : ""} onClick={
                        (e) => {
                            e.currentTarget.classList.toggle("selected" + tag.color);
                            change(tag.id);
                        }

                    } className="tagButton" fill="clear">{tag.name}</IonButton>)
                })}
            </IonContent>
        </IonPage>
    );
};