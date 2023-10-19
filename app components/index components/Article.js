// Articles.js
import React from 'react';
import './index.css';

function Articles() {
  return (
    <div class="in-container">
        <h2 class="ar-titl">Stay in touch with the daily news from overall Scandinavia</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero non quam iaculis scelerisque.</p>
        <div class="articles">
            <article class="news">
                <img src="pics/erna....jfif" alt="News Image 1"></img>
                <h3>Breaking News</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget libero non quam iaculis scelerisque.</p>
                <a href="#">Read More</a>
            </article>
        
            <article class="news">
                <img src="pics/Politi til stedet.jfif" alt="News Image 2"></img>
                <h3>Local Events</h3>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                <a href="#">Read More</a>
            </article>
        
            <article class="news">
                <img src="pics/sports_bildet.webp" alt="News Image 3"></img>
                <h3>Sports Update</h3>
                <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
                <a href="#">Read More</a>
            </article>
        
            {/* To add more news articles as needed  */}
        </div>
        
    
    
    </div>

  );
}

export default Articles;
