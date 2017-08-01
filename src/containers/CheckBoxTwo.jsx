import React from 'react';
import {  WarpLink, Top,Chexboxtwo } from '../components/list'

export function CheckBoxTwo() {
    return (
        <div id='app'>
            <Top to='/CheckBox' title='智能选择' back='< 返回' />
            <div className='warp'>
                <div className='checkBox'>
                    <WarpLink>
                        <Chexboxtwo to='/CheckBoxThree' title='水果' choose='苹果，香蕉' />
                        <Chexboxtwo to='/CheckBoxFour' title='汽车' choose='奥迪，大众，福特' />
                        <Chexboxtwo title='Mac或Windows' choose='苹果笔记本' />
                    </WarpLink>
                </div>
            </div>
        </div>
    )
}