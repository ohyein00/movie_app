import logo from './logo.svg';
import React from "react"
import './App.css';
import axios from "axios"
import PropTypes from "prop-types"
import Movies from "./Movies.js"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    getMovies = async() => {
        console.log('yet')
        const {
            data:{
                data:{movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
        this.setState({movies,isLoading:false})
    }

    componentDidMount() {
        console.log('didMount')
        this.getMovies()
    }
    componentDidUpdate(){
        console.log('update')
    }

    render() {
        const {isLoading, movies} = this.state
        return (
            <section class="container">
                <div>
                    {this.state.isLoading ? (<p>Loading...</p>): movies.map(movie=>{
                        console.log(movie)
                        return <Movies key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image}/>
                        }
                    )}
                </div>

            </section>
        )
    }
}


export default App;

