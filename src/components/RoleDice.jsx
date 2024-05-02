import { useState } from 'react';
import styled from 'styled-components';

const RoleDice = () => {

  const [currentDice, setCurrentDice] = useState();

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomNumber)
  }

  return (
    <DiceContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/images/dice/dice_1.png`} alt="Dice 1" />
      </div>
      <p>Click On Dice To Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p{
    font-size: 24px;
  }
`;