const CardTemplateStyle2 = () => {
  return (
    <style jsx="true">{`
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
  
  /*=====================
      10.Product Box CSS start
  ==========================*/
  .absolute-product .theme-tab .tab-title .current a {
      font-weight: 700;
  }
  
  .absolute-product .product-box {
      width: 100%;
      display: inline-block;
      padding-bottom: 10px;
      -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
      border-radius: 5px;
  }
  .absolute-product .product-box .img-wrapper {
      border-radius: 5px 5px 0 0;
  }
  .absolute-product .product-box .product-detail {
      text-align: center;
      margin-top: 0;
      padding: 0 15px;
  }
  .absolute-product .product-box .product-detail .color-variant {
      padding-top: 5px;
  }
  .absolute-product .product-box .product-detail .color-variant li {
      height: 16px;
      width: 16px;
  }
  .absolute-product .product-box .product-detail .cart-bottom {
      border-top: 1px solid #ddd;
      padding-top: 10px;
      margin-top: 10px;
  }
  .absolute-product .product-box .product-detail .cart-bottom button {
      border: none;
      background-color: transparent;
      padding: 0;
  }
  .absolute-product .product-box .product-detail .cart-bottom i {
      color: #828282;
      font-size: 18px;
      padding-right: 7px;
      padding-left: 7px;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .absolute-product .product-box .product-detail .cart-bottom i:hover {
      color: var(--theme-deafult);
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .absolute-product .product-box .product-detail .rating {
      margin-top: 10px;
  }
  
  .absolute-product .slick-slider .product-box {
      margin-bottom: 3px;
  }
  
  .product-m .slick-list {
      margin-left: -15px;
      margin-right: -15px;
  }
  
  .product-m .slick-slide > div {
      margin: 0 15px;
  }
  
  .color-variant li {
      display: inline-block;
      height: 20px;
      width: 20px;
      border-radius: 100%;
      margin-right: 5px;
      -webkit-transition: all 0.1s ease;
      transition: all 0.1s ease;
      vertical-align: middle;
  }
  
  .image-swatch {
      margin-bottom: 10px;
  }
  .image-swatch li img {
      width: 33px;
      height: 33px;
      padding: 2px;
      border: 1px solid #dddddd;
      margin-right: 5px;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .image-swatch li:last-child {
      margin-right: 0;
  }
  .image-swatch li.active img {
      border: 1px solid var(--theme-deafult);
  }
  .image-swatch li:hover img {
      border: 1px solid var(--theme-deafult);
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  
  .no-slider .product-box {
      width: 100%;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 25%;
      flex: 0 0 25%;
      max-width: calc(25% - 30px);
      margin: 0 15px 30px;
  }
  .no-slider .product-box:nth-last-child(-n + 4) {
      margin: 0 15px 0;
  }
  
  .no-slider.five-product .product-box {
      width: 100%;
      -webkit-box-flex: 0;
      -ms-flex: 0 0 20%;
      flex: 0 0 20%;
      max-width: calc(20% - 30px);
      margin: 0 15px 30px;
  }
  .no-slider.five-product .product-box:nth-last-child(-n + 5) {
      margin: 0 15px 0;
  }
  
  .product-para p {
      margin-bottom: 0;
      padding-bottom: 30px;
      line-height: 24px;
      letter-spacing: 0.05em;
  }
  
  .product-box,
  .product-wrap {
      position: relative;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      vertical-align: middle;
  }
  .product-box .img-block,
  .product-wrap .img-block {
      background-color: #f9f9f9;
      position: relative;
      overflow: hidden;
  }
  .product-box .img-block .front,
  .product-wrap .img-block .front {
      opacity: 1;
      top: 0;
      left: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box .img-block .front a,
  .product-wrap .img-block .front a {
      display: block;
      width: 100%;
  }
  .product-box .img-block .back,
  .product-wrap .img-block .back {
      opacity: 0;
      position: absolute;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      top: 0;
      left: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      width: 100%;
  }
  .product-box .img-block .back a,
  .product-wrap .img-block .back a {
      display: block;
      width: 100%;
  }
  .product-box .img-block .lable-wrapper,
  .product-wrap .img-block .lable-wrapper {
      margin: 0 auto;
      top: 40px;
      position: absolute;
      left: 0;
      right: 0;
      text-align: center;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      z-index: 2;
  }
  .product-box .img-block .lable-wrapper .lable1,
  .product-box .img-block .lable-wrapper .lable2,
  .product-wrap .img-block .lable-wrapper .lable1,
  .product-wrap .img-block .lable-wrapper .lable2 {
      font-size: 14px;
      padding: 10px 14px 10px 20px;
      display: inline-block;
      text-transform: uppercase;
      text-align: center;
  }
  .product-box .img-block .lable-wrapper .lable1,
  .product-wrap .img-block .lable-wrapper .lable1 {
      background-color: var(--theme-deafult);
      color: #ffffff;
      border-bottom-left-radius: 25px;
      border-top-left-radius: 25px;
  }
  .product-box .img-block .lable-wrapper .lable2,
  .product-wrap .img-block .lable-wrapper .lable2 {
      background-color: #ffffff;
      color: #000000;
      border-bottom-right-radius: 25px;
      border-top-right-radius: 25px;
  }
  .product-box .img-wrapper,
  .product-wrap .img-wrapper {
      position: relative;
      overflow: hidden;
      z-index: 0;
  }
  .product-box .img-wrapper .front,
  .product-wrap .img-wrapper .front {
      opacity: 1;
      top: 0;
      left: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box .img-wrapper .back,
  .product-wrap .img-wrapper .back {
      opacity: 0;
      position: absolute;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      top: 0;
      left: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      -webkit-transform: translateX(-100px);
      transform: translateX(-100px);
      width: 100%;
  }
  .product-box .img-wrapper .cart-box,
  .product-wrap .img-wrapper .cart-box {
      position: absolute;
      margin: 0 auto;
      display: inline-block;
      right: 0;
      left: 0;
      border-radius: 50px;
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
      padding: 12px 15px;
      -webkit-box-shadow: 0 0 12px 0 #dddddd;
      box-shadow: 0 0 12px 0 #dddddd;
      bottom: 30px;
      background-color: #ffffff;
      opacity: 0;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
  }
  .product-box .img-wrapper .cart-box button,
  .product-wrap .img-wrapper .cart-box button {
      background: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      border: none;
      padding: 0;
  }
  .product-box .img-wrapper .cart-box i,
  .product-wrap .img-wrapper .cart-box i {
      color: #6f6f6f;
      font-size: 18px;
      padding-left: 8px;
      padding-right: 8px;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      display: inline-block;
  }
  .product-box .img-wrapper .cart-box i:hover,
  .product-wrap .img-wrapper .cart-box i:hover {
      color: var(--theme-deafult);
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
  }
  .product-box .img-wrapper .lable-block .lable3,
  .product-wrap .img-wrapper .lable-block .lable3 {
      border-radius: 100%;
      background-color: var(--theme-deafult);
      text-align: center;
      font-size: 14px;
      font-weight: 700;
      position: absolute;
      padding: 12px 6px;
      text-transform: uppercase;
      color: #ffffff;
      top: 7px;
      left: 7px;
      z-index: 1;
  }
  .product-box .img-wrapper .lable-block .lable4,
  .product-wrap .img-wrapper .lable-block .lable4 {
      position: absolute;
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      -webkit-writing-mode: vertical-rl;
      -ms-writing-mode: tb-rl;
      writing-mode: vertical-rl;
      -webkit-transform: rotate(-180deg);
      transform: rotate(-180deg);
      top: 7px;
      right: 7px;
      letter-spacing: 0.1em;
      z-index: 1;
  }
  .product-box .cart-info,
  .product-box .cart-wrap,
  .product-wrap .cart-info,
  .product-wrap .cart-wrap {
      position: absolute;
      bottom: 40px;
      text-align: center;
      margin: 0 auto;
      display: inline-block;
      right: 0;
      left: 0;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      opacity: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box .cart-info a [class^="ti-"],
  .product-box .cart-info a [class*=" ti-"],
  .product-box .cart-wrap a [class^="ti-"],
  .product-box .cart-wrap a [class*=" ti-"],
  .product-wrap .cart-info a [class^="ti-"],
  .product-wrap .cart-info a [class*=" ti-"],
  .product-wrap .cart-wrap a [class^="ti-"],
  .product-wrap .cart-wrap a [class*=" ti-"] {
      display: inline-block;
  }
  .product-box .cart-info.cart-wrap,
  .product-box .cart-wrap.cart-wrap,
  .product-wrap .cart-info.cart-wrap,
  .product-wrap .cart-wrap.cart-wrap {
      bottom: 0;
      text-align: right;
      left: unset;
  }
  .product-box .cart-info.cart-wrap i,
  .product-box .cart-wrap.cart-wrap i,
  .product-wrap .cart-info.cart-wrap i,
  .product-wrap .cart-wrap.cart-wrap i {
      display: block;
      padding-bottom: 10px;
      padding-top: 10px;
  }
  .product-box .cart-info.cart-wrap.cart-effect-left,
  .product-box .cart-wrap.cart-wrap.cart-effect-left,
  .product-wrap .cart-info.cart-wrap.cart-effect-left,
  .product-wrap .cart-wrap.cart-wrap.cart-effect-left {
      left: 0;
      right: unset;
  }
  .product-box .cart-info button,
  .product-box .cart-wrap button,
  .product-wrap .cart-info button,
  .product-wrap .cart-wrap button {
      background: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      border: none;
      padding: 0;
  }
  .product-box .cart-info i,
  .product-box .cart-wrap i,
  .product-wrap .cart-info i,
  .product-wrap .cart-wrap i {
      color: #6f6f6f;
      font-size: 18px;
      padding-right: 10px;
      padding-left: 10px;
  }
  .product-box .cart-info i:hover,
  .product-box .cart-wrap i:hover,
  .product-wrap .cart-info i:hover,
  .product-wrap .cart-wrap i:hover {
      color: var(--theme-deafult);
  }
  .product-box .cart-detail,
  .product-wrap .cart-detail {
      position: absolute;
      top: 15px;
      right: 20px;
      opacity: 0;
  }
  .product-box .cart-detail i,
  .product-wrap .cart-detail i {
      color: #6f6f6f;
      font-size: 18px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding-top: 8px;
      padding-bottom: 8px;
  }
  .product-box .cart-detail button,
  .product-wrap .cart-detail button {
      background: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      border: none;
      padding: 0;
  }
  .product-box .product-detail,
  .product-box .product-info,
  .product-wrap .product-detail,
  .product-wrap .product-info {
      padding-left: 5px;
  }
  .product-box .product-detail .rating,
  .product-box .product-info .rating,
  .product-wrap .product-detail .rating,
  .product-wrap .product-info .rating {
      margin-top: 15px;
  }
  .product-box .product-detail .rating i,
  .product-box .product-info .rating i,
  .product-wrap .product-detail .rating i,
  .product-wrap .product-info .rating i {
      padding-right: 5px;
  }
  .product-box .product-detail .rating i:nth-child(-n + 4),
  .product-box .product-info .rating i:nth-child(-n + 4),
  .product-wrap .product-detail .rating i:nth-child(-n + 4),
  .product-wrap .product-info .rating i:nth-child(-n + 4) {
      color: #ffa200;
  }
  .product-box .product-detail .rating i:last-child,
  .product-box .product-info .rating i:last-child,
  .product-wrap .product-detail .rating i:last-child,
  .product-wrap .product-info .rating i:last-child {
      color: #dddddd;
  }
  .product-box .product-detail h6,
  .product-box .product-info h6,
  .product-wrap .product-detail h6,
  .product-wrap .product-info h6 {
      line-height: 1;
      margin-bottom: 0;
      padding-top: 2px;
      padding-bottom: 5px;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      font-size: 16px;
  }
  .product-box .product-detail h4,
  .product-box .product-info h4,
  .product-wrap .product-detail h4,
  .product-wrap .product-info h4 {
      font-size: 18px;
      color: #222222;
      font-weight: 700;
      margin-bottom: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box .product-detail .color-variant,
  .product-box .product-info .color-variant,
  .product-wrap .product-detail .color-variant,
  .product-wrap .product-info .color-variant {
      padding-top: 15px;
  }
  .product-box .product-detail .color-variant li,
  .product-box .product-info .color-variant li,
  .product-wrap .product-detail .color-variant li,
  .product-wrap .product-info .color-variant li {
      display: inline-block;
      height: 20px;
      width: 20px;
      border-radius: 100%;
      margin-right: 5px;
      -webkit-transition: all 0.1s ease;
      transition: all 0.1s ease;
      cursor: pointer;
  }
  .product-box .product-info,
  .product-wrap .product-info {
      padding: 0;
      text-align: center;
      position: relative;
  }
  .product-box .product-info .add-btn,
  .product-wrap .product-info .add-btn {
      position: absolute;
      bottom: 110px;
      margin: 0 auto;
      left: 0;
      right: 0;
      opacity: 0;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      z-index: 1;
  }
  .product-box .product-info .add-btn i,
  .product-wrap .product-info .add-btn i {
      color: var(--theme-deafult);
  }
  .product-box .product-info .add-btn .btn-outline,
  .product-wrap .product-info .add-btn .btn-outline {
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      color: var(--theme-deafult);
  }
  .product-box .product-info .add-btn .btn-outline:hover,
  .product-wrap .product-info .add-btn .btn-outline:hover {
      color: #ffffff;
  }
  .product-box .product-info .add-btn .btn-outline:hover i,
  .product-wrap .product-info .add-btn .btn-outline:hover i {
      color: #ffffff;
  }
  .product-box.effect-center .front img,
  .product-wrap.effect-center .front img {
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box.effect-center .img-wrapper .cart-box,
  .product-wrap.effect-center .img-wrapper .cart-box {
      bottom: 20%;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box:hover.effect-center .front img,
  .product-wrap:hover.effect-center .front img {
      opacity: 0.3;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box:hover.effect-center .img-wrapper .cart-box,
  .product-wrap:hover.effect-center .img-wrapper .cart-box {
      bottom: 35%;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box:hover .img-block .first,
  .product-box:hover .img-wrapper .first,
  .product-wrap:hover .img-block .first,
  .product-wrap:hover .img-wrapper .first {
      opacity: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box:hover .img-block .back,
  .product-box:hover .img-wrapper .back,
  .product-wrap:hover .img-block .back,
  .product-wrap:hover .img-wrapper .back {
      opacity: 1;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      -webkit-transform: translateX(0);
      transform: translateX(0);
  }
  .product-box:hover .cart-info,
  .product-wrap:hover .cart-info {
      opacity: 1;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box:hover .cart-info button,
  .product-wrap:hover .cart-info button {
      -webkit-animation: fadeInUp 300ms ease-in-out;
      animation: fadeInUp 300ms ease-in-out;
  }
  .product-box:hover .cart-info a:nth-child(2) i,
  .product-wrap:hover .cart-info a:nth-child(2) i {
      -webkit-animation: fadeInUp 500ms ease-in-out;
      animation: fadeInUp 500ms ease-in-out;
  }
  .product-box:hover .cart-info a:nth-child(3) i,
  .product-wrap:hover .cart-info a:nth-child(3) i {
      -webkit-animation: fadeInUp 700ms ease-in-out;
      animation: fadeInUp 700ms ease-in-out;
  }
  .product-box:hover .cart-info a:nth-child(4) i,
  .product-wrap:hover .cart-info a:nth-child(4) i {
      -webkit-animation: fadeInUp 1000ms ease-in-out;
      animation: fadeInUp 1000ms ease-in-out;
  }
  .product-box:hover .cart-wrap button,
  .product-wrap:hover .cart-wrap button {
      -webkit-animation: fadeInRight 300ms ease-in-out;
      animation: fadeInRight 300ms ease-in-out;
  }
  .product-box:hover .cart-wrap a:nth-child(2) i,
  .product-wrap:hover .cart-wrap a:nth-child(2) i {
      -webkit-animation: fadeInRight 500ms ease-in-out;
      animation: fadeInRight 500ms ease-in-out;
  }
  .product-box:hover .cart-wrap a:nth-child(3) i,
  .product-wrap:hover .cart-wrap a:nth-child(3) i {
      -webkit-animation: fadeInRight 700ms ease-in-out;
      animation: fadeInRight 700ms ease-in-out;
  }
  .product-box:hover .cart-wrap a:nth-child(4) i,
  .product-wrap:hover .cart-wrap a:nth-child(4) i {
      -webkit-animation: fadeInRight 1000ms ease-in-out;
      animation: fadeInRight 1000ms ease-in-out;
  }
  .product-box:hover .cart-wrap.cart-effect-left button,
  .product-wrap:hover .cart-wrap.cart-effect-left button {
      -webkit-animation: fadeInLeft 300ms ease-in-out;
      animation: fadeInLeft 300ms ease-in-out;
  }
  .product-box:hover .cart-wrap.cart-effect-left a:nth-child(2) i,
  .product-wrap:hover .cart-wrap.cart-effect-left a:nth-child(2) i {
      -webkit-animation: fadeInLeft 500ms ease-in-out;
      animation: fadeInLeft 500ms ease-in-out;
  }
  .product-box:hover .cart-wrap.cart-effect-left a:nth-child(3) i,
  .product-wrap:hover .cart-wrap.cart-effect-left a:nth-child(3) i {
      -webkit-animation: fadeInLeft 700ms ease-in-out;
      animation: fadeInLeft 700ms ease-in-out;
  }
  .product-box:hover .cart-wrap.cart-effect-left a:nth-child(4) i,
  .product-wrap:hover .cart-wrap.cart-effect-left a:nth-child(4) i {
      -webkit-animation: fadeInLeft 1000ms ease-in-out;
      animation: fadeInLeft 1000ms ease-in-out;
  }
  .product-box:hover .cart-detail,
  .product-wrap:hover .cart-detail {
      opacity: 1;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .product-box:hover .cart-detail button,
  .product-wrap:hover .cart-detail button {
      -webkit-animation: fadeInRight 300ms ease-in-out;
      animation: fadeInRight 300ms ease-in-out;
  }
  .product-box:hover .cart-detail a:nth-child(2) i,
  .product-wrap:hover .cart-detail a:nth-child(2) i {
      -webkit-animation: fadeInRight 500ms ease-in-out;
      animation: fadeInRight 500ms ease-in-out;
  }
  .product-box:hover .cart-detail a:nth-child(3) i,
  .product-wrap:hover .cart-detail a:nth-child(3) i {
      -webkit-animation: fadeInRight 700ms ease-in-out;
      animation: fadeInRight 700ms ease-in-out;
  }
  .product-box:hover .cart-detail a:nth-child(4) i,
  .product-wrap:hover .cart-detail a:nth-child(4) i {
      -webkit-animation: fadeInRight 1000ms ease-in-out;
      animation: fadeInRight 1000ms ease-in-out;
  }
  .product-box:hover .product-info .add-btn,
  .product-wrap:hover .product-info .add-btn {
      opacity: 1;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      -webkit-animation: fadeInUp 500ms ease-in-out;
      animation: fadeInUp 500ms ease-in-out;
  }
  .product-box:hover .img-wrapper .cart-box,
  .product-wrap:hover .img-wrapper .cart-box {
      opacity: 1;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
      -webkit-animation: fadeInUp 400ms ease-in-out;
      animation: fadeInUp 400ms ease-in-out;
  }
  
  .addtocart_count {
      position: relative;
  }
  .addtocart_count .product-box .product-detail {
      text-align: center;
  }
  .addtocart_count .product-box .cart-info {
      bottom: 40px;
      right: 10px;
  }
  .addtocart_count .product-box .cart-info a i {
      background-color: #e2e2e2;
      border-radius: 100%;
      margin: 10px 0;
      padding: 8px;
      font-size: 16px;
      color: #313131;
  }
  .addtocart_count .product-box .add-button {
      background-color: #efefef;
      color: black;
      text-align: center;
      font-size: 18px;
      text-transform: capitalize;
      width: 100%;
      padding: 5px 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      border: none;
      cursor: pointer;
  }
  .addtocart_count .product-box:hover .cart-info a:nth-child(1) i {
      -webkit-animation: fadeInRight 300ms ease-in-out;
      animation: fadeInRight 300ms ease-in-out;
  }
  .addtocart_count .product-box:hover .add-button {
      bottom: 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
  }
  .addtocart_count .addtocart_btn {
      position: relative;
  }
  .addtocart_count .addtocart_btn .cart_qty {
      width: 100%;
  }
  .addtocart_count .addtocart_btn .cart_qty.qty-box {
      position: absolute;
      bottom: 0;
      display: none;
  }
  .addtocart_count .addtocart_btn .cart_qty.qty-box .input-group .form-control {
      width: 100%;
  }
  .addtocart_count .addtocart_btn .cart_qty.qty-box .input-group .form-control:focus {
      border-color: #efefef;
      -webkit-box-shadow: none;
      box-shadow: none;
  }
  .addtocart_count .addtocart_btn .cart_qty.qty-box .input-group button {
      background: #efefef !important;
      position: absolute;
      height: 100%;
      z-index: 9;
  }
  .addtocart_count .addtocart_btn .cart_qty.qty-box .input-group button.quantity-left-minus {
      left: 0;
  }
  .addtocart_count .addtocart_btn .cart_qty.qty-box .input-group button.quantity-right-plus {
      right: 0;
  }
  .addtocart_count .addtocart_btn .cart_qty.qty-box .input-group button i {
      color: #000000;
  }
  .addtocart_count .addtocart_btn .cart_qty.open {
      display: block;
  }
  
  .grid-products {
      margin-bottom: -30px;
  }
  .grid-products .product-box {
      margin-bottom: 30px;
  }
  
  .bg-title .theme-card h5.title-border {
      padding: 10px;
      color: white;
      background-color: var(--theme-deafult);
      border-radius: 5px;
  }
  
  .bg-title .theme-card .slick-prev {
      right: 30px;
  }
  .bg-title .theme-card .slick-prev:before {
      color: white;
      opacity: 1;
      font-size: 25px;
  }
  
  .bg-title .theme-card .slick-next {
      right: 6px;
  }
  .bg-title .theme-card .slick-next:before {
      color: white;
      opacity: 1;
      font-size: 25px;
  }
  
  .bg-title .theme-tab .bg-title-part {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 30px;
      margin-top: -6px;
      background-color: var(--theme-deafult);
      padding: 10px;
      border-radius: 5px;
  }
  .bg-title .theme-tab .bg-title-part .title-border {
      margin-bottom: 0;
      color: white;
      text-transform: capitalize;
  }
  .bg-title .theme-tab .bg-title-part .tab-title {
      margin-bottom: 0;
      margin-top: 0;
      margin-left: auto;
      text-align: right;
  }
  .bg-title .theme-tab .bg-title-part .tab-title li {
      font-size: 16px;
      padding-right: 0;
  }
  .bg-title .theme-tab .bg-title-part .tab-title li:first-child {
      padding-left: 0;
  }
  .bg-title .theme-tab .bg-title-part .tab-title a {
      color: rgba(255, 255, 255, 0.7);
  }
  .bg-title .theme-tab .bg-title-part .tab-title .current a {
      color: white;
  }
  
  .add_cart {
      background-color: #efefef;
      color: black;
      text-align: center;
      font-size: 18px;
      text-transform: capitalize;
      width: 100%;
      padding: 5px 0;
      -webkit-transition: all 0.5s ease;
      transition: all 0.5s ease;
      border: none;
      cursor: pointer;
  }
  
    `}</style>
  );
};

export default CardTemplateStyle2;