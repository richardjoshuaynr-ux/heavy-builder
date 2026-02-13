// 1. Basic Text Block
export const TextBlock = {
  id: 'text',
  label: '<b>📝 Text</b>',
  category: 'Universal',
  content: '<p style="padding: 10px;">Double-click to edit this text...</p>',
};

// 2. Basic Image Block
export const ImageBlock = {
  id: 'image',
  label: '<b>🖼️ Image</b>',
  category: 'Universal',
  content: { type: 'image' }, // GrapesJS built-in image handler
  attributes: { class: 'fa fa-image' } // Adds an icon
};

// 3. Basic Button Block
export const ButtonBlock = {
  id: 'button',
  label: '<b>🔘 Button</b>',
  category: 'Universal',
  content: '<button class="btn-primary">Click Me</button>',
};

// 4. Layout Box (Div) - The most important block for builders!
export const BoxBlock = {
  id: 'box',
  label: '<b>⬜ Container</b>',
  category: 'Universal',
  content: `
    <div style="padding: 20px; min-height: 100px; border: 1px dashed #777;">
      Drop other blocks here...
    </div>
  `,
};