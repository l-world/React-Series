import React from 'react';
import { ChessType } from '../../types/enums';
import './ChessCmp.css';

interface Iprops {
    type: ChessType,
    onClick: () => void
}

const ChessCmp = ({ type, onClick }: Iprops) => {
    let chess = null;
    if(type === ChessType.red){
        chess = <div className='red chess-item'></div>
    }else if(type === ChessType.black){
        chess = <div className='black chess-item'></div>
    }
    return (
        <div 
            className='chess'
            onClickCapture={ () => {
                if(type === ChessType.none && onClick){
                    onClick();
                }
            }}
        >
            {chess}
        </div>
    )
}

export default ChessCmp