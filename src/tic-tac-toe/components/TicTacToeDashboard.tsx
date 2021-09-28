import { TicTacToeBoard } from "./TicTacToeBoard";


interface noprops {

}
export function TicTacToeDashboard(props: noprops){
    return (
        <section>
            <div>
                <TicTacToeBoard />
            </div>
            <footer>
                <p><a href="https://lukerd-29-00.github.io/Portfolio/">Homepage</a></p>
                <p><a href="https://github.com/Lukerd-29-00/Tic-Tac-Toe">Tic-Tac-Toe source code</a></p>
                <p><a href="https://github.com/Lukerd-29-00/Portfolio">Main repository</a></p>
            </footer>
        </section>

    )
}