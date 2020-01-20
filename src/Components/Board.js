import React, { Component } from 'react'
import '../styles/Board.css'

export default class Board extends Component {

    constructor(props) {
        super(props)
        this.onMove = this.onMove.bind(this);
        this.state = {
            currentMove: 1, 
            moveCount: 0,
            winner: false,
            disabled: false,
            board: [...Array(9).keys()], 
            combinations: [
                [1,2,3], [4,5,6], [7,8,9], [1,4,7], 
                [2,5,8], [3,6,9], [1,5,9], [3,5,7]
            ]
        }
    }

    endGame() {
        this.setState({ winner: "It's a tie!" });
    }

    checkWinner() {
        
        const board = this.state.board;

        this.state.combinations.map(l => {
            if (board[l[0] - 1] === board[l[1] - 1] && board[l[1] - 1] === board[l[2] - 1])
                this.setState({ winner: `${(this.state.currentMove) ? 'X' : 'O'} wins!` }) 
        })

    }

    onMove(pos) {

        var newBoard = this.state.board;
        newBoard[pos] = (this.state.currentMove) ? 'X' : 'O';

        this.setState(prevState => {
            return { 
                moveCount: prevState.moveCount + 1,
                board: newBoard,
                currentMove: (this.state.currentMove) ? 0 : 1
            }
        });
        
        (this.state.moveCount === 8) ? this.endGame() : this.checkWinner();

    }
    
    clearBoard() {
        this.setState({
            moveCount: 0, 
            board: [...Array(9).keys()]
        });
    }

    render() {
        return [
            <div id="board">
                { this.state.board.map(pos => 
                    <h1 className="square" onClick={ () => this.onMove(pos) }>
                        { (typeof pos === 'string') ? pos : '+' }
                    </h1>
                ) }
            </div>,
            <h1 className="fade-in">{ (this.state.winner) ? this.state.winner : '' }</h1>
        ];
    }

    componentDidMount() {
        console.log(this.state.board);
    }

}
