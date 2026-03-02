async function checkYouTubeLive() {
  const apiKey = import.meta.env.VITE_YT_API_KEY;
  const channelId = "YOUR_CHANNEL_ID";

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const container = document.getElementById("liveContainer");

    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
      container.href = `https://www.youtube.com/watch?v=${videoId}`;
      container.style.display = "inline-block";
    } else {
      container.style.display = "none";
    }
  } catch (error) {
    console.error("Live check failed:", error);
  }
}

checkYouTubeLive();
//setInterval(checkYouTubeLive, 60000); // Check every 60s
