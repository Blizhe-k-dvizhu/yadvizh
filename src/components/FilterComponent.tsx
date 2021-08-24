import { IonButton, IonDatetime, IonIcon, IonLabel, useIonModal, useIonPicker } from '@ionic/react';
import React, { Ref, useRef, useState } from 'react';
import './FilterComponent.css';
import { getRuDate } from './storage';
import { TagsModal } from './TagsModal';


const Filter: React.FC<{ callback: (Function), setFilter: React.Dispatch<React.SetStateAction<{}>> }> = () => {
    const [state, setState] = useState({ date: Date.now(), tags: new Array<number>() });
    const picker = useIonPicker();
    const datetime = useRef(IonDatetime);
    const [ref, setRef] = useState<HTMLIonDatetimeElement | null>()
    const [present, dismiss] = useIonModal(TagsModal,
        {state: state, useState: useState}
    );
    return (
        <div className="filter-body">
            <IonButton fill="clear" onClick={() => {ref?.open();}} >
                <IonDatetime slot="start" displayFormat="DD.MM.YYYY" value={(new Date(state.date)).toISOString()} ref={(ref) => setRef(ref)} onIonChange={e => setState({
                    date: new Date(e.detail.value!).getTime(), 
                    tags: state.tags
                })
                } min={new Date(Date.now() - 1000).toISOString()}
                max={"2022-12-31"}/>
                <IonLabel>{new Date(state.date).toLocaleDateString()}</IonLabel>
                <IonIcon size="small" src="/assets/icons/arrow.svg" />
            </IonButton>
            <IonButton fill="clear" onClick={() => { present() }}>
                <IonLabel>Теги</IonLabel>
                <IonIcon size="small" src="/assets/icons/arrow.svg" />
            </IonButton>
        </div>
    );
};


export default Filter;