import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer style={{ background: "#E9E9E9" }} class="text-center ">
      <div class="container p-1">
        <section class="mb-3">
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ background: "#3b5998" }}
            href="#!"
            role="button"
          >
            <FaFacebook />
          </a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ background: "#55acee" }}
            href="#!"
            role="button"
          >
            <FaTwitter />
          </a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ background: "#ac2bac" }}
            href="#!"
            role="button"
          >
            <FaInstagram />
          </a>
        </section>
        <section class="mb-4">
          <p style={{ fontFamily: "Trebuchet MS" }}>
            Don't forget to follow us!
          </p>
        </section>
      </div>
      <div
        class="text-center p-3"
        style={{
          background: "#C7C7C7",
          color: "#858585",
          fontFamily: "Trebuchet MS",
          fontStyle: "italic",
        }}
      >
        Powered by&nbsp;
        <a href="https://cs.vt.edu/">BSPN</a>
      </div>
    </footer>
  );
}
