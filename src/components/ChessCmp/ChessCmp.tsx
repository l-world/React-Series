import React from 'react';
import { ChessType } from '../../types/enums';
import './ChessCmp.css';

// 使用接口定义 props 的类型约束,props有属性，1.type:棋子的类型，由ChessType约束，2. onClick：函数
interface Iprops {
    type: ChessType,
    onClick: () => void
}

// 棋子组件
const ChessCmp = ({ type, onClick }: Iprops) => {
    let chess = null;
    // 根据棋子类型返回棋子
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