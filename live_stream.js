async function checkLiveStatus() {
  const channelId = "UCy3pUVDkt495v8gv5vB0jUw";

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  if (data.items && data.items.length > 0) {
    document.getElementById("live-indicator").style.display = "block";
  }
}

checkLiveStatus();
setInterval(checkLiveStatus, 60000); // check every 60 seconds
