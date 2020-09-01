import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface AppProps {
  color?: string;
}
interface AppState {
  counter: number
}

const App = (props:AppProps):JSX.Element=>{
  return <div>{props.color}</div>
} 

/* class App extends React.Component<AppProps>{
  state = { counter: 0 }
  //  constructor(props: AppProps) {
  //   super(props);
  //   this.state = { counter: 0 }
  // } 

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  }
  onDecrement = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (<div>{this.props.color}

      <div>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    </div>)
  }

}
 */
ReactDOM.render(
  <React.StrictMode>
    <App color='red'/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
