import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer({ isLoggedIn }) {
  return (
    <div>
      <div class="footer-basic">
        <footer>
          <div class="social">
            <a href="#">
              <i class="icon ion-social-instagram"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-snapchat"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-twitter"></i>
            </a>
            <a href="#">
              <i class="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul class="list-inline">
            <li class="list-inline-item">
              <Link to="/">Home</Link>
            </li>
            <li class="list-inline-item">
              <Link to="/forum">Forum</Link>
            </li>
            <li class="list-inline-item">
              <Link to="/marketplace">Marketplace</Link>
            </li>
            <li class="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
          <p class="copyright">Tradehub Corporation © 2021</p>
        </footer>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}
