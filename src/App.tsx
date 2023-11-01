import styled from "styled-components";
import logo from "/card-logo.svg";

function App() {
  return (
    <StyledMain>
      <div>
        <FirstCard>
          <img src={logo} alt="" />
          <StyledZeros>0000 0000 0000 0000</StyledZeros>
          <FlexDiv>
            <CardP>JANE APPLESEED</CardP>
            <CardP>00/00</CardP>
          </FlexDiv>
        </FirstCard>
        <SecondCard>
          <CardP>000</CardP>
        </SecondCard>
      </div>
      <StyledForm>
        <InputTitle>Cardholder Name</InputTitle>
        <TopInputs placeholder="e.g. Jane Appleseed" type="text"></TopInputs>
        <InputTitle style={{ marginTop: "2.6rem" }}>Card Number</InputTitle>
        <TopInputs
          placeholder="e.g. 1234 5678 9123 0000"
          type="number"
        ></TopInputs>
        <FlexDiv style={{ gap: "2rem" }}>
          <div style={{ width: "17rem" }}>
            <InputTitle>Exp. Date (MM/YY)</InputTitle>
            <div style={{ display: "flex", gap: "1rem" }}>
              <TopInputs placeholder="MM" type="number"></TopInputs>
              <TopInputs placeholder="YY" type="number"></TopInputs>
            </div>
          </div>
          <div>
            <InputTitle>cvc</InputTitle>
            <TopInputs placeholder="e.g. 123"></TopInputs>
          </div>
        </FlexDiv>
        <ConfirmButton>Confirm</ConfirmButton>
      </StyledForm>
    </StyledMain>
  );
}

export default App;

const StyledMain = styled.main`
  max-width: 105rem;
  display: flex;
  justify-content: space-between;
`;

const FirstCard = styled.div`
  background-image: url("/bg-card-front.png");
  background-size: cover;
  width: 44.7rem;
  height: 24.5rem;
  padding: 2.8rem 3.1rem 2.6rem 3.2rem;
`;

const StyledZeros = styled.p`
  font-family: Space Grotesk;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 3.422px;
  color: white;
  margin-top: 6.4rem;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
`;

const CardP = styled.p`
  font-family: Space Grotesk;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
`;

const SecondCard = styled.div`
  width: 44.7rem;
  height: 24.5rem;
  background-image: url("/bg-card-back.png");
  background-size: cover;
  margin-top: 3.7rem;
  margin-left: 9.4rem;
  text-align: right;
  padding-right: 5.7rem;
  padding-top: 11.1rem;
`;

const StyledForm = styled.form`
  width: 38.1rem;
`;

const InputTitle = styled.p`
  font-family: Space Grotesk;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #21092f;
`;

const TopInputs = styled.input`
  width: 100%;
  font-family: Space Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 1.1rem 0 1.1rem 1.6rem;
  border-radius: 8px;
  border: 1px solid var(--Light-Grey, #dfdee0);
  caret-color: #21092f;
  margin-top: 0.9rem;
  &:focus {
    outline: 1px solid var(--Gradient, #6348fe);
  }
  &::placeholder {
    color: var(--Deep-Violet, #21092f);
    opacity: 0.25;
  }
`;

const ConfirmButton = styled.button`
  border-radius: 8px;
  background: var(--Deep-Violet, #21092f);
  padding: 1.5rem 15.6rem 1.5rem 15.7rem;
  font-family: Space Grotesk;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: var(--White, #fff);
  font-feature-settings: "clig" off, "liga" off;
  border: none;
  margin-top: 5.5rem;
  cursor: pointer;
`;
