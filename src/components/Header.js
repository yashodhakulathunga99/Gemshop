import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "./Logo1.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Header = () => {
  return (
    <Navbar
      style={{
        backgroundColor: "#fff", // Set background color
        padding: "0", // Remove internal padding
        margin: "0", // Remove external margins
        display: "flex", // Use flexbox to align content
        alignItems: "center", // Vertically center the logo
        justifyContent: "space-between", // Space between the logo and right side (login)
      }}
      expand="lg"
    >
      {/* Logo */}
      <Navbar.Brand href="#" style={{ padding: "0", margin: "0" }}>
        <img
          src={logo1}
          alt="Lokuge Gems Logo"
          style={{
            height: "50px", // Ensure logo fills navbar height
            width: "auto", // Keep aspect ratio intact
            display: "block", // Remove any bottom space
          }}
        />
      </Navbar.Brand>

      {/* Navbar Toggle for mobile */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      {/* Navbar Collapse */}
      <Navbar.Collapse
        id="basic-navbar-nav"
        style={{
          display: "flex",
          justifyContent: "center", // Center the Nav links
          width: "100%", // Ensure it takes full width for centering
        }}
      >
        {/* Nav Items */}
        <Nav
          style={{
            paddingTop: "0",
            paddingBottom: "0",
            justifyContent: "center", // Ensure links are centered within the Nav
          }}
        >
          <Nav.Link
            href="#"
            style={{ color: "#704f16", paddingTop: "0", paddingBottom: "0" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#"
            style={{ color: "#704f16", paddingTop: "0", paddingBottom: "0" }}
          >
            Services
          </Nav.Link>
          <Nav.Link
            href="#"
            style={{ color: "#704f16", paddingTop: "0", paddingBottom: "0" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#"
            style={{ color: "#704f16", paddingTop: "0", paddingBottom: "0" }}
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* Login text and icon on the Right Side */}
      <span
        style={{
          display: "flex", // Use flexbox to align the icon and text horizontally
          alignItems: "center", // Vertically center the icon and text
          color: "#704f16",
          cursor: "pointer",
          marginLeft: "auto", // Pushes it to the right
          paddingRight: "15px", // Adjust spacing from the right edge
        }}
      >
        <i className="fas fa-user" style={{ marginRight: "5px" }}></i> LogIn
      </span>
    </Navbar>
  );
};
