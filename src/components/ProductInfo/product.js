import React, { useState } from "react";
import "./products.css";
import Modal from "react-modal";

const Product = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="includeModal">
      <div className="property-card">
        <img
          className="property-image"
          src={require("/home/akondshaheen/Downloads/Slash/slash/src/image/nutella.jpg")}
        />
        <div className="product-name">
          <p>Nutella</p>
        </div>
        <h4 className="price">$10</h4>
        <button className="buy" onClick={() => setModalIsOpen(true)}>
          BUY
        </button>
      </div>
      <Modal
        className="loginModal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>Do you want to buy it?</h2>
        <form>
          <label className="uname">
            Username :
            <input
              className="uinput"
              type="text"
              name="name"
              placeholder="username"
            />
          </label>
          <label className="password">
            Password :
            <input
              className="passwordInput"
              type="text"
              name="name"
              placeholder="password"
            />
          </label>
          <div className="btn">
            <button className="cancel" type="submit">
              CANCEL
            </button>
            <button className="confirm" type="submit">
              CONFIRM
            </button>
          </div>
        </form>

        {/* <form className="modalform">
          <label className="unamelabel" for="uname">
            usename
          </label>
          <input id="uname" name="uname" value="username" type="text"></input>
          <label className="passwordlabel" for="password">
            password
          </label>
          <input id="password" type="text" value="password"></input>
          <button>CANCEL</button>
          <button>CONFIRM</button>
        </form>
        <p> Model text</p> */}
      </Modal>
    </div>
  );
};

export default Product;
