import React from 'react';
import {  WarpLink, Top, Link } from '../components/list'

export function CheckBoxThree() {
    return (
        <div id='app'>
            <Top to='/CheckBoxTwo' title='智能选择' back='< 返回' />
            <div className='warp'>
                <div className='checkBox'>
                    <WarpLink>
                        <Link title='苹果' imgBack='images/dxk.png' />
                        <Link title='菠萝' imgBack='images/dxk.png' />
                        <Link title='橙子' imgBack='images/dxk.png' />
                        <Link title='柚子' imgBack='images/dxk.png' />
                        <Link title='橘子' imgBack='images/dxk.png' />
                        <Link title='梨' imgBack='images/dxk.png' />
                        <Link title='香蕉' imgBack='images/dxk.png' />
                    </WarpLink>
                </div>
            </div>
        </div>
    )
}