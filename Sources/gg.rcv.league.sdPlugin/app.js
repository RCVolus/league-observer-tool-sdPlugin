$SD.on('connected', (jsonObj) => connected(jsonObj));

function connected(jsn) {
    $SD.on('gg.rcv.league.ui.obs.keyUp', (jsonObj) => action.onKeyUp(jsonObj));
    $SD.on('gg.rcv.league.ui.cinematic.keyUp', (jsonObj) => action.onKeyUp(jsonObj));
    $SD.on('gg.rcv.league.replay.sync.keyUp', (jsonObj) => action.onKeyUp(jsonObj));
    $SD.on('gg.rcv.league.replay.time.keyUp', (jsonObj) => action.onKeyUp(jsonObj));
};

// ACTIONS

const action = {
  onKeyUp: async function (jsn) {
    try {
      jsn.action = jsn.action.replace('gg.rcv.league.', '')
      jsn.action = jsn.action.replace('.', '_')
      await fetch(`http://localhost:8572/${jsn.action}?${new URLSearchParams(jsn.payload.settings).toString()}`)
      $SD.api.showOk(jsn.context)
    } catch (error) {
      console.error(error)
      $SD.api.showAlert(jsn.context)
    }
  }
};
