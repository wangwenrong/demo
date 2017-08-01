import React from 'react';
import { Top, Ptitle } from '../components/list'
import $ from 'jquery';

export function ColorChoose() {
    return (
        <div id='app'>
            <Top title='选择颜色主题' back='< 返回' />
            <div className='warp'>
                <div className="selectorBox">
                    <Ptitle title='请选择颜色主题' />
                </div>
                <div className="colorBlock">
                    <div className="row">
                        <Item colorName='White' />
                        <Item colorName='Black' />
                        <Item colorName='Blue' />
                        <Item colorName='Orange' />
                        <Item colorName='Red' />
                    </div>
                    <div className="row">
                        <Item colorName='Pink' />
                        <Item colorName='Yellow' />
                        <Item colorName='Green' />
                        <Item colorName='Gray' />
                        <Item colorName='Lightblue' />
                    </div>
                </div>
            </div>
        </div>
    )
    function Item({ colorName }) {
        let 改变主题 = () => {
            $('#colorStyle').attr('href', 'css/style' + colorName + '.css');
        }
        return (
            <div onClick={改变主题} className={'colColor bg' + colorName} theme={colorName}></div>
        )
    }
}

