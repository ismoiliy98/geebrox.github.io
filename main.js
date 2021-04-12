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

const getFrameStyle = (url, width, height) =>
  [
    "font-size: 1px;",
    `line-height: ${height % 2}px;`,
    `padding: ${height * 0.5}px ${width * 0.5}px;`,
    `background-size: ${width}px ${height}px;`,
    `background: url('${location.origin}${url}');`,
  ].join(" ");

const loadFrame = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image(480, 360);

    image.onload = () => resolve(getFrameStyle(url, image.width, image.height));
    image.onerror = reject;

    image.src = url;
  });

const loadFrames = async () => {
  const framesCount = 2191;
  const framesList = [];

  for (let i = 1; i <= framesCount; i++) {
    framesList.push(
      loadFrame(
        `/frames/ba%20${`${i}`.padStart(`${framesCount}`.length, 0)}.jpg`
      )
    );
  }

  return await Promise.all(framesList);
};

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
    loadingPercentage = 10;
    const framesList = await loadFrames();
    loadingPercentage = 80;

    const audioCtx = new AudioContext();
    const audioSource = audioCtx.createBufferSource();

    audioSource.buffer = await loadAudio(audioCtx);
    loadingPercentage = 100;
    audioSource.connect(audioCtx.destination);
    const { duration } = audioSource.buffer;

    const onFinish = () => audioSource.stop();

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

      if (loadingPercentage < 80) {
        loadingPercentage += 0.2;
      } else if (loadingPercentage < 100) {
        userAlertEl.innerHTML = "Almost there...";
        loadingPercentage += 0.1;
      } else {
        userAlertEl.innerHTML =
          "Ready! You can open console and enjoy <b>Bad Apple!</b>";
        return;
      }

      requestAnimationFrame(updateLoadingProgress);
    };

    updateLoadingProgress();
    start();
  };
});
