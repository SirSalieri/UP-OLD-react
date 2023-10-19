// Navigation.js
import React from 'react';
import './index.css';

function Navigation() {
  return (
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li class="services-dropdown">
                <a href="#">Services</a>
                <div class="services-dropdown-content">
                    <div class="services-slider">
                    </div>
                </div>
            </li>
            <li><a href="#">Contact</a></li>
            <li class="login-register"><a id="l-r-link" href="avatars.html">Log In / Register</a></li>
        </ul>
    <script>
        const popupContainer = document.getElementById('popup-container');
        const closePopup = document.getElementById('close-popup');
        const loginRegisterLink = document.getElementById('l-r-link');

        function togglePopup() {
            popupContainer.style.display = 'block';
        }

        function closePopupWindow() {
            popupContainer.style.display = 'none';
        }

        loginRegisterLink.addEventListener('click', togglePopup);
        closePopup.addEventListener('click', closePopupWindow);

    </script>
    </nav>
  );
}

export default Navigation;

