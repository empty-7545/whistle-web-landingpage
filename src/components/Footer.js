import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/Footer.css';
import '../assets/Product.css';
// import { Link } from "react-router-dom";
import playStoreIcon from './playstore-icon.png'; 
const Footer = () => {
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const openTermsModal = () => setIsTermsModalOpen(true);
  const closeTermsModal = () => setIsTermsModalOpen(false);

  const openPrivacyModal = () => setIsPrivacyModalOpen(true);
  const closePrivacyModal = () => setIsPrivacyModalOpen(false); 

  const handleAccept = () => {
    window.location.href = "/"; // Redirects to the home page
  };

  const handleDecline = () => {
    window.location.href = "/"; // Redirects to the home page
  };
  

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are your one-stop shop for the best deals and quality products.
            Your satisfaction is our priority.
          </p>
          <div className="play-store">
            <img src={playStoreIcon} alt="Play Store" className="play-store-icon" />
            <p>Get Our Apps</p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#" onClick={openTermsModal}>Our Term's</a></li>
            <li><a href="#" onClick={openPrivacyModal}>Our Privacy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: support@whistle.com</li>
            <li>Phone: +91 0000000000</li>
            <li>Address: Dindigul</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">&copy; 2025 Whistle's. All Rights Reserved.</p>
      </div>

      {/* Terms Modal */}
      <Modal isOpen={isTermsModalOpen} onRequestClose={closeTermsModal}>
        <h2>Terms and Conditions</h2>
        <p>Welcome to Whistle we ,These Terms and Conditions govern your use of our e-commerce platform, mobile applications, and services collectively, the Platform for purchasing and selling fresh vegetables and related products for both retail and HoReCa businesses.

2. Definitions

- "User," "you," refers to any individual or entity accessing or using the Platform
- "HoReCa" refers to Hotels, Restaurants, and Cafés
- "Products" refers to vegetables, fruits, and related fresh produce available on our Platform
- "Seller" refers to vendors, farmers, and suppliers who list their products on our Platform

3. Account Registration

3.1 User Categories
- Retail customers
- HoReCa businesses
- Sellers and suppliers

3.2 Registration Requirements
- Business users must provide valid business registration documents
- HoReCa users must submit necessary food service licenses
- All users must be at least 18 years old
- Valid email address and phone number required

4. Ordering and Delivery

4.1 Order Placement
- Orders must meet minimum quantity requirements
- Different pricing tiers available for retail and HoReCa customers
- All prices are subject to change and seasonal variations

4.2 Delivery Terms
- Delivery schedules vary by location and user category
- Priority delivery available for HoReCa customers
- Specific delivery windows must be honored by recipients

5. Quality Standards

5.1 Product Quality
- All products meet local food safety regulations
- Grade specifications available for HoReCa purchases
- Quality guarantee for 24 hours post-delivery

5.2 Returns and Refunds
- Returns accepted within 6 hours of delivery for quality issues
- Photographic evidence required for quality complaints
- Refund processing within 5-7 business days

6. Seller Obligations

- Maintain required licenses and certifications
- Adhere to quality grading standards
- Prompt updates on stock availability
- Comply with packaging requirements

7. Payment Terms

7.1 Payment Methods
- Credit/debit cards
- Bank transfers
- Digital wallets
- Invoice payment for verified HoReCa customers

7.2 Credit Terms
- Available for qualified HoReCa customers
- Subject to credit assessment
- Net 15/30 payment terms where applicable

8. Platform Usage

- No unauthorized commercial use
- No scraping or data harvesting
- Maintain accurate account information
- Report technical issues promptly

9. Termination

We reserve the right to terminate or suspend accounts for:
- Violation of terms
- Fraudulent activity
- Non-payment
- Expired business licenses

10. Liability Limitations

- Maximum liability limited to order value
- No consequential damages
- Force majeure provisions apply</p>
        <div className="terms-button">
          <button onClick={handleAccept} className="buy-button">Accept</button>
          <button onClick={handleDecline} className="buy-button">Decline</button>
        </div>
      </Modal>

      {/* Privacy Modal */}
      <Modal isOpen={isPrivacyModalOpen} onRequestClose={closePrivacyModal}>
        <h2>Privacy Policy</h2>
        <p>1. Information We Collect

1.1 Personal Information
- Name and contact details
- Business registration information
- Delivery addresses
- Payment information
- Purchase history

1.2 Technical Data
- Device information
- IP address
- Browser type
- Usage patterns
- Location data

2. Use of Information

 2.1 Primary Uses
- Order processing and fulfillment
- Account management
- Quality control
- Customer support
- Business analytics

 2.2 Secondary Uses
- Service improvement
- Marketing communications
- Product recommendations
- Market research

3. Data Storage and Security

 3.1 Storage
- Secure servers within [Relevant Territory]
- Industry-standard encryption
- Regular security audits
- Backup systems

 3.2 Retention
- Active accounts: Duration of account plus 2 years
- Inactive accounts: 2 years from last activity
- Financial records: As required by law

4. Data Sharing

 4.1 Internal Sharing
- Between departments for operational purposes
- With delivery partners
- For quality control

 4.2 External Sharing
- With payment processors
- Government authorities when required
- Third-party service providers

 5. User Rights

- Access personal data
- Request corrections
- Data portability
- Deletion requests
- Marketing preferences

 6. Cookie Policy

 6.1 Essential Cookies
- Session management
- Security
- Basic functionality

 6.2 Optional Cookies
- Analytics
- Personalization
- Marketing

 7. Children's Privacy

- Service not intended for users under 18
- No knowing collection of minor's data
- Immediate deletion if discovered

8. Changes to Privacy Policy

- Notice of material changes
- Email notification for registered users
- 30-day notice period
- Continued use implies acceptance

9. Contact Information

For privacy-related inquiries:
- Email: privacy@freshconnect.com
- Phone: [Your Phone Number]
- Address: [Your Business Address]

 10. Data Protection Officer

Contact our DPO for:
- Privacy concerns
- Data access requests
- Compliance questions</p>
        <div className="terms-button">
          <button onClick={handleAccept} className="buy-button">Accept</button>
          <button onClick={handleDecline} className="buy-button">Decline</button>
        </div>
      </Modal>
    </footer>
  );
};

export default Footer;
