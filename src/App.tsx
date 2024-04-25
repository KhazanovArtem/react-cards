import './App.css'
import { Card } from './components/Card';


function App() {

  return (
    <>
      <div className="container">
        <Card 
        isImage={true}
        title='Card title' 
        article="Some quick example text to build on the card title and make up the bulk of the card's content.">
        </Card>
        <Card 
        isImage={false}
        title='Special title treatment' 
        article="With supporting text below as a natural lead-in to additional content">
        </Card>
      </div>
    </>
  )
}

export default App
