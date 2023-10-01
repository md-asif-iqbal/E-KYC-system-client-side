import React from "react";
import Tesseract from "tesseract.js";
import Footer from "../../Shared/Footer/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
const NID = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const [texts, setTexts] = useState("");
  const [inputText, setInputText] = useState("");
  const [progress, setProgress] = useState(0);

  const handleSubmits = () => {};
  const onSubmit = async (event) => {
    console.log(event);
    setInputText(event);
    setIsLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: (m) => {
        if (m.status === "recognizing text") {
          setProgress(parseInt(m.progress * 100));
        }
      },
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        // console.log(result.data.text);
        setTexts(result.data.text);
        setIsLoading(false);
        const nameRegex = /Name:\s+([^\n]+)/;
        const dobRegex = /Date of Birth:\s+([^\n]+)/;
        const nidPattern = /ID\s*(?:NO)?:\s*([^\s]+)/;

        const nameMatch = texts.match(nameRegex);
        const dobMatch = texts.match(dobRegex);
        const nidMatch = texts.match(nidPattern);

        const names = nameMatch ? nameMatch[1] : null;
        const dob = dobMatch ? dobMatch[1] : null;
        const nid = nidMatch ? nidMatch[1] : "not found";
        console.log(names);
        console.log(dob);
        console.log(nid);
      });
  };

  return (
    <div>
      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md  mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          NID VERIFICATION
        </h1>
        <form className="text-start" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200" for="username">
                Yours Name
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                placeholder="ex: Tamim Khan"
                id="username"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="emailAddress"
              >
                Father Name
              </label>
              <input
                {...register("FatherName", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                placeholder="ex: Liton "
                id="name"
                type="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.FatherName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.FatherName.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label className="text-white dark:text-gray-200" for="name">
                Mother Name
              </label>
              <input
                {...register("MotherName", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
                placeholder="ex: Ghositi Begum"
                id="name"
                type="name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.MotherName?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.MotherName.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                NID Number
              </label>
              <input
                {...register("NID", {
                  required: {
                    value: true,
                    minLength: 10,
                    maxLength: 10,
                    message: "NID is Required",
                  },
                })}
                placeholder="ex: 0088811222"
                id="number"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.NID?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.NID.message}
                  </span>
                )}
              </label>
            </div>

            {/* <div>
                <label className="text-white dark:text-gray-200" for="passwordConfirmation">Select</label>
                <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Surabaya</option>
                    <option>Jakarta</option>
                    <option>Tangerang</option>
                    <option>Bandung</option>
                </select>
            </div> */}

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Date Of Birth
              </label>
              <input
                {...register("DOB", {
                  required: {
                    value: true,
                    message: "Date of Birth is Required",
                  },
                })}
                id="date"
                type="date"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
              <label className="label">
                {errors.DOB?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.DOB.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <label
                className="text-white  dark:text-gray-200"
                for="passwordConfirmation"
              >
                Address
              </label>
              <textarea
                {...register("Address", {
                  required: {
                    value: true,
                    message: "Address is Required",
                  },
                })}
                id="address"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                rows="2"
                cols="4"
                placeholder="ex: 288/A,Badda,Dhaka,Bangladesh"
              ></textarea>
              <label className="label">
                {errors.Address?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.Address.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-white">
                Upload NID Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      for="file-upload"
                      className="relative cursor-pointer bg-white px-2 py-1 justify-center items-center rounded font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="">Upload a file</span>
                      <input
                        {...register("img", {
                          required: {
                            value: true,
                            message: "NID img is Required",
                          },
                        })}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                        onChange={(e) =>
                          setImage(URL.createObjectURL(e.target.files[0]))
                        }
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                  <label className="label">
                    {errors.img?.type === "required" && (
                      <span className="label-text-alt text-red-500">
                        {errors.img.message}
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <input
              type="submit"
              className="px-6 py-3 leading-5 text-center text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              value="Verify"
            />
          </div>
        </form>
      </section>
      <div className="container mt-10" style={{ height: "100vh" }}>
        <div className="row h-full">
          <div className="  col-span-5 mx-auto h-full flex flex-column justify-center">
            {!isLoading && (
              <h1 className="text-center py-5 mc-5">Upload your NID </h1>
            )}
            {isLoading && (
              <>
                <progress className="form-control" value={progress} max="100">
                  {progress}%{" "}
                </progress>{" "}
                <p className="text-center py-0 my-0">
                  progressing :- {progress} %
                </p>
              </>
            )}
            {!isLoading && !texts && (
              <>
                <input
                  type="file"
                  onChange={(e) =>
                    setImage(URL.createObjectURL(e.target.files[0]))
                  }
                  className="form-control mt-5 mb-2"
                />
                <input
                  type="button"
                  onClick={handleSubmits}
                  className="btn btn-primary mt-2"
                  value="Verify"
                />
              </>
            )}
            {!isLoading && texts && (
              <>
                <textarea
                  className="form-control w-full mt-5"
                  rows="30"
                  value={texts}
                  onChange={(e) => setTexts(e.target.value)}
                ></textarea>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NID;
