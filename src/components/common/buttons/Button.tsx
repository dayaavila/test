import * as React from 'react';

import './buttonStyles.css';

interface ButtonProps {
    text: string;
    //onClick: any;
    onChange: any;
}
export class Button extends React.Component <ButtonProps,any> {

    /*onClick() {
        if (this.props.onClick) this.props.onClick();
    }*/

    onChange() {
        if (this.props.onChange) this.props.onChange();
    }

    render() {
            return (<input className={'button'}
                       type={'button'}
                       //onClick={this.props.onClick}
                       onChange={this.props.onChange}
                       value={this.props.text}/>);
    }
}