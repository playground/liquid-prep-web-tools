let firmware_Select = document.getElementById('firmwareSelect');

function clck(){
    if(firmware_Select.value == '0'){
        let downloadInfo = document.getElementById('installationInfo');
        downloadInfo.innerHTML = ``;
    }
    else if(firmware_Select.value == '1'){
        let downloadInfo = document.getElementById('installationInfo');
        downloadInfo.innerHTML = ` <br>
        <i>Note:  Depending on the state your ESP32 is in, you may have to hold down the "BOOT button" to put it in upload mode</i>
    </p>
    <p>
        Once the installation is completed, you should see your ESP32-LiquidPrep listed via bluetooth.  You can also allow your ESP32 to join your local WiFi by first
        joining the "esp32ap".  After joining the "esp32ap", a portal should pop up.  If the portal doesn't pop open, you can go to it in your browser
        with this ip address "http://172.217.28.1/_ac/update".  
    </p>
    <p id ="downloadInfo">Before changing to your Wifi, let's first download the following files to update the configurations.
       <!--  <ul>
            <li>Download <a href="wifi-ble/config.json" download="config.json">config.json</a></li>
            <li>Download <a href="wifi-ble/page.json" download="page.json">page.json</a></li>
            <li>Go to http://172.217.28.1/_ac/update to upload both config.json and page.json files</li>
        </ul> -->
    </p>
    <p>
    <p>Now let's go to http://172.217.28.1/_ac/config to make changes to the WiFi
        <ul>
            <li>Select local WiFi network you would like this ESP32 to join with the proper credential. </li>
            <li>For example:
                <table>
                    <tr>
                        <td>IP Address</td><td>192.168.0.100</td>
                    </tr>
                    <tr>
                        <td>Gateway</td><td>192.168.0.1</td>
                    </tr>
                    <tr>
                        <td>Netmask</td><td>255.255.255.0</td>
                    </tr> 
                    <tr>
                        <td>DNS1</td><td>8.8.8.8</td>
                    </tr>
                </table>        
            </li>
        </ul>
    </p>
    <p>
        <i>(Recommended:  Uncheck "Enable DHCP" and assign it witha static ip)</i> then click "Apply" to save the new configuration.
    </p>
    <p>   
        After it is saved successfully, join back to your home WiFi.
        You can always go back to the Portal with the static ip address you have assigned to this ESP32.
    </p>
    <p>    
        For sensor calibration, go to http://yourip/update_config to adjust "Air value" and "Water value" as needed to calibrate the moisture sensor.  You would
        want to get close to 0% for dry condition.
        <br><i>Note:  DO NOT change the "Pin" value, leave it at 32</i>
    </p>

    <esp-web-install-button manifest="./firmwares/wifi-ble/manifest.json"></esp-web-install-button>

`
    load('https://unpkg.com/esp-web-tools@9.1.1/dist/web/install-button.js?module');
    
    }else if(firmware_Select.value == '2'){
        let downloadInfo = document.getElementById('installationInfo');
        downloadInfo.innerHTML = ``;
    }
}

 function load(file) {
    let src = document.createElement('script');
    src.setAttribute("type", "module");
    src.setAttribute("src", file);
    document.getElementsByTagName('head')[0].appendChild(src);
    console.log('loaded');
 }


 firmware_Select.addEventListener('change', clck);