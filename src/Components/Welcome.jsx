import logo1 from "../assets/logo1.png";

const Welcome = () => {
  return (
    <div className="bg-green-300 py-6">
      <div className="flex flex-wrap w-full p-4 xl:p-6">
        <div className="w-full xl:w-5/12 flex justify-center mb-6 xl:mb-0">
          <img src={logo1} className="w-4/5 mt-2 h-auto" alt="Home" />
        </div>

        <div className="w-full xl:w-7/12 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Techniques to Reduce Electricity Bill
          </h1>

          <p className="text-lg font-medium text-gray-800 mb-4">
            Save Energy, Save Money
          </p>

          <p className="text-base sm:text-lg text-gray-600 mt-4">
            Welcome to our comprehensive guide on how to reduce your electricity
            bill. Our goal is to provide you with the knowledge and tools you
            need to lower your energy consumption and save money. Explore our
            resources and take control of your energy usage today.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
