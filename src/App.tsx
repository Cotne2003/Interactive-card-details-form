import styled from "styled-components";
import logo from "/card-logo.svg";
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
  };

  const [nums, setNums] = useState("0000 0000 0000 0000");
  const [name, setName] = useState("JANE APPLESEED");
  const [mm, setMm] = useState("00");
  const [yy, setYy] = useState("00");
  const [cvc, setCvc] = useState("000");

  return (
    <StyledMain>
      <div>
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
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <div>
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
              required: { value: true, message: "Card numbers can't be empty" },
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
            <div style={{ width: "17rem" }}>
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
  display: flex;
  align-items: center;
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
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
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

const ErrorP = styled.p`
  height: 1.5rem;
  color: #ff5050;
  font-size: 1.2rem;
  margin-top: 8px;
`;
