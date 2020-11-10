import React,{Component} from 'react';
export const AppContext=React.createContext();
 class AppProvider extends Component{
  constructor(props){
    super(props);
    this.state={
      page:'dashboard',
      ...this.savedSettings(),
      setPage:this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }
   confirmFavorites=()=>{
     this.setState({
       firstVisit:false,
       page:'dashboard'
     }); 
     localStorage.setItem('cryptoMania',JSON.stringify({
       test:'hello'
     }));
   }
   savedSettings(){
     let cryptoManiaData=JSON.parse(localStorage.getItem('cryptoMania'));
     if(!cryptoManiaData){
       return {page:'settings',firstVisit:  true}
     }
     return{};
   }
  setPage=page=>this.setState({page})
  render(){
    return(
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
      )
    }
}
export default AppProvider;
