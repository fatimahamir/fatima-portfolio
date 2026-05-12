import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  useEffect(() => {
    const initDropdowns = () => {
      const dropdowns = document.querySelectorAll('.dropdown-toggle');
      dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (e) {
          if (window.innerWidth < 992) {
            e.preventDefault();
            const menu = this.nextElementSibling;
            menu.classList.toggle('show');
          }
        });
      });
    };

    initDropdowns();
    window.addEventListener('resize', initDropdowns);

    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function () {
        dropdownItems.forEach(otherItem => {
          otherItem.classList.remove('text-warning', 'bg-light');
        });
        this.classList.add('text-warning', 'bg-light');
      });
    });

    return () => {
      window.removeEventListener('resize', initDropdowns);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3 text-dark" to="/">
          <i className="fa-solid fa-graduation-cap text-warning me-2"></i>
          JOS School
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle fw-normal"
                role="button"
                data-bs-toggle="dropdown"
              >
                Home
              </span>
              <ul className="dropdown-menu">
                <li>
                  <HashLink className="dropdown-item" to="/#aboutus">
                    About Us
                  </HashLink>
                </li>
                <li>
                  <HashLink className="dropdown-item" to="/#missionvission">
                    Mission & Vision
                  </HashLink>
                </li>
                <li>
                  <HashLink className="dropdown-item" to="/#statistics">
                    Statistics
                  </HashLink>
                </li>
                <li>
                  <HashLink className="dropdown-item" to="/#testimonal">
                    Testimonials
                  </HashLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-normal" to="/course">
                Courses
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-normal" to="/faculty">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-normal" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-normal text-primary" to="/login">
                Admin Login
              </Link>
            </li>

            <li className="nav-item">
              <button
                className="btn btn-warning rounded-4 px-4 py-2 ms-2"
                data-bs-toggle="modal"
                data-bs-target="#admissionModal"
              >
                Admissions
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
