import logo from './logo.svg';
import './App.css';
import PropTypes from "prop-types"

const fruits = [
    {
        name: 'banana',
        taste: 'sweet',
        rating: 5,
    },
    {
        name: 'orange',
        taste: 'sweet and sour',
        rating: 4,
    },
    {
        name: 'strawberry',
        taste: 'sweet',
        rating: 2,
    },
    {
        name: 'lemon',
        taste: 'sour',
    },
]
function Food({name, taste, rating = 0}) {

    return (
        <div>
            <h1>rating : {rating}</h1>
            <h2>i like {name} that taste is {taste} </h2>
        </div>
    )
}

Food.propTypes = {
    name : PropTypes.string.isRequired,
    taste : PropTypes.string.isRequired,
    rating : PropTypes.number,
} //리터럴 체크 외에 instanceof, arrayOf, oneOf, shape .. 등등 다양한걸 체크할 수 있음

function renderFruit(fruit) {
    return <Food name={fruit.name} taste={fruit.taste}/>
} // app 안에 map(renderFruit)로 사용할 수 있음

function Fruit() {
    return (
        <div className="App">
            {/*{fruits.map(renderFruit)}*/}
            {fruits.map(fruit => (
                <Food key={fruit.name} name={fruit.name} taste={fruit.taste} rating={fruit.rating}/>
            ))}
        </div>
    );
}

export default Fruit;

