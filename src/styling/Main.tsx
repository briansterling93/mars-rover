import styled from "styled-components";

export const MainSection = styled.div`
  margin-top: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SecondarySection = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const Titles = styled.div`
  margin-top: 1rem;
  text-align: center;
  color: black;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  font-family: Montserrat, sans-serif;
`;

export const PrimaryTitle = styled.div`
  color: blue;
  font-size: 3rem;
  font-weight: 700;
  // letter-spacing: 1.2rem;
  font-family: digital;
`;

export const SecondaryTitle = styled.div`
  color: red;
  font-size: 1rem;
  letter-spacing: 0.3rem;
  font-weight: 500;
  font-family: arial;
`;

export const Img = styled.div`
  img {
    width: 55rem;
    height: 28rem;
  }
  padding-left: 1rem;
  padding-right: 1rem;
`;
