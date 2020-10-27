import styled from "styled-components";

export const ImgInfoSection = styled.div`
  width: 25rem;
  height: 5rem;
  font-family: arial;
  font-size: 1.3rem;
  font-weight: 700;
  border-radius: 1rem;
  color: #505050;
  background-color: rgba(0, 0, 0, 0);
`;

export const ImgBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DownloadBtn = styled.div`
  padding-right: 1.3rem;
  button {
    background-color: #333333;
    border-radius: 0.3rem;
    color: white;
    font-family: arial;
    border: 1px solid #b0b0b0;
    font-size: 1.1rem;
    font-weight: 700;
    height: 2.1rem;
    width: 10rem;
    cursor: pointer;
    outline: none;
    :hover {
      background-color: #00834a;
      color: #f5f5f5;
    }
  }
`;

export const NextBtn = styled.div`
  padding-left: 1.3rem;
  button {
    background-color: #333333;
    border-radius: 0.3rem;
    color: white;
    font-family: arial;
    border: 1px solid #b0b0b0;
    font-size: 1.1rem;
    font-weight: 700;
    height: 2.1rem;
    width: 10rem;
    cursor: pointer;
    outline: none;
    :hover {
      background-color: #00834a;
      color: #f5f5f5;
    }
  }
`;
