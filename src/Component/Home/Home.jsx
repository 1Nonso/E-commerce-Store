import verticalLine from "../../assets/Images/v-Line.svg";
import designerPicture from "../../assets/Images/DesignerPicture.svg";
import versaceLogo from "../../assets/Images/versaceLogo.svg";
import zaraLogo from "../../assets/Images/zara-logo.svg";
import gucciLogo from "../../assets/Images/circle-logo.svg";
import pradaLogo from "../../assets/Images/prada-logo.svg";
import calvin_KleinLogo from "../../assets/Images/ck-logo.svg";

const HomePage = () => {
  console.log(designerPicture);
  return (
    <>
      <section className="home flex flex-col items-center ">
        <p className="text-1 text-[2.25rem] w-[19.7rem] mb-4 flex items-start  ">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </p>
        <p className="w-[22.75rem] text-[0.875rem] mb-5">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style
        </p>
        <button className="bg-black text-white h-[3.25rem] w-[22.375rem] rounded-[3.875rem] mb-5 ">
          Shop now
        </button>
        <div className="flex justify-between w-[17.375rem] mb-4 ">
          <div>
            <p className="text-2xl font-bold">200+</p>
            <p className="text-xs">International Brands</p>
          </div>
          <img src={verticalLine} alt="horizontal Slash" />
          <div>
            <p className="text-2xl font-bold">2,000+</p>
            <p className="text-xs">High-Quality Products</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">30,000+</p>
          <p className="text-xs">Happy Customers</p>
        </div>
        <div>
          <img src={designerPicture} alt="image of fashion designers" />
        </div>
        <LogoSection />
      </section>
    </>
  );
};

export default HomePage;

const LogoSection = () => {
  return (
    <>
      <section className="bg-black w-full py-8 px-5">
        <div className="flex justify-between mb-7 ">
          <img src={versaceLogo} alt="" />
          <img src={zaraLogo} alt="" />
          <img src={gucciLogo} alt="" />
        </div>
        <div className="flex justify-evenly">
          <img src={pradaLogo} alt="" />
          <img src={calvin_KleinLogo} alt="" />
        </div>
      </section>
    </>
  );
};
