<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since 1.0.0
 */
get_header();
?>

<nav id="menu">
  <a class="menu-links first hideme" data-menuanchor="firstPage" href="#firstPage">Marina Nicolai</a>
  <a class="menu-links second" data-menuanchor="secondPage" href="#secondPage">Portofolio</a>
  <a class="menu-links third" data-menuanchor="3rdPage" href="#3rdPage">Education</a>
  <a class="menu-links fourth" data-menuanchor="4thpage" href="#4thpage">Contact me</a>
</nav>


  <div id="fullpage">
	<div class="section about-me" id="section0" style="background-image: url(<?php the_field('first_image'); ?>)">  
	<p>I am a web developer who fell in love with programming in my free time.
	I enjoy learning about new technologies and have passion for web development.
	If I am not in front of my computer, I am spending time with loved ones, or 
  taking bike rides when the weather is nice.</p>
	</div>
	<div class="section projects-section" id="section1">
  <h2 class="section-title">My Work</h2>
		<p>
		Check out some of my projects
        </p>
        <div class="projects">
          <div class="project">
            <div class="project-image">
              <img src="img/project/project1.png" alt="" />
            </div>
            <div class="project-text">             
                <p class="project-description">ONE</p>
                <h2 class="project-gitlink">github.com</h2>           
            </div>
          </div>
        
          <div class="project">
            <div class="project-image">
              <img src="img/project/project2.png" alt="" />
            </div>
            <div class="project-text">
                <p class="project-description">TWO</p>
                <h2 class="project-gitlink">github.com</h2>
              </div>
            </div>
               
          <div class="project">
            <div class="project-image">
              <img src="img/project/project3.png" alt="" />
            </div>
            <div class="project-text">
                <p class="project-description">THREE</p>
                <h2 class="project-gitlink">github.com</h2>
              </div>
            </div>
        
          <div class="project">
            <div class="project-image">
              <img src="img/project/project4.png" alt="" />
            </div>
            <div class="project-text">
                <p class="project-description">FOUR</p>
                <h2 class="project-gitlink">github.com</h2>
              </div>
            </div>
                  	  
	  </div>
	</div>
  <div class="section" id="section2"><p>Learing in IT is an ongoing process,
    these are some of my resources which I use to improve my skills</p>
    <ul class="study">
        <li>Udemy</li>
        <li>Codeacademy</li>
        <li>Lynda.com</li>
        <li>Treehouse</li>
    </ul>
  </div>

	<div class="section" id="section3" style="background-image: url(<?php the_field('contact_image'); ?>)" >
    <div class="container">
          
        <div class="container">
        <div class="contact-info">
          <div class="info">
            <i class="fas fa-envelope fa-2x"></i>
            <h3>Email</h3>
            <p>nicolaimarina@gmail.com</p>
          </div>
          <div class="info">
            <i class="fas fa-address-card fa-2x"></i>
            <h3>Address</h3>
            <p>Fredericksburg VA</p>
          </div>
        </div>
      </div>
     <div id="footer">
      <div class="footer-content container">
        <p id="right">Copyright &copy; 2019. All Rights Reserved</p>
        <div class="social">
          <i class="fab fa-twitter"><a></a></i>
          <i class="fab fa-facebook"><a></a></i>
          <i class="fab fa-instagram"><a></a></i>
          <i class="fab fa-linkedin"><a></a></i>
        </div>
        </div>
      </div>
    </div>
</div>

<?php
