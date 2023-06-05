import React, { useState } from 'react';
import { FiMessageSquare, FiRepeat, FiShare, FiHeart } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const TuitStats = ({ tuit }) => {
  const [isLiked, setLiked] = useState(tuit.liked);
  const [likesCount, setLikesCount] = useState(tuit.likes);

  const handleLike = () => {
    setLiked(!isLiked);

    if (isLiked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
  };

  return (
    <div className="row">
      <div className="col">
        <FiMessageSquare className="icon" /> {tuit.replies}
      </div>
      <div className="col">
        <FiRepeat className="icon" /> {tuit.retuits}
      </div>
      <div className="col" onClick={handleLike}>
        {isLiked ? (
          <FaHeart className="icon liked" style={{ color: 'red' }} />
        ) : (
          <FiHeart className="icon" />
        )}
        {likesCount}
      </div>
      <div className="col">
        <FiShare className="icon" />
      </div>
    </div>
  );
};

export default TuitStats;
