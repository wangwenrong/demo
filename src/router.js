import React from 'react';
import App from './App';
import { Index } from './containers/index';
import { Shoufengqin } from './containers/shoufengqin';
import { CheckBox } from './containers/CheckBox';
import { CheckBoxOne } from './containers/CheckBoxOne';
import { CheckBoxTwo } from './containers/CheckBoxTwo';
import { CheckBoxThree } from './containers/CheckBoxThree';
import { CheckBoxFour } from './containers/CheckBoxFour';
import { ColorChoose } from './containers/ColorChoose';
import { Messages } from './containers/Messages';
import { PopupOverlay } from './components/list';
import { ColRow } from './containers/colRow';
import { FormList } from './containers/formList';
import { SwipeList } from './containers/swipeList';


import {
  BrowserRouter,
  HashRouter,
  Route,
  Link,
  withRouter,
  Switch
} from 'react-router-dom'
export class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexShow: false
    };
    window.indexShow = this.indexShow;
  }
  render() {
    this.loadNumber++;
    let items = [
    <Route exact path="/" component={Index} />,
    <Route exact path="/shoufengqin" component={Shoufengqin} />,
    <Route exact path="/CheckBox" component={CheckBox} />,
    <Route exact path="/CheckBoxOne" component={CheckBoxOne} />,
    <Route exact path="/CheckBoxTwo" component={CheckBoxTwo} />,
    <Route exact path="/CheckBoxThree" component={CheckBoxThree} />,
    <Route exact path="/CheckBoxFour" component={CheckBoxFour} />,
    <Route exact path="/ColorChoose" component={ColorChoose} />,
    <Route exact path="/Messages" component={Messages} />,
    <Route exact path="/colRow" component={ColRow} />,
    <Route exact path="/formList" component={FormList} />,
    <Route exact path="/swipeList" component={SwipeList} />
    ];
    return (
      <HashRouter>
        <div style={{ height: '100%', width: '100%' }}>
          {items}
          {/* <Route render={({ location, history, match }) => {
            return (
              <App pathname={location.pathname} action={history.action}>
                <Switch key={location.pathname}>
                  {items}
                  </Switch>
              </App>
            );
          }} /> */}

          {/* {React.cloneElement(this.props.children, {
                    key: this.props.location.pathname
                })} */}

          {/* <Route component={Index}/> */}
          <PopupOverlay show={this.state.indexShow} title='你好' text='您好您好您好' content='OK' />
        </div>
      </HashRouter>
    )
  }
  indexShow = (show) => {
    console.log(222)
    this.setState({ indexShow: show });
  }
}