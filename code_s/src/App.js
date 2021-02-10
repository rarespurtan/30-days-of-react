import "./App.css";
import Table from "./Table";
import React, { Component } from "react";
import Form from "./Form";
import Api from "./Api";

class App extends Component {
    state = {
        characters: [
            {
                name: "Charlie",
                job: "Janitor",
            },
            {
                name: "Mac",
                job: "Bouncer",
            },
            {
                name: "Dee",
                job: "Aspring actress",
            },
            {
                name: "Dennis",
                job: "Bartender",
            },
        ],
    };

    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            }),
        });
    };

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] });
    };

    render() {
        const { characters } = this.state;
        return (
            <div className="container">
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Form handleSubmit={this.handleSubmit} />
                <Api />
            </div>
        );
    }
}

export default App;
