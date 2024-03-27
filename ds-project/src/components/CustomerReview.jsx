import React, { useState } from 'react';

function CustomerReview() {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [image, setImage] = useState(null);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    // Here you can send the rating, review text, and image to your backend for processing
    console.log('Rating:', rating);
    console.log('Review:', reviewText);
    console.log('Image:', image);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Give Your Rating</h3>
        <div>
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} onClick={() => handleRatingChange(star)} className={`text-3xl ${rating >= star ? 'text-yellow-500' : 'text-gray-300'} cursor-pointer`}>★</span>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Write Your Review</h3>
        <textarea value={reviewText} onChange={handleReviewTextChange} className="w-full p-2 border border-gray-300 rounded" rows="4" />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-bold mb-2">Upload Image</h3>
        <input type="file" accept="image/*" onChange={handleImageChange} className="border border-gray-300 rounded p-2" />
      </div>
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit Review</button>
    </div>
  );
}

export default CustomerReview;
