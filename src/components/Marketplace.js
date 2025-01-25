// import React from 'react';
// import './Marketplace.css'

// const Marketplace = () => {
//   // Data for each section
//   const sections = [
//     {
//       id: 1,
//       title: 'Marketplace Platform',
//       description:
//         "Our marketplace platform connects thousands of mom & pop grocery retailers - " +
//         "<span class='highlight'>Whsitle's</span> and supermarkets, " +
//         "with brands and staples producers.",
//       phoneImage: 'https://imgs.search.brave.com/Jet4IiZ1uHy4N431BCfvkBrG5Iqxwc1b4EgLFf7N3_E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYW5p/bWUtbG9jay1zY3Jl/ZW4taXp1a3UtbWlk/b3JpeWEtZnJ0bGY5/OTZ0OHQ1dTI4cS5q/cGc'
//     },
//     {
//       id: 2,
//       title: 'Sell Your Products',
//       description: 
//         "List your products on our platform to reach thousands of buyers in your region and beyond.",
//         phoneImage: 'https://imgs.search.brave.com/Jet4IiZ1uHy4N431BCfvkBrG5Iqxwc1b4EgLFf7N3_E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYW5p/bWUtbG9jay1zY3Jl/ZW4taXp1a3UtbWlk/b3JpeWEtZnJ0bGY5/OTZ0OHQ1dTI4cS5q/cGc'
//     },
//     {
//       id: 3,
//       title: 'Buy in Bulk',
//       description:
//         "Our platform offers great deals for bulk buyers, with a wide selection of products at competitive prices.",
//       phoneImage: 'https://via.placeholder.com/150'
//     },
//     {
//       id: 4,
//       title: 'Fast Delivery',
//       description:
//         "Enjoy fast delivery and a seamless shopping experience from your favorite local stores.",
//         phoneImage: 'https://imgs.search.brave.com/Jet4IiZ1uHy4N431BCfvkBrG5Iqxwc1b4EgLFf7N3_E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYW5p/bWUtbG9jay1zY3Jl/ZW4taXp1a3UtbWlk/b3JpeWEtZnJ0bGY5/OTZ0OHQ1dTI4cS5q/cGc'
//     },
//     {
//       id: 5,
//       title: 'Secure Payment',
//       description:
//         "Your payments are safe with our secure payment system, ensuring peace of mind when shopping.",
//         phoneImage: 'https://imgs.search.brave.com/Jet4IiZ1uHy4N431BCfvkBrG5Iqxwc1b4EgLFf7N3_E/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYW5p/bWUtbG9jay1zY3Jl/ZW4taXp1a3UtbWlk/b3JpeWEtZnJ0bGY5/OTZ0OHQ1dTI4cS5q/cGc'
//     }
//   ];

//   return (
//     <div className="marketplace">
//       <div className="marketplace-container">
//         {sections.map((section) => (
//           <div key={section.id} className="marketplace-section">
//             {/* Left side - Mobile Image */}
//             <div className="phone-container">
//               <div className="phone-frame">
//                 <div className="phone">
//                   <div className="phone-top-bar" />
//                   <img 
//                     src={section.phoneImage} 
//                     alt={section.title}
//                     className="phone-image" 
//                   />
//                 </div>
//                 <div className="decorative-dots">
//                   <div className="dot dot-top-left" />
//                   <div className="dot dot-middle-right" />
//                   <div className="dot dot-bottom-center" />
//                 </div>
//                 <div className="decorative-icons">
//                   <div className="icon icon-cloud">
//                     <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
//                     </svg>
//                   </div>
//                   <div className="icon icon-bag">
//                     <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right side - Content */}
//             <div className="content-container">
//               <h1 className="title">{section.title}</h1>
//               <p className="description" dangerouslySetInnerHTML={{ __html: section.description }} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Marketplace;

import React from 'react';
import '../assets/Marketplace.css'

const Marketplace = () => {
  return (
    <>
    <div className="marketplace">
      <div className="marketplace-container">
        {/* Left side - Mobile Image */}
        <div className="phone-container">
          <div className="phone-frame">
            {/* Phone frame */}
            <div className="phone">
              <div className="phone-top-bar" />
              <img 
                src="https://imgs.search.brave.com/-btZxTsnPrJYKxDWLZAJr16fAjTMtdbhOhrIuajVFbw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8w/OS8yMS8xNC8yNC9z/dXBlcm1hcmtldC05/NDk5MTNfNjQwLmpw/Zw"
                alt="Marketplace mobile app"
                className="phone-image"
              />
            </div>
            
            {/* Decorative dots */}
            <div className="decorative-dots">
              <div className="dot dot-top-left" />
              <div className="dot dot-middle-right" />
              <div className="dot dot-bottom-center" />
            </div>
            
            {/* Decorative icons */}
            <div className="decorative-icons">
              <div className="icon icon-cloud">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="icon icon-bag">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="content-container">
          <h1 className="title">Marketplace Platform</h1>
          <p className="description">
            Our marketplace platform connects thousands of mom & pop grocery retailers - 
            <span className="highlight">Whsitle's</span> and supermarkets, 
            with brands and staples producers.
          </p>
        </div>
      </div>
    </div>
    <div className="marketplace">
      <div className="marketplace-container">
        {/* Left side - Mobile Image */}


        {/* Right side - Content */}
        <div className="content-container">
          <h1 className="title">Quality Sourcing</h1>
          <p className="description">
          We ensure our customers get high-quality products by providing sourcing services and quality
            <span className="highlight"> Whsitle's</span> control services to our marketplace sellers
          </p>
        </div>

        <div className="phone-container">
          <div className="phone-frame">
            {/* Phone frame */}
            <div className="phone">
              <div className="phone-top-bar" />
              <img 
                src="https://imgs.search.brave.com/zn5K2kN8moiRdeud9tNZCqi5UjRd_YWrDQ6F5A_lexI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9oZWFy/dC1zaGFwZS12YXJp/b3VzLXZlZ2V0YWJs/ZXMtZnJ1aXRzLWhl/YWx0aHktZm9vZC1j/b25jZXB0LWlzb2xh/dGVkLXdoaXRlLWJh/Y2tncm91bmQtMTQw/Mjg3ODA4LmpwZw"
                alt="Marketplace mobile app"
                className="phone-image"
              />
            </div>
            
            {/* Decorative dots */}
            <div className="decorative-dots">
              <div className="dot dot-top-left" />
              <div className="dot dot-middle-right" />
              <div className="dot dot-bottom-center" />
            </div>
            
            {/* Decorative icons */}
            <div className="decorative-icons">
              <div className="icon icon-cloud">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="icon icon-bag">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="marketplace">
      <div className="marketplace-container">
        {/* Left side - Mobile Image */}
        <div className="phone-container">
          <div className="phone-frame">
            {/* Phone frame */}
            <div className="phone">
              <div className="phone-top-bar" />
              <img 
                src="https://imgs.search.brave.com/Ztkpl5HsUhIH1Giu85JropashopE1Hyc0uK9LyqKEC4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/NS8yNS8wMi8zNS9n/cm9jZXJpZXMtNTIx/NjcxNV82NDAuanBn"
                alt="Marketplace mobile app"
                className="phone-image"
              />
            </div>
            
            {/* Decorative dots */}
            <div className="decorative-dots">
              <div className="dot dot-top-left" />
              <div className="dot dot-middle-right" />
              <div className="dot dot-bottom-center" />
            </div>
            
            {/* Decorative icons */}
            <div className="decorative-icons">
              <div className="icon icon-cloud">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="icon icon-bag">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="content-container">
          <h1 className="title">Wide Selection</h1>
          <p className="description">
          We offer a wide selection of high-quality staples, packaged foods, personal care,
            <span className="highlight">Whsitle's</span>  and home care products from all the leading brands, and staples producers.
          </p>
        </div>
      </div>
    </div>
    <div className="marketplace">
      <div className="marketplace-container">
        {/* Left side - Mobile Image */}
        

        {/* Right side - Content */}
        <div className="content-container">
          <h1 className="title">Supply Chain and Logistics
          </h1>
          <p className="description">
          We own and operate our full stack tech-driven supply chain and logistics to provide warehousing
            <span className="highlight"> Whsitle's</span> and fulfilment solutions to our sellers and storefront delivery to our customers
          </p>
        </div>

        <div className="phone-container">
          <div className="phone-frame">
            {/* Phone frame */}
            <div className="phone">
              <div className="phone-top-bar" />
              <img 
                src="https://imgs.search.brave.com/UhcrtiTSrYR43-7bq_1HQPA5r2CQp4cEmcP7rco0IAQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDkz/NDQ1MTU1L3Bob3Rv/L21vdmluZy1kYXku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXFWdDBvQTRvMkVj/aFRVVjNOZGp3aExs/aGpvZVZsQ2FsR1RO/T2YxaVFmYlk9"
                alt="Marketplace mobile app"
                className="phone-image"
              />
            </div>
            
            {/* Decorative dots */}
            <div className="decorative-dots">
              <div className="dot dot-top-left" />
              <div className="dot dot-middle-right" />
              <div className="dot dot-bottom-center" />
            </div>
            
            {/* Decorative icons */}
            <div className="decorative-icons">
              <div className="icon icon-cloud">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <div className="icon icon-bag">
                <svg className="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};


export default Marketplace;