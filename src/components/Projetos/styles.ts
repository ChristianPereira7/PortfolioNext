import styled from 'styled-components';

export const Card = styled.div`
  a {
    display: block;
    text-decoration: none;
    padding: 10px;
    margin-left: 4rem;
    border-radius: 5px;
    color: #fff;
    width: 25%;
    float: left;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    transition: all linear 0.2s;
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 10px;

    &:hover {
      animation-name: fade-img;
      animation-duration: 2s;

      background-color: #0f1426;
    }

    .itemImage img {
      width: 100%;
      border-radius: 5px;
      transform: scale(1.1);
    }

    .itemNome {
      font-weight: bold;
      padding: 20px 30px 30px;
    }

    .itemDesc {
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
`;
