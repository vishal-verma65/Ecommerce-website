const footerHTML = `
    <footer class="section-footer">
      <div class="footer-container container">
        <div class="content_1">
          <img src="/images/logo.webp" alt=" We Store logo"/>
          <p>
            Welcome to We eComStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <div class="card-icons">
            <i class="fa-brands fa-cc-paypal"></i>
            <i class="fa-brands fa-cc-mastercard"></i>
            <i class="fa-brands fa-cc-visa"></i>
            <i class="fa-brands fa-bitcoin"></i>
          </div>
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="products.html">Computer Store</a>
          <a href="products.html">Laptop Store</a>
          <a href="products.html">Accessories</a>
          <a href="products.html">Sales & Discount</a>
        </div>
        <div class="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="./contact.html" target="_blank">Payment Method</a>
          <a href="./contact.html" target="_blank">Delivery</a>
          <a href="./contact.html" target="_blank">Return and Exchange</a>
        </div>
        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <p>Be the first to know about new<br />arrivals, sales & promos!</p>
          <div class="f-mail">
            <form action="#">
              <input type="email" placeholder="Your Email" autocomplete="off" />
            </form>
          </div>
          <hr />
        </div>
      </div>
      <div class="f-design">
        <div class="f-design-txt">
          <p>&copy; ALL Rights Reserved by We Store, 2025</p>
        </div>
      </div>
    </footer>`

const footerElem = document.querySelector(".section-footer");
footerElem.insertAdjacentHTML("afterbegin", footerHTML);