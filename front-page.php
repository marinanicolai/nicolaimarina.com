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


	<section id="primary" class="content-area">
		<main id="main" class="site-main">
	<!-- Section A: Specialize -->
  <div id="fullpage">
	<div class="section " id="section0">
	<p>I am a web developer who fell in love with programming in my free time.
	I enjoy learning about new technologies and have passion for web development.
	If I am not in front of my computer, I am spending time with loved ones, or 
	taking bike rides when the weather is nice.
	</div>
	<div class="section" id="section1">
		<p>
		Check out some of my projects
        </p>
        <div class="items">
          <div class="item">
            <div class="item-image">
              <img src="img/items/item1.png" alt="" />
            </div>
            <div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="img/items/item2.png" alt="" />
            </div>
			<div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="img/items/item3.png" alt="" />
            </div>
			<div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="img/items/item4.png" alt="" />
            </div>
			<div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="img/items/item5.png" alt="" />
            </div>
            <div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="img/items/item6.png" alt="" />
            </div>
			<div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="img/items/item7.png" alt="" />
            </div>
			<div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="img/items/item8.png" alt="" />
            </div>
			<div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="img/items/item9.png" alt="" />
            </div>
			<div class="item-decription">
              <p>in this project I used</p>
            </div>
          </div>
        </div>
	  </div>
	</div>
	<div class="section" id="section2"><h1>Lovely images <br />for a lovely page</h1></div>
	<div class="section" id="section3"><h1>One Image = One thousand words</h1></div>
</div>

		</main><!-- .site-main -->
	</section><!-- .content-area -->

<?php
