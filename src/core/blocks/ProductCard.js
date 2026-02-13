export const ProductCardBlock = {
  id: 'product-card',
  label: '<b>📦 Product Card</b>',
  category: 'Commercial',
  content: `
    <div class="product-card">
      <img src="https://via.placeholder.com/150" alt="Product" class="product-img"/>
      <h3 class="product-title">Nike Air Max</h3>
      <p class="product-desc">High quality running shoes.</p>
      <div class="product-price">$120.00</div>
      <button class="buy-btn" onclick="alert('Added to Cart!')">Add to Cart</button>
    </div>
    
    <style>
      .product-card {
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 15px;
        width: 250px;
        font-family: Arial, sans-serif;
        background: white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .product-img {
        width: 100%;
        height: auto;
        border-radius: 4px;
        margin-bottom: 10px;
      }
      .product-title {
        font-size: 18px;
        margin: 5px 0;
        color: #333;
      }
      .product-desc {
        font-size: 14px;
        color: #666;
        text-align: center;
      }
      .product-price {
        font-size: 16px;
        color: #27ae60;
        font-weight: bold;
        margin: 10px 0;
      }
      .buy-btn {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
      }
      .buy-btn:hover {
        background-color: #0056b3;
      }
    </style>
  `,
};