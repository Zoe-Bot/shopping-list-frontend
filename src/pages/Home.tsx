import { IonContent, IonHeader, IonItem, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <header className="container">
          <IonTitle className="text-3xl font-semibold mt-16 mx-0 px-0">Einkaufen</IonTitle>
          <p>4 Items</p>
        </header>
        <main>
          <IonList lines="none">
            <IonItem className="bg-transparent">Test</IonItem>
            <IonItem>Test</IonItem>
            <IonItem>Test</IonItem>
          </IonList>
        </main>
      </IonContent>
    </IonPage>
  )
}

export default Home
