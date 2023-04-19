import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { preview } from '../assets';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

const CreatePost = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert("Oops, something went wrong! Maybe your description involves inappropriate content or unauthorized copyright, please try again!");
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert('Hey, there! Do not forget to provide a proper description!');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...form }),
        });

        await response.json();
        alert('Success');
        navigate('/');
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Hey, there! Do not forget to visualaizse your imagination first!');
    }
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-open-sans-condensed font-extrabold text-[#ffffff] text-[60px] uppercase">Create Your Imagination</h1>
        <p className="mt-2 text-[#737483] text-[14px] max-w-[700px]">Visualize your incredible imagination through <a href="https://openai.com/" target="_blank">OpenAI</a> and share it with our community!</p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="E.g., Ayden"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Describe your imagination"
            type="text"
            name="prompt"
            placeholder="E.g., An armchair in the shape of an avocado..."
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-[#202123] border border-[#343541] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-30"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        {/* Generate Button */}
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="font-bold bg-gradient-to-r from-[#29DC75] to-[#6FBDF9] text-[#191A1C] font-medium rounded-md w-full sm:w-auto px-12 py-2.5 
            text-center hover:shadow-primaryButton  uppercase"
          >

            {generatingImg ? 'VISUALAISING...' : 'VISUALAISE'}
          </button>
        </div>

        {/* Share Button */}

        <div className="mt-10">

          <div style={{ borderBottom: '1px solid #202123' }}></div>

          <h2 className="font-open-sans-condensed font-bold text-[#ffffff] text-[32px] uppercase">Share your imagination</h2>

          <p className="mt-2 text-[#737483] text-[14px]">We look forward to you sharing your incredible imaginative creations with our community!</p>
          <button
            type="submit"
            className="font-bold mt-3 text-[#191A1C] bg-[#4CCDB6] font-medium rounded-md w-full sm:w-auto px-11 py-2.5 
            text-center hover:shadow-primaryButton uppercase"
          >
            {loading ? 'Sharing...' : 'Share Now'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
