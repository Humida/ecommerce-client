import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer id="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h2 className="footer__title">doo</h2>
          <div className="footer__left-social">
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-facebook"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </Link>
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="4" />
                <circle cx="12" cy="12" r="3" />
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
              </svg>
            </Link>

            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-youtube"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="4" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </Link>

            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-github"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </Link>
          </div>

          <div className="footer__left-address">
            <ul>
              <li>huynhminhdanh1110@gmail.com</li>
              <li>0353066865</li>
              <li>Hoa Phong - Tay Hoa - Phu Yen</li>
            </ul>
          </div>
        </div>

        <div className="footer__center">
          <h2 className="footer__title">Address store</h2>
          <ul>
            <li>Hoa phong - Tay Hoa - Phu Yen</li>
            <li>334 Nguyen Trai - Thanh Xuan - Ha Noi</li>
            <li>236 Hoang Quoc Viet - Bac Tu Liem - Ha Noi</li>
          </ul>
        </div>

        <div className="footer__right">
          <h2 className="footer__title">Policy</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Return policy</li>
            <li>Warranty Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
