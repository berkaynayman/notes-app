import React from 'react';
import "./CircleBtn.css"
// https://codepen.io/AllThingsSmitty/pen/WjZVjo
// https://codepen.io/rauldronca/pen/EWLeMz
function CircleBtn({color, Id, setColor}) {
    const colorList=[
        {name:'pink', color:'hsl(340deg 83% 66%)'},
        {name:'purple', color:'hsl(291deg 47% 60%)'},
        {name:'yellow', color:'hsl(46deg 100% 65%)'},
        {name:'blue', color:'hsl(199deg 91% 64%)'},
        {name:'green', color:'hsl(88deg 50% 67%)'}
    ]
    // hsl(340deg 83% 66%) pink
    // hsl(291deg 47% 60%) purple
    // hsl(46deg 100% 65%) yellow
    // hsl(199deg 91% 64%) blue
    // hsl(88deg 50% 67%) green
    

    return(
        <div onClick={(e) => setColor(color)}>
            <input type='radio' name='color' id={`color-${Id}`} value={`color-${Id}`} />
            <label for={`color-${Id}`}>
                <span className={color}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
            </label>
        </div>
    )
    /*
    return(
        <div>
            <input type="radio" name="color" id={'color-' id} value={'color-' id} checked />
            <label for={'color-' id}>
                <span id={'color-' id '-spn'}>
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
            </label>
        </div>
    );   */
/*
  return (
    <div class="custom-radios">
        <div>
            <input type="radio" id="color-1" name="color" value="color-1" checked />
            <label for="color-1">
                <span id="color-1-spn">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
            </label>
        </div>
        <div>
            <input type="radio" id="color-2" name="color" value="color-2" checked />
            <label for="color-2">
                <span id="color-2-spn">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
            </label>
        </div>
        <div>
            <input type="radio" id="color-3" name="color" value="color-3" checked />
            <label for="color-3">
                <span id="color-3-spn">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
            </label>
        </div>
        <div>
            <input type="radio" id="color-4" name="color" value="color-4" checked />
            <label for="color-4">
                <span id="color-4-spn">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                </span>
            </label>
        </div>
  </div>
  );
  */
}

export default CircleBtn;
