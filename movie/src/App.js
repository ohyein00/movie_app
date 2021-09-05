import logo from './logo.svg';
import './App.css';

const fruits=[
    {
        name:'banana',
        taste:'sweet'
    },
    {
        name:'orange',
        taste:'sweet amd sour'
    },
    {
        name:'strawberry',
        taste:'sweet'
    },
    {
        name:'lemon',
        taste:'sour'
    },
]
function Food({name,taste}){

    return <h1>i like {name} that taste is {taste} </h1>
}
function App() {

  return (
    <div className="App">
    {/*fav(prop) = kimchi(value)*/}
        {fruits.map(fruit =><Food name={fruit.name} taste={fruit.taste}/>)}
    </div>
  );
}

export default App;

