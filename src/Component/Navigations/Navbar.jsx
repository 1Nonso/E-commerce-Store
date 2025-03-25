import MenuBar from "../../assets/Images/Vector.jpg";
import searchIcon from "../../assets/Images/Search.jpg";
import cart from "../../assets/Images/Shopping_cart.jpg";
import profile from "../../assets/Images/profile.jpg";

const NavBar = () => {
  return (
    <>
      <section className="">
        <Promo />
        <div className="flex items-center justify-between py-4 px-5 ">
          <div className="flex w-[50%] items-center justify-start ">
            <img
              className="w-6 h-6 mr-4"
              src={MenuBar}
              alt="Image of menu bar"
            />
            <p className="title font-extrabold text-3xl">SHOP.CO</p>
          </div>
          <div className="flex flex-row justify-evenly w-24 h-6 ">
            <img className="h-6 w-6" src={searchIcon} alt="" />
            <img className="h-6 w-6" src={cart} alt="" />
            <img className="h-6 w-6" src={profile} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;

const Promo = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center h-9 bg-black text-white">
        <p className="w-[18.8rem] text-xs h-4 font-normal">
          Sign up and get 20% off to your frst order.
          <a href="">
            <u> Sign Up Now</u>
          </a>
        </p>
      </div>
    </>
  );
};
