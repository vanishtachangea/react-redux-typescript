import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo} from '../actions';
import { StoreState } from '../reducers';
interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;

}
export class _App extends React.Component<AppProps>{
  // componentDidMount() {
  //   this.props.fetchTodos();
  // }
  onButtonClick = (): void => {
    this.props.fetchTodos();
  }
  onTodoClick = (id:number): void => {
    this.props.deleteTodo(id);
  }
  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id} onClick={()=>this.onTodoClick(todo.id)}>{todo.title}</div>
    })
  }
  render() {
    return (<div> <button onClick={this.onButtonClick}>Fetch</button>
      {this.renderList()}
    </div>)
  }
}
const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos }
}
export const App = connect(
  mapStateToProps, { fetchTodos, deleteTodo }
)(_App);
