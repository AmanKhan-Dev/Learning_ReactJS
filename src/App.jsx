
import ActionAreaCard from './ActionAreaCard';
import './App.css'
import BasicCard from './BasicCard';
import Card from './Card';
import Form from './Form';
import StudentProprs from './StudentProprs';

function App() {
 
  return (
    <>
   {/* <Card/>
   <br />
   <br />
   <br />
   <Form/>
   <BasicCard/>
   <br />
   <br /> */}
   <ActionAreaCard/>
  
  <StudentProprs  name= "Batman" age= {41} isHero = {true}/>

  <StudentProprs  name= "Superman" age= {34} isHero = {true}/>
  
  <StudentProprs  name= "Flash" age= {21} isHero = {true}/>
  
  <StudentProprs  name= "Darkseid" age= {5000} isHero = {false}/>

  <StudentProprs  name= "Lex Luthor" age= {31} isHero = {false}/>

  <StudentProprs  name= "Joker" age= {36} isHero = {false}/>
<StudentProprs/>
 
</>

   
  );
}

export default App
