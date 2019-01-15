import React, { Component } from 'react';
import Searchbar from '../Components/Searchbar';
import Fixed from '../Components/Fixed';
import Content from '../Components/Content';
import Modal from '../Components/Modal';
import './App.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            search: '',
            planetList: [],
            routeid: -1,
            show: false,
            fetchInProgress: true
        }
        this.searchScriptHelper = this.searchScriptHelper.bind(this);
        this.searchScriptHelper(`https://swapi.co/api/planets/?search=${''}`, [], '');
    }

    searchScriptHelper(link, arrayHelper, eventTargetValue) {
        fetch(link)
            .then(response => response.json())
            .then(planets => {
                arrayHelper.push.apply(arrayHelper, planets.results)
                if (planets.next === null) {
                    console.log(arrayHelper);
                    if (this.state.search === eventTargetValue) {
                        const compare = (a, b) => {
                            if (a.name < b.name)
                                return -1;
                            if (a.name > b.name)
                                return 1;
                            return 0;
                        }
                        arrayHelper.sort(compare);
                        this.setState({
                            planetList: arrayHelper,
                            fetchInProgress: false
                        })
                    }
                } else {
                    this.searchScriptHelper(planets.next, arrayHelper, eventTargetValue);
                }
            })
    }

    searchScript = (event) => {
        const eventTargetValue = event.target.value;
        let arrayHelper = [];
        this.setState({
            search: eventTargetValue,
            fetchInProgress: true
        })
        this.searchScriptHelper(`https://swapi.co/api/planets/?search=${eventTargetValue}`, arrayHelper, eventTargetValue);
    }

    showModal = (id, planet) => {
        this.setState({
            show: true,
            routeid: id
        })
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div className="App">
                <Modal show={this.state.show} hide={this.hideModal} planet={this.state.planetList[this.state.routeid]} />
                <Fixed>
                    <h1 className="title"> Star Wars Planetarium </h1>
                    <Searchbar onChange={this.searchScript} />
                </Fixed>
                <Content planets={this.state.planetList} showModal={this.showModal} loading={this.state.fetchInProgress} />
            </div>
        );
    }
}

export default App;