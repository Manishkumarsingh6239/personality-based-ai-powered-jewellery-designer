import React, { useState } from "react";
import "../styles/prjct.scss";

const GeminiComponent = () => {
  const [step, setStep] = useState(0);
  const [personality, setPersonality] = useState({});
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const questions = [
    { question: "What is Gender?", key: "gender", options: ["Male", "Female", "Transgender"] },
    { question: "What is your favorite color?", key: "color", options: ["Gold", "Silver", "Rose Gold", "Platinum"] },
    { question: "Do you prefer classic or modern styles?", key: "style", options: ["Classic", "Modern", "Minimalist", "Ornate"] },
    { question: "Are you more introverted or extroverted?", key: "introExtro", options: ["Introverted", "Extroverted", "Ambivert"] },
    { question: "Which gemstone do you like the most?", key: "gemstone", options: ["Diamond", "Ruby", "Sapphire", "Emerald", "Pearl"] },
    { question: "What occasion is the jewelry for?", key: "occasion", options: ["Casual Wear", "Wedding", "Party", "Office Wear", "Special Event"] },
    { question: "Do you prefer big statement pieces or subtle designs?", key: "size", options: ["Statement", "Subtle", "Balanced"] },
    { 
      question: "Describe your personal style:", 
      key: "styleDescription", 
      options: ["Bohemian", "Classic", "Edgy", "Romantic", "Sporty", "Glamorous"] 
    },
    { 
      question: "What do you value most in a friendship?", 
      key: "friendshipValue", 
      options: ["Loyalty", "Honesty", "Fun", "Support", "Understanding", "Shared Interests"] 
    },
    { 
      question: "What's your favorite way to spend a free weekend?", 
      key: "weekendActivity", 
      options: ["Outdoor Adventures", "Relaxing at Home", "Socializing", "Creative Pursuits", "Exploring New Places"] 
    },
    { 
      question: "How do you handle stress or difficult situations?", 
      key: "stressHandling", 
      options: ["Meditation/Yoga", "Talking to Friends", "Exercise", "Creative Outlets", "Problem-Solving"] 
    },
    { 
      question: "What kind of music, movies, or books do you enjoy?", 
      key: "entertainment", 
      options: ["Romantic", "Action/Adventure", "Mystery/Thriller", "Comedy", "Drama", "Fantasy/Sci-Fi"] 
    },
    { 
      question: "What are some of your biggest dreams or aspirations?", 
      key: "aspirations", 
      options: ["Career Success", "Family", "Travel", "Personal Growth", "Creative Fulfillment", "Making a Difference"] 
    },
  ];

  const handleNextQuestion = (key, answer) => {
    setPersonality((prev) => ({ ...prev, [key]: answer }));
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length);
    }
  };

  const handleGenerate = async () => {
    setLoading(true);
    setResponse("");

    try {
      let personalityDescription = Object.entries(personality)
        .map(([key, value]) => `${key}: ${value}`)
        .join(", ");

      const query = `Generate A high-resolution, professional photo of the jewelry. The jewelry should be the focal point, highly detailed, and beautifully lit with soft lighting to highlight its brilliance. The background should be smoothly blurred (bokeh effect) in a neutral or complementary color, creating a luxurious and elegant aesthetic. For male(extrovert) bracelet and male(ambivert/introvert) ring and for female you choose randomly necklace or Mangtika or pair of ear rings. Studio lighting, 8K, ultra-realistic, photorealistic style, with these personality traits: ${personalityDescription} `;
      console.log(query);
      const response = await fetch("https://api.aimlapi.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Authorization": `Bearer 240881d3feda4cbea8d30bebddd724b0`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "flux-pro",
          image_size: {
            width: 1024,
            height: 1024
          },
          num_inference_steps: 30,
          guidance_scale: 7.5,
          safety_tolerance: "1",
          output_format: "jpeg",
          prompt: query,
          num_images: 1,
          seed: 42
        })
      });

      const data = await response.json();
      const imageUrl = data?.images?.[0]?.url;
      console.log(response);
      console.log(data);
      if (imageUrl) {
        setResponse(imageUrl);
      } else {
        setResponse("No image generated. Please try again.");
      }
    } catch (error) {
      console.error("Error generating image:", error);
      setResponse("Error: Could not generate image. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="designer-header">
        <h2 className="title">AI-Powered Jewellery Design</h2>
      </div>

      {step < questions.length ? (
        <div className="question-box">
          <p className="question">{questions[step].question}</p>
          <div className="button-group">
            {questions[step].options.map((option, index) => (
              <button 
                key={index} 
                className="option-button" 
                onClick={() => handleNextQuestion(questions[step].key, option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <>
          <button onClick={handleGenerate} disabled={loading} className="generate-button">
            {loading ? "Generating..." : "Generate Jewellery Image"}
          </button>
          {response && (
            <div className="image-container">
              {response.startsWith("http") ? (
                <img src={response} alt="Generated Jewelry" className="jewelry-image" />
              ) : (
                <p className="error-message">{response}</p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GeminiComponent;