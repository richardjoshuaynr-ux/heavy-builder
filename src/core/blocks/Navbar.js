export const NavbarBlock = {
  id: 'navbar',
  label: '<b>🧭 Navigation Bar</b>',
  category: 'Essentials',
  content: `
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="nav-logo">ShopMaster</a>
        <div class="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#" class="cart-btn">🛒 Cart (0)</a>
        </div>
      </div>
    </nav>
    <style>
      .navbar { background-color: #131921; color: white; padding: 15px 0; font-family: sans-serif; }
      .nav-container { display: flex; justify-content: space-between; align-items: center; padding: 0 20px; }
      .nav-logo { font-size: 24px; font-weight: bold; color: white; text-decoration: none; }
      .nav-links a { color: #ccc; text-decoration: none; margin-left: 20px; }
      .cart-btn { background-color: #f0c14b; color: black !important; padding: 5px 10px; border-radius: 4px; }
    </style>
  `,
};