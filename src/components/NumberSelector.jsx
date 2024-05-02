import { useState } from "react";
import styled from "styled-components"

const NumberSelector = () => {

  const array = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();   

  return (
    <NumberSelectorContainer>
      <div className="flex">
      {array.map((value,i) => (
          <Box
            isSelected = {value === selectedNumber}
            key={i} 
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer> 
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex{
    display: flex;
    gap: 24px;
  }

  p{
    display: flex;
    flex-direction: column;
    align-items: end;
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => props.isSelected ? "black" : "white"};
  color: ${(props) => !props.isSelected ? "black" : "white"};
`