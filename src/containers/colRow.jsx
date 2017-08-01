import React from 'react';
import { Top, Ptitle } from '../components/list'

export function ColRow() {
    return (
        <div id='app'>
            <Top title='常见九宫格' back='< 返回' />
            <div className='warp'>
                <Ptitle title='每行3个' />
                <div className='rowBlock'>
                    <RowBlock className='row_3' title='标题'/>
                    <RowBlock className='row_3' title='标题'/>
                    <RowBlock className='row_3' title='标题'/>
                </div>
                <div className='rowBlock'>
                    <RowBlock className='row_3' title='标题'/>
                    <RowBlock className='row_3' title='标题'/>
                    <RowBlock className='row_3' title='标题'/>
                </div>
                <div className='rowBlock'>
                    <RowBlock className='row_3' title='标题'/>
                </div>
                <Ptitle title='每行4个' />
                <div className='rowBlock'>
                    <RowBlock className='row_4' title='标题'/>
                    <RowBlock className='row_4' title='标题'/>
                    <RowBlock className='row_4' title='标题'/>
                    <RowBlock className='row_4' title='标题'/>
                </div>
                <div className='rowBlock'>
                    <RowBlock className='row_4' title='标题'/>
                    <RowBlock className='row_4' title='标题'/>
                    <RowBlock className='row_4' title='标题'/>
                    <RowBlock className='row_4' title='标题'/>
                </div>
                <div className='rowBlock'>
                    <RowBlock className='row_4' title='标题'/>
                    <RowBlock className='row_4' title='标题'/>
                </div>

            </div>
        </div>
    )


    function RowBlock({ className, title }) {
        return (
            <div className={className}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="0.5rem" height="0.5rem" viewBox="0 0 512 512" xmlSpace="preserve">
                    <polygon points="448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288 " />
                </svg>
                <p>{title}</p>
            </div>
        )
    }
}