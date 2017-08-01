import React from 'react';
import {Link,WarpLink,Top} from '../components/list';
import { CSSTransitionGroup } from 'react-transition-group';

export function Index({history}) {
    return (
        <div id='app'>
            <Top title='常用小效果' />
            <div className='warp'>
                <WarpLink>
                    <Link to='/shoufengqin' title='手风琴效果' leftIcon='../images/icon.png' imgBack='../images/arrow001.png' />
                    <Link to='/CheckBox' title='复选框' leftIcon='../images/icon.png' imgBack='../images/arrow001.png' />
                    <Link to='/ColorChoose' title='颜色主题' leftIcon='../images/icon.png' imgBack='../images/arrow001.png' />
                    <Link to='/Messages' title='消息弹窗' leftIcon='../images/icon.png' imgBack='../images/arrow001.png' />
                    <Link to='/colRow' title='九宫格' leftIcon='../images/icon.png' imgBack='../images/arrow001.png' />
                    <Link to='/formList' title='登录' leftIcon='../images/icon.png' imgBack='../images/arrow001.png' />
                    <Link to='/swipeList' title='可移动操作列表' leftIcon='../images/icon.png' imgBack='../images/arrow001.png' />
                </WarpLink>
            </div>
        </div>
    )
}