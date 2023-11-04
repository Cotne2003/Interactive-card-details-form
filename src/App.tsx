import styled from "styled-components";
import logo from "/card-logo.svg";
import complete from "/icon-complete.svg";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import { useState } from "react";

type DataType = {
  cardHolder: string;
  cardNumbers: string;
  cardMM: string;
  cardYY: string;
  cardCVC: string;
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<DataType>();

  const onSubmit = () => {
    setName(watch("cardHolder"));
    setNums(watch("cardNumbers"));
    setMm(watch("cardMM"));
    setYy(watch("cardYY"));
    setCvc(watch("cardCVC"));
    if (
      errors.cardHolder?.message === undefined &&
      errors.cardNumbers?.message === undefined &&
      errors.cardMM?.message === undefined &&
      errors.cardYY?.message === undefined &&
      errors.cardCVC?.message === undefined
    ) {
      setAddedCard(true);
    }
  };

  const [nums, setNums] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANE APPLESEED");
  const [mm, setMm] = useState("00");
  const [yy, setYy] = useState("00");
  const [cvc, setCvc] = useState("000");

  const [addedCard, setAddedCard] = useState(false);

  return (
    <StyledMain>
      <div style={{ position: "relative" }}>
        <FirstCard>
          <img src={logo} alt="" />
          <StyledZeros>{nums}</StyledZeros>
          <FlexDiv>
            <CardP>{name}</CardP>
            <CardP>
              {mm}/{yy}
            </CardP>
          </FlexDiv>
        </FirstCard>
        <SecondCard>
          <CardP>{cvc}</CardP>
        </SecondCard>
      </div>
      {addedCard ? (
        <StyledDiv
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <img src={complete} alt="" />
            <StyledH2>THANK YOU</StyledH2>
            <StyledP>We’ve added your card details</StyledP>
            <ConfirmButton>Continue</ConfirmButton>
          </div>
        </StyledDiv>
      ) : (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <div style={{ width: "100%" }}>
            <InputTitle>Cardholder Name</InputTitle>
            <TopInputs
              placeholder="e.g. Jane Appleseed"
              type="text"
              {...register("cardHolder", {
                required: { value: true, message: "Card name cant't be empty" },
                minLength: {
                  value: 4,
                  message: "name must be more than 4 character",
                },
              })}
              style={
                errors.cardHolder?.message ? { outline: "1px solid red" } : {}
              }
            />
            <ErrorP>{errors.cardHolder?.message}</ErrorP>
            <InputTitle style={{ marginTop: "2.6rem" }}>Card Number</InputTitle>
            <InputMask
              className="inputNumbers"
              mask={"9999 9999 9999 9999"}
              maskChar={null}
              placeholder="e.g. 1234 5678 9123 0000"
              {...register("cardNumbers", {
                required: {
                  value: true,
                  message: "Card numbers can't be empty",
                },
                minLength: {
                  value: 19,
                  message: "Card numbers must be filled in completely",
                },
              })}
              style={
                errors.cardNumbers?.message ? { outline: "1px solid red" } : {}
              }
            ></InputMask>
            <ErrorP>{errors.cardNumbers?.message}</ErrorP>
            <FlexDiv style={{ gap: "2rem" }}>
              <div style={{ width: "21rem" }}>
                <InputTitle>Exp. Date (MM/YY)</InputTitle>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <InputMask
                    className="inputNumbers"
                    mask={"99"}
                    maskChar={null}
                    placeholder="MM"
                    {...register("cardMM", {
                      required: { value: true, message: "Cant't be blank" },
                      minLength: { value: 2, message: "Cant't be less than 2" },
                    })}
                    style={
                      errors.cardMM?.message ? { outline: "1px solid red" } : {}
                    }
                  ></InputMask>
                  <InputMask
                    className="inputNumbers"
                    mask={"99"}
                    maskChar={null}
                    placeholder="YY"
                    {...register("cardYY", {
                      required: { value: true, message: "Cant't be blank" },
                      minLength: { value: 2, message: "Cant't be less than 2" },
                    })}
                    style={
                      errors.cardYY?.message ? { outline: "1px solid red" } : {}
                    }
                  ></InputMask>
                </div>
                <ErrorP>
                  {errors.cardYY?.message || errors.cardMM?.message}
                </ErrorP>
              </div>
              <div>
                <InputTitle>cvc</InputTitle>
                <InputMask
                  className="inputNumbers"
                  mask={"999"}
                  maskChar={null}
                  placeholder="e.g. 123"
                  {...register("cardCVC", {
                    required: { value: true, message: "Cant't be blank" },
                    minLength: { value: 3, message: "Cant't be less than 3" },
                  })}
                  style={
                    errors.cardCVC?.message ? { outline: "1px solid red" } : {}
                  }
                ></InputMask>
                <ErrorP>{errors.cardCVC?.message}</ErrorP>
              </div>
            </FlexDiv>
            <ConfirmButton type="submit">Confirm</ConfirmButton>
          </div>
        </StyledForm>
      )}
    </StyledMain>
  );
}

export default App;

const StyledMain = styled.main`
  width: 105rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1099px) {
    width: 100rem;
  }
  @media (max-width: 1023px) {
    flex-direction: column;
    width: 100%;
    width: 32.7rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const FirstCard = styled.div`
  background-image: url("/bg-card-front.png");
  background-size: cover;
  width: 44.7rem;
  height: 24.5rem;
  padding: 2.8rem 3.1rem 2.6rem 3.2rem;
  z-index: 1;
  @media (max-width: 1023px) {
    width: 28.6rem;
    height: 15.6rem;
    padding: 1.7rem 2rem 2rem 1.9rem;
    img {
      width: 5.4rem;
    }
  }
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
  @media (max-width: 1023px) {
    font-size: 1.8rem;
    letter-spacing: 2.2px;
    margin-top: 3.7rem;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;
  @media (max-width: 1023px) {
    margin-top: 1.7rem;
  }
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
  @media (max-width: 1023px) {
    font-size: 0.9rem;
  }
`;

const SecondCard = styled.div`
  width: 44.7rem;
  height: 24.5rem;
  background-image: url("/bg-card-back.png");
  background-size: cover;
  text-align: right;
  padding-right: 5.7rem;
  padding-top: 11.1rem;
  margin-top: 3.7rem;
  margin-left: 10rem;
  z-index: -1;
  @media (max-width: 1023px) {
    width: 28.6rem;
    height: 15.7rem;
    padding-right: 3.7rem;
    padding-top: 7.2rem;
    position: absolute;
    top: -8.9rem;
    right: -2rem;
    margin-top: 0;
    margin-left: 0rem;
  }
`;

const StyledForm = styled.form`
  width: 38.1rem;
  display: flex;
  align-items: center;
  @media (max-width: 1023px) {
    margin-top: 4.8rem;
    width: 100%;
  }
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
  @media (max-width: 1023px) {
    font-size: 1.2rem;
  }
  @media (max-width: 550px) {
    color: #21092f;
  }
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
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  @media (max-width: 1023px) {
    width: 32.7rem;
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
  @media (max-width: 1023px) {
    padding-left: 12.9rem;
    padding-right: 13rem;
  }
`;

const ErrorP = styled.p`
  height: 1.5rem;
  color: #ff5050;
  font-size: 1.2rem;
  margin-top: 8px;
`;

const StyledH2 = styled.h2`
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: 3.422px;
  color: #21092f;
  margin-top: 3.5rem;
`;

const StyledP = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: #8f8694;
  margin-top: 1.6rem;
`;

const StyledDiv = styled.div`
  @media (max-width: 1023px) {
    margin-top: 4.8rem;
  }
`;
