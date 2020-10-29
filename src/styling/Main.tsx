import styled from "styled-components";

export const MainSection = styled.div`
  margin-top: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 925px) {
    margin-top: 1rem;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const SecondarySection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const Titles = styled.div`
  text-align: center;
`;

export const PrimaryTitle = styled.div`
  color: #000e8d;
  font-size: 3rem;
  font-weight: 700;
  font-family: arial;
`;

export const SecondaryTitle = styled.div`
  color: red;
  font-size: 1rem;
  letter-spacing: 0.3rem;
  font-weight: 700;
  font-family: arial;
`;

export const Img = styled.div`
  padding-bottom: 1rem;

  img {
    width: 55rem;
    height: 25rem;
    border-radius: 1rem;

    :hover {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      transform: translateY(-0.3rem);
    }
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media only screen and (max-width: 925px) {
    img {
      width: 40rem;
      height: 18rem;
      border-radius: 1rem;

      :hover {
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
        transform: translateY(-0.3rem);
      }
      padding-left: 1rem;
      padding-right: 1rem;
    }

  @media only screen and (max-width: 768px) {
    img {
      width: 40rem;
      height: 18rem;
      border-radius: 1rem;

      :hover {
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
        transform: translateY(-0.3rem);
      }
      padding-left: 1rem;
      padding-right: 1rem;
    }

    @media only screen and (max-width: 670px) {
      img {
        width: 30rem;
        height: 15rem;
        border-radius: 1rem;
  
        :hover {
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
          transform: translateY(-0.3rem);
        }
        padding-left: 1rem;
        padding-right: 1rem;
      }

      @media only screen and (max-width: 512px) {
        img {
          width: 25rem;
          height: 15rem;
          border-radius: 1rem;
    
          :hover {
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
            transform: translateY(-0.3rem);
          }
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media only screen and (max-width: 450px) {
          img {
            width: 20rem;
            height: 15rem;
            border-radius: 1rem;
      
            :hover {
              box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
              transform: translateY(-0.3rem);
            }
            padding-left: 1rem;
            padding-right: 1rem;
          }

          @media only screen and (max-width: 380px) {
            img {
              width: 15rem;
              height: 15rem;
              border-radius: 1rem;
        
              :hover {
                box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
                transform: translateY(-0.3rem);
              }
              padding-left: 1rem;
              padding-right: 1rem;
            }

            @media only screen and (max-width: 370px) {
              img {
                width: 10rem;
                height: 12rem;
                border-radius: 1rem;
          
                :hover {
                  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
                  transform: translateY(-0.3rem);
                }
                padding-left: 1rem;
                padding-right: 1rem;
              }
  }
`;
