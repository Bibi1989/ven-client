import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
`;

export const Car = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 2% 0;
  margin: 1.4em;
  border-radius: 15px;
  box-shadow: 0 0 6px #777;
`;
export const Image = styled.div`
  padding: 1.4em;
`;

export const Detail = styled.div``;

export const BrandYearColor = styled.div`
  display: flex;
  padding: 1em 0;

  .divide1 {
    height: 55px;
    width: 0.15em;
    background: #252525;
    margin: 5px 1em;
  }
  .divide2 {
    height: 55px;
    width: 0.2em;
    background: #252525;
    margin: 5px 1em;
  }
`;

export const Brand = styled.div`
  font-size: 1.1em;
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "")};
  p {
    &:first-child {
      color: #767676;
      font-weight: 500;
    }
  }
`;

export const Year = styled.div`
  font-size: 1.2em;
  padding-right: ${(props) => (props.paddingRight ? props.paddingRight : "")};
  p {
    &:first-child {
      color: #767676;
      font-weight: 500;
    }
  }
`;

export const Color = styled.div`
  text-align: center;
  p {
    font-size: 1.2em;

    &:first-child {
      color: #767676;
      font-weight: 500;
    }

    &:last-child {
      width: 1.2em;
      height: 1.2em;
      background: ${(props) => (props.color ? props.color : "")};
      border-radius: 50%;
      margin: auto;
    }
  }
`;

export const EmailBio = styled.div``;

export const H2 = styled.h2`
  display: grid;
  grid-template-columns: 30% 70%;
`;
