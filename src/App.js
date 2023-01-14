import './App.css';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <div className="App container">
        <Header 
        title = "Galeria de Imagenes con React" 
        subtitle = "Modelos del Mundo"
        />
        <div className='row'>
          <Card 
          title = "Zarina Khalilova"
          desc = "11 Millones de Visitas"
          photo = "https://images.pexels.com/photos/14331942/pexels-photo-14331942.jpeg"
          />
           <Card 
          title = "Zarina Khalilova"
          desc = "11 Millones de Visitas"
          photo = "https://images.pexels.com/photos/15031643/pexels-photo-15031643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
           <Card  
          title = "Zarina Khalilova"
          desc = "11 Millones de Visitas"
          photo = "https://images.pexels.com/photos/6625410/pexels-photo-6625410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
           <Card
          title = "Zarina Khalilova"
          desc = "11 Millones de Visitas"
          photo = "https://images.pexels.com/photos/14768675/pexels-photo-14768675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
           <Card
          title = "Zarina Khalilova"
          desc = "11 Millones de Visitas"
          photo = "https://images.pexels.com/photos/15045193/pexels-photo-15045193.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          />
           <Card
          title = "Zarina Khalilova"
          desc = "11 Millones de Visitas"
          photo = "https://images.pexels.com/photos/8639801/pexels-photo-8639801.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
          />
        </div>
      </div>
      <Footer desc="Modelos 2023 ®"/>
    </>
  );
}

export default App;
