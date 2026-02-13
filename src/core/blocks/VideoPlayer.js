export const VideoPlayerBlock = {
  id: 'video-player',
  label: '<b>▶️ Live Stream</b>',
  category: 'Streamer',
  content: `
    <div class="video-container">
      <div class="video-wrapper">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/jfKfPfyJRdk" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
    <style>
      .video-container { background: #000; padding: 20px; text-align: center; }
      .video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 800px; margin: 0 auto; }
      .video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
    </style>
  `,
};