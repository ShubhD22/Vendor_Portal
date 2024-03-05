import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AddProductCategory() {
  const [productCategoryData, setProductCategoryData] = useState({
    name: "",
    description: "",
    documentList: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/ProductCategory/Add`,
        productCategoryData
      );
      if (response.status === 200) alert("Product Category Added");
      setProductCategoryData({
        name: "",
        description: "",
        documentList: "",
      });
    } catch (error) {
      console.error("Error adding ProductCategory:", error.message);
    }
  };

  return (
    <>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 py-3 pb-8 rounded-bl-lg rounded-br-lg">
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
        <div className="flex text-2xl font-bold text-gray-500 mb-4 justify-center items-center">
            <h2>Create Product Category</h2>
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={productCategoryData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={productCategoryData.description}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="documentList"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Document List (comma separated)
            </label>
            <input
              type="text"
              id="documentList"
              name="documentList"
              value={productCategoryData.documentList}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Product Category
          </button>
        </form>
      </div>
    </>
  );
}
