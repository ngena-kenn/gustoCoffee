import React,{Component} from "react";
import '../css/page.css'

class Navigation extends Component{
    render(){
        <nav class="header">
            <div>
                <img src={logo} className="logo" alt="logo"/>

            </div>
            <div>
                <div>
                    <a href='./'>home</a>
                </div>
                <div>
                    <a href='./'>restaurant</a>
                </div>
                <div>
                    <a href='./'>a propos</a>
                </div>
                <div>
                    <a href='./'>actualité</a>
                </div>
                <div>
                    <a href='./'>franchise</a>
                </div>   
            </div>
            <div class="connect">
                <a href='./'>commander</a>
            </div>
        </nav>
    }
}