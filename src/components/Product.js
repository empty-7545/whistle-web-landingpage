import React from 'react';
import '../assets/Product.css';
import Realtimeupdate from "../assets/images/realtimeupdates.webp"

const Product = () => {
  const products = [
    { id: 1, name: 'Unmatched Quality', price: 'We deliver only the best. Our ingredients are carefully sourced from verified farmers and suppliers to ensure consistent quality and safety. From farm-fresh produce to premium meats, Whistles brings the finest directly to your kitchen.', image: 'https://imgs.search.brave.com/BTeSeM9MN-AD28UXgsWKaEvDvJK2cmNjrXkroO8O3_M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ5/MzgzMjc4NS9waG90/by9xdWFsaXR5Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1N/aVhERGJrNnZEWDhr/VjNWSWh3ZVp6eWY0/a1gtUnY5eUYzazg2/OFo1SWRvPQ' },
    { id: 2, name: 'Transparency You Can Trust', price: 'Know where your ingredients come from. With Whistles, you get complete traceability for every product, empowering you to make informed decisions and build trust with your customers.', image: 'https://imgs.search.brave.com/psMsgX57q859A56ciDR7wvUOo8PQoLTyxZDpagU8Td8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjg1/Nzk3OTk2L3Bob3Rv/L21ldGFsLWNvbXBh/c3MtY29uY2VwdC13/aXRoLXJlZC1uZWVk/bGUuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVFBWHJmbkpk/SThWalJuN21SVjhH/TXJnMmRnWmpvYzll/YjI1MDA2RU40b0k9' },
    { id: 3, name: 'Simplified Procurement', price: 'No more juggling multiple suppliers. Our easy-to-use platform simplifies the ordering process, saving you time and effort so you can focus on delighting your diners.', image: 'https://imgs.search.brave.com/z2If25W3doJJQks95ZODhUf4645_Iq6haUNC9LazVGA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEwMjMz/ODEwLmpwZw' },
    { id: 4, name: 'Sustainability at Heart', price: 'We prioritize eco-friendly practices by partnering with local farmers and minimizing waste in the supply chain. Every order you place with us contributes to a more sustainable food ecosystem.', image: 'https://imgs.search.brave.com/Y8JqgilScAAlVK5Gb3kTM-P_WIhmFpgjg78b_qcxNIc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/OTIxNTk0L3Bob3Rv/L3NyaS1sYW5rYW4t/dGVhLXBpY2tlci5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/Qld2enNLNzVYMXpL/em81X0l5VElnZXd3/Yzk1ZkdEcDRCX2NQ/NnFpaExfND0' },
    { id: 5, name: 'Reliable Delivery', price: 'Count on us for timely deliveries, ensuring your kitchen never runs out of essentials. We work around the clock to keep your operations smooth and efficient.', image: 'https://imgs.search.brave.com/M9l-S8nJRol8WdA2vnRITXw2mGHQQXoDQMbaOQeeHv0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9qZXQtc2Nvb3Rl/ci1kZWxpdmVyeV8x/NzMzODctNDgzNy5q/cGc_c2VtdD1haXNf/aHlicmlk' },
    { id: 6, name: 'Real-Time Updates', price: 'We promise to keep you informed about your order status from placement to delivery.', image: 'https://imgs.search.brave.com/msXhxBuw9HJq1f-W-WYA2nKqqbfJ5q8_wrlxgDCFhe4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hZ2Vu/Y3kuc2l0ZWltYWdl/LmNvbS51YS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMi9p/dmlra19tb2Rlcm5f/aW50ZXJmYWNlX3dp/dGhfaW5kaWNhdG9y/c18wNzNkNmYwYy03/NWNmLTQ2ZTQtOWM2/Zi1mMjY2NWFjOGZi/MzhfXzFfLnBuZw' },
  ];

  return (
    <div className="product-section">
      <h1 className="product-heading"><span className='product-heading1'>O</span>ur <span className='product-heading1'>P</span>romises</h1>
      <div className="product-cards-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="buy-button">Know More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;