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
		<p>Check out some of my projects</p>
		<div class="projects">
		<?php if(get_field('projects')): ?>
				<?php while(has_sub_field('projects')): ?>

				<div class="project">
					<div class="project-image">
						<img src="img/project/project1.png" alt="" />
					</div>
					<div class="project-text">
							<p class="project-description"><?php the_sub_field('project-description'); ?></p>
							<a href="<?php the_sub_field('project-github-url'); ?>">
								<svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
							</a>
					</div>
				</div>

				<?php endwhile; ?>

		<?php endif; ?>
		</div>

        <div class="projects">
          <div class="project">
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
