// Footer.js
import React from 'react';

function Footer() {
  return (

    <footer>
        <div class="footer-container">
            <div class="footer-contact">
                <h4>Contact Us</h4>
                <p>Email: mihailokoprivica480@gmail.com</p>
                <p>Phone: (+47) 973 26 424</p>
                <p>Address: Sinsenterrassen 14, 0574 Oslo, Norway
                </p>
            </div>
            <div class="footer-designer">
                <h4>Designed by</h4>
                <p>Mihailo Koprivica</p>
            </div>
            <div class="footer-links">
                <h4>Explore</h4>
                <ul>
                    <li><a href="calendar.html">Calendar</a></li>
                    <li><a href="#">Weather</a></li>
                    <li><a href="#">Sports News</a></li>
                </ul>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
