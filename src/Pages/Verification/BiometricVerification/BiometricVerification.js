import React, { useState } from 'react';
import biomatric from'../../../assets/feature-biometric-verification.jpg'
import Footer from '../../Shared/Footer/Footer';
import { GrNext } from 'react-icons/gr';
import Clarifai from "clarifai";
const BiometricVerification = () => {

  
  const [imageUrl, setImageUrl] = useState("");
  const [authenticationResult, setAuthenticationResult] = useState("");

  const clarifaiApp = new Clarifai.App({
    apiKey: "9412f148038b43048d4af6487588246c",
  });
  async function authenticateFace(imageUrl) {
  try {
    const response = await clarifaiApp.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      imageUrl
    );

    // Check the response for face detection
    if (response.outputs[0].data.regions.length > 0) {
      // Face detected
      console.log('Face detected. Authentication successful.');
    } else {
      // No face detected
      console.log('No face detected. Authentication failed.');
    }
  } catch (error) {
    console.error('Error authenticating face:', error);
  }
  }
    const handleImageUpload = async () => {
      setAuthenticationResult(""); // Clear previous result
      if (imageUrl) {
        await authenticateFace(imageUrl);
      } else {
        console.log("Please provide an image URL.");
      }
    };
  return (
    <div className="bg-white text-black">
      <div className="py-20 bg-[#f4f4ff]">
        <h1 className="text-4xl font-bold  ">Biometric Verification</h1>
        <h1 className="text-xl text-[#0B0757] flex justify-center items-center pb-10 pt-4">
          <span>Home</span>
          <span className="ml-2">
            {" "}
            <GrNext />
          </span>
          <span className="ml-2">Verification</span>
          <span className="ml-2 mr-2">
            {" "}
            <GrNext />
          </span>
          <span>Biometric Verification</span>
        </h1>
      </div>
      <div className="bg-white">
        <img className="w-3/5 mx-auto" src={biomatric} alt="" />
      </div>
      <div className="bg-white">
        <div className="text-start mx-auto w-3/5 mb-12 mt-12">
          <h1 className="text-2xl font-bold mb-5">
            Multi-modal Face Recognition
          </h1>
          <p className=" text-gray-400">
            Forget about training your own machine learning model, ID Analyzer
            employs state-of-art deep learning models detect and verify faces in
            identity documents, together with a tunable threshold, you can
            confirm the identity of your users within seconds using their selfie
            photo and government-issued documents.
          </p>
        </div>
        <div className="text-start mx-auto w-3/5 mb-12">
          <h1 className="text-2xl font-bold mb-5">
            Liveness Check & Facial Expression Detection
          </h1>
          <p className=" text-gray-400">
            ID Analyzer deep learning models can check the liveness of user
            submitted photos and videos, making sure they are real persons not
            some kind of printed materials trying to spoof the system. Our
            DocuPass Live Mobile identity verification solutions uses real-time
            face expression detector to track user emotions, users undergone
            verification must display varying face expression (e.g from neutral
            look to happy face) to pass our biometric validation.
          </p>
        </div>
        <div className="text-start mx-auto w-3/5 mb-12">
          <h1 className="text-2xl font-bold mb-5">
            Video & Voice Biometric Verification
          </h1>
          <p className=" text-gray-400">
            Under some circumstances, it may be insufficient to compare the
            facial features based on still photo. To enhance security, we allow
            all our users to utilize video facial match feature, ID Analyzer
            will calculate a similarity score based on the person inside a video
            against the photo on identification document. To further improve
            security, users are required to pronounce their birthday year, and
            our voice recognition technology will verify the spoken birthday
            against the birthday on the document.
          </p>
        </div>
      </div>
      <>
        <div>
          <h1>Face Authentication</h1>
          <input
            type="text"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleImageUpload}>Authenticate</button>
          <div>
            <p>Authentication Result: {authenticationResult}</p>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
};

export default BiometricVerification;