export const FooterTemplateStyle2 = () => {
    return (
      <style jsx="true">{`
      /*=====================
      21.footer CSS start
  ==========================*/
  footer {
      position: relative;
  }
  footer .footer-theme .footer-mobile-title {
      display: none;
  }
  footer .darken-layout p {
      color: #938d8c;
  }
  footer .darken-layout .sub-title .footer-title.active .according-menu {
      font: normal normal normal 14px/1 FontAwesome;
  }
  footer .darken-layout .sub-title .footer-title.active .according-menu.before {
      content: "\f068";
  }
  footer .darken-layout .sub-title h4 {
      color: #ffffff;
  }
  footer .darken-layout .sub-title li a {
      color: #938d8c;
  }
  footer .darken-layout .sub-title .contact-list i {
      color: #938d8c;
  }
  footer .darken-layout .sub-title .contact-list li {
      color: #938d8c;
  }
  footer .darken-layout .footer-social i {
      color: #938d8c;
  }
  footer p {
      line-height: 32px;
      letter-spacing: 0.03em;
      margin-bottom: 0;
  }
  footer.footer-black .light-layout {
      background-color: #23292c;
  }
  footer.footer-black .upside {
      background-color: transparent;
  }
  footer.footer-black .upside .small-section {
      background-color: rgba(255, 255, 255, 0.92);
      padding: 20px 30px;
      margin-bottom: -45px;
      z-index: 1;
      position: relative;
      background-image: url("/assets/images/metro.jpg");
      background-blend-mode: overlay;
  }
  footer.footer-black .upside .small-section .center-thing {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      height: 100%;
  }
  footer.footer-black .upside .small-section .center-thing .subscribe h4 {
      margin-bottom: 0;
      color: black;
  }
  footer.footer-black .upside .small-section .center-thing .black-btn {
      background-image: linear-gradient(30deg, #23292c 50%, transparent 50%);
      border: 2px solid #23292c;
  }
  footer.footer-black .below-section {
      padding-top: 115px;
  }
  footer.footer-black .sub-footer {
      background-color: #191e21;
  }
  footer.footer-black .footer-theme .sub-title h4 {
      color: #ffffff;
  }
  footer.footer-black .subscribe h4,
  footer.footer-black .subscribe p {
      color: #000000;
  }
  footer.footer-black .footer-social i {
      color: #777777;
  }
  footer.footer-black.footer-light .subscribe {
      border-right: 1px solid rgba(0, 0, 0, 0.8);
  }
  footer.footer-classic .upper-footer {
      background-color: var(--theme-deafult);
  }
  footer.footer-classic .upper-footer .small-section {
      padding: 35px 0;
  }
  footer.footer-classic.footer-light .subscribe {
      border-right: none;
  }
  footer.footer-classic.footer-light .subscribe h4 {
      color: #ffffff;
  }
  footer.footer-classic.footer-light .subscribe p {
      color: #ffffff;
  }
  footer.footer-classic .sub-footer {
      background-color: #494949;
  }
  footer.footer-classic .sub-footer p {
      color: #ffffff;
      padding: 10px 0;
  }
  footer.footer_digital .white-bg {
      background-color: white;
  }
  footer.footer-christmas .light-layout {
      background: transparent;
  }
  footer.footer-christmas .sub-footer {
      background-color: transparent;
  }
  footer.footer-christmas p {
      color: white;
  }
  footer.footer-christmas .subscribe {
      text-align: left;
  }
  footer.footer-christmas .subscribe h4 {
      color: #ffffff;
  }
  footer.footer-christmas .footer-theme .sub-title h4 {
      color: #ffffff;
  }
  footer.footer-christmas .footer-theme .sub-title li {
      color: #ffffff;
  }
  footer.footer-christmas .footer-theme .sub-title li a {
      color: #ffffff;
  }
  footer.footer-christmas .footer-theme .sub-title li:hover a:before {
      width: 100%;
      height: 2px;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  footer.footer-christmas .footer-theme .sub-title .contact-list li a:hover {
      color: var(--theme-deafult);
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  footer.footer-christmas .footer-theme .sub-title .contact-list li:hover {
      color: #999999;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
  }
  footer.footer-christmas .footer-social i,
  footer.footer-christmas .social-white i {
      color: #ffffff;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  footer.footer-christmas .footer-social i:hover,
  footer.footer-christmas .social-white i:hover {
      color: var(--theme-deafult) !important;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  
  .footer-light .subscribe {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      height: 100%;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      border-right: 1px solid #dddddd;
      text-align: left;
  }
  .footer-light .subscribe p {
      line-height: 1;
  }
  .footer-light .subscribe h4 {
      margin-bottom: 10px;
  }
  
  .footer-light .subscribe-form {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 100%;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
  }
  
  .subscribe {
      text-align: center;
  }
  .subscribe h4 {
      color: #222222;
      text-transform: uppercase;
      font-weight: 700;
      display: block;
      margin-bottom: 15px;
  }
  .subscribe h4 i {
      color: var(--theme-deafult);
      padding-right: 5px;
      font-size: 23px;
  }
  
  .subscribe-form {
      display: -webkit-inline-box;
      display: -ms-inline-flexbox;
      display: inline-flex;
  }
  .subscribe-form .form-group {
      margin-bottom: 0;
  }
  .subscribe-form .form-control {
      padding: 13px;
      width: 345px;
      border-radius: 0;
      border: 1px solid #eeeeee;
  }
  .subscribe-form .form-control.name-cls {
      width: 265px;
  }
  .subscribe-form.classic-form .form-control {
      border-radius: 0;
      border: none;
      background-color: #f5f2f2;
      margin-left: 15px;
  }
  .subscribe-form.classic-form .btn-solid,
  .subscribe-form.classic-form .btn-outline {
      margin-bottom: 0 !important;
  }
  
  .footer-social,
  .social-white {
      margin-top: 40px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
  }
  .footer-social li,
  .social-white li {
      display: inline-block;
      padding-right: 45px;
  }
  .footer-social i,
  .social-white i {
      font-size: 20px;
      color: #000000;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  .footer-social i:hover,
  .social-white i:hover {
      color: var(--theme-deafult) !important;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  
  .social-white li {
      padding-left: 22px;
      padding-right: 22px;
  }
  
  .footer-theme .footer-logo {
      margin-bottom: 18px;
  }
  
  .footer-theme .sub-title h4 {
      color: #222222;
      margin-bottom: 25px;
      text-transform: uppercase;
      font-weight: 700;
  }
  
  .footer-theme .sub-title li {
      position: relative;
      display: inherit;
      padding-top: 13px;
      text-transform: capitalize;
      font-size: 14px;
      color: #777777;
  }
  .footer-theme .sub-title li a {
      position: relative;
      color: #777777;
  }
  .footer-theme .sub-title li a:before {
      position: absolute;
      top: 20px;
      content: "";
      height: 2px;
      width: 0;
      background-color: var(--theme-deafult);
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  .footer-theme .sub-title li:hover a:before {
      width: 100%;
      height: 2px;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  
  .footer-theme .sub-title .contact-list i {
      position: absolute;
      left: 0;
      top: 21px;
  }
  
  .footer-theme .sub-title .contact-list li {
      position: relative;
      padding-left: 25px;
      line-height: 28px;
  }
  .footer-theme .sub-title .contact-list li a:hover {
      color: var(--theme-deafult);
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .footer-theme .sub-title .contact-list li:hover {
      color: #999999;
      -webkit-transition: all 0.3s ease;
      transition: all 0.3s ease;
  }
  .footer-theme .sub-title .contact-list li:hover a:before {
      display: none;
  }
  .footer-theme .sub-title .contact-list li:last-child {
      margin-bottom: -5px;
  }
  
  .sub-footer {
      background-color: #ffffff;
  }
  .sub-footer.dark-subfooter {
      background-color: #2e2726;
  }
  .sub-footer.dark-subfooter p {
      color: #938d8c;
  }
  .sub-footer.darker-subfooter {
      background-color: #25221e;
  }
  .sub-footer.darker-subfooter p {
      color: #7f786d;
  }
  .sub-footer.black-subfooter {
      background-color: #222222;
  }
  .sub-footer.black-subfooter p {
      color: #777777;
  }
  .sub-footer p {
      color: #777777;
      margin-bottom: 0;
      padding: 20px 0;
  }
  .sub-footer .payment-card-bottom {
      height: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: end;
      -ms-flex-pack: end;
      justify-content: flex-end;
  }
  .sub-footer .payment-card-bottom li {
      padding-left: 7px;
      padding-right: 7px;
      display: inline-block;
  }
  
  .footer-theme2 {
      text-align: center;
  }
  .footer-theme2 .footer-mobile-title {
      display: none !important;
  }
  .footer-theme2 .contact-details li a {
      color: #7f786d;
  }
  .footer-theme2 .contact-details li a:hover {
      color: var(--theme-deafult);
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .footer-theme2.footer-border {
      border: 20px solid #f1f5f4;
  }
  .footer-theme2 .footer-logo {
      margin-bottom: 18px;
  }
  .footer-theme2 p {
      line-height: 32px;
      letter-spacing: 0.03em;
      margin-bottom: 0;
      color: #7f786d;
  }
  .footer-theme2 h4 {
      color: #ffffff;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 0;
      padding-bottom: 25px;
  }
  .footer-theme2 .contact-details li {
      display: block;
      color: #7f786d;
      padding: 0 50px;
      line-height: 2.2;
  }
  .footer-theme2 .contact-details li:last-child {
      margin-bottom: -8px;
  }
  .footer-theme2 .subscribe-block {
      border-left: 1px solid #38352f;
      border-right: 1px solid #38352f;
      padding: 10px 110px;
  }
  .footer-theme2 .subscribe-block h2 {
      color: #ffffff;
      margin-bottom: 30px;
  }
  .footer-theme2 .subscribe-block .btn-solid,
  .footer-theme2 .subscribe-block .btn-outline {
      margin-top: 10px;
  }
  .footer-theme2 .subscribe-block .form-group {
      margin-bottom: 0;
  }
  .footer-theme2 .subscribe-block .form-control {
      text-align: center;
      letter-spacing: 5px;
      font-size: 12px;
      padding: 15px 0;
      border-radius: 0;
  }
  .footer-theme2 .footer-link.link-white h4,
  .footer-theme2 .footer-link-b.link-white h4 {
      color: #222222;
  }
  .footer-theme2 .footer-link.link-white a,
  .footer-theme2 .footer-link-b.link-white a {
      color: #777777;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  .footer-theme2 .footer-link.link-white a:hover,
  .footer-theme2 .footer-link-b.link-white a:hover {
      color: #2d2a25;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  .footer-theme2 .footer-link h4,
  .footer-theme2 .footer-link-b h4 {
      padding-bottom: 20px;
  }
  .footer-theme2 .footer-link li,
  .footer-theme2 .footer-link-b li {
      padding-right: 15px;
      padding-left: 15px;
      text-transform: capitalize;
  }
  .footer-theme2 .footer-link a,
  .footer-theme2 .footer-link-b a {
      color: #7f786d;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  .footer-theme2 .footer-link a:hover,
  .footer-theme2 .footer-link-b a:hover {
      color: #f5f2f2;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  .footer-theme2 .footer-link-b h4 {
      margin-top: 50px;
  }
  .footer-theme2.section-light h2,
  .footer-theme2.section-light h4 {
      color: #222222;
  }
  .footer-theme2.section-light .footer-block {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
      height: 100%;
  }
  .footer-theme2.section-light .footer-block h4 {
      padding-bottom: 25px;
  }
  .footer-theme2.section-light .footer-block .contact-details li a {
      color: #7f786d;
  }
  .footer-theme2.section-light .footer-block .contact-details li a:hover {
      color: var(--theme-deafult);
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .footer-theme2.section-light .footer-block .subscribe-white {
      position: relative;
      z-index: 1;
      width: 100%;
      padding: 85px 65px;
      border-left: 20px solid #f1f5f4;
      border-right: 20px solid #f1f5f4;
  }
  .footer-theme2.section-light .footer-block .subscribe-white:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: var(--theme-deafult);
      opacity: 0.4;
      z-index: -1;
  }
  .footer-theme2.section-light .footer-block .subscribe-white .form-group {
      margin-bottom: 0;
  }
  .footer-theme2.section-light .footer-block .subscribe-white .form-control {
      border: none;
      border-radius: 0;
  }
  .footer-theme2.section-light .footer-block .subscribe-white h2 {
      margin-bottom: 30px;
      margin-top: -5px;
  }
  .footer-theme2.section-light .footer-block .subscribe-white .btn-solid,
  .footer-theme2.section-light .footer-block .subscribe-white .btn-outline {
      margin-top: 10px;
  }
  .footer-theme2.section-light .footer-block .subscribe-white .form-control {
      text-align: center;
      letter-spacing: 5px;
      font-size: 12px;
      padding: 15px 0;
  }
  
  .right-category {
      margin-top: 0px;
      display: flex;
      justify-content: flex-end;
      text-align: right;
      @media screen and (max-width: 768px) {
          text-align: left;
          justify-content: flex-start;
          margin-top: 30px;
      }
  }
  
  body {
      font-family: Lato, sans-serif;
      position: relative;
      background: #ffffff;
      font-size: 14px;
  }
  body.christmas {
      font-family: Philosopher, sans-serif;
  }
  body.christmas .dark-light {
      display: none;
  }
  body.christmas section {
      overflow: hidden;
  }
  
  h1 {
      font-size: 60px;
      color: #222222;
      font-weight: 700;
      text-transform: uppercase;
  }
  h1 span {
      font-size: 107px;
      font-weight: 700;
      color: var(--theme-deafult);
  }
  
  h2 {
      font-size: 36px;
      color: #222222;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1;
      letter-spacing: 0.02em;
  }
  
  h3 {
      font-size: 24px;
      font-weight: 400;
      color: #777777;
      letter-spacing: 0.03em;
  }
  
  h4 {
      font-size: 18px;
      text-transform: capitalize;
      font-weight: 400;
      letter-spacing: 0.03em;
      line-height: 1;
  }
  
  h5 {
      font-size: 16px;
      font-weight: 400;
      color: #222222;
      line-height: 24px;
      letter-spacing: 0.05em;
  }
  
  h6 {
      font-size: 14px;
      font-weight: 400;
      color: #777777;
      line-height: 24px;
  }
  
  ul {
      padding-left: 0;
      margin-bottom: 0;
  }
  
  li {
      display: inline-block;
  }
  
  p {
      font-size: 14px;
      color: #777777;
      line-height: 1;
  }
  
  a {
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  a:hover {
      text-decoration: none;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  a:focus {
      outline: none;
  }
  
  button:focus {
      outline: none;
  }
  
  section,
  .section-t-space {
      padding-top: 70px;
  }
  
  .section-b-space {
      padding-bottom: 70px;
  }
  
  .large-section {
      padding-top: 120px;
      padding-bottom: 120px;
  }
  
  .p-t-0 {
      padding-top: 0;
  }
  
  hr.style1 {
      width: 75px;
      height: 3px;
      margin-top: 13px;
      background-color: var(--theme-deafult);
      text-align: center;
  }
  
  .no-arrow .slick-next,
  .no-arrow .slick-prev {
      display: none !important;
  }
  
  .form-control {
      border-radius: 0;
  }
  
  .small-section {
      padding-top: 35px;
      padding-bottom: 35px;
  }
  
  .banner-padding {
      padding-top: 30px;
  }
  
  .border-section {
      border-top: 1px solid #dddddd;
      border-bottom: 1px solid #dddddd;
  }
  
  .border-b {
      border-bottom: 1px solid #38352f;
  }
  
  .border-bottom-grey {
      border-bottom: 1px solid #efefef;
  }
  
  .border-top-grey {
      border-top: 1px solid #efefef;
  }
  
  .darken-layout {
      background-color: #393230;
  }
  
  .dark-layout {
      background-color: #2d2a25;
  }
  
  .light-layout {
      background-color: #f9f9f9;
  }
  
  .white-layout {
      background-color: #ffffff;
  }
  
  .bg-light0 {
      background-color: #d0edff;
  }
  
  .bg-light1 {
      background-color: #f1e7e6;
  }
  
  .bg-light2 {
      background-color: #bfbfbf;
  }
  
  .bg-blog {
      background-color: #eeeeee;
  }
  
  .bg-grey {
      background-color: #f7f7f7;
  }
  
  .bg_cls {
      background-color: #fafafa;
  }
  
  del {
      font-size: 14px;
      color: #aaaaaa;
      font-weight: 400;
  }
  
  [data-notify="progressbar"] {
      margin-bottom: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 5px;
  }
  
  .progress-bar {
      background-color: #19a340;
  }
  
  .progress-bar-info {
      background-color: #00829a;
  }
  
  .container-fluid.custom-container {
      padding-left: 90px;
      padding-right: 90px;
  }
  
  .ratio_40 .bg-size:before {
      padding-top: 40%;
      content: "";
      display: block;
  }
  
  .ratio_45 .bg-size:before {
      padding-top: 45%;
      content: "";
      display: block;
  }
  
  .ratio2_1 .bg-size:before {
      padding-top: 50%;
      content: "";
      display: block;
  }
  
  .ratio2_3 .bg-size:before {
      padding-top: 60%;
      content: "";
      display: block;
  }
  
  .ratio3_2 .bg-size:before {
      padding-top: 66.66%;
      content: "";
      display: block;
  }
  
  .ratio_landscape .bg-size:before {
      padding-top: 75%;
      content: "";
      display: block;
  }
  
  .ratio_square .bg-size:before {
      padding-top: 100%;
      content: "";
      display: block;
  }
  
  .ratio_asos .bg-size:before {
      padding-top: 127.7777778%;
      content: "";
      display: block;
  }
  
  .ratio_portrait .bg-size:before {
      padding-top: 150%;
      content: "";
      display: block;
  }
  
  .ratio1_2 .bg-size:before {
      padding-top: 200%;
      content: "";
      display: block;
  }
  
  .b-top {
      background-position: top !important;
  }
  
  .b-bottom {
      background-position: bottom !important;
  }
  
  .b-center {
      background-position: center !important;
  }
  
  .b_size_content {
      background-size: contain !important;
      background-repeat: no-repeat;
  }
  
  /*Lazy load */
  .blur-up {
      -webkit-filter: blur(5px);
      filter: blur(5px);
      transition: filter 400ms, -webkit-filter 400ms;
  }
  .blur-up.lazyloaded {
      -webkit-filter: blur(0);
      filter: blur(0);
  }
  
  /*=====================
        1.1.Button CSS start
    ==========================*/
  button {
      cursor: pointer;
  }
  
  .btn {
      line-height: 20px;
      text-transform: uppercase;
      font-size: 14px;
      font-weight: 700;
      border-radius: 0;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
  }
  .btn:hover {
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
  }
  .btn:focus {
      -webkit-box-shadow: none;
      box-shadow: none;
  }
  
  .btn-solid {
      padding: 13px 29px;
      color: #ffffff;
      letter-spacing: 0.05em;
      border: 2px solid var(--theme-deafult);
      background-image: linear-gradient(30deg, var(--theme-deafult) 50%, transparent 50%);
      background-size: 850px;
      background-repeat: no-repeat;
      background-position: 0;
      -webkit-transition: background 300ms ease-in-out;
      transition: background 300ms ease-in-out;
  }
  .btn-solid:hover {
      background-position: 100%;
      color: #000000;
      background-color: #ffffff;
  }
  .btn-solid.black-btn {
      background-image: linear-gradient(30deg, #222222 50%, transparent 50%);
      border: 2px solid #222222;
  }
  .btn-solid:focus {
      color: #ffffff;
  }
  .btn-solid.btn-gradient {
      background: var(--theme-deafult);
      background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--gradient1)),
          color-stop(99%, var(--gradient2))
      );
      background: linear-gradient(180deg, var(--gradient1) 0%, var(--gradient2) 99%);
      -webkit-transition: background 300ms ease-in-out;
      transition: background 300ms ease-in-out;
      background-size: 300% 100%;
      border: none;
  }
  .btn-solid.btn-gradient:hover {
      background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--gradient2)),
          color-stop(99%, var(--gradient1))
      );
      background: linear-gradient(-180deg, var(--gradient2) 0%, var(--gradient1) 99%);
      -webkit-transition: background 300ms ease-in-out;
      transition: background 300ms ease-in-out;
      color: white;
  }
  .btn-solid.btn-green {
      background-image: -webkit-gradient(linear, left top, right top, from(var(--gradient1)), to(var(--gradient2)));
      background-image: linear-gradient(to right, var(--gradient1), var(--gradient2));
      border: none;
      background-color: var(--theme-deafult);
  }
  .btn-solid.btn-green:hover {
      background-color: var(--theme-deafult);
      background-image: none;
      color: white;
  }
  .btn-solid.btn-sm {
      padding: 9px 16px;
  }
  .btn-solid.btn-xs {
      padding: 5px 8px;
      text-transform: capitalize;
  }
  
  .btn-outline {
      display: inline-block;
      padding: 13px 29px;
      letter-spacing: 0.05em;
      border: 2px solid var(--theme-deafult);
      position: relative;
      color: #000000;
  }
  .btn-outline:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      position: absolute;
      top: 0;
      left: 50%;
      right: 50%;
      bottom: 0;
      opacity: 0;
      content: "";
      background-color: var(--theme-deafult);
      z-index: -2;
  }
  .btn-outline:hover,
  .btn-outline:focus {
      color: #ffffff !important;
  }
  .btn-outline:hover i,
  .btn-outline:focus i {
      color: #ffffff !important;
  }
  .btn-outline:hover:before,
  .btn-outline:focus:before {
      -webkit-transition: 0.5s all ease;
      transition: 0.5s all ease;
      left: 0;
      right: 0;
      opacity: 1;
  }
  .btn-outline.btn-sm {
      padding: 9px 16px;
      font-size: 12px;
  }
  
  button.btn.btn-solid:active,
  button.btn.btn-outline:active {
      background-image: linear-gradient(30deg, var(--theme-deafult) 50%, transparent 50%);
      color: #ffffff;
      background: var(--theme-deafult);
  }
  
  .btn-classic:hover {
      background-color: var(--theme-deafult);
  }
  
  .btn-theme {
      background-color: var(--theme-deafult);
      color: #ffffff;
  }
  
  .btn-white {
      background-color: white;
      color: var(--theme-deafult);
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      padding: 10px 29px;
  }
  .btn-white:hover {
      color: #000000;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  
  .btn-custom {
      padding: 6px 30px !important;
      border: none;
  }
  
  /*=====================
        1.2.Title CSS start
    ==========================*/
  .title1 {
      text-align: center;
  }
  .title1 h4 {
      color: var(--theme-deafult);
      padding-bottom: 10px;
      margin-bottom: 0;
      margin-top: -3px;
  }
  .title1 .title-inner1 {
      padding-bottom: 15px;
      margin-bottom: 30px;
      position: relative;
  }
  .title1 .title-inner1:after {
      position: absolute;
      height: 5px;
      width: 70px;
      background-color: var(--theme-deafult);
      content: "";
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 0;
  }
  .title1.title-gradient .title-inner1:after {
      background: var(--theme-deafult);
      background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--gradient1)),
          color-stop(99%, var(--gradient2))
      );
      background: linear-gradient(180deg, var(--gradient1) 0%, var(--gradient2) 99%);
      background-color: var(--theme-deafult);
  }
  .title1.title5 .title-inner1 {
      padding-bottom: 0;
      margin-bottom: 0;
  }
  .title1.title5 .title-inner1:after {
      display: none;
  }
  .title1.title5 hr[role="tournament6"] {
      border: 0px solid;
      height: 1px;
      background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(rgba(0, 0, 0, 0)),
          color-stop(var(--theme-deafult)),
          to(rgba(0, 0, 0, 0))
      );
      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--theme-deafult), rgba(0, 0, 0, 0));
      display: block;
      width: 25%;
      margin: 15px auto 30px auto;
  }
  .title1.title5 hr[role="tournament6"]::before {
      position: absolute;
      background-color: #efefef;
      border: 1px solid;
      border-color: var(--theme-deafult);
      padding: 5px;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      left: 50%;
      margin: -6px 0px 0px 0;
      content: "";
  }
  
  .title2 {
      text-align: center;
  }
  .title2 h4 {
      color: var(--theme-deafult);
      padding-bottom: 10px;
      margin-bottom: 0;
      text-transform: uppercase;
      margin-top: -3px;
  }
  .title2 .title-inner2 {
      margin-bottom: 50px;
      position: relative;
      display: inline-block;
      padding: 0 25px;
  }
  .title2 .title-inner2:after {
      position: absolute;
      height: 5px;
      width: 100%;
      background-color: var(--theme-deafult);
      opacity: 0.4;
      content: "";
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 3px;
      z-index: -1;
  }
  
  .title3 {
      text-align: center;
  }
  .title3 h4 {
      color: var(--theme-deafult);
      padding-bottom: 10px;
      margin-bottom: 5px;
      margin-top: -3px;
  }
  .title3 .title-inner3 {
      margin-bottom: 20px;
      position: relative;
      margin-top: -5px;
  }
  .title3 .line {
      position: relative;
      height: 5px;
      width: 45px;
      background-color: var(--theme-deafult);
      content: "";
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 0;
      margin-bottom: 50px;
  }
  .title3 .line:after,
  .title3 .line:before {
      position: absolute;
      height: 5px;
      width: 10px;
      content: "";
      background-color: var(--theme-deafult);
  }
  .title3 .line:after {
      right: 50px;
  }
  .title3 .line:before {
      left: 50px;
  }
  
  .title4 {
      text-align: center;
  }
  .title4 .title-inner4 {
      padding-bottom: 25px;
      margin-bottom: 0;
      position: relative;
      margin-top: -5px;
  }
  .title4 .line {
      position: relative;
      height: 1px;
      width: 180px;
      background-color: var(--theme-deafult);
      margin: 0 auto;
      margin-bottom: 55px;
      bottom: 0;
      top: 0;
  }
  .title4 .line:after,
  .title4 .line:before {
      position: absolute;
      height: 10px;
      width: 10px;
      content: "";
      background-color: var(--theme-deafult);
      top: -4px;
  }
  .title4 .line:after {
      left: 78px;
  }
  .title4 .line:before {
      left: 64px;
  }
  .title4 .line span:after,
  .title4 .line span:before {
      position: absolute;
      height: 10px;
      width: 10px;
      content: "";
      background-color: var(--theme-deafult);
      top: -4px;
  }
  .title4 .line span:after {
      right: 78px;
  }
  .title4 .line span:before {
      right: 64px;
  }
  
  .title6 {
      text-align: center;
  }
  .title6 h2 {
      margin-top: -5px;
  }
  
  .title-borderless {
      margin-bottom: 30px;
      text-align: center;
      margin-top: -5px;
  }
  
  /*=====================
        1.3.Brand logo CSS start
    ==========================*/
  .logo-block a:focus {
      outline: none;
  }
  
  .logo-block img {
      -webkit-filter: grayscale(100%);
      filter: grayscale(100%);
      opacity: 0.5;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
      margin: 0 auto;
  }
  .logo-block img:focus {
      outline: none;
  }
  .logo-block img:hover {
      -webkit-filter: grayscale(0);
      filter: grayscale(0);
      opacity: 1;
      -webkit-transition: 0.5s ease;
      transition: 0.5s ease;
  }
  
  .footer-logo {
      a {
          color: white !important;
          text-transform: uppercase;
          font-weight: bold;
      }
  }
 
      `}</style>
    );
  };
  