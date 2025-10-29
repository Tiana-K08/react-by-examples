import { useState } from 'react';

import Button from '../Button/Button';

import './Text.css';

function Text() {
  const initialColor = '#000000';
  const redColor = '#de0202';
  const blueColor = '#0505e3';
  const greenColor = '#05aa2b';

  const [textColor, setTextColor] = useState(initialColor);

  const handleTextRed = () => {
    setTextColor(redColor);
  };

  const handleTextBlue = () => {
    setTextColor(blueColor);
  };

  const handleTextGreen = () => {
    setTextColor(greenColor);
  };

  const handleResetColor = () => {
    setTextColor(initialColor);
  };

  return (
    <div className="text-wrapper">
      <h2>Example №2</h2>
      <p style={{ color: textColor }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        consectetur dolorem obcaecati debitis culpa ipsam iusto repellat, vero
        accusamus quidem soluta, libero neque totam suscipit? Similique placeat
        perspiciatis iure vero veniam voluptatibus recusandae rem, sed voluptas
        non enim dolore molestiae itaque nobis maiores eaque ipsum provident qui
        rerum, saepe velit ex.
      </p>
      <div className="btn-container">
        <Button
          className="styled-button"
          onClick={handleTextRed}
          label="Text Red"
          activeColor={textColor === redColor ? redColor : initialColor}
        />
        <Button
          className="styled-button"
          onClick={handleTextBlue}
          label="Text Blue"
          activeColor={textColor === blueColor ? blueColor : initialColor}
        />
        <Button
          className="styled-button"
          onClick={handleTextGreen}
          label="Text Green"
          activeColor={textColor === greenColor ? greenColor : initialColor}
        />
      </div>
      <div className="btn-container">
        <Button
          className="styled-button"
          onClick={handleResetColor}
          label="Reset Color"
        />
      </div>
    </div>
  );
}

export default Text;
