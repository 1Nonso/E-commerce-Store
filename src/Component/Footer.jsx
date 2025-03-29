import twitterLogo from "../assets/Images/Twitter.svg";
import facebookLogo from "../assets/Images/facebook.svg";
import instagramLogo from "../assets/Images/Instagram.svg";
import githubLogo from "../assets/Images/logo-github.svg";
import visa from "../assets/Images/Visa.svg";
import verveMasterCard from "../assets/Images/Verve.svg";
import paypal from "../assets/Images/Paypal.svg";
import applePay from "../assets/Images/Apple-pay.svg";
import googlePay from "../assets/Images/Google-pay.svg";
import horizontalLine from "../assets/Images/h-Line.svg";

const Footer = () => {
  const socialMedia = [
    { logo: twitterLogo, id: 1 },
    { logo: facebookLogo, id: 2 },
    { logo: instagramLogo, id: 3 },
    { logo: githubLogo, id: 4 },
  ];

  const services = [
    { logo: visa, id: 1 },
    { logo: verveMasterCard, id: 2 },
    { logo: paypal, id: 3 },
    { logo: applePay, id: 4 },
    { logo: googlePay, id: 5 },
  ];

  return (
    <>
      <footer className="p-5">
        <section>
          <div>
            <p className="title text-3xl relative bottom-1 mb-5">SHOP.CO</p>
            <p className="w-[22.3rem] text-sm mb-5 ">
              We have clother that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex justify-between h-7 w-[10.5rem] mb-5">
              {socialMedia.map((logos) => {
                const { logo, id } = logos;
                return (
                  <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full shadow-lg">
                    <img key={id} className="w-4 h-4" src={logo} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex w-full justify-between mb-5">
            <div className="description">
              <p className="f-title">COMPANY</p>
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>
            <div className="relative right-10 description">
              <p className="f-title">HELP</p>
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="flex w-full justify-between mb-5">
            <div className="description">
              <p className="f-title">FAQ</p>
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payment</p>
            </div>
            <div className="relative right-5 description">
              <p className="f-title">RESOURCES</p>
              <p>Free eBook</p>
              <p>Develpoment Tutorial</p>
              <p>How to blog</p>
              <p>Youtube Playlist</p>
            </div>
          </div>
        </section>
        <img className="my-8" src={horizontalLine} alt="horizontal line" />
        <section className="flex flex-col items-center justify-center">
          <p className=" w-[16.813rem] h-[1.188rem] text-sm mb-3">
            Shop.co @ 2000-2023, All Right Reserved
          </p>
          <div className="flex justify-center w-[16.058rem] h-[1.609rem] ">
            {services.map((services) => {
              const { logo, id } = services;
              return <img className=" w-[2.498rem] " src={logo} alt="logo's" />;
            })}
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
