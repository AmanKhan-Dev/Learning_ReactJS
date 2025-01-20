function List (){

const fruits =["oranges","apple","banana","grapes","pineapple"]
//fruits.sort();// For Sorted order
const listFruits = fruits.map(fruit => <li>{fruit}</li>)
return(
    <ol>{listFruits}</ol>
);


}


export default List;