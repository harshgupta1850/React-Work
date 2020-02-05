import React, { Component } from 'react';

class FilteredPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            initialItems: [
                "Apples",
                "Broccoli",
                "Chicken",
                "Duck",
                "Eggs",
                "Fish",
                "Granola",
                "Hash Browns"
            ],
            items:[]

        }
    }

    filterList = (event) => {
        var updatedList = this.state.initialItems
        console.log(updatedList)
        updatedList = updatedList.filter( (item) => {
            //console.log(event,'mai yaha hu ')
            console.log(item)
            debugger;
            console.log(item.toLowerCase())
            //var a= item.toLowerCase().search(event.target.value)
            //console.log(a)
            return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
        });
        this.setState({ items: updatedList});
    }
    // componentWillUnmount(){
    //     this.setState({initialItems: this.state.initialItems})
    // }
    render() {
        return (
            <div>
                <input type="text" placeholder="Search" onChange={this.filterList} />
                {this.state.items.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </div>
        )
    }
}

export default FilteredPost;
