export const HeroBlock = {
  id: 'hero-section',
  label: '<b>📢 Hero Banner</b>',
  category: 'Essentials',
  content: `
    <section class="hero">
      <div class="hero-content">
        <h1>Welcome to My Platform</h1>
        <p>Build anything from social networks to dashboards.</p>
        <button class="hero-btn">Get Started</button>
      </div>
    </section>
    
    <style>
      .hero {
        height: 500px;
        background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;
        font-family: 'Segoe UI', sans-serif;
      }
      .hero h1 { font-size: 48px; margin-bottom: 20px; }
      .hero p { font-size: 20px; margin-bottom: 30px; opacity: 0.9; }
      .hero-btn { padding: 15px 40px; background-color: white; color: #333; border: none; font-size: 18px; border-radius: 30px; cursor: pointer; }
      .hero-btn:hover { transform: scale(1.05); background-color: #f8f9fa; }
    </style>
  `,
};