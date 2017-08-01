import React from 'react'
import { Top } from '../components/list'

export function Messages(prpos) {
    console.log(prpos)
    return (
        <div id='app'>
            <Top title='消息弹窗' back='< 返回' />
            <div className='warp'>
                <div className='contenBlock'>
                    <p className='row'>
                        <RowItems className='col_33' title='alert' />
                        <RowItems className='col_33' title='alert' />
                        <RowItems className='col_33' title='alert' />
                    </p>
                    <p className='row'>
                        <RowItems className='col_50' title='alert' />
                        <RowItems className='col_50' title='alert' />
                    </p>
                </div>
            </div>
            {/*<div className='popupOverlay'>
                <div className='modal modalIn'>
                    <ModalInner title='你好' text='您好您好您好' inputText='请输入' />
                     <div className='modalInner'>
                        <div className='modalTitle'>Framework7</div>
                        <div className='modalText'>Hello!</div>
                        <div className='inputField'>
                            <input type="text" className="modalTextInput" placeholder='请输入。。。'/>
                        </div>
                    </div>
                    <div className='modalButtons'>
                        <ModalButton content='OK'/>
                    </div>
                </div>
                <PopupOverlay title='你好' text='您好您好您好' inputText='请输入' content='OK' />
                <div className='modal modalInActions'>
                    <div className="actionsGroup">
                        <div className="actionsLabel">Here comes some optional description or warning for actions below</div>
                        <div className="actionsButton">Alert</div>
                        <div className="actionsButton">Nice Red Button </div>
                    </div>
                    <div className="actionsGroup">
                        <div className="actionsButton">Cancel</div>
                    </div>
                </div>
            </div> */}
        </div>
    )

    function RowItems({indexShow, className,title }) {
        return (
            <span onClick={()=>{window.indexShow(true)}} className={className}>
                <a className='button' href="#">{title}</a>
            </span>
        )
    }

}    