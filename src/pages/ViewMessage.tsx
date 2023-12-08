import { useState } from 'react';
import { Message, getMessage } from '../data/messages';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonButton,
  IonToolbar,
  useIonViewWillEnter,
  useIonRouter,
  createAnimation
} from '@ionic/react';
import { personCircle } from 'ionicons/icons';
import { useParams } from 'react-router';
import './ViewMessage.css';

function ViewMessage() {
  const [message, setMessage] = useState<Message>();
  const params = useParams<{ id: string }>();
  const router = useIonRouter();
  
  const anim = () => {
    console.log('ViewMessage animation used')
    return createAnimation();
  }

  useIonViewWillEnter(() => {
    const msg = getMessage(parseInt(params.id, 10));
    setMessage(msg);
  });

  return (
    <IonPage id="view-message-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Inbox" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonButton onClick={() => {
          router.push('/message/2', 'forward', 'replace', undefined, anim)
        }}>Message 2 (Replace)</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default ViewMessage;
