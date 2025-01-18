// Props : React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. 

// Conditional Rendering : Conditional rendering in React refers to rendering certain components or UI elements based on specific conditions. You can think of it as a way to display different content depending on the state of your application or the value of variables.



import PropTypes from "prop-types"
function StudentProprs(props){
const hero = "Hero";
const villean = "Villean"
    return(

    <div className="student">
       
       <h3> Name : {props.name}</h3>
       <h3>Age : {props.age}</h3>
       <h3>Character Type : {props.isHero ? hero: villean }</h3>
    </div>



    );


}

StudentProprs.propTypes ={
    name : PropTypes.string,
    age : PropTypes.number,
    isHero : PropTypes.bool
}

StudentProprs.defaultProps={
 name : "User",
 age : 0,
 isHero : true
}



export default StudentProprs;