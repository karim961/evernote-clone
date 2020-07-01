import React from 'react';
import './App.css';
import firebase from "firebase";
import SidebarComponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            selectNoteIndex: null,
            selectedNote: null,
            notes: null
        }
    }

    render() {
        return (
            <div className="app-container">
                <SidebarComponent
                    selectedNoteIndex={this.state.selectNoteIndex}
                    notes={this.state.notes}
                />
                <EditorComponent/>

            </div>
        );
    }

    componentDidMount = () => {
        firebase.firestore()
            .collection('notes')
            .onSnapshot(serverUpdate => {
                const notes = serverUpdate.docs.map(_doc => {
                    const data = _doc.data();
                    data['id'] = _doc.id;
                    return data;
                });
                console.log(notes);
                this.setState({notes: notes});
            })
    }

}

export default App;
