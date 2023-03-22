import React from "react";
import { ChessType, GameStatus } from "../../types/enums";
import BoardCmp from "../BoardCmp";
import './index.css'

// 定义 state 的约束
interface IState {
    chesses: ChessType[]
    gameStatus: GameStatus
    nextChess: ChessType.red | ChessType.black
}

class GameCmp extends React.Component<{}, IState> {

    state: IState = {
        chesses: [],
        gameStatus: GameStatus.gaming,
        nextChess: ChessType.black
    }

    componentDidMount(): void {
        this.init();
    }

    // 初始化数据
    init() {
        const arr: ChessType[] = [];
        for (let i = 0; i < 9; i++) {
            arr.push(ChessType.none);
        }
        this.setState({
            chesses: arr,
            gameStatus: GameStatus.gaming,
            nextChess: ChessType.black
        })
    }

    /**
     * @description: 处理棋子点击事件
     * 如果函数运行，说明
     * 1. 游戏没有结束
     * 2. 点击的位置没有棋子
     * @param {number} index 棋子的位置
     * @return {*}
     */
    handleChessClick(index: number): void {
        const chesses: ChessType[] = [...this.state.chesses];
        chesses[index] = this.state.nextChess;
        this.setState(prev => ({
            chesses,
            nextChess: prev.nextChess === ChessType.red ? ChessType.black : ChessType.red,
            gameStatus: this.getGameStatus(chesses, index)
        }))
    }

    getGameStatus(chesses: ChessType[], index: number): GameStatus {
        // 1. 判断是否有一方获得胜利
        const horMin = Math.floor(index / 3) * 3;
        const verMin = index % 3;
        if ((chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]) // 横向三连
            ||
            (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6]) // 纵向三连
            ||
            (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none) // 对角线三连
            ||
            (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none))  // 对角线三连
        {

            if (chesses[index] === ChessType.red) {
                return GameStatus.redWin;
            } else {
                return GameStatus.blackWin
            }
        }
        // 2.判断是否平局
        if (!chesses.includes(ChessType.none)) {
            return GameStatus.equal;
        }
        // 3.游戏正在进行
        return GameStatus.gaming;
    }

    render() {
        return (
            <div className="game">
                <h1>三连棋游戏</h1>
                <BoardCmp
                    chesses={this.state.chesses}
                    isGameOver={this.state.gameStatus !== GameStatus.gaming}
                    onClick={this.handleChessClick.bind(this)}
                />
                <button onClick={() => { this.init() }} >重新开始</button>
            </div>
        )
    }
}

export default GameCmp;
