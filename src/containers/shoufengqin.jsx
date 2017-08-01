import React from 'react';
import { Link,Shoufengqinone, WarpLink, Top, Shoufengqinthree } from '../components/list'

export function Shoufengqin() {
    return (
        <div id='app'> 
            <Top title='手风琴下拉菜单' back='< 返回' />
            <div className='warp'>
                <div className='sfqList'>
                    <WarpLink>
                        <Shoufengqinone title='点击下拉' imgBack='../images/arrow001.png'>
                            <Shoufengqinthree content="我是内容我是内容我是内容我是内容我是内容我是内容哈哈哈哈哈或或我是内容我是内容我是内容我是内容我是内容我是内容哈哈哈哈哈或或我是内容我是内容我是内容我是内容我是内容我是内容哈哈哈哈哈或或内容我是内容我是内容我是内容哈哈哈哈哈或或或或或或或或或或或或哼哼哈哈哼哼哈哈哼哼哈哈" />
                        </Shoufengqinone>
                        <Shoufengqinone title='嵌套列表' imgBack='../images/arrow001.png'>
                                <WarpLink>
                                    <Link title='功能111111' leftIcon='../images/icon.png' />
                                    <Link title='功能222' leftIcon='../images/icon.png' />
                                    <Link title='功能333333' leftIcon='../images/icon.png' />
                                </WarpLink>
                        </Shoufengqinone>
                    </WarpLink>
                </div>
            </div>
        </div>
    )
}