import React from 'react';
import { Ptitle,Checkboxone, Shoufengqinone1, WarpLink, Top, Shoufengqinthree,Chexboxtwo } from '../components/list'

export function CheckBoxOne() {
    return (
        <div id='app'>
            <Top to='/CheckBox' title='复选框和单选框' back='< 返回' />
            <div className='warp'>
                <div className='checkBox'>
                    <Ptitle title='复选框组' />
                    <WarpLink>
                        <Checkboxone title='图书' />
                        <Checkboxone title='电影' />
                        <Checkboxone title='餐饮' />
                    </WarpLink>
                    <Ptitle title='复选框组' />
                    <WarpLink>
                        <Shoufengqinone1 title='图书' imgBack='../images/dxk.png'></Shoufengqinone1>
                        <Shoufengqinone1 title='餐饮' imgBack='../images/dxk.png'></Shoufengqinone1>
                        <Shoufengqinone1 title='图书' imgBack='../images/dxk.png'></Shoufengqinone1>
                    </WarpLink>
                </div>
            </div>
        </div>
    )
}