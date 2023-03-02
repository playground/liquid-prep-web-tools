let firmware_Select = document.getElementById('firmwareSelect');
let downloadInfo = document.getElementById('installationInfo');

function clck(){
    let selectedOption = firmware_Select.value;
    fetch('index.json')
      .then(response => response.json())
      .then(data => {
        downloadInfo.innerHTML = data[selectedOption];
        load('https://unpkg.com/esp-web-tools@9.1.1/dist/web/install-button.js?module');
      });
}

function load(file) {
    let src = document.createElement('script');
    src.setAttribute("type", "module");
    src.setAttribute("src", file);
    document.getElementsByTagName('head')[0].appendChild(src);
}

firmware_Select.addEventListener('change', clck);
