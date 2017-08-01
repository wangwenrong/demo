import React from 'react';
import { Ptitle, WarpLink, Top,Link } from '../components/list'

export function CheckBox() {
    return (
        <div id='app'>
            <Top title='复选框' back='< 返回' />
            <div className='warp'>
                <div className='checkBox'>
                    <Ptitle  title='复选框二合一' />
                    <WarpLink>
                        <Link to='/CheckBoxOne' leftIcon='./images/icon.png' title='复选框和无线电' imgBack='../images/dxk.png'/>
                        <Link to='/CheckBoxTwo' leftIcon='./images/icon.png' title='智能选择' imgBack='../images/dxk.png'/>
                    </WarpLink>
                </div>
            </div>
        </div>
    )
}