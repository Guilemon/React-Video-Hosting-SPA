import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/searchbar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const API_KEY ='AIzaSyBT_8TYy90zzNV6HJdRWLiw-Rjn3ZzpJg8'

// create a new component. This component should produce some HTML.
class App extends Component{
    constructor(props){
        super(props)
        this.state = {videos : [],selectedVideo:null}
        this.srchTerm('digimon')
    }
    srchTerm(term){
        YTSearch({key:API_KEY, term:term},(videos)=>{
            this.setState({videos, selectedVideo:videos[0]})
        })
    }
    render(){
        const videoSrc = _.debounce(term=>{this.srchTerm(term)},500)
        return <div><SearchBar onSearchTermChange={videoSrc}/><VideoDetail video={this.state.selectedVideo}/><VideoList onVideoSelect={(selectedVideo)=>{this.setState({selectedVideo})}} meow={this.state.videos}/></div>
    }
}
//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>,document.getElementsByClassName('container')[0])
