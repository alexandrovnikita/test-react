import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.handelButtonChange = this.handelButtonChange.bind(this);
    }
    handelButtonChange(e){
        this.props.onButtonChange(e.target.value);
    }
    render() {
        const isButtonClick = this.props.isButtonClick;
        let button4;
        if(isButtonClick){
            button4 = <span>
            <button value={'2'} onClick={this.handelButtonChange}>2</button>
                <button value={'3'} onClick={this.handelButtonChange}>3</button>
                </span>
        }

        return(
            <span>
            {button4}
            </span>
    )
    }
}
class ShowButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isButtonClick:false,
            button1:'1',
            showFirstButton:true
        };
        this.handelButtonClick = this.handelButtonClick.bind(this);
        this.handelButtonChange = this.handelButtonChange.bind(this);
        this.handelShowFirstButtonClick = this.handelShowFirstButtonClick.bind(this)

    }
    handelButtonClick(){
        this.setState({isButtonClick: true})
    }
    handelButtonChange(button1){
        this.setState({
            button1:button1
        })
    }
    handelShowFirstButtonClick(){
        this.setState({showFirstButton:false});
        console.log('1')
    }

    render() {
        const showFirstButton = this.state.showFirstButton;
        let buttons;
        if (showFirstButton){
            buttons = <span>
            <button onClick={this.handelButtonClick}>{this.state.button1}</button>
                </span>
        }

        return(
            <div>
            {buttons}
            <Buttons isButtonClick={this.state.isButtonClick}
        onButtonChange={this.handelButtonChange}
        />
        <br/>
        <button onClick={this.handelShowFirstButtonClick}>Отправить</button>
            </div>
    )
    }
}

ReactDOM.render(
<ShowButton />,
    document.getElementById('root')
);



