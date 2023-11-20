import React from 'react';

function ProductFeaturePage({ productData }) {
  const {
    productName,
    productImage,
    productDescription,
    keyFeatures,
    benefits,
    // Add more properties as needed
  } = productData;

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mb-6">{productName}</h1>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 p-4">
              <img src={productImage} alt="Product Image" className="rounded-lg shadow-lg" />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="text-gray-700">{productDescription}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Key Features</h2>
            <ul className="list-disc list-inside text-gray-700 pl-4">
              {keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700 pl-4">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          {/* Add more sections like 'How It Works,' 'Technical Specifications,' etc., as needed */}
        </div>
      </div>
    </div>
  );
}

export default ProductFeaturePage;
