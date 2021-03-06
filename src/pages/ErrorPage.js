import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Theme>
      <div className={localStorage.getItem("theme")}>
        <Wrapper className="page-100">
          <section>
            <h1>404</h1>
            <h3>Sorry, wtf are you doing here</h3>
            <Link to="/" className="btn">
              go back home twat
            </Link>
          </section>
        </Wrapper>
      </div>
    </Theme>
  );
};

const Wrapper = styled.main`
  /* background: var(--clr-primary-10); */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  height: 100vh;
  h1 {
    font-size: 12rem;
    margin: 5rem 0 2rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
  .btn {
    margin-top: 5rem;
    font-size: larger;
  }
`;

const Theme = styled.main`
  .dark {
    color: whitesmoke;
    .page-100 {
      background-color: #222;
    }
  }
`;

export default ErrorPage;
