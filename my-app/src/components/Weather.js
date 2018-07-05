import React from "react";
import './Weather.css';

const Weather = (props) =>{
      return(
       <div className="Weather">
            <div className = "Location">
                  {props.country && <span>{props.country}</span>}
                  {props.city && <span>{props.city}</span>}
            </div>
      <div className = "Description">
            {props.description && <p>{props.description}</p>}
      </div>
      <div className="Temp">
            {props.temperature && <p><span><i class="fa fa-thermometer"></i></span>{props.temperature}</p>} 
      </div>  
      <div className = "Info">
            {props.humidity && <p><span><i class="fa fa-tint"></i></span>{props.humidity}</p>}  
            {props.wind && <p>{props.wind}</p>}
            {props.pressure && <p>{props.pressure}</p>}
       </div>
   </div>
 )
}


export default Weather;