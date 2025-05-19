import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12 mt-14">
      <div className=" mx-auto grid grid-cols-4 gap-8 w-full max-w-[90%] pl-20">
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>How to Order</li>
            <li>Shipping & Returns</li>
            <li>Track My Order</li>
            <li>My Account</li>
            <li>Shop Locator</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Do You Need Help? Section */}
        <div>
          <h3 className="font-semibold mb-4">Do You Need Help?</h3>
          <ul className="space-y-2">
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Sign Up Section */}
        <div className=" rounded-lg p-6 space-y-4 overflow-hidden container-page">
          <img
            src="/public/realmadrid.png"
            alt=""
            className="m-auto w-[50%] bg-white py-2 px-2 rounded"
          />
          <h3 className=" text-xl font-semibold text-center">
            Become a Madridista
          </h3>
        </div>
      </div>

      <div className="container-page mx-auto flex justify-between items-center mt-10 border-t border-blue-700 pt-6">
        <div className="space-y-2">
          <h4>Download the app now</h4>
          <div className="flex space-x-4">
            <img
              src="https://images.ctfassets.net/7nqb12anqb19/2WIAQowqokoIaJB6cvZXYD/348b37f3de99b90130122a9734032617/visa.svg"
              alt="App Store"
              className="w-10"
            />
            <img
              src="https://images.ctfassets.net/7nqb12anqb19/4XnCHtLvce9mL5lawnxLqU/2a27776093c876f2f043fdfcfb5218a8/dinersClub.svg"
              alt="Google Play"
              className="w-10"
            />
            <img
              src="https://images.ctfassets.net/7nqb12anqb19/12eMt1ehopmWkECRNusO4H/7585dbbad063aabb6e23ab0a49bd9c2c/googlePay.svg"
              alt="AppGallery"
              className="w-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <h4>Payments Accepted</h4>
          <div className="flex space-x-2">
            <img
              src="https://images.ctfassets.net/7nqb12anqb19/3hrUQrZakyvgkpBCjaDtHb/575c0fa2c5bd487fcf5da84fb23bc304/X.svg"
              alt="Amex"
              className="w-7"
            />
            <img
              src="https://images.ctfassets.net/7nqb12anqb19/253ZSfz1pcPZGXOCoGMX6F/3e1e6d35c6eb63a2ea885d602a40c0a9/_Facebook.svg"
              alt="Apple Pay"
              className="w-7"
            />
            <img
              src="https://images.ctfassets.net/7nqb12anqb19/1BhUrB4kHVSJaYnlJCaFUV/a5cd6e94db0eb8a11cd404be734f1747/_Instagram.svg"
              alt="Discover"
              className="w-7"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
