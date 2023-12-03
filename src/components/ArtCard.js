import { useNavigate } from 'react-router-dom';

const ArtCard = ({ title, description, imageUrl, rating }) => {
  const navigate = useNavigate();

  const StarRating = (len) => {
    return (
      <div className="flex flex-row items-start justify-start" id="review_stars">
        {Array.from({ length: len }, (_, index) => (
          <div key={index} className="relative w-6 h-6 overflow-hidden shrink-0" id="star">
            <img
              className="absolute h-[63.75%] w-[66.67%] top-[18.75%] right-[12.08%] bottom-[17.5%] left-[21.25%] rounded-12xs-5 max-w-full overflow-hidden max-h-full"
              alt={`Star ${index}`}
              src="/vector2.svg"
            />
          </div>
        ))}
      </div>
    );
  };

  const handleLearnMoreClick = () => {
    navigate('/location-view');
  }

  return (
    <div className="flex flex-col lg:flex-row relative">
      <div className="w-full lg:w-[413px] h-[600px]">
        <div className="relative h-[365.28px]">
          <img
            className="object-cover w-full h-[365.28px]"
            alt={title}
            src={imageUrl}
          />
          <button className="cursor-pointer [border:none] py-[1.6940228939056396px] px-[1.432827472686768px] bg-white rounded-[73.88px] flex items-center justify-center absolute top-2 right-2"
            id='LikeButton'>
            <img
              className="w-[29.3px] h-[29.3px]"
              alt="Like"
              src="/favorite-border.svg"
            />
          </button>
        </div>
        <div className="p-8 flex flex-col gap-6 bg-gainsboro-100">
          <h1 className="text-xl font-semibold">{title}</h1>
          <div className="flex">{StarRating(5)}</div>
          <span className="text-lg font-light">{description}</span>
          <button className="bg-darkslategray text-white py-3 px-8 rounded"
            id="Learn_more_btn"
            onClick={handleLearnMoreClick}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtCard;

