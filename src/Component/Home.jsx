import horizontalRule from "../assets/Images/Line.svg";

const HomePage = () => {
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
          <img src={horizontalRule} alt="" />
          <div>
            <p className="text-2xl font-bold">2,000+</p>
            <p className="text-xs">High-Quality Products</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-bold">30,000+</p>
          <p className="text-xs">Happy Customers</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
