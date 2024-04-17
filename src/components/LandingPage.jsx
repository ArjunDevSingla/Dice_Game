import styled from "styled-components";

const LandingPage = ( {toggle} ) => {
  return (
    <Container>
        <div>
            <img src="/images/dices 1.png" alt="Dice Image" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  );
}

export default LandingPage;

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
        }
    }
`;

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 18px;
    min-width: 220px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;

    &:hover {
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
        cursor: pointer;
    }
`