let settings;

const time = document.querySelector('#time')

$SD.on('connected', (jsn) => {
    console.log("connected");
    console.log(jsn);

    settings = Utils.getProp(jsn, 'actionInfo.payload.settings', false);
    time.value = settings.time ?? '00:00'

    time.addEventListener('change', (e) => {
        settings.time = e.target.value
        $SD.api.setSettings($SD.uuid, settings)
    })
});
