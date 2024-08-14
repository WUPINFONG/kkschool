import PropTypes from 'prop-types';
function List(props){

const itemList=props.items;
const category=props.category;
    //fruits.sort((a,b)=>a.name.localeCompare(b.name));// ALPHABETICAL
    //fruits.sort((a,b)=>b.name.localeCompare(a.name));//REVERSE ALPHABETICAL
   // fruits.sort((a,b)=>a.calories-b.calories);//NUMERIC
   //fruits.sort((a,b)=>b.calories-a.calories);//REVERSE NUMERIC
   //const lowCalFruit=fruits.filter(fruit=>fruit.calories<100);//
   //const hightCalFruit=fruits.filter(fruit=>fruit.calories>=100);//
   
   
   const listItems=itemList.map(item =><li key={item.id}>
                                        {item.name}: &nbsp;
                                       <b> {item.calories}</b></li>);
    return(<>
    
    
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
    );
}
List.PropTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.number,
        name:PropTypes.string,
        calories:PropTypes.number })),
}
List.defaultPorps={
    category:"Category",
    items:[],

}
export default List