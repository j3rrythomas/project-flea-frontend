import { ErrorMessage, Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { getCategories } from "../../api/products/getCategories";
import { addProduct } from "../../api/products/post";
import { tagSuggestions } from "../../constants/tagSuggestions";
import { getApiError } from "../../helpers/getApiError";
import { Error, Success } from "../Alert";

const AddProductForm = ({ closeForm }) => {
  const [categories, setCategories] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagOptions, setTagOptions] = useState([]);
  const [categoryError, setCategoryError] = useState("");
  const [productPic, setProductPic] = useState();
  const [productPicError, setProductPicError] = useState("");
  const [addProductStatus, setAddProductStatus] = useState("");
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    getCategories().then((response) => {
      setCategoryOptions(response.data.map((option) => createOption(option)));
    });
    setTagOptions(tagSuggestions.map((suggestion) => createOption(suggestion)));
  }, []);

  const createOption = (label) => ({
    label,
    value: label,
  });
  return (
    <>
      <>
        {addProductStatus === "success" ? (
          <Success text="Product added successfuly" />
        ) : addProductStatus === "error" ? (
          <Error text={apiError} />
        ) : (
          <></>
        )}
      </>
      <div className="mt-5 md:mt-0 col-span-12 bg-[#fff] rounded-md py-4 px-8">
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: 0.0,
            stock: 1,
          }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "Product Name Required";
            }
            if (!values.description || values.description.trim().length < 25) {
              errors.description =
                "Description should be at least 20 characters";
            }
            if (!values.price) {
              errors.price = "Price should be entered";
            }
            if (!/^[0-9]+(?:\.[0-9]+)?$/.test(values.price)) {
              errors.price = "Price should be a number";
            }
            if (values.stock <= 0) {
              errors.stock = "Stock should be positive";
            }

            return errors;
          }}
          onSubmit={async (values) => {
            if (categories.length < 1) {
              setCategoryError("At least one category must be selected");
            } else if (!productPic) {
              setProductPicError("Upload a picture of the product");
            } else {
              setCategoryError("");
              setProductPicError("");
              setAddProductStatus("success");
              const categoryFormatted = categories.map(
                (category) => category.value
              );
              const tagsFormatted = tags.map((tag) => tag.value);
              var formData = new FormData();
              formData.append("productPic", productPic);
              formData.append(
                "productData",
                JSON.stringify({
                  category: categoryFormatted,
                  tags: tagsFormatted,
                  ...values,
                })
              );
              addProduct(formData)
                .then(() => {
                  setAddProductStatus("success");
                  closeForm();
                  setTimeout(() => {
                    setAddProductStatus("");
                  }, 5000);
                })
                .catch((error) => {
                  setAddProductStatus("error");
                  setApiError(getApiError(error));
                  setTimeout(() => {
                    setAddProductStatus("");
                  }, 5000);
                });
            }
          }}
        >
          {
            // eslint-disable-next-line no-unused-vars
            ({ errors, touched }) => (
              <>
                <h1 className="text-4xl font-bold text-[#000] my-4">
                  Add Product
                </h1>
                <Form className="grid  grid-cols-12">
                  <div className="col-span-12 flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base">
                        Product Name <span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <Field
                        name="name"
                        type="text"
                        placeholder="Enter name of the product."
                        className="input border border-solid border-gray w-full bg-[#fff] text-[#000]"
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <span className="text-[#f00]">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base">
                        Description <span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <Field
                        as="textarea"
                        name="description"
                        type="text"
                        placeholder="Enter a detailed description of the product."
                        className="input border border-solid border-gray w-full bg-[#fff] text-[#000] h-20"
                      />
                      <ErrorMessage
                        name="description"
                        render={(msg) => (
                          <span className="text-[#f00]">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6  flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base">
                        Price<span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <label className="input-group">
                        <Field
                          name="price"
                          type="text"
                          placeholder="Enter price to be charged per unit."
                          className="input border border-solid border-gray w-full bg-[#fff] text-[#000] lg:ml-3"
                        />
                        <span className="h-[3rem] bg-cyan">INR</span>
                      </label>
                      <ErrorMessage
                        name="price"
                        render={(msg) => (
                          <span className="text-[#f00] ml-3">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6 flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base text-right lg:ml-4">
                        Stock <span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <Field
                        name="stock"
                        type="number"
                        placeholder="Enter quantity of product available."
                        className="input border border-solid border-gray w-full bg-[#fff] text-[#000]"
                      />
                      <ErrorMessage
                        name="stock"
                        render={(msg) => (
                          <span className="text-[#f00]">{msg}</span>
                        )}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base text-left">
                        Categories <span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <Select
                        value={categories}
                        onChange={(selected) => {
                          setCategories(selected);
                        }}
                        name="categories"
                        isMulti
                        options={categoryOptions}
                        styles={{
                          control: (provided) => ({
                            ...provided,
                            border: "none",
                            boxShadow: "none",
                          }),
                          indicatorContainer: (provided) => ({
                            ...provided,
                          }),
                          multiValue: (provided) => ({
                            ...provided,
                            background: "f5f0ed",
                            borderRadius: "5px",
                            marginTop: "4px",
                            fontSize: "1rem",
                          }),
                          valueContainer: (provided) => ({
                            ...provided,
                            paddingLeft: "0px",
                          }),
                        }}
                        type="number"
                        placeholder="Select suitable categories for the product."
                        className="input border border-solid border-gray w-full bg-[#fff] text-[#000]"
                      />
                      {categoryError && (
                        <span className="text-[#f00]">{categoryError}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-span-12 flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base text-left">
                        Tags
                      </span>
                    </label>
                    <CreatableSelect
                      name="tags"
                      isMulti
                      value={tags}
                      options={tagOptions}
                      onChange={(selected) => setTags(selected)}
                      styles={{
                        control: (provided) => ({
                          ...provided,
                          border: "none",
                          boxShadow: "none",
                        }),
                        indicatorContainer: (provided) => ({
                          ...provided,
                        }),
                        multiValue: (provided) => ({
                          ...provided,
                          background: "f5f0ed",
                          borderRadius: "5px",
                          marginTop: "4px",
                          fontSize: "1rem",
                        }),
                        valueContainer: (provided) => ({
                          ...provided,
                          paddingLeft: "0px",
                        }),
                      }}
                      type="number"
                      placeholder="Enter tags describing the product."
                      className="input border border-solid border-gray w-full bg-[#fff] text-[#000]"
                    />
                  </div>
                  <div className="col-span-12 flex flex-row my-2">
                    <label className="label w-[150px]">
                      <span className="label-text text-black font-semibold text-base text-left">
                        Product Image <span className="text-[#f00]">*</span>
                      </span>
                    </label>
                    <div className="flex flex-col w-full">
                      <input
                        name="profilePic"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProductPic(e.target.files[0])}
                        className="input w-full bg-transparent focus:outline-none pl-0 text-[#000] file:text-[#fff] file:bg-cyan file:border-none file:mt-2 file:p-3  file:rounded-md "
                      />
                      {productPicError && (
                        <span className="text-[#f00]">{productPicError}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-span-12 flex justify-center items-center mt-8 ">
                    <button
                      className="btn-md bg-cyan text-[#fff] rounded-md w-[200px] mr-8 text-lg font-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      className="btn-md text-cyan bg-[#fff] rounded-md w-[200px] text-lg font-bold border border-solid border-cyan"
                      onClick={closeForm}
                    >
                      Cancel
                    </button>
                  </div>
                </Form>
              </>
            )
          }
        </Formik>
      </div>
    </>
  );
};

AddProductForm.propTypes = {
  closeForm: PropTypes.func,
};
export default AddProductForm;
