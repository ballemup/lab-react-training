import React, { useState } from 'react';

function LikeButton() {
  let [like1, setLike1] = useState(0);
  let [like2, setLike2] = useState(0);
  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];

  return (
    <div>
      <button
        style={{ backgroundColor: colorArr[like1 % colorArr.length] }}
        onClick={() => setLike1(++like1)}
      >
        {like1} Likes
      </button>
      <button
        style={{ backgroundColor: colorArr[like2 % colorArr.length] }}
        onClick={() => setLike2(++like2)}
      >
        {like2} Likes
      </button>
    </div>
  );
}

export default LikeButton;