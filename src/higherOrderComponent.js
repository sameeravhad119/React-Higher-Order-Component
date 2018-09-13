import React,{Component} from 'react';
import style from './style/style'

const higherOrderComponent=(WrappedComponent)=>{
	class HOC extends Component{
		render(){
			var styles={...style.default};//obj
			if(this.props.disable){
				styles={...styles,...style.disable};
			}


			return(
                  <WrappedComponent {...this.props} style={styles}/>
				);
		}
	}
	return HOC;
}

export default higherOrderComponent;