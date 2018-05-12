import React,{ Component as Comp} from 'react'

class SearchBar extends Comp{
    constructor(props){
        super(props)
        this.state = { term : ''}
    }
    render(){
        return (<div className="search-bar"><input value ={this.state.term} onChange={(event)=>{this.inputChnge(event.target.value)}}/>
            </div>
            )
    }
    inputChnge(term){
        this.setState({term})
        this.props.onSearchTermChange(term)
    }
}

export default SearchBar
