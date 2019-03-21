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
  <a class="menu-links hideme" data-menuanchor="firstPage" href="#firstPage">section 1</a>
  <a class="menu-links" data-menuanchor="secondPage" href="#secondPage">section 2</a>
  <a class="menu-links" data-menuanchor="3rdPage" href="#3rdPage">section 3</a>
  <a class="menu-links" data-menuanchor="4thpage" href="#4thpage">section 4</a>
</nav>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">
	<!-- Section A: Specialize -->
  <div id="fullpage">
	<div class="section " id="section0"><h1>fullPage.js</h1></div>
	<div class="section" id="section1">
		<div class="slide" id="slide1"><h1>Slide Backgrounds</h1></div>
		<div class="slide" id="slide2"><h1>Totally customizable</h1></div>
	</div>
	<div class="section" id="section2"><h1>Lovely images <br />for a lovely page</h1></div>
	<div class="section" id="section3"><h1>One Image = One thousand words</h1></div>
</div>

		</main><!-- .site-main -->
	</section><!-- .content-area -->

<?php
