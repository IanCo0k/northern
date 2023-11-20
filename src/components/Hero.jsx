import founders from '../assets/founders.jpg';

const HeroSection = () => {
  return (
    <section className="text-white" >
        <div className="container md:w-3/4 flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src={founders} alt="Cassie and Makayla, founders of Northern Mallard Supply Co" className="object-contain rounded h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 border-2 border-mytheme-brown-red"/>
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold sm:text-6xl">
                    Northern Mallard Supply Co
                </h1>
                <p className="mt-6 mb-8 text-lg sm:mb-12">
                    Founded by two friends, Cassie and Makayla, during their time at Central Michigan University, Northern Mallard is more than just a store - it's a celebration of the joy of thrifting. Discover unique, carefully selected thrifted clothing and home goods curated with love and a keen eye for style.
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-mytheme-brown-red">Shop Apparel</a>
                    <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Explore Home Goods</a>
                </div>
            </div>
        </div>
    </section>
  );
};

export default HeroSection;
