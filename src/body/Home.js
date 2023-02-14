import React,{Component} from "react";
import '../css/page.css';

class Home_page extends Component{
    render(){
        return(
            <div class="menu">
                <div>
                    <div class="formules aligne-center"></div>
                    <div class="text" >Formules</div>
                </div>
                <div>
                    <div class="gamme_chaude aligne-center"></div>
                    <div class="text" >Gammes Chaudes</div>
                </div>
                <div>
                    <div class="poké_creation aligne-center"></div>
                    <div class="text">Poké Creation</div>
                </div>
                <div>
                    <div class="sides aligne-center"></div>
                    <div class="text">Sides</div>  
                </div>
                <div>
                    <div class="healthy_bowls aligne-center"></div>
                    <div class="text">Healthy Bowls</div> 
                </div>
                <div>
                    <div class="desserts aligne-center"></div>
                    <div class="text">Desserts</div>
                </div>
                <div>
                <div class="boissons_chaudes aligne-center"></div>
                    <div class="text">Boissons Chaudes</div>
                </div>
                <div>
                    <div class="bubble_tea aligne-center"></div>
                    <div class="text">Bubble Tea</div> 
                </div>
                <div>
                    <div class="boissons aligne-center"></div>
                    <div class="text">Boissons</div>  
                </div>
            </div>
        )
    }
}
export default Home_page;