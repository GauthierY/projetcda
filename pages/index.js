import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import dynamic from "next/dynamic";
import Connexion from "./Connexion";
import Navbar from "../src/components/Navbar";
//import { Link } from "react-router-dom";
import Link from "next/link";
import { useState } from "react";
import { getSession } from "next-auth/react";
// import { getSession, useSession, signOut } from "next-auth/react";

/*export default function Home() {
  const { data: session } = useSession();

  function handleSignOut() {
    signOut();
  */
export default function Home() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="" />
      <meta name="author" content="" />
      <title>Canaan Sécurité & Gardiennage</title>
      <>
        <Navbar />
        <h1>Canaan Sécurité & Gardiennage</h1>
      </>
      {/*SESSION */}
      {/* {session ? User({ session, handleSignOut }) : Guest()} */}
      {/*Suite skrol en bas de la page vers ("ICI" ligne1027) */}

      {/* Favicon*/}
      <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
      {/* Font Awesome icons (free version)*/}
      {/* Google fonts*/}
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
        rel="stylesheet"
        type="text/css"
      />
      {/* Core theme CSS (includes Bootstrap)*/}
      <link href="css/styles.css" rel="stylesheet" />
      {/* Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <div className="container">
          {/* <a class="navbar-brand" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#secteurs">
                  Secteurs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#moyens">
                  Moyens
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#connexion">
                  Connexion
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead*/}
      <header className="masthead">
        <video
          playsInline
          autoPlay
          loop
          muted
          poster="sample-5s.mp4"
          className={styles.bgVideo}
        >
          <source src="../next-html/src/sample-5s.mp4" type="video/mp4" />
          Your browser does not support this video.
        </video>
        Your browser does not support this video.
        <div className="container">
          <div className="masthead-subheading">
            Créée par des professionnels qualifiés
          </div>
          <div className="masthead-heading text-uppercase">Bienvenue</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">
            Nous connaître
          </a>
        </div>
      </header>
      {/* Services*/}
      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted" />
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                {/* <i class="fas fa-circle fa-stack-2x text-primary"></i> */}
                {/* <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i> */}
              </span>
              <h4 className="my-3">APS: Agent de Prévention</h4>
              <p className="text-muted">
                Accueil
                <br />
                Filtrage
                <br />
                Rigueur
                <br />
                Disciple
                <br />
                Discrétion
                <br />
                Diplomatie
                <br />
                Protection
                <br />
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                {/* <i class="fas fa-circle fa-stack-2x text-primary"></i> */}
                {/* <i class="fas fa-laptop fa-stack-1x fa-inverse"></i> */}
              </span>
              <h4 className="my-3">AGENT DE SECURITE INCENDIE</h4>
              <p className="text-muted">
                SSIAP I-II
                <br />
                Diagnostic
                <br />
                Gestion de crise de sécurité
                <br />
                Pédagogie
                <br />
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                {/* <i class="fas fa-circle fa-stack-2x text-primary"></i> */}
                {/* <i class="fas fa-lock fa-stack-1x fa-inverse"></i> */}
              </span>
              <h4 className="my-3">ASC: Agent de Sécurité Cynophile</h4>
              <p className="text-muted">La garde</p>
            </div>
          </div>
        </div>
      </section>
      {/* Portfolio Grid*/}
      <section className="page-section bg-light" id="secteurs">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Nos Secteurs</h2>
            <h3 className="section-subheading text-muted" />
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 1*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/9.jpg"
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Sites industriels
                  </div>
                  <div className="portfolio-caption-subheading text-muted" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 2*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/10.jpg"
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Entrepôts</div>
                  <div className="portfolio-caption-subheading text-muted" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              {/* Portfolio item 3*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/11.jpg"
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Chantiers</div>
                  <div className="portfolio-caption-subheading text-muted" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              {/* Portfolio item 4*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal4"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/12.jpg"
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Commerces</div>
                  <div className="portfolio-caption-subheading text-muted" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
              {/* Portfolio item 5*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal5"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/13.jpg"
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Hypeymarchés</div>
                  <div className="portfolio-caption-subheading text-muted" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              {/* Portfolio item 6*/}
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-bs-toggle="modal"
                  href="#portfolioModal6"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x" />
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="assets/img/portfolio/14.jpg"
                    alt="..."
                  />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Immeubles désaffectés
                  </div>
                  <div className="portfolio-caption-subheading text-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About*/}
      <section className="page-section" id="moyens">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Moyens</h2>
            <h3 className="section-subheading text-muted" />
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/18.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 />
                  <h4 className="subheading">Joignables 24h/24,</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted" />
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/19.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 />
                  <h4 className="subheading">Véhicules d'interventions,</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted" />
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/7.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 />
                  <h4 className="subheading">
                    Equipements émetteur-récepteur,
                  </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted" />
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img
                  className="rounded-circle img-fluid"
                  src="assets/img/about/8.jpg"
                  alt="..."
                />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 />
                  <h4 className="subheading">
                    Contrôleur de ronde électronique,...
                  </h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted" />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Team*/}
      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Notre Force professionnalisme, réactivité, rigueur, action{" "}
            </h2>
            <h3 className="section-subheading text-muted" />
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/15.jpg"
                  alt="..."
                />
                <h4>APS: Agent de Prévention</h4>
                <p className="text-muted" />
                {/* <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a> */}
                {/* <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a> */}
                {/* <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/16.jpg"
                  alt="..."
                />
                <h4>AGENT DE SECURITE INCENDIE</h4>
                <p className="text-muted" />
                {/* <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img
                  className="mx-auto rounded-circle"
                  src="assets/img/team/17.jpg"
                  alt="..."
                />
                <h4>ASC: Agent de Sécurité Cynophile</h4>
                <p className="text-muted" />
                {/* <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                      <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted" />
            </div>
          </div>
        </div>
      </section>
      {/* Clients*/}
      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 col-sm-6 my-3">
              {/* <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/microsoft.svg" alt="..." aria-label="Microsoft Logo" /></a> */}
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              {/* <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/google.svg" alt="..." aria-label="Google Logo" /></a> */}
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              {/* <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/facebook.svg" alt="..." aria-label="Facebook Logo" /></a> */}
            </div>
            <div className="col-md-3 col-sm-6 my-3">
              {/* <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="assets/img/logos/ibm.svg" alt="..." aria-label="IBM Logo" /></a> */}
            </div>
          </div>
        </div>
      </div>
      {/* Contact*/}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contactez nous</h2>
            <h3 className="section-subheading text-muted" />
          </div>
          {/* * * * * * * * * * * * * * * **/}
          {/* * * SB Forms Contact Form * **/}
          {/* * * * * * * * * * * * * * * **/}
          {/* This form is pre-integrated with SB Forms.*/}
          {/* To make this form functional, sign up at*/}
          {/* https://startbootstrap.com/solution/contact-forms*/}
          {/* to get an API token!*/}
          <form id="contactForm" data-sb-form-api-token="API_TOKEN">
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/* Name input*/}
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Your Name *"
                    data-sb-validations="required"
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group">
                  {/* Email address input*/}
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                <div className="form-group mb-md-0">
                  {/* Phone number input*/}
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Your Phone *"
                    data-sb-validations="required"
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* Message input*/}
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    data-sb-validations="required"
                    defaultValue={""}
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
              </div>
            </div>
            {/* Submit success message*/}
            {/**/}
            {/* This is what your users will see when the form*/}
            {/* has successfully submitted*/}
            <div className="d-none" id="submitSuccessMessage">
              <div className="text-center text-white mb-3">
                <div className="fw-bolder">Form submission successful!</div>
                To activate this form, sign up at
                <br />
                <a href="https://startbootstrap.com/solution/contact-forms">
                  https://startbootstrap.com/solution/contact-forms
                </a>
              </div>
            </div>
            {/* Submit error message*/}
            {/**/}
            {/* This is what your users will see when there is*/}
            {/* an error submitting the form*/}
            <div className="d-none" id="submitErrorMessage">
              <div className="text-center text-danger mb-3">
                Error sending message!
              </div>
            </div>
            {/* Submit Button*/}
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase disabled"
                id="submitButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Footer*/}
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              Copyright © Your Website 2022
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              {/* <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a> */}
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">
                Privacy Policy
              </a>
              <a className="link-dark text-decoration-none" href="#!">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Portfolio Modals*/}
      {/* Portfolio item 1 modal popup*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/1.jpg"
                      alt="..."
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Threads
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Illustration
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 2 modal popup*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/2.jpg"
                      alt="..."
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Explore
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Graphic Design
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 3 modal popup*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/3.jpg"
                      alt="..."
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Finish
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Identity
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 4 modal popup*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal4"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/4.jpg"
                      alt="..."
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Lines
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Branding
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 5 modal popup*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal5"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/5.jpg"
                      alt="..."
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Southwest
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Website Design
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Portfolio item 6 modal popup*/}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal6"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src="assets/img/close-icon.svg" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project details*/}
                    <h2 className="text-uppercase">Project Name</h2>
                    <p className="item-intro text-muted">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/6.jpg"
                      alt="..."
                    />
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong>
                        Window
                      </li>
                      <li>
                        <strong>Category:</strong>
                        Photography
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary btn-xl text-uppercase"
                      data-bs-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-xmark me-1" />
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bootstrap core JS*/}
      {/* Core theme JS*/}
      {/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
      {/* * *                               SB Forms JS                               * **/}
      {/* * * Activate your form at https://startbootstrap.com/solution/contact-forms * **/}
      {/* * * * * * * * *     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * **/}
    </>
  );
}

{
  /*ICI */
}
{
  /*Invité*/
}
/*function Guest() {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link href={"/connexion"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Connexion
          </a>
        </Link>
      </div>
    </main>
  );
}*/

{
  /*Utilisateur Autorisé*/
}
function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto text-center py-20">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 bg-gray-50"
        >
          Se déconnecter
        </button>
      </div>

      <div className="flex justify-center">
        <Link href={"/profil"}>
          <a className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray-50">
            Mon profil
          </a>
        </Link>
      </div>
    </main>
  );
}

/*export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/connexion",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  } 
}*/
