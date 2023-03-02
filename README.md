# Liquid Prep Web Tools

## ESP32

- ![Alt text](image4.png?raw=true "Title")

- https://www.amazon.com/gp/product/B086MJGFVV/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&th=1

## To update Liquid Prep firmware on ESP32

- Download the new firmware binary from here https://playground.github.io/liquid-prep-web-tools/wifi-ble/firmware.bin

- Turn on ESP32 by pluging it to a computer via USB cable

- On your computer, change the WiFi to join “esp32ap”

- Once your computer has joined “esp32ap”, a portal should pop open. ![Alt text](image1.jpg?raw=true "Title")

- If the portal didn't pop open, you can access the portal by going to http://172.217.28.1/_ac/config

- Select "Configure New AP" from the menu options
- Your WiFi AP should be listed as one of the options
- Select the WiFi you would like join
- Provide the passphrase to join your WiFi, if you want to assign a static ip to the sensor, uncheck "Enable DHCP" then key in the proper values. ![Alt text](image2.jpg?raw=true "Title")

- Click "Apply" to save the settings. After it's saved successfully, join back to your home WiFi.
- You can now access the ESP32 UI by going to http://the-assigned-ip-of-this-esp32/_ac/update ![atl text](image3.png?raw=true "Title")
- Choose the file (firmware.bin) you have downloaded
- Click "Update" to upload the new firmware.bin. If upload is successful, it will reboot itself. Congratuation! You're done.

## To flash Liquid Prep firmware on ESP32

- Go to https://playground.github.io/liquid-prep-web-tools/
