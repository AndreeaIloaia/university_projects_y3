import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
          <p>Hello darkness, my old friend</p>
          <a href="https://www.youtube.com/watch?v=u9Dg-g7t2l4" rel="noopener" target="_blank">Click meee!</a>
      </IonContent>
    </IonPage>
  );
};

export default Home;
