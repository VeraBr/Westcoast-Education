import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0px;
    color: #5c8a8a;
  }

  main {
    padding-top: 280px;
  }

  h1 {
    color: #5c8a8a;
    font-size: 40px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  h2 {
    font-size: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 50px;
  }

  h3 {
    font-size: 25px;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .btn {
    background: #669999;
    height 50px;
    width: 200px;
    border: none;
    font-weight: 500;
    font-size: 20px;

    &.read-more {
      height: 35px;
      width: 100px;
      color: white;
      font-weight: 400;
      font-size: 15px;
      margin-top: 30px;
    }

    &.add-btn {
      height: 35px;
      width: 100px;
      color: #476b6b;
      background: #f0f5f5;
      font-weight: 600;
      font-size: 15px;
      margin-top: 30px;
    }
  }

  .card {
    border: none;
    border-radius: 20px;
    background: #f0f0f5;
    color: #476b6b;
    margin-bottom: 20px;
  }

  .form-title {
    color: #f0f5f5;
    font-size: 30px;
  }

  .form-control {
    width: 100%;
    background: transparent;
    color: #f0f5f5;
    font-size: 18px;
    border: none;
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
  }

  .mb-0 {
    margin-bottom: 0px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  .mt-40 {
    margin-top: 40px;
  }

  @media (min-width: 768px) {
    main {
      padding-top: 220px;
    }

    h1 {
      font-size: 50px;
    }
  }
`

export default GlobalStyles;