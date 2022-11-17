import { Link } from "react-router-dom";
import React from "react";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Dan D. Repairs!</span>
        </h1>
      </header>
      <main className="public_main">
        <p>
          Located in Beautiful Downtown Foo City Dan D. Repairs Provides a
          trained staff ready to meet your tech repair needs.
        </p>
        <address className="public_addr">
          Dan D. Repairs <br />
          555 Foo Drive <br />
          Foo City, CA 12345 <br />
          <a href="tel:+1555555555">+1555555555</a>
        </address>
        <br />
        <p>Owner: Dan Davidson</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};

export default Public;
