import React from 'react';
import "./CircleBtn.css"
// https://codepen.io/AllThingsSmitty/pen/WjZVjo
// https://codepen.io/rauldronca/pen/EWLeMz
function CircleBtn() {
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
}

export default CircleBtn;
