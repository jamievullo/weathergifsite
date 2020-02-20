import React, { Component } from 'react'
import Gif from '../components/Gif'

const baseUrl = 'https://api.giphy.com/v1/gifs/random?api_key=xesJRPoZqJBGAQcXawbW0rmSHAJNy5il&rating=G&tag='


export class Home extends Component {

    state = {
        weather: "cloudy",
        gifUrl: ""
    }

    componentDidMount() {
        this.handleFetch() 
    }

    handleFetch() {        
        fetch(baseUrl + this.state.weather)
        .then(response => response.json())                
        .then(data => {
            // console.log(data.data.images.fixed_height.url)
            this.setState({
                gifUrl: data.data.images.fixed_height.url
            })
        })
    }

    //form component to search weather forecast
    //call to weather api
    //search weather descriptors
    //render weather cards
    //componentdidupdate fetch gifs based on current weather

    render() {
        return (
            <div>
                <Gif gifUrl={this.state.gifUrl}/>
            </div>
        )
    }
}

export default Home
