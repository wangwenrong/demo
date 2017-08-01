import React from 'react';
import PropTypes from 'prop-types';
import { Top, FormBtn } from '../components/list'

export function FormList() {
    return (
        <div id='app' style={{ background: '#fff' }}>
            <Top title='表单' back='< 返回' />
            <div className='warp'>
                <FormItem type='text' title='用户名' svg='448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288' />
                <FormItem type='eamil' title='邮箱' svg='448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288' />
                <FormItem type='text' title='传真' svg='448,224 288,224 288,64 224,64 224,224 64,224 64,288 224,288 224,448 288,448 288,288 448,288' />
                <div style={{ margin: '0.4rem 0.2rem' }}>
                    <FormBtn text='确认' />
                </div>
                
            </div>
        </div>
    )
    function FormItem({ type, title, svg }) {
        return (
            <div className='formList'>
                <div className='formListIcon'>
                    <svg style={{ fill: 'blue' }} version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="0.5rem" height="0.5rem" viewBox="0 0 512 512" xmlSpace="preserve">
                        <polygon points={svg} />
                    </svg>
                </div>
                <div className='formListInput'><input type={type} placeholder={title} /></div>
            </div>
        )
    }
}