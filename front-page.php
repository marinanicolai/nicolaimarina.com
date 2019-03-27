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
	<div class="section about-me" id="section0">
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
              <div class="project-text-wrap">
                <p class="project-description">ONE</p>
                <h2 class="project-gitlink">github.com</h2>
              </div>
            </div>
          </div>
        
          <div class="project">
            <div class="project-image">
              <img src="img/project/project2.png" alt="" />
            </div>
            <div class="project-text">
              <div class="project-text-wrap">
                <p class="project-description">TWO</p>
                <h2 class="project-gitlink">github.com</h2>
              </div>
            </div>
          </div>
          
          <div class="project">
            <div class="project-image">
              <img src="img/project/project3.png" alt="" />
            </div>
            <div class="project-text">
              <div class="project-text-wrap">
                <p class="project-description">THREE</p>
                <h2 class="project-gitlink">github.com</h2>
              </div>
            </div>
          </div>

          <div class="project">
            <div class="project-image">
              <img src="img/project/project4.png" alt="" />
            </div>
            <div class="project-text">
              <div class="project-text-wrap">
                <p class="project-description">FOUR</p>
                <h2 class="project-gitlink">github.com</h2>
              </div>
            </div>
          </div>        	  
	  </div>
	</div>
  <div class="section"><h1>Learing in IT is a ongoing proc_get_status,
    these are my resources which help me improve</h1>
    <ul>
        <li>  </li>
    </ul>
  </div>

	<div class="section" id="section3">
    <div class="container">
        <h2 class="title">Contact Me</h2>
        <p class="lead">Here is how you can reach me</p>     
        <div class="container">
        <div class="contact-info">
          <div>
            <i class="fas fa-envelope fa-2x"></i>
            <h3>Email</h3>
            <p>nicolaimarina@gmail.com</p>
          </div>
          <div>
            <i class="fas fa-address-card fa-2x"></i>
            <h3>Address</h3>
            <p>Fredericksburg VA</p>
          </div>
        </div>
      </div>
      <div id="contact-c" class="bg-main py-4">
      <div class="container">
        <h1>Let's Start Your Next Project</h1>
      </div>
     </div>
     <div id="footer">
      <div class="footer-content container">
        <p>Copyright &copy; 2019. All Rights Reserved</p>
        <div class="social">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-facebook"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
        </div>
      </div>
    </div>
</div>

<?php
