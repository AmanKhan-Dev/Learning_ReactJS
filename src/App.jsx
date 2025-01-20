
import ActionAreaCard from './ActionAreaCard';
import './App.css'
import BasicCard from './BasicCard';
import Card from './Card';
import Form from './Form';
import List from './List';
import StudentProprs from './StudentProprs';

import NewButton from './NewButton';
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
  
  {/* <StudentProprs  name= "Batman" age= {41} isHero = {true}/>

  <StudentProprs  name= "Superman" age= {34} isHero = {true}/>
  
  <StudentProprs  name= "Flash" age= {21} isHero = {true}/>
  
  <StudentProprs  name= "Darkseid" age= {5000} isHero = {false}/>

  <StudentProprs  name= "Lex Luthor" age= {31} isHero = {false}/>

  <StudentProprs  name= "Joker" age= {36} isHero = {false}/>
<StudentProprs/> */}
 

 <List/>
<NewButton/>
</>

   
  );
}

export default App
