import React from 'react';
import "./components/common/buttons/buttonStyles.css";
import {Button} from './components/common/buttons/Button';
import  {List} from './components/common/ListaDeValores/ListaDeValores';
import {Texto} from './components/common/Texto/texto'
import './App.css';

export class App extends React.Component<any,any> {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <List text={"Lista"} />
                    <Texto />
                    {/*<Button text={"AGREGAR"} onClick={this.showMessage.bind(this)} />*/}
                    <Button text={"AGREGAR"} onChange={this.showMessage.bind(this)} />

                </header>
            </div>
        );
    }

    showMessage() {
        console.log(this);
    }
}

