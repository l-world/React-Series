import React from 'react'
import { ChessType } from '../../types/enums'
import ChessCmp from '../ChessCmp'
import './index.css'

// 使用接口约束 props 的属性
interface Iprops {
    chesses: ChessType[]
    isGameOver?: boolean
    onClick?: (index: number) => void
}

// 为了给isGameOver添加默认值，使用了React.FC约束BoardCmp为函数式组件（又叫无状态组件），这样就会提示函数组件上自带的属性了
const BoardCmp: React.FC<Iprops> = (props) => {
    // 类型断言 同 (isGameOver = props.isGameOver as boolean)作用一样
    // 因为isGameOver不是非必填，所以ts会认为他的类型是boolean或者undefined，为了告诉ts isGameOve并非undefined,需要断言
    // props.isGameOver! 是简写方式,表示非空断言
    const isGameOver = props.isGameOver!;

    const list = props.chesses.map( (type,i) => <ChessCmp 
        type={type}
        key={i}
        onClick={ () => {
            if( props.onClick && !isGameOver){
                props.onClick(i)
            }
        }}
     />)

    return (
        <div className='board'>
            {list}
        </div>
    )
}

// 给 isGameOver 添加默认值，defaultProps中的属性与接口定义的属性是一一对应的
BoardCmp.defaultProps = {
    isGameOver:false
}

// 默认导出变量
export default BoardCmp

// export导出时，要导出一个声明（函数声明，变量声明），不能直接导出一个变量
// 如果要导出变量，要用大括号括起来
// export { BoardCmp } 