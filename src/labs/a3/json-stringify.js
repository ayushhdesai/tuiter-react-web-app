import React from 'react';

function JSONStringify() {
  const squares = [1, 4, 16, 25, 36];

  return (
    <>
      <h3>JSON Stringify</h3>
      <p>squares = {JSON.stringify(squares)}</p>
    </>
  );
}

export default JSONStringify;
