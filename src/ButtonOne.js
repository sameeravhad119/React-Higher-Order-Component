//eslint-disable
import React,{Component} from 'react';
import style from './style/style'
import higherOrderComponent from './higherOrderComponent'


class ButtonOne extends Component{
	constructor(props){
     super(props);
      
	}

	render(){
		
		return(
             <button {...this.props}>
                Click me!!!
             </button>
		);
	}
}

export default higherOrderComponent(ButtonOne);