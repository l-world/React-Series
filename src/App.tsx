import React from 'react';
import ChessCmp from './components/ChessCmp/ChessCmp';
import { ChessType } from './types/enums';

export class App extends React.Component<{}> {
    render() {
        return (
            <div>
                <ChessCmp type={ChessType.none} onClick={ () => {
                    console.log("被点击了")
                } } />
                <ChessCmp type={ChessType.red} onClick={ () => {
                    console.log("被点击了")
                } } />
                <ChessCmp type={ChessType.black} onClick={ () => {
                    console.log("被点击了")
                } } />
            </div>
        )
    }
}
