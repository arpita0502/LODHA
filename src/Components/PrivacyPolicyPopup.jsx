import React from 'react';
import './PrivacyPolicyPopup.css';

const PrivacyPolicyPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="privacy-popup-overlay" onClick={onClose}>
      <div className="privacy-popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="privacy-popup-header">
          <h2>Privacy Policy</h2>
          <button className="privacy-close-button" onClick={onClose}>×</button>
        </div>
        <div className="privacy-popup-body">
          <div className="privacy-policy-content">
            <p><strong>Effective Date: March 24, 2025</strong></p>
            <p><em>At LodhaMASSIMO.com, we are dedicated to safeguarding your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you engage with our website and services. By accessing our site, you agree to the practices detailed herein.</em></p>
            
            <h3>1. Information We Collect</h3>
            <p>We gather the following types of data:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, phone number, email address, residential address, property preferences, and details submitted via forms or correspondence.</li>
              <li><strong>Usage Data:</strong> Details of your website interactions, including IP address, browser type, pages visited, and session duration.</li>
              <li><strong>Cookies:</strong> Used to enhance functionality and user experience, manageable through your browser settings.</li>
            </ul>
            
            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>Responding to property inquiries</li>
              <li>Providing tailored real estate suggestions</li>
              <li>Contacting you for follow-ups or updates</li>
              <li>Enhancing site performance and user experience</li>
              <li>Sending marketing communications (with consent)</li>
              <li>Meeting legal requirements</li>
            </ul>
            
            <h3>3. Sharing of Information</h3>
            <p>Your personal data is never sold or rented. It may be shared with:</p>
            <ul>
              <li>Trusted partners aiding service delivery (e.g., legal or loan services)</li>
              <li>Regulatory authorities as required by law</li>
              <li>Internal staff for operational purposes</li>
            </ul>
            
            <h3>4. Data Security</h3>
            <p>We employ robust measures to protect your data. However, no online transmission is entirely secure, and while we use industry-standard protections, absolute security cannot be guaranteed.</p>
            
            <h3>5. Your Rights</h3>
            <p>You may:</p>
            <ul>
              <li>Access, update, or delete your data</li>
              <li>Opt out of marketing communications</li>
              <li>Inquire about data usage</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p>Contact us at <strong>+91 9223003743</strong> to exercise these rights.</p>
            
            <h3>6. External Links</h3>
            <p>Our site may link to external websites, for which we are not responsible regarding privacy practices or content.</p>
            
            <h3>7. Changes to This Policy</h3>
            <p>Updates to this policy will be reflected here with a revised "Effective Date." Continued use of our site post-update implies acceptance.</p>
            
            <h3>8. Contact Us</h3>
<div className="privacy-policy-contact">
  <div className="privacy-policy-contact-row">
    <div className="privacy-contact-box phone">
      <p className="privacy-contact-title">Call Us</p>
      <p className="privacy-contact-info">+91 9223003743</p>
    </div>
    <div className="privacy-contact-box email">
      <p className="privacy-contact-title">Email Us</p>
      <p className="privacy-contact-info">Coming Soon</p>
    </div>
  </div>
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPopup;