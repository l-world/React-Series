import React from 'react';
import BoardCmp from './components/BoardCmp';
import { ChessType } from './types/enums';

const chesses = [
    ChessType.black,
    ChessType.red,
    ChessType.none,
    ChessType.black,
    ChessType.red,
    ChessType.black,
    ChessType.none,
    ChessType.black,
    ChessType.red,
]

export class App extends React.Component<{}> {
    render() {
        return (
            <div>
                <BoardCmp 
                    chesses={chesses}
                    onClick={ (i) => {
                        console.log(i)
                    } }
                />
            </div>
        )
    }
}
