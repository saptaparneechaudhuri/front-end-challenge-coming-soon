import React, { useState } from "react";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const clickHandler = () => {
    console.log("Button clicked");
    if (email === "" || !validateEmail(email)) {
      console.log("Enter email");
      let x = document.querySelector(".input-area");
      x.classList.add("error");
      let errorIcon = document.querySelector(".icon");
      errorIcon.style.visibility = "visible";
      let errMessage = document.querySelector(".error-message");
      errMessage.style.visibility = "visible";
    }
  };

  const validateEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };
  return (
    <main className="main">
      <section className="content">
        <header className="header">
          <img src="/images/logo.svg" alt="logo" />
        </header>
        <div className="title">
          <h1>
            <span>We're </span>coming soon
          </h1>
        </div>
        <div className="description">
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
        </div>

        <div className="input-area">
          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="icon">
            <img src="/images/icon-error.svg" alt="error img" />
          </i>
          <button className="btn" onClick={clickHandler}>
            <img src="/images/icon-arrow.svg" alt="button img" />
          </button>
          <small className="error-message">Please provide a valid email</small>
        </div>
      </section>
      <section className="hero">
        {/* <img src="/images/hero-desktop.jpg" alt="hero iamge" /> */}
      </section>
    </main>
  );
};

export default HomePage;
