import React from 'react';
import ReactDOM from 'react-dom';
import App, { App1, Button } from './App';
import './index.css';
import { Router} from './router'

window.onresize = function () {
  document.querySelector("html").setAttribute("style", "font-size:" + document.body.clientWidth / 7.5 + "px");
};
var __pageWindth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
document.querySelector("html").setAttribute("style", "font-size:" + __pageWindth / 7.5 + "px")
ReactDOM.render(<Router />,document.getElementById('root'));
// ReactDOM.render(
//   <div id='app'>
//     <Top title='标题'/>
//     <div className='warp'>
//       <WarpLink>
//         <Link title='手风琴效果' leftIcon='../images/icon.png' imgBack='../images/arrow001.png'/>
//         <Link title='复选框' leftIcon='../images/icon.png' imgBack='../images/arrow001.png'/>
//         <Link title='颜色主题'  leftIcon='../images/icon.png' imgBack='../images/arrow001.png'/>
//       </WarpLink>
//       <div className='sfqList'>
//         <WarpLink>
//           <Shoufengqinone title='点击下拉' imgBack='../images/arrow001.png'>
//             <Shoufengqintwo>
//               <Shoufengqinthree content="我是内容我是内容我是内容我是内容我是内容我是内容"/>
//             </Shoufengqintwo>             
//           </Shoufengqinone>
//           <Shoufengqinone title='嵌套列表' imgBack='../images/arrow001.png'>
//             <Shoufengqintwo>
//               <WarpLink>
//                 <Shoufengqinfour title='功能111111' imgIcon='../images/icon.png'/>
//                 <Shoufengqinfour title='功能222' imgIcon='../images/idxk.png'/>
//                 <Shoufengqinfour title='功能333333' imgIcon='../images/icon.png'/>
//               </WarpLink>
//             </Shoufengqintwo>
//           </Shoufengqinone>
//         </WarpLink>
//       </div>
//       <div className='checkBox'>
//         <Ptitle title='复选框组'/>
//         <WarpLink>
//           <Checkboxone title='图书'/>
//           <Checkboxone title='电影'/>
//           <Checkboxone title='餐饮'/>
//         </WarpLink>
//         <Ptitle title='复选框组'/>
//         <WarpLink>
//           <Shoufengqinone title='图书' imgBack='../images/dxk.png'></Shoufengqinone>
//           <Shoufengqinone title='餐饮' imgBack='../images/dxk.png'></Shoufengqinone>
//           <Shoufengqinone title='图书' imgBack='../images/dxk.png'></Shoufengqinone>
//         </WarpLink>
//         <WarpLink>
//           <Chexboxtwo title='水果' choose='苹果，香蕉'/>
//           <Chexboxtwo title='汽车' choose='奥迪，大众，福特'/>
//           <Chexboxtwo title='Mac或Windows' choose='苹果笔记本'/>
//         </WarpLink>
//       </div>

//     </div>
//   </div>,
//   document.getElementById('root')
// );
