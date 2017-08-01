import React from 'react';
import ReactDOM from 'react-dom';
import App, { headerinner,headericon  } from './达飞组件';
window.onresize = function () {
  document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");
};
var __pageWindth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
document.querySelector("html").setAttribute("style", "font-size:" + __pageWindth / 7.5 + "px")

ReactDOM.render(
  <div id='app'>
      <header>
        <headerinner address='北京' title='达飞云贷' num='99'>
          <ul class="iconList">
            <headericon imgIcon='../images/icon_jiekuan.png' title='借款'/>
            <headericon imgIcon='../images/icon_touzi.png' title='投资'/>
            <headericon imgIcon='../images/icon_dafenqi.png' title='达分期'/>
            <headericon imgIcon='../images/icon_shangcheng.png' title='商城'/>
          </ul>
        </headerinner>
      </header>
  </div>,
  document.getElementById('root')
)
