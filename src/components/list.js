import React from 'react';
import PropTypes from 'prop-types';
import { Animate } from 'react-move'

// import './style.css';
import {
    BrowserRouter,
    Route,
    Link as LinkRouter
} from 'react-router-dom';


//首页
export function Top({ title, back }, context) {
    let history = context.router.history;
    let elementBack = null;
    if (back) {
        elementBack = <div onClick={() => {
            history.goBack();
        }} className="back">{back}</div>
    }
    return (
        <div className="top">
            <div className="topInfo"><p>{title}</p></div>
            <div className="in">
                {elementBack}
                <div className="enrich"></div>
                <div className="right"></div>
            </div>
        </div>
    );
}
Top.contextTypes = {
    router: PropTypes.object
};
export function WarpLink({ children }) {
    return (
        <ul className='listBlock'>
            {children}
        </ul>
    );
}
export function Link({ to, title, leftIcon, imgBack }, context) {
    let history = context.router.history;
    let elementLeftIcon = null;
    if (leftIcon) {
        elementLeftIcon = <div className="icon" style={{ width: '.6rem', height: '.6rem' }}>
            <img style={{ width: '.6rem', height: '.6rem' }} src={leftIcon} alt="" />
        </div>;
    }
    let elementImgBack = null;
    if (imgBack) {
        elementImgBack = <div className="right"><img src={imgBack} alt="" /></div>
    }
    return (
        <li className="blockItem">
            <a onClick={() => { if (to !== undefined) history.push(to) }}>
                <div className="itemIn">
                    {elementLeftIcon}
                    <div className="itemInner enrich">
                        <div className="title">{title}</div>
                        {elementImgBack}
                    </div>
                </div>
            </a>
        </li>
    );
}
Link.contextTypes = {
    router: PropTypes.object
};

export class Shoufengqinone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        let history = this.context.router.history;
        let data = { height: 0 };
        if (this.state.open) {
            data.height = 3;
        }
        return (
            <li className="blockItem">
                <a onClick={this.dianji}>
                    <div className="itemInner enrich">
                        <div className="title">{this.props.title}</div>
                        <div className={'right ' + (this.state.open ? 'active' : '')} ><img src={this.props.imgBack} alt="" /></div>
                    </div>
                </a>
                <Animate
                    data={data}
                    default={{ height: 0 }}
                    duration={400}
                    easing='easeQuadIn' // anything from https://github.com/d3/d3-ease 缓动函数  
                >
                    {(data) => (<div style={{ height: data.height + 'rem' }} className='contentBlock'>

                        {this.props.children}

                    </div>)}

                </Animate>
            </li>
        )
        // TBD
    }
    dianji = () => {
        this.setState({ open: !this.state.open });
    }
}
Shoufengqinone.contextTypes = {
    router: PropTypes.object
};

// 手风琴下拉
export function Shoufengqinone1({ title, imgBack, children }) {
    return (
        <li className="blockItem">
            <a href="#">
                <div className="itemInner enrich">
                    <div className="title">{title}</div>
                    <div className="right"><img src={imgBack} alt="" /></div>
                </div>
            </a>
            {children}
        </li>
    )
}
export function Shoufengqintwo({ children }) {
    return (
        <div className="contentBlock">
            {children}
        </div>
    )
}
export function Shoufengqinthree({ content }) {
    return (
        <div className="blockItemContent">
            <p>{content}</p>
        </div>
    )
}
export function Ptitle({ title }) {
    return (
        <div className="titleFx">
            <p>{title}</p>
        </div>
    )
}
//复选框
export class Checkboxone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            have: false
        };
    }
    render() {
        return (
            <li className="blockItem">
                <label onClick={this.haveActive} className="labelCheck">
                    <input type="checkbox" name="checkboxFl" />
                    <div className="itemIn">
                        <div className="icon">
                            <i className={'icon02 ' + (this.state.have ? 'active' : '')}></i>
                        </div>
                        <div className="itemInner enrich">
                            <div className="title">{this.props.title}</div>
                        </div>
                    </div>
                </label>
            </li>
        )
    }
    haveActive = () => {
        this.setState({ have: !this.state.have })
    }
}

// export function Checkboxone({ title }) {
//     return (
//         <li className="blockItem">
//             <label onClick={} className="labelCheck">
//                 <input type="checkbox" name="checkboxFl" />
//                 <div className="itemIn">
//                     <div className="icon"><i className="icon02"></i></div>
//                     <div className="itemInner enrich">
//                         <div className="title">{title}</div>
//                     </div>
//                 </div>
//             </label>
//         </li>
//     )
// }
export function Chexboxtwo({ to = '/', title, choose }) {
    return (
        <li className="blockItem">
            <LinkRouter to={to}>
                <div className="itemIn">
                    <div className="itemInner enrich go">
                        <div className="title">{title}</div>
                        <div className="enrich"></div>
                        <div className="choose">{choose}</div>
                    </div>
                </div>
            </LinkRouter>
        </li>
    )
}
//消息弹窗提醒
export class PopupOverlay extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('PopupOverlay:render111', this.props.show)
        let elementInput = null;
        if (this.props.inputText) {
            elementInput = <div className='inputField'>
                <input type='text' className='modalTextInput' value={this.props.inputText} />
            </div>
        }
        return (
            <div className={'popupOverlay ' + (this.props.show ? 'active' : '')}>
                <div className={'modal modalIn ' + (this.props.show ? 'active' : '')}>
                    <div className='modalInner'>
                        <div className='modalTitle'>{this.props.title}</div>
                        <div className='modalText'>{this.props.text}</div>
                        {elementInput}
                    </div>
                    <div className='modalButtons'>
                        <span onClick={() => { window.indexShow(false) }} className='modalButton'>{this.props.content}</span>
                    </div>
                </div>
            </div>
        )
    }
    dianji = () => {
        this.setState({ open: !this.state.open });
    }
}
PopupOverlay.contextTypes = {
    router: PropTypes.object
};

export function FormBtn({ text }, context) {
    return (
        <div onClick={() => {
            context.router.history.push('')
        }} className='formBtn'>{text}</div>
    )
}
FormBtn.contextTypes = {
    router: PropTypes.object
};

//可移动操作列表
export class Swipe extends React.Component {
    constructor(props) {
        super(props)
        this.startX = 0,   //触摸原点
            this.state = {
                clientX: 0,  //滑动的x点
                optionWidth: 0,
                transition: false,
                show: true
                //offsetX:0
            }
    }
    render() {
        let offsetX = this.state.clientX - this.startX; //偏移差
        //禁止往右移动
        if (offsetX > 0) {
            offsetX = 0;
            this.startX = this.state.clientX;
        }
        // if (offsetX > 0) {
        //     offsetX = 0;
        // }
        // let styles = {
        //     root: SL.create({ height: '.88rem', borderBottom: '1px solid #e6e6e6', position: 'relative', overflow: 'hidden' }).merge(this.props.style),
        //     /**移动 */
        //     container: SL.create({ marginLeft: '.2rem', fontSize: '.26rem', background: '#fff', zIndex: 10, position: 'absolute', width: '100%', height: '100%', transform: `translate3d(${offsetX}px,0,0)` }),
        //     right: { marginRight: '.2rem' },
        //     option: { height: '100%', fontSize: '.32rem', overflow: 'hidden' },
        //     optionLabel: SL.create({ height: '100%', padding: '0 .3rem' })
        // }
        // if (this.state.transition) {
        //     styles.container.merge({ transition: '0.3s ease-out' });
        // }
        return (
            <div style={{ position: 'relative', display: this.state.show ? '' : 'none' }}>
                <div style={{ display: 'flex', height: '.8rem', background: '#fff', color: '#fff' }}>
                    <div style={{ flex: '1' }}></div>
                    <div style={{ display: 'flex', height: '100%', alignItems: 'center', background: '#ddd', padding: '0 10px' }}>设为标记</div>
                    <div onClick={() => { this.showBlock(); this.startX = 0; this.setState({ clientX: 0 }, this.props.delete) }} style={{ display: 'flex', height: '100%', alignItems: 'center', background: 'red', padding: '0 10px' }}>删除</div>
                </div>
                <div
                    onTouchStart={(e) => {
                        this.startX = e.touches[0].clientX;
                        this.setState({ transition: false, clientX: this.startX });
                    }}
                    onTouchMove={(e) => {
                        this.setState({ clientX: e.touches[0].clientX });
                    }}
                    onTouchEnd={(e) => {
                        if (offsetX < -48) {
                            this.setState({ transition: true }, () => {
                                this.startX = 0;
                                this.setState({ clientX: -124 });
                            });
                        }
                        else {
                            this.setState({ transition: true }, () => {
                                this.startX = 0;
                                this.setState({ clientX: 0 });
                            });
                        }

                    }}
                    onClick={this.props.to}
                    style={{ display: 'flex', position: 'absolute', left: 0, right: 0, top: 0, lineHeight: '0.8rem', padding: '0 0.3rem', background: '#fff', transform: 'translate3d(' + offsetX + 'px,0,0)', transition: this.state.transition ? 'transform 300ms' : null }}>
                    <p>{this.props.title}</p>
                    <div className='enrich'></div>
                    <span>{this.props.day}</span>
                </div>
                {/* <div
                    onTouchStart={(e) => {
                        if (this.state.show) {
                            this.setState({ transition: true });
                            window.setTimeout(() => {
                                this.setState({ startX: this.state.clientX });
                                this.setState({ show: false });
                            }, 100)
                        } else {
                            this.setState({ transition: false, startX: e.touches[0].clientX, clientX: e.touches[0].clientX })
                        }
                    } }
                    onTouchMove={(e) => { this.setState({ clientX: e.touches[0].clientX }) } }
                    onTouchEnd={(e) => {
                        this.setState({ transition: true }); window.setTimeout(() => {
                            if (-offsetX > (this.state.optionWidth / 3)) {
                                this.setState({ startX: this.state.clientX + this.state.optionWidth });
                                this.setState({ show: true });
                            } else {
                                this.setState({ startX: this.state.clientX });
                                this.setState({ show: false });
                            }
                        }, 100)
                    } }
                    >
                    <div>{this.props.label}</div>
                    <Placeholder.Full/>
                    <div style={styles.right}><span>{this.props.rightLabel}</span></div>
                </div>
                <Placeholder.Full/>
                <div className={CN.czjz} ref='option' style={styles.option}>
                    <span className={CN.czjz} style={{...styles.optionLabel.o, background: '#8a8282'}}>标为一读</span>
                <span className={CN.czjz} style={{...styles.optionLabel.o, background: 'red'}}>删除</span>
                </div > */}
            </div >
        );
    }
    showBlock = () => {
        this.setState({ show: false })

    }
    componentWillMount() {
    }
    componentDidMount() {
        //this.setState({ optionWidth: this.refs.option.clientWidth });
    }
    handleClick() {
        if (this.props.href) {
            //console.log('执行了list点击');
            //hashHistory.push(this.props.href);
        }
        else if (this.props.onTap) {
            //this.props.onTap();
        }
    }
}
