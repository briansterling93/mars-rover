import styled from "styled-components";

export const ImgInfoSection = styled.div`
  width: 15rem;
  height: 3em;
  border-radius: 1rem;
  color: white;
  background-color: rgba(0, 17, 100, 0.4);
`;

export const ImgBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const DownloadBtn = styled.div`
  padding-right: 2rem;
  button {
    background-color: white;
    border-radius: 0.3rem;
    color: black;
    font-family: arial;
    border: 1px solid #b0b0b0;
    font-size: 1.2rem;
    font-weight: 300;
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
  padding-left: 2rem;
  button {
    background-color: white;
    border-radius: 0.3rem;
    color: black;
    font-family: arial;
    border: 1px solid #b0b0b0;
    font-size: 1.2rem;
    font-weight: 300;
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
