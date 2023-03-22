// 枚举定义棋子类型，三种：红色棋子，黑色棋子，空棋子
export enum ChessType {
    none,
    red,
    black
}

export enum GameStatus {
    gaming, // 游戏进行中
    redWin, //红方胜出
    blackWin, //黑方胜出
    dogfall // 平局
}