import React, { Component } from 'react';
import { Transition } from 'react-move';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.loadNumber=0;
  }
  render() {
    this.loadNumber++;
    let items = [this.props.pathname]
    let content = this.props.children;
    let action = this.props.action;
    let updateTL = 0, enterTL = 0, leaveTL = 0;
    if (this.loadNumber > 1) {
      if (action === 'POP') {
        enterTL = -100;
        leaveTL = 100;
      } else {
        enterTL = 100;
        leaveTL = -100;
      }
    }
    return (
      <Transition
        data={items}
        getKey={d => d}
        duration={10000}
        update={d => ({
          translate: 0
        })}
        enter={d => ({
          translate: enterTL
        })}
        leave={d => ({
          translate: leaveTL
        })}
      >
        {(data) => {
          console.log('data',data)
          return (
          <div style={{ height: '100%', width: '100%' }}>
            {data.map((dataItem) => {
              return <div style={{ transform: 'translate3d(' + dataItem.state.translate + '%,0,0)', position: 'absolute', left: 0, height: '100%', right: 0 }}>{content}</div>
            })}
          </div>
        )}}
      </Transition>
    );
  }
}
export default App;
