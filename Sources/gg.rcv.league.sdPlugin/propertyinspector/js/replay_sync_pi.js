let settings;

const seconds = document.querySelector('#seconds')

$SD.on('connected', (jsn) => {
    console.log("connected");
    console.log(jsn);

    settings = Utils.getProp(jsn, 'actionInfo.payload.settings', false);
    seconds.value = settings.seconds ?? 0

    seconds.addEventListener('change', (e) => {
        settings.seconds = parseInt(e.target.value)
        $SD.api.setSettings($SD.uuid, settings)
    })
});
