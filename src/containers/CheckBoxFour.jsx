import React from 'react';
import {  WarpLink, Top, Link,Ptitle } from '../components/list'

export function CheckBoxFour() {
    return (
        <div id='app'>
            <Top to='/CheckBoxTwo' title='智能选择' back='< 返回' />
            <div className='warp'>
                <div className='checkBox'>
                    <Ptitle title='日本' />
                    <WarpLink>
                        <Link title='本田' imgBack='images/dxk.png' />
                        <Link title='丰田' imgBack='images/dxk.png' />
                        <Link title='东风日产' imgBack='images/dxk.png' />
                        <Link title='马自达' imgBack='images/dxk.png' />
                    </WarpLink>
                </div>
                <div className='checkBox'>
                    <Ptitle title='德国' />
                    <WarpLink>
                        <Link title='大众' imgBack='images/dxk.png' />
                        <Link title='宝马' imgBack='images/dxk.png' />
                        <Link title='奥迪' imgBack='images/dxk.png' />
                        <Link title='奔驰' imgBack='images/dxk.png' />
                    </WarpLink>
                </div>
            </div>
        </div>
    )
}