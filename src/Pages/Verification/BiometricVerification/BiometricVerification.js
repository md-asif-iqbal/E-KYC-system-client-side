import React, { useRef, useState } from 'react';
import biomatric from'../../../assets/feature-biometric-verification.jpg'
import Footer from '../../Shared/Footer/Footer';
import { GrNext } from 'react-icons/gr';

import axios from 'axios';
import Webcam from 'react-webcam';


const BiometricVerification = () => {
  const webcamRef = useRef(null);
 
  const [apiKey, setApiKey] = useState('KTZE0ID-UNJBBQPm6qLTVgOU4nd6p5pC');
  const [apiSecret, setApiSecret] = useState('bXYBa-2BNp3TAvZ-MipX2uqdMDviF-Wa');
  const [faceToken1, setFaceToken1] = useState('');
  const [imageURL1, setImageURL1] = useState('');
  const [faceToken2, setFaceToken2] = useState('');
  const [imageURL2, setImageURL2] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');

  const imgStorageKey = "058582fd7ce562d09cfe637cf2190600";
  const handleImageUpload1 = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => setImageURL1(result.data.url))
  
    // console.log(imageURL1);
  };

  const captureWebcamScreenshot = async () => {
    const screenshot = webcamRef.current.getScreenshot();
    const screenshotBlob = dataURItoBlob(screenshot);
console.log(screenshotBlob);
    const formData = new FormData();
    formData.append("image", screenshotBlob);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => setImageURL2(result.data.url))
  

  };
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const compareFaces = async () => {
    try {
      const formData ={
        api_key : apiKey,
        api_secret : apiSecret,
        image_url1 : imageURL1,
        image_url2 : imageURL2
      }
     
      console.log(formData);
      
      const response = await axios.post(
        'https://api-us.faceplusplus.com/facepp/v3/compare',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setComparisonResult(response.data);
    } catch (error) {
      console.error('Error comparing faces:', error);
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
      <div className=''>
      <h1>Face Comparison</h1>
      <div>
        <label>
          API Key:
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          API Secret:
          <input
            type="text"
            value={apiSecret}
            onChange={(e) => setApiSecret(e.target.value)}
          />
        </label>
      </div>
      <div>
        <h2>Face 1</h2>
        <Webcam className='mx-auto items-center'
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button className='btn rounded-full mb-10' onClick={captureWebcamScreenshot}>Capture Webcam Photo</button>
      {imageURL2 && (
        <div>
          <h2>Webcam Photo</h2>
          <img className='mx-auto items-center' src={imageURL2} alt="Webcam" />
        </div>
      )}

        
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleImageUpload1(e)}
        />
        {
          imageURL1 && (
            <img className='mx-auto items-center' src={imageURL1} alt="Image 1" />
          )
        }
       
      </div>

      <button className='btn' onClick={compareFaces}>Compare Faces</button>
      {comparisonResult && (
        <div>
          <h2>Comparison Result</h2>
          <pre>{JSON.stringify(comparisonResult, null, 2)}</pre>
        </div>
      )}
    </div>
      </>
      <Footer />
    </div>
  );
};

export default BiometricVerification;