import { useNavigate } from 'react-router-dom';

const ArtCard = ({ title, description, imageUrl, rating }) => {
  const navigate = useNavigate();
  const renderStars = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          className="w-6 h-6"
          alt={`Star ${i < rating ? 'filled' : 'empty'}`}
          src={i < rating ? "/star-filled.svg" : "/star-empty.svg"}
        />
      );
    }
    return stars;
  };

  const handleLearnMoreClick = () => {
    navigate('/location-view');
  }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="bg-whitesmoke-200 w-full lg:w-[413px] h-[676px] flex flex-col items-start">
        <img
          className="object-cover w-full h-2/3"
          alt={title}
          src={imageUrl}
        />
        <div className="p-8 flex flex-col gap-6">
          <h1 className="text-xl font-medium">{title}</h1>
          <div className="flex">{renderStars()}</div>
          <span className="text-lg font-light">{description}</span>
          <button className="bg-darkslategray text-white py-3 px-8 rounded"
            id="Learn_more_btn"
            onClick={handleLearnMoreClick}
          >
            Learn more
          </button>
        </div>
      </div>
      <div className="flex items-end ml-[-45px] w-8 h-12">
        <button className="rounded bg-white p-1">
          {/* Icon or Image for Like Button */}
        </button>
      </div>
    </div>
  );
};

export default ArtCard;

