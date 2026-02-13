export const TwoColumnBlock = {
  id: 'two-column',
  label: '<b>⚖️ Split Layout</b>',
  category: 'Essentials',
  content: `
    <div class="split-container">
      <div class="split-column image-col">
        <img src="https://via.placeholder.com/600x400" alt="Feature" />
      </div>
      <div class="split-column text-col">
        <h2>Feature Highlight</h2>
        <p>This layout is perfect for explaining complex features or showing a user profile.</p>
      </div>
    </div>

    <style>
      .split-container { display: flex; flex-wrap: wrap; padding: 50px; background: white; align-items: center; gap: 40px; }
      .split-column { flex: 1; min-width: 300px; }
      .image-col img { width: 100%; border-radius: 12px; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }
      .text-col h2 { font-size: 36px; margin-bottom: 15px; color: #222; }
      .text-col p { font-size: 18px; line-height: 1.6; color: #555; }
    </style>
  `,
};