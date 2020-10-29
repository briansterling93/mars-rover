import styled from "styled-components";

export const ImgInfoSection = styled.div`
  width: 25rem;
  height: 5rem;
  font-family: arial;
  letter-spacing: 0.1rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: black;
  padding-bottom: 0.5rem;
`;

export const ImgBtns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  button {
    background-color: #000B69;
    border-radius: 0.3rem;
    color: white;
    font-family: arial;
    border: 1px solid #989898;
    font-size: 1.1rem;
    font-weight: 700;
    height: 2.1rem;
    width: 10rem;
    cursor: pointer;
    outline: none;
    :hover {
     opacity: .7;
    }
`;

export const DownloadBtn = styled.div`
  padding-right: 1.3rem;
  }
`;

export const NextBtn = styled.div`
  padding-left: 1.3rem;
  }
`;

export const RoverName = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
`;
export const CameraName = styled.div`
  font-size: 1rem;
  font-weight: 400;
`;
export const SolName = styled.div`
  font-size: 1rem;
`;
