import React from 'react';
import { Top, Swipe } from '../components/list'

export function SwipeList() {
    return (
        <div id='app'>
            <Top title='可移动操作列表' back='< 返回' />
            <div className='warp'>
                <Swipe title='可移动操作111'></Swipe>
                <Swipe title='可移动操作222'></Swipe>
                <Swipe title='可移动操作333'></Swipe>
                <Swipe title='可移动操作444'></Swipe>
                <Swipe title='可移动操作555'></Swipe>
                <Swipe title='可移动操作666'></Swipe>
            </div>
        </div>
    )
}