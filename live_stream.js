const API_KEY = import.meta.env.VITE_YT_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YT_CHANNEL_ID;

const container = document.getElementById("liveContainer");

async function checkYouTubeLive() {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=live&type=video&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("YouTube API response:", data); // ✅ For testing

    if (data.items && data.items.length > 0) {
      const videoId = data.items[0].id.videoId;
      container.href = `https://www.youtube.com/watch?v=${videoId}`;
      container.style.display = "inline-block";
    } else {
      container.style.display = "none";
    }
  } catch (err) {
    console.error("YouTube API error:", err);
  }
}

// Run immediately
checkYouTubeLive();

// Check every 5 minutes (300000 ms) to save quota
setInterval(checkYouTubeLive, 300000);
