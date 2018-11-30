let promises = [];

const manifest = chrome.runtime.getManifest();
const devMode = manifest.name.indexOf("[Dev]") > -1;
const UM_MINUTO = 0;
var x = 0;
var isInterrupted = false;
document.getElementById("rodape").innerHTML =
  (devMode ? "[Dev] " : "") + "v" + manifest.version;

checkNextAlarm();

promises.push(
  chrome.storage.sync.get("fiveMinutesPermission", response => {
    document.getElementById(
      "fiveMinutesPermission"
    ).checked = !!response.fiveMinutesPermission;
  })
);

promises.push(
  chrome.storage.sync.get("audioPermission", response => {
    document.getElementById(
      "audioPermission"
    ).checked = !!response.audioPermission;
  })
);

promises.push(
  chrome.storage.sync.get("newHour", response => {
    if (response.newHour) {
      let newHourDate = new Date(response.newHour);
      let newHourString =
        (newHourDate.getHours() < 10 ? "0" : "") +
        newHourDate.getHours() +
        ":" +
        (newHourDate.getMinutes() < 10 ? "0" : "") +
        newHourDate.getMinutes();
      document.getElementById("overwriteHour").checked = true;
      document.getElementById("hourOverwited").disabled = false;
      document.getElementById("hourOverwited").value = newHourString;
    } else {
      document.getElementById("overwriteHour").checked = false;
      document.getElementById("hourOverwited").disabled = true;
    }
  })
);

Promise.all(promises).then(resp => {
  document.getElementById("body").style = "display: block";
});

/* FUNÇÃO PARA SALVAR O AVISO DE 5 MINUTOS */
document
  .getElementById("fiveMinutesPermission")
  .addEventListener("change", saveFiveMinutes);

function saveFiveMinutes(e) {
  chrome.storage.sync.set({ fiveMinutesPermission: e.target.checked }, () => {
    console.log(
      "Five Minutes " + (e.target.checked ? "Ativado" : "Desativado")
    );
  });
}

/* FUNÇÃO PARA SALVAR A PERMISSÃO DE ÁUDIO */
document
  .getElementById("audioPermission")
  .addEventListener("change", saveAudioPermission);

function saveAudioPermission(e) {
  chrome.storage.sync.set({ audioPermission: e.target.checked }, () => {
    console.log("Áudio " + (e.target.checked ? "Ativado" : "Desativado"));
  });
}

/* FUNÇÃO PARA SALVAR QUE O USUÁRIO DESEJA SOBRESCREVER A HORA AUTOMÁTICA */
document
  .getElementById("overwriteHour")
  .addEventListener("change", toggleOverwriteHour);
// document.getElementById('hourOverwited').addEventListener('change', overwriteHour);
document.getElementById("btnLimpar").addEventListener("click", reset);
document.getElementById("btnIniciar").addEventListener("click", start);

function toggleOverwriteHour(e) {
  if (e.target.checked) {
    document.getElementById("hourOverwited").disabled = false;
  } else {
    document.getElementById("hourOverwited").disabled = true;
    document.getElementById("hourOverwited").value = null;
    removeNewHour();
  }
}

function overwriteHour(e) {
  console.log("oçijçoij");
  if (document.getElementById("hourOverwited").value) {
    let newHour = new Date().setHours(
      document.getElementById("hourOverwited").value.split(":")[0]
    );
    newHour = new Date(newHour).setMinutes(
      document.getElementById("hourOverwited").value.split(":")[1]
    );
    newHour = new Date(newHour).setSeconds(0);
    newHour = new Date(newHour).setMilliseconds(0);
    newHour = new Date(newHour).getTime();
    chrome.storage.sync.set({ newHour: newHour }, () => {
      console.log(
        "Notificação da hora de saída sobrescrita para " +
          document.getElementById("hourOverwited").value
      );
    });

    var x = setInterval(function() {
      let now = new Date().getTime();

      let distance = newHour - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countDownTimer").innerHTML = hours + ':' + minutes + ':' + seconds;
      document.getElementById("countDownTimer").value = hours + ':' + minutes + ':' + seconds;
      if (distance < 0 || isInterrupted) {
        clearInterval(x);
        document.getElementById("countDownTimer").innerHTML = '-';
        document.getElementById("countDownTimer").value = '-';

      }
    }, 1000);
  } else {
    removeNewHour();
  }
}

function removeNewHour() {
  chrome.storage.sync.remove("newHour", () => {
    console.log("Notificação da hora de saída voltou para o padrão");
  });
}

function checkNextAlarm() {
  let nextAlarm = null;
  let nextNotificationString = "-";

  chrome.alarms.getAll(alarms => {
    alarms.forEach(alarm => {
      if (alarm.name !== "alarmReset") {
        if (!nextAlarm || nextAlarm.scheduledTime > alarm.scheduledTime) {
          nextAlarm = alarm;
        }
      }
    });
    if (!!nextAlarm) {
      let nextAlarmDate = new Date(nextAlarm.scheduledTime + UM_MINUTO);
      nextNotificationString =
        (nextAlarmDate.getHours() < 10 ? "0" : "") +
        nextAlarmDate.getHours() +
        ":" +
        (nextAlarmDate.getMinutes() < 10 ? "0" : "") +
        nextAlarmDate.getMinutes();
    }
    document.getElementById(
      "nextNotification"
    ).innerHTML = nextNotificationString;

    chrome.storage.sync.remove("checkAlarms");
  });
}

function start(e) {
  isInterrupted = false;
  overwriteHour(e);
}

function reset(e) {

  document.getElementById("nextNotification").innerHTML = "-";
  document.getElementById("countDownTimer").innerHTML = "-";
  document.getElementById("hourOverwited").disabled = true;
  document.getElementById("overwriteHour").checked = false;
  document.getElementById("fiveMinutesPermission").checked = false;
  document.getElementById("audioPermission").checked = false;

  document.getElementById("hourOverwited").value = null;
  document.getElementById("countDownTimer").value = '-';

  isInterrupted = true;
}

chrome.storage.onChanged.addListener(function(changes) {
  for (let key in changes) {
    let storageChange = changes[key];
    switch (key) {
      case "checkAlarms":
        if (!!storageChange.newValue) {
          checkNextAlarm();
        }
        break;
    }
  }
});
