import React,{Component} from "react";
import '../css/page.css';
import logo from '../image/Logo.png';


class Navigation extends Component{
    render(){
        return(
        <nav class="header">
            <div class ="logo">
                <img src={logo} className="logo" alt="logo"/>

            </div>
            <div class="another">
                <div>
                    <a href='./Home'>home</a>
                </div>
                <div>
                    <a href='./Restaurant'>restaurant</a>
                </div>
                <div>
                    <a href='./A_propos'>a propos</a>
                </div>
                <div>
                    <a href='./Actualite'>actualité</a>
                </div>
                <div>
                    <a href='./Franchise'>franchise</a>
                </div>   
            </div>
            <div class="connect">
                <a href='./Commander'>commander</a>
            </div>
        </nav>
        );
    }
    
}
export default Navigation;