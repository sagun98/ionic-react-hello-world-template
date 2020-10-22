import React, { useState } from 'react';
import {play as playIcon} from 'ionicons/icons';
import { IonButton, 
        IonToast, 
        IonIcon, 
        IonApp,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent
} from '@ionic/react';


function App() {
  const [showToast, setShowToast ] = useState(false);
  const handleClick = () =>{
    setShowToast(true);
    setTimeout(()=> setShowToast(false), 1500);
  }
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Test App</IonTitle>
        </IonToolbar>
        </IonHeader>
      <IonContent className="ion-padding">
        <IonButton color="warning" onClick={ handleClick }>
          <IonIcon icon={playIcon} slot="start"/>
          Click me</IonButton>
        <IonToast isOpen= {showToast} message = "Hello World !! " />
      </IonContent>
   
    </IonApp>
  );
}

export default App;
