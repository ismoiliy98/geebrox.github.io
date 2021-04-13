let loadingPercentage = 0;

const onDocumentReady = (callback) =>
  document.readyState === "complete" || document.readyState === "interactive"
    ? setTimeout(callback, 1)
    : document.addEventListener("DOMContentLoaded", callback);

const loadAudio = (audioCtx) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "audio.mp3");
    request.responseType = "arraybuffer";
    request.onload = () => {
      let undecodedAudio = request.response;
      audioCtx.decodeAudioData(undecodedAudio, resolve);
    };
    request.onerror = reject;
    request.send();
  });

const loadFrames = () =>
  new Promise((resolve, reject) => {
    fetch("/ba")
      .then((res) => res.arrayBuffer())
      .then((data) => {
        const lzmaData = new Uint8Array(data);

        LZMA.decompress(
          lzmaData,
          (res, error) => {
            if (error) {
              reject(error);
            }

            resolve(JSON.parse(res));
          },
          (progress) => {
            loadingPercentage = progress * 100;
          }
        );
      })
      .catch(reject);
  });

const createDrawer = (framesList, audioCtx, duration, onFinish = () => !0) => {
  const framesCount = framesList.length;
  let currentTimer = -1;

  const draw = () => {
    const i = Math.round(framesCount * (audioCtx.currentTime / duration));

    if (i >= framesCount) {
      return onFinish();
    }

    if (!~currentTimer) {
      currentTimer = setTimeout(() => (currentTimer = -1), 100);
      console.clear();
      console.log("%c ", framesList[i]);
    }

    requestAnimationFrame(draw);
  };

  return { draw };
};

const start = async () => {
  try {
    const framesList = await loadFrames();

    const audioCtx = new AudioContext();
    const audioSource = audioCtx.createBufferSource();

    audioSource.buffer = await loadAudio(audioCtx);
    audioSource.connect(audioCtx.destination);
    const { duration } = audioSource.buffer;

    const onFinish = () => {
      audioSource.stop();
      console.clear();
      document.body.style.filter = "grayscale(0)";
    };

    document.body.style.filter = "grayscale(1)";
    createDrawer(framesList, audioCtx, duration, onFinish).draw();
    audioSource.start();
  } catch (error) {
    console.error(error);
    audioSource.stop();
  }
};

onDocumentReady(() => {
  const startButtonEl = document.getElementById("start-button");
  const userAlertEl = document.getElementById("user-alert");
  const laodingCircle = document.getElementById("loading-circle");
  const loadingPercentageEl = document.getElementById("loading-percentage");

  startButtonEl.onclick = () => {
    startButtonEl.style.display = "none";
    userAlertEl.style.display = "block";
    userAlertEl.innerHTML = "Loading, please, wait...";
    laodingCircle.style.display = "inline";

    const updateLoadingProgress = () => {
      loadingPercentageEl.innerHTML = `${loadingPercentage.toFixed(0)}%`;
      laodingCircle.style.strokeDasharray = `${loadingPercentage}, 100`;

      if (loadingPercentage >= 100) {
        userAlertEl.innerHTML =
          "Ready! You can open console and enjoy <b>Bad Apple!</b>";
        return;
      } else if (loadingPercentage >= 65) {
        userAlertEl.innerHTML = "Almost there...";
      }

      requestAnimationFrame(updateLoadingProgress);
    };

    updateLoadingProgress();
    start();
  };
});
