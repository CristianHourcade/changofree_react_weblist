import css from "styled-jsx/css";

export const HeaderStyleTemplate2 = () => {
  return (
    <style jsx="true">{`
    .count{
      font-size: 12px;
      position: absolute;
      background: #e93e6d;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      border-radius: 25px;
      left: 15px;
      bottom: 20px;
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
        background-image: linear-gradient(
          30deg,
          var(--theme-deafult) 50%,
          transparent 50%
        );
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
        background: linear-gradient(
          180deg,
          var(--gradient1) 0%,
          var(--gradient2) 99%
        );
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
        background: linear-gradient(
          -180deg,
          var(--gradient2) 0%,
          var(--gradient1) 99%
        );
        -webkit-transition: background 300ms ease-in-out;
        transition: background 300ms ease-in-out;
        color: white;
      }
      .btn-solid.btn-green {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
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
        background-image: linear-gradient(
          30deg,
          var(--theme-deafult) 50%,
          transparent 50%
        );
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
        background: linear-gradient(
          180deg,
          var(--gradient1) 0%,
          var(--gradient2) 99%
        );
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
        background-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0),
          var(--theme-deafult),
          rgba(0, 0, 0, 0)
        );
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
          2.Header CSS start
      ==========================*/
      header {
        background-color: #ffffff;
      }
      header.header-absolute {
        position: absolute;
        width: 100%;
        top: 62px;
      }
      header.header-absolute .main-menu {
        background-color: white;
      }
      header.header-absolute .main-menu .menu-left .navbar {
        padding: 20px 45px 20px 0;
      }
      header.header-absolute .main-menu .brand-logo {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-absolute .pixelstrap > li > a {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-absolute .pixelstrap > li > a:hover,
      header.header-absolute .pixelstrap > li > a:active,
      header.header-absolute .pixelstrap > li > a:focus,
      header.header-absolute .pixelstrap > li > a.highlighted {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-absolute .pixelstrap li .lable-nav {
        top: 0;
      }
      header.header-absolute .onhover-div {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-gym {
        position: absolute;
        width: 100%;
      }
      header.header-gym .main-menu {
        background-color: rgba(0, 0, 0, 0.8);
        padding: 0 15px;
        z-index: 1;
      }
      header.header-gym .main-menu .menu-left .navbar {
        padding: 20px 45px 20px 0;
      }
      header.header-gym .main-menu .menu-left .navbar i {
        color: white;
      }
      header.header-gym .main-menu .brand-logo {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-gym .main-menu .onhover-div .show-div {
        top: 70px;
      }
      header.header-gym .pixelstrap > li > a {
        padding-top: 20px;
        padding-bottom: 20px;
        color: #ffffff;
      }
      header.header-gym .pixelstrap > li > a:hover,
      header.header-gym .pixelstrap > li > a:active,
      header.header-gym .pixelstrap > li > a:focus,
      header.header-gym .pixelstrap > li > a.highlighted {
        padding-top: 20px;
        padding-bottom: 20px;
        color: #ffffff;
      }
      header.header-gym .onhover-div {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-gym .onhover-div > div img {
        -webkit-filter: brightness(54);
        filter: brightness(54);
      }
      header.header-gym .top-header {
        z-index: 9;
        position: relative;
        background: transparent;
      }
      header.header-gym .top-header .header-contact li {
        color: #fff;
      }
      header.header-gym .top-header .header-contact li i {
        color: #fff;
      }
      header.header-gym .top-header .header-dropdown li {
        color: #ffffff;
      }
      header.header-gym .top-header .header-dropdown li a {
        color: #ffffff;
      }
      header.header-gym .top-header .header-dropdown li a i {
        color: #ffffff;
        padding-right: 8px;
      }
      header.header-gym .top-header.blue-layout {
        border-bottom: 1px solid #223b7d;
      }
      header.header-black {
        background-color: #141414;
      }
      header.header-black .main-menu .menu-left .navbar {
        padding: 20px 45px 20px 0;
      }
      header.header-black .main-menu .menu-left .navbar i {
        color: white;
      }
      header.header-black .main-menu .brand-logo {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-black .pixelstrap > li > a {
        padding-top: 20px;
        padding-bottom: 20px;
        color: #e5e5e5;
      }
      header.header-black .pixelstrap > li > a:hover,
      header.header-black .pixelstrap > li > a:active,
      header.header-black .pixelstrap > li > a:focus,
      header.header-black .pixelstrap > li > a.highlighted {
        padding-top: 20px;
        padding-bottom: 20px;
        color: #e5e5e5;
      }
      header.header-black .pixelstrap li .lable-nav {
        top: 0;
      }
      header.header-black .onhover-div {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-black .onhover-div > div img {
        -webkit-filter: brightness(54);
        filter: brightness(54);
      }
      header.header-5 {
        position: absolute;
        width: 100%;
        background-color: transparent;
      }
      header.header-5 .top-header {
        background-color: transparent;
      }
      header.header-5 .top-header .header-dropdown > li {
        padding-top: 40px;
        padding-right: 0;
      }
      header.header-5 .top-header .header-dropdown > li.mobile-account:before {
        display: none;
      }
      header.header-5
        .top-header
        .header-dropdown
        .onhover-dropdown
        .onhover-show-div {
        top: 80px;
      }
      header.header-5 .onhover-div .show-div {
        top: 80px;
      }
      header.header-5.container-med .container-fluid {
        padding-left: 50px;
        padding-right: 50px;
      }
      header.header-6 .top-header {
        background-color: var(--theme-deafult);
      }
      header.header-6 .top-header .header-contact li {
        color: #ffffff;
      }
      header.header-6 .top-header .header-contact li i {
        color: #ffffff;
      }
      header.header-6 .top-header .header-dropdown li {
        color: #ffffff;
      }
      header.header-6 .top-header .header-dropdown li a {
        color: #ffffff;
      }
      header.header-6 .top-header .header-dropdown li a i {
        color: white;
      }
      header.header-6 .mobile-search {
        display: none;
      }
      header.header-7 {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;
        background-color: transparent;
      }
      header.header-7 .main-menu .menu-left .navbar {
        padding: 25px 45px 25px 0;
      }
      header.header-7 .main-menu .menu-left .navbar i {
        color: white;
      }
      header.header-7 .main-menu .brand-logo {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      header.header-7 .onhover-div {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      header.header-7 .onhover-div img {
        -webkit-filter: brightness(100);
        filter: brightness(100);
      }
      header.header-7 .onhover-div .show-div img {
        -webkit-filter: unset;
        filter: unset;
      }
      header.header-7 .onhover-div:hover .show-div {
        -webkit-transform: translateY(-23px);
        transform: translateY(-23px);
      }
      header.header-7 .game-layout {
        background-color: rgba(0, 0, 0, 0.5);
      }
      header.header-7 .pixelstrap.sm-horizontal > li > a {
        color: white;
      }
      header.header-7 .pixelstrap.sm-horizontal > li > a:hover,
      header.header-7 .pixelstrap.sm-horizontal > li > a:active {
        color: white;
      }
      header.header-7 .top-header {
        background-color: transparent;
      }
      header.header-7 .top-header.top-header-dark .header-contact li {
        color: #ffffff;
      }
      header.header-7 .top-header.top-header-dark .header-contact li i {
        color: #ffffff;
      }
      header.header-7 .top-header.top-header-dark .header-dropdown > li {
        color: #ffffff;
      }
      header.header-7 .top-header.top-header-dark .header-dropdown > li > a {
        color: #ffffff;
      }
      header.header-7 .top-header.top-header-dark .header-dropdown > li > a i {
        color: #ffffff;
      }
      header.header-tools {
        position: absolute;
        width: 100%;
        top: 35px;
        z-index: 1;
        background-color: transparent;
      }
      header.header-tools .container {
        padding-left: 30px;
        padding-right: 30px;
      }
      header.header-tools .top-header {
        background-color: transparent;
      }
      header.header-tools .top-header .container {
        background-color: var(--theme-deafult);
      }
      header.header-tools .top-header .header-contact {
        padding: 10px 0;
      }
      header.header-tools .top-header .header-contact li {
        color: #ffffff;
      }
      header.header-tools .top-header .header-dropdown li {
        color: #ffffff;
        padding: 10px 25px;
      }
      header.header-tools .top-header .header-dropdown li a i {
        color: #ffffff;
      }
      header.header-tools .logo-menu-part > .container {
        background-color: #fff;
        border-bottom: 2px solid var(--theme-deafult);
      }
      header.header-tools .main-menu .menu-left .navbar {
        padding: 25px 45px 25px 0;
      }
      header.header-tools .main-menu .brand-logo {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      header.header-tools .pixelstrap.sm-horizontal > li > a {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      header.header-tools .pixelstrap.sm-horizontal > li > a:hover,
      header.header-tools .pixelstrap.sm-horizontal > li > a:active,
      header.header-tools .pixelstrap.sm-horizontal > li > a:focus,
      header.header-tools .pixelstrap.sm-horizontal > li > a.highlighted {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      header.header-tools .pixelstrap.sm-horizontal li .lable-nav {
        top: 5px;
      }
      header.header-tools .onhover-div {
        padding-top: 25px;
        padding-bottom: 25px;
      }
      header.green-gradient .top-header {
        background: var(--theme-deafult);
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
      }
      header.green-gradient .top-header .header-contact {
        padding: 10px 0;
      }
      header.green-gradient .top-header .header-contact li {
        color: #ffffff;
      }
      header.green-gradient .top-header .header-contact li i {
        color: #ffffff;
      }
      header.green-gradient .top-header .header-dropdown li {
        color: #ffffff;
        padding: 10px 25px;
      }
      header.green-gradient .top-header .header-dropdown li a {
        color: #ffffff;
      }
      header.green-gradient .top-header .header-dropdown li a i {
        color: #ffffff;
      }
      header.green-gradient .pixelstrap li .lable-nav {
        background: var(--theme-deafult);
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
      }
      header.header-metro {
        position: absolute;
        width: 100%;
        background-color: transparent;
      }
      header.header-metro .top-header {
        background-color: transparent;
        z-index: 9;
        position: relative;
      }
      header.header-metro .metro {
        background-color: white;
        z-index: 1;
        position: relative;
      }
      header.left-header .top-header {
        padding-left: 300px;
        background-color: #ffffff;
      }
      header.left-header .top-header .header-dropdown .mobile-wishlist img,
      header.left-header .top-header .header-dropdown .mobile-account img {
        display: block;
      }
      header.left-header .top-header .header-dropdown .mobile-wishlist i,
      header.left-header .top-header .header-dropdown .mobile-account i {
        display: none;
      }
      header.left-header .onhover-div {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      header.left-header .onhover-div > div img {
        width: 20px;
        height: auto;
      }
      header.left-header .onhover-div .show-div {
        top: 56px;
      }
      header.left-header .sidenav {
        left: 0;
        -webkit-box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);
        box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25);
      }
      header.left-header .sidenav .sidebar-back {
        display: none;
      }
      header.left-header .sidenav nav {
        background-color: #ffffff;
      }
      header.left-header .sidenav .pixelstrap > li > a {
        padding: 10px 0 20px 0;
        background-color: #ffffff;
      }
      header.left-header .sidenav .pixelstrap > li > a:hover,
      header.left-header .sidenav .pixelstrap > li > a:focus,
      header.left-header .sidenav .pixelstrap > li > a.highlighted {
        padding: 10px 0 20px 0;
        background-color: #ffffff;
      }
      header.left-header .sidenav .pixelstrap > li .lable-nav {
        top: -12px;
        background-color: #eeeeee;
      }
      header.left-header .sidenav .pixelstrap > li .lable-nav:before {
        border-top: 5px solid #ff4c3b;
      }
      header.left-header .sidenav .pixelstrap > li .lable-nav.grey-lable {
        background-color: #4d6171;
      }
      header.left-header
        .sidenav
        .pixelstrap
        > li
        .lable-nav.grey-lable:before {
        border-top: 5px solid #4d6171;
      }
      header.left-header .sidenav .left-sidebar_search {
        width: 100%;
        background-color: #ffffff;
      }
      header.left-header .sidenav .left-sidebar_search input {
        height: 55px;
        width: 95%;
        border: none;
        padding-left: 15px;
        background-color: transparent;
      }
      header.left-header .sidenav .left-sidebar_search .btn-search {
        position: absolute;
        right: 10px;
        top: 20px;
        border: none;
        background-color: transparent;
      }
      header.left-header .sidenav .left-sidebar_center {
        padding: 40px 0 30px 30px;
        background-color: #ffffff;
      }
      header.left-header .sidenav .bottom-section {
        padding: 70px 25px;
      }
      header.left-header .sidenav .bottom-section .icon_settings li {
        display: inline-block;
      }
      header.left-header
        .sidenav
        .bottom-section
        .icon_settings
        .shopping-cart {
        position: relative;
      }
      header.left-header
        .sidenav
        .bottom-section
        .icon_settings
        .shopping-cart
        .shopping-count {
        width: 18px;
        height: 18px;
        background-color: #ff4c3b;
        color: white;
        position: absolute;
        border-radius: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        top: -7px;
        right: 7px;
      }
      header.left-header .sidenav .bottom-section ul li {
        display: inline-block;
        padding: 8px 15px 8px 0;
      }
      header.left-header .sidenav .bottom-section ul li a {
        font-size: 16px;
        text-transform: capitalize;
        color: #222222;
      }
      header.left-header .sidenav .bottom-section ul li a i {
        font-size: 18px;
        padding-right: 5px;
        color: #222222;
      }
      header.left-header .sidenav .bottom-section .leftside_setting .language,
      header.left-header .sidenav .bottom-section .leftside_setting .currency {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      header.left-header
        .sidenav
        .bottom-section
        .leftside_setting
        .language
        h5,
      header.left-header
        .sidenav
        .bottom-section
        .leftside_setting
        .currency
        h5 {
        margin-bottom: 0;
        text-transform: capitalize;
        color: #999;
        margin-top: 0;
      }
      header.left-header
        .sidenav
        .bottom-section
        .leftside_setting
        .language
        select,
      header.left-header
        .sidenav
        .bottom-section
        .leftside_setting
        .currency
        select {
        margin-left: 10px;
        border: none;
        outline: none;
        text-transform: capitalize;
        color: #222222;
      }
      header.left-header .sidenav .bottom-section .leftside_setting h5 {
        margin-top: 10px;
      }
      header.left-header .sidenav .leftside_social {
        position: relative;
        width: 100%;
        padding: 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-top: 1px dashed #dddddd;
      }
      header.left-header .sidenav .leftside_social .footer-social {
        margin-top: 0;
      }
      header.left-header .sidenav .leftside_social .footer-social i {
        font-size: 18px;
      }
      header.left-header .sidenav .leftside_social .footer-social li {
        padding: 10px;
      }
      header.left-header .sidenav .leftside_social .call_us h5 {
        text-align: center;
      }
      header.left-header .sidenav .leftside_social .call_us h5 span {
        display: block;
      }
      header.left-header .main-menu {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }
      header.left-header .main-menu .brand-logo {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-bottom: 1px dashed #dddddd;
      }
      header.left-header .main-menu .menu-right .header-dropdown > li img {
        width: 20px;
        height: auto;
      }
      header.left-header .main-menu .menu-right .icon-nav .onhover-div > img {
        width: 20px;
        height: auto;
      }
      header.left-header .main-menu .menu-left .navbar {
        display: none;
      }
      header.left-header .main-menu .menu-left .mobile-logo {
        display: none;
      }
      header.left-header .search-overlay {
        padding-left: 300px;
      }
      header.video-header .top-header {
        background-color: var(--theme-deafult);
      }
      header.video-header .top-header .header-contact {
        padding: 10px 0;
      }
      header.video-header .top-header .header-contact li {
        color: #ffffff;
      }
      header.video-header .top-header .header-dropdown li {
        padding: 10px 25px;
        color: #ffffff;
      }
      header.video-header .top-header .header-dropdown li a i {
        color: #ffffff;
      }
      header.header-christmas {
        position: absolute;
        width: 100%;
      }
      header.header-christmas .main-menu .menu-left .navbar {
        padding: 20px 45px 20px 0;
      }
      header.header-christmas .main-menu .menu-left .navbar i {
        color: white;
      }
      header.header-christmas .main-menu .brand-logo {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-christmas .pixelstrap > li > a {
        padding-top: 20px;
        padding-bottom: 20px;
        color: #ffffff;
      }
      header.header-christmas .pixelstrap > li > a:hover,
      header.header-christmas .pixelstrap > li > a:active,
      header.header-christmas .pixelstrap > li > a:focus,
      header.header-christmas .pixelstrap > li > a.highlighted {
        padding-top: 20px;
        padding-bottom: 20px;
        color: #ffffff;
      }
      header.header-christmas .pixelstrap li .lable-nav {
        top: 0;
      }
      header.header-christmas .onhover-div {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      header.header-christmas .onhover-div > div img {
        -webkit-filter: brightness(54);
        filter: brightness(54);
      }
      header.header-christmas .top-header {
        z-index: 9;
        position: relative;
        background: transparent;
        border-bottom: 1px solid #d13b3c;
      }
      header.header-christmas .top-header .header-contact li {
        color: #fff;
        font-size: 16px;
      }
      header.header-christmas .top-header .header-contact li i {
        color: #fff;
      }
      header.header-christmas .top-header .header-dropdown li {
        color: #ffffff;
      }
      header.header-christmas .top-header .header-dropdown li a {
        color: #ffffff;
      }
      header.header-christmas .top-header .header-dropdown li a i {
        color: #ffffff;
      }
      header.header-christmas .top-header.blue-layout {
        border-bottom: 1px solid #223b7d;
      }
      header.header-christmas .toggle-nav {
        padding-top: 24px;
        padding-bottom: 24px;
      }
      header.header-christmas .toggle-nav i {
        color: white !important;
      }
      header.marketplace.header-tools {
        position: relative;
        width: 100%;
        top: 0;
      }
      header.marketplace .top-header {
        background-color: var(--theme-deafult);
      }
      header.marketplace .top-header .header-contact li {
        color: white;
      }
      header.marketplace .top-header .header-dropdown li {
        color: white;
      }
      header.marketplace .top-header .header-dropdown li a {
        color: white;
      }
      header.marketplace .top-header .header-dropdown li a i {
        color: white;
      }

      .color-dark .top-header {
        background-color: #2d2a25;
      }

      .hover-unset {
        position: static !important;
      }

      .onhover-dropdown {
        position: relative;
        font-size: 14px;
      }
      .onhover-dropdown:before {
        content: "\\f107";
        font-family: FontAwesome;
        position: absolute;
        right: 3px;
      }
      .onhover-dropdown .onhover-show-div {
        top: 50px;
        position: absolute;
        z-index: 10;
        background-color: #ffffff;
        -webkit-transition: all linear 0.3s;
        transition: all linear 0.3s;
        min-width: 160px;
        text-align: left;
        -webkit-box-shadow: 0 0 1px 0 #ebebeb;
        box-shadow: 0 0 1px 0 #ebebeb;
        -webkit-transform: translateY(30px);
        transform: translateY(30px);
        opacity: 0;
        visibility: hidden;
        right: 0;
        padding: 15px 20px;
        border-radius: 0 !important;
      }
      .onhover-dropdown .onhover-show-div.product-page-full {
        z-index: 99999;
      }
      .onhover-dropdown:hover .onhover-show-div {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        visibility: visible;
      }

      .onhover-div {
        position: relative;
        padding-top: 40px;
        padding-bottom: 40px;
        font-family: Lato, sans-serif;
      }
      .onhover-div img,
      .onhover-div i {
        cursor: pointer;
      }
      .onhover-div .show-div {
        top: 103px;
        position: absolute;
        z-index: 9;
        background-color: #ffffff;
        -webkit-transition: all linear 0.3s;
        transition: all linear 0.3s;
        min-width: 236px;
        text-align: left;
        -webkit-box-shadow: 0 0 1px 0 #ebebeb;
        box-shadow: 0 0 1px 0 #ebebeb;
        -webkit-transform: translateY(30px);
        transform: translateY(30px);
        opacity: 0;
        visibility: hidden;
        right: 0;
        padding: 0;
        border-radius: 0 !important;
      }
      .onhover-div:hover .show-div {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
        visibility: visible;
      }

      .search-overlay {
        height: 100%;
        width: 100%;
        display: none;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        background-color: white;
      }
      .search-overlay > div {
        height: 100%;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .search-overlay > div .overlay-content {
        width: 100%;
      }
      .search-overlay > div .overlay-content .form-control:focus {
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .search-overlay > div .overlay-content input {
        background-color: transparent;
        border: 0;
        border-bottom: 2px solid #777777;
        border-radius: 0;
        padding: 20px 0;
      }
      .search-overlay > div .overlay-content input::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: #777777;
        font-size: 18px;
      }
      .search-overlay > div .overlay-content input::-moz-placeholder {
        /* Firefox 19+ */
        color: #777777;
        font-size: 18px;
      }
      .search-overlay > div .overlay-content input:-ms-input-placeholder {
        /* IE 10+ */
        color: #777777;
        font-size: 18px;
      }
      .search-overlay > div .overlay-content input:-moz-placeholder {
        /* Firefox 18- */
        color: #777777;
        font-size: 18px;
      }
      .search-overlay > div .overlay-content button {
        position: absolute;
        top: 10px;
        background-color: transparent;
        border: 0;
        font-size: 24px;
        color: #777777;
        right: 10px;
      }
      .search-overlay > div .closebtn {
        position: fixed;
        top: 10px;
        right: 25px;
        color: #777777;
        font-size: 40px;
        cursor: pointer;
      }

      .top-header {
        background-color: #f8f8f8;
      }
      .top-header .header-contact {
        padding: 15px 0;
      }
      .top-header .header-contact li {
        color: #999999;
        font-size: 14px;
        padding-right: 25px;
      }
      .top-header .header-contact li i {
        color: var(--theme-deafult);
        padding-right: 10px;
      }
      .top-header .header-dropdown li {
        cursor: pointer;
        color: #999999;
        padding: 15px 25px;
        padding-right: 20px;
      }
      .top-header .header-dropdown li:first-child {
        padding-right: 0;
      }
      .top-header .header-dropdown li a {
        text-transform: capitalize;
        color: #999999;
      }
      .top-header .header-dropdown li i {
        padding-right: 5px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .top-header .header-dropdown li ul li {
        padding-top: 0;
        padding-bottom: 0;
      }
      .top-header .header-dropdown li a i {
        color: #999999;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .top-header .header-dropdown li a:hover i {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .top-header .header-dropdown li:hover i {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .top-header .header-dropdown .onhover-dropdown .onhover-show-div li {
        padding-left: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 15px;
        padding-bottom: 5px;
      }
      .top-header
        .header-dropdown
        .onhover-dropdown
        .onhover-show-div
        li:last-child {
        padding-bottom: 0;
      }
      .top-header .header-dropdown .onhover-dropdown .onhover-show-div li a {
        color: #333333;
      }
      .top-header.top-header-dark {
        background-color: #222222;
      }
      .top-header.top-header-dark .header-contact li {
        color: #777777;
      }
      .top-header.top-header-dark .header-contact li i {
        color: #777777;
      }
      .top-header.top-header-dark .header-dropdown li {
        color: #777777;
      }
      .top-header.top-header-dark .header-dropdown li a {
        color: #777777;
      }
      .top-header.top-header-dark .header-dropdown li a i {
        color: #777777;
      }
      .top-header.top-header-dark .header-dropdown li a:hover i {
        color: var(--theme-deafult);
      }
      .top-header.top-header-dark2 {
        background-color: #2d2a25;
      }
      .top-header.top-header-dark2 .header-contact li {
        color: #7f786d;
      }
      .top-header.top-header-dark2 .header-contact li i {
        color: #7f786d;
      }
      .top-header.top-header-dark2 .header-dropdown li {
        color: #7f786d;
      }
      .top-header.top-header-dark2 .header-dropdown li a {
        color: #7f786d;
      }
      .top-header.top-header-dark2 .header-dropdown li a i {
        color: #7f786d;
      }
      .top-header.top-header-dark2 .header-dropdown li a:hover i {
        color: var(--theme-deafult);
      }
      .top-header.top-header-dark3 {
        background-color: #393230;
      }
      .top-header.top-header-dark3 .header-contact li {
        color: #948e8c;
      }
      .top-header.top-header-dark3 .header-contact li i {
        color: #948e8c;
      }
      .top-header.top-header-dark3 .header-dropdown li {
        color: #948e8c;
      }
      .top-header.top-header-dark3 .header-dropdown li a {
        color: #948e8c;
      }
      .top-header.top-header-dark3 .header-dropdown li a i {
        color: #948e8c;
      }
      .top-header.top-header-dark3 .header-dropdown li a:hover i {
        color: var(--theme-deafult);
      }

      .layout3-menu .main-menu .menu-left .navbar i {
        font-size: 22px;
      }

      .absolute-logo {
        position: absolute;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      .main-menu {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        z-index: 9;
      }
      .main-menu.product-full-page {
        z-index: 9999;
      }
      .main-menu .brand-logo {
        display: inline-block;
        padding-top: 35px;
        padding-bottom: 35px;
      }
      .main-menu .menu-left {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .main-menu .menu-left .navbar {
        display: inline-block;
        padding: 40px 45px 40px 0;
      }
      .main-menu .menu-left .navbar i {
        font-size: 28px;
        color: #222222;
        cursor: pointer;
      }
      .main-menu .menu-left .navbar.white-navbar i {
        color: #ffffff;
      }
      .main-menu .menu-left.around-border .navbar > a {
        padding: 0;
      }
      .main-menu .menu-left.category-nav-right .navbar {
        padding-right: 0;
        padding-left: 45px;
      }
      .main-menu .menu-left.category-nav-right .navbar > a {
        padding: 0;
      }
      .main-menu .menu-left.category-nav-right .navbar i {
        color: #938d8c;
      }
      .main-menu .menu-right {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        float: right;
      }
      .main-menu .menu-right .icon-nav {
        display: inline-block;
      }
      .main-menu .menu-right .icon-nav li {
        padding-left: 20px;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div.shopping-cart {
        padding: 15px 15px;
        min-width: 270px;
        left: unset;
        right: 0;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div.shopping-cart li {
        position: relative;
        padding-bottom: 10px;
        width: 100%;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li:last-child {
        padding-bottom: 0;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .media
        img {
        height: 90px;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .media
        .media-body {
        -ms-flex-item-align: center;
        align-self: center;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .media
        .media-body
        h4 {
        color: #333333;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .media
        .media-body
        h4
        span {
        color: #777777;
        font-size: 16px;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .close-circle {
        position: absolute;
        top: 0;
        right: 0;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .close-circle
        i {
        color: #a1a1a1;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .close-circle
        i:hover {
        color: #000000;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .total {
        border-top: 1px solid #f1f5f4;
        border-bottom: 1px solid #f1f5f4;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .total
        h5 {
        text-transform: capitalize;
        margin-bottom: 0;
        color: #999999;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .total
        h5
        span {
        float: right;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .buttons
        a {
        font-size: 16px;
        color: #333333;
        text-transform: capitalize;
        font-weight: 700;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .buttons
        a:hover {
        color: var(--theme-deafult);
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .buttons
        .checkout {
        float: right;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div.setting {
        padding: 15px 20px 20px;
        min-width: 175px;
        right: 0;
        left: unset;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div.setting h6 {
        font-size: 16px;
        text-transform: capitalize;
        color: #333333;
        font-weight: 700;
        margin-bottom: 0;
        margin-top: 5px;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.setting
        h6:first-child {
        margin-top: 0;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div.setting ul li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-bottom: 0;
        padding-left: 17px;
        padding-top: 5px;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div.setting ul li a {
        color: #333333;
        font-weight: 400;
        font-size: 16px;
        text-transform: capitalize;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div li {
        padding: 0;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div li .form-control {
        border-radius: 0;
      }
      .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div
        li
        .form-control:focus {
        border: 1px solid #ced4da;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .main-menu .menu-right .icon-nav .onhover-div .show-div li .search-btn {
        padding: 8px 12px;
        background-color: var(--theme-deafult);
        color: #ffffff;
      }
      .main-menu .menu-right .icon-nav.white-icon .onhover-div img {
        -webkit-filter: brightness(5);
        filter: brightness(5);
      }
      .main-menu .menu-right .icon-nav.white-icon .onhover-div .show-div img {
        -webkit-filter: none;
        filter: none;
      }

      .nav-cat li {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-left: 25px;
        padding-right: 25px;
      }
      .nav-cat li .round-cat {
        height: 50px;
        width: 50px;
        border: 1px solid #dddddd;
        padding: 12px;
        border-radius: 100%;
        margin-right: 10px;
      }
      .nav-cat li a {
        color: #222222;
        font-size: 16px;
        text-transform: uppercase;
      }

      .sidebar-unset {
        overflow-y: unset !important;
      }

      /*=====================
          3.Home slider CSS start
      ==========================*/
      .snow-slider {
        position: relative;
      }
      .snow-slider .slick-slide {
        position: relative;
      }

      .home-slider .slick-prev,
      .home-slider .slick-next,
      .center-slider .slick-prev,
      .center-slider .slick-next {
        opacity: 0;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        margin-top: -10px;
      }
      .home-slider .slick-prev:before,
      .home-slider .slick-next:before,
      .center-slider .slick-prev:before,
      .center-slider .slick-next:before {
        font: normal normal normal 14px/1 FontAwesome;
        opacity: 1;
        color: black;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .home-slider .slick-next,
      .center-slider .slick-next {
        right: 1px;
      }
      .home-slider .slick-next:before,
      .center-slider .slick-next:before {
        content: "\\f105";
      }

      .home-slider .slick-prev,
      .center-slider .slick-prev {
        left: 1px;
        z-index: 1;
      }
      .home-slider .slick-prev:before,
      .center-slider .slick-prev:before {
        content: "\\f104";
      }

      .home-slider .home,
      .center-slider .home {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 75vh;
      }
      .home-slider .home.home-png1,
      .center-slider .home.home-png1 {
        background-image: url("/assets/images/home-banner/1.png");
      }
      .home-slider .home.home-png2,
      .center-slider .home.home-png2 {
        background-image: url("/assets/images/home-banner/2.png");
      }
      .home-slider .home.home-png3,
      .center-slider .home.home-png3 {
        background-image: url("/assets/images/home-banner/3.png");
      }
      .home-slider .home.home-png4,
      .center-slider .home.home-png4 {
        background-image: url("/assets/images/home-banner/4.png");
      }
      .home-slider .home.home-png5,
      .center-slider .home.home-png5 {
        background-image: url("/assets/images/home-banner/5.png");
      }
      .home-slider .home.home-png6,
      .center-slider .home.home-png6 {
        background-image: url("/assets/images/home-banner/6.png");
      }
      .home-slider .home.home-png7,
      .center-slider .home.home-png7 {
        background-image: url("/assets/images/home-banner/7.png");
      }
      .home-slider .home.home-png8,
      .center-slider .home.home-png8 {
        background-image: url("/assets/images/home-banner/8.png");
      }
      .home-slider .home.home-png9,
      .center-slider .home.home-png9 {
        background-image: url("/assets/images/home-banner/9.png");
      }
      .home-slider .home.home-png10,
      .center-slider .home.home-png10 {
        background-image: url("/assets/images/home-banner/10.png");
      }
      .home-slider .home.home-png11,
      .center-slider .home.home-png11 {
        background-image: url("/assets/images/home-banner/11.png");
      }
      .home-slider .home.home-png12,
      .center-slider .home.home-png12 {
        background-image: url("/assets/images/home-banner/12.png");
      }
      .home-slider .home.home-png13,
      .center-slider .home.home-png13 {
        background-image: url("/assets/images/home-banner/13.png");
      }
      .home-slider .home.home-png14,
      .center-slider .home.home-png14 {
        background-image: url("/assets/images/home-banner/14.png");
      }
      .home-slider .home.home-png15,
      .center-slider .home.home-png15 {
        background-image: url("/assets/images/home-banner/15.png");
      }
      .home-slider .home.home-png16,
      .center-slider .home.home-png16 {
        background-image: url("/assets/images/home-banner/16.png");
      }
      .home-slider .home.home-png17,
      .center-slider .home.home-png17 {
        background-image: url("/assets/images/home-banner/17.png");
      }
      .home-slider .home.home-png18,
      .center-slider .home.home-png18 {
        background-image: url("/assets/images/home-banner/18.png");
      }
      .home-slider .home.home-png19,
      .center-slider .home.home-png19 {
        background-image: url("/assets/images/home-banner/19.png");
      }
      .home-slider .home.home-png20,
      .center-slider .home.home-png20 {
        background-image: url("/assets/images/home-banner/20.png");
      }
      .home-slider .home.home-png21,
      .center-slider .home.home-png21 {
        background-image: url("/assets/images/home-banner/21.png");
      }
      .home-slider .home.home-png22,
      .center-slider .home.home-png22 {
        background-image: url("/assets/images/home-banner/22.png");
      }
      .home-slider .home.home-png23,
      .center-slider .home.home-png23 {
        background-image: url("/assets/images/home-banner/23.png");
      }
      .home-slider .home.home-png24,
      .center-slider .home.home-png24 {
        background-image: url("/assets/images/home-banner/24.png");
      }
      .home-slider .home.home-png25,
      .center-slider .home.home-png25 {
        background-image: url("/assets/images/home-banner/25.png");
      }
      .home-slider .home.home-png26,
      .center-slider .home.home-png26 {
        background-image: url("/assets/images/home-banner/26.png");
      }
      .home-slider .home.home-png27,
      .center-slider .home.home-png27 {
        background-image: url("/assets/images/home-banner/27.png");
      }
      .home-slider .home.home-png28,
      .center-slider .home.home-png28 {
        background-image: url("/assets/images/home-banner/28.png");
      }
      .home-slider .home.home-png29,
      .center-slider .home.home-png29 {
        background-image: url("/assets/images/home-banner/29.png");
      }
      .home-slider .home.home-png30,
      .center-slider .home.home-png30 {
        background-image: url("/assets/images/home-banner/30.png");
      }
      .home-slider .home.home-png31,
      .center-slider .home.home-png31 {
        background-image: url("/assets/images/home-banner/31.png");
      }
      .home-slider .home.home-png32,
      .center-slider .home.home-png32 {
        background-image: url("/assets/images/home-banner/32.png");
      }
      .home-slider .home.home-png33,
      .center-slider .home.home-png33 {
        background-image: url("/assets/images/home-banner/33.png");
      }
      .home-slider .home.home-png34,
      .center-slider .home.home-png34 {
        background-image: url("/assets/images/home-banner/34.png");
      }
      .home-slider .home.home-png35,
      .center-slider .home.home-png35 {
        background-image: url("/assets/images/home-banner/35.png");
      }
      .home-slider .home.home-png36,
      .center-slider .home.home-png36 {
        background-image: url("/assets/images/home-banner/36.png");
      }
      .home-slider .home.home-png37,
      .center-slider .home.home-png37 {
        background-image: url("/assets/images/home-banner/37.png");
      }
      .home-slider .home.home-png38,
      .center-slider .home.home-png38 {
        background-image: url("/assets/images/home-banner/38.png");
      }
      .home-slider .home.home-png39,
      .center-slider .home.home-png39 {
        background-image: url("/assets/images/home-banner/39.png");
      }
      .home-slider .home.home-png40,
      .center-slider .home.home-png40 {
        background-image: url("/assets/images/home-banner/40.png");
      }
      .home-slider .home.home-png41,
      .center-slider .home.home-png41 {
        background-image: url("/assets/images/home-banner/41.png");
      }
      .home-slider .home.home-png42,
      .center-slider .home.home-png42 {
        background-image: url("/assets/images/home-banner/42.png");
      }
      .home-slider .home.home-png43,
      .center-slider .home.home-png43 {
        background-image: url("/assets/images/home-banner/43.png");
      }
      .home-slider .home.home-png44,
      .center-slider .home.home-png44 {
        background-image: url("/assets/images/home-banner/44.png");
      }
      .home-slider .home.home-png45,
      .center-slider .home.home-png45 {
        background-image: url("/assets/images/home-banner/45.png");
      }
      .home-slider .home.home-png46,
      .center-slider .home.home-png46 {
        background-image: url("/assets/images/home-banner/46.png");
      }
      .home-slider .home.home-png47,
      .center-slider .home.home-png47 {
        background-image: url("/assets/images/home-banner/47.png");
      }
      .home-slider .home.home-png48,
      .center-slider .home.home-png48 {
        background-image: url("/assets/images/home-banner/48.png");
      }
      .home-slider .home.home-png49,
      .center-slider .home.home-png49 {
        background-image: url("/assets/images/home-banner/49.png");
      }
      .home-slider .home.home-png50,
      .center-slider .home.home-png50 {
        background-image: url("/assets/images/home-banner/50.png");
      }
      .home-slider .home.home-png51,
      .center-slider .home.home-png51 {
        background-image: url("/assets/images/home-banner/51.png");
      }
      .home-slider .home.home-png52,
      .center-slider .home.home-png52 {
        background-image: url("/assets/images/home-banner/52.png");
      }
      .home-slider .home.home-png53,
      .center-slider .home.home-png53 {
        background-image: url("/assets/images/home-banner/53.png");
      }
      .home-slider .home.home-png54,
      .center-slider .home.home-png54 {
        background-image: url("/assets/images/home-banner/54.png");
      }
      .home-slider .home.home-png55,
      .center-slider .home.home-png55 {
        background-image: url("/assets/images/home-banner/55.png");
      }
      .home-slider .home.home-png56,
      .center-slider .home.home-png56 {
        background-image: url("/assets/images/home-banner/56.png");
      }
      .home-slider .home.home-png57,
      .center-slider .home.home-png57 {
        background-image: url("/assets/images/home-banner/57.png");
      }
      .home-slider .home.home-png58,
      .center-slider .home.home-png58 {
        background-image: url("/assets/images/home-banner/58.png");
      }
      .home-slider .home.home-png59,
      .center-slider .home.home-png59 {
        background-image: url("/assets/images/home-banner/59.png");
      }
      .home-slider .home.home-png60,
      .center-slider .home.home-png60 {
        background-image: url("/assets/images/home-banner/60.png");
      }
      .home-slider .home.home-png61,
      .center-slider .home.home-png61 {
        background-image: url("/assets/images/home-banner/61.png");
      }
      .home-slider .home.home-png62,
      .center-slider .home.home-png62 {
        background-image: url("/assets/images/home-banner/62.png");
      }
      .home-slider .home.home-png63,
      .center-slider .home.home-png63 {
        background-image: url("/assets/images/home-banner/63.png");
      }
      .home-slider .home.home-png64,
      .center-slider .home.home-png64 {
        background-image: url("/assets/images/home-banner/64.png");
      }
      .home-slider .home.home-png65,
      .center-slider .home.home-png65 {
        background-image: url("/assets/images/home-banner/65.png");
      }
      .home-slider .home.home-png66,
      .center-slider .home.home-png66 {
        background-image: url("/assets/images/home-banner/66.png");
      }
      .home-slider .home.home-png67,
      .center-slider .home.home-png67 {
        background-image: url("/assets/images/home-banner/67.png");
      }
      .home-slider .home.home-png68,
      .center-slider .home.home-png68 {
        background-image: url("/assets/images/home-banner/68.png");
      }
      .home-slider .home.home-png69,
      .center-slider .home.home-png69 {
        background-image: url("/assets/images/home-banner/69.png");
      }
      .home-slider .home.home-png70,
      .center-slider .home.home-png70 {
        background-image: url("/assets/images/home-banner/70.png");
      }

      .home-slider .slider-details,
      .center-slider .slider-details {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        top: 26%;
        right: 18%;
        text-align: center;
        padding: 55px;
        width: 510px;
        height: 510px;
      }
      .home-slider .slider-details.blue-slide,
      .center-slider .slider-details.blue-slide {
        background-color: #223b7d;
      }
      .home-slider .slider-details .btn-white,
      .center-slider .slider-details .btn-white {
        margin-top: 15px;
      }
      .home-slider .slider-details h1,
      .center-slider .slider-details h1 {
        color: #ffffff;
        font-weight: 700;
      }
      .home-slider .slider-details h3,
      .center-slider .slider-details h3 {
        color: #ffffff;
        position: relative;
        text-transform: uppercase;
        display: inline-block;
      }
      .home-slider .slider-details h3:after,
      .home-slider .slider-details h3:before,
      .center-slider .slider-details h3:after,
      .center-slider .slider-details h3:before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        background-color: white;
        border-radius: 100%;
        top: 8px;
      }
      .home-slider .slider-details h3:after,
      .center-slider .slider-details h3:after {
        left: -22px;
        top: 8px;
      }
      .home-slider .slider-details h3:before,
      .center-slider .slider-details h3:before {
        top: 8px;
        right: -22px;
      }
      .home-slider .slider-details h2,
      .center-slider .slider-details h2 {
        font-weight: 400;
        margin-bottom: 0;
        font-size: 45px;
      }
      .home-slider .slider-details h4,
      .center-slider .slider-details h4 {
        font-size: 24px;
      }
      .home-slider .slider-details h2,
      .home-slider .slider-details h3,
      .home-slider .slider-details h4,
      .center-slider .slider-details h2,
      .center-slider .slider-details h3,
      .center-slider .slider-details h4 {
        color: white;
      }

      .home-slider .slider-contain,
      .center-slider .slider-contain {
        width: 100%;
        height: 75vh;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .home-slider .slider-contain h1,
      .center-slider .slider-contain h1 {
        margin-bottom: 0;
        margin-top: 10px;
        color: #222222;
      }
      .home-slider .slider-contain h4,
      .center-slider .slider-contain h4 {
        font-weight: 700;
        letter-spacing: 0.4em;
        color: #777777;
        margin-bottom: 0;
      }
      .home-slider .slider-contain .btn-solid,
      .home-slider .slider-contain .btn-outline,
      .center-slider .slider-contain .btn-solid,
      .center-slider .slider-contain .btn-outline {
        margin-top: 20px;
      }

      .home-slider .p-left .slider-contain,
      .center-slider .p-left .slider-contain {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
      }

      .home-slider .p-right .slider-contain,
      .center-slider .p-right .slider-contain {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }

      .home-slider .p-center .slider-contain,
      .center-slider .p-center .slider-contain {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .home-slider:hover .slick-prev,
      .home-slider:hover .slick-next,
      .center-slider:hover .slick-prev,
      .center-slider:hover .slick-next {
        opacity: 1;
        -webkit-transform: scale(2.5);
        transform: scale(2.5);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .home-slider:hover .slick-prev:before,
      .home-slider:hover .slick-next:before,
      .center-slider:hover .slick-prev:before,
      .center-slider:hover .slick-next:before {
        opacity: 1;
      }

      .home-slider:hover .slick-next,
      .center-slider:hover .slick-next {
        right: 100px;
      }

      .home-slider:hover .slick-prev,
      .center-slider:hover .slick-prev {
        left: 100px;
      }

      .home-slider-container .slider-contain {
        padding: 0 100px;
      }

      .center-slider {
        border-left: 1px solid #f1f5f4;
        border-right: 1px solid #f1f5f4;
      }

      .home-slider.text-white .slider-contain h1,
      .home-slider.text-white .slider-contain h4 {
        color: #ffffff;
      }

      .gym-slider .home-slider .home {
        height: 85vh;
      }
      .gym-slider .home-slider .home .slider-contain {
        height: 85vh;
      }
      .gym-slider .home-slider .home .slider-contain h4,
      .gym-slider .home-slider .home .slider-contain h1 {
        color: #ffffff;
      }

      .metro-slider .home-slider .home {
        background-position-y: 70%;
      }
      .metro-slider .home-slider .home .slider-contain {
        margin-top: 75px;
      }
      .metro-slider .home-slider .home .slider-contain h4,
      .metro-slider .home-slider .home .slider-contain h1 {
        color: #000000;
      }

      .small-slider .home-slider .home {
        height: 55vh;
      }
      .small-slider .home-slider .home .slider-contain {
        height: 55vh;
      }
      .small-slider .home-slider .home .slider-contain h4,
      .small-slider .home-slider .home .slider-contain h1 {
        color: #000000;
      }

      .height-100 .home-slider .home {
        height: 100vh;
      }

      .height-100 .home-slider .slider-contain {
        height: calc(99vh + 80px);
      }

      .height-85 .home-slider .home {
        height: 85vh;
      }

      .height-85 .home-slider .slider-contain {
        height: 85vh;
      }

      .height-85.content_top .slider-contain {
        padding-top: 150px;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
      }
      .height-85.content_top .slider-contain h1 {
        font-size: 40px;
        letter-spacing: 0.05em;
      }
      .height-85.content_top .slider-contain .btn-solid {
        padding: 9px 18px;
        margin-top: 10px;
      }
      .height-85.content_top .slider-contain h4 {
        letter-spacing: 0.08em;
      }

      .layout-7 .home {
        height: 60vh;
      }
      .layout-7 .home .slider-contain {
        height: 60vh;
      }

      .banner-slider .height-banner {
        height: 100%;
      }

      .banner-slider .home {
        height: 81vh;
      }
      .banner-slider .home .slider-contain {
        height: 81vh;
      }

      .banner-slider .home-banner > div img {
        width: 100%;
      }

      .banner-slider .home-banner > div:last-child img {
        margin-top: 30px;
      }

      .absolute-banner {
        margin-top: -105px;
      }
      .absolute-banner .absolute-bg {
        background-color: white;
        position: relative;
        padding: 25px;
        -webkit-box-shadow: 0 0 8px 0 #ddd;
        box-shadow: 0 0 8px 0 #ddd;
      }

      /*=====================
          4.Instagram CSS start
      ==========================*/
      .slick-instagram {
        margin-bottom: -5px;
      }

      .insta-title {
        position: absolute;
        height: 45px;
        width: 277px;
        background-color: #ffffff;
        z-index: 1;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .insta-title h4 {
        margin-bottom: 0;
        text-transform: capitalize;
        font-weight: 600;
      }
      .insta-title h4 span {
        color: var(--theme-deafult);
      }

      .instagram-box {
        position: relative;
        background-color: var(--theme-deafult);
        overflow: hidden;
      }
      .instagram-box img {
        width: 100%;
      }
      .instagram-box .overlay {
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
        opacity: 0;
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: var(--theme-deafult);
        top: 0;
        text-align: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-transform: scale(3) rotate(90deg);
        transform: scale(3) rotate(90deg);
      }
      .instagram-box .overlay i {
        font-size: 60px;
        color: #ffffff;
      }
      .instagram-box:hover .overlay {
        opacity: 0.5;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
        -webkit-transform: scale(1) rotate(0deg);
        transform: scale(1) rotate(0deg);
      }

      /*=====================
          5.Blog CSS start
      ==========================*/
      .blog .slick-slide {
        line-height: 1;
      }

      .blog-bg {
        background-color: #f1f5f4;
      }

      .classic-effect {
        position: relative;
        overflow: hidden;
      }
      .classic-effect:before,
      .classic-effect:after {
        background: var(--theme-deafult);
        width: 25%;
        position: absolute;
        content: "";
        opacity: 0;
        -webkit-transition: all 0.3s steps(4);
        transition: all 0.3s steps(4);
        z-index: 1;
        bottom: 100%;
        top: 0;
      }
      .classic-effect:before {
        left: 0;
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
      }
      .classic-effect:after {
        left: 25%;
        -webkit-transition-delay: 0.025s;
        transition-delay: 0.025s;
      }
      .classic-effect span:before,
      .classic-effect span:after {
        background: var(--theme-deafult);
        width: 25%;
        position: absolute;
        content: "";
        opacity: 0;
        -webkit-transition: all 0.3s steps(4);
        transition: all 0.3s steps(4);
        z-index: 1;
        bottom: 100%;
        top: 0;
      }
      .classic-effect span:before {
        left: 50%;
        -webkit-transition-delay: 0.05s;
        transition-delay: 0.05s;
      }
      .classic-effect span:after {
        left: 75%;
        -webkit-transition-delay: 0.15s;
        transition-delay: 0.15s;
      }
      .classic-effect:hover:before,
      .classic-effect:hover:after {
        bottom: 0;
        opacity: 0.5;
      }
      .classic-effect:hover span:before,
      .classic-effect:hover span:after {
        bottom: 0;
        opacity: 0.5;
      }

      .basic-effect {
        position: relative;
        overflow: hidden;
      }
      .basic-effect > div {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .basic-effect:after {
        position: absolute;
        content: "";
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--gradient1)),
          color-stop(99%, var(--gradient2))
        );
        background: linear-gradient(
          -180deg,
          var(--gradient1) 0%,
          var(--gradient2) 99%
        );
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .basic-effect:hover:after {
        opacity: 0.7;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .basic-effect:hover > div {
        -webkit-transform: scale(1.2) rotate(5deg);
        transform: scale(1.2) rotate(5deg);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .blog-details {
        text-align: center;
        padding-left: 15px;
        padding-right: 15px;
      }
      .blog-details h4 {
        color: var(--theme-deafult);
        margin-top: 25px;
        line-height: 1;
        margin-bottom: 0;
      }
      .blog-details p {
        color: #222222;
        font-size: 18px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1.5;
        letter-spacing: 0.03em;
        margin-top: 10px;
        margin-bottom: -5px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .blog-details p:hover {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .blog-details h6 {
        line-height: 1;
        letter-spacing: 0.1em;
        margin-bottom: 0;
      }

      .blog-2 .blog-details h6 {
        padding: 5px 0;
      }

      .blog-left .blog-details {
        text-align: left;
        padding: 0;
      }
      .blog-left .blog-details h4 {
        font-weight: 700;
        color: #000000;
      }
      .blog-left .blog-details p {
        font-size: 14px;
        text-transform: capitalize;
        font-weight: 400;
        margin-top: -3px;
      }
      .blog-left .blog-details h6 {
        color: black;
        margin: 12px 0;
      }

      .shadow-effect .classic-effect {
        -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
          0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;
        box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
          0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;
      }

      /*=====================
          6.Service CSS start
      ==========================*/
      .service-block {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .service-block .media {
        padding-top: 23px;
        padding-bottom: 23px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .service-block svg {
        margin-right: 12px;
        width: 60px;
        height: 60px;
      }
      .service-block svg path {
        fill: var(--theme-deafult);
      }
      .service-block h4 {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }
      .service-block p {
        text-transform: capitalize;
        margin-bottom: 0;
      }
      .service-block + .service-block {
        border-left: 1px solid #dddddd;
      }
      .service-block:hover svg {
        -webkit-animation: pulse 1000ms ease-in-out;
        animation: pulse 1000ms ease-in-out;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .service-block:hover h4 {
        color: var(--theme-deafult);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .service-block1 {
        text-align: center;
      }
      .service-block1 svg {
        margin-bottom: 20px;
        width: 60px;
        height: 60px;
      }
      .service-block1 svg path {
        fill: var(--theme-deafult);
      }
      .service-block1 h4 {
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 15px;
      }
      .service-block1 p {
        letter-spacing: 0.03em;
        margin-bottom: -3px;
        line-height: 1.5;
      }
      .service-block1:hover svg {
        -webkit-animation: pulse 1000ms ease-in-out;
        animation: pulse 1000ms ease-in-out;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .service-block1:hover h4 {
        color: var(--theme-deafult);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      /*=====================
          7.About CSS start
      ==========================*/
      .about-text p {
        line-height: 28px;
        letter-spacing: 0.06em;
        text-align: center;
        margin-bottom: 50px;
      }

      /*=====================
          8.Banner Timer CSS start
      ==========================*/
      .banner-timer {
        background-image: url("/assets/images/offer-banner.jpg");
        background-size: cover;
        margin-left: 20px;
        margin-right: 20px;
      }
      .banner-timer .banner-text {
        padding-top: 45px;
        padding-bottom: 45px;
      }
      .banner-timer .banner-text h2 {
        margin-bottom: 0;
        text-align: center;
      }
      .banner-timer .banner-text h2 span {
        color: var(--theme-deafult);
      }
      .banner-timer .timer-box {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }

      .timer {
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 40px;
        margin-top: 30px;
        background-color: #2d2a25;
        display: inline-block;
      }
      .timer p {
        font-size: 18px;
        color: #ffffff;
        margin-bottom: 0;
      }
      .timer span {
        width: 70px;
        display: inline-block;
      }
      .timer span .timer-cal {
        font-size: 12px;
        color: #777777;
      }
      .timer span .padding-l {
        padding-left: 22px;
        display: inline;
      }

      /*=====================
          9.Category CSS start
      ==========================*/
      .category-block .category-image {
        margin: 0 auto;
        text-align: center;
        border: 1px solid #dddddd;
        border-radius: 100%;
        width: 80px;
        height: 80px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
      }
      .category-block .category-image.svg-image {
        background-color: #ffffff;
      }
      .category-block .category-image.svg-image svg {
        width: 50px;
        fill: var(--theme-deafult);
      }

      .category-block .category-details {
        margin-top: 15px;
        text-align: center;
      }
      .category-block .category-details h5 {
        font-weight: 700;
        margin: 0 auto;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
        text-transform: uppercase;
      }
      .category-block .category-details h6 {
        margin-bottom: -6px;
        margin-top: -4px;
      }

      .category-block:hover .category-image {
        background-color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .category-block:hover .category-image img {
        -webkit-filter: brightness(0) invert(1);
        filter: brightness(0) invert(1);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .category-block:hover .category-image svg {
        fill: white;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .category-block:hover .category-details h5 {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .category-border {
        background-color: #f1f5f4;
        padding: 20px 10px;
      }
      .category-border .border-padding {
        padding: 0 10px;
      }
      .category-border div .category-banner {
        padding: 0;
        position: relative;
        overflow: hidden;
      }
      .category-border div .category-banner img,
      .category-border div .category-banner .bg-size {
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
      }
      .category-border div .category-banner:hover img,
      .category-border div .category-banner:hover .bg-size {
        -webkit-transform: scale(1.1) translateX(14px);
        transform: scale(1.1) translateX(14px);
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
      }
      .category-border div .category-banner:hover h2 {
        color: var(--theme-deafult);
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
      }
      .category-border div .category-banner .category-box {
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .category-border div .category-banner .category-box h2 {
        background-color: #ffffff;
        display: inline-block;
        padding: 20px 35px;
        margin-bottom: 0;
        -webkit-box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.4);
        box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.4);
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
      }

      .category-bg {
        padding: 40px 50px;
        position: relative;
        z-index: 1;
      }
      .category-bg .image-block img {
        width: 100%;
      }
      .category-bg .image-block.even:after {
        bottom: 94%;
      }
      .category-bg .image-block:after {
        content: "";
        position: absolute;
        background-color: var(--theme-deafult);
        height: 0;
        width: 40px;
        z-index: 1;
        right: 0;
        left: 0;
        margin: 0 auto;
        opacity: 0;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
        margin-top: -40px;
      }
      .category-bg .image-block:hover:after {
        opacity: 0.3;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
        height: 80px;
      }
      .category-bg .contain-block {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-align: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
        background-color: #ffffff;
      }
      .category-bg .contain-block.even:after {
        top: 94%;
      }
      .category-bg .contain-block:after {
        content: "";
        position: absolute;
        background-color: var(--theme-deafult);
        height: 0;
        width: 40px;
        z-index: 1;
        right: 0;
        left: 0;
        margin: 0 auto;
        opacity: 0;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
        bottom: 94%;
      }
      .category-bg .contain-block:hover h2 {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .category-bg .contain-block:hover h6 span {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .category-bg .contain-block:hover .category-btn {
        background-image: linear-gradient(30deg, #222222 50%, transparent 50%);
        border: 2px solid #222222;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .category-bg .contain-block:hover:after {
        opacity: 0.3;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        height: 80px;
      }
      .category-bg .contain-block h2 {
        margin-bottom: 0;
        margin-top: 15px;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
        color: #222222;
      }
      .category-bg .contain-block h6 {
        color: var(--theme-deafult);
        text-transform: uppercase;
        letter-spacing: 0.3em;
        line-height: 1;
        margin-bottom: 0;
      }
      .category-bg .contain-block h6 span {
        color: #7f786d;
        letter-spacing: 0.03em;
        font-weight: 700;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .category-bg .contain-block .category-btn {
        letter-spacing: 0.07em;
        margin-bottom: 25px;
        margin-top: 25px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .category-bg:after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        background-color: var(--theme-deafult);
        opacity: 0.3;
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      .category-m .slick-slide > div {
        margin: 0 10px;
      }

      .category-m .category-wrapper {
        border: 1px solid #dddada;
        margin: 0 auto;
        text-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
        position: relative;
      }
      .category-m .category-wrapper > div:after,
      .category-m .category-wrapper > div:before {
        content: "";
        width: 1px;
        height: 0;
        position: absolute;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear;
        background: var(--theme-deafult);
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
      }
      .category-m .category-wrapper > div:before {
        left: 0;
        top: 0;
      }
      .category-m .category-wrapper > div:after {
        right: 0;
        bottom: 0;
      }
      .category-m .category-wrapper .bg-size {
        max-width: 100px;
        margin: 0 auto;
      }
      .category-m .category-wrapper:after,
      .category-m .category-wrapper:before {
        content: "";
        width: 0;
        height: 1px;
        position: absolute;
        -webkit-transition: all 0.2s linear;
        transition: all 0.2s linear;
        background: var(--theme-deafult);
      }
      .category-m .category-wrapper:before {
        right: 0;
        top: 0;
      }
      .category-m .category-wrapper:after {
        left: 0;
        bottom: 0;
      }
      .category-m .category-wrapper:hover {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .category-m .category-wrapper:hover:after,
      .category-m .category-wrapper:hover:before {
        -webkit-transition-delay: 0s;
        transition-delay: 0s;
        width: 100%;
      }
      .category-m .category-wrapper:hover > div:after,
      .category-m .category-wrapper:hover > div:before {
        -webkit-transition-delay: 0.2s;
        transition-delay: 0.2s;
        height: 100%;
      }
      .category-m .category-wrapper img {
        display: inline;
      }
      .category-m .category-wrapper h4 {
        text-transform: uppercase;
        color: #2d2a25;
        font-weight: 700;
        margin-bottom: 0;
        padding-bottom: 25px;
        padding-top: 25px;
      }
      .category-m .category-wrapper .btn {
        margin-top: 20px;
      }
      .category-m .category-wrapper .category-link li {
        display: block;
        text-transform: capitalize;
        margin-top: 5px;
      }
      .category-m .category-wrapper .category-link li:first-child {
        margin-top: 0;
      }
      .category-m .category-wrapper .category-link li a {
        color: #948e8c;
      }
      .category-m .category-wrapper .category-link li a:hover {
        color: var(--theme-deafult);
      }

      .background {
        background-color: #f1f5f4;
        padding: 20px 10px;
        margin: 0;
      }
      .background .contain-bg {
        width: 100%;
        background-color: #ffffff;
        padding-top: 45px;
        padding-bottom: 45px;
        text-align: center;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        position: relative;
        z-index: 1;
      }
      .background .contain-bg:after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--theme-deafult);
        opacity: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .background .contain-bg h4 {
        color: #222222;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .background .contain-bg:hover:after {
        opacity: 0.07;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .background .contain-bg:hover h4 {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
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
      .addtocart_count
        .addtocart_btn
        .cart_qty.qty-box
        .input-group
        .form-control {
        width: 100%;
      }
      .addtocart_count
        .addtocart_btn
        .cart_qty.qty-box
        .input-group
        .form-control:focus {
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
      .addtocart_count
        .addtocart_btn
        .cart_qty.qty-box
        .input-group
        button.quantity-left-minus {
        left: 0;
      }
      .addtocart_count
        .addtocart_btn
        .cart_qty.qty-box
        .input-group
        button.quantity-right-plus {
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

      /*=====================
          11.Theme tab CSS start
      ==========================*/
      .theme-tab {
        position: relative;
      }
      .theme-tab .tab-content {
        display: none;
      }
      .theme-tab .tab-content[style="display: block;"] .product-box,
      .theme-tab .tab-content[style="display: block;"] .tab-box {
        -webkit-animation: zoomIn 300ms ease-in-out;
        animation: zoomIn 300ms ease-in-out;
      }
      .theme-tab .tab-content .product-tab .tab-box {
        background-color: #ffffff;
        width: 100%;
        -webkit-box-flex: 0;
        -ms-flex: 0 0 25%;
        flex: 0 0 25%;
        max-width: calc(25% - 10px);
        margin: 0 5px 10px;
      }
      .theme-tab .tab-content .product-tab .tab-box:nth-last-child(-n + 4) {
        margin: 0 5px 0;
      }
      .theme-tab .tab-content .product-tab .tab-box .product-box2 img {
        height: 250px;
        padding: 15px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        .rating {
        margin-top: 0;
      }
      .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        .rating
        i {
        padding-right: 0;
      }
      .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        .rating
        i:nth-child(-n + 4) {
        color: #ffa200;
      }
      .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        .rating
        i:last-child {
        color: #dddddd;
      }
      .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        a
        h6 {
        margin-right: 35px;
        line-height: 17px;
        margin-top: 5px;
        margin-bottom: 0;
      }
      .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        h4 {
        font-size: 20px;
        margin-top: 5px;
        font-weight: 700;
        color: #222222;
        margin-bottom: 0;
      }
      .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        .color-variant
        li {
        display: inline-block;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        margin-right: 2px;
        margin-top: 20px;
        -webkit-transition: all 0.1s ease;
        transition: all 0.1s ease;
        margin-bottom: 0;
        cursor: pointer;
      }
      .theme-tab .tab-content .product-tab .tab-box:hover .product-box2 img {
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .theme-tab .tab-title,
      .theme-tab .tab-title2 {
        text-align: center;
        font-size: 18px;
        margin-bottom: 30px;
        margin-top: -6px;
      }
      .theme-tab .tab-title .current a,
      .theme-tab .tab-title2 .current a {
        color: var(--theme-deafult);
      }
      .theme-tab .tab-title li,
      .theme-tab .tab-title2 li {
        padding-left: 25px;
        padding-right: 25px;
      }
      .theme-tab .tab-title a,
      .theme-tab .tab-title2 a {
        color: #2d2a25;
        text-transform: uppercase;
      }
      .theme-tab .tab-title2 {
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: -8px;
      }
      .theme-tab .tab-title2:after {
        content: "";
        position: absolute;
        border: 1px solid #f1f5f4;
        width: 100%;
        left: 0;
        top: 17px;
        z-index: -1;
      }
      .theme-tab .tab-title2 .current {
        background-color: #ffffff;
      }
      .theme-tab .tab-title2 .current a {
        background-color: #ffffff;
      }

      .tab-bg {
        position: relative;
        z-index: 1;
        padding: 70px 50px 60px 50px;
      }
      .tab-bg.tab-grey-bg {
        background-color: #f9f9f9;
      }
      .tab-bg:after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--theme-deafult);
        opacity: 0.09;
        z-index: -1;
      }
      .tab-bg .theme-tab .tab-title {
        margin-bottom: 30px;
      }

      /*=====================
          12.Banner CSS start
      ==========================*/
      .full-banner {
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        padding-top: 190px;
        padding-bottom: 190px;
        background-position: center;
      }
      .full-banner.advertise-banner {
        background-image: url("/assets/images/fashion/banner.jpg");
      }
      .full-banner.parallax-layout {
        padding-top: 350px;
        padding-bottom: 350px;
      }
      .full-banner.parallax-layout .banner-contain h4 {
        color: #7f786d;
      }
      .full-banner.banner-layout-3 .banner-contain h4 {
        color: #ffffff;
      }
      .full-banner.banner-layout-3 .banner-contain h3 {
        color: #ffffff;
        margin-top: 10px;
      }
      .full-banner.banner-layout-3 .banner-contain .color {
        color: var(--theme-deafult);
        line-height: 1;
      }
      .full-banner.parallax {
        background-attachment: fixed;
      }
      .full-banner.p-left .banner-contain {
        float: left;
      }
      .full-banner.p-right .banner-contain {
        float: right;
      }
      .full-banner.p-center .banner-contain {
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .full-banner.feature-banner {
        padding: 50px 0;
      }
      .full-banner.feature-banner h2 {
        text-align: center;
        color: #ffffff;
        margin-bottom: 180px;
        margin-top: -7px;
      }
      .full-banner.feature-banner .feature-object,
      .full-banner.feature-banner .feature-object-right {
        text-align: right;
        margin-bottom: -5px;
      }
      .full-banner.feature-banner .feature-object li,
      .full-banner.feature-banner .feature-object-right li {
        margin-bottom: 55px;
        margin-right: 50px;
      }
      .full-banner.feature-banner .feature-object li .media img,
      .full-banner.feature-banner .feature-object-right li .media img {
        border-radius: 100%;
        border: 1px solid white;
        margin-left: 15px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .full-banner.feature-banner .feature-object li .media .media-body,
      .full-banner.feature-banner .feature-object-right li .media .media-body {
        text-align: right;
        margin-top: 18px;
      }
      .full-banner.feature-banner .feature-object li .media .media-body h4,
      .full-banner.feature-banner .feature-object li .media .media-body p,
      .full-banner.feature-banner
        .feature-object-right
        li
        .media
        .media-body
        h4,
      .full-banner.feature-banner
        .feature-object-right
        li
        .media
        .media-body
        p {
        color: white;
      }
      .full-banner.feature-banner .feature-object li .media .media-body h4,
      .full-banner.feature-banner
        .feature-object-right
        li
        .media
        .media-body
        h4 {
        font-size: 20px;
      }
      .full-banner.feature-banner .feature-object li .media .media-body p,
      .full-banner.feature-banner
        .feature-object-right
        li
        .media
        .media-body
        p {
        margin-bottom: 0;
      }
      .full-banner.feature-banner .feature-object li:hover .media img,
      .full-banner.feature-banner .feature-object-right li:hover .media img {
        background-color: white;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }
      .full-banner.feature-banner .feature-object li:nth-child(2),
      .full-banner.feature-banner .feature-object-right li:nth-child(2) {
        padding-right: 30px;
      }
      .full-banner.feature-banner .feature-object li:nth-child(3),
      .full-banner.feature-banner .feature-object-right li:nth-child(3) {
        padding-right: 60px;
        margin-bottom: 0;
      }
      .full-banner.feature-banner .feature-object-right {
        text-align: left;
        margin-left: 50px;
      }
      .full-banner.feature-banner .feature-object-right li .media img {
        margin-left: 0;
        margin-right: 15px;
      }
      .full-banner.feature-banner .feature-object-right li .media .media-body {
        text-align: left;
      }
      .full-banner.feature-banner .feature-object-right li:nth-child(2) {
        padding-right: 0;
        padding-left: 30px;
      }
      .full-banner.feature-banner .feature-object-right li:nth-child(3) {
        padding-right: 0;
        padding-left: 60px;
      }
      .full-banner.feature-banner .center-img {
        position: absolute;
        bottom: -112px;
        left: 50%;
        margin: 0 auto;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      .full-banner.feature-banner .banner-decor .left-img {
        left: 50px;
        position: absolute;
        top: 0;
        -webkit-animation: movebounce 4.9s linear infinite;
        animation: movebounce 4.9s linear infinite;
      }
      .full-banner.feature-banner .banner-decor .right-img {
        right: 50px;
        position: absolute;
        top: 0;
        -webkit-animation: movebounce 4.9s linear infinite;
        animation: movebounce 4.9s linear infinite;
      }

      @-webkit-keyframes movebounce {
        0% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px);
        }
        50% {
          -webkit-transform: translateY(20px);
          transform: translateY(20px);
        }
        100% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px);
        }
      }

      @keyframes movebounce {
        0% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px);
        }
        50% {
          -webkit-transform: translateY(20px);
          transform: translateY(20px);
        }
        100% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px);
        }
      }
      .full-banner .banner-contain .btn-solid,
      .full-banner .banner-contain .btn-outline {
        margin-top: 20px;
      }
      .full-banner .banner-contain h2 {
        font-size: 100px;
        font-weight: 700;
        color: var(--theme-deafult);
        text-transform: uppercase;
        margin-top: -15px;
      }
      .full-banner .banner-contain h3 {
        font-size: 60px;
        color: #333333;
        text-transform: uppercase;
        font-weight: 700;
      }
      .full-banner .banner-contain h4 {
        font-size: 24px;
        color: #777777;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5em;
        padding-top: 10px;
        margin-bottom: -5px;
        line-height: 1.3;
      }
      .full-banner .banner-contain.christmas-contain .btn-solid,
      .full-banner .banner-contain.christmas-contain .btn-outline {
        margin-top: calc(20px + (65 - 20) * ((100vw - 320px) / (1920 - 320)));
      }
      .full-banner .banner-contain.christmas-contain h2 {
        font-size: calc(24px + (70 - 24) * ((100vw - 320px) / (1920 - 320)));
        font-weight: 700;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 0;
        margin-top: 0;
      }
      .full-banner .banner-contain.christmas-contain h3 {
        font-size: calc(20px + (30 - 20) * ((100vw - 320px) / (1920 - 320)));
        color: #ffffff;
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 15px;
        margin-top: -6px;
      }
      .full-banner .banner-contain.christmas-contain h4 {
        font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
        color: #ffffff;
        font-weight: 600;
        text-transform: capitalize;
        letter-spacing: 0.07em;
        padding-top: 10px;
        margin-bottom: -5px;
        line-height: 1.3;
      }
      .full-banner .banner-contain.christmas-contain h4 span {
        color: var(--theme-deafult);
      }
      .full-banner .santa-img {
        position: absolute;
        bottom: -62px;
        left: 28px;
      }
      .full-banner .santa-img img {
        display: inline-block;
        -webkit-animation-name: dance;
        animation-name: dance;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-transition-timing-function: cubic-bezier(0.6, 0, 0.735, 0.045);
        -webkit-transition-timing-function: cubic-bezier(
          0.6,
          -0.28,
          0.735,
          0.045
        );
        transition-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
      }
      .full-banner .decor {
        position: absolute;
        top: -150px;
        left: 0;
      }

      @-webkit-keyframes dance {
        0% {
          -webkit-transform: rotate(10deg);
          transform: rotate(10deg);
        }
        16.66%,
        49.98% {
          -webkit-transform: rotate(-10deg);
          transform: rotate(-10deg);
        }
        32.32% {
          -webkit-transform: rotate(-5deg);
          transform: rotate(-5deg);
        }
        66.64%,
        100% {
          -webkit-transform: rotate(10deg);
          transform: rotate(10deg);
        }
        83.8% {
          -webkit-transform: rotate(5deg);
          transform: rotate(5deg);
        }
      }

      @keyframes dance {
        0% {
          -webkit-transform: rotate(10deg);
          transform: rotate(10deg);
        }
        16.66%,
        49.98% {
          -webkit-transform: rotate(-10deg);
          transform: rotate(-10deg);
        }
        32.32% {
          -webkit-transform: rotate(-5deg);
          transform: rotate(-5deg);
        }
        66.64%,
        100% {
          -webkit-transform: rotate(10deg);
          transform: rotate(10deg);
        }
        83.8% {
          -webkit-transform: rotate(5deg);
          transform: rotate(5deg);
        }
      }

      .parallax-cls section:nth-child(odd) .full-banner {
        background-position: right;
      }

      .parallax-cls section:nth-child(even) .full-banner {
        background-position: left;
      }

      .parallax-cls section .banner-contain {
        margin-top: -12px;
      }

      .pet-parallax {
        position: relative;
      }
      .pet-parallax .pet-decor {
        position: absolute;
        left: 110px;
        bottom: -164px;
      }
      .pet-parallax .banner-contain h4,
      .pet-parallax .banner-contain h3,
      .pet-parallax .banner-contain p {
        color: #212121;
      }
      .pet-parallax .banner-contain p {
        max-width: 75%;
        margin: 0 auto;
        line-height: 22px;
        font-size: 16px;
        letter-spacing: 0.04em;
      }
      .pet-parallax .banner-contain h4 {
        letter-spacing: 0.05em;
        padding-top: 0 !important;
        margin-bottom: 0;
        line-height: 1.3;
        margin-top: -7px;
      }
      .pet-parallax .banner-contain h3 {
        margin: 15px 0;
        font-size: 48px;
      }
      .pet-parallax .full-banner {
        padding-top: 130px;
        padding-bottom: 130px;
        background-blend-mode: overlay;
      }

      .advertise-section .full-banner {
        padding-bottom: 105px;
        padding-top: 105px;
        background-position: top;
      }
      .advertise-section .full-banner .banner-contain {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 40px 0;
        width: 90%;
        border: 3px solid var(--theme-deafult);
      }
      .advertise-section .full-banner .banner-contain h2 {
        font-size: 75px;
      }

      /*=====================
          13.Collection Banner CSS start
      ==========================*/
      .banner-text-white .collection-banner .contain-banner h2 {
        color: #ffffff;
      }

      .collection-banner {
        position: relative;
        overflow: hidden;
      }
      .collection-banner .img-part {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        width: 100%;
      }
      .collection-banner.p-left .contain-banner {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
      }
      .collection-banner.p-right .contain-banner {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }
      .collection-banner.p-center .contain-banner {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .collection-banner .contain-banner {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-left: 70px;
        padding-right: 70px;
      }
      .collection-banner .contain-banner.banner-3 {
        padding-left: 50px;
        padding-right: 50px;
      }
      .collection-banner .contain-banner.banner-3 h2 {
        font-size: 36px;
        letter-spacing: 0.05em;
        color: white;
        margin-top: 5px;
        margin-bottom: -6px;
      }
      .collection-banner .contain-banner.banner-3 h4 {
        color: #ffffff;
      }
      .collection-banner .contain-banner.banner-4 {
        padding-left: 50px;
        padding-right: 50px;
      }
      .collection-banner .contain-banner.banner-4 h2 {
        font-size: 28px;
        letter-spacing: 0.03em;
        color: white;
        margin-bottom: -6px;
      }
      .collection-banner .contain-banner h4 {
        color: var(--theme-deafult);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0;
      }
      .collection-banner .contain-banner h2 {
        font-size: 60px;
        font-weight: 700;
        color: #222222;
        letter-spacing: 0.1em;
        margin-bottom: -6px;
      }
      .collection-banner.christmas-banner .contain-banner {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding-left: calc(30px + (60 - 30) * ((100vw - 320px) / (1920 - 320)));
        padding-right: calc(
          30px + (60 - 30) * ((100vw - 320px) / (1920 - 320))
        );
      }
      .collection-banner.christmas-banner .contain-banner h4 {
        font-size: calc(16px + (18 - 16) * ((100vw - 320px) / (1920 - 320)));
        color: #ffffff;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        margin-bottom: 0;
      }
      .collection-banner.christmas-banner .contain-banner h2 {
        font-size: calc(24px + (40 - 24) * ((100vw - 320px) / (1920 - 320)));
        font-weight: 700;
        color: #ffffff;
        letter-spacing: 0.1em;
        margin-bottom: -6px;
      }
      .collection-banner:hover .img-part {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .banner-furniture {
        padding-left: 15px;
        padding-right: 15px;
      }
      .banner-furniture .collection-banner .contain-banner.banner-3 h2 {
        color: #222222;
        margin-bottom: 0;
      }
      .banner-furniture .collection-banner .contain-banner.banner-3 h4 {
        color: var(--theme-deafult);
      }

      .banner-goggles .collection-banner .contain-banner.banner-3 h2 {
        color: #222222;
      }

      .banner-goggles .collection-banner .contain-banner.banner-3 h4 {
        color: var(--theme-deafult);
      }

      .banner-top-cls {
        margin-top: 30px;
      }

      .banner-6 .collection-banner .contain-banner.banner-3 h2 {
        color: #222222;
      }

      .absolute_banner {
        margin-bottom: 22px;
      }
      .absolute_banner .collection-banner {
        overflow: unset;
      }
      .absolute_banner .collection-banner .absolute-contain {
        position: absolute;
        background-color: #ffffff;
        bottom: -22px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        padding: 20px;
        -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35);
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35);
        min-width: 85%;
        text-align: center;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .absolute_banner .collection-banner .absolute-contain h3 {
        color: var(--theme-deafult);
        text-transform: capitalize;
        margin-top: -5px;
        font-weight: 700;
      }
      .absolute_banner .collection-banner .absolute-contain h4 {
        color: #000000;
        margin-bottom: 0;
      }
      .absolute_banner .collection-banner:hover img {
        -webkit-transform: none;
        transform: none;
      }

      /*=====================
          14.Product-box slider CSS start
      ==========================*/
      .layout7-product .product-box {
        padding: 2px;
      }
      .layout7-product .product-box img {
        width: 100%;
      }
      .layout7-product .product-box .cart-info {
        right: 7px;
        bottom: 7px;
      }
      .layout7-product .product-box .details-product {
        position: absolute;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        opacity: 0;
        bottom: 15px;
        left: 15px;
      }
      .layout7-product .product-box .details-product h6,
      .layout7-product .product-box .details-product h4 {
        margin-bottom: 0;
        color: #000000;
      }
      .layout7-product .product-box:hover .details-product {
        opacity: 1;
        -webkit-animation: fadeIn 500ms ease-in-out;
        animation: fadeIn 500ms ease-in-out;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .theme-card {
        position: relative;
      }
      .theme-card.center-align {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .theme-card.center-align .offer-slider .product-box2 .media .media-body {
        margin-top: 0;
      }
      .theme-card.card-border {
        border: 1px solid #dddddd;
      }
      .theme-card.card-border h5 {
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 30px;
        margin-top: 0;
      }
      .theme-card.card-border .slick-prev,
      .theme-card.card-border .slick-next {
        top: -45px;
      }
      .theme-card.card-border .slick-next {
        right: 30px;
      }
      .theme-card.card-border .slick-prev {
        right: 50px;
      }
      .theme-card.card-border .offer-slider {
        padding-top: 0;
        padding-bottom: 10px;
      }
      .theme-card.card-border .offer-slider img {
        padding: 15px 15px 15px 30px;
      }
      .theme-card.card-border .offer-slider .media .media-body a h6 {
        margin-right: 25px;
      }
      .theme-card h5 {
        font-weight: 700;
        text-transform: uppercase;
        padding-bottom: 10px;
        margin-top: -5px;
      }
      .theme-card h5.title-border {
        border-bottom: 1px solid #dddddd;
      }
      .theme-card .slick-prev,
      .theme-card .slick-next {
        top: -35px;
      }
      .theme-card .slick-prev:before,
      .theme-card .slick-next:before {
        font: normal normal normal 30px/1 FontAwesome;
        color: #222222;
        opacity: 0.6;
      }
      .theme-card .slick-next {
        right: 0;
      }
      .theme-card .slick-next:before {
        content: "\\f105";
      }
      .theme-card .slick-prev {
        left: unset;
        right: 25px;
      }
      .theme-card .slick-prev:before {
        content: "\\f104";
      }
      .theme-card .offer-slider img {
        height: 160px;
        padding: 15px 15px 15px 0;
      }
      .theme-card .offer-slider > div .media:last-child .media-body {
        margin-top: 15px;
      }
      .theme-card .offer-slider > div .media:last-child img {
        margin-bottom: -15px;
      }
      .theme-card .offer-slider .media .media-body .rating {
        margin-top: 0;
      }
      .theme-card .offer-slider .media .media-body .rating i {
        padding-right: 5px;
      }
      .theme-card .offer-slider .media .media-body .rating i:nth-child(-n + 4) {
        color: #ffa200;
      }
      .theme-card .offer-slider .media .media-body .rating i:last-child {
        color: #dddddd;
      }
      .theme-card .offer-slider .media .media-body a h6 {
        margin-right: 61px;
        line-height: 17px;
        margin-top: 5px;
        margin-bottom: 0;
      }
      .theme-card .offer-slider .media .media-body h4 {
        margin-top: 10px;
        font-weight: 700;
        color: #222222;
        margin-bottom: 0;
      }

      .offer-slider .slick-slide {
        line-height: 1;
      }

      .center-slider .product-box {
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .center-slider .product-box .img-wrapper img {
        padding: 15px;
      }

      .center-slider .slick-next:before,
      .center-slider .slick-prev:before {
        -webkit-box-shadow: 0 0 8px 0 #dddddd;
        box-shadow: 0 0 8px 0 #dddddd;
      }

      .center-slider .title2 .title-inner2 {
        margin-bottom: 0;
      }

      .center-slider:hover .product-box {
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .center-slider:hover .slick-next {
        right: 20px;
        -webkit-transform: scale(1.8);
        transform: scale(1.8);
      }

      .center-slider:hover .slick-prev {
        left: 20px;
        -webkit-transform: scale(1.8);
        transform: scale(1.8);
      }

      .full-box .theme-card .offer-slider .product-box2 {
        overflow: hidden;
      }
      .full-box .theme-card .offer-slider .product-box2 .media img {
        height: 300px;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media
        .media-body
        a
        h6 {
        margin-right: 20px;
      }
      .full-box .theme-card .offer-slider .product-box2 .media .media-body h4 {
        font-size: 20px;
        margin-top: 5px;
      }
      .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media
        .media-body
        .color-variant
        li {
        display: inline-block;
        height: 20px;
        width: 20px;
        border-radius: 100%;
        margin-right: 5px;
        margin-top: 15px;
        -webkit-transition: all 0.1s ease;
        transition: all 0.1s ease;
        margin-bottom: 0;
        cursor: pointer;
      }
      .full-box .theme-card .offer-slider .product-box2 + .product-box2 {
        border-top: 1px solid #f1f5f4;
      }
      .full-box .theme-card .offer-slider .product-box2:hover .media img {
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .box-product .full-box .theme-card .offer-slider .product-box2 {
        -webkit-box-shadow: 0 2px 5px 0 rgba(145, 145, 145, 0.16),
          0 2px 10px 0 rgba(145, 145, 145, 0.12);
        box-shadow: 0 2px 5px 0 rgba(145, 145, 145, 0.16),
          0 2px 10px 0 rgba(145, 145, 145, 0.12);
      }
      .box-product .full-box .theme-card .offer-slider .product-box2 .media {
        padding-right: 15px;
      }
      .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media
        img {
        height: 192px;
        padding: 0 15px 0 0;
      }
      .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media
        .media-body {
        z-index: 1;
      }
      .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media
        .media-body
        h4 {
        font-size: 18px;
        margin-top: 7px;
      }
      .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        + .product-box2 {
        border-top: none;
        margin-top: 30px;
      }
      .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .cart-bottom {
        border-top: 1px solid #ddd;
        padding-top: 10px;
        margin-top: 12px;
      }
      .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .cart-bottom
        button {
        border: none;
        background-color: transparent;
        padding: 0;
      }
      .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .cart-bottom
        i {
        color: #aaaaaa;
        font-size: 16px;
        padding-right: 7px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .cart-bottom
        i:hover {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .box-product
        .theme-card
        .offer-slider
        > div
        .media:last-child
        .media-body {
        margin-top: 0;
      }

      /*=====================
          15.Modal popup CSS start
      ==========================*/
      .ribbon-1 {
        width: 24px;
        height: 45px;
        background: var(--theme-deafult);
        top: -6px;
        left: 25px;
        position: absolute;
        -webkit-box-shadow: 4px 5px 15px 2px rgba(90, 90, 90, 0.35);
        box-shadow: 4px 5px 15px 2px rgba(90, 90, 90, 0.35);
      }
      .ribbon-1:before {
        height: 0;
        width: 0;
        border-bottom: 6px solid var(--theme-deafult);
        border-right: 6px solid transparent;
        right: -6px;
        content: "";
        position: absolute;
      }
      .ribbon-1:after {
        height: 0;
        width: 0;
        border-left: 12px solid var(--theme-deafult);
        border-right: 12px solid var(--theme-deafult);
        border-bottom: 12px solid transparent;
        bottom: -11px;
        left: 0;
        content: "";
        position: absolute;
      }
      .ribbon-1 span {
        display: block;
        color: #fff;
        height: 12px;
        text-transform: lowercase;
      }

      .theme-modal .modal-dialog .modal-content .modal-body {
        background-image: linear-gradient(
          135deg,
          var(--theme-deafult) 5.77%,
          #ffffff 5.77%,
          #ffffff 25%,
          #111111 25%,
          #111111 30.77%,
          #ffffff 30.77%,
          #ffffff 50%,
          var(--theme-deafult) 50%,
          var(--theme-deafult) 55.77%,
          #ffffff 55.77%,
          #ffffff 75%,
          #111111 75%,
          #111111 80.77%,
          #ffffff 80.77%,
          #ffffff 100%
        );
        background-size: 36.77px 36.77px;
        background-color: white;
      }
      .theme-modal .modal-dialog .modal-content .modal-body .modal-bg {
        background-color: #ffffff;
        padding: 45px;
      }
      .theme-modal .modal-dialog .modal-content .modal-body .modal-bg .close {
        padding-right: 10px;
        padding-top: 5px;
        position: absolute;
        right: 17px;
        top: 0;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .close
        span {
        color: #000000;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .age-content
        h2 {
        border-bottom: 1px dashed #777777;
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 30px;
        font-weight: 700;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .age-content
        h4 {
        margin-bottom: 30px;
        text-align: center;
        color: #272727;
        font-size: 18px;
        font-weight: 400;
        text-transform: capitalize;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .age-content
        form {
        margin: 0 auto;
        text-align: center;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .age-content
        form
        > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 10px;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .age-content
        form
        .form-control {
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: center;
        font-size: 12px;
        height: 50px;
        border-radius: 0;
        width: 100%;
        letter-spacing: 0.05em;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .offer-content
        img {
        margin-bottom: 40px;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .offer-content
        h2 {
        margin-bottom: 30px;
        text-align: center;
        color: #222222;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .offer-content
        form
        .form-group {
        margin: 0 auto;
        text-align: center;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .offer-content
        form
        .form-group
        .form-control {
        padding-top: 15px;
        padding-bottom: 15px;
        text-align: center;
        font-size: 12px;
        max-width: 640px;
        left: 0;
        right: 0;
        margin: 0 auto;
        letter-spacing: 0.05em;
      }
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .offer-content
        form
        .form-group
        .btn-solid,
      .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .offer-content
        form
        .form-group
        .btn-outline {
        margin-top: 10px;
        text-align: center;
      }

      .theme-modal .modal-dialog .quick-view-modal button.close,
      .theme-modal .modal-dialog .demo_modal button.close {
        position: absolute;
        z-index: 1;
        right: 10px;
        top: 5px;
      }

      .theme-modal .modal-dialog .quick-view-modal .view-detail,
      .theme-modal .modal-dialog .demo_modal .view-detail {
        font-size: 14px;
        font-weight: 700;
        text-transform: uppercase;
      }

      .theme-modal.demo-modal .modal-dialog .modal-content .modal-body {
        height: 75vh;
        overflow-y: scroll;
        padding: 25px;
        background-image: none !important;
        /* Track */
        /* Handle */
        /* Handle on hover */
      }
      .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body::-webkit-scrollbar {
        width: 5px;
      }
      .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body::-webkit-scrollbar-thumb {
        background: var(--theme-deafult);
      }
      .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body::-webkit-scrollbar-thumb:hover {
        background: #555;
      }

      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg {
        padding: 25px;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        .media
        a
        img {
        max-width: 150px;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        .media
        .media-body {
        padding: 0 15px;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        .media
        .media-body
        a
        h6 {
        font-size: 16px;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        .media
        .media-body
        a
        h6
        i {
        margin-right: 8px;
        color: #fff;
        background: #19a340;
        font-size: 14px;
        width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 50%;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        .media
        .media-body
        .buttons
        a {
        display: inline-block;
        font-size: 16px;
        padding: 6px 10px;
        margin: 0 6px;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        #upsell_product
        .product-box {
        padding-left: 10px;
        padding-right: 10px;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        #upsell_product
        .product-box
        .product-detail {
        text-align: center;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        #upsell_product
        .product-box
        .product-detail
        h6 {
        font-weight: 700;
        text-transform: capitalize;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        #upsell_product
        .product-box
        .product-detail
        h6
        a {
        color: var(--theme-deafult);
      }

      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .upsell_payment {
        padding-top: 15px;
      }

      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .product-upsell {
        margin: 20px 0 10px;
      }
      .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .product-upsell
        h4 {
        font-weight: 600;
      }

      .theme-modal.exit-modal .media .media-body h4 {
        font-size: 20px;
        line-height: 1.2;
        color: var(--theme-deafult);
        font-weight: 500;
      }

      .theme-modal.exit-modal .media .media-body h5 {
        font-size: 18px;
        color: #777777;
        margin-bottom: 0;
      }

      #quick-view .modal-dialog .modal-content .modal-body {
        background-image: none;
      }

      /*=====================
          16.look-book demo CSS start
      ==========================*/
      .lookbook-section {
        padding-left: 25px;
        padding-right: 25px;
        padding-bottom: 25px;
      }
      .lookbook-section .lookbook-img > div + div img {
        margin-top: 25px;
      }

      /*=====================
          17.1.lookbook CSS start
      ==========================*/
      .lookbook .lookbook-block {
        position: relative;
      }
      .lookbook .lookbook-block .lookbook-dot {
        cursor: pointer;
        position: absolute;
        z-index: 2;
        width: 29px;
        height: 29px;
        line-height: 29px;
        border-radius: 50%;
        -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        top: 50%;
        left: 12%;
        background-color: #ffffff;
      }
      .lookbook .lookbook-block .lookbook-dot.dot2 {
        top: 70%;
        left: 27%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot3 {
        top: 28%;
        left: 30%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot4 {
        top: 67%;
        left: 8%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot5 {
        top: 40%;
        left: 35%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot6 {
        top: 80%;
        left: 58%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot7 {
        top: 67%;
        left: 45%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot8 {
        top: 43%;
        left: 39%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot9 {
        top: 32%;
        left: 50%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot10 {
        top: 60%;
        left: 50%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot11 {
        top: 50%;
        left: 45%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot12 {
        top: 75%;
        left: 45%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot13 {
        top: 40%;
        left: 45%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot14 {
        top: 76%;
        left: 45%;
      }
      .lookbook .lookbook-block .lookbook-dot.dot15 {
        top: 50%;
        left: 15%;
      }
      .lookbook .lookbook-block .lookbook-dot:before {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        content: "";
        background-color: #fff;
        background-color: rgba(255, 255, 255, 0.5);
        zoom: 1;
        background-color: transparent\\9;
        z-index: -1;
        border-radius: 50%;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .lookbook .lookbook-block .lookbook-dot span {
        text-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .lookbook .lookbook-block .lookbook-dot .dot-showbox {
        visibility: hidden;
        top: -98px;
        left: 150%;
        position: absolute;
        width: 130px;
        background-color: #ffffff;
        -webkit-box-shadow: -3px -3px 13px rgba(48, 54, 61, 0.1);
        box-shadow: -3px -3px 13px rgba(48, 54, 61, 0.1);
      }
      .lookbook .lookbook-block .lookbook-dot .dot-showbox img {
        margin-top: 0;
      }
      .lookbook .lookbook-block .lookbook-dot .dot-showbox .dot-info {
        padding: 5px;
        text-align: center;
      }
      .lookbook .lookbook-block .lookbook-dot .dot-showbox .dot-info h5 {
        margin-bottom: 0;
        text-transform: capitalize;
        line-height: 20px;
      }
      .lookbook .lookbook-block .lookbook-dot .dot-showbox .dot-info h5.title {
        font-weight: 700;
      }
      .lookbook .lookbook-block .lookbook-dot .dot-showbox .dot-info h6 {
        text-transform: uppercase;
        color: var(--theme-deafult);
        margin-bottom: 0;
      }
      .lookbook .lookbook-block .lookbook-dot .dot-showbox:before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 8px solid #ffffff;
        border-bottom: 8px solid transparent;
        top: 41%;
        left: -8px;
      }
      .lookbook .lookbook-block .lookbook-dot:hover {
        background-color: var(--theme-deafult);
        -webkit-box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
        z-index: 10;
      }
      .lookbook .lookbook-block .lookbook-dot:hover .dot-showbox {
        -webkit-animation: fadeInUp 400ms ease-in-out;
        animation: fadeInUp 400ms ease-in-out;
        visibility: visible;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .lookbook .lookbook-block .lookbook-dot:hover span {
        color: #ffffff;
      }
      .lookbook .lookbook-block .lookbook-dot:hover:before {
        -webkit-transform: scale(1.3);
      }

      /*=====================
          17.2.Full-page scroll CSS start
      ==========================*/
      .full-scroll-menu {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 9;
        background-color: transparent;
      }
      .full-scroll-menu .container-fluid {
        padding-left: 60px;
        padding-right: 60px;
      }

      .full-scroll-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
      }
      .full-scroll-footer .sub-footer {
        background-color: transparent;
      }
      .full-scroll-footer .sub-footer .container-fluid {
        padding-left: 60px;
        padding-right: 60px;
      }

      .home-slider.fullpage .home {
        height: calc(100vh - 2px);
      }
      .home-slider.fullpage .home .slider-contain {
        height: calc(100vh - 2px);
        padding-left: 25px;
      }
      .home-slider.fullpage .home .slider-contain h1 {
        font-style: italic;
        font-size: 50px;
        margin-top: -12px;
      }
      .home-slider.fullpage .home .slider-contain p {
        max-width: 600px;
        line-height: 1.5;
        margin-top: 15px;
        margin-bottom: 10px;
        font-size: 16px;
      }

      .home-slider.fullpage .slick-next,
      .home-slider.fullpage .slick-prev {
        display: none !important;
      }

      .home-slider.fullpage:hover .slick-next,
      .home-slider.fullpage:hover .slick-prev {
        display: none !important;
      }

      .home-slider.fullpage .slick-dots {
        top: 50%;
        bottom: unset;
        width: unset;
        left: 20px;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      .home-slider.fullpage .slick-dots li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .home-slider.fullpage .slick-dots li button:before {
        font-size: 15px;
        color: var(--theme-deafult);
        opacity: 0.2;
      }
      .home-slider.fullpage .slick-dots li.slick-active button:before {
        opacity: 0.8;
      }

      .home-slider.instagram-slider .home {
        height: 50vh;
      }
      .home-slider.instagram-slider .home .slider-contain {
        height: 50vh;
      }

      .home-slider.slick-dotted.slick-slider {
        margin-bottom: 0;
      }

      .video-layout {
        height: calc(100vh - 5px);
        width: 100vw;
        -o-object-fit: fill;
        object-fit: fill;
      }

      /*=====================
          17.3.Electronics Demo CSS
      ==========================*/
      .layout-8 {
        padding: 0 80px;
      }
      .layout-8 .layout-8-bg {
        background-image: url("/assets/images/electronics/bg.jpg");
        background-size: cover;
        background-attachment: fixed;
        height: 100%;
        width: 100%;
        padding: 0 15px;
        -webkit-animation: 10s linear 0s normal none infinite animate;
        animation: 10s linear 0s normal none infinite animate;
      }
      .layout-8 .layout-8-bg .layout7-product .product-box .details-product {
        opacity: 1;
      }
      .layout-8
        .layout-8-bg
        .layout7-product
        .product-box:hover
        .details-product {
        -webkit-animation: none;
        animation: none;
      }

      .white-bg {
        background-color: #ffffff;
      }

      @-webkit-keyframes animate {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 0 500px;
        }
      }

      @keyframes animate {
        from {
          background-position: 0 0;
        }
        to {
          background-position: 0 500px;
        }
      }

      /*=====================
          17.4.Fashion-3 Demo CSS
      ==========================*/
      .box-layout-body {
        background-color: #f9f9f9;
      }
      .box-layout-body .box-layout-header {
        background-color: #ffffff;
      }
      .box-layout-body .box-layout {
        margin-top: -70px;
        margin-bottom: 5px;
        -webkit-box-shadow: 0 0 8px 0 #ddd;
        box-shadow: 0 0 8px 0 #ddd;
        position: relative;
        background-color: white;
      }
      .box-layout-body .box-layout .full-banner {
        margin-left: -15px;
        margin-right: -15px;
        padding-top: 200px;
        padding-bottom: 200px;
      }
      .box-layout-body .box-layout.bg-image {
        background-image: url("/assets/images/bg-image.jpg");
      }

      /*=====================
          17.5.Beauty Demo css
      ==========================*/
      .beauty-about .about-text p {
        text-align: left;
      }

      .about-section {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;
      }
      .about-section .small-section {
        padding-top: 20px;
      }
      .about-section .service .service-block1 img {
        margin-bottom: 10px;
      }
      .about-section .service .service-block1 h5 {
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 0;
      }

      .video-modal .modal-body {
        padding: 0;
      }

      .video-modal iframe {
        height: 500px;
        width: 100%;
        vertical-align: middle;
        border: none;
      }

      .video-section .video-img {
        position: relative;
        overflow: hidden;
      }
      .video-section .video-img img {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      .video-section .video-img .play-btn {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .video-section .video-img .play-btn span {
        height: 60px;
        width: 60px;
        border-radius: 100%;
        background-color: var(--theme-deafult);
        text-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .video-section .video-img .play-btn i {
        font-size: 35px;
        padding-left: 5px;
        color: #ffffff;
      }
      .video-section .video-img:hover img {
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      /*=====================
          17.6.Flower Demo css
      ==========================*/
      .flower-bg {
        background-image: url("/assets/images/flower/flower-bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        height: 100%;
        width: 100%;
      }

      .bg-block {
        background-image: url("/assets/images/flower/bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        height: 100%;
        width: 100%;
        padding: 70px 50px 60px 50px;
      }
      .bg-block .title4 .line {
        margin-bottom: 25px;
      }
      .bg-block .theme-tab .tab-title {
        margin-bottom: 30px;
      }

      /*=====================
          17.7.Nursery Demo css
      ==========================*/
      .layout-20 {
        background-image: url("/assets/images/nursery/bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        padding: 50px;
      }

      /*=====================
          17.8.Game Demo css
      ==========================*/
      .game-back {
        background-image: url("https://i.pinimg.com/originals/e0/80/08/e08008c19c8e9e1b0074baf36d699407.jpg");
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.6);
      }
      .game-back .pixelstrap.sm-horizontal > li > a {
        color: white;
      }
      .game-back .pixelstrap.sm-horizontal > li > a:hover,
      .game-back .pixelstrap.sm-horizontal > li > a.active {
        color: white;
      }
      .game-back .onhover-div img {
        -webkit-filter: brightness(100);
        filter: brightness(100);
      }
      .game-back .main-menu.border-section {
        border-bottom: none;
      }
      .game-back .main-menu .menu-left .navbar i {
        color: #ffffff;
      }

      .main-banner-bg {
        background: url("/assets/images/main-banner-bg.jpg");
        padding: 45px 0;
      }
      .main-banner-bg .small-slider {
        border: 20px solid #ffffff;
      }
      .main-banner-bg .small-slider .home-slider .home .slider-contain {
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
      }
      .main-banner-bg .small-slider .home-slider .home .slider-contain h1,
      .main-banner-bg .small-slider .home-slider .home .slider-contain h4 {
        color: #ffffff;
      }
      .main-banner-bg .small-slider .home-slider .home .slider-contain > div {
        margin-bottom: 30px;
      }

      .game-product .theme-tab .tab-title .current a,
      .game-product .theme-tab .tab-title2 .current a {
        border-bottom: 2px solid var(--theme-deafult);
        padding-bottom: 5px;
      }

      .game-product .product-box .product-detail {
        text-align: center;
      }

      .game-product .product-box .cart-info {
        bottom: 40px;
        right: 10px;
      }
      .game-product .product-box .cart-info a i {
        background-color: white;
        border-radius: 100%;
        margin: 10px 0;
        padding: 8px;
        font-size: 16px;
      }

      .game-product .product-box .add-button {
        background-color: var(--theme-deafult);
        color: white;
        text-align: center;
        font-size: 18px;
        text-transform: capitalize;
        position: absolute;
        width: 100%;
        bottom: -40px;
        padding: 5px 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        cursor: pointer;
      }

      .game-product .product-box:hover .cart-info a:nth-child(1) i {
        -webkit-animation: fadeInRight 300ms ease-in-out;
        animation: fadeInRight 300ms ease-in-out;
      }

      .game-product .product-box:hover .add-button {
        bottom: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .game-product .img-wrapper img {
        width: 100%;
      }

      .game-banner .banner-timer {
        background-image: url(/assets/images/banner-game.jpg);
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.4);
        margin-left: 0;
        margin-right: 0;
      }
      .game-banner .banner-timer .banner-text h2 {
        color: #ffffff;
      }

      .game-banner .timer {
        background-color: rgba(45, 42, 37, 0.4);
      }

      .game-slider .theme-card .offer-slider img {
        height: 220px;
      }

      .bg-footer {
        background: url("/assets/images/game/footer.jpg");
        background-position: bottom;
      }
      .bg-footer .light-layout {
        background-color: transparent;
      }

      .game-parallax .full-banner.parallax {
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.6);
      }

      .game-parallax .full-banner .banner-contain h3,
      .game-parallax .full-banner .banner-contain h4 {
        color: #ffffff;
      }

      .effect-cls {
        position: relative;
      }
      .effect-cls:after {
        content: "";
        position: absolute;
        background: url(/assets/images/game/top.png);
        top: -1px;
        width: 100%;
        height: 85px;
        z-index: 1;
        background-repeat: no-repeat;
      }
      .effect-cls:before {
        content: "";
        position: absolute;
        background: url("/assets/images/game/back.png");
        bottom: -12px;
        width: 100%;
        height: 110px;
        z-index: 1;
      }
      .effect-cls.footer-effect:before {
        display: none;
      }

      /*=====================
          17.9. Gym demo CSS start
      ==========================*/
      .gym-parallax .title1 h2 {
        color: white;
      }

      .gym-parallax .product-para p {
        color: white;
      }

      .gym-parallax .instagram-box .overlay {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--gradient1)),
          color-stop(99%, var(--gradient2))
        );
        background: linear-gradient(
          -180deg,
          var(--gradient1) 0%,
          var(--gradient2) 99%
        );
      }

      .gym-product {
        text-align: center;
      }
      .gym-product .product-box {
        background-color: white;
        padding: 15px;
        -webkit-box-shadow: 0 0 8px 0 #ddd;
        box-shadow: 0 0 8px 0 #ddd;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .gym-product .product-box .img-wrapper {
        position: unset;
      }
      .gym-product .product-box .img-wrapper .cart-info {
        width: 100%;
        z-index: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        left: 0;
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        bottom: 0;
        top: 0;
      }
      .gym-product .product-box .img-wrapper .cart-info i {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--gradient1)),
          color-stop(99%, var(--gradient2))
        );
        background: linear-gradient(
          180deg,
          var(--gradient1) 0%,
          var(--gradient2) 99%
        );
        color: rgba(255, 255, 255, 0.6);
        border-radius: 100%;
        margin: 0 5px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .gym-product .product-box .img-wrapper .cart-info button:hover i,
      .gym-product .product-box .img-wrapper .cart-info a:hover i {
        color: white;
      }
      .gym-product .product-box .product-detail h6 {
        color: #777777;
      }
      .gym-product .product-box .product-detail h4 {
        color: #222222 !important;
      }
      .gym-product .product-box:hover {
        -webkit-transform: scale(1.02);
        transform: scale(1.02);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .gym-product .product-box:hover .img-wrapper .cart-info {
        opacity: 1;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .gym-product .product-box:hover .img-wrapper .cart-info button {
        -webkit-animation: fadeInUp 300ms ease-in-out;
        animation: fadeInUp 300ms ease-in-out;
      }
      .gym-product .product-box:hover .img-wrapper .cart-info a:nth-child(2) i {
        -webkit-animation: fadeInUp 500ms ease-in-out;
        animation: fadeInUp 500ms ease-in-out;
      }
      .gym-product .product-box:hover .img-wrapper .cart-info a:nth-child(3) i {
        -webkit-animation: fadeInUp 700ms ease-in-out;
        animation: fadeInUp 700ms ease-in-out;
      }
      .gym-product .product-box:hover .img-wrapper .cart-info a:nth-child(4) i {
        -webkit-animation: fadeInUp 1000ms ease-in-out;
        animation: fadeInUp 1000ms ease-in-out;
      }
      .gym-product .partition-cls > div:nth-child(-n + 4) {
        margin-bottom: 30px;
      }

      .gym-blog .blog-details {
        text-align: left;
        padding-left: 0;
      }
      .gym-blog .blog-details p {
        margin-bottom: 3px;
      }

      .gym-banner .collection-banner .contain-banner h4,
      .gym-banner .collection-banner .contain-banner h2 {
        color: #ffffff;
      }

      .bg-img-gym.overlay-cls {
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.85);
      }

      .bg-img-gym .dark-layout {
        background-color: transparent;
      }

      .bg-img-gym .footer-theme2 p {
        color: #ffffff;
      }

      .bg-img-gym .footer-theme2 .contact-details li {
        color: #ffffff;
      }
      .bg-img-gym .footer-theme2 .contact-details li a {
        color: #ffffff;
      }

      .bg-img-gym .footer-theme2 .footer-link a,
      .bg-img-gym .footer-theme2 .footer-link-b a {
        color: #ebebeb;
      }

      .bg-img-gym .sub-footer.darker-subfooter {
        background-color: black;
      }
      .bg-img-gym .sub-footer.darker-subfooter p {
        color: #ffffff;
      }

      .tap-top.gradient-top {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--gradient1)),
          color-stop(99%, var(--gradient2))
        );
        background: linear-gradient(
          180deg,
          var(--gradient1) 0%,
          var(--gradient2) 99%
        );
      }

      /*=====================
          17.10. Jewellery demo CSS start
      ==========================*/
      .j-box .product-box {
        width: 100%;
        display: inline-block;
        border: 1px solid #ddd;
        border-radius: 12px;
        overflow: hidden;
      }
      .j-box .product-box .cart-info {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        left: 0;
        background-color: rgba(250, 250, 250, 0.84);
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        bottom: -30px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .j-box .product-box .cart-info a {
        border-left: 1px solid #dddddd;
      }
      .j-box .product-box .cart-info a i {
        padding: 12px;
      }
      .j-box .product-box .product-detail {
        padding-left: 15px;
        padding-bottom: 15px;
        background-color: #fafafa;
      }
      .j-box .product-box .product-detail .rating {
        margin-top: 0;
        padding-top: 15px;
      }
      .j-box .product-box:hover .img-wrapper .cart-info {
        opacity: 1;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        bottom: 0;
      }
      .j-box .product-box:hover .img-wrapper .cart-info button {
        -webkit-animation: none;
        animation: none;
      }
      .j-box .product-box:hover .img-wrapper .cart-info a:nth-child(2) i {
        -webkit-animation: none;
        animation: none;
      }
      .j-box .product-box:hover .img-wrapper .cart-info a:nth-child(3) i {
        -webkit-animation: none;
        animation: none;
      }
      .j-box .product-box:hover .img-wrapper .cart-info a:nth-child(4) i {
        -webkit-animation: none;
        animation: none;
      }

      .jewel-footer .sub-footer.black-subfooter {
        background-color: #f1f5f4;
      }

      .home.bg-position {
        background-position: top;
      }

      /*=====================
          17.11. pets demo CSS start
      ==========================*/
      .pets-box .product-box .img-wrapper .cart-info {
        position: relative;
        padding: 10px;
        border: none;
        -webkit-transform: perspective(500px) rotateX(90deg);
        transform: perspective(500px) rotateX(90deg);
        bottom: 0;
        z-index: 1;
      }
      .pets-box .product-box .img-wrapper .cart-info:after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--theme-deafult);
        opacity: 0.3;
        z-index: -1;
      }
      .pets-box .product-box .img-wrapper .cart-info i {
        padding: 5px;
        margin: 0 3px;
        background-color: white;
      }
      .pets-box .product-box .img-wrapper .cart-info a {
        border-left: none;
      }

      .pets-box .product-box .product-detail {
        text-align: center;
        background-color: #fafafa;
      }
      .pets-box .product-box .product-detail .rating {
        margin-top: 0;
        padding-top: 15px;
      }

      .pets-box .product-box:hover {
        -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
      }
      .pets-box .product-box:hover .cart-info {
        -webkit-transform: perspective(500px) rotateX(0deg);
        transform: perspective(500px) rotateX(0deg);
      }

      footer.pet-layout-footer .white-layout {
        background-color: #f5e1d0;
      }

      footer.pet-layout-footer .footer-brand-logo {
        margin-bottom: 20px;
      }

      footer.pet-layout-footer .sub-footer.black-subfooter {
        background-color: var(--theme-deafult);
      }

      footer.pet-layout-footer .sub-footer p {
        padding: 15px 0;
        color: #ffffff;
      }

      footer.pet-layout-footer .social-white {
        display: block;
        margin-top: 40px;
        margin-bottom: 30px;
      }

      .form_search {
        height: 45px;
        -webkit-box-shadow: 0 0 0 1px #e2e2e2;
        box-shadow: 0 0 0 1px #e2e2e2;
        overflow: hidden;
        position: relative;
        width: 525px;
        background-color: #f5f5f5;
        border-radius: 25px;
      }
      .form_search input {
        width: 100%;
        height: 45px;
        font-size: 16px;
        color: darkgrey;
        border: none;
        outline: none;
        background: none;
        padding: 0 10px;
      }
      .form_search button {
        position: absolute;
        top: 5px;
        right: 5px;
        width: 40px;
        height: 35px;
        padding: 0;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: transparent;
        border-radius: 5px;
      }
      .form_search button i {
        font-size: 18px;
        color: var(--theme-deafult);
      }

      .blog.blog_box .blog-details {
        text-align: left;
        padding: 0;
      }
      .blog.blog_box .blog-details p {
        font-size: 14px;
        text-transform: none;
        color: #333333;
        font-weight: 400;
        margin-bottom: 8px;
        margin-top: 3px;
      }
      .blog.blog_box .blog-details a p {
        color: #40494f;
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 0;
        margin-top: 10px;
      }
      .blog.blog_box .blog-details .read-cls {
        text-transform: capitalize;
        font-weight: 700;
        color: #000000;
      }

      /*=====================
          17.12. tools demo CSS start
      ==========================*/
      .tools-bg {
        background-color: #f5f5f5;
      }
      .tools-bg section {
        background-color: #f5f5f5;
      }

      .tools-parallax.small-slider .home-slider .home .slider-contain h4,
      .tools-parallax.small-slider .home-slider .home .slider-contain h1 {
        color: #ffffff;
      }

      .tools-parallax-product.full-banner {
        padding-top: 110px;
        padding-bottom: 110px;
      }

      .tools-parallax-product .tools-description h3 {
        color: #ffffff;
        text-transform: uppercase;
        margin-top: -5px;
      }

      .tools-parallax-product .tools-description .tools-form .search-box {
        width: 75%;
        margin: 20px 0;
      }
      .tools-parallax-product
        .tools-description
        .tools-form
        .search-box
        select {
        text-transform: capitalize;
      }

      .tools-parallax-product .tools-description .tools-form .btn-find {
        width: 75%;
        padding: 7px 29px;
        background-size: 1000px;
      }

      .tools-parallax-product .tools-grey .slick-prev,
      .tools-parallax-product .tools-grey .slick-next {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }

      .tools_slider .home-slider .home .container {
        position: relative;
      }

      .tools_slider .home-slider .home .tools-parts {
        position: absolute;
        top: 0;
        right: 10%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 85vh;
        margin-top: 50px;
      }

      .tools_slider .home-slider .home .tools-parts1 {
        position: absolute;
        top: 0;
        right: 20%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 85vh;
        margin-top: 50px;
      }

      .tools_slider .home-slider .slider-contain {
        margin-top: 70px;
        margin-left: 150px;
      }
      .tools_slider .home-slider .slider-contain h4,
      .tools_slider .home-slider .slider-contain h1 {
        color: #ffffff;
      }

      .tools-grey .product-box {
        width: 100%;
        display: inline-block;
        overflow: hidden;
        background-color: white;
        -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
      }
      .tools-grey .product-box .img-wrapper .lable-block {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box .cart-info {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        left: 0;
        bottom: -30px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box .cart-info .mobile-quick-view {
        display: none;
      }
      .tools-grey .product-box .cart-info a {
        background-color: #eef0f1;
        border-radius: 5px;
      }
      .tools-grey .product-box .cart-info a i {
        color: #555555;
      }
      .tools-grey .product-box .cart-info a:hover {
        background-color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box .cart-info a:hover i {
        color: #ffffff;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box .cart-info button {
        width: 55%;
        background-color: #eef0f1;
        color: #555555;
        border-radius: 5px;
        margin: 0 5px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box .cart-info button i {
        display: none;
      }
      .tools-grey .product-box .cart-info button:hover {
        background-color: var(--theme-deafult);
        color: #ffffff;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box .quick-view-part {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        background-color: var(--theme-deafult);
        border-radius: 100%;
        width: 40px;
        height: 40px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        opacity: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box .quick-view-part i {
        font-size: 18px;
        color: #ffffff;
      }
      .tools-grey .product-box .product-info {
        padding: 15px;
        background-color: #ffffff;
        border-top: 1px solid rgba(221, 221, 221, 0.2);
      }
      .tools-grey .product-box .product-info .rating {
        margin-top: 0;
        padding-top: 0;
      }
      .tools-grey .product-box:hover .img-wrapper .front img,
      .tools-grey .product-box:hover .img-wrapper .front .bg-size {
        opacity: 0.05;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box:hover .img-wrapper .cart-info {
        opacity: 1;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        bottom: 10px;
      }
      .tools-grey .product-box:hover .img-wrapper .cart-info button {
        -webkit-animation: none;
        animation: none;
      }
      .tools-grey .product-box:hover .img-wrapper .cart-info a:nth-child(2) i {
        -webkit-animation: none;
        animation: none;
      }
      .tools-grey .product-box:hover .img-wrapper .cart-info a:nth-child(3) i {
        -webkit-animation: none;
        animation: none;
      }
      .tools-grey .product-box:hover .img-wrapper .cart-info a:nth-child(4) i {
        -webkit-animation: none;
        animation: none;
      }
      .tools-grey .product-box:hover .img-wrapper .lable-block {
        display: none;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box:hover .quick-view-part {
        opacity: 1;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .product-box:hover .ribbon {
        display: none;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .tools-grey .ribbon {
        position: absolute;
        left: -5px;
        top: -5px;
        z-index: 1;
        overflow: hidden;
        width: 75px;
        height: 75px;
        text-align: right;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .tools-grey .ribbon span {
        font-size: 10px;
        font-weight: bold;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
        line-height: 20px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        width: 100px;
        display: block;
        background: var(--theme-deafult);
        -webkit-box-shadow: 0 3px 10px -5px black;
        box-shadow: 0 3px 10px -5px black;
        position: absolute;
        top: 19px;
        left: -21px;
      }
      .tools-grey .ribbon span:before {
        content: "";
        position: absolute;
        left: 0px;
        top: 100%;
        z-index: -1;
        border-left: 3px solid var(--theme-deafult);
        border-right: 3px solid transparent;
        border-bottom: 3px solid transparent;
        border-top: 3px solid var(--theme-deafult);
      }
      .tools-grey .ribbon span:after {
        content: "";
        position: absolute;
        right: 0px;
        top: 100%;
        z-index: -1;
        border-left: 3px solid transparent;
        border-right: 3px solid var(--theme-deafult);
        border-bottom: 3px solid transparent;
        border-top: 3px solid var(--theme-deafult);
      }

      .category-tools .category-m .category-wrapper {
        background-color: white;
        border: none;
        -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.05);
      }
      .category-tools .category-m .category-wrapper .bg-size {
        max-width: 100%;
      }

      .banner-tools {
        margin-top: 30px;
        border: 1px solid #dddddd;
        overflow: hidden;
      }
      .banner-tools img {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .banner-tools:hover img {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .tools-brand .row {
        background-color: white;
        padding: 25px 0;
        -webkit-box-shadow: 0 0 8px 0 #ddd;
        box-shadow: 0 0 8px 0 #ddd;
        margin: 0;
      }

      .sticky-footer {
        background-image: url("/assets/images/tools/footer.jpg");
      }
      .sticky-footer .darken-layout {
        background-color: transparent !important;
      }
      .sticky-footer .darken-layout p {
        color: #c0c0c0;
      }
      .sticky-footer .darken-layout .sub-title li a {
        color: #c0c0c0;
      }
      .sticky-footer .darken-layout .sub-title .contact-list li,
      .sticky-footer .darken-layout .sub-title .contact-list i {
        color: #c0c0c0;
      }
      .sticky-footer .darken-layout .footer-social i {
        color: #c0c0c0;
      }
      .sticky-footer .dark-subfooter {
        background-color: #141111 !important;
      }
      .sticky-footer .dark-subfooter p {
        color: #c0c0c0 !important;
      }

      /*=====================
          17.13. Marijuana demo CSS start
      ==========================*/
      .service_slide {
        position: relative;
      }
      .service_slide .home-slider .home {
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.4);
      }
      .service_slide .home-slider .slider-contain {
        height: 60vh;
      }
      .service_slide .service-home {
        position: absolute;
        width: 100%;
        bottom: 0;
      }
      .service_slide .service-home .service-block1 {
        background-color: rgba(255, 255, 255, 0.9);
        padding: 25px 0;
      }
      .service_slide .service-home .service-block1 h4 {
        margin-bottom: 0;
      }
      .service_slide .service-home .service-block1 p {
        text-transform: capitalize;
      }
      .service_slide .service-home .service-block1 svg {
        margin-bottom: 5px;
        width: 50px;
        height: 50px;
      }
      .service_slide .service-home .service-block1:nth-child(even) {
        background-color: rgba(255, 255, 255, 0.85);
      }

      .tab-left .theme-tab {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .tab-left .theme-tab .left-side {
        width: 30%;
      }
      .tab-left .theme-tab .left-side .left-tab-title {
        margin-bottom: 38px;
      }
      .tab-left .theme-tab .left-side .left-tab-title h4 {
        color: #dafe69;
        margin-top: -3px;
      }
      .tab-left .theme-tab .left-side .left-tab-title h3 {
        color: #ffffff;
      }
      .tab-left .theme-tab .left-side .tab-title {
        margin-right: 100px;
        text-align: left;
      }
      .tab-left .theme-tab .left-side .tab-title a {
        text-transform: capitalize;
      }
      .tab-left .theme-tab .left-side li {
        width: 100%;
        padding: 7px 0;
        border-bottom: 1px solid #606060;
      }
      .tab-left .theme-tab .left-side li a {
        color: #ffffff;
      }
      .tab-left .theme-tab .left-side li:first-child {
        border-top: 1px solid #606060;
      }
      .tab-left .theme-tab .left-side li.current a {
        color: #dafe69;
      }
      .tab-left .theme-tab .tab-content-cls {
        width: 70%;
      }

      .product_section {
        background-image: url("/assets/images/marijuana/leaf-bg.jpg");
      }

      .border-box.tools-grey .ribbon span {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
      }

      .border-box.tools-grey .product-box {
        border-radius: 10px;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: 1px solid #dddddd;
      }
      .border-box.tools-grey .product-box .cart-info a:hover {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
      }
      .border-box.tools-grey .product-box .cart-info button:hover {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
      }
      .border-box.tools-grey .product-box .quick-view-part {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
      }

      .detail-cannabis .detail_section {
        text-align: center;
      }
      .detail-cannabis .detail_section > div {
        -webkit-box-shadow: -1px 2px 5px 1px #ececec;
        box-shadow: -1px 2px 5px 1px #ececec;
        padding: 45px 25px;
        background-color: white;
      }
      .detail-cannabis .detail_section p {
        margin-bottom: 0;
        line-height: 24px;
        letter-spacing: 0.05em;
      }
      .detail-cannabis .detail_section h4 {
        font-weight: 700;
      }
      .detail-cannabis .detail_section svg {
        width: 50px;
        margin-bottom: 15px;
        fill: var(--theme-deafult);
      }

      footer.footer-5 {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
      }
      footer.footer-5 .dark-layout {
        background-color: transparent;
      }
      footer.footer-5 .sub-footer {
        background-color: transparent;
      }
      footer.footer-5 .sub-footer > .container {
        border-top: 1px solid #ffffff;
      }
      footer.footer-5 .sub-footer p {
        color: #ffffff;
      }
      footer.footer-5 .footer-theme2 p {
        color: #ffffff;
      }
      footer.footer-5 .footer-theme2 .contact-details li {
        color: #ffffff;
      }
      footer.footer-5 .footer-theme2 .contact-details li a {
        color: #ffffff;
      }
      footer.footer-5 .footer-theme2 .subscribe-block {
        border-left: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
      }

      .tap-top.green-top {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
        border: 1px solid rgba(255, 255, 255, 0.5);
      }

      /*=====================
          17.14. Christmas demo CSS start
      ==========================*/
      .product-christmas .product-box {
        position: relative;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .product-christmas .product-box .cart-info,
      .product-christmas .product-box .cart-wrap {
        position: absolute;
        bottom: -26px;
        text-align: center;
        margin: 0 auto;
        right: 0;
        left: 0;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        opacity: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .product-christmas .product-box .cart-info a [class^="icon-"],
      .product-christmas .product-box .cart-info a [class*=" icon-"],
      .product-christmas .product-box .cart-wrap a [class^="icon-"],
      .product-christmas .product-box .cart-wrap a [class*=" icon-"] {
        display: inline-block;
      }
      .product-christmas .product-box .cart-info button,
      .product-christmas .product-box .cart-wrap button {
        background: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        border: none;
        padding: 0;
        color: #ffffff;
      }
      .product-christmas .product-box .cart-info i,
      .product-christmas .product-box .cart-wrap i {
        color: #ffffff;
        font-size: 18px;
        padding-right: 10px;
        padding-left: 10px;
      }
      .product-christmas .product-box .cart-wrap {
        bottom: -26px;
        text-align: right;
        left: 0;
      }
      .product-christmas .product-box .cart-wrap i {
        display: block;
        padding-bottom: 10px;
        padding-top: 10px;
      }
      .product-christmas .product-box .cart-wrap.cart-effect-left {
        left: 0;
        right: unset;
      }
      .product-christmas .product-box .product-detail,
      .product-christmas .product-box .product-info {
        padding-left: 0;
        text-align: center;
      }
      .product-christmas
        .product-box
        .product-detail
        .rating
        i:nth-child(-n + 4),
      .product-christmas
        .product-box
        .product-info
        .rating
        i:nth-child(-n + 4) {
        color: var(--theme-deafult);
      }
      .product-christmas .product-box .product-detail .rating i:last-child,
      .product-christmas .product-box .product-info .rating i:last-child {
        color: #878787;
      }
      .product-christmas .product-box .product-detail h6,
      .product-christmas .product-box .product-info h6 {
        line-height: 1;
        margin-bottom: 3px;
        padding-top: 7px;
        padding-bottom: 5px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        font-size: 16px;
        color: #444444;
        font-weight: 700;
      }
      .product-christmas .product-box .product-detail h4,
      .product-christmas .product-box .product-info h4 {
        font-size: 18px;
        color: var(--theme-deafult);
        font-weight: 700;
        margin-bottom: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .product-christmas .product-box:hover .cart-info {
        bottom: 0;
        background-color: var(--theme-deafult);
        opacity: 1;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .product-christmas .product-box:hover .cart-info button {
        -webkit-animation: none !important;
        animation: none !important;
      }
      .product-christmas .product-box:hover .cart-info a i {
        -webkit-animation: none !important;
        animation: none !important;
      }
      .product-christmas .product-box:hover .product-info .add-btn {
        opacity: 1;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        -webkit-animation: fadeInUp 500ms ease-in-out;
        animation: fadeInUp 500ms ease-in-out;
      }
      .product-christmas .product-box:hover .img-wrapper .cart-box {
        opacity: 1;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
        -webkit-animation: fadeInUp 400ms ease-in-out;
        animation: fadeInUp 400ms ease-in-out;
      }

      .overflow-cls {
        overflow: visible !important;
      }

      .margin-add {
        margin-top: 60px;
      }

      .grey-bg {
        background-color: #f5f5f5;
      }

      .blog-section .blog-details h4 {
        color: var(--theme-deafult);
        margin-top: 15px;
        line-height: 1;
        margin-bottom: 0;
      }

      .blog-section .blog-details p {
        color: #222222;
        font-size: 14px;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: 0.03em;
        margin-top: 6px;
        margin-bottom: 6px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .blog-section .blog-details h6 {
        line-height: 1;
        letter-spacing: 0.1em;
        margin-bottom: 0;
      }

      .blog-section .blog-wrap .blog-image {
        overflow: hidden;
      }
      .blog-section .blog-wrap .blog-image img {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .blog-section .blog-wrap:hover .blog-details p {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .blog-section .blog-wrap:hover .blog-image img {
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .blog-section .slick-slider .slick-list {
        margin: 0 -15px;
      }
      .blog-section .slick-slider .slick-list .slick-slide > div {
        margin: 0 15px;
        position: relative;
      }

      .blog-section .review-box {
        background-color: #ffffff;
        z-index: 1;
        text-align: center;
        padding: 30px;
        position: relative;
      }
      .blog-section .review-box:after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border: 3px solid var(--theme-deafult);
        opacity: 0.5;
        z-index: -1;
      }
      .blog-section .review-box .santa-img {
        position: absolute;
        top: 0;
        right: -116px;
      }
      .blog-section .review-box .slick-prev {
        z-index: 1;
        top: unset;
        bottom: 0;
        left: -30px;
        right: 0;
        margin: 0 auto;
      }
      .blog-section .review-box .slick-prev:before {
        font: normal normal normal 14px/1 FontAwesome;
        content: "\\f053";
        color: #717171;
      }
      .blog-section .review-box .slick-prev:after {
        position: absolute;
        content: "";
        height: 13px;
        width: 2px;
        background-color: #eeeeee;
        left: 24px;
      }
      .blog-section .review-box .slick-next {
        top: unset;
        left: 30px;
        right: 0;
        margin: 0 auto;
        bottom: 0;
      }
      .blog-section .review-box .slick-next:before {
        font: normal normal normal 14px/1 FontAwesome;
        content: "\\f054";
        color: #717171;
      }
      .blog-section .review-box .slick-prev {
        left: -30px;
        right: 0;
        margin: 0 auto;
      }
      .blog-section .review-box .review-content .avtar {
        border: 1px solid #eeeeee;
        padding: 5px;
        border-radius: 100%;
        display: inline-block;
        margin-top: 10px;
      }
      .blog-section .review-box .review-content .avtar img {
        border-radius: 100%;
        height: 60px;
        width: auto;
        margin: 0 auto;
        border: 1px solid #eeeeee;
      }
      .blog-section .review-box .review-content h5 {
        margin-bottom: 0;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--theme-deafult);
        margin-top: 15px;
      }
      .blog-section .review-box .review-content h6 {
        margin-bottom: 0;
        margin-top: 10px;
        text-transform: capitalize;
        color: #555555;
        font-size: 16px;
      }
      .blog-section .review-box .review-content p {
        margin-top: 20px;
        margin-bottom: 80px;
        line-height: 24px;
      }

      .instagram {
        position: relative;
      }
      .instagram .insta-decor {
        position: absolute;
        top: 0;
        right: 0;
      }

      .logo-section {
        position: relative;
      }
      .logo-section .logo-decor {
        position: absolute;
        bottom: 0;
        left: 0;
      }

      #preloader {
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 9999;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background: #fff url("/assets/images/christmas/loading.gif") no-repeat
          center center;
      }

      /*=====================
          17.14. Left sidebar demo CSS start
      ==========================*/
      .left-sidebar_space {
        padding-left: 300px;
      }

      /*=====================
          18.Portfoilio CSS start
      ==========================*/
      .portfolio-padding {
        padding-bottom: 40px;
      }

      .portfolio-section {
        overflow: hidden;
      }
      .portfolio-section .article-title {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        color: white;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        text-align: center;
        float: left;
        font-size: 18px;
        line-height: 24px;
      }
      .portfolio-section .article-title a {
        color: white;
      }
      .portfolio-section .isotopeSelector {
        float: left;
        width: 100%;
        position: relative;
      }
      .portfolio-section .isotopeSelector .overlay {
        position: relative;
        border: 1px solid #dddddd;
      }
      .portfolio-section .isotopeSelector img {
        width: 100%;
        height: auto;
      }
      .portfolio-section .isotopeSelector {
        margin-bottom: 30px;
      }
      .portfolio-section .isotopeSelector img {
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
      }
      .portfolio-section .isotopeSelector .overlay-background {
        -webkit-transform: scale(0);
        transform: scale(0);
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
      }
      .portfolio-section .isotopeSelector .overlay-background:after {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        content: "";
        background-color: var(--theme-deafult);
        opacity: 0;
      }
      .portfolio-section .isotopeSelector .overlay-background i {
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: white;
        padding: 10px;
        border-radius: 100%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: var(--theme-deafult);
        font-size: 22px;
        display: none;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
        width: 40px;
        height: 40px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .portfolio-section .isotopeSelector:hover img {
        -webkit-transform: scale(1.2) rotate(2deg);
        transform: scale(1.2) rotate(2deg);
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
      }
      .portfolio-section .isotopeSelector:hover .overlay-background {
        -webkit-transform: scale(1);
        transform: scale(1);
        border: 3px solid white;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
      }
      .portfolio-section .isotopeSelector:hover .overlay-background:after {
        opacity: 0.1;
      }
      .portfolio-section .isotopeSelector:hover .overlay-background i {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
      }
      .portfolio-section .border-portfolio {
        margin: 3px;
        overflow: hidden;
      }
      .portfolio-section #form1 {
        padding-bottom: 20px;
      }
      .portfolio-section .filter-button {
        padding: 0 24px;
        font-size: 20px;
        line-height: 35px;
        border: none;
        background-color: white;
      }
      .portfolio-section .filter-button.active {
        background-color: var(--theme-deafult);
        color: #ffffff;
      }
      .portfolio-section.fullwidth-portfolio .isotopeSelector {
        padding-left: 7px;
        padding-right: 7px;
        margin-bottom: 14px;
      }
      .portfolio-section.metro-section .product-box .product-detail {
        opacity: 0;
        position: absolute;
        background-color: #ffffff;
        padding: 10px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        width: 65%;
        left: 0;
        right: 0;
        margin: 0 auto;
        bottom: -10px;
        text-align: center;
      }
      .portfolio-section.metro-section .product-box .product-detail h6 {
        color: #525252;
        padding-top: 0;
        margin-top: -2px;
      }
      .portfolio-section.metro-section .product-box .product-detail h4 {
        font-weight: 400;
        color: #000000;
      }
      .portfolio-section.metro-section .product-box .cart-wrap {
        top: 7px;
        right: 7px;
        opacity: 1;
      }
      .portfolio-section.metro-section .product-box .cart-wrap button {
        border: 1px solid #ffffff;
        border-radius: 100%;
        background-color: rgba(255, 255, 255, 0.8);
        opacity: 1;
      }
      .portfolio-section.metro-section .product-box .cart-wrap button i {
        padding: 7px;
        color: #333333;
      }
      .portfolio-section.metro-section .product-box .cart-wrap a i {
        border-radius: 100%;
        border: 1px solid #ffffff;
        margin: 5px 0;
        background-color: rgba(255, 255, 255, 0.8);
        padding: 7px;
        color: #333333;
        opacity: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .portfolio-section.metro-section .product-box:hover .product-detail {
        opacity: 1;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        bottom: 15px;
      }
      .portfolio-section.metro-section .product-box:hover .cart-wrap button {
        -webkit-animation: none;
        animation: none;
      }
      .portfolio-section.metro-section .product-box:hover .cart-wrap a i {
        opacity: 1;
      }
      .portfolio-section.metro-section
        .product-box:hover
        .cart-wrap
        a:nth-child(2)
        i {
        -webkit-animation: fadeInDown 500ms ease-in-out;
        animation: fadeInDown 500ms ease-in-out;
      }
      .portfolio-section.metro-section
        .product-box:hover
        .cart-wrap
        a:nth-child(3)
        i {
        -webkit-animation: fadeInDown 700ms ease-in-out;
        animation: fadeInDown 700ms ease-in-out;
      }
      .portfolio-section.metro-section
        .product-box:hover
        .cart-wrap
        a:nth-child(4)
        i {
        -webkit-animation: fadeInDown 1000ms ease-in-out;
        animation: fadeInDown 1000ms ease-in-out;
      }

      .filter-section .filter-container {
        text-align: center;
        padding: 0 0 20px;
      }
      .filter-section .filter-container ul.filter > li {
        padding: 0 25px;
      }
      .filter-section .filter-container ul.filter > li > a {
        color: var(--theme-deafult);
        font-size: 20px;
        line-height: 40px;
      }
      .filter-section .filter-container ul.filter > li > a:hover,
      .filter-section .filter-container ul.filter > li > a:focus {
        text-decoration: none;
        color: var(--theme-deafult);
        outline: none;
      }
      .filter-section .filter-container ul.filter > li.active {
        background-color: var(--theme-deafult);
      }
      .filter-section .filter-container ul.filter > li.active a {
        color: #ffffff;
      }
      .filter-section .filter-container ul.filter > li span {
        color: #ddd;
        font-size: 20px;
        display: inline-block;
        margin: 0 5px;
      }
      .filter-section .filter-container .filter > li {
        padding: 0;
        margin: 0;
      }

      .filter-section .title1 .title-inner1 {
        margin-top: -5px;
      }

      .filter-section h1 {
        text-align: center;
      }

      .demo-colored-wrap {
        background: #ecf0f1;
      }

      .mfp-with-zoom .mfp-container,
      .mfp-with-zoom.mfp-bg {
        opacity: 0;
        -webkit-backface-visibility: hidden;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
      }

      .mfp-with-zoom.mfp-ready .mfp-container {
        opacity: 1;
      }

      .mfp-with-zoom.mfp-ready.mfp-bg {
        opacity: 0.8;
      }

      .mfp-with-zoom.mfp-removing .mfp-container,
      .mfp-with-zoom.mfp-removing.mfp-bg {
        opacity: 0;
      }

      .mfp-title {
        display: none;
      }

      .offer-box {
        top: 50%;
        position: fixed;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        left: -415px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        z-index: 9;
      }
      .offer-box img {
        margin-right: 18px;
      }
      .offer-box.toggle-cls {
        left: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .offer-box .heading-right h3 {
        position: absolute;
        top: 50%;
        right: 0;
        width: 230px;
        height: 36px;
        line-height: 36px;
        letter-spacing: 5px;
        font-size: 18px;
        color: #ffffff;
        font-weight: 700;
        text-transform: uppercase;
        -webkit-transform: translate(50%, -50%) rotate(-90deg);
        transform: translate(50%, -50%) rotate(-90deg);
        text-align: center;
        background-color: var(--theme-deafult);
        margin-bottom: 0;
        cursor: pointer;
      }

      /*=====================
          19.Add to cart popup
      ==========================*/
      .add_to_cart {
        position: fixed;
        background-color: #ffffff;
        z-index: 9999;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .add_to_cart ::-webkit-scrollbar {
        width: 3px;
        height: 7px;
      }
      .add_to_cart ::-webkit-scrollbar-track {
        background: #dddddd;
      }
      .add_to_cart ::-webkit-scrollbar-thumb {
        background: #888888;
      }
      .add_to_cart ::-webkit-scrollbar-thumb:hover {
        background: #555555;
      }
      .add_to_cart .cart-inner {
        background-color: #ffffff;
        z-index: 9;
        position: relative;
        top: 0;
      }
      .add_to_cart .cart-inner .cart_media {
        padding: 0 20px;
      }
      .add_to_cart .cart-inner .cart_media li {
        position: relative;
        padding-bottom: 10px;
        width: 100%;
      }
      .add_to_cart .cart-inner .cart_media li .media {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;
      }
      .add_to_cart .cart-inner .cart_media li .media img {
        height: 90px;
      }
      .add_to_cart .cart-inner .cart_media li .media .media-body {
        -ms-flex-item-align: center;
        align-self: center;
      }
      .add_to_cart .cart-inner .cart_media li .media .media-body h4 {
        color: #333333;
      }
      .add_to_cart .cart-inner .cart_media li .media .media-body h4 span {
        color: #777777;
        font-size: 16px;
      }
      .add_to_cart .cart-inner .cart_media li .total {
        border-top: 1px solid #f1f5f4;
        border-bottom: 1px solid #f1f5f4;
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .add_to_cart .cart-inner .cart_media li .total h5 {
        text-transform: capitalize;
        margin-bottom: 0;
        color: #999999;
      }
      .add_to_cart .cart-inner .cart_media li .total h5 span {
        float: right;
      }
      .add_to_cart .cart-inner .cart_media li .buttons a {
        font-size: 16px;
        color: #ffffff;
        text-transform: capitalize;
        font-weight: 700;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .add_to_cart .cart-inner .cart_media li .buttons a:hover {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .add_to_cart .cart-inner .cart_media li .buttons .checkout {
        float: right;
      }
      .add_to_cart .cart-inner .cart_media .close-circle {
        position: absolute;
        top: 0;
        right: 0;
      }
      .add_to_cart .cart-inner .cart_media .close-circle i {
        color: #a1a1a1;
        font-size: 16px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .add_to_cart .cart-inner .cart_media .close-circle i:hover {
        color: #000000;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .add_to_cart .cart-inner .cart_top {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 20px;
        border-bottom: 1px solid #efefef;
        margin-bottom: 20px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .add_to_cart .cart-inner .cart_top h3 {
        font-size: 18px;
        color: #222222;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 0;
      }
      .add_to_cart .cart-inner .cart_top .close-cart {
        margin-left: auto;
      }
      .add_to_cart .cart-inner .cart_top .close-cart i {
        color: black;
        font-size: 18px;
      }
      .add_to_cart .overlay {
        visibility: hidden;
        opacity: 0;
        background-color: #212331;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .add_to_cart.open-side {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .add_to_cart.open-side .overlay {
        opacity: 0.8;
        visibility: visible;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .add_to_cart.left {
        left: -300px;
        top: 0;
        height: 100vh;
        width: 300px;
      }
      .add_to_cart.left .cart-inner {
        height: 100vh;
        overflow: auto;
      }
      .add_to_cart.left.open-side {
        left: 0;
      }
      .add_to_cart.right {
        right: -300px;
        height: 100vh;
        width: 300px;
        top: 0;
      }
      .add_to_cart.right .cart-inner {
        height: 100vh;
        overflow: auto;
      }
      .add_to_cart.right.open-side {
        right: 0;
      }
      .add_to_cart.top,
      .add_to_cart.bottom {
        height: 218px;
        width: 100%;
      }
      .add_to_cart.top .cart_media,
      .add_to_cart.bottom .cart_media {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 100%;
      }
      .add_to_cart.top .cart_media .cart_product,
      .add_to_cart.bottom .cart_media .cart_product {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        width: 75%;
        overflow-y: auto;
      }
      .add_to_cart.top .cart_media .cart_product li,
      .add_to_cart.bottom .cart_media .cart_product li {
        min-width: 245px;
        max-width: 225px;
        margin-right: 18px;
        padding-bottom: 0;
      }
      .add_to_cart.top .cart_media .cart_total,
      .add_to_cart.bottom .cart_media .cart_total {
        width: 25%;
      }
      .add_to_cart.top .cart-inner,
      .add_to_cart.bottom .cart-inner {
        height: 218px;
      }
      .add_to_cart.top .cart-inner .cart_top,
      .add_to_cart.bottom .cart-inner .cart_top {
        margin-bottom: 0;
        background-color: #fbfbfb;
        padding: 15px 44px;
        border-bottom: none;
      }
      .add_to_cart.top .cart-inner .cart_media,
      .add_to_cart.bottom .cart-inner .cart_media {
        padding: 0;
      }
      .add_to_cart.top .cart-inner .cart_media .cart_product,
      .add_to_cart.top .cart-inner .cart_media .cart_total,
      .add_to_cart.bottom .cart-inner .cart_media .cart_product,
      .add_to_cart.bottom .cart-inner .cart_media .cart_total {
        padding: 30px 44px;
      }
      .add_to_cart.top {
        top: -300px;
      }
      .add_to_cart.top.open-side {
        top: 0;
      }
      .add_to_cart.bottom {
        bottom: -300px;
      }
      .add_to_cart.bottom.open-side {
        bottom: 0;
      }

      /*=====================
          20.Flying Cart CSS start
      ==========================*/
      .addcart_btm_popup {
        position: fixed;
        right: 0;
        width: 42px;
        height: 41px;
        color: #000000;
        -webkit-transition: all ease-in 0.3s;
        transition: all ease-in 0.3s;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 22px;
        text-decoration: none;
        background: #ffffff;
        top: 33%;
        border: 1px solid white;
        -webkit-box-shadow: 0 0 5px rgba(4, 4, 4, 0.28);
        box-shadow: 0 0 5px rgba(4, 4, 4, 0.28);
      }
      .addcart_btm_popup .fixed_cart {
        position: relative;
        z-index: 99;
        display: block;
        float: right;
        font-size: 18px;
        text-decoration: none;
        padding-left: 8px;
        white-space: nowrap;
      }
      .addcart_btm_popup .fixed_cart i {
        color: black;
      }
      .addcart_btm_popup .fixed_cart .cart_qty_cls {
        font-weight: 400;
      }

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
      footer
        .darken-layout
        .sub-title
        .footer-title.active
        .according-menu.before {
        content: "\\f068";
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
      footer.footer-christmas
        .footer-theme
        .sub-title
        .contact-list
        li
        a:hover {
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
      .footer-theme2.section-light
        .footer-block
        .subscribe-white
        .form-control {
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
      .footer-theme2.section-light
        .footer-block
        .subscribe-white
        .form-control {
        text-align: center;
        letter-spacing: 5px;
        font-size: 12px;
        padding: 15px 0;
      }

      /*=====================
        22.Inner pages CSS start
      ==========================*/
      .sitemap_page .title {
        color: var(--theme-deafult);
        text-transform: capitalize;
        font-weight: 700;
      }

      .sitemap_page ul {
        padding-left: 10px;
      }
      .sitemap_page ul li {
        display: block;
        margin-bottom: 10px;
      }
      .sitemap_page ul li a {
        color: #222222;
        font-weight: 700;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        text-transform: capitalize;
      }
      .sitemap_page ul li a i {
        font-size: 10px;
      }
      .sitemap_page ul li a:hover {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .sitemap_page ul ul {
        padding-left: 15px;
        margin-top: 5px;
      }
      .sitemap_page ul ul li {
        margin-bottom: 0;
      }
      .sitemap_page ul ul li a {
        font-weight: 400;
        color: #333333;
        font-size: 14px;
      }

      .select_input select {
        padding: 15px 20px;
        margin-bottom: 30px;
      }

      .template-password {
        background: url("/assets/images/coming-soon.jpg");
        background-size: cover;
        height: 100vh;
      }
      .template-password #container {
        height: 100vh;
        max-width: 600px;
        margin: 0 auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .template-password #container > div {
        width: 100%;
      }
      .template-password #container #login {
        width: 100%;
        margin-bottom: 120px;
      }
      .template-password #container #login h2 {
        color: var(--theme-deafult);
        font-size: 30px;
        font-weight: 400;
      }
      .template-password #container #login .theme-form h3 {
        color: #999999;
        font-size: 20px;
      }
      .template-password #container #login .theme-form input {
        border-color: #dddddd;
        font-size: 12px;
        padding: 17px 25px;
        margin-bottom: 15px;
        height: inherit;
      }
      .template-password #container #login .theme-form input:focus {
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .template-password #container #powered {
        position: absolute;
        bottom: 5px;
        left: 0;
        right: 0;
      }
      .template-password #container #owner a {
        color: var(--theme-deafult);
      }

      .review-page .comment-section {
        border-bottom: none !important;
      }
      .review-page .comment-section li:first-child {
        border-top: none;
        padding-top: 0;
      }
      .review-page .comment-section li:last-child {
        padding-bottom: 0;
      }

      .review-page .comnt-sec {
        margin-top: 10px;
      }
      .review-page .comnt-sec li {
        margin-right: 15px;
        padding-bottom: 0 !important;
        padding-top: 0 !important;
        border-top: none !important;
      }
      .review-page .comnt-sec li a {
        color: #777777;
        font-size: 16px;
      }
      .review-page .comnt-sec li a i {
        margin-right: 5px;
      }

      .error-section {
        padding: 130px 0 140px;
        text-align: center;
      }
      .error-section h1 {
        font-size: 200px;
        font-weight: 900;
        margin: 0;
        line-height: 0.8;
        color: #aaaaaa;
        margin-top: -11px;
      }
      .error-section h2 {
        color: #aaaaaa;
        font-weight: 500;
        letter-spacing: 3px;
        margin: 40px 0;
      }

      .breadcrumb-section {
        background-color: #f8f8f8;
        padding: 30px 0;
      }
      .breadcrumb-section .page-title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .breadcrumb-section .page-title h2 {
        font-size: 16px;
        margin-bottom: 0;
      }
      .breadcrumb-section .breadcrumb {
        background-color: transparent;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        text-transform: uppercase;
        font-size: 14px;
        color: #555555;
        font-weight: 600;
        margin: 0;
        padding-right: 0;
      }
      .breadcrumb-section .breadcrumb a {
        color: #555555;
        font-weight: 600;
      }

      .about-head {
        margin-bottom: 20px;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        height: 100%;
      }
      .about-head h2 {
        color: var(--theme-deafult);
        margin-bottom: 0;
      }

      .about-page p {
        margin-bottom: -7px;
      }

      .about-page .banner-section {
        border-radius: 5px;
        overflow: hidden;
      }

      .about-page h4 {
        margin-bottom: 10px;
        margin-top: 30px;
        text-transform: capitalize;
        font-weight: 600;
        line-height: 1.3;
      }

      .about-page p {
        line-height: 2;
        letter-spacing: 0.03em;
      }

      .testimonial {
        background-color: #f7f7f7;
      }
      .testimonial .testimonial-slider .media img {
        border-radius: 100%;
        border: 1px solid #dddddd;
        padding: 5px;
        height: 130px;
        width: 130px;
      }
      .testimonial .testimonial-slider .media h5 {
        font-weight: 700;
        color: var(--theme-deafult);
        margin-bottom: 0;
        margin-top: 7px;
      }
      .testimonial .testimonial-slider .media h6 {
        margin-bottom: -4px;
      }
      .testimonial .testimonial-slider .media .media-body {
        padding: 30px 75px 30px 30px;
      }
      .testimonial .testimonial-slider .media .media-body p {
        line-height: 2;
        letter-spacing: 0.03em;
      }
      .testimonial
        .testimonial-slider
        .slick-track
        .slick-slide:nth-child(even)
        .media {
        border-left: 1px solid #dddddd;
        padding-left: 50px;
      }

      .team {
        position: relative;
      }
      .team img {
        margin: 0 auto;
        padding: 0 10px;
      }
      .team .slick-prev,
      .team .slick-next {
        position: absolute;
        top: -45px;
      }
      .team .slick-prev:before,
      .team .slick-next:before {
        font: normal normal normal 30px/1 FontAwesome;
        color: #222222;
        opacity: 0.6;
      }
      .team .slick-prev {
        left: unset;
        right: 20px;
      }
      .team .slick-prev:before {
        content: "\\f104";
      }
      .team .slick-next {
        right: 0;
      }
      .team .slick-next:before {
        content: "\\f105";
      }
      .team h2 {
        color: #222222;
        padding-bottom: 15px;
        border-bottom: 1px solid #dddada;
        margin-bottom: 10px;
      }
      .team h4,
      .team h6 {
        text-align: center;
      }
      .team h4 {
        color: var(--theme-deafult);
        font-weight: 700;
        margin-top: 15px;
        margin-bottom: 5px;
      }
      .team h6 {
        margin-bottom: 0;
      }

      .collection-filter-block {
        margin-bottom: 30px;
        padding: 0 30px;
        border: 1px solid #dddddd;
        background-color: #ffffff;
      }
      .collection-filter-block .product-service {
        padding: 30px 0;
      }
      .collection-filter-block .product-service .media {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #dddddd;
      }
      .collection-filter-block .product-service .media svg {
        height: 40px;
        width: 40px;
      }
      .collection-filter-block .product-service .media svg path {
        fill: var(--theme-deafult);
      }
      .collection-filter-block .product-service .media .media-body {
        padding-left: 10px;
      }
      .collection-filter-block .product-service .media .media-body h4 {
        margin-bottom: 5px;
      }
      .collection-filter-block .product-service .media .media-body p {
        margin-bottom: 0;
        text-transform: capitalize;
      }
      .collection-filter-block .product-service .media:last-child {
        padding-bottom: 0;
      }

      .collection-collapse-block {
        padding-bottom: 24px;
      }
      .collection-collapse-block.open {
        margin-bottom: 12px;
      }
      .collection-collapse-block .collapse-block-title {
        position: relative;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 16px;
        color: #444444;
        font-weight: 600;
        margin: 30px 0 0 0;
      }
      .collection-collapse-block .collapse-block-title:after {
        position: absolute;
        display: block;
        top: 0;
        right: -3px;
        content: "\\f0d7";
        font-family: FontAwesome;
        color: #444444;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .color-selector {
        margin-top: 30px;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .category-list
        li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        font-size: 16px;
        text-transform: uppercase;
        line-height: 18px;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .category-list
        li
        a {
        color: #777777;
        padding-bottom: 10px;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .category-list
        li:last-child
        a {
        padding-bottom: 0;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .category-list
        li:first-child {
        margin-top: 30px;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox {
        margin-bottom: 12px;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox:first-child {
        margin-top: 30px;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox:last-child {
        margin-bottom: 0;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox
        label {
        text-transform: uppercase;
        cursor: pointer;
        font-size: 12px;
        color: #777777;
        font-weight: 600;
        letter-spacing: 0.5px;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox
        label:before {
        top: 1px;
        height: 15px;
        width: 15px;
        background: #ffffff;
        border: 1px solid #777777;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox
        label:after {
        top: 1px;
        height: 15px;
        width: 15px;
        background-size: 65%;
      }
      .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox
        .custom-control-input:checked
        ~ .custom-control-label:after {
        background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='%23000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/></svg>");
      }

      .color-selector ul li {
        height: 30px;
        width: 30px;
        border-radius: 50%;
        margin-right: 5px;
        margin-bottom: 10px;
        cursor: pointer;
        border: 1px solid #444444;
      }

      .color-selector ul .color-1 {
        background-color: white;
      }

      .color-selector ul .color-2 {
        background-color: grey;
      }

      .color-selector ul .color-3 {
        background-color: red;
      }

      .color-selector ul .color-4 {
        background-color: purple;
      }

      .color-selector ul .color-5 {
        background-color: blue;
      }

      .color-selector ul .color-6 {
        background-color: yellow;
      }

      .color-selector ul .color-7 {
        background-color: green;
      }

      .color-selector ul li.active {
        border: 1px solid black;
        position: relative;
      }
      .color-selector ul li.active:after {
        content: "";
        background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'><path fill='%23000' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/></svg>");
        top: 10px;
        right: 4px;
        height: 15px;
        width: 15px;
        background-size: 70%;
        background-repeat: no-repeat;
        position: absolute;
      }

      .collection-sidebar-banner {
        margin-top: 30px;
      }
      .collection-sidebar-banner img {
        width: 100%;
      }

      .top-banner-wrapper .top-banner-content h4 {
        font-weight: 600;
        color: #444444;
        margin-bottom: 15px;
      }

      .top-banner-wrapper .top-banner-content h5 {
        font-size: 16px;
        font-weight: 600;
        color: #444444;
        letter-spacing: 1px;
        line-height: 1.2;
        margin-bottom: 10px;
      }

      .top-banner-wrapper .top-banner-content p {
        line-height: 1.5;
        color: #777777;
        margin-bottom: 0;
      }

      .product-wrapper-grid.list-view .product-wrap .product-info {
        text-align: left;
        -ms-flex-item-align: center;
        align-self: center;
        padding-left: 15px;
      }

      .product-wrapper-grid.list-view .product-box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding-bottom: 0;
      }
      .product-wrapper-grid.list-view .product-box .img-wrapper,
      .product-wrapper-grid.list-view .product-box .img-block {
        width: 25%;
      }
      .product-wrapper-grid.list-view .product-box .product-detail {
        padding-left: 15px;
        -ms-flex-item-align: center;
        align-self: center;
        text-align: left !important;
      }
      .product-wrapper-grid.list-view .product-box .product-detail .rating {
        margin-top: 0;
      }
      .product-wrapper-grid.list-view .product-box .product-detail p {
        display: block !important;
        margin-bottom: 5px;
        line-height: 18px;
      }
      .product-wrapper-grid.list-view
        .product-box
        .product-detail
        .color-variant {
        padding-top: 10px;
      }
      .product-wrapper-grid.list-view .product-box .product-detail h6 {
        font-weight: 700;
      }

      .collection-product-wrapper .product-top-filter {
        border-bottom: 1px solid #dddddd;
        border-top: 1px solid #dddddd;
      }
      .collection-product-wrapper .product-top-filter .product-filter-content,
      .collection-product-wrapper .product-top-filter .popup-filter {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .search-count,
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .sidebar-popup,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .search-count,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup {
        border-right: 1px solid #dddddd;
        padding: 20px;
        text-transform: capitalize;
        width: 35%;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .search-count
        h5,
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .sidebar-popup
        h5,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .search-count
        h5,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        h5 {
        margin-bottom: 0;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-view,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-view {
        padding: 20px;
        width: 10%;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-view
        ul
        li,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-view
        ul
        li {
        height: 100%;
        vertical-align: middle;
        cursor: pointer;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-view
        ul
        li:first-child,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-view
        ul
        li:first-child {
        margin-right: 14px;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-grid-view,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-grid-view {
        padding: 20px;
        width: 20%;
        border-right: 1px solid #dddddd;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-grid-view
        ul,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-grid-view
        ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-grid-view
        ul
        li,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-grid-view
        ul
        li {
        margin-left: 10px;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-grid-view
        ul
        li
        img,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-grid-view
        ul
        li
        img {
        height: 18px;
        cursor: pointer;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-per-view,
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-filter,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter {
        position: relative;
        width: 20%;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-per-view
        select,
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-filter
        select,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view
        select,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter
        select {
        border: 0;
        padding: 20px;
        border-right: 1px solid #dddddd;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
        background: url(/assets/images/dropdown.png) no-repeat 95%;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-per-view
        select:focus,
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-filter
        select:focus,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view
        select:focus,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter
        select:focus {
        outline: unset;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-per-view
        select
        option,
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-filter
        select
        option,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view
        select
        option,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter
        select
        option {
        padding: 20px 0;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-filter,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter {
        width: 15%;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-filter:before,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter:before {
        right: 10px;
      }
      .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-filter
        select,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter
        select {
        border-right: none;
      }
      .collection-product-wrapper .product-top-filter .popup-filter {
        -webkit-box-pack: unset;
        -ms-flex-pack: unset;
        justify-content: unset;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        ::-webkit-scrollbar {
        width: 3px;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        ::-webkit-scrollbar-track {
        background: #dddddd;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        ::-webkit-scrollbar-thumb {
        background: #888888;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        ::-webkit-scrollbar-thumb:hover {
        background: #555555;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup {
        position: relative;
        cursor: pointer;
        width: 20%;
        background: url(/assets/images/dropdown.png) no-repeat 95%;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        a {
        font-size: 16px;
        color: #222222;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        .collection-filter {
        background-color: #f8f8f8;
        width: 270px;
        height: 600px;
        overflow-y: scroll;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        .collection-filter
        .collection-filter-block {
        border: none;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        .collection-filter
        .theme-card {
        padding: 0 30px;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        .collection-filter
        .collection-sidebar-banner {
        padding: 0 30px;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        .collection-filter
        .collection-sidebar-banner
        img {
        width: 100%;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .open-popup {
        display: none;
        position: absolute;
        z-index: 9;
        top: 75px;
        left: 0;
        border: 1px solid #f1f5f4;
        -webkit-box-shadow: 0 0 5px #ddd;
        box-shadow: 0 0 5px #ddd;
        min-width: 330px;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .open-popup.open {
        display: block;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .open-popup
        .collection-filter-block {
        margin-bottom: 0;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter {
        width: 20%;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view
        select,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter
        select {
        padding-right: 45px;
        font-size: 16px;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view:before,
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter:before {
        right: 35px;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-grid-view {
        padding: 20px;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-view {
        width: 20%;
      }
      .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter:before {
        right: 25px !important;
      }

      .collection-product-wrapper .product-wrapper-grid .product-box {
        margin-top: 50px;
      }
      .collection-product-wrapper
        .product-wrapper-grid
        .product-box
        .product-detail
        p {
        display: none;
      }

      .collection-product-wrapper .product-wrapper-grid .product-five {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 20%;
        flex: 0 0 20%;
        max-width: 20%;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
      }

      .collection-product-wrapper
        .product-wrapper-grid
        .col-lg-2
        .product-box
        .product-detail
        h6 {
        font-size: 13px;
      }

      .collection-product-wrapper
        .product-wrapper-grid
        .col-lg-2
        .product-box
        .product-detail
        h4 {
        font-size: 18px;
      }

      .collection-product-wrapper
        .product-wrapper-grid
        .col-lg-2
        .product-box
        .product-detail
        .rating
        i {
        padding-right: 0;
      }

      .collection-product-wrapper
        .product-wrapper-grid
        .col-lg-2
        .product-box
        .img-wrapper
        .lable-block
        .lable3 {
        padding: 8px 4px;
        font-size: 12px;
      }

      .filter-main-btn {
        display: none;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .filter-main-btn span {
        width: 40%;
        border-radius: 0;
        font-size: 20px;
      }

      .collection-mobile-back {
        padding: 15px 0;
        border-bottom: 1px solid #dddddd;
        display: none;
      }
      .collection-mobile-back span {
        text-transform: uppercase;
        font-size: 14px;
        color: #000;
        cursor: pointer;
      }
      .collection-mobile-back span i {
        font-size: 20px;
        font-weight: bold;
        margin-right: 5px;
      }

      .product-pagination {
        border-bottom: 1px solid #dddddd;
        border-top: 1px solid #dddddd;
        margin: 50px 0;
      }
      .product-pagination .pagination {
        border-radius: 0;
      }
      .product-pagination .pagination .page-item {
        border-radius: 0;
      }
      .product-pagination .pagination .page-item a {
        padding: 18px;
        border-bottom: 0;
        border-top: 0;
        color: #777777;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
      .product-pagination .pagination .page-item:last-child .page-link {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .product-pagination .pagination .page-item.active a {
        color: var(--theme-deafult);
        background-color: #ffffff;
        border-color: #dddddd;
      }
      .product-pagination .product-search-count-bottom {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;
        border-left: 1px solid #dddddd;
        border-right: 1px solid #dddddd;
        padding-right: 15px;
      }
      .product-pagination .product-search-count-bottom h5 {
        color: #777777;
        font-size: 14px;
        margin-bottom: 0;
        padding: 5px 0;
      }

      .bundle {
        margin-top: 10px;
      }
      .bundle .bundle_img {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .bundle .bundle_img .img-box img {
        max-width: 115px;
        border: 1px solid #ddd;
        padding: 2px;
      }
      .bundle .bundle_img .plus {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 7px;
        font-size: 22px;
      }
      .bundle .bundle_detail {
        margin-top: 15px;
      }
      .bundle .bundle_detail .price_product {
        color: #000000;
        padding-left: 3px;
        font-weight: 700;
      }

      .theme_checkbox label {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 14px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-transform: capitalize;
        color: #333333;
      }
      .theme_checkbox label input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .theme_checkbox label input:checked ~ .checkmark:after {
        display: block;
      }
      .theme_checkbox label .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: #ffffff;
        border: 1px solid #dddddd;
      }
      .theme_checkbox label .checkmark:after {
        content: "";
        position: absolute;
        display: none;
        left: 7px;
        top: 3px;
        width: 5px;
        height: 10px;
        border: solid black;
        border-width: 0 2px 2px 0;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
      }

      .collection .collection-block {
        text-align: center;
      }
      .collection .collection-block img,
      .collection .collection-block .bg-size {
        margin-bottom: 20px;
      }
      .collection .collection-block .collection-content {
        text-align: center;
      }
      .collection .collection-block .collection-content h3 {
        margin-bottom: 10px;
        color: #222222;
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 0.05em;
      }
      .collection .collection-block .collection-content h4 {
        color: #222222;
        margin-bottom: 10px;
        font-size: 16px;
      }
      .collection .collection-block .collection-content p {
        line-height: 1.5;
      }
      .collection .collection-block .collection-content .btn-solid,
      .collection .collection-block .collection-content .btn-outline {
        padding: 10px 25px;
      }

      .faq-section .accordion.theme-accordion .card {
        margin-top: 10px;
        border-radius: 0;
        overflow: hidden;
        border-bottom: 1px solid #dddddd;
      }
      .faq-section
        .accordion.theme-accordion
        .card
        :not(:first-of-type):not(:last-of-type),
      .faq-section
        .accordion.theme-accordion
        .card
        .theme-accordion
        .card:first-of-type {
        border-bottom: 1px solid #dddddd;
      }
      .faq-section .accordion.theme-accordion .card:first-child {
        margin-top: 0;
      }
      .faq-section .accordion.theme-accordion .card .card-header {
        padding: 0;
        border-bottom: 0;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background-color: #f9f9f9;
      }
      .faq-section .accordion.theme-accordion .card .card-header button {
        color: #333333;
        text-align: left;
        font-size: 17px;
        padding: 18px;
        font-weight: 600;
      }
      .faq-section .accordion.theme-accordion .card .card-header button:before {
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-top: 6px solid #000000;
        right: 20px;
        top: 25px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .faq-section
        .accordion.theme-accordion
        .card
        .card-header
        button[aria-expanded="true"]:before {
        border-top: 0;
        border-bottom: 6px solid #000000;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .faq-section .accordion.theme-accordion .card .card-header button:hover {
        text-decoration: none;
        color: var(--theme-deafult);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .faq-section .accordion.theme-accordion .card .card-body {
        padding: 15px 18px;
      }
      .faq-section .accordion.theme-accordion .card .card-body p {
        margin-bottom: 0;
        font-size: 14px;
        color: #555555;
        line-height: 1.8;
        letter-spacing: 0.06em;
      }

      .pwd-page {
        text-align: center;
      }
      .pwd-page h2 {
        margin-bottom: 25px;
        color: #222222;
        margin-top: -5px;
      }
      .pwd-page .theme-form input {
        border-color: #dddddd;
        font-size: 15px;
        padding: 15px 25px;
        margin-bottom: 15px;
        height: inherit;
        text-align: center;
      }
      .pwd-page .theme-form .btn-solid,
      .pwd-page .theme-form .btn-outline {
        margin: 0 auto;
      }

      .login-page h3 {
        margin-bottom: 20px;
        text-transform: uppercase;
        color: #222222;
        font-weight: 700;
        margin-top: -5px;
      }

      .login-page .theme-card {
        padding: 30px;
        border: 1px solid #dddddd;
        line-height: 1;
      }
      .login-page .theme-card .theme-form label {
        text-transform: capitalize;
        color: #333333;
        font-size: 14px;
        font-weight: 600;
      }
      .login-page .theme-card .theme-form input {
        border-color: #dddddd;
        font-size: 12px;
        padding: 17px 25px;
        margin-bottom: 30px;
        height: inherit;
      }

      .login-page .authentication-right {
        height: calc(100% - 48px);
      }
      .login-page .authentication-right h6 {
        text-transform: uppercase;
        color: #333333;
        font-weight: 600;
        margin-bottom: 20px;
      }
      .login-page .authentication-right p {
        font-size: 14px;
        color: #555555;
        line-height: 2;
        margin-bottom: 1rem;
      }

      .register-page h3 {
        margin-bottom: 20px;
        text-transform: uppercase;
        color: #222222;
        font-weight: 700;
        margin-top: -5px;
      }

      .register-page .theme-card {
        padding: 30px;
        border: 1px solid #dddddd;
        line-height: 1;
      }
      .register-page .theme-card .theme-form label {
        text-transform: capitalize;
        color: #333333;
        font-size: 14px;
        font-weight: 600;
      }
      .register-page .theme-card .theme-form input {
        border-color: #dddddd;
        font-size: 12px;
        padding: 17px 25px;
        margin-bottom: 30px;
        height: inherit;
      }

      .search-block {
        padding: 0;
      }
      .search-block .form-header .input-group input {
        border-radius: 0 5px 5px 0;
        padding: 15px 20px;
      }
      .search-block .form-header .input-group i {
        padding-right: 10px;
      }
      .search-block .form-header .input-group .btn {
        z-index: 0;
      }

      .contact-page .map iframe {
        width: 100%;
        height: 100%;
        border: none;
      }

      .contact-page .contact-right {
        padding-top: 30px;
        padding-bottom: 30px;
      }
      .contact-page .contact-right ul li {
        position: relative;
        padding-left: 150px;
        margin-top: 45px;
        display: block;
      }
      .contact-page .contact-right ul li:first-child {
        margin-top: 0;
      }
      .contact-page .contact-right ul li .contact-icon {
        position: absolute;
        left: 0;
        text-align: center;
        width: 130px;
        border-right: 1px solid #dddddd;
      }
      .contact-page .contact-right ul li .contact-icon i {
        font-size: 20px;
        color: #ff4c3b;
      }
      .contact-page .contact-right ul li .contact-icon h6 {
        text-transform: uppercase;
        padding-top: 5px;
        font-weight: 600;
        color: #ff4c3b;
      }
      .contact-page .contact-right ul li p {
        font-weight: 600;
        margin-bottom: 0;
        line-height: 30px;
      }

      .contact-page .theme-form label {
        text-transform: capitalize;
        color: #333333;
        font-size: 14px;
        font-weight: 600;
      }

      .contact-page .theme-form input {
        border-color: #dddddd;
        font-size: 12px;
        padding: 17px 25px;
        margin-bottom: 30px;
        height: inherit;
      }

      .contact-page .theme-form textarea {
        border-color: #dddddd;
        font-size: 12px;
        padding: 17px 25px;
        margin-bottom: 30px;
        height: inherit;
      }

      .contact-page .form-control {
        border-radius: 0;
      }

      .qty-box .input-group {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .qty-box .input-group span button {
        background: #ffffff !important;
        border: 1px solid #ced4da;
      }
      .qty-box .input-group .form-control {
        text-align: center;
        width: 80px;
        -webkit-box-flex: unset;
        -ms-flex: unset;
        flex: unset;
      }
      .qty-box .input-group button {
        background-color: transparent;
        border: 0;
        color: #777777;
        cursor: pointer;
        padding-left: 12px;
        font-size: 12px;
        font-weight: 900;
        line-height: 1;
      }
      .qty-box .input-group button i {
        font-weight: 900;
        color: #222222;
      }
      .qty-box .input-group .icon {
        padding-right: 0;
      }

      .order-history .responsive-data {
        display: none;
      }
      .order-history .responsive-data .price {
        margin-bottom: 2px;
      }

      .order-history .dark-data {
        color: black;
        font-weight: 600;
      }

      .cart-section .table tbody + tbody,
      .wishlist-section .table tbody + tbody {
        border-top: none;
      }

      .cart-section .cart-buttons,
      .wishlist-section .cart-buttons {
        padding-top: 35px;
      }
      .cart-section .cart-buttons > div:last-child,
      .wishlist-section .cart-buttons > div:last-child {
        text-align: right;
        padding-right: 59px;
      }

      .cart-section .wishlist-buttons,
      .wishlist-section .wishlist-buttons {
        padding-top: 35px;
        text-align: right;
      }
      .cart-section .wishlist-buttons:last-child a,
      .wishlist-section .wishlist-buttons:last-child a {
        margin-left: 15px;
      }

      .cart-section .cart-table,
      .wishlist-section .cart-table {
        overflow: hidden;
        margin-bottom: 0;
      }
      .cart-section .cart-table thead th,
      .wishlist-section .cart-table thead th {
        border-bottom-width: 1px;
        font-weight: 900;
        color: #222222;
        text-transform: uppercase;
        font-size: 14px;
        border-top: 0;
        text-align: center;
        padding: 0 0.75rem 0.75rem 0.75rem;
      }

      .cart-section tbody h2,
      .wishlist-section tbody h2 {
        margin-bottom: 0;
      }

      .cart-section tbody tr td,
      .wishlist-section tbody tr td {
        min-width: 210px;
        vertical-align: middle;
        color: #777777;
        border-top: 0;
        border-bottom: 1px solid #eeeeee;
        text-align: center;
      }
      .cart-section tbody tr td a,
      .cart-section tbody tr td p,
      .wishlist-section tbody tr td a,
      .wishlist-section tbody tr td p {
        color: #777777;
        font-weight: 400;
        font-size: 14px;
        text-transform: capitalize;
        margin-bottom: 0;
      }
      .cart-section tbody tr td a img,
      .cart-section tbody tr td p img,
      .wishlist-section tbody tr td a img,
      .wishlist-section tbody tr td p img {
        height: 90px;
      }
      .cart-section tbody tr td .td-color,
      .wishlist-section tbody tr td .td-color {
        color: var(--theme-deafult);
      }
      .cart-section tbody tr td h2,
      .wishlist-section tbody tr td h2 {
        font-size: 24px;
        color: #222222;
        font-weight: 400;
      }
      .cart-section tbody tr td .mobile-cart-content,
      .wishlist-section tbody tr td .mobile-cart-content {
        display: none;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 10px;
      }
      .cart-section tbody tr td .mobile-cart-content .qty-box,
      .wishlist-section tbody tr td .mobile-cart-content .qty-box {
        border-radius: 5px;
      }
      .cart-section
        tbody
        tr
        td
        .mobile-cart-content
        .qty-box
        .input-group
        .form-control,
      .wishlist-section
        tbody
        tr
        td
        .mobile-cart-content
        .qty-box
        .input-group
        .form-control {
        width: 48px;
        padding: 6px;
      }
      .cart-section tbody tr td .mobile-cart-content .col-xs-3,
      .wishlist-section tbody tr td .mobile-cart-content .col-xs-3 {
        -ms-flex-item-align: center;
        align-self: center;
        margin-left: 10px;
        margin-right: 10px;
      }
      .cart-section tbody tr td .mobile-cart-content h2,
      .wishlist-section tbody tr td .mobile-cart-content h2 {
        font-size: 20px;
      }

      .cart-section tfoot tr th,
      .wishlist-section tfoot tr th {
        padding-top: 35px;
        text-align: right;
      }

      .cart-section tfoot tr td,
      .wishlist-section tfoot tr td {
        padding-top: 35px;
        padding-bottom: 0;
        text-align: right;
        border: none;
        padding-right: 63px;
      }
      .cart-section tfoot tr td h2,
      .wishlist-section tfoot tr td h2 {
        font-size: 24px;
        margin-bottom: 0;
      }
      .cart-section tfoot tr td:first-child,
      .wishlist-section tfoot tr td:first-child {
        width: 85%;
        font-size: 15px;
        padding-right: 10px;
        text-transform: capitalize;
        font-weight: 700;
      }

      .blog-detail-page .blog-detail p:last-child {
        margin-bottom: 0;
      }

      .blog-detail-page .blog-detail img {
        margin-bottom: 40px;
      }

      .blog-detail-page .blog-detail h3 {
        color: #222222;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: uppercase;
      }

      .blog-detail-page .blog-detail p {
        color: #777777;
        line-height: 1.8;
      }

      .blog-detail-page .blog-detail .post-social {
        color: #777777;
        text-align: left;
        padding-bottom: 15px;
        border-bottom: 1px solid #dddddd;
        margin-bottom: 15px;
      }
      .blog-detail-page .blog-detail .post-social li + li {
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #dddddd;
      }

      .blog-detail-page .blog-advance > div:last-child p:last-child {
        margin-bottom: 0;
      }

      .blog-detail-page .blog-advance img,
      .blog-detail-page .blog-advance .bg-size {
        margin-bottom: 25px;
        margin-top: 25px;
      }

      .blog-detail-page .blog-advance ul {
        list-style-type: decimal;
        list-style-position: inside;
        line-height: 2.5;
        font-size: 15px;
      }
      .blog-detail-page .blog-advance ul li {
        display: list-item;
        font-weight: 700;
      }

      .blog-detail-page .blog-advance p {
        line-height: 1.8;
      }

      .blog-detail-page .comment-section {
        border-bottom: 1px solid #dddddd;
      }
      .blog-detail-page .comment-section li {
        padding-top: 60px;
        padding-bottom: 60px;
        border-top: 1px solid #dddddd;
      }
      .blog-detail-page .comment-section li img {
        height: 65px;
        width: 65px;
        margin-right: 20px;
        border-radius: 100%;
      }
      .blog-detail-page .comment-section li h6 {
        color: #444444;
        text-transform: uppercase;
        font-weight: 700;
        margin-bottom: 5px;
      }
      .blog-detail-page .comment-section li h6 span {
        font-size: 13px;
        font-weight: 500;
        text-transform: capitalize;
        color: #777777;
        margin-left: 20px;
      }
      .blog-detail-page .comment-section li p {
        line-height: 1.8;
        margin-bottom: 0;
      }

      .blog-detail-page .blog-contact h2 {
        margin-bottom: 30px;
        margin-top: -5px;
      }

      .blog-detail-page .blog-contact .theme-form label {
        text-transform: capitalize;
        color: #333333;
        font-size: 16px;
        font-weight: 700;
      }

      .blog-detail-page .blog-contact .theme-form input,
      .blog-detail-page .blog-contact .theme-form textarea {
        border-color: #dddddd;
        font-size: 14px;
        padding: 17px 25px;
        margin-bottom: 30px;
      }

      .blog-page .blog-sidebar h6 {
        margin-bottom: 0;
        line-height: 20px;
        color: #333333;
        font-weight: 700;
      }

      .blog-page .blog-sidebar p {
        line-height: 20px;
        margin-bottom: 0;
        color: #555555;
      }

      .blog-page .blog-sidebar h4 {
        color: #333333;
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: 20px;
        line-height: 20px;
        letter-spacing: 1px;
      }

      .blog-page .blog-sidebar .theme-card {
        border: 1px solid #dddddd;
        padding: 30px;
        background-color: #ffffff;
      }
      .blog-page .blog-sidebar .theme-card .recent-blog li .media img {
        width: 100px;
        margin-right: 10px;
      }
      .blog-page .blog-sidebar .theme-card .recent-blog li + li {
        margin-top: 30px;
      }
      .blog-page .blog-sidebar .theme-card .popular-blog li .blog-date {
        background-color: var(--theme-deafult);
        height: 70px;
        width: 70px;
        margin: 0 15px 0 0;
        padding: 15px;
      }
      .blog-page .blog-sidebar .theme-card .popular-blog li .blog-date span {
        display: block;
        text-align: center;
        color: #ffffff;
        text-transform: uppercase;
      }
      .blog-page .blog-sidebar .theme-card .popular-blog li + li {
        margin-top: 30px;
      }
      .blog-page .blog-sidebar .theme-card .popular-blog li p {
        margin-top: 10px;
      }
      .blog-page .blog-sidebar .theme-card + .theme-card {
        margin-top: 30px;
      }

      .blog-page .blog-media {
        margin-bottom: 30px;
      }
      .blog-page .blog-media:last-child {
        margin-bottom: 0;
      }
      .blog-page .blog-media .blog-right {
        height: 100%;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .blog-page .blog-media .blog-right h6 {
        color: var(--theme-deafult);
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .blog-page .blog-media .blog-right h4 {
        color: #333333;
        font-weight: 700;
        line-height: 1.5;
        margin-bottom: 15px;
      }
      .blog-page .blog-media .blog-right p {
        line-height: 1.8;
        margin-bottom: 0;
        letter-spacing: 0.04em;
      }
      .blog-page .blog-media .blog-right ul {
        color: #777777;
        margin-bottom: 15px;
      }
      .blog-page .blog-media .blog-right ul li {
        font-size: 14px;
        line-height: 1.5;
      }
      .blog-page .blog-media .blog-right ul li i {
        padding-right: 3px;
      }
      .blog-page .blog-media .blog-right ul li + li {
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #dddddd;
      }

      .product-slick .slick-prev,
      .product-slick .slick-next,
      .rtl-product-slick .slick-prev,
      .rtl-product-slick .slick-next,
      .product-right-slick .slick-prev,
      .product-right-slick .slick-next,
      .rtl-product-right-slick .slick-prev,
      .rtl-product-right-slick .slick-next {
        opacity: 0;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        margin-top: -10px;
      }
      .product-slick .slick-prev:before,
      .product-slick .slick-next:before,
      .rtl-product-slick .slick-prev:before,
      .rtl-product-slick .slick-next:before,
      .product-right-slick .slick-prev:before,
      .product-right-slick .slick-next:before,
      .rtl-product-right-slick .slick-prev:before,
      .rtl-product-right-slick .slick-next:before {
        font: normal normal normal 14px/1 FontAwesome;
        opacity: 1;
        color: black;
        background-color: white;
        border-radius: 100%;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      .product-slick .slick-next,
      .rtl-product-slick .slick-next,
      .product-right-slick .slick-next,
      .rtl-product-right-slick .slick-next {
        right: 1px;
      }
      .product-slick .slick-next:before,
      .rtl-product-slick .slick-next:before,
      .product-right-slick .slick-next:before,
      .rtl-product-right-slick .slick-next:before {
        content: "\\f105";
      }

      .product-slick .slick-prev,
      .rtl-product-slick .slick-prev,
      .product-right-slick .slick-prev,
      .rtl-product-right-slick .slick-prev {
        left: 1px;
        z-index: 1;
      }
      .product-slick .slick-prev:before,
      .rtl-product-slick .slick-prev:before,
      .product-right-slick .slick-prev:before,
      .rtl-product-right-slick .slick-prev:before {
        content: "\\f104";
      }

      .product-slick .slick-slide > div,
      .rtl-product-slick .slick-slide > div,
      .product-right-slick .slick-slide > div,
      .rtl-product-right-slick .slick-slide > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 15px;
      }

      .product-slick:hover .slick-prev,
      .product-slick:hover .slick-next,
      .rtl-product-slick:hover .slick-prev,
      .rtl-product-slick:hover .slick-next,
      .product-right-slick:hover .slick-prev,
      .product-right-slick:hover .slick-next,
      .rtl-product-right-slick:hover .slick-prev,
      .rtl-product-right-slick:hover .slick-next {
        opacity: 1;
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .product-slick:hover .slick-prev:before,
      .product-slick:hover .slick-next:before,
      .rtl-product-slick:hover .slick-prev:before,
      .rtl-product-slick:hover .slick-next:before,
      .product-right-slick:hover .slick-prev:before,
      .product-right-slick:hover .slick-next:before,
      .rtl-product-right-slick:hover .slick-prev:before,
      .rtl-product-right-slick:hover .slick-next:before {
        opacity: 1;
      }

      .product-slick:hover .slick-next,
      .rtl-product-slick:hover .slick-next,
      .product-right-slick:hover .slick-next,
      .rtl-product-right-slick:hover .slick-next {
        right: 20px;
      }

      .product-slick:hover .slick-prev,
      .rtl-product-slick:hover .slick-prev,
      .product-right-slick:hover .slick-prev,
      .rtl-product-right-slick:hover .slick-prev {
        left: 20px;
      }

      .slider-nav .slick-slide > div,
      .rtl-slider-nav .slick-slide > div,
      .slider-right-nav .slick-slide > div,
      .rtl-slider-right-nav .slick-slide > div {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 15px 15px 0 15px;
        border: 1px solid #dddddd;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .slider-nav .slick-slide.slick-current > div,
      .rtl-slider-nav .slick-slide.slick-current > div,
      .slider-right-nav .slick-slide.slick-current > div,
      .rtl-slider-right-nav .slick-slide.slick-current > div {
        border-color: #aaaaaa;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .slider-nav .slick-slide.slick-active,
      .rtl-slider-nav .slick-slide.slick-active,
      .slider-right-nav .slick-slide.slick-active,
      .rtl-slider-right-nav .slick-slide.slick-active {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .slider-right-nav .slick-slide:first-child > div,
      .rtl-slider-right-nav .slick-slide:first-child > div {
        margin-top: 0;
      }

      .pro_sticky_info {
        border: 1px solid #dddddd;
        padding: 20px;
      }

      .is_stuck {
        margin-top: 80px;
      }

      .image-scroll div > div {
        padding-bottom: 20px;
      }
      .image-scroll div > div:last-child {
        padding: 0;
      }

      .product-right p {
        margin-bottom: 0;
        line-height: 1.5em;
      }

      .product-right .product-title {
        color: #222222;
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 0;
      }

      .product-right .border-product {
        padding-top: 15px;
        padding-bottom: 20px;
        border-top: 1px dashed #dddddd;
      }

      .product-right h2 {
        text-transform: uppercase;
        margin-bottom: 15px;
        font-size: 25px;
        line-height: 1.2em;
      }

      .product-right h3 {
        font-size: 26px;
        color: #222222;
        margin-bottom: 15px;
      }

      .product-right h4 {
        font-size: 16px;
        margin-bottom: 7px;
      }
      .product-right h4 del {
        color: #777777;
      }
      .product-right h4 span {
        padding-left: 5px;
        color: var(--theme-deafult);
      }

      .product-right .color-variant {
        margin-bottom: 10px;
      }
      .product-right .color-variant li {
        height: 30px;
        width: 30px;
        cursor: pointer;
      }

      .product-right .product-buttons {
        margin-bottom: 20px;
      }
      .product-right .product-buttons .btn-solid,
      .product-right .product-buttons .btn-outline {
        padding: 7px 25px;
      }
      .product-right .product-buttons a:last-child {
        margin-left: 10px;
      }

      .product-right .product-description h6 span {
        float: right;
      }

      .product-right .product-description .qty-box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-top: 10px;
      }
      .product-right .product-description .qty-box .input-group {
        -webkit-box-pack: unset;
        -ms-flex-pack: unset;
        justify-content: unset;
        width: unset;
      }
      .product-right .product-description .qty-box .input-group .form-control {
        border-right: none;
      }

      .product-right .size-box {
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .product-right .size-box ul li {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-right: 10px;
        cursor: pointer;
        border: 1px solid #f7f7f7;
        text-align: center;
      }
      .product-right .size-box ul li a {
        color: #222222;
        font-size: 18px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
      }
      .product-right .size-box ul li.active {
        background-color: #f7f7f7;
      }

      .product-right .product-icon {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .product-right .product-icon .product-social {
        margin-top: 5px;
      }
      .product-right .product-icon .product-social li {
        padding-right: 30px;
      }
      .product-right .product-icon .product-social li a {
        color: #333333;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .product-right .product-icon .product-social li a i {
        font-size: 18px;
      }
      .product-right .product-icon .product-social li a:hover {
        color: var(--theme-deafult);
      }
      .product-right .product-icon .product-social li:last-child {
        padding-right: 0;
      }
      .product-right .product-icon .wishlist-btn {
        background-color: transparent;
        border: none;
      }
      .product-right .product-icon .wishlist-btn i {
        border-left: 1px solid #dddddd;
        font-size: 18px;
        padding-left: 10px;
        margin-left: 5px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .product-right .product-icon .wishlist-btn span {
        padding-left: 10px;
        font-size: 18px;
      }
      .product-right .product-icon .wishlist-btn:hover i {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .product-right .payment-card-bottom {
        margin-top: 10px;
      }
      .product-right .payment-card-bottom ul li {
        padding-right: 10px;
      }

      .product-right .timer {
        margin-top: 10px;
        background-color: #f7f7f7;
      }
      .product-right .timer p {
        color: #222222;
      }

      .product-right.product-form-box {
        text-align: center;
        border: 1px solid #dddddd;
        padding: 20px;
      }
      .product-right.product-form-box .product-description .qty-box {
        margin-bottom: 5px;
      }
      .product-right.product-form-box
        .product-description
        .qty-box
        .input-group {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
      }
      .product-right.product-form-box .product-buttons {
        margin-bottom: 0;
      }
      .product-right.product-form-box .timer {
        margin-bottom: 10px;
        text-align: left;
      }

      .single-product-tables {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: 20px;
      }
      .single-product-tables table {
        width: 20%;
      }
      .single-product-tables table tr {
        height: 35px;
      }
      .single-product-tables table tr td:first-child {
        font-weight: 600;
      }
      .single-product-tables.detail-section {
        margin-top: 0;
      }
      .single-product-tables.detail-section table {
        width: 55%;
      }

      .product-accordion .btn-link {
        color: #222222;
      }
      .product-accordion .btn-link:hover {
        text-decoration: none;
      }

      .product-accordion .card {
        border: none;
      }

      .product-accordion .card-body {
        width: 100%;
        height: auto;
      }

      .product-accordion .card-header {
        padding: 5px 8px;
        border-bottom: 1px dashed rgba(0, 0, 0, 0.125);
        background-color: rgba(127, 127, 127, 0.03);
      }

      .product-related h2 {
        color: #222222;
        padding-bottom: 20px;
        border-bottom: 1px solid #dddada;
        margin-bottom: 20px;
      }

      .rating {
        margin-top: 0;
      }
      .rating i {
        padding-right: 5px;
      }
      .rating i:nth-child(-n + 4) {
        color: #ffa200;
      }
      .rating i:last-child {
        color: #dddddd;
      }
      .rating .three-star {
        padding-bottom: 5px;
      }
      .rating .three-star i {
        color: #acacac;
      }
      .rating .three-star i:nth-child(-n + 3) {
        color: #ffd200;
      }

      .tab-border {
        border: 1px solid #dddddd;
        margin: 0;
        padding: 8px 0;
      }
      .tab-border .nav-border {
        border-bottom: 0;
        border-right: 1px solid #dddddd;
      }

      .vertical-tab.tab-product .nav-material.nav-tabs .nav-item .nav-link,
      .vertical-tab
        .product-full-tab
        .nav-material.nav-tabs
        .nav-item
        .nav-link {
        padding: 15px 20px;
      }

      .tab-product,
      .product-full-tab {
        padding-top: 30px;
      }
      .tab-product .nav-material.nav-tabs,
      .product-full-tab .nav-material.nav-tabs {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
      }
      .tab-product .nav-material.nav-tabs .nav-item .nav-link,
      .product-full-tab .nav-material.nav-tabs .nav-item .nav-link {
        color: #212121;
        text-align: center;
        padding: 0 15px 20px 15px;
        text-transform: uppercase;
        border: 0;
      }
      .tab-product .nav-material.nav-tabs .nav-item .material-border,
      .product-full-tab .nav-material.nav-tabs .nav-item .material-border {
        border-bottom: 2px solid var(--theme-deafult);
        opacity: 0;
      }
      .tab-product .nav-material.nav-tabs .nav-link.active,
      .product-full-tab .nav-material.nav-tabs .nav-link.active {
        color: var(--theme-deafult);
      }
      .tab-product .nav-material.nav-tabs .nav-link.active ~ .material-border,
      .product-full-tab
        .nav-material.nav-tabs
        .nav-link.active
        ~ .material-border {
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        opacity: 1;
      }
      .tab-product .theme-form input,
      .product-full-tab .theme-form input {
        border-color: #dddddd;
        font-size: 15px;
        padding: 15px 25px;
        margin-bottom: 15px;
        height: inherit;
        text-align: left;
      }
      .tab-product .theme-form .btn-solid,
      .tab-product .theme-form .btn-outline,
      .product-full-tab .theme-form .btn-solid,
      .product-full-tab .theme-form .btn-outline {
        margin: 0 auto;
      }
      .tab-product .theme-form textarea,
      .product-full-tab .theme-form textarea {
        border-color: #dddddd;
        font-size: 15px;
        padding: 17px 25px;
        margin-bottom: 15px;
        height: inherit;
      }
      .tab-product .tab-content.nav-material p,
      .product-full-tab .tab-content.nav-material p {
        padding: 20px;
        margin-bottom: -8px;
        line-height: 2;
        letter-spacing: 0.05em;
      }
      .tab-product .tab-content.nav-material .media,
      .product-full-tab .tab-content.nav-material .media {
        margin-top: 20px;
      }
      .tab-product .title,
      .product-full-tab .title {
        padding-right: 45px;
        color: var(--theme-deafult);
        padding-bottom: 20px;
      }
      .tab-product .theme-slider .slick-arrow,
      .product-full-tab .theme-slider .slick-arrow {
        top: -45px;
        height: auto;
      }
      .tab-product .theme-slider .slick-arrow :before,
      .product-full-tab .theme-slider .slick-arrow :before {
        color: #000000;
        font-size: 18px;
      }
      .tab-product .product-box,
      .product-full-tab .product-box {
        position: relative;
        margin: 5px;
      }
      .tab-product .product-box:hover,
      .product-full-tab .product-box:hover {
        -webkit-box-shadow: 0 0 12px 0 #dddddd;
        box-shadow: 0 0 12px 0 #dddddd;
      }
      .tab-product .product-box:hover .lbl-1,
      .product-full-tab .product-box:hover .lbl-1 {
        opacity: 1;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .tab-product .product-box:hover .lbl-2,
      .product-full-tab .product-box:hover .lbl-2 {
        opacity: 1;
        -webkit-animation: flipInY 1000ms ease-in-out;
        animation: flipInY 1000ms ease-in-out;
      }
      .tab-product .product-box:hover .color-variant li,
      .product-full-tab .product-box:hover .color-variant li {
        opacity: 1 !important;
        -webkit-animation: fadeInUp 500ms ease-in-out;
        animation: fadeInUp 500ms ease-in-out;
      }
      .tab-product .product-box .img-block,
      .product-full-tab .product-box .img-block {
        min-height: unset;
      }
      .tab-product .product-box .cart-info,
      .product-full-tab .product-box .cart-info {
        position: absolute;
        padding: 10px 0;
        top: 25%;
        right: 15px;
        width: 40px;
        margin-right: 0;
      }
      .tab-product .product-box .cart-info i,
      .product-full-tab .product-box .cart-info i {
        padding-right: 0;
      }
      .tab-product .product-box .cart-info a,
      .tab-product .product-box .cart-info button,
      .product-full-tab .product-box .cart-info a,
      .product-full-tab .product-box .cart-info button {
        color: #333333;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background-color: #ffffff;
        height: 35px;
        width: 35px;
        margin: 7px 0;
        border-radius: 100%;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border: 0;
        -webkit-box-shadow: 0 0 12px 0 #dddddd;
        box-shadow: 0 0 12px 0 #dddddd;
      }
      .tab-product .product-box .cart-info a :hover,
      .tab-product .product-box .cart-info button :hover,
      .product-full-tab .product-box .cart-info a :hover,
      .product-full-tab .product-box .cart-info button :hover {
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: var(--theme-deafult);
      }
      .tab-product .product-box .lbl-1,
      .product-full-tab .product-box .lbl-1 {
        background-color: var(--theme-deafult);
        padding: 2px 20px 2px 10px;
        display: inline-block;
        text-align: center;
        color: #ffffff;
        position: absolute;
        left: 0;
        top: 15px;
        font-size: 14px;
        line-height: 1.5;
        opacity: 0;
      }
      .tab-product .product-box .lbl-1:before,
      .product-full-tab .product-box .lbl-1:before {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        width: 0;
        height: 0;
        border-top: 12px solid var(--theme-deafult);
        border-bottom: 13px solid var(--theme-deafult);
        border-right: 7px solid #ffffff;
      }
      .tab-product .product-box .lbl-2,
      .product-full-tab .product-box .lbl-2 {
        font-size: 14px;
        top: 15px;
        position: absolute;
        right: 10px;
        color: #333333;
        font-weight: 600;
        text-transform: capitalize;
        opacity: 0;
      }
      .tab-product .product-box a,
      .product-full-tab .product-box a {
        color: #0072bb;
        font-size: 15px;
        font-weight: 700;
        letter-spacing: 1px;
      }
      .tab-product .product-box .color-variant,
      .product-full-tab .product-box .color-variant {
        position: absolute;
        top: -35px;
        width: 100%;
      }
      .tab-product .product-box .slick-slide img,
      .product-full-tab .product-box .slick-slide img {
        display: block;
      }
      .tab-product .product-box .product-details,
      .product-full-tab .product-box .product-details {
        position: relative;
      }
      .tab-product .product-box .product-details .color-variant,
      .product-full-tab .product-box .product-details .color-variant {
        position: absolute;
        top: -35px;
        width: 100%;
      }
      .tab-product .product-box .product-details .color-variant li,
      .product-full-tab .product-box .product-details .color-variant li {
        opacity: 0;
        display: inline-block;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        margin: 0 3px;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      .tab-product .product-box .product-details h6,
      .product-full-tab .product-box .product-details h6 {
        color: #333333;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: capitalize;
      }
      .tab-product .product-box .product-details .price,
      .product-full-tab .product-box .product-details .price {
        padding-bottom: 10px;
        font-size: 16px;
        color: var(--theme-deafult);
      }

      .product-full-tab {
        padding-top: 70px;
      }

      .product-load-more .col-grid-box {
        display: none;
      }

      .load-more-sec {
        margin-top: 40px;
        text-align: center;
      }
      .load-more-sec a {
        font-size: 18px;
        text-transform: uppercase;
        display: block;
        padding: 10px 0;
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        width: 100%;
        color: var(--theme-deafult);
      }

      .product_image_4 > div:nth-last-child(-n + 2) {
        margin-top: 25px;
      }

      .quick-view {
        width: 100%;
        max-width: 1080px;
        max-height: 600px;
        position: relative;
      }

      .checkout-page .checkout-title {
        margin-bottom: 25px;
      }
      .checkout-page .checkout-title h3 {
        color: #444444;
        font-weight: 700;
      }

      .checkout-page .checkout-form .checkout-details {
        position: relative;
        background-color: #f9f9f9;
        border: 1px solid #dddddd;
        padding: 40px;
      }

      .checkout-page .checkout-form .check-out .form-group:last-child {
        margin-bottom: -5px;
      }
      .checkout-page .checkout-form .check-out .form-group:last-child label {
        margin-bottom: -5px;
      }

      .checkout-page .checkout-form .form-group {
        position: relative;
        margin-bottom: 25px;
      }
      .checkout-page .checkout-form .form-group h3 {
        color: #444444;
        font-weight: 700;
        margin-bottom: 30px;
        margin-top: 30px;
      }
      .checkout-page .checkout-form .form-group .field-label {
        line-height: 24px;
        text-transform: capitalize;
        color: #333333;
        margin-bottom: 10px;
        font-weight: 700;
      }
      .checkout-page .checkout-form .form-group .field-label span {
        font-size: 16px;
        color: #222222;
        font-weight: 600;
      }
      .checkout-page .checkout-form .form-group label {
        color: #777777;
      }

      .checkout-page .checkout-form select {
        cursor: pointer;
        -webkit-appearance: none;
        -ms-appearance: none;
        -o-appearance: none;
        -moz-appearance: none;
        background: url(/assets/images/dropdown.png) no-repeat 95%;
      }

      .checkout-page .checkout-form input[type="text"],
      .checkout-page .checkout-form input[type="email"],
      .checkout-page .checkout-form input[type="password"],
      .checkout-page .checkout-form input[type="tel"],
      .checkout-page .checkout-form input[type="number"],
      .checkout-page .checkout-form input[type="url"] {
        width: 100%;
        padding: 0 22px;
        height: 45px;
        border: 1px solid #dddddd;
      }

      .checkout-page .checkout-form select,
      .checkout-page .checkout-form textarea {
        width: 100%;
        padding: 0 22px;
        height: 45px;
        border: 1px solid #dddddd;
      }

      .checkout-page .check-box {
        line-height: 24px;
        font-size: 14px;
        font-weight: normal;
        padding-top: 5px;
      }
      .checkout-page .check-box label {
        position: relative;
        top: -1px;
        font-weight: normal;
        padding: 0;
        font-size: 16px;
        cursor: pointer;
        color: #333333;
      }

      .checkout-page .lower-content {
        margin-top: 30px;
      }
      .checkout-page .lower-content .order-column {
        margin-bottom: 40px;
      }

      .order-box {
        position: relative;
        margin-bottom: 50px;
      }
      .order-box .title-box {
        position: relative;
        padding-bottom: 25px;
        color: #444444;
        font-weight: 600;
        font-size: 22px;
        border-bottom: 1px solid #ededed;
        margin-bottom: 20px;
      }
      .order-box .title-box span {
        position: relative;
        width: 35%;
        float: right;
        line-height: 1.2em;
      }
      .order-box .qty {
        position: relative;
        border-bottom: 1px solid #ededed;
        margin-bottom: 30px;
      }
      .order-box .qty li {
        position: relative;
        display: block;
        font-size: 15px;
        color: #444444;
        line-height: 20px;
        margin-bottom: 20px;
      }
      .order-box .qty li span {
        float: right;
        font-size: 18px;
        line-height: 20px;
        color: #232323;
        font-weight: 400;
        width: 35%;
      }
      .order-box .sub-total {
        position: relative;
        border-bottom: 1px solid #dddddd;
        margin-bottom: 30px;
      }
      .order-box .sub-total li {
        position: relative;
        display: inline-block;
        font-size: 16px;
        font-weight: 600;
        color: #333333;
        line-height: 20px;
        margin-bottom: 20px;
        width: 100%;
      }
      .order-box .sub-total li .count {
        position: relative;
        font-size: 18px;
        line-height: 20px;
        color: var(--theme-deafult);
        font-weight: 400;
        width: 35%;
        float: right;
      }
      .order-box .sub-total .shopping-option label {
        position: relative;
        font-size: 16px;
        line-height: 32px;
        padding-left: 10px;
        color: #6f6f6f;
      }
      .order-box .sub-total .shipping {
        width: 35%;
        float: right;
      }
      .order-box .total {
        position: relative;
        margin-bottom: 40px;
      }
      .order-box .total li {
        position: relative;
        display: block;
        font-weight: 400;
        color: #333333;
        line-height: 20px;
        margin-bottom: 10px;
        font-size: 18px;
      }
      .order-box .total li .count {
        position: relative;
        font-size: 18px;
        line-height: 20px;
        color: var(--theme-deafult);
        font-weight: 400;
      }
      .order-box .total li span {
        float: right;
        font-size: 15px;
        line-height: 20px;
        color: #444444;
        font-weight: 400;
        width: 35%;
        display: block;
      }

      .payment-box {
        position: relative;
      }
      .payment-box .upper-box {
        position: relative;
      }
      .payment-box .payment-options {
        position: relative;
        margin-top: 20px;
        margin-bottom: 30px;
      }
      .payment-box .payment-options li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 15px;
      }
      .payment-box .payment-options li .radio-option {
        position: relative;
      }
      .payment-box .payment-options li .radio-option label {
        position: relative;
        padding-left: 30px;
        text-transform: capitalize;
        color: #6f6f6f;
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 0;
      }
      .payment-box .payment-options li .radio-option input[type="radio"] {
        position: absolute;
        left: 0;
        top: 5px;
      }
      .payment-box .payment-options li .radio-option label .small-text {
        position: relative;
        display: none;
        font-size: 15px;
        line-height: 25px;
        font-weight: 300;
        color: #666666;
        margin-top: 10px;
      }
      .payment-box .payment-options li .radio-option label img {
        position: relative;
        display: block;
        max-width: 100%;
        margin-left: -30px;
        margin-top: 5px;
      }

      .dashboard-left .block-title h2 {
        font-size: 24px;
        padding-bottom: 20px;
      }

      .dashboard-left .block-content {
        border: 1px solid #ddd;
        padding: 15px;
      }
      .dashboard-left .block-content ul li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .dashboard-left .block-content ul li.active {
        color: var(--theme-deafult);
      }
      .dashboard-left .block-content ul li.active a {
        color: var(--theme-deafult);
      }
      .dashboard-left .block-content ul li:before {
        content: "\\f105";
        display: inline-block;
        font-family: FontAwesome;
        font-style: normal;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        width: 30px;
        height: 30px;
        text-align: center;
        font-size: 18px;
        font-weight: 700;
        margin-top: 3px;
      }
      .dashboard-left .block-content ul li a {
        color: black;
      }
      .dashboard-left .block-content ul li:hover {
        padding-left: 10px;
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .dashboard-left .block-content ul li:hover a {
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .padding-cls {
        padding-left: 50px;
        padding-right: 50px;
      }

      .dashboard-right p {
        color: #5f5f5f;
        line-height: 20px;
      }

      .dashboard-right .dashboard {
        border: 1px solid #ddd;
        padding: 30px;
      }
      .dashboard-right .dashboard .page-title h2 {
        font-size: 22px;
        margin-bottom: 15px;
      }
      .dashboard-right .dashboard .welcome-msg p {
        margin-bottom: 0;
      }

      .dashboard .box-head h2 {
        font-size: 22px;
        margin: 20px 0 0;
        text-transform: capitalize;
        color: #333;
      }

      .dashboard .box a {
        color: var(--theme-deafult);
      }

      .dashboard .box h6 {
        margin-bottom: 0;
      }

      .dashboard .box .box-title {
        border-bottom: 1px solid #ddd;
        display: inline-block;
        margin-bottom: 5px;
        padding: 12px 0;
        position: relative;
        width: 100%;
      }
      .dashboard .box .box-title h3 {
        font-size: 16px;
        margin: 0;
        text-transform: capitalize;
        color: #333;
      }
      .dashboard .box .box-title > a {
        position: absolute;
        right: 0;
        top: 12px;
        color: var(--theme-deafult);
      }

      .dashboard .box address {
        margin-bottom: 0;
      }

      .box-content h6 {
        font-size: 14px;
        line-height: 25px !important;
        margin-bottom: 0;
      }

      .box-content a {
        color: var(--theme-deafult);
      }

      .account-sidebar {
        display: none;
        cursor: pointer;
        background-color: var(--theme-deafult);
        color: #ffffff;
        width: 30%;
        font-size: 16px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 700;
        margin-bottom: 20px;
        padding: 5px;
      }

      .success-text {
        text-align: center;
      }
      .success-text i {
        font-size: 50px;
        color: #4ead4e;
      }
      .success-text h2 {
        margin-top: 10px;
        margin-bottom: 15px;
      }
      .success-text p {
        font-size: 18px;
        text-transform: capitalize;
      }
      .success-text.order-fail i {
        color: var(--theme-deafult);
      }

      .order-success-sec h4 {
        font-weight: 700;
        text-transform: capitalize;
      }

      .order-success-sec .order-detail li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        text-transform: capitalize;
        line-height: 24px;
        font-size: 16px;
      }

      .order-success-sec .payment-mode p {
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 0;
      }

      .delivery-sec {
        padding: 30px;
        text-align: center;
        margin-top: 20px;
        background-color: #f9f9f9;
      }
      .delivery-sec h2,
      .delivery-sec h3 {
        color: #000000;
        text-transform: capitalize;
      }

      .product-order h3 {
        font-weight: 700;
        text-transform: uppercase;
        color: #000000;
      }

      .product-order .product-order-detail {
        margin-top: 15px;
      }
      .product-order .product-order-detail img {
        height: 130px;
      }
      .product-order .product-order-detail .order_detail {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .product-order .product-order-detail .order_detail h4 {
        margin-bottom: 5px;
        text-transform: capitalize;
        font-weight: 700;
      }
      .product-order .product-order-detail .order_detail h5 {
        text-transform: capitalize;
        margin-bottom: 0;
      }

      .product-order .total-sec {
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
        margin: 15px 0;
        padding: 15px 0;
      }
      .product-order .total-sec ul li {
        font-size: 18px;
        display: block;
        text-transform: capitalize;
      }
      .product-order .total-sec ul li span {
        float: right;
      }

      .product-order .final-total h3 {
        display: block;
        margin-bottom: 0;
      }
      .product-order .final-total h3 span {
        float: right;
      }

      .compare-section .compare-part {
        position: relative;
      }
      .compare-section .compare-part .close-btn {
        background-color: transparent;
        border: none;
        font-size: 25px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .compare-section .compare-part .img-secton {
        padding: 25px 15px 15px;
      }
      .compare-section .compare-part .img-secton img,
      .compare-section .compare-part .img-secton .bg-size {
        width: 50%;
        margin: 0 auto;
      }
      .compare-section .compare-part .img-secton a h5 {
        margin-bottom: 0;
        text-transform: capitalize;
        margin-top: 10px;
      }
      .compare-section .compare-part .img-secton h5 {
        margin-bottom: 0;
        line-height: 1.2;
      }
      .compare-section .compare-part .detail-part .title-detail {
        background-color: #f7f8fa;
        text-align: center;
        padding: 8px 0;
        border-top: 1px solid #dbdbdb;
        border-bottom: 1px solid #dbdbdb;
      }
      .compare-section .compare-part .detail-part .title-detail h5 {
        margin-bottom: 0;
        text-transform: uppercase;
      }
      .compare-section .compare-part .detail-part .inner-detail {
        padding: 15px;
      }
      .compare-section .compare-part .detail-part .inner-detail p {
        margin-bottom: 0;
        line-height: 1.2;
        letter-spacing: 0.05em;
      }
      .compare-section .compare-part .btn-part {
        text-align: center;
        padding: 15px;
        border-top: 1px solid #ddd;
      }
      .compare-section .compare-part .btn-part .btn-solid,
      .compare-section .compare-part .btn-part .btn-outline {
        padding: 5px 10px;
      }

      .compare-section .slick-slide > div {
        border: 1px solid #ddd;
        border-left: none;
      }

      .compare-section .slick-slide:first-child {
        border-left: 1px solid #ddd;
      }

      .compare-padding {
        padding-bottom: 50px;
      }
      .compare-padding h2 {
        margin-bottom: 20px;
      }

      .compare-lable {
        position: absolute;
        font-size: 13px;
        font-weight: 700;
        text-transform: uppercase;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        writing-mode: vertical-rl;
        -webkit-transform: rotate(-180deg);
        transform: rotate(-180deg);
        top: 20px;
        left: 16px;
        letter-spacing: 0.1em;
        z-index: 1;
      }

      .compare-page .table-wrapper {
        padding-bottom: 0;
      }
      .compare-page .table-wrapper .table {
        border: 1px solid #eeeeee;
        text-transform: capitalize;
        color: #222222;
      }
      .compare-page .table-wrapper .table .product-name {
        width: 15%;
      }
      .compare-page .table-wrapper .table .featured-image {
        width: 185px;
      }
      .compare-page .table-wrapper .table td {
        border-top: none;
      }
      .compare-page .table-wrapper .table thead .th-compare td {
        font-size: 14px;
        font-weight: 700;
        background: #f8f8f8;
        border-right: 1px solid #eee;
      }
      .compare-page .table-wrapper .table thead .th-compare th {
        text-align: left;
        border-bottom: 1px solid #eeeeee;
        border-right: 1px solid #eeeeee;
      }
      .compare-page .table-wrapper .table thead .th-compare th .remove-compare {
        float: left;
        border: none;
        background: transparent;
        padding: 0;
        font-size: 14px;
        font-weight: 500;
      }
      .compare-page .table-wrapper .table tbody tr th {
        background: #f8f8f8;
      }
      .compare-page .table-wrapper .table tbody tr td {
        border-right: 1px solid #eee;
        position: relative;
      }
      .compare-page .table-wrapper .table tbody tr th,
      .compare-page .table-wrapper .table tbody tr td {
        padding: 15px;
        vertical-align: top;
        border-bottom: 1px solid #eee;
        border-top: 1px solid #eee;
        border-right: 1px solid #eee;
      }
      .compare-page .table-wrapper .table tbody tr .grid-link__title {
        font-size: 15px;
      }
      .compare-page .table-wrapper .table tbody tr .product_price {
        margin: 15px 0;
      }
      .compare-page .table-wrapper .table tbody tr .product_price span.money {
        padding-left: 5px;
      }
      .compare-page .table-wrapper .table tbody tr p {
        color: #222222;
        font-size: 13px;
        line-height: 20px;
        margin: 0;
      }
      .compare-page .table-wrapper .table tbody tr .add-to-cart,
      .compare-page .table-wrapper .table tbody tr .select-option-cls {
        padding: 6px 10px;
      }

      .typography_section .typography-box {
        margin-bottom: 30px;
      }
      .typography_section .typography-box p {
        line-height: 22px;
      }
      .typography_section .typography-box .headings {
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 20px;
        background-color: rgba(247, 247, 247, 0.5);
        padding: 8px 12px;
      }
      .typography_section .typography-box .headings h3 {
        text-transform: capitalize;
        color: #2d2d2d;
        margin-bottom: 0;
        font-weight: 400;
        font-size: 20px;
      }
      .typography_section .typography-box .headings span {
        color: #777777;
      }
      .typography_section .typography-box .headings span code {
        color: #777777;
      }
      .typography_section .typography-box .typo-content.heading_content h1,
      .typography_section .typography-box .typo-content.heading_content h2,
      .typography_section .typography-box .typo-content.heading_content h3,
      .typography_section .typography-box .typo-content.heading_content h4,
      .typography_section .typography-box .typo-content.heading_content h5,
      .typography_section .typography-box .typo-content.heading_content h6 {
        font-weight: 400;
        color: black;
        text-transform: uppercase;
        line-height: 1;
        margin-bottom: 10px;
      }
      .typography_section .typography-box .typo-content .sub-title {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding-bottom: 5px;
        margin-bottom: 8px;
        font-size: 18px;
        color: #222222;
        text-transform: capitalize;
      }
      .typography_section .typography-box .typo-content.product-pagination {
        border: none;
        margin: 0;
      }
      .typography_section
        .typography-box
        .typo-content.product-pagination
        .pagination
        .page-item {
        border-top: 1px solid #dddddd;
        border-bottom: 1px solid #dddddd;
      }
      .typography_section
        .typography-box
        .typo-content.product-pagination
        .pagination
        .page-item
        a {
        padding: 10px 14px;
      }
      .typography_section .typography-box .typo-content.input_button input {
        margin-bottom: 10px;
      }
      .typography_section .typography-box .typo-content.input_button label {
        font-size: 16px;
        text-transform: capitalize;
        padding-left: 5px;
      }
      .typography_section .typography-box .typo-content.loader-typo {
        width: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .typography_section
        .typography-box
        .typo-content.loader-typo
        .pre-loader {
        position: relative;
        width: 50px;
        height: 50px;
        background-color: var(--theme-deafult);
        border-radius: 50%;
      }
      .typography_section
        .typography-box
        .typo-content.loader-typo
        .pre-loader:after {
        content: "";
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        border: 0 solid white;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-animation: loading 1000ms ease-out forwards infinite;
        animation: loading 1000ms ease-out forwards infinite;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .typography_section .typography-box .typo-content .footer-social {
        margin-top: 0;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .typography_section .typography-box:last-child {
        margin-bottom: 0;
      }

      .typography_section code {
        background-color: #f7f7f7;
        padding: 3px;
        margin: 0 3px;
        border-radius: 2px;
      }

      .profile-section {
        background-color: #f5f5f5;
        border: 1px solid #dddddd;
        padding: 15px;
      }
      .profile-section .profile-detail .profile-name {
        font-weight: 700;
      }
      .profile-section .profile-detail p {
        margin-bottom: 8px;
      }

      .vendor-cover .bg-size {
        height: 350px;
      }

      .vendor-profile {
        margin-top: -70px;
      }
      .vendor-profile .profile-left {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 20px;
        background-color: white;
        -webkit-box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.07);
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.07);
      }
      .vendor-profile .profile-left .profile-image {
        text-align: center;
        width: 20%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .vendor-profile .profile-left .profile-image img {
        width: 60%;
      }
      .vendor-profile .profile-left .profile-image h3 {
        font-weight: 700;
        margin-bottom: 5px;
        color: black;
      }
      .vendor-profile .profile-left .profile-image h6 {
        margin-bottom: 0;
        margin-top: 0;
        letter-spacing: 0.05em;
        text-transform: capitalize;
      }
      .vendor-profile .profile-left .profile-detail {
        border-left: 1px solid #efefef;
        padding-left: 20px;
        margin-left: 20px;
        width: 60%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .vendor-profile .profile-left .profile-detail h6 {
        margin-bottom: 0;
        margin-top: 0;
        letter-spacing: 0.05em;
        text-transform: capitalize;
      }
      .vendor-profile .profile-left .profile-detail p {
        margin-bottom: 0;
        font-size: 14px;
        line-height: 1.5;
      }
      .vendor-profile .profile-left .profile-detail p + p {
        margin-top: 10px;
      }
      .vendor-profile .profile-left .vendor-contact {
        border-left: 1px solid #efefef;
        padding-left: 20px;
        margin-left: 20px;
        width: 20%;
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
      }
      .vendor-profile .profile-left .vendor-contact .footer-social {
        margin-top: 0;
        margin-bottom: 12px;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .vendor-profile .profile-left .vendor-contact .footer-social i {
        color: #989898;
      }
      .vendor-profile .profile-left .vendor-contact .footer-social li {
        padding: 0 5px;
      }
      .vendor-profile .profile-left .vendor-contact h6 {
        text-transform: capitalize;
        color: black;
        font-weight: 700;
        margin-bottom: 8px;
      }
      .vendor-profile .profile-left .vendor-contact a {
        text-transform: capitalize;
      }
      .vendor-profile .profile-left + .profile-left {
        margin-top: 40px;
      }
      .vendor-profile .page-link {
        border-color: #efefef;
        background-color: #f9f9f9;
      }
      .vendor-profile .page-link:hover {
        background-color: #f1f1f1;
      }

      .become-vendor {
        background-color: #f7f7f7;
        overflow: hidden;
      }
      .become-vendor h4 {
        margin-bottom: 40px;
        text-transform: capitalize;
        font-weight: 600;
        line-height: 1.3;
      }
      .become-vendor .step-bg {
        position: relative;
      }
      .become-vendor .step-bg:before {
        content: "";
        position: absolute;
        left: -0;
        right: -0;
        height: 100%;
        display: block;
        background: url("/assets/images/vendor/step-arrow.png") no-repeat center
          center;
      }
      .become-vendor .step-bg .row {
        margin-left: -50px;
        margin-right: -50px;
      }
      .become-vendor .step-bg .row > div {
        padding-left: 50px;
        padding-right: 50px;
      }
      .become-vendor .step-bg .row > div:nth-child(1),
      .become-vendor .step-bg .row > div:nth-child(3) {
        margin-bottom: 30px;
      }
      .become-vendor .step-bg .row > div:nth-child(2) {
        margin-top: 30px;
      }
      .become-vendor .step-bg h4 {
        margin-bottom: 10px;
      }
      .become-vendor .step-bg .step-box {
        position: relative;
        padding: 50px 35px 33px;
        -webkit-box-shadow: 0 15px 39px 0 rgba(8, 18, 109, 0.08);
        box-shadow: 0 15px 39px 0 rgba(8, 18, 109, 0.08);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background-color: #ffffff;
        text-align: center;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        width: 100%;
        height: 100%;
      }
      .become-vendor .step-bg .step-box .steps {
        position: relative;
        width: 80px;
        height: 80px;
        background: #f7f7f7;
        margin: 0 auto 25px auto;
        color: var(--theme-deafult);
        text-align: center;
        font-weight: 500;
        border-radius: 10px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: calc(28px + (40 - 28) * ((100vw - 320px) / (1920 - 320)));
      }
      .become-vendor .step-bg .step-box p {
        line-height: 1.5;
        margin-bottom: 0;
      }

      .start-selling h4 {
        margin-bottom: 10px;
        text-transform: capitalize;
        font-weight: 600;
        line-height: 1.3;
      }

      .start-selling p {
        line-height: 2;
        letter-spacing: 0.03em;
      }

      .start-selling .btn {
        margin-top: 20px;
      }

      .vendor-dashboard .dashboard-box {
        padding: 20px 10px;
        background-color: #f9f9f9;
      }
      .vendor-dashboard .dashboard-box .date-picker-box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .vendor-dashboard .dashboard-box .date-picker-box .input-group {
        width: 50%;
        padding: 0 10px;
      }

      .dashboard-section .dashboard-sidebar {
        position: -webkit-sticky;
        position: sticky;
        top: 30px;
        z-index: 1;
        padding: 30px 0 15px 0;
        background-color: #f8f8f8;
      }
      .dashboard-section .dashboard-sidebar .profile-top {
        padding: 0 16px;
        margin-bottom: calc(
          10px + (20 - 10) * ((100vw - 320px) / (1920 - 320))
        );
      }
      .dashboard-section .dashboard-sidebar .profile-top .profile-image {
        position: relative;
      }
      .dashboard-section .dashboard-sidebar .profile-top .profile-image img {
        width: 130px;
        margin: 0 auto;
        display: block;
        border-radius: 100%;
      }
      .dashboard-section
        .dashboard-sidebar
        .profile-top
        .profile-image
        .profile-edit {
        position: absolute;
        bottom: 0;
        right: 30%;
      }
      .dashboard-section
        .dashboard-sidebar
        .profile-top
        .profile-image
        .profile-edit
        svg {
        stroke: var(--theme-deafult);
      }
      .dashboard-section .dashboard-sidebar .profile-top .profile-detail {
        text-align: center;
        margin-top: 15px;
      }
      .dashboard-section .dashboard-sidebar .profile-top .profile-detail h5 {
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 5px;
      }
      .dashboard-section .dashboard-sidebar .profile-top .profile-detail h6 {
        color: #777777;
        margin-bottom: 3px;
      }
      .dashboard-section .dashboard-sidebar .faq-tab .nav-tabs {
        -webkit-box-shadow: none;
        box-shadow: none;
        padding: 0;
      }

      .dashboard-section .counter-section .counter-box {
        background-color: #f8f8f8;
        padding: 30px 30px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-left: 3px solid var(--theme-deafult);
        border-radius: 8px;
      }
      .dashboard-section .counter-section .counter-box img {
        height: 50px;
        margin-right: 20px;
      }
      .dashboard-section .counter-section .counter-box h3 {
        font-weight: 700;
        color: var(--theme-deafult);
        margin-bottom: 4px;
        font-size: 20px;
      }
      .dashboard-section .counter-section .counter-box h5 {
        margin-bottom: 0;
        text-transform: capitalize;
      }

      .dashboard-section .faq-content .card {
        border: none;
        background-color: #f8f8f8;
        margin-top: 30px;
      }

      .dashboard-section .dashboard-table h3 {
        text-transform: capitalize;
        font-size: 16px;
        color: black;
        margin-bottom: 15px;
      }

      .dashboard-section .dashboard-table img {
        width: 50px;
      }

      .dashboard-section .dashboard-table .table thead th {
        border-top: none;
      }

      .dashboard-section .dashboard-table .table th,
      .dashboard-section .dashboard-table .table td {
        vertical-align: middle;
        text-transform: capitalize;
        text-align: center;
      }

      .dashboard-section .top-sec {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-bottom: 15px;
      }
      .dashboard-section .top-sec h3 {
        text-transform: capitalize;
        color: black;
        font-size: 20px;
      }
      .dashboard-section .top-sec .btn {
        margin-left: auto;
        text-transform: capitalize;
        padding: 7px 14px;
      }

      .dashboard-section .dashboard-box .dashboard-title {
        margin-bottom: 20px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .dashboard-section .dashboard-box .dashboard-title h4 {
        text-transform: capitalize;
        font-weight: 700;
        margin-bottom: 0;
      }
      .dashboard-section .dashboard-box .dashboard-title span {
        margin-left: 30px;
        padding: 2px 16px;
        border-radius: 2px;
        text-transform: capitalize;
        color: var(--theme-deafult);
        cursor: pointer;
      }

      .dashboard-section .dashboard-box .dashboard-detail ul li {
        display: block;
        margin-bottom: 10px;
      }
      .dashboard-section .dashboard-box .dashboard-detail ul li .details {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
      .dashboard-section .dashboard-box .dashboard-detail ul li .details h6 {
        text-transform: capitalize;
        margin-bottom: 0;
      }
      .dashboard-section .dashboard-box .dashboard-detail ul li .details span {
        margin-left: calc(10px + (30 - 10) * ((100vw - 320px) / (1920 - 320)));
        border-radius: 2px;
        text-transform: capitalize;
        color: var(--theme-deafult);
        cursor: pointer;
      }
      .dashboard-section .dashboard-box .dashboard-detail ul li .details .left {
        width: 150px;
        margin-right: 15px;
      }
      .dashboard-section
        .dashboard-box
        .dashboard-detail
        ul
        li
        .details
        .left
        h6 {
        color: #4e4e4e;
      }
      .dashboard-section
        .dashboard-box
        .dashboard-detail
        ul
        li
        .details
        .right {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .dashboard-section
        .dashboard-box
        .dashboard-detail
        ul
        li
        .details
        .right
        h6 {
        font-weight: 500;
      }
      .dashboard-section .dashboard-box .dashboard-detail ul li:last-child {
        margin-bottom: 0;
      }

      .dashboard-section .dashboard-box .dashboard-detail .account-setting h5 {
        text-transform: capitalize;
      }

      .dashboard-section
        .dashboard-box
        .dashboard-detail
        .account-setting
        .row
        > div
        .form-check {
        margin-bottom: 10px;
        padding-left: 0;
      }
      .dashboard-section
        .dashboard-box
        .dashboard-detail
        .account-setting
        .row
        > div
        .form-check:last-child {
        margin-bottom: 0;
      }

      .dashboard-section
        .dashboard-box
        .dashboard-detail
        .account-setting
        .btn {
        margin-top: 15px;
      }

      .dashboard-section
        .dashboard-box
        .dashboard-detail
        .account-setting
        + .account-setting {
        margin-top: 15px;
      }

      .dashboard-section .radio_animated {
        position: relative;
        margin: 0 1rem 0 0;
        cursor: pointer;
      }
      .dashboard-section .radio_animated:before {
        -webkit-transition: -webkit-transform 0.4s
          cubic-bezier(0.45, 1.8, 0.5, 0.75);
        transition: -webkit-transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
        transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
        transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75),
          -webkit-transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
        -webkit-transform: scale(0, 0);
        transform: scale(0, 0);
        content: "";
        position: absolute;
        top: 0;
        left: 0.125rem;
        z-index: 1;
        width: 0.75rem;
        height: 0.75rem;
        background: var(--theme-deafult);
        border-radius: 50%;
      }
      .dashboard-section .radio_animated:after {
        content: "";
        position: absolute;
        top: -0.25rem;
        left: -0.125rem;
        width: 1.25rem;
        height: 1.25rem;
        background: #ffffff;
        border: 2px solid #e8ebf2;
        border-radius: 50%;
      }
      .dashboard-section .radio_animated:checked:before {
        -webkit-transform: scale(1, 1);
        transform: scale(1, 1);
      }

      .faq-tab .nav-tabs {
        display: block;
        border-bottom: none;
        background-color: white;
        padding: 10px 0;
      }
      .faq-tab .nav-tabs .nav-item {
        display: block;
        margin-bottom: 0;
      }
      .faq-tab .nav-tabs .nav-item .nav-link {
        text-transform: capitalize;
        color: black;
        font-size: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
        border: none;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        border-radius: 0;
        background-color: #f8f8f8;
      }
      .faq-tab .nav-tabs .nav-item .nav-link.active {
        border: none;
        border-right: 2px solid var(--theme-deafult);
        border-radius: 0;
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .faq-tab .nav-tabs .nav-item .nav-link:hover {
        border: none;
        border-right: 2px solid var(--theme-deafult);
        color: var(--theme-deafult);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      /*=====================
          23.Loader CSS start
      ==========================*/
      .loader-wrapper {
        height: 100vh;
        width: 100vw;
        background-color: #fff;
        display: block;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        position: fixed;
        z-index: 9999;
        top: 0;
      }
      .loader-wrapper .loader {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        background-color: var(--theme-deafult);
        border-radius: 50%;
      }
      .loader-wrapper .loader:after {
        content: "";
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        border: 0 solid white;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-animation: loading 1000ms ease-out forwards infinite;
        animation: loading 1000ms ease-out forwards infinite;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .loader-wrapper.gradient-loader .loader {
        background: -webkit-gradient(
          linear,
          left top,
          left bottom,
          from(var(--gradient1)),
          color-stop(99%, var(--gradient2))
        );
        background: linear-gradient(
          180deg,
          var(--gradient1) 0%,
          var(--gradient2) 99%
        );
        background-color: var(--theme-deafult);
      }
      .loader-wrapper.green-loader .loader {
        background-image: -webkit-gradient(
          linear,
          left top,
          right top,
          from(var(--gradient1)),
          to(var(--gradient2))
        );
        background-image: linear-gradient(
          to right,
          var(--gradient1),
          var(--gradient2)
        );
        background-color: var(--theme-deafult);
      }

      @-webkit-keyframes loading {
        0% {
          border: 0 solid white;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        20% {
          border: 8px solid white;
          width: 0;
          height: 0;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        100% {
          border: 8px solid white;
          width: 100%;
          height: 100%;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
      }

      @keyframes loading {
        0% {
          border: 0 solid white;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        20% {
          border: 8px solid white;
          width: 0;
          height: 0;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        100% {
          border: 8px solid white;
          width: 100%;
          height: 100%;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
      }

      .loader_skeleton .home-slider .home .slider-contain h2,
      .loader_skeleton .home-slider .home .slider-contain h1,
      .loader_skeleton .home-slider .home .slider-contain h6,
      .loader_skeleton .collection-banner .ldr-bg .contain-banner h4,
      .loader_skeleton .collection-banner .ldr-bg .contain-banner h2,
      .loader_skeleton .collection-banner .ldr-bg .contain-banner h6,
      .loader_skeleton .title1 h4,
      .loader_skeleton .title1 h2,
      .loader_skeleton .product-para .first,
      .loader_skeleton .product-para .second,
      .loader_skeleton .top-banner-wrapper .top-banner-content h4,
      .loader_skeleton .top-banner-wrapper .top-banner-content h5,
      .loader_skeleton .top-banner-wrapper .top-banner-content p,
      .loader_skeleton .product-top-filter .ldr-text,
      .loader_skeleton .product-box .product-detail h4,
      .loader_skeleton .product-box .product-detail h5,
      .loader_skeleton .product-box .product-detail h6,
      .loader_skeleton .category-button .btn-outline,
      .loader_skeleton .category-block .category-details h5,
      .loader_skeleton .category-block .category-details h6,
      .loader_skeleton .service-home .service-block1 h4,
      .loader_skeleton .service-home .service-block1 p,
      .loader_skeleton .service-block1 h5,
      .loader_skeleton .service-block h4,
      .loader_skeleton .service-block p,
      .loader_skeleton .category-tools .category-m .category-wrapper h4,
      .loader_skeleton
        .category-tools
        .category-m
        .category-wrapper
        .category-link
        li,
      .loader_skeleton .category-tools .category-m .category-wrapper .ldr-btn,
      .loader_skeleton .collection-filter-block .filter-block h4,
      .loader_skeleton .collection-filter-block .filter-block ul li,
      .loader_skeleton .theme-card .title-border,
      .loader_skeleton .product-page .product-right h2,
      .loader_skeleton .product-page .product-right h4,
      .loader_skeleton .product-page .product-right h3,
      .loader_skeleton .product-page .product-right ul li,
      .loader_skeleton .product-page .product-right .btn-group .btn-ldr,
      .loader_skeleton .tab-product ul li {
        background: -webkit-gradient(
          linear,
          left top,
          right top,
          color-stop(8%, rgba(212, 212, 212, 0.3)),
          color-stop(18%, #e4e4e4),
          color-stop(33%, rgba(212, 212, 212, 0.3))
        );
        background: linear-gradient(
          90deg,
          rgba(212, 212, 212, 0.3) 8%,
          #e4e4e4 18%,
          rgba(212, 212, 212, 0.3) 33%
        );
        background-size: 800px 104px;
        -webkit-animation: skeleton-loader 2s infinite linear;
        animation: skeleton-loader 2s infinite linear;
      }

      .loader_skeleton {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
        display: block;
        background-color: white;
        overflow-y: auto;
        overflow-x: hidden;
      }
      .loader_skeleton .mt-ldr {
        margin-top: 30px;
      }
      .loader_skeleton header.header-gym {
        background-color: transparent;
      }
      .loader_skeleton header.header-gym .top-header .header-contact li {
        color: black;
      }
      .loader_skeleton header.header-gym .top-header .header-dropdown li {
        color: black;
      }
      .loader_skeleton header.header-gym .top-header .header-dropdown li a i {
        color: black;
      }
      .loader_skeleton .gym-slider .home-slider .home {
        height: calc(300px + (670 - 300) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .home-slider .home {
        background: #f3f3f3;
        height: calc(270px + (530 - 270) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .home-slider .home .slider-contain {
        height: calc(270px + (530 - 270) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .home-slider .home .slider-contain h2 {
        width: calc(200px + (300 - 200) * ((100vw - 320px) / (1920 - 320)));
        height: calc(15px + (20 - 15) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .home-slider .home .slider-contain h1 {
        width: calc(250px + (400 - 250) * ((100vw - 320px) / (1920 - 320)));
        height: calc(42px + (52 - 42) * ((100vw - 320px) / (1920 - 320)));
        margin-top: calc(10px + (20 - 10) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: calc(6px + (16 - 6) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .home-slider .home .slider-contain h6 {
        width: calc(120px + (150 - 120) * ((100vw - 320px) / (1920 - 320)));
        height: calc(26px + (35 - 26) * ((100vw - 320px) / (1920 - 320)));
        margin-top: 10px;
      }
      .loader_skeleton .home-slider.h-100vh .home {
        height: 100vh;
      }
      .loader_skeleton .home-slider.h-75vh .home {
        height: 75vh;
      }
      .loader_skeleton .collection-banner .ldr-bg {
        background: #f3f3f3;
        width: 100%;
        height: 250px;
      }
      .loader_skeleton .collection-banner .ldr-bg .contain-banner h4 {
        width: 120px;
        height: 18px;
      }
      .loader_skeleton .collection-banner .ldr-bg .contain-banner h2 {
        width: calc(150px + (200 - 150) * ((100vw - 320px) / (1920 - 320)));
        height: calc(25px + (35 - 25) * ((100vw - 320px) / (1920 - 320)));
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .loader_skeleton .collection-banner .ldr-bg .contain-banner h6 {
        width: 90px;
        height: 18px;
      }
      .loader_skeleton .collection-banner.large-banner .ldr-bg {
        height: calc(280px + (430 - 280) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .collection-banner.absolute-banner {
        overflow: unset;
      }
      .loader_skeleton .title1 h4 {
        width: 140px;
        height: 22px;
        margin: 0 auto 10px;
      }
      .loader_skeleton .title1 h2 {
        width: 320px;
        height: 44px;
        margin: 0 auto 10px;
      }
      .loader_skeleton .product-para .first {
        width: calc(290px + (550 - 290) * ((100vw - 320px) / (1920 - 320)));
        height: 20px;
        padding-bottom: 0;
        margin: 0 auto 10px;
      }
      .loader_skeleton .product-para .second {
        width: calc(190px + (450 - 190) * ((100vw - 320px) / (1920 - 320)));
        height: 20px;
        padding-bottom: 0;
        margin: 0 auto 30px;
      }
      .loader_skeleton .top-banner-wrapper .img-ldr-top {
        height: calc(90px + (280 - 90) * ((100vw - 320px) / (1920 - 320)));
        background-color: #f3f3f3;
        width: 100%;
      }
      .loader_skeleton .top-banner-wrapper .top-banner-content h4 {
        width: 80px;
        height: 20px;
      }
      .loader_skeleton .top-banner-wrapper .top-banner-content h5 {
        width: 62%;
        height: 20px;
      }
      .loader_skeleton .top-banner-wrapper .top-banner-content p {
        width: 100%;
        height: 20px;
        margin-top: 8px;
      }
      .loader_skeleton .product-top-filter {
        border-color: #f3f3f3;
      }
      .loader_skeleton .product-top-filter .row > div {
        border-left: 1px solid #f3f3f3;
      }
      .loader_skeleton .product-top-filter .row > div:first-child {
        border-left: none;
      }
      .loader_skeleton .product-top-filter .filter-panel {
        padding: 20px;
      }
      .loader_skeleton .product-top-filter .ldr-text {
        width: 100%;
        height: 18px;
        margin-bottom: 0;
      }
      .loader_skeleton .product-wrapper-grid .product-box .img-wrapper {
        height: calc(270px + (300 - 270) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton
        .product-wrapper-grid.three-grid
        .product-box
        .img-wrapper {
        height: calc(270px + (480 - 270) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .product-box .img-wrapper {
        width: 100%;
        height: calc(270px + (350 - 270) * ((100vw - 320px) / (1920 - 320)));
        background-color: #f3f3f3;
      }
      .loader_skeleton .product-box .product-detail {
        padding-left: 0;
      }
      .loader_skeleton .product-box .product-detail h4 {
        width: calc(100px + (150 - 100) * ((100vw - 320px) / (1920 - 320)));
        height: calc(14px + (18 - 14) * ((100vw - 320px) / (1920 - 320)));
        border-radius: 15px;
        margin-top: 14px;
        margin-bottom: 12px;
      }
      .loader_skeleton .product-box .product-detail h5 {
        width: calc(170px + (230 - 170) * ((100vw - 320px) / (1920 - 320)));
        height: calc(10px + (15 - 10) * ((100vw - 320px) / (1920 - 320)));
        border-radius: 15px;
        margin-top: 8px;
      }
      .loader_skeleton .product-box .product-detail h5.second {
        width: calc(140px + (200 - 140) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .product-box .product-detail h6 {
        width: calc(50px + (80 - 50) * ((100vw - 320px) / (1920 - 320)));
        height: calc(12px + (16 - 12) * ((100vw - 320px) / (1920 - 320)));
        border-radius: 15px;
        margin-top: calc(14px + (10 - 14) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: 12px;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .loader_skeleton .center-slider .product-box .product-detail h4,
      .loader_skeleton .center-slider .product-box .product-detail h6 {
        margin-left: auto;
        margin-right: auto;
      }
      .loader_skeleton .center-detail .product-box .product-detail h4,
      .loader_skeleton .center-detail .product-box .product-detail h5,
      .loader_skeleton .center-detail .product-box .product-detail h6 {
        margin-left: auto;
        margin-right: auto;
      }
      .loader_skeleton .grid-products .product-box .img-wrapper {
        height: calc(270px + (290 - 270) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .grid-products .product-box .product-detail h4 {
        width: calc(100px + (120 - 100) * ((100vw - 320px) / (1920 - 320)));
        height: calc(14px + (16 - 14) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .grid-products .product-box .product-detail h5 {
        width: calc(120px + (150 - 120) * ((100vw - 320px) / (1920 - 320)));
        height: calc(10px + (14 - 10) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .grid-products .product-box .product-detail h5.second {
        width: calc(110px + (140 - 110) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .category-button .btn-outline {
        height: 50px;
        border: none;
      }
      .loader_skeleton .category-block .category-image.svg-image {
        background-color: #f3f3f3;
        border-color: #f3f3f3;
      }
      .loader_skeleton .category-block .category-details h5 {
        width: 70px;
        height: 20px;
      }
      .loader_skeleton .category-block .category-details h6 {
        margin: 8px auto 0;
        width: 48px;
        height: 18px;
      }
      .loader_skeleton .service-home .service-block1 h4 {
        width: 70px;
        height: 14px;
        margin-left: auto;
        margin-right: auto;
      }
      .loader_skeleton .service-home .service-block1 p {
        width: 90px;
        height: 12px;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
      }
      .loader_skeleton .service-block1 svg {
        background-color: #f3f3f3;
        width: 60px;
        height: 60px;
      }
      .loader_skeleton .service-block1 h5 {
        width: 160px;
        height: 20px;
        margin: 0 auto;
      }
      .loader_skeleton .service-block svg {
        background-color: #f3f3f3;
        width: calc(46px + (60 - 46) * ((100vw - 320px) / (1920 - 320)));
        height: calc(46px + (60 - 46) * ((100vw - 320px) / (1920 - 320)));
        margin-top: auto;
        margin-bottom: auto;
      }
      .loader_skeleton .service-block h4 {
        width: 120px;
        height: 14px;
      }
      .loader_skeleton .service-block p {
        width: 160px;
        height: 12px;
        margin-top: 10px;
      }
      .loader_skeleton .ldr-img {
        width: 250px;
        height: 250px;
        margin: 0 auto;
        background-color: #f3f3f3;
      }
      .loader_skeleton .inside-detail .product-detail {
        position: absolute;
        bottom: 15px;
        left: 15px;
      }
      .loader_skeleton .inside-detail.center_details .product-detail {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
      }
      .loader_skeleton .inside-detail.center_details .product-detail h4,
      .loader_skeleton .inside-detail.center_details .product-detail h5,
      .loader_skeleton .inside-detail.center_details .product-detail h6 {
        margin-left: auto;
        margin-right: auto;
      }
      .loader_skeleton .banner-slider .home-banner .home-slider .home {
        height: calc(129px + (253 - 129) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .center-slider .product-box .img-wrapper {
        height: calc(150px + (350 - 150) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .full-box .side-part .product-box .img-wrapper {
        height: calc(50px + (250 - 50) * ((100vw - 320px) / (1920 - 320)));
        width: calc(120px + (230 - 150) * ((100vw - 320px) / (1920 - 320)));
        margin-right: 15px;
      }
      .loader_skeleton .full-box .side-part .product-box + .product-box {
        margin-top: 25px;
      }
      .loader_skeleton .bg-block {
        height: auto;
      }
      .loader_skeleton .bg-block .product-box .img-wrapper {
        height: calc(150px + (250 - 150) * ((100vw - 320px) / (1920 - 320)));
        width: calc(120px + (230 - 150) * ((100vw - 320px) / (1920 - 320)));
        margin-right: 15px;
      }
      .loader_skeleton .bg-block.tab-bg {
        background-image: none;
      }
      .loader_skeleton .category-tools .category-m .category-wrapper {
        -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.14);
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.14);
        width: 100%;
      }
      .loader_skeleton .category-tools .category-m .category-wrapper h4 {
        width: 190px;
        height: 25px;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
        margin-top: 25px;
        margin-bottom: 25px;
      }
      .loader_skeleton .category-tools .category-m .category-wrapper .img-ldr {
        height: 215px;
        background-color: #f3f3f3;
      }
      .loader_skeleton
        .category-tools
        .category-m
        .category-wrapper
        .category-link
        li {
        width: 110px;
        height: 22px;
        margin-left: auto;
        margin-right: auto;
      }
      .loader_skeleton .category-tools .category-m .category-wrapper .ldr-btn {
        width: 130px;
        height: 50px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
      }
      .loader_skeleton .category-tools .category-m .category-wrapper:after,
      .loader_skeleton .category-tools .category-m .category-wrapper:before {
        display: none;
      }
      .loader_skeleton
        .category-tools
        .category-m
        .category-wrapper
        > div:after,
      .loader_skeleton
        .category-tools
        .category-m
        .category-wrapper
        > div:before {
        display: none;
      }
      .loader_skeleton .collection-filter-block {
        padding: 30px;
        border-color: #f3f3f3;
      }
      .loader_skeleton .collection-filter-block .filter-block h4 {
        width: 100%;
        height: 18px;
      }
      .loader_skeleton .collection-filter-block .filter-block ul {
        margin-top: 20px;
      }
      .loader_skeleton .collection-filter-block .filter-block ul li {
        width: 70%;
        height: 18px;
      }
      .loader_skeleton
        .collection-filter-block
        .filter-block
        ul
        li:nth-child(2) {
        width: 50%;
      }
      .loader_skeleton
        .collection-filter-block
        .filter-block
        ul
        li:nth-child(3) {
        width: 60%;
      }
      .loader_skeleton .collection-filter-block .filter-block ul li + li {
        margin-top: 10px;
      }
      .loader_skeleton .collection-filter-block .filter-block + .filter-block {
        margin-top: 25px;
      }
      .loader_skeleton .theme-card .title-border {
        width: 90%;
        height: 24px;
        border-bottom: none;
      }
      .loader_skeleton .theme-card .product-box {
        margin-top: 20px;
      }
      .loader_skeleton .theme-card .product-box .img-wrapper {
        height: 100px;
        width: 96px;
        margin-right: 15px;
      }
      .loader_skeleton .theme-card .product-box .media-body {
        margin-top: 0;
      }
      .loader_skeleton .collection-sidebar-banner {
        width: 100%;
        height: calc(200px + (480 - 200) * ((100vw - 320px) / (1920 - 320)));
        background-color: #f3f3f3;
      }
      .loader_skeleton .product-page .main-product {
        width: 100%;
        height: calc(320px + (480 - 320) * ((100vw - 320px) / (1920 - 320)));
        background-color: #f3f3f3;
        margin-bottom: 20px;
      }
      .loader_skeleton .product-page .main-product.sm-img {
        height: calc(320px + (350 - 320) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .product-page .main-product.lg-img {
        height: calc(320px + (600 - 320) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .product-page .sm-product {
        width: 100%;
        height: calc(90px + (180 - 90) * ((100vw - 320px) / (1920 - 320)));
        background-color: #f3f3f3;
      }
      .loader_skeleton .product-page .product_image_4 .sm-product {
        height: calc(160px + (360 - 160) * ((100vw - 320px) / (1920 - 320)));
      }
      .loader_skeleton .product-page .vertical-product .sm-product {
        height: calc(70px + (100 - 70) * ((100vw - 320px) / (1920 - 320)));
        margin-bottom: 10px;
      }
      .loader_skeleton .product-page .product-right h2 {
        width: 100%;
        height: 25px;
      }
      .loader_skeleton .product-page .product-right h4 {
        width: 80%;
        height: 25px;
        margin-bottom: 14px;
      }
      .loader_skeleton .product-page .product-right h3 {
        width: 50%;
        height: 25px;
      }
      .loader_skeleton .product-page .product-right ul {
        margin-top: 35px;
      }
      .loader_skeleton .product-page .product-right ul li {
        width: 75%;
        height: 30px;
        margin-top: 10px;
      }
      .loader_skeleton .product-page .product-right .btn-group {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin-top: 30px;
      }
      .loader_skeleton .product-page .product-right .btn-group .btn-ldr {
        width: 28%;
        height: calc(38px + (50 - 38) * ((100vw - 320px) / (1920 - 320)));
        margin-right: 15px;
      }
      .loader_skeleton .product-page .product-right.product-form-box {
        border-color: #f3f3f3;
      }
      .loader_skeleton .product-page .product-right.product-form-box h2,
      .loader_skeleton .product-page .product-right.product-form-box h3,
      .loader_skeleton .product-page .product-right.product-form-box h4 {
        margin-left: auto;
        margin-right: auto;
      }
      .loader_skeleton
        .product-page
        .product-right.product-form-box
        .btn-group {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }
      .loader_skeleton .tab-product ul li {
        width: 16%;
        height: 30px;
        margin-right: 10px;
      }
      .loader_skeleton .tab-product p {
        width: 90%;
        height: 30px;
        margin-right: 10px;
        margin-top: 10px;
        background-color: #f3f3f3;
      }
      .loader_skeleton .tab-product.vertical-tab ul li {
        display: block;
        width: 80%;
        height: 30px;
        margin-top: 10px;
        margin-right: 0;
      }
      .loader_skeleton .blog-page .blog-sidebar .theme-card {
        border-color: #f3f3f3;
      }
      .loader_skeleton .blog-page .order-sec .product-box {
        margin-bottom: 20px;
      }
      .loader_skeleton .blog-page .order-sec .product-box .img-wrapper {
        width: 490px;
        height: calc(174px + (300 - 174) * ((100vw - 320px) / (1920 - 320)));
        margin-right: 25px;
      }
      .loader_skeleton .blog-advance .ldr-img {
        height: 400px;
        width: 100%;
        background-color: #f3f3f3;
        margin-bottom: 30px;
      }
      .loader_skeleton .blog-advance ul li {
        width: 85%;
        height: 20px;
        background-color: #f3f3f3;
      }
      .loader_skeleton .blog-advance ul li + li {
        margin-top: 10px;
      }

      .layout-8 .loader_skeleton {
        padding: 0 80px;
      }

      @-webkit-keyframes skeleton-loader {
        0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          background-position: -468px 0;
        }
        to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          background-position: 468px 0;
        }
      }

      @keyframes skeleton-loader {
        0% {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          background-position: -468px 0;
        }
        to {
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
          background-position: 468px 0;
        }
      }

      /*=====================
          24.Tab to top CSS start
      ==========================*/
      .tap-top {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        position: fixed;
        bottom: 50px;
        right: 30px;
        z-index: 8;
        display: none;
        color: #fff;
        text-align: center;
        background: var(--theme-deafult);
        border: none;
        font-size: 22px;
        padding: 7px;
        cursor: pointer;
      }
      .tap-top.top-cls {
        bottom: 130px;
      }

      /*=====================
          25.theme setting box CSS start
      ==========================*/
      .color1 {
        background: #ff4c3b;
      }

      .color2 {
        background: #3fdda7;
      }

      .color3 {
        background: #f0b54d;
      }

      .color4 {
        background: #e4604a;
      }

      .color5 {
        background: #d4b196;
      }

      .color6 {
        background: #866e6c;
      }

      .color7 {
        background: #cc2121;
      }

      .color8 {
        background: #dc457e;
      }

      .color9 {
        background: #6d7e87;
      }

      .color10 {
        background: #fa869b;
      }

      .color11 {
        background: #81ba00;
      }

      .color12 {
        background: #fe816d;
      }

      .color13 {
        background: #01effc;
      }

      .color14 {
        background: #5d7227;
      }

      .color15 {
        background: #ff9944;
      }

      .color16 {
        background: #5fcbc4;
      }

      .color17 {
        background: #e38888;
      }

      .color18 {
        background: #000000;
      }

      .color-picker {
        position: fixed;
        right: -190px;
        top: calc(38vh + 220px);
        width: 190px;
        z-index: 1;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .color-picker .settings-header {
        background: #f3f3f3;
        padding: 5px 15px;
        -webkit-box-shadow: 0px -10px 20px -5px rgba(220, 220, 220, 0.62);
        box-shadow: 0px -10px 20px -5px rgba(220, 220, 220, 0.62);
      }
      .color-picker .settings-header h3 {
        color: black;
        margin: 0;
        font-size: 20px;
        padding: 4px 9px;
      }
      .color-picker .section {
        background: white;
        padding: 10px;
        border: 1px solid #f3f3f3;
        overflow: auto;
      }
      .color-picker .section i {
        font-size: 16px;
        margin-right: 10px;
      }
      .color-picker a.handle {
        position: absolute;
        right: 190px;
        width: 45px;
        height: 41px;
        -webkit-transition: all ease-in 0.3s;
        transition: all ease-in 0.3s;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 22px;
        z-index: -1;
        text-decoration: none;
        background-color: #f9f9f9;
        -webkit-box-shadow: -5.985px -0.419px 30px 0 rgba(0, 0, 0, 0.08),
          inset -2px 0 10px 0 rgba(0, 0, 0, 0.04);
        box-shadow: -5.985px -0.419px 30px 0 rgba(0, 0, 0, 0.08),
          inset -2px 0 10px 0 rgba(0, 0, 0, 0.04);
        top: -80px;
        color: #000000;
      }
      .color-picker a.handle i {
        margin-left: 5px;
      }
      .color-picker .colors a {
        width: 32px;
        height: 32px;
        margin: 5px;
        float: left;
        -webkit-transition: all ease-in 0.3s;
        transition: all ease-in 0.3s;
      }
      .color-picker .skin a {
        display: block;
        width: 70px;
        height: 30px;
        margin-left: 0;
        margin-top: 0;
        margin-right: 5px;
        float: left;
        text-align: center;
        line-height: 30px;
        border: 2px transparent solid;
      }
      .color-picker .skin a.actt {
        border: 2px white solid;
      }

      .dark-light {
        position: fixed;
        right: 0;
        width: 40px;
        height: 38px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        z-index: 1;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        font-size: 14px;
        text-decoration: none;
        border-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        background-color: #f7f7f7;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(154, 154, 154, 0.54);
        box-shadow: 0px 0px 5px 0px rgba(154, 154, 154, 0.54);
        top: calc(50% + 34px);
        cursor: pointer;
      }

      .setting-sidebar {
        position: fixed;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        background-color: #f7f7f7;
        width: 40px;
        height: 40px;
        right: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        border-radius: 5px;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(154, 154, 154, 0.54);
        box-shadow: 0px 0px 5px 0px rgba(154, 154, 154, 0.54);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        z-index: 1;
      }
      .setting-sidebar i {
        -webkit-animation: ring-rotate 3s infinite linear;
        animation: ring-rotate 3s infinite linear;
        font-size: 20px;
        color: #3c3c3c;
        margin-left: 10px;
      }
      .setting-sidebar.open-icon {
        right: 351px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .setting_box_body {
        position: relative;
        background-color: white;
        z-index: 9;
        height: 100vh;
      }

      .setting-box {
        position: fixed;
        height: 100vh;
        overflow-y: auto;
        width: 350px;
        right: -360px;
        background-color: white;
        top: 0;
        z-index: 999;
        -webkit-box-shadow: 0 15px 5px 0 rgba(77, 77, 77, 0.28);
        box-shadow: 0 15px 5px 0 rgba(77, 77, 77, 0.28);
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .setting-box ::-webkit-scrollbar {
        width: 3px;
        height: 7px;
      }
      .setting-box ::-webkit-scrollbar-track {
        background: #dddddd;
      }
      .setting-box ::-webkit-scrollbar-thumb {
        background: #888888;
      }
      .setting-box ::-webkit-scrollbar-thumb:hover {
        background: #555555;
      }
      .setting-box.open-setting {
        right: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .setting-box.open-setting .overlay {
        visibility: visible;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .setting-box .sidebar-back {
        padding: 20px;
        font-size: 18px;
        color: #222222;
        font-weight: 700;
        text-transform: uppercase;
        cursor: pointer;
        -webkit-box-shadow: inset 0px 0px 6px rgba(115, 115, 115, 0.09);
        box-shadow: inset 0px 0px 6px rgba(115, 115, 115, 0.09);
        background-color: #f3f3f3;
      }
      .setting-box .setting-title {
        padding: 20px;
        border-bottom: 1px solid #efefef;
        margin-bottom: 0;
      }
      .setting-box .setting-title h4 {
        position: relative;
        margin-bottom: 0;
        cursor: pointer;
      }
      .setting-box .setting-title.active .according-menu {
        font: normal normal normal 14px/1 FontAwesome;
      }
      .setting-box .setting-title.active .according-menu:before {
        content: "\\f068";
        position: absolute;
        right: 2px;
        top: 2px;
      }
      .setting-box .setting-title .according-menu {
        font: normal normal normal 14px/1 FontAwesome;
      }
      .setting-box .setting-title .according-menu:before {
        content: "\\f067";
        position: absolute;
        right: 2px;
        top: 2px;
      }
      .setting-box .setting-contant {
        padding: 20px;
        border-bottom: 1px solid #efefef;
      }
      .setting-box .setting-contant .setting_buttons .setting_btn {
        background-color: var(--theme-deafult);
        color: white;
        width: 100%;
      }
      .setting-box .setting-contant .setting_buttons li:first-child {
        width: 49%;
      }
      .setting-box .setting-contant .setting_buttons li.active {
        -webkit-box-shadow: 0px 0px 5px 0px #929292;
        box-shadow: 0px 0px 5px 0px #929292;
      }
      .setting-box .setting-contant .setting_buttons li:last-child {
        margin-left: 10px;
        width: 46%;
      }
      .setting-box .setting-contant .color-box li {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }
      .setting-box .setting-contant .color-box li span {
        text-transform: capitalize;
        margin-bottom: 2px;
        font-size: 15px;
      }
      .setting-box .setting-contant .color-box li input {
        border: none;
        -webkit-box-shadow: none;
        box-shadow: none;
        width: 34px;
        height: 34px;
        background-color: transparent;
        margin-right: 5px;
      }
      .setting-box .setting-contant .color-box li input:focus {
        outline: none;
      }
      .setting-box .setting-contant .color-box li + li {
        margin-top: 5px;
      }
      .setting-box .buy_btn {
        padding: 20px;
      }
      .setting-box .buy_btn a {
        background-color: #f3f3f3;
        color: #3c3c3c;
        padding: 10px;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .setting-box .buy_btn a i {
        margin-right: 5px;
        font-size: 18px;
      }
      .setting-box .buy_btn a img {
        -webkit-filter: grayscale(100);
        filter: grayscale(100);
      }
      .setting-box .overlay {
        visibility: hidden;
        opacity: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .demo-section .title-text h3 {
        color: var(--theme-deafult);
        margin-bottom: 24px;
        display: inline-block;
        padding-bottom: 5px;
        font-size: 40px;
        position: relative;
      }
      .demo-section .title-text h3 i {
        font-size: 22px;
        position: absolute;
        top: 0;
        right: -20px;
      }

      .demo-section .demo-effects {
        margin-bottom: 30px;
      }
      .demo-section .demo-effects h4 {
        text-transform: capitalize;
      }
      .demo-section .demo-effects .set-position {
        display: block;
      }
      .demo-section .demo-effects > div {
        text-decoration: none;
        color: black;
      }
      .demo-section .demo-effects > div .layout-container {
        height: 110px;
        width: 100%;
        display: -webkit-inline-box;
        display: -ms-inline-flexbox;
        display: inline-flex;
        background-size: cover;
        -webkit-transition: all 2s ease-out 0s;
        transition: all 2s ease-out 0s;
        -webkit-box-shadow: -1px 2px 5px 1px #ececec;
        box-shadow: -1px 2px 5px 1px #ececec;
      }
      .demo-section .demo-effects > div .layout-container.demo1 {
        background-image: url("/assets/images/landing-page/demo/1.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo2 {
        background-image: url("/assets/images/landing-page/demo/2.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo3 {
        background-image: url("/assets/images/landing-page/demo/3.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo4 {
        background-image: url("/assets/images/landing-page/demo/4.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo5 {
        background-image: url("/assets/images/landing-page/demo/5.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo6 {
        background-image: url("/assets/images/landing-page/demo/6.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo7 {
        background-image: url("/assets/images/landing-page/demo/7.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo8 {
        background-image: url("/assets/images/landing-page/demo/8.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo9 {
        background-image: url("/assets/images/landing-page/demo/9.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo10 {
        background-image: url("/assets/images/landing-page/demo/10.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo11 {
        background-image: url("/assets/images/landing-page/demo/11.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo12 {
        background-image: url("/assets/images/landing-page/demo/12.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo13 {
        background-image: url("/assets/images/landing-page/demo/13.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo14 {
        background-image: url("/assets/images/landing-page/demo/14.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo15 {
        background-image: url("/assets/images/landing-page/demo/15.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo16 {
        background-image: url("/assets/images/landing-page/demo/16.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo17 {
        background-image: url("/assets/images/landing-page/demo/17.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo18 {
        background-image: url("/assets/images/landing-page/demo/18.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo19 {
        background-image: url("/assets/images/landing-page/demo/19.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo20 {
        background-image: url("/assets/images/landing-page/demo/20.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo21 {
        background-image: url("/assets/images/landing-page/demo/21.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo22 {
        background-image: url("/assets/images/landing-page/demo/22.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo23 {
        background-image: url("/assets/images/landing-page/demo/23.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo24 {
        background-image: url("/assets/images/landing-page/demo/24.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo25 {
        background-image: url("/assets/images/landing-page/demo/25.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo26 {
        background-image: url("/assets/images/landing-page/demo/26.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo27 {
        background-image: url("/assets/images/landing-page/demo/27.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo28 {
        background-image: url("/assets/images/landing-page/demo/28.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo29 {
        background-image: url("/assets/images/landing-page/demo/29.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo30 {
        background-image: url("/assets/images/landing-page/demo/30.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo31 {
        background-image: url("/assets/images/landing-page/demo/31.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo32 {
        background-image: url("/assets/images/landing-page/demo/32.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo33 {
        background-image: url("/assets/images/landing-page/demo/33.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo34 {
        background-image: url("/assets/images/landing-page/demo/34.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo35 {
        background-image: url("/assets/images/landing-page/demo/35.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo36 {
        background-image: url("/assets/images/landing-page/demo/36.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo37 {
        background-image: url("/assets/images/landing-page/demo/37.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo38 {
        background-image: url("/assets/images/landing-page/demo/38.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo39 {
        background-image: url("/assets/images/landing-page/demo/39.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo40 {
        background-image: url("/assets/images/landing-page/demo/40.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo41 {
        background-image: url("/assets/images/landing-page/demo/41.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo42 {
        background-image: url("/assets/images/landing-page/demo/42.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo43 {
        background-image: url("/assets/images/landing-page/demo/43.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo44 {
        background-image: url("/assets/images/landing-page/demo/44.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo45 {
        background-image: url("/assets/images/landing-page/demo/45.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo46 {
        background-image: url("/assets/images/landing-page/demo/46.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo47 {
        background-image: url("/assets/images/landing-page/demo/47.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo48 {
        background-image: url("/assets/images/landing-page/demo/48.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo49 {
        background-image: url("/assets/images/landing-page/demo/49.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo50 {
        background-image: url("/assets/images/landing-page/demo/50.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo51 {
        background-image: url("/assets/images/landing-page/demo/51.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo52 {
        background-image: url("/assets/images/landing-page/demo/52.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo53 {
        background-image: url("/assets/images/landing-page/demo/53.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo54 {
        background-image: url("/assets/images/landing-page/demo/54.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo55 {
        background-image: url("/assets/images/landing-page/demo/55.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo56 {
        background-image: url("/assets/images/landing-page/demo/56.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo57 {
        background-image: url("/assets/images/landing-page/demo/57.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo58 {
        background-image: url("/assets/images/landing-page/demo/58.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo59 {
        background-image: url("/assets/images/landing-page/demo/59.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo60 {
        background-image: url("/assets/images/landing-page/demo/60.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo61 {
        background-image: url("/assets/images/landing-page/demo/61.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo62 {
        background-image: url("/assets/images/landing-page/demo/62.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo63 {
        background-image: url("/assets/images/landing-page/demo/63.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo64 {
        background-image: url("/assets/images/landing-page/demo/64.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo65 {
        background-image: url("/assets/images/landing-page/demo/65.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo66 {
        background-image: url("/assets/images/landing-page/demo/66.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo67 {
        background-image: url("/assets/images/landing-page/demo/67.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo68 {
        background-image: url("/assets/images/landing-page/demo/68.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo69 {
        background-image: url("/assets/images/landing-page/demo/69.jpg");
      }
      .demo-section .demo-effects > div .layout-container.demo70 {
        background-image: url("/assets/images/landing-page/demo/70.jpg");
      }
      .demo-section .demo-effects > div .demo-text h4 {
        font-size: 16px;
        margin-top: 10px;
        margin-bottom: 0;
        color: #000000;
      }
      .demo-section .demo-effects > div .demo-text h4 span {
        font-weight: 500;
      }
      .demo-section .demo-effects > div .demo-text .demo-btn {
        margin-top: 10px;
      }
      .demo-section .demo-effects > div .demo-text .demo-btn .btn {
        border: 1px solid #ddd;
        background-color: white;
        width: 90px;
        color: var(--theme-deafult);
        padding: 5px 10px;
        border-radius: 30px;
      }
      .demo-section .demo-effects > div .demo-text .demo-btn .btn:hover {
        background-color: var(--theme-deafult);
        color: white;
      }
      .demo-section .demo-effects:last-child {
        margin-bottom: 0;
      }
      .demo-section .demo-effects.effect-2 .layout-container {
        background-size: cover;
        background-repeat: no-repeat;
      }
      .demo-section .demo-effects.effect-2:hover .layout-container {
        background-position: top !important;
      }
      .demo-section .demo-effects.effect-3 .layout-container {
        background-size: cover;
        background-repeat: no-repeat;
      }
      .demo-section .demo-effects.effect-3:hover .layout-container {
        background-position: top !important;
      }
      .demo-section .demo-effects:hover .layout-container {
        background-position: center 100% !important;
      }

      @-webkit-keyframes ring-rotate {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @keyframes ring-rotate {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      .sec-position {
        position: relative;
        top: -80px;
      }

      /*=====================
          26.RTL CSS start
      ==========================*/
      body.rtl {
        direction: rtl;
      }

      .rtl h1,
      .rtl h2,
      .rtl h3,
      .rtl h4,
      .rtl h5,
      .rtl h6,
      .rtl p {
        text-align: right;
      }

      .rtl .slick-slider {
        direction: ltr;
      }

      .rtl .slick-slide {
        float: left;
      }

      .rtl ul {
        -webkit-padding-start: 0;
      }

      .rtl .mr-3 {
        margin-right: 0 !important;
        margin-left: 5px;
      }

      .rtl .offset-md-3,
      .rtl .offset-lg-2,
      .rtl .offset-xl-3,
      .rtl .offset-lg-3,
      .rtl .offset-md-2 {
        margin: 0 auto;
      }

      .rtl .title1 h1,
      .rtl .title1 h2,
      .rtl .title1 h3,
      .rtl .title1 h4,
      .rtl .title1 h5,
      .rtl .title1 h6,
      .rtl .title2 h1,
      .rtl .title2 h2,
      .rtl .title2 h3,
      .rtl .title2 h4,
      .rtl .title2 h5,
      .rtl .title2 h6,
      .rtl .title3 h1,
      .rtl .title3 h2,
      .rtl .title3 h3,
      .rtl .title3 h4,
      .rtl .title3 h5,
      .rtl .title3 h6,
      .rtl .title4 h1,
      .rtl .title4 h2,
      .rtl .title4 h3,
      .rtl .title4 h4,
      .rtl .title4 h5,
      .rtl .title4 h6 {
        text-align: center;
      }

      .rtl .setting-box {
        direction: ltr;
      }
      .rtl .setting-box h1,
      .rtl .setting-box h2,
      .rtl .setting-box h3,
      .rtl .setting-box h4,
      .rtl .setting-box h5,
      .rtl .setting-box h6,
      .rtl .setting-box p {
        text-align: left;
      }

      .rtl .brand-logo img {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }

      .rtl [dir="rtl"] .slick-slide {
        float: left;
      }

      .rtl .effect-cls:before,
      .rtl .effect-cls:after {
        right: 0;
      }

      .rtl .game-product .product-box:hover .cart-info a:nth-child(1) i {
        -webkit-animation: fadeInLeft 300ms ease-in-out;
        animation: fadeInLeft 300ms ease-in-out;
      }

      .rtl .breadcrumb-section .breadcrumb {
        padding-left: 0;
      }

      .rtl .cart-section .wishlist-buttons,
      .rtl .wishlist-section .wishlist-buttons {
        text-align: left;
      }

      .rtl .category-block .category-details h6 {
        text-align: center;
      }

      .rtl .offer-slider .slick-slide > div {
        direction: rtl;
      }

      .rtl
        .tools-parallax-product
        .tools-description
        .tools-form
        .search-button {
        text-align: right;
      }

      .rtl .typo-content.typo-buttons {
        text-align: right;
      }

      .rtl .typography_section .typography-box .headings {
        text-align: right;
      }

      .rtl .typography_section .typography-box ul,
      .rtl .typography_section .typography-box ol,
      .rtl .typography_section .typography-box dl {
        text-align: right;
      }

      .rtl .typography_section .typography-box ol {
        -webkit-padding-start: 0px;
        padding-inline-start: 0px;
      }

      .rtl .typography_section .typography-box .typo-content.input_button {
        text-align: right;
      }

      .rtl .absolute_banner .collection-banner .absolute-contain h3,
      .rtl .absolute_banner .collection-banner .absolute-contain h4 {
        text-align: center;
      }

      .rtl .absolute-product .product-box .product-detail .rating,
      .rtl .absolute-product .product-box .product-detail h4,
      .rtl .absolute-product .product-box .product-detail h6,
      .rtl .absolute-product .product-box .product-detail .color-variant {
        text-align: center;
      }

      .rtl .product-box .img-wrapper .front,
      .rtl .product-wrap .img-wrapper .front {
        text-align: right;
        left: unset;
        right: 0;
      }

      .rtl .product-box .img-wrapper .back,
      .rtl .product-wrap .img-wrapper .back {
        -webkit-transform: translateX(100px);
        transform: translateX(100px);
        text-align: right;
        left: unset;
        right: 0;
      }

      .rtl .product-box:hover .img-wrapper .back,
      .rtl .product-wrap:hover .img-wrapper .back {
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }

      .rtl
        .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media {
        padding-right: 0;
        padding-left: 15px;
      }
      .rtl
        .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media
        img {
        padding: 0 0 0 15px;
      }

      .rtl
        .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .cart-bottom {
        text-align: right;
      }

      .rtl header.header-tools .main-menu .menu-left .navbar {
        padding: 25px 0 25px 45px;
      }

      .rtl .form_search button {
        left: 5px;
        right: unset;
      }

      .rtl .j-box .product-box .product-detail {
        padding-left: 0;
        padding-right: 15px;
      }

      .rtl .gym-product .product-box .product-detail h6,
      .rtl .gym-product .product-box .product-detail h4 {
        text-align: center;
      }

      .rtl .search-overlay > div .closebtn {
        right: unset;
        left: 25px;
      }

      .rtl .home-slider .text-center p,
      .rtl .home-slider .text-center h1,
      .rtl .home-slider .text-center h2,
      .rtl .home-slider .text-center h3,
      .rtl .home-slider .text-center h4,
      .rtl .home-slider .text-center h5,
      .rtl .home-slider .text-center h6,
      .rtl .center-slider .text-center p,
      .rtl .center-slider .text-center h1,
      .rtl .center-slider .text-center h2,
      .rtl .center-slider .text-center h3,
      .rtl .center-slider .text-center h4,
      .rtl .center-slider .text-center h5,
      .rtl .center-slider .text-center h6 {
        text-align: center !important;
      }

      .rtl .home-slider .text-left p,
      .rtl .home-slider .text-left h1,
      .rtl .home-slider .text-left h2,
      .rtl .home-slider .text-left h3,
      .rtl .home-slider .text-left h4,
      .rtl .home-slider .text-left h5,
      .rtl .home-slider .text-left h6,
      .rtl .center-slider .text-left p,
      .rtl .center-slider .text-left h1,
      .rtl .center-slider .text-left h2,
      .rtl .center-slider .text-left h3,
      .rtl .center-slider .text-left h4,
      .rtl .center-slider .text-left h5,
      .rtl .center-slider .text-left h6 {
        text-align: left;
      }

      .rtl .home-slider .text-right p,
      .rtl .home-slider .text-right h1,
      .rtl .home-slider .text-right h2,
      .rtl .home-slider .text-right h3,
      .rtl .home-slider .text-right h4,
      .rtl .home-slider .text-right h5,
      .rtl .home-slider .text-right h6,
      .rtl .center-slider .text-right p,
      .rtl .center-slider .text-right h1,
      .rtl .center-slider .text-right h2,
      .rtl .center-slider .text-right h3,
      .rtl .center-slider .text-right h4,
      .rtl .center-slider .text-right h5,
      .rtl .center-slider .text-right h6 {
        text-align: right;
      }

      .rtl .home-slider .p-left .slider-contain,
      .rtl .center-slider .p-left .slider-contain {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
      }

      .rtl .home-slider .p-right .slider-contain,
      .rtl .center-slider .p-right .slider-contain {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }

      .rtl .home-slider .slider-contain h1,
      .rtl .home-slider .slider-contain h2,
      .rtl .home-slider .slider-contain h3,
      .rtl .home-slider .slider-contain h4,
      .rtl .home-slider .slider-contain h5,
      .rtl .home-slider .slider-contain h6,
      .rtl .center-slider .slider-contain h1,
      .rtl .center-slider .slider-contain h2,
      .rtl .center-slider .slider-contain h3,
      .rtl .center-slider .slider-contain h4,
      .rtl .center-slider .slider-contain h5,
      .rtl .center-slider .slider-contain h6 {
        text-align: left;
      }

      .rtl .home-slider .slider-contain .btn-solid,
      .rtl .home-slider .slider-contain .btn-outline,
      .rtl .center-slider .slider-contain .btn-solid,
      .rtl .center-slider .slider-contain .btn-outline {
        float: inherit;
      }

      .rtl .home-slider .slick-next,
      .rtl .center-slider .slick-next {
        right: unset;
        left: 1px;
      }
      .rtl .home-slider .slick-next:before,
      .rtl .center-slider .slick-next:before {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .rtl .home-slider .slick-prev,
      .rtl .center-slider .slick-prev {
        left: unset;
        right: 1px;
      }
      .rtl .home-slider .slick-prev:before,
      .rtl .center-slider .slick-prev:before {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .rtl .home-slider:hover .slick-next,
      .rtl .center-slider:hover .slick-next {
        right: unset;
        left: 100px;
      }

      .rtl .home-slider:hover .slick-prev,
      .rtl .center-slider:hover .slick-prev {
        left: unset;
        right: 100px;
      }

      .rtl .pwd-page h2 {
        text-align: center;
      }

      .rtl .product-box .color-variant,
      .rtl .product-wrap .color-variant {
        -webkit-padding-start: 0;
      }

      .rtl .product-box .product-info h4,
      .rtl .product-box .product-info h6,
      .rtl .product-wrap .product-info h4,
      .rtl .product-wrap .product-info h6 {
        text-align: center;
      }

      .rtl .product-box .product-detail .rating,
      .rtl .product-wrap .product-detail .rating {
        text-align: right;
      }

      .rtl .product-box .product-detail .color-variant,
      .rtl .product-wrap .product-detail .color-variant {
        text-align: right;
        padding: 0;
        padding-top: 15px;
      }
      .rtl .product-box .product-detail .color-variant li:first-child,
      .rtl .product-wrap .product-detail .color-variant li:first-child {
        margin-right: 0;
      }

      .rtl .product-box .img-block .lable-wrapper .lable1,
      .rtl .product-wrap .img-block .lable-wrapper .lable1 {
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
      }

      .rtl .product-box .img-block .lable-wrapper .lable2,
      .rtl .product-wrap .img-block .lable-wrapper .lable2 {
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
      }

      .rtl .product-box .img-wrapper .lable-block .lable3,
      .rtl .product-wrap .img-wrapper .lable-block .lable3 {
        left: unset;
        right: 7px;
      }

      .rtl .product-box .img-wrapper .lable-block .lable4,
      .rtl .product-wrap .img-wrapper .lable-block .lable4 {
        left: 7px;
        right: unset;
      }

      .rtl .product-box .cart-detail,
      .rtl .product-wrap .cart-detail {
        left: 20px;
        right: unset;
      }

      .rtl .product-box .cart-info.cart-wrap,
      .rtl .product-wrap .cart-info.cart-wrap {
        left: 10px;
        right: unset;
      }

      .rtl .product-box:hover .cart-wrap button,
      .rtl .product-wrap:hover .cart-wrap button {
        -webkit-animation: fadeInLeft 300ms ease-in-out;
        animation: fadeInLeft 300ms ease-in-out;
      }

      .rtl .product-box:hover .cart-wrap a:nth-child(2) i,
      .rtl .product-wrap:hover .cart-wrap a:nth-child(2) i {
        -webkit-animation: fadeInLeft 500ms ease-in-out;
        animation: fadeInLeft 500ms ease-in-out;
      }

      .rtl .product-box:hover .cart-wrap a:nth-child(3) i,
      .rtl .product-wrap:hover .cart-wrap a:nth-child(3) i {
        -webkit-animation: fadeInLeft 700ms ease-in-out;
        animation: fadeInLeft 700ms ease-in-out;
      }

      .rtl .product-box:hover .cart-wrap a:nth-child(4) i,
      .rtl .product-wrap:hover .cart-wrap a:nth-child(4) i {
        -webkit-animation: fadeInLeft 1000ms ease-in-out;
        animation: fadeInLeft 1000ms ease-in-out;
      }

      .rtl .product-box:hover .cart-detail button,
      .rtl .product-wrap:hover .cart-detail button {
        -webkit-animation: fadeInLeft 300ms ease-in-out;
        animation: fadeInLeft 300ms ease-in-out;
      }

      .rtl .product-box:hover .cart-detail a:nth-child(2) i,
      .rtl .product-wrap:hover .cart-detail a:nth-child(2) i {
        -webkit-animation: fadeInLeft 500ms ease-in-out;
        animation: fadeInLeft 500ms ease-in-out;
      }

      .rtl .product-box:hover .cart-detail a:nth-child(3) i,
      .rtl .product-wrap:hover .cart-detail a:nth-child(3) i {
        -webkit-animation: fadeInLeft 700ms ease-in-out;
        animation: fadeInLeft 700ms ease-in-out;
      }

      .rtl .product-box:hover .cart-detail a:nth-child(4) i,
      .rtl .product-wrap:hover .cart-detail a:nth-child(4) i {
        -webkit-animation: fadeInLeft 1000ms ease-in-out;
        animation: fadeInLeft 1000ms ease-in-out;
      }

      .rtl .footer-light .subscribe {
        border-right: none;
        border-left: 1px solid #dddddd;
      }
      .rtl .footer-light .subscribe h4 {
        text-align: right;
      }

      .rtl .subscribe h4 {
        text-align: center;
      }
      .rtl .subscribe h4 i {
        padding-left: 5px;
        padding-right: 0;
      }

      .rtl .service-block svg {
        margin-left: 12px;
        margin-right: 0;
      }

      .rtl .service-block + .service-block {
        border-right: 1px solid #dddddd;
        border-left: none;
      }

      .rtl .service-block1 h4,
      .rtl .service-block1 p {
        text-align: center;
      }

      .rtl .blog-details h4,
      .rtl .blog-details h6 {
        text-align: center;
      }

      .rtl .blog-details a p {
        text-align: center;
      }

      .rtl .instagram h2 {
        text-align: center;
      }

      .rtl .category-block .category-details h5 {
        text-align: center;
      }

      .rtl .category-bg .contain-block h6 {
        text-align: center;
      }

      .rtl .about-text p {
        text-align: center;
      }

      .rtl .beauty-about .text-center {
        text-align: left !important;
      }

      .rtl .collection-banner.p-left .contain-banner {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }

      .rtl .collection-banner.p-right .contain-banner {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
      }

      .rtl .collection-banner.p-center .contain-banner {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .rtl .collection-banner.text-center .contain-banner h1,
      .rtl .collection-banner.text-center .contain-banner h2,
      .rtl .collection-banner.text-center .contain-banner h3,
      .rtl .collection-banner.text-center .contain-banner h4,
      .rtl .collection-banner.text-center .contain-banner h5,
      .rtl .collection-banner.text-center .contain-banner h6 {
        text-align: center;
      }

      .rtl .collection-banner.text-left .contain-banner h1,
      .rtl .collection-banner.text-left .contain-banner h2,
      .rtl .collection-banner.text-left .contain-banner h3,
      .rtl .collection-banner.text-left .contain-banner h4,
      .rtl .collection-banner.text-left .contain-banner h5,
      .rtl .collection-banner.text-left .contain-banner h6 {
        text-align: left;
      }

      .rtl .collection-banner.text-right .contain-banner h1,
      .rtl .collection-banner.text-right .contain-banner h2,
      .rtl .collection-banner.text-right .contain-banner h3,
      .rtl .collection-banner.text-right .contain-banner h4,
      .rtl .collection-banner.text-right .contain-banner h5,
      .rtl .collection-banner.text-right .contain-banner h6 {
        text-align: right;
      }

      .rtl .collection-banner .contain-banner {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
      }
      .rtl .collection-banner .contain-banner h1,
      .rtl .collection-banner .contain-banner h2,
      .rtl .collection-banner .contain-banner h3,
      .rtl .collection-banner .contain-banner h4,
      .rtl .collection-banner .contain-banner h5,
      .rtl .collection-banner .contain-banner h6 {
        text-align: left;
      }

      .rtl .full-banner.p-left .banner-contain {
        float: left;
      }

      .rtl .full-banner.p-right .banner-contain {
        float: right;
      }

      .rtl .full-banner.p-center .banner-contain {
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .rtl .full-banner.p-center .banner-contain h3,
      .rtl .full-banner.p-center .banner-contain h4 {
        text-align: center;
      }
      .rtl .full-banner.p-center .banner-contain .btn-solid,
      .rtl .full-banner.p-center .banner-contain .btn-outline {
        float: unset;
      }

      .rtl .full-banner.text-center .banner-contain h2,
      .rtl .full-banner.text-center .banner-contain h3,
      .rtl .full-banner.text-center .banner-contain h4 {
        text-align: center;
      }

      .rtl .full-banner.text-left .banner-contain h2,
      .rtl .full-banner.text-left .banner-contain h3,
      .rtl .full-banner.text-left .banner-contain h4 {
        text-align: left;
      }

      .rtl .full-banner.text-right .banner-contain h2,
      .rtl .full-banner.text-right .banner-contain h3,
      .rtl .full-banner.text-right .banner-contain h4 {
        text-align: right;
      }

      .rtl .theme-card .slick-prev {
        left: 0;
        right: unset;
      }

      .rtl .theme-card .slick-next {
        right: unset;
        left: 25px;
      }

      .rtl .theme-card .offer-slider img {
        padding: 15px 0 15px 15px;
      }

      .rtl .theme-card .offer-slider .media .media-body a h6 {
        margin-left: 61px;
        margin-right: 0;
      }

      .rtl .theme-card .offer-slider .media .media-body .rating {
        text-align: right;
      }
      .rtl .theme-card .offer-slider .media .media-body .rating i {
        padding-left: 5px;
      }

      .rtl .theme-card.card-border h5 {
        padding-left: 0;
        padding-right: 50px;
      }

      .rtl .theme-card.card-border .slick-prev {
        left: 30px;
      }

      .rtl .theme-card.card-border .slick-next {
        left: 50px;
      }

      .rtl .theme-card.card-border .offer-slider img {
        padding: 15px 30px 15px 15px;
      }

      .rtl .theme-card.card-border .offer-slider .slick-slide > div {
        direction: rtl;
      }

      .rtl .background .contain-bg h4 {
        text-align: center;
      }

      .rtl .center-slider:hover .slick-next {
        left: 20px;
        right: unset;
      }

      .rtl .center-slider:hover .slick-prev {
        left: unset;
        right: 20px;
      }

      .rtl .theme-tab .tab-title {
        -webkit-padding-start: 0;
      }

      .rtl .theme-tab .tab-content .product-tab .tab-box .product-box2 img {
        padding: 15px;
      }

      .rtl
        .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        .rating {
        text-align: right;
      }

      .rtl
        .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        a
        h6 {
        margin-left: 35px;
        margin-right: 0;
      }

      .rtl
        .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        .color-variant {
        text-align: right;
        -webkit-padding-start: 0;
      }

      .rtl .beauty-about .about-text p {
        text-align: right;
      }

      .rtl .beauty-about .service-block1 h5 {
        text-align: center;
      }

      .rtl .timer {
        padding-left: 0;
        padding-right: 40px;
      }
      .rtl .timer span .padding-l {
        padding-left: 0;
        padding-right: 22px;
      }

      .rtl .category-m .category-wrapper h4 {
        text-align: center;
      }

      .rtl .category-m .category-wrapper .category-link {
        -webkit-padding-start: 0;
      }

      .rtl
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media
        .media-body
        a
        h6 {
        margin-right: 0;
        margin-left: 20px;
      }

      .rtl
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media
        .media-body
        .color-variant {
        text-align: right;
        -webkit-padding-start: 0;
      }

      .rtl .compare-page .table-wrapper .table tbody tr th,
      .rtl .compare-page .table-wrapper .table tbody tr td {
        text-align: right;
      }

      .rtl .compare-page .table-wrapper .table thead .th-compare td {
        text-align: right;
      }

      .rtl
        .compare-page
        .table-wrapper
        .table
        thead
        .th-compare
        th
        .remove-compare {
        float: right;
      }

      .rtl .product-wrap .product-detail .rating,
      .rtl .product-wrap .product-detail h4,
      .rtl .product-wrap .product-detail h6,
      .rtl .product-wrap .product-detail .color-variant,
      .rtl .product-wrap .product-info .rating,
      .rtl .product-wrap .product-info h4,
      .rtl .product-wrap .product-info h6,
      .rtl .product-wrap .product-info .color-variant {
        text-align: center;
      }

      .rtl .product-wrap .product-detail .color-variant li,
      .rtl .product-wrap .product-info .color-variant li {
        margin: 0 2px;
      }

      .rtl .breadcrumb-item + .breadcrumb-item {
        padding-right: 0.5rem;
        padding-left: 0;
      }
      .rtl .breadcrumb-item + .breadcrumb-item:before {
        padding-right: 0;
        padding-left: 0.5rem;
      }

      .rtl .top-header .header-dropdown li:first-child {
        padding-right: 25px;
        padding-left: 0;
      }

      .rtl
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .media
        img.mr-3 {
        margin-right: unset !important;
        margin-left: 1rem !important;
      }

      .rtl
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .close-circle {
        right: unset;
        left: 0;
      }

      .rtl .main-menu .menu-left .navbar i {
        float: unset;
      }

      .rtl .main-nav-center .toggle-nav {
        left: 175px;
        right: 0;
      }

      .rtl .testimonial .testimonial-slider .slick-track .slick-slide .media h5,
      .rtl
        .testimonial
        .testimonial-slider
        .slick-track
        .slick-slide
        .media
        h6 {
        text-align: center;
      }

      .rtl .sitemap_page ul {
        text-align: right;
      }

      .rtl .team .slick-next {
        right: unset;
        left: 20px;
      }

      .rtl .team .slick-prev {
        right: unset;
        left: 0;
      }

      .rtl .team h4,
      .rtl .team h6 {
        text-align: center;
      }

      .rtl .blog-page .blog-sidebar .theme-card .recent-blog {
        text-align: right;
      }
      .rtl .blog-page .blog-sidebar .theme-card .recent-blog li .media img {
        margin-right: 0;
        margin-left: 10px;
      }

      .rtl .blog-page .blog-sidebar .theme-card .popular-blog li .blog-date {
        margin: 0 0 0 15px;
      }

      .rtl .blog-page .blog-media .blog-right ul {
        text-align: right;
      }
      .rtl .blog-page .blog-media .blog-right ul li + li {
        padding-right: 15px;
        margin-right: 15px;
        border-right: 1px solid #dddddd;
        padding-left: 0;
        margin-left: 0;
        border-left: none;
      }

      .rtl .blog-detail-page .blog-detail .post-social {
        text-align: right;
      }
      .rtl .blog-detail-page .blog-detail .post-social li + li {
        padding-right: 15px;
        margin-right: 15px;
        border-right: 1px solid #dddddd;
        padding-left: 0;
        margin-left: 0;
        border-left: none;
      }

      .rtl .blog-detail-page .blog-advance ul {
        text-align: right;
      }

      .rtl .blog-detail-page .comment-section li img {
        margin-right: 0;
        margin-left: 20px;
      }

      .rtl .blog-detail-page .blog-contact .theme-form label,
      .rtl .blog-detail-page .blog-contact .theme-form .btn-solid,
      .rtl .blog-detail-page .blog-contact .theme-form .btn-outline {
        float: right;
      }

      .rtl .cart-section tbody tr td h2,
      .rtl .cart-section tbody tr td p,
      .rtl .wishlist-section tbody tr td h2,
      .rtl .wishlist-section tbody tr td p {
        text-align: center;
      }

      .rtl .cart-section tfoot tr td:first-child,
      .rtl .wishlist-section tfoot tr td:first-child {
        padding-right: 0;
        padding-left: 10px;
        text-align: left;
      }

      .rtl .cart-section .cart-buttons > div:last-child,
      .rtl .wishlist-section .cart-buttons > div:last-child {
        text-align: left;
        padding-left: 59px;
        padding-right: 0;
      }

      .rtl .cart-section .cart-buttons > div:first-child .btn-solid,
      .rtl .cart-section .cart-buttons > div:first-child .btn-outline,
      .rtl .wishlist-section .cart-buttons > div:first-child .btn-solid,
      .rtl .wishlist-section .cart-buttons > div:first-child .btn-outline {
        float: right;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-view
        ul
        li:first-child {
        margin-right: 0;
        margin-left: 14px;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .search-count {
        border-right: none;
        border-left: 1px solid #dddddd;
        padding-right: 0;
        padding-left: 20px;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-per-view
        select {
        border-right: none;
        border-left: 1px solid #dddddd;
        padding: 20px;
        background: url(/assets/images/dropdown.png) no-repeat 5%;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-grid-view {
        border-right: none;
        border-left: 1px solid #dddddd;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-filter
        select {
        padding: 20px;
        background: url(/assets/images/dropdown.png) no-repeat 5%;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .open-popup {
        left: unset;
        right: 0;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-grid-view,
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view,
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup,
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .search-count {
        border-right: none;
        border-left: 1px solid #dddddd;
      }
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-grid-view
        select,
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view
        select,
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        select,
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .search-count
        select {
        border-right: none;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-view
        ul {
        float: right;
      }
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-view
        ul
        li:first-child {
        margin-right: 0;
        margin-left: 14px;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view
        select {
        background: url(/assets/images/dropdown.png) no-repeat 5%;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter
        select {
        background: url(/assets/images/dropdown.png) no-repeat 5%;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup {
        text-align: right;
        background: url(/assets/images/dropdown.png) no-repeat 5%;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-view,
      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-view {
        text-align: right;
      }

      .rtl .qty-box .input-group span button {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .rtl .product-pagination .product-search-count-bottom {
        padding-right: 0;
        padding-left: 15px;
      }

      .rtl .product-pagination .pagination .page-item a i {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .rtl .custom-control-label:after {
        right: -1.5rem;
        left: unset;
      }

      .rtl .contact-page .theme-form label {
        float: right;
      }

      .rtl .contact-page .theme-form .btn-solid,
      .rtl .contact-page .theme-form .btn-outline {
        float: right;
      }

      .rtl .contact-page .contact-right ul li {
        padding-right: 150px;
        padding-left: 0;
      }
      .rtl .contact-page .contact-right ul li .contact-icon {
        left: unset;
        border-left: 1px solid #dddddd;
        border-right: 0;
        right: 0;
      }
      .rtl .contact-page .contact-right ul li .contact-icon h6 {
        text-align: center;
      }

      .rtl .faq-section .accordion.theme-accordion .card .card-header button {
        float: right;
        text-align: right;
      }
      .rtl
        .faq-section
        .accordion.theme-accordion
        .card
        .card-header
        button:before {
        right: unset;
        left: 20px;
      }

      .rtl .login-page .theme-card {
        text-align: right;
      }
      .rtl .login-page .theme-card .theme-form label {
        float: right;
      }

      .rtl .register-page .theme-card .theme-form label {
        float: right;
      }

      .rtl .image-swatch {
        text-align: right;
      }

      .rtl .product-right .color-variant {
        text-align: center;
      }

      .rtl .product-right .rating {
        text-align: right;
      }

      .rtl .product-right.product-form-box h4,
      .rtl .product-right.product-form-box h3,
      .rtl .product-right.product-form-box h6 {
        text-align: center;
      }

      .rtl .product-right .product-icon .product-social li {
        padding-right: 0;
        padding-left: 30px;
      }

      .rtl .product-right .product-icon .wishlist-btn i {
        border-left: none;
        border-right: 1px solid #dddddd;
        padding-left: 0;
        margin-left: 0;
        padding-right: 10px;
        margin-right: 5px;
      }

      .rtl .product-right .product-icon .wishlist-btn span {
        padding-left: 0;
        padding-right: 10px;
      }

      .rtl .product-right .payment-card-bottom {
        text-align: right;
      }
      .rtl .product-right .payment-card-bottom ul li {
        padding-right: 0;
        padding-left: 10px;
      }

      .rtl .single-product-tables {
        text-align: right;
      }
      .rtl .single-product-tables.detail-section {
        text-align: right;
      }

      .rtl .tab-product .theme-form input,
      .rtl .product-full-tab .theme-form input {
        text-align: right;
      }

      .rtl .tab-product .tab-content .theme-form .media .ml-3,
      .rtl .product-full-tab .tab-content .theme-form .media .ml-3 {
        margin-left: 0 !important;
        margin-right: 1rem !important;
      }

      .rtl .theme-form {
        text-align: right;
      }

      .rtl .collection .collection-block .collection-content h3,
      .rtl .collection .collection-block .collection-content h4,
      .rtl .collection .collection-block .collection-content p {
        text-align: center;
      }

      .rtl .product-right-slick .slick-next,
      .rtl .product-slick .slick-next {
        right: unset;
        left: 1px;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .rtl .product-right-slick .slick-prev,
      .rtl .product-slick .slick-prev {
        left: unset;
        right: 1px;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .rtl .product-right-slick:hover .slick-next,
      .rtl .product-slick:hover .slick-next {
        right: unset;
        left: 20px;
      }

      .rtl .product-right-slick:hover .slick-prev,
      .rtl .product-slick:hover .slick-prev {
        left: unset;
        right: 20px;
      }

      .rtl .collection-wrapper .product-right .product-buttons {
        text-align: center;
      }

      .rtl .collection-wrapper .product-right .size-box {
        text-align: center;
      }
      .rtl .collection-wrapper .product-right .size-box ul li {
        margin-right: 0;
        margin-left: 10px;
      }

      .rtl .collection-wrapper .product-right .product-description h6 span {
        float: left;
      }

      .rtl .collection-mobile-back span i {
        float: left;
      }

      .rtl .modal-header .close {
        padding: unset;
        margin: unset;
      }

      .rtl .collection-collapse-block .collapse-block-title:after {
        left: -3px;
        right: unset;
      }

      .rtl .collection-filter-block .product-service .media .media-body {
        padding-right: 10px;
        padding-left: 0;
      }

      .rtl .collection-sidebar-banner {
        text-align: right;
      }

      .rtl .tab-border .nav-border {
        border-right: 0;
        border-left: 1px solid #dddddd;
      }

      .rtl .product-pagination .pagination .page-item.active a {
        border-right: none;
      }

      .rtl .custom-control {
        padding-left: 0;
        padding-right: 1.5rem;
      }

      .rtl
        .collection-collapse-block
        .collection-collapse-block-content
        .color-selector
        ul {
        text-align: right;
      }

      .rtl
        .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox {
        text-align: right;
      }

      .rtl .theme-modal .modal-dialog .quick-view-modal button.close {
        left: 10px;
        right: 0;
      }

      .rtl
        .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .close {
        left: 17px;
        right: unset;
      }

      .rtl .custom-control-label:before {
        right: -1.5rem;
        left: 0;
      }

      .rtl .product-wrapper-grid.list-view .product-box .product-detail {
        padding-right: 15px;
        padding-left: 0;
      }

      .rtl .top-header .header-contact {
        text-align: right;
      }
      .rtl .top-header .header-contact li {
        padding-right: 0;
        padding-left: 25px;
      }
      .rtl .top-header .header-contact li i {
        padding-right: 0;
        padding-left: 10px;
      }

      .rtl .top-header .header-dropdown {
        text-align: left;
      }
      .rtl .top-header .header-dropdown .onhover-show-div li {
        padding-right: 0;
      }
      .rtl .top-header .header-dropdown li i {
        padding-right: 0;
        padding-left: 5px;
      }

      .rtl .main-menu .menu-right {
        float: left;
      }

      .rtl .search-overlay > div .overlay-content button {
        right: unset;
        left: 10px;
      }

      .rtl .footer-theme .sub-title {
        text-align: right;
      }
      .rtl .footer-theme .sub-title li a:before {
        right: 0;
      }
      .rtl .footer-theme .sub-title .contact-list li {
        padding-left: 0;
        padding-right: 25px;
      }
      .rtl .footer-theme .sub-title .contact-list i {
        left: unset;
        right: 0;
      }

      .rtl .footer-logo {
        text-align: right;
      }

      .rtl .footer-social li,
      .rtl .social-white li {
        padding-right: 0;
        padding-left: 45px;
      }

      .rtl .sub-footer .payment-card-bottom li {
        padding-left: 0;
        padding-right: 15px;
      }

      .rtl .footer-theme2 .footer-block h4,
      .rtl .footer-theme2 .footer-block h2,
      .rtl .footer-theme2 .footer-title h4,
      .rtl .footer-theme2 .footer-title h2 {
        text-align: center;
      }

      .rtl .footer-theme2 .footer-logo {
        text-align: center;
      }

      .rtl .footer-theme2 .social-white li {
        padding-left: 22px;
        padding-right: 22px;
      }

      .rtl .dark-layout h2 {
        text-align: center;
      }

      .rtl .dark-layout .footer-contant p {
        text-align: center;
      }

      .rtl footer.footer-black.footer-light .light-layout.upside .subscribe {
        border-left: 1px solid rgba(0, 0, 0, 0.8);
        border-right: none;
      }

      .rtl .subscribe-form.classic-form .form-control {
        margin-left: 0;
        margin-right: 15px;
      }

      .rtl .rtl-text .product-right .color-variant,
      .rtl .rtl-text .product-right .size-box,
      .rtl .rtl-text .product-right .product-buttons,
      .rtl .rtl-text .product-right .border-product {
        text-align: right;
      }

      .rtl .search-block .form-header .input-group i {
        padding-right: 0;
        padding-left: 10px;
      }

      .rtl .payment-box .payment-options li .radio-option {
        text-align: right;
      }
      .rtl .payment-box .payment-options li .radio-option label {
        padding-right: 30px;
        padding-left: 0;
      }
      .rtl .payment-box .payment-options li .radio-option input[type="radio"] {
        right: 0;
        left: unset;
      }

      .rtl .order-box .total li .count {
        text-align: right;
      }

      .rtl .order-box .sub-total .shipping {
        text-align: right;
      }

      .rtl .order-box .sub-total .shopping-option label {
        padding-left: 0;
        padding-right: 10px;
      }

      .rtl .order-box .sub-total li .count {
        text-align: right;
      }

      .rtl .order-box .qty li span {
        text-align: right;
      }

      .rtl .order-box .title-box span {
        text-align: right;
      }

      .rtl .error-section h1,
      .rtl .error-section h2 {
        text-align: center;
      }

      .rtl .dashboard .box .box-title > a {
        right: unset;
        left: 0;
      }

      .rtl .dashboard .box address {
        text-align: right;
      }

      .rtl .success-text h2,
      .rtl .success-text p {
        text-align: center;
      }

      .rtl .product-order .product-order-detail {
        text-align: right;
      }

      .rtl .product-order .final-total h3 span {
        float: left;
      }

      .rtl .delivery-sec h2,
      .rtl .delivery-sec h3 {
        text-align: center;
      }

      .rtl
        .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        .media
        .media-body
        a
        h6 {
        text-align: center;
      }

      .rtl
        .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        #upsell_product
        .product-box
        .product-detail
        h6,
      .rtl
        .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        #upsell_product
        .product-box
        .product-detail
        h4 {
        text-align: center;
      }

      .rtl
        .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .product-upsell
        h4 {
        text-align: center;
      }

      .rtl .add_to_cart .cart-inner .cart_top .close-cart {
        margin-right: auto;
        margin-left: unset;
      }

      .rtl .add_to_cart .cart-inner .cart_media .close-circle {
        left: 0;
        right: unset;
      }

      .rtl .payment-box .payment-options li .radio-option label img {
        margin-right: -30px;
        margin-left: 0;
      }

      .rtl .checkout-page .checkout-form select {
        background: url(/assets/images/dropdown.png) no-repeat 3%;
      }

      .rtl .compare-section .compare-part .detail-part .title-detail h5 {
        text-align: center;
      }

      .rtl .dashboard-left .block-content ul li:hover {
        padding-right: 10px;
        padding-left: 0;
      }

      .rtl .layout7-product .product-box .details-product {
        right: 15px;
        left: unset;
      }

      .rtl .game-product .product-box .product-detail .rating,
      .rtl .game-product .product-wrap .product-detail .rating {
        text-align: center;
      }

      .rtl .game-product .product-box .product-detail h4,
      .rtl .game-product .product-box .product-detail h6,
      .rtl .game-product .product-wrap .product-detail h4,
      .rtl .game-product .product-wrap .product-detail h6 {
        text-align: center;
      }

      .rtl .j-box .product-box .cart-info.cart-wrap,
      .rtl .j-box .product-wrap .cart-info.cart-wrap {
        left: 0;
        right: 0;
      }

      .rtl .j-box .product-box .cart-info a {
        border-right: 1px solid #dddddd;
        border-left: none;
      }

      .rtl .product-m .slick-slide > div {
        direction: rtl;
      }

      .rtl header.left-header .sidenav {
        right: 0;
      }
      .rtl header.left-header .sidenav .left-sidebar_center {
        padding: 40px 30px 40px 0;
      }
      .rtl header.left-header .sidenav .pixelstrap li a .sub-arrow {
        left: 7px;
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .rtl header.left-header .top-header {
        padding-left: 0;
        padding-right: 300px;
      }

      .rtl header.left-header .search-overlay {
        padding-right: 300px;
        padding-left: 0;
      }

      .rtl .detail-cannabis .detail_section h4,
      .rtl .detail-cannabis .detail_section p {
        text-align: center;
      }

      .rtl .tools-grey .product-box.product-wrap .cart-info.cart-wrap {
        left: 0;
        right: 0;
      }

      .rtl .tab-left .theme-tab .left-side .tab-title {
        margin-left: 100px;
        text-align: right;
        margin-right: 0;
      }

      .rtl .review-page .comnt-sec {
        text-align: right;
      }
      .rtl .review-page .comnt-sec li {
        margin-right: 0;
        margin-left: 15px;
      }
      .rtl .review-page .comnt-sec li a i {
        margin-right: 0;
        margin-left: 5px;
      }

      .rtl .template-password #container #login h2 {
        text-align: center;
      }

      .rtl .template-password #container #login .theme-form {
        text-align: center;
      }
      .rtl .template-password #container #login .theme-form h3 {
        text-align: center;
      }

      .rtl .template-password #container #powered p {
        text-align: center;
      }

      .rtl .ribbon-1 {
        right: 14px;
        left: unset;
      }

      .rtl
        .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body
        .demo-section
        .demo-effects
        > div
        .demo-text
        h4 {
        text-align: center;
      }

      .rtl .home-slider .slider-details h1,
      .rtl .home-slider .slider-details h2,
      .rtl .home-slider .slider-details h3,
      .rtl .home-slider .slider-details h4,
      .rtl .home-slider .slider-details h5,
      .rtl .home-slider .slider-details h6 {
        text-align: center !important;
      }

      .rtl .product-christmas .product-box .cart-wrap {
        width: 100%;
      }

      .rtl .product-christmas .product-box .product-detail h4,
      .rtl .product-christmas .product-box .product-detail h6 {
        text-align: center;
      }

      .rtl .product-christmas .product-box .product-detail .rating {
        text-align: center;
      }

      .rtl .full-banner.feature-banner {
        direction: ltr !important;
      }

      .rtl .blog-section .blog-details h4,
      .rtl .blog-section .blog-details h6 {
        text-align: right;
      }

      .rtl .blog-section .review-box .review-content h5,
      .rtl .blog-section .review-box .review-content h6,
      .rtl .blog-section .review-box .review-content p {
        text-align: center;
      }

      .rtl .blog-section .review-box .santa-img {
        left: -116px;
        right: unset;
      }
      .rtl .blog-section .review-box .santa-img img {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }

      .rtl .full-banner .santa-img {
        right: 50px;
        left: unset;
      }

      .rtl .become-vendor .step-bg h4 {
        text-align: center;
      }

      .rtl .become-vendor .step-bg .step-box p {
        text-align: center;
      }

      .rtl .start-selling {
        text-align: right;
      }

      .rtl
        .vendor-profile
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .search-count,
      .rtl
        .vendor-profile
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-grid-view {
        border-color: #efefef;
      }

      .rtl
        .vendor-profile
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-per-view
        select {
        border-color: #efefef;
      }

      .rtl .vendor-profile .product-pagination .product-search-count-bottom {
        border-left: none;
      }

      .rtl .vendor-profile .profile-left .vendor-contact {
        padding-left: 0;
        margin-left: 0;
        border-left: none;
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #efefef;
      }
      .rtl .vendor-profile .profile-left .vendor-contact h6 {
        text-align: center;
      }
      .rtl .vendor-profile .profile-left .vendor-contact .footer-social {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .rtl .vendor-profile .profile-left .profile-detail {
        border-left: none;
        padding-left: 0;
        margin-left: 0;
        padding-right: 20px;
        margin-right: 20px;
        border-right: 1px solid #efefef;
      }

      .rtl .dashboard-section .radio_animated {
        margin: 0 0 0 1rem;
      }

      .rtl .dashboard-section .counter-section .counter-box img {
        margin-left: 20px;
        margin-right: unset;
      }

      .rtl
        .dashboard-section
        .dashboard-sidebar
        .profile-top
        .profile-detail
        h5,
      .rtl
        .dashboard-section
        .dashboard-sidebar
        .profile-top
        .profile-detail
        h6 {
        text-align: center;
      }

      .rtl .dashboard-section .apexcharts-svg {
        direction: ltr;
      }

      .rtl .dashboard-section .top-sec .btn {
        margin-right: auto;
        margin-left: unset;
      }

      .rtl
        .dashboard-section
        .dashboard-box
        .dashboard-detail
        .account-setting {
        text-align: right;
      }

      .rtl .faq-tab .nav-tabs .nav-item .nav-link {
        text-align: right;
      }
      .rtl .faq-tab .nav-tabs .nav-item .nav-link.active,
      .rtl .faq-tab .nav-tabs .nav-item .nav-link:hover {
        border-left: 2px solid var(--theme-deafult);
        border-right: none;
      }

      .rtl .logout-modal .modal-body {
        text-align: right;
      }

      .rtl .logout-modal .modal-footer {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: end;
      }
      .rtl .logout-modal .modal-footer .btn-custom {
        margin-left: 0;
        margin-right: 4px;
      }
      .rtl .logout-modal .modal-footer .btn-custom:first-child {
        margin-right: 0;
      }

      .rtl .bg-title .theme-tab .bg-title-part .tab-title {
        margin-right: auto;
        text-align: left;
        margin-left: unset;
      }
      .rtl .bg-title .theme-tab .bg-title-part .tab-title li {
        padding-left: 0;
        padding-right: 25px;
      }

      .rtl .loader_skeleton .blog-advance ul {
        text-align: right;
      }

      .rtl .loader_skeleton .theme-card .product-box .img-wrapper {
        margin-right: unset;
        margin-left: 15px;
      }

      .rtl .loader_skeleton .blog-page .order-sec .product-box .img-wrapper {
        margin-left: 25px;
        margin-right: unset;
      }

      .rtl .loader_skeleton .collection-filter-block .filter-block ul {
        text-align: right;
      }

      .rtl .loader_skeleton .inside-detail.center_details .product-detail {
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        right: unset;
      }

      .rtl .loader_skeleton .inside-detail .product-detail {
        left: unset;
        right: 15px;
      }

      .rtl .loader_skeleton .product-box .product-detail h5,
      .rtl .loader_skeleton .product-box .product-detail h4,
      .rtl .loader_skeleton .product-box .product-detail h6 {
        margin-left: auto;
      }

      .rtl .loader_skeleton .full-box .side-part .product-box .img-wrapper {
        margin-right: unset;
        margin-left: 15px;
      }

      .rtl .loader_skeleton .bg-block .product-box .img-wrapper {
        margin-right: unset;
        margin-left: 15px;
      }

      .rtl .loader_skeleton .left-sidebar_space {
        padding-left: 0;
        padding-right: 300px;
      }

      .rtl .loader_skeleton .product-page .product-right .btn-group .btn-ldr {
        margin-left: 15px;
        margin-right: 0;
      }

      .rtl .loader_skeleton .product-page .product-right ul {
        text-align: right;
      }

      .rtl .loader_skeleton .product-page .product-right.product-form-box ul {
        text-align: center;
      }

      .rtl .loader_skeleton .tab-product ul {
        text-align: right;
      }

      /*=====================
          28.Dark CSS start
      ==========================*/
      body.dark {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #cfd4da;
      }

      .dark h1 {
        color: #ffffff;
      }

      .dark h2 {
        color: #f1f3f5;
      }

      .dark h3 {
        color: #eaedef;
      }

      .dark h4 {
        color: #e7eaec;
      }

      .dark h5 {
        color: #dee2e6;
      }

      .dark h6 {
        color: #cfd4da;
      }

      .dark p {
        color: #cfd4da;
      }

      .dark li {
        color: #cfd4da;
      }

      .dark a {
        color: #cbcbcb;
      }

      .dark .page-link {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }

      .dark .breadcrumb-section {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .light-layout {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .form-control {
        color: #cfd4da;
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border: 1px solid #404040;
      }

      .dark .btn-solid {
        color: #ffffff !important;
      }
      .dark .btn-solid:hover {
        color: #222222 !important;
      }

      .dark select {
        color: #cfd4da;
      }

      .dark option {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark header {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark header.header-5 .pixelstrap a,
      .dark header.header-5 .pixelstrap:hover,
      .dark header.header-5 .pixelstrap:active {
        color: #222222;
      }
      .dark header.header-metro .metro {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark header.header-metro .top-header .header-contact li {
        color: #999999;
      }
      .dark header.header-metro .top-header .header-dropdown li {
        color: #999999;
      }
      .dark header.header-metro .top-header .header-dropdown li a i {
        color: #999999;
      }
      .dark header.header-tools {
        background-color: transparent;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark header.header-tools .logo-menu-part > .container {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }
      .dark header.left-header .top-header {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark
        header.left-header
        .main-menu
        .menu-right
        .header-dropdown
        > li
        img {
        -webkit-filter: invert(100);
        filter: invert(100);
      }
      .dark header.left-header .onhover-div > div img {
        -webkit-filter: invert(100);
        filter: invert(100);
      }
      .dark header.left-header .sidenav nav {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark header.left-header .sidenav .left-sidebar_center {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark header.left-header .sidenav .pixelstrap > li > a {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark header.green-gradient {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark header.green-gradient .top-header {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background: #232323;
        background-image: none;
      }
      .dark header.header-gym .pixelstrap > li > a {
        color: white !important;
      }

      .dark .top-header {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .sub-footer {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .border-section {
        border-color: #404040;
      }

      .dark .pixelstrap a,
      .dark .pixelstrap:hover,
      .dark .pixelstrap:active {
        color: #f1f3f5;
      }

      .dark .sm-vertical {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .sidenav nav {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .sidenav .sidebar-back {
        color: #f1f3f5;
        border-color: #404040;
      }

      .dark .pixelstrap ul {
        background: #232323;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .dark .pixelstrap ul a {
        color: #e7eaec;
      }
      .dark .pixelstrap ul a:hover,
      .dark .pixelstrap ul a:focus,
      .dark .pixelstrap ul a:active,
      .dark .pixelstrap ul a.highlighted {
        color: #e7eaec;
      }

      .dark .pixelstrap .home-menu,
      .dark .pixelstrap .feature-menu,
      .dark .pixelstrap .category-menu,
      .dark .pixelstrap .full-mega-menu,
      .dark .pixelstrap .clothing-menu {
        -webkit-box-shadow: 0 0 1px 0 #2b2b2b;
        box-shadow: 0 0 1px 0 #2b2b2b;
      }

      .dark .onhover-div > div img {
        -webkit-filter: brightness(100);
        filter: brightness(100);
      }

      .dark .onhover-div .show-div {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .dark .error-section h1 {
        color: #e6e6e6;
      }

      .dark .breadcrumb-item.active {
        color: #e7eaec;
      }

      .dark .breadcrumb-section .breadcrumb a {
        color: #f7f7f7;
      }

      .dark .main-menu .menu-left .navbar i {
        color: #f7f7f7;
      }

      .dark .main-menu .menu-right .icon-nav .onhover-div .show-div.setting h6 {
        color: #cfd4da;
      }

      .dark
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.setting
        ul
        li
        a {
        color: #cfd4da;
      }

      .dark
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .media
        .media-body
        h4 {
        color: #e7eaec;
      }
      .dark
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .media
        .media-body
        h4
        span {
        color: #dee2e6;
      }

      .dark
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .close-circle
        i:hover {
        color: #ffffff;
      }

      .dark
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .total {
        border-color: #404040;
      }
      .dark
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .total
        h5 {
        color: #dee2e6;
      }

      .dark
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .buttons
        a {
        color: #cbcbcb;
      }
      .dark
        .main-menu
        .menu-right
        .icon-nav
        .onhover-div
        .show-div.shopping-cart
        li
        .buttons
        a:hover {
        color: #ff4c3b;
      }

      .dark .footer-theme .sub-title li {
        color: #cfd4da;
      }
      .dark .footer-theme .sub-title li a {
        color: #cfd4da;
      }

      .dark .footer-theme .sub-title h4 {
        color: #e7eaec;
      }

      .dark .footer-social i,
      .dark .social-white i {
        color: #cfd4da;
      }

      .dark .footer-light .subscribe {
        border-color: #404040;
      }

      .dark .footer-theme2 .contact-details li {
        color: #cfd4da;
      }
      .dark .footer-theme2 .contact-details li a {
        color: #e7eaec;
      }

      .dark .footer-theme2 .footer-link a,
      .dark .footer-theme2 .footer-link-b a {
        color: #cbcbcb;
      }
      .dark .footer-theme2 .footer-link a:hover,
      .dark .footer-theme2 .footer-link-b a:hover {
        color: #ffffff;
      }

      .dark .top-header .header-contact li {
        color: #cfd4da;
      }

      .dark .top-header .header-dropdown li {
        color: #cfd4da;
      }
      .dark .top-header .header-dropdown li a i {
        color: #cfd4da;
      }

      .dark
        .top-header
        .header-dropdown
        .onhover-dropdown
        .onhover-show-div
        li
        a {
        color: #cbcbcb;
      }

      .dark .top-header.top-header-dark .header-dropdown li a {
        color: #cbcbcb;
      }

      .dark .top-header.top-header-dark .header-contact li i {
        color: #cbcbcb;
      }

      .dark .top-header.top-header-dark2 .header-dropdown li a {
        color: #cfd4da;
      }

      .dark .top-header.top-header-dark2 .header-contact li i {
        color: #cfd4da;
      }

      .dark .top-header.top-header-dark3 .header-dropdown li a {
        color: #cbcbcb;
      }

      .dark .top-header.top-header-dark3 .header-contact li i {
        color: #cbcbcb;
      }

      .dark .onhover-dropdown .onhover-show-div {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .dark .testimonial {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark
        .testimonial
        .testimonial-slider
        .slick-track
        .slick-slide:nth-child(even)
        .media {
        border-color: #404040;
      }
      .dark .testimonial .testimonial-slider .media img {
        border-color: #404040;
      }

      .dark .team h2 {
        border-color: #404040;
      }

      .dark .service-block + .service-block {
        border-color: #404040;
      }

      .dark .pixelstrap.light-font-menu li > a {
        color: #f1f3f5;
      }

      .dark .theme-tab .tab-title a,
      .dark .theme-tab .tab-title2 a {
        color: #cbcbcb;
      }

      .dark .theme-tab .tab-title .current a,
      .dark .theme-tab .tab-title2 .current a {
        color: #ff4c3b;
      }

      .dark .theme-tab .tab-title2:after {
        border-color: #404040;
      }

      .dark .theme-tab .tab-title2 .current {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .theme-tab .tab-title2 .current a {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .product-box .product-detail h4,
      .dark .product-box .product-info h4,
      .dark .product-wrap .product-detail h4,
      .dark .product-wrap .product-info h4 {
        color: #e7eaec;
      }

      .dark .theme-card .offer-slider .media .media-body h4 {
        color: #e7eaec;
      }

      .dark .theme-card .slick-prev:before,
      .dark .theme-card .slick-next:before {
        color: #ffffff;
      }

      .dark .theme-card h5.title-border {
        border-color: #404040;
      }

      .dark .theme-card.card-border {
        border-color: #404040;
      }

      .dark .dark-layout {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .sub-footer.darker-subfooter {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .sub-footer.darker-subfooter p {
        color: #cfd4da;
      }

      .dark .blog-page .blog-media .blog-right h4 {
        color: #e7eaec;
      }

      .dark .blog-page .blog-media .blog-right ul {
        color: #cfd4da;
      }

      .dark .blog-page .blog-sidebar .theme-card {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }

      .dark .blog-page .blog-sidebar h4 {
        color: #e7eaec;
      }

      .dark .blog-page .blog-sidebar h6 {
        color: #cfd4da;
      }

      .dark .blog-page .blog-sidebar p {
        color: #cfd4da;
      }

      .dark .blog-detail-page .blog-detail h3 {
        color: #eaedef;
      }

      .dark .blog-detail-page .blog-detail p {
        color: #cfd4da;
      }

      .dark .blog-detail-page .post-social {
        color: #cfd4da;
        border-color: #404040;
      }
      .dark .blog-detail-page .post-social li + li {
        border-color: #404040;
      }

      .dark .blog-detail-page .comment-section {
        border-color: #404040;
      }
      .dark .blog-detail-page .comment-section li {
        border-color: #404040;
      }
      .dark .blog-detail-page .comment-section li h6 {
        color: #cfd4da;
      }
      .dark .blog-detail-page .comment-section li h6 span {
        color: #929292;
      }

      .dark .blog-detail-page .blog-contact .theme-form label {
        color: #cfd4da;
      }

      .dark .blog-detail-page .blog-contact .theme-form input,
      .dark .blog-detail-page .blog-contact .theme-form textarea {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }

      .dark .cart-section .cart-table thead th,
      .dark .wishlist-section .cart-table thead th {
        color: #f1f3f5;
      }

      .dark .cart-section tbody tr td,
      .dark .wishlist-section tbody tr td {
        border-color: #404040;
      }
      .dark .cart-section tbody tr td a,
      .dark .wishlist-section tbody tr td a {
        color: #cbcbcb;
      }
      .dark .cart-section tbody tr td h2,
      .dark .wishlist-section tbody tr td h2 {
        color: #f1f3f5;
      }

      .dark .table tbody + tbody {
        border-color: #404040;
      }

      .dark .table thead th {
        border-color: #404040;
      }

      .dark .top-banner-wrapper .top-banner-content h4 {
        color: #e7eaec;
      }

      .dark .top-banner-wrapper .top-banner-content h5 {
        color: #dee2e6;
      }

      .dark .top-banner-wrapper .top-banner-content p {
        color: #cfd4da;
      }

      .dark .collection-product-wrapper .product-top-filter {
        border-color: #404040;
      }
      .dark
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .search-count,
      .dark
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .sidebar-popup,
      .dark
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .search-count,
      .dark
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup {
        border-color: #404040;
      }
      .dark
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .collection-grid-view,
      .dark
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .collection-grid-view {
        border-color: #404040;
      }
      .dark
        .collection-product-wrapper
        .product-top-filter
        .product-filter-content
        .product-page-per-view
        select,
      .dark
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-per-view
        select {
        border-color: #404040;
      }
      .dark
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup
        a {
        color: #cbcbcb;
      }

      .dark .product-pagination {
        border-color: #404040;
      }
      .dark .product-pagination .pagination .page-item.active a {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }
      .dark .product-pagination .product-search-count-bottom {
        border-color: #404040;
      }
      .dark .product-pagination .product-search-count-bottom h5 {
        color: #dee2e6;
      }

      .dark .portfolio-section.metro-section .product-box .product-detail {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .portfolio-section.metro-section .product-box .product-detail h4 {
        color: #e7eaec;
      }
      .dark .portfolio-section.metro-section .product-box .product-detail h6 {
        color: #cfd4da;
      }

      .dark .portfolio-section.metro-section .product-box .cart-wrap button {
        border-color: #404040;
        background-color: rgba(43, 43, 43, 0.8);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .portfolio-section.metro-section .product-box .cart-wrap button i {
        color: #cbcbcb;
      }

      .dark .portfolio-section.metro-section .product-box .cart-wrap a i {
        border-color: #404040;
        background-color: rgba(43, 43, 43, 0.8);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #cbcbcb;
      }

      .dark .collection-filter-block {
        border-color: #404040;
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .collection-collapse-block .collapse-block-title {
        color: #eaedef;
      }
      .dark .collection-collapse-block .collapse-block-title:after {
        color: #eaedef;
      }

      .dark
        .collection-collapse-block
        .collection-collapse-block-content
        .collection-brand-filter
        .collection-filter-checkbox
        label {
        color: #929292;
      }

      .dark .load-more-sec a {
        border-color: #404040;
      }

      .dark .checkout-page .checkout-title h3 {
        color: #eaedef;
      }

      .dark .checkout-page .checkout-form .form-group .field-label {
        color: #cfd4da;
      }

      .dark .checkout-page .checkout-form input[type="text"],
      .dark .checkout-page .checkout-form input[type="email"],
      .dark .checkout-page .checkout-form input[type="password"],
      .dark .checkout-page .checkout-form input[type="tel"],
      .dark .checkout-page .checkout-form input[type="number"],
      .dark .checkout-page .checkout-form input[type="url"] {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }

      .dark .checkout-page .checkout-form select,
      .dark .checkout-page .checkout-form textarea {
        border-color: #404040;
      }

      .dark .checkout-page .checkout-form .checkout-details {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border: 1px solid #404040;
      }

      .dark .order-box .title-box {
        color: #eaedef;
        border-color: #404040;
      }

      .dark .order-box .qty {
        border-color: #404040;
      }
      .dark .order-box .qty li {
        color: #cfd4da;
      }
      .dark .order-box .qty li span {
        color: #dee2e6;
      }

      .dark .order-box .sub-total {
        border-color: #404040;
      }
      .dark .order-box .sub-total li {
        color: #cfd4da;
      }
      .dark .order-box .sub-total .shopping-option label {
        color: #929292;
      }

      .dark .order-box .total li {
        color: #cfd4da;
      }

      .dark .payment-box .payment-options li .radio-option label {
        color: #929292;
      }

      .dark .collection .collection-block .collection-content h4 {
        color: #e7eaec;
      }

      .dark .collection .collection-block .collection-content h3 {
        color: #eaedef;
      }

      .dark .table th,
      .dark .table td {
        border-color: #404040;
      }

      .dark .compare-page .table-wrapper .table {
        color: #f1f3f5;
        border-color: #404040;
      }
      .dark .compare-page .table-wrapper .table thead .th-compare td {
        background: #232323;
        border-color: #404040;
      }
      .dark .compare-page .table-wrapper .table thead .th-compare th {
        border-color: #404040;
      }
      .dark
        .compare-page
        .table-wrapper
        .table
        thead
        .th-compare
        th
        .remove-compare {
        color: #cfd4da;
      }
      .dark .compare-page .table-wrapper .table tbody tr th {
        border-color: #404040;
        background: #232323;
      }
      .dark .compare-page .table-wrapper .table tbody tr td {
        border-color: #404040;
      }
      .dark .compare-page .table-wrapper .table tbody tr p {
        color: #cfd4da;
      }

      .dark .compare-section .compare-part .detail-part .title-detail {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }

      .dark .compare-section .compare-part .btn-part {
        border-color: #404040;
      }

      .dark .compare-section .compare-part .close-btn {
        color: #e7eaec;
      }

      .dark .compare-section .slick-slide > div {
        border-color: #404040;
      }

      .dark .compare-section .slick-slide:first-child {
        border-color: #404040;
      }

      .dark .contact-page .theme-form label {
        color: #cfd4da;
      }

      .dark .contact-page .theme-form input {
        border-color: #404040;
      }

      .dark .contact-page .theme-form textarea {
        border-color: #404040;
      }

      .dark .contact-page .contact-right ul li .contact-icon {
        border-color: #404040;
      }

      .dark .dashboard .box-head h2 {
        color: #f1f3f5;
      }

      .dark .dashboard .box .box-title {
        border-color: #404040;
      }
      .dark .dashboard .box .box-title h3 {
        color: #eaedef;
      }

      .dark .dashboard-left .block-content {
        border-color: #404040;
      }
      .dark .dashboard-left .block-content ul li a {
        color: #cbcbcb;
      }

      .dark .dashboard-right .dashboard {
        border-color: #404040;
      }

      .dark .white-bg {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .border-bottom-grey {
        border-color: #404040;
      }

      .dark .layout-8 .layout-8-bg {
        background-blend-mode: overlay;
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .card {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .card .card-header {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .faq-section .accordion.theme-accordion .card {
        border-color: #404040;
      }
      .dark .faq-section .accordion.theme-accordion .card .card-header {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .faq-section .accordion.theme-accordion .card .card-header button {
        color: #dee2e6;
      }
      .dark
        .faq-section
        .accordion.theme-accordion
        .card
        .card-header
        button[aria-expanded="true"]:before {
        border-bottom-color: #404040;
      }
      .dark
        .faq-section
        .accordion.theme-accordion
        .card
        .card-header
        button:before {
        border-top-color: #404040;
      }
      .dark .faq-section .accordion.theme-accordion .card .card-body p {
        color: #cfd4da;
      }

      .dark.box-layout-body .box-layout-header {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark.box-layout-body .box-layout.bg-image {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background-image: none;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .dark.box-layout-body .light-layout {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark.box-layout-body .sub-footer {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .full-box .theme-card .offer-slider .product-box2 + .product-box2 {
        border-top: none;
      }

      .dark .center-slider {
        border-color: #404040;
      }

      .dark .bg-block {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background-image: none;
      }

      .dark .theme-tab .tab-content .product-tab .tab-box {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark
        .theme-tab
        .tab-content
        .product-tab
        .tab-box
        .product-box2
        .media
        .media-body
        h4 {
        color: #e7eaec;
      }

      .dark .flower-bg {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background-image: none;
      }

      .dark .pwd-page .theme-form input {
        border-color: #404040;
      }

      .dark .full-scroll-menu {
        background-color: transparent;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .full-scroll-footer .sub-footer {
        background-color: transparent;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .portfolio-section .filter-button {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #cfd4da;
      }
      .dark .portfolio-section .filter-button.active {
        background-color: #ff4c3b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #ffffff;
      }

      .dark .portfolio-section .isotopeSelector:hover .overlay-background {
        border-color: #dddddd;
      }
      .dark .portfolio-section .isotopeSelector:hover .overlay-background i {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .portfolio-section .isotopeSelector .overlay {
        border-color: #dddddd;
      }

      .dark .bg-img-gym .dark-layout {
        background-color: transparent;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .bg-img-gym .sub-footer.darker-subfooter {
        background-color: #000000;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .category-block .category-image {
        border-color: #404040;
      }
      .dark .category-block .category-image.svg-image {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .j-box .product-box {
        border-color: #404040;
      }
      .dark .j-box .product-box .product-detail {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .j-box .product-box .cart-info {
        background-color: rgba(35, 35, 35, 0.84);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }
      .dark .j-box .product-box .cart-info a {
        border-color: #000000;
      }

      .dark .white-layout {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .footer-theme2.footer-border {
        border-color: #404040;
      }

      .dark .footer-theme2.section-light .footer-block .subscribe-white {
        border-color: #404040;
      }

      .dark .footer-theme2.section-light .footer-block h4 {
        color: #e7eaec;
      }

      .dark .footer-theme2.section-light .footer-block .contact-details li a {
        color: #e7eaec;
      }

      .dark .footer-theme2 .footer-link.link-white h4 {
        color: #e7eaec;
      }

      .dark .jewel-footer .sub-footer.black-subfooter {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .jewel-footer .sub-footer p {
        color: #cfd4da;
      }

      .dark .absolute-banner .absolute-bg {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .dark .login-page .theme-card {
        border-color: #404040;
      }
      .dark .login-page .theme-card .theme-form input {
        border-color: #404040;
      }
      .dark .login-page .theme-card .theme-form label {
        color: #929292;
      }

      .dark .login-page .authentication-right h6,
      .dark .login-page .authentication-right p {
        color: #cfd4da;
      }

      .dark .lookbook .lookbook-block .lookbook-dot:before {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .lookbook .lookbook-block .lookbook-dot .dot-showbox .dot-info {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .blog-left .blog-details h4 {
        color: #e7eaec;
      }

      .dark .blog-left .blog-details h6 {
        color: #cfd4da;
      }

      .dark footer.footer-black .below-section {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark footer.footer-black .sub-footer {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark footer.footer-black .upside .small-section {
        background-color: #383838;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark footer.footer-black .subscribe h4 {
        color: #e7eaec;
      }

      .dark footer.footer-black .subscribe p {
        color: #cfd4da;
      }

      .dark footer.footer-black.footer-light .subscribe {
        border-color: #929292;
      }

      .dark footer.pet-layout-footer .white-layout {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark footer.pet-layout-footer .sub-footer.black-subfooter {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark footer.footer-classic .sub-footer {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark footer.footer-5 {
        background-image: unset;
      }
      .dark footer.footer-5 .footer-theme2 .subscribe-block {
        border-color: #404040;
      }
      .dark footer.footer-5 .sub-footer > .container {
        border-color: #404040;
      }

      .dark .logo-block img {
        -webkit-filter: invert(100);
        filter: invert(100);
      }
      .dark .logo-block img:hover {
        -webkit-filter: invert(100);
        filter: invert(100);
      }

      .dark .bg-white {
        background-color: #2b2b2b !important;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .product-box .img-wrapper .cart-box,
      .dark .product-wrap .img-wrapper .cart-box {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .dark .tab-bg.tab-grey-bg {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .delivery-sec {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .product-order .total-sec {
        border-color: #404040;
      }

      .dark .blog.blog_box .blog-details p {
        color: #cfd4da;
      }

      .dark .blog.blog_box .blog-details a p {
        color: #cfd4da;
      }

      .dark .blog.blog_box .blog-details .read-cls {
        color: #cbcbcb;
      }

      .dark .product-right .product-title {
        color: #cfd4da;
      }

      .dark .product-right .border-product {
        border-color: #404040;
      }

      .dark .product-right .product-icon .product-social li a {
        color: #cbcbcb;
      }

      .dark .product-right .product-icon .wishlist-btn {
        color: #cbcbcb;
      }
      .dark .product-right .product-icon .wishlist-btn i {
        border-color: #404040;
      }

      .dark .product-right.product-form-box {
        border-color: #404040;
      }
      .dark .product-right.product-form-box .timer {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .product-right .timer {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .product-right .timer p {
        color: #cfd4da;
      }

      .dark .product-right .size-box ul li {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }
      .dark .product-right .size-box ul li.active {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .product-right .size-box ul li a {
        color: #cbcbcb;
      }

      .dark .product-right h4 del {
        color: #929292;
      }

      .dark .timer span .timer-cal {
        color: #929292;
      }

      .dark .qty-box .input-group span button {
        background: #2b2b2b !important;
        border-color: #404040;
      }

      .dark .qty-box .input-group button i {
        color: #929292;
      }

      .dark .nav-tabs {
        border-color: #404040;
      }
      .dark .nav-tabs .nav-link.active {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .tab-product .nav-material.nav-tabs .nav-item .nav-link {
        color: #cbcbcb;
      }

      .dark .tab-product .nav-material.nav-tabs .nav-link.active {
        color: #ff4c3b;
      }

      .dark .product-full-tab .nav-material.nav-tabs .nav-link.active {
        color: #ff4c3b;
      }

      .dark .tab-product .theme-form input,
      .dark .tab-product .theme-form textarea,
      .dark .product-full-tab .theme-form input,
      .dark .product-full-tab .theme-form textarea {
        border-color: #404040;
      }

      .dark .product-related h2 {
        border-color: #404040;
      }

      .dark .product-accordion .btn-link {
        color: #e7eaec;
      }

      .dark .product-accordion .card-header {
        border-color: rgba(64, 64, 64, 0.125);
      }

      .dark .theme_checkbox label {
        color: #929292;
      }
      .dark .theme_checkbox label .checkmark {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }
      .dark .theme_checkbox label .checkmark:after {
        border-color: #ffffff;
      }

      .dark .bundle .bundle_detail .price_product {
        color: #ffffff;
      }

      .dark .modal-content {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark button.close {
        color: #ffffff;
      }

      .dark .modal-header {
        border-color: #404040;
      }

      .dark .collection-filter-block .product-service .media {
        border-color: #404040;
      }

      .dark .pro_sticky_info {
        border-color: #404040;
      }

      .dark .tab-border {
        border-color: #404040;
      }

      .dark .register-page .theme-card {
        border-color: #404040;
      }
      .dark .register-page .theme-card .theme-form input {
        border-color: #404040;
      }
      .dark .register-page .theme-card .theme-form label {
        color: #929292;
      }

      .dark .category-border {
        background-color: #404040;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .category-border div .category-banner .category-box h2 {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .background {
        background-color: #404040;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .background .contain-bg {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .background .contain-bg h4 {
        color: #e7eaec;
      }
      .dark .background .contain-bg:hover h4 {
        color: #ff4c3b;
      }

      .dark .blog-bg {
        background-color: #404040;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .sub-footer.black-subfooter {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark.tools-bg {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark.tools-bg section {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .category-tools .category-m .category-wrapper {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .category-m .category-wrapper {
        border-color: #404040;
      }
      .dark .category-m .category-wrapper h4 {
        color: #e7eaec;
      }
      .dark .category-m .category-wrapper .category-link li a {
        color: #cbcbcb;
      }

      .dark .tools-grey .product-box .product-info {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: rgba(64, 64, 64, 0.2);
      }

      .dark .tools-grey .product-box .cart-info button {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #cbcbcb;
      }

      .dark .tools-grey .product-box .cart-info a {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .tools-grey .product-box .cart-info a i {
        color: #cbcbcb;
      }

      .dark .tools-grey .product-box .img-wrapper .front {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .tools-brand .row {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .dark .typography_section .typography-box .headings {
        background-color: rgba(35, 35, 35, 0.5);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }
      .dark .typography_section .typography-box .headings h3 {
        color: #eaedef;
      }
      .dark .typography_section .typography-box .headings span {
        color: #929292;
      }
      .dark .typography_section .typography-box .headings span code {
        color: #929292;
      }

      .dark .typography_section .typography-box .typo-content .sub-title {
        color: #f1f3f5;
        border-color: rgba(64, 64, 64, 0.7);
      }

      .dark .typography_section .typo-content.heading_content h1,
      .dark .typography_section .typo-content.heading_content h2,
      .dark .typography_section .typo-content.heading_content h3,
      .dark .typography_section .typo-content.heading_content h4,
      .dark .typography_section .typo-content.heading_content h5,
      .dark .typography_section .typo-content.heading_content h6 {
        color: white;
      }

      .dark
        .typography_section
        .typo-content.product-pagination
        .pagination
        .page-item {
        border-color: #404040;
      }

      .dark .typography_section code {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .absolute_banner .collection-banner .absolute-contain {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .dark .absolute_banner .collection-banner .absolute-contain h4 {
        color: #e7eaec;
      }

      .dark .absolute-product .product-box {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .absolute-product .product-box .product-detail .cart-bottom {
        border-color: #404040;
      }
      .dark .absolute-product .product-box .product-detail .cart-bottom i {
        color: #cbcbcb;
      }
      .dark
        .absolute-product
        .product-box
        .product-detail
        .cart-bottom
        i:hover {
        color: #ffffff;
      }

      .dark .box-product .full-box .theme-card .offer-slider .product-box2 {
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .dark
        .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .media {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark
        .box-product
        .full-box
        .theme-card
        .offer-slider
        .product-box2
        .cart-bottom {
        border-color: #404040;
      }

      .dark .insta-title {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .tab-bg {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .darken-layout {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .darken-layout p {
        color: #cfd4da;
      }
      .dark .darken-layout .sub-title .contact-list li {
        color: #cfd4da;
      }
      .dark .darken-layout .sub-title .contact-list i {
        color: #cfd4da;
      }
      .dark .darken-layout .footer-social i {
        color: #cfd4da;
      }

      .dark .sub-footer.dark-subfooter p {
        color: #cfd4da;
      }

      .dark .cart-section tbody tr td a,
      .dark .cart-section tbody tr td p,
      .dark .wishlist-section tbody tr td a,
      .dark .wishlist-section tbody tr td p {
        color: #cbcbcb;
      }

      .dark .footer-title {
        border-color: #404040;
      }

      .dark .category-bg {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .category-bg .contain-block {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .category-bg .contain-block h2 {
        color: #f1f3f5;
      }
      .dark .category-bg .contain-block h6 span {
        color: #929292;
      }

      .dark .service_slide .service-home .service-block1 {
        background-color: rgba(35, 35, 35, 0.9);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .service_slide .service-home .service-block1:nth-child(even) {
        background-color: rgba(35, 35, 35, 0.7);
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark .service_slide .service-home .service-block1 svg path {
        fill: #ffffff;
      }

      .dark .bg-grey {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .detail-cannabis .detail_section > div {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .dark .detail-cannabis .detail_section svg {
        fill: #ffffff;
      }

      .dark .border-box.tools-grey .product-box {
        border-color: #404040;
      }

      .dark .theme-modal .modal-dialog .modal-content .modal-body {
        background-image: linear-gradient(
          135deg,
          #ff4c3b 5.77%,
          #232323 5.77%,
          #232323 25%,
          #f1f3f5 25%,
          #f1f3f5 30.77%,
          #232323 30.77%,
          #232323 50%,
          #ff4c3b 50%,
          #ff4c3b 55.77%,
          #232323 55.77%,
          #232323 75%,
          #f1f3f5 75%,
          #f1f3f5 80.77%,
          #232323 80.77%,
          #232323 100%
        );
      }
      .dark .theme-modal .modal-dialog .modal-content .modal-body .modal-bg {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark
        .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .age-content
        h4 {
        color: #e7eaec;
      }
      .dark
        .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .close
        span {
        color: #ffffff;
      }
      .dark
        .theme-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg
        .offer-content
        h2 {
        color: #f1f3f5;
      }

      .dark .theme-modal.demo-modal .modal-dialog .modal-content .modal-body {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }
      .dark
        .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body
        .demo-section
        .demo-effects
        > div
        .layout-container {
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .dark
        .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body
        .demo-section
        .demo-effects
        > div
        .demo-text
        h4 {
        color: #e7eaec;
      }
      .dark
        .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body
        .demo-section
        .demo-effects
        > div
        .demo-text
        .demo-btn
        .btn {
        border-color: #404040;
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #cbcbcb;
      }
      .dark
        .theme-modal.demo-modal
        .modal-dialog
        .modal-content
        .modal-body
        .demo-section
        .title-text
        h3 {
        color: #eaedef;
      }

      .dark
        .theme-modal.cart-modal
        .modal-dialog
        .modal-content
        .modal-body
        .modal-bg.addtocart
        #upsell_product
        .product-box
        .product-detail
        h6
        a {
        color: #cbcbcb;
      }

      .dark .theme-modal.exit-modal .media .media-body h5 {
        color: #dee2e6;
      }

      .dark .theme-modal.exit-modal .stop {
        -webkit-filter: invert(100);
        filter: invert(100);
      }

      .dark #quick-view .modal-dialog .modal-content .modal-body {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .addcart_btm_popup {
        background-color: #232323;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        border-color: #404040;
      }
      .dark .addcart_btm_popup .fixed_cart i {
        color: #cbcbcb;
      }

      .dark .review-page .comnt-sec li a {
        color: #cbcbcb;
      }

      .dark .sitemap_page ul li a {
        color: #cbcbcb;
      }
      .dark .sitemap_page ul li a:hover {
        color: #ff4c3b;
      }

      .dark .sitemap_page ul ul li a {
        color: #dee2e6;
      }

      .dark .effect-cls:before,
      .dark .effect-cls:after {
        -webkit-filter: invert(100);
        filter: invert(100);
      }

      .dark .game-product .product-box .cart-info a i {
        background-color: #2b2b2b;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #cbcbcb;
      }

      .dark .demo-right a {
        background-color: #000000;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
      }

      .dark .rtl-btn,
      .dark .dark-light {
        background-color: #000000;
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .dark .color-picker a.handle {
        background-color: #000000;
        -webkit-transition: all 0.3s ease;
        transition: all 0.3s ease;
        color: #cbcbcb;
      }

      .dark .setting-box .setting-title h4 {
        color: #333333;
      }

      .dark .vendor-profile .profile-left {
        background-color: #232323;
      }
      .dark .vendor-profile .profile-left .profile-image h3 {
        color: #e7eaec;
      }
      .dark .vendor-profile .profile-left .profile-detail {
        border-color: #404040;
      }
      .dark .vendor-profile .profile-left .vendor-contact {
        border-color: #404040;
      }
      .dark .vendor-profile .profile-left .vendor-contact h6 {
        color: #cfd4da;
      }

      .dark .vendor-profile .collection-product-wrapper .product-top-filter {
        background-color: #232323;
      }

      .dark .vendor-profile .product-pagination {
        background-color: #232323;
      }

      .dark .vendor-profile .page-link {
        background-color: #232323;
      }

      .dark .vendor-profile .profile-title h3 {
        color: #eaedef;
      }

      .dark .vendor-profile .profile-title h4 {
        color: #e7eaec;
      }

      .dark .vendor-profile .collection-filter-block {
        border-color: transparent;
        background-color: #232323;
      }

      .dark .become-vendor {
        background-color: #232323;
      }
      .dark .become-vendor .step-bg .step-box {
        background-color: #2b2b2b;
      }
      .dark .become-vendor .step-bg .step-box .steps {
        background-color: #232323;
      }

      .dark .dashboard-section .apexcharts-svg text,
      .dark .dashboard-section .apexcharts-svg .apexcharts-legend-text {
        fill: #eaedef;
        color: #eaedef !important;
      }

      .dark .dashboard-section .apexcharts-tooltip.apexcharts-theme-light {
        background: #2b2b2b;
        border-color: #404040;
        -webkit-box-shadow: none;
        box-shadow: none;
      }
      .dark
        .dashboard-section
        .apexcharts-tooltip.apexcharts-theme-light
        .apexcharts-tooltip-title {
        background: #232323;
        border-color: #404040;
      }

      .dark .dashboard-section .dashboard-sidebar {
        background-color: #232323;
      }

      .dark .dashboard-section .faq-content .card {
        background-color: #232323;
      }

      .dark .dashboard-section .counter-section .counter-box {
        background-color: #232323;
      }

      .dark .dashboard-section .dashboard-table h3 {
        color: #eaedef;
      }

      .dark
        .dashboard-section
        .dashboard-box
        .dashboard-detail
        ul
        li
        .details
        .left
        h6 {
        color: #9c9c9c;
      }

      .dark .faq-tab .nav-tabs .nav-item .nav-link {
        background-color: #232323;
        color: #cfd4da;
      }
      .dark .faq-tab .nav-tabs .nav-item .nav-link.active {
        background-color: #232323;
      }

      /*=====================
          27.Menu css start
      ==========================*/
      .sm,
      .sm ul,
      .sm li {
        display: block;
        list-style: none;
        margin: 0;
        padding: 0;
        line-height: normal;
        direction: ltr;
        text-align: left;
      }

      .sm {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
      }
      .sm ul {
        display: none;
      }
      .sm li {
        position: relative;
      }
      .sm > li > h1 {
        margin: 0;
        padding: 0;
      }
      .sm > li > h2 {
        margin: 0;
        padding: 0;
      }
      .sm > li > h3 {
        margin: 0;
        padding: 0;
      }
      .sm > li > h4 {
        margin: 0;
        padding: 0;
      }
      .sm > li > h5 {
        margin: 0;
        padding: 0;
      }
      .sm > li > h6 {
        margin: 0;
        padding: 0;
      }
      .sm a {
        position: relative;
        display: block;
      }
      .sm a.disabled {
        cursor: default;
      }
      .sm * {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
      }
      .sm *::before {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
      }
      .sm *::after {
        -webkit-box-sizing: inherit;
        box-sizing: inherit;
      }

      .sm::after {
        content: "";
        display: block;
        height: 0;
        font: 0/0 serif;
        clear: both;
        overflow: hidden;
      }

      .toggle-nav {
        position: relative;
        padding-top: 40px;
        padding-bottom: 40px;
        cursor: pointer;
      }
      .toggle-nav i {
        font-size: 24px;
        color: var(--theme-deafult);
        opacity: 0.6;
      }

      .mega-menu-banner:hover:before {
        display: none;
      }

      .new-tag {
        padding-left: 3px;
        color: var(--theme-deafult);
        text-transform: uppercase;
        font-size: 12px;
        font-weight: 700;
      }

      .up-text {
        position: relative;
      }
      .up-text span {
        position: absolute;
        top: -5px;
        right: -10px;
        color: var(--theme-deafult);
        font-size: 12px;
        font-weight: 700;
      }

      .pixelstrap.sm-vertical a .sub-arrow {
        margin-top: -22px;
        right: 7px;
      }

      .pixelstrap ul {
        border-radius: 0;
      }

      .pixelstrap.light-font-menu li > a {
        color: #393230;
      }

      .pixelstrap a,
      .pixelstrap a:hover,
      .pixelstrap a:active {
        padding-right: 45px;
        color: #222222;
        font-size: 16px;
        font-weight: 400;
        line-height: 23px;
        text-decoration: none;
        text-transform: uppercase;
        padding-top: 42px;
        padding-bottom: 42px;
        letter-spacing: 0.07em;
      }

      .pixelstrap a:hover {
        color: var(--theme-deafult);
      }

      .pixelstrap a.disabled {
        color: #ffd8d4;
      }

      .pixelstrap a .sub-arrow {
        position: absolute;
        top: 50%;
        margin-top: -17px;
        left: auto;
        right: 15px;
        width: 34px;
        height: 34px;
        overflow: hidden;
        font: bold 16px/34px monospace !important;
        text-align: center;
        text-shadow: none;
        border-radius: 4px;
      }

      .pixelstrap > li:last-child > a,
      .pixelstrap > li:last-child > *:not(ul) a,
      .pixelstrap > li:last-child > ul,
      .pixelstrap > li:last-child > ul > li:last-child > a,
      .pixelstrap > li:last-child > ul > li:last-child > *:not(ul) a,
      .pixelstrap > li:last-child > ul > li:last-child > ul,
      .pixelstrap > li:last-child > ul > li:last-child > ul > li:last-child > a,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > *:not(ul)
        a,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > a,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > *:not(ul)
        a,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > a,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > *:not(ul)
        a,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul {
        border-radius: 0 0 0 0;
      }

      .pixelstrap > li:last-child > a.highlighted,
      .pixelstrap > li:last-child > *:not(ul) a.highlighted,
      .pixelstrap > li:last-child > ul > li:last-child > a.highlighted,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > *:not(ul)
        a.highlighted,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > a.highlighted,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > *:not(ul)
        a.highlighted,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > a.highlighted,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > *:not(ul)
        a.highlighted,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > a.highlighted,
      .pixelstrap
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > ul
        > li:last-child
        > *:not(ul)
        a.highlighted {
        border-radius: 0;
      }

      .pixelstrap ul {
        background: #fff;
      }
      .pixelstrap ul ul {
        background: rgba(255, 85, 69, 0.04);
      }
      .pixelstrap ul a,
      .pixelstrap ul a:hover,
      .pixelstrap ul a:focus,
      .pixelstrap ul a:active {
        background: transparent;
        color: #ff3522;
        font-size: 14px;
        text-shadow: none;
      }
      .pixelstrap ul a.current {
        background: #ff4c3b;
        color: #fff;
      }
      .pixelstrap ul a.disabled {
        color: #b3b3b3;
      }
      .pixelstrap ul ul a,
      .pixelstrap ul ul a:hover,
      .pixelstrap ul ul a:focus,
      .pixelstrap ul ul a:active {
        border-left: 16px solid transparent;
      }
      .pixelstrap ul ul ul a,
      .pixelstrap ul ul ul a:hover,
      .pixelstrap ul ul ul a:focus,
      .pixelstrap ul ul ul a:active {
        border-left: 24px solid transparent;
      }
      .pixelstrap ul ul ul ul a,
      .pixelstrap ul ul ul ul a:hover,
      .pixelstrap ul ul ul ul a:focus,
      .pixelstrap ul ul ul ul a:active {
        border-left: 32px solid transparent;
      }
      .pixelstrap ul ul ul ul ul a,
      .pixelstrap ul ul ul ul ul a:hover,
      .pixelstrap ul ul ul ul ul a:focus,
      .pixelstrap ul ul ul ul ul a:active {
        border-left: 40px solid transparent;
      }
      .pixelstrap ul li {
        border-top: 1px solid rgba(0, 0, 0, 0.05);
      }
      .pixelstrap ul li:first-child {
        border-top: 0;
      }

      .pixelstrap .mega {
        position: unset !important;
      }
      .pixelstrap .mega .full-mega-menu.center-mega-menu {
        margin-left: 0 !important;
      }
      .pixelstrap .mega ul {
        margin-left: 0 !important;
        max-width: -webkit-max-content;
        max-width: -moz-max-content;
        max-width: max-content;
      }

      .pixelstrap .icon-trend {
        color: var(--theme-deafult);
      }

      .pixelstrap .full-mega-menu,
      .pixelstrap .clothing-menu {
        max-width: inherit !important;
        padding: 30px 0 15px;
      }
      .pixelstrap .full-mega-menu a,
      .pixelstrap .clothing-menu a {
        padding: 0;
        position: relative;
      }
      .pixelstrap .full-mega-menu a h6,
      .pixelstrap .clothing-menu a h6 {
        font-size: 14px;
        text-align: center;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
        font-weight: 400;
        text-transform: capitalize;
        color: #222222;
      }
      .pixelstrap .full-mega-menu a img,
      .pixelstrap .clothing-menu a img {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: 0 auto;
      }
      .pixelstrap .full-mega-menu a:hover,
      .pixelstrap .clothing-menu a:hover {
        padding: 0;
      }
      .pixelstrap .full-mega-menu a:hover:before,
      .pixelstrap .clothing-menu a:hover:before {
        width: 50px;
        height: 2px;
        -webkit-transition: 0.5s ease;
        transition: 0.5s ease;
      }
      .pixelstrap .full-mega-menu a:hover h6,
      .pixelstrap .clothing-menu a:hover h6 {
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }

      .pixelstrap .link-section h5 {
        font-weight: 700;
        text-transform: capitalize;
        font-size: 14px;
      }

      .pixelstrap .link-section ul {
        position: relative;
        display: block;
        padding: 0;
      }
      .pixelstrap .link-section ul li a {
        padding-top: 3px;
        padding-bottom: 3px;
        font-size: 14px;
        padding-left: 0;
      }

      .pixelstrap .full-mega-menu {
        width: 100% !important;
        padding: 30px !important;
        border-radius: 0;
      }
      .pixelstrap .full-mega-menu .mega-box .link-section ul li a:hover,
      .pixelstrap .full-mega-menu .mega-box .link-section ul li a:focus {
        padding-top: 3px;
        padding-bottom: 3px;
      }
      .pixelstrap .full-mega-menu .img-section img {
        margin-top: 15px;
      }

      .pixelstrap .clothing-menu {
        width: 815px !important;
        padding: 15px 30px 25px !important;
        background-color: #ffffff;
      }
      .pixelstrap .clothing-menu li img {
        padding: 20px 0 10px 0;
      }
      .pixelstrap .clothing-menu .link-section h5 {
        margin-top: 15px;
      }
      .pixelstrap .clothing-menu .link-section ul {
        background: none;
      }

      .pixelstrap .mega-menu ul {
        -webkit-box-shadow: none;
        box-shadow: none;
      }

      .pixelstrap li a {
        position: relative;
      }

      .pixelstrap li .lable-nav {
        position: absolute;
        background-color: var(--theme-deafult);
        padding: 2px 7px;
        color: #ffffff;
        top: 20px;
        text-transform: uppercase;
        font-size: 9px;
        left: 0;
        line-height: 1.3;
      }
      .pixelstrap li .lable-nav:before {
        position: absolute;
        content: "";
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid var(--theme-deafult);
        top: 15px;
        left: 5px;
      }
      .pixelstrap li .lable-nav.lable-red {
        background-color: #ff4c3b;
      }
      .pixelstrap li .lable-nav.lable-red:before {
        border-top: 5px solid #ff4c3b;
      }

      .sm-vertical {
        background-color: #ffffff;
      }

      .sidenav {
        height: 100vh;
        width: 300px;
        position: fixed;
        z-index: 9999;
        top: 0;
        left: -300px;
        background-color: #ffffff;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .sidenav .sidebar-back {
        padding: 20px;
        font-size: 18px;
        color: #222222;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 1px solid #efefef;
        margin-bottom: 20px;
        cursor: pointer;
      }
      .sidenav nav {
        background-color: #ffffff;
        z-index: 9;
        position: relative;
        height: 100vh;
        top: 0;
        overflow-y: auto;
      }
      .sidenav.open-side {
        left: 0;
        -webkit-transition: all 0.5s ease;
        transition: all 0.5s ease;
      }
      .sidenav.open-side .sidebar-overlay {
        opacity: 0.8;
        visibility: visible;
      }
      .sidenav .sidebar-overlay {
        visibility: hidden;
        opacity: 0;
        background-color: #212331;
        position: fixed;
        z-index: 6;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-transition: all 1s;
        transition: all 1s;
      }
      .sidenav .closebtn {
        position: absolute;
        top: 0;
        font-size: 36px;
        margin-left: 50px;
        margin-top: 50px;
        color: #938d8c;
      }
      .sidenav .pixelstrap li a {
        padding: 10px 50px 20px 40px;
      }
      .sidenav .pixelstrap li ul li a {
        padding: 5px 35px;
      }
      .sidenav .pixelstrap li ul li a:active,
      .sidenav .pixelstrap li ul li a:focus,
      .sidenav .pixelstrap li ul li a.highlighted {
        padding: 5px 35px;
      }
      .sidenav .pixelstrap li .clothing-menu li a {
        padding: 5px 0 !important;
      }
      .sidenav .pixelstrap li .clothing-menu li a:focus {
        font-size: 14px;
      }
      .sidenav .pixelstrap li .clothing-menu li a:hover {
        font-size: 14px;
        padding: 5px 0;
      }
      .sidenav .pixelstrap li .clothing-menu li a:focus,
      .sidenav .pixelstrap li .clothing-menu li a:hover {
        padding: 5px 0 !important;
      }

      .mega-box .link-section .demo ul li a {
        position: relative;
      }
      .mega-box .link-section .demo ul li a:hover,
      .mega-box .link-section .demo ul li a:focus {
        padding-top: 3px;
        padding-bottom: 3px;
      }

      .mega-box .link-section .demo .new {
        position: absolute;
        top: -8px;
        right: 0px;
        color: white;
        background-color: var(--theme-deafult);
        padding: 2px 7px;
        text-transform: uppercase;
        font-size: 9px;
        line-height: 1.3;
      }

      .mega-box .link-section .demo .title {
        border-bottom: 2px solid red !important;
      }

      .rtl .sidenav .pixelstrap li {
        text-align: right;
      }

      .rtl .link-section {
        float: right;
      }

      .rtl .pixelstrap li .lable-nav {
        left: unset;
      }

      .rtl .mega-box .link-section .demo ul li a span img {
        right: unset;
        left: -120px;
      }

      @media (min-width: 1200px) {
        .toggle-nav {
          display: none;
        }
        .sm-vertical li ul li a .sub-arrow {
          margin-top: -15px !important;
        }
        .mobile-back {
          display: none !important;
        }
        .pixelstrap ul {
          position: absolute;
          width: 16em !important;
        }
        .pixelstrap li {
          position: relative;
          float: left;
        }
        .pixelstrap.sm-rtl li {
          float: right;
        }
        .pixelstrap ul li,
        .pixelstrap.sm-rtl ul li,
        .pixelstrap.sm-vertical li {
          float: none;
        }
        .pixelstrap a {
          white-space: nowrap;
        }
        .pixelstrap ul a,
        .pixelstrap.sm-vertical a {
          white-space: normal;
        }
        .pixelstrap .sm-nowrap > li > a,
        .pixelstrap .sm-nowrap > li > :not(ul) a {
          white-space: nowrap;
        }
        .pixelstrap .sm-nowrap > li > a.highlighted,
        .pixelstrap .sm-nowrap > li > :not(ul) a.highlighted {
          white-space: nowrap;
        }
        .sm-horizontal .mega-menu li a {
          padding: 0;
        }
        .sm-horizontal .mega-menu li a:focus,
        .sm-horizontal .mega-menu li a:active {
          padding: 0;
        }
        .pixelstrap ul {
          -webkit-box-shadow: 0 0 1px 0 #ebebeb;
          box-shadow: 0 0 1px 0 #ebebeb;
        }
        .pixelstrap .mega {
          position: static !important;
        }
        .pixelstrap .mega ul {
          margin-left: 0 !important;
        }
        .pixelstrap .mega ul ul {
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .pixelstrap .full-mega-menu,
        .pixelstrap .clothing-menu {
          -webkit-box-shadow: 0 0 1px 0 #ebebeb;
          box-shadow: 0 0 1px 0 #ebebeb;
        }
        .pixelstrap .full-mega-menu a,
        .pixelstrap .clothing-menu a {
          padding: 0;
          position: relative;
        }
        .pixelstrap .full-mega-menu {
          position: absolute;
          background-image: url("/assets/images/mega.jpg");
          background-repeat: no-repeat;
          background-position: bottom;
          background-size: cover;
        }
        .pixelstrap .full-mega-menu.center-mega-menu {
          left: 50% !important;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
        }
        .pixelstrap .full-mega-menu.layout-3 {
          margin-left: -100px !important;
          -webkit-transform: unset !important;
          transform: unset !important;
        }
        .pixelstrap .full-mega-menu ul {
          background-color: transparent;
        }
        .pixelstrap .full-mega-menu .mega-box {
          max-width: 20%;
        }
        .pixelstrap .category-menu.center-menu {
          left: 50% !important;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
        }
        .pixelstrap a .sub-arrow::before {
          content: "\\f107";
          font-family: FontAwesome;
          position: absolute;
        }
        .pixelstrap ul {
          border: none;
          padding: 15px 0px 15px 0px;
          background: white;
        }
        .pixelstrap ul ul {
          background: white;
        }
        .pixelstrap ul a {
          position: relative;
        }
        .pixelstrap ul a:before {
          position: absolute;
          bottom: 0;
          content: "";
          height: 2px;
          width: 0;
          background-color: var(--theme-deafult);
          -webkit-transition: 0.5s ease;
          transition: 0.5s ease;
        }
        .pixelstrap ul a,
        .pixelstrap ul a:hover,
        .pixelstrap ul a:focus,
        .pixelstrap ul a:active,
        .pixelstrap ul a.highlighted {
          border: 0 !important;
          background: transparent;
          color: #222222;
          border-radius: 0 !important;
          font-size: 14px;
          font-weight: 400;
          text-transform: capitalize;
          padding: 5px 35px;
        }
        .pixelstrap ul a:hover:before,
        .pixelstrap ul a:hover:hover:before,
        .pixelstrap ul a:focus:hover:before,
        .pixelstrap ul a:active:hover:before,
        .pixelstrap ul a.highlighted:hover:before {
          width: 50px;
          height: 2px;
          -webkit-transition: 0.5s ease;
          transition: 0.5s ease;
        }
        .pixelstrap ul a .sub-arrow:before {
          content: "\\f105";
          font-family: FontAwesome;
          position: absolute;
        }
        .pixelstrap ul li {
          border: 0;
        }
        .pixelstrap .scroll-up,
        .pixelstrap .scroll-down {
          position: absolute;
          display: none;
          visibility: hidden;
          overflow: hidden;
          background: #fff;
          height: 20px;
        }
        .pixelstrap .scroll-up-arrow,
        .pixelstrap .scroll-down-arrow {
          position: absolute;
          top: -2px;
          left: 50%;
          margin-left: -8px;
          width: 0;
          height: 0;
          overflow: hidden;
          border-width: 8px;
          border-style: dashed dashed solid dashed;
          border-color: transparent transparent #ff3522 transparent;
        }
        .pixelstrap .scroll-down-arrow {
          top: 6px;
          border-style: solid dashed dashed dashed;
          border-color: #ff3522 transparent transparent transparent;
        }
        .pixelstrap.sm-rtl.sm-vertical a .sub-arrow:before {
          content: "\\f105";
          font-family: FontAwesome;
          position: absolute;
        }
        .pixelstrap.sm-rtl > li:first-child {
          border-left: 1px solid #ff3522;
        }
        .pixelstrap.sm-rtl > li:last-child {
          border-left: 0;
        }
        .pixelstrap.sm-rtl ul a .sub-arrow {
          right: auto;
          left: 10px;
        }
        .pixelstrap.sm-vertical a {
          padding: 9px 23px;
        }
        .pixelstrap.sm-vertical a .sub-arrow:before {
          content: "\\f105";
          font-family: FontAwesome;
          position: absolute;
        }
        .pixelstrap.sm-vertical > li {
          border-left: 0 !important;
        }
        .main-nav-center > nav {
          text-align: center;
        }
        .main-nav-center .sm {
          display: inline-block;
          vertical-align: middle;
        }
        .main-nav-center .sm > li .lable-nav {
          top: 3px;
        }
        .main-nav-center .sm > li > a {
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .main-nav-center .sm > li > a > span.sub-arrow {
          display: ruby-text-container;
        }
        .layout3-menu .pixelstrap a {
          text-transform: capitalize;
          padding-right: 34px;
          letter-spacing: 0.04em;
        }
        .layout3-menu .pixelstrap .sub-arrow {
          right: 12px;
        }
        .rtl .pixelstrap .category-menu {
          width: 698px !important;
        }
        .rtl .pixelstrap .category-menu.center-menu {
          left: 0 !important;
          -webkit-transform: unset;
          transform: unset;
        }
        .rtl .pixelstrap .full-mega-menu {
          right: auto !important;
        }
        .rtl .pixelstrap ul a:before {
          right: 35px;
        }
        .rtl .pixelstrap ul ul {
          right: 100%;
          left: unset !important;
        }
        .rtl .mega .full-mega-menu {
          float: left !important;
          right: auto !important;
        }
        .rtl .mega .full-mega-menu.center-mega-menu {
          margin-right: 0 !important;
          margin-left: 0 !important;
          left: unset !important;
          right: 50% !important;
        }
        .rtl .layout3-menu .light-font-menu li > a,
        .rtl .layout3-menu .light-font-menu li > a:hover,
        .rtl .layout3-menu .light-font-menu li > a:active {
          padding-right: 0;
          padding-left: 28px;
        }
        .rtl .layout3-menu .light-font-menu .sub-arrow {
          left: -5px;
          right: auto;
        }
        .rtl .sm-horizontal .mega ul {
          float: right;
          right: 0;
        }
        .rtl .sm-horizontal .mega ul li {
          text-align: right;
        }
        .rtl .sm-horizontal ul li {
          text-align: right;
        }
        .rtl .sm-horizontal ul li a .sub-arrow {
          left: 15px;
          right: auto;
        }
        .rtl .pixelstrap .full-mega-menu.layout-3 {
          margin-right: -100px !important;
        }
        .rtl .light-font-menu .mega ul {
          float: right;
          left: unset !important;
          right: 0 !important;
        }
        .rtl .sidenav .pixelstrap li ul li a:hover,
        .rtl .sidenav .pixelstrap li ul li a:focus {
          padding: 5px 35px;
        }
        .rtl .sidenav .pixelstrap li ul li a:before {
          right: 35px;
        }
        .rtl .sidenav .pixelstrap li a .sub-arrow {
          right: 7px;
          left: unset;
        }
        .rtl .sidenav .pixelstrap .mega-menu li ul li a:before {
          right: 0;
        }
        .rtl .sidenav .sidebar-back i {
          float: left;
        }
        .rtl header.header-5 .top-header .header-dropdown > li:last-child {
          padding: 15px 25px;
          padding-left: 0;
        }
      }

      @media (max-width: 1440px) {
        .pixelstrap .category-menu {
          width: 698px !important;
        }
        .pixelstrap .full-mega-menu.layout-3 {
          margin-left: 0 !important;
        }
        .rtl .pixelstrap .mega .full-mega-menu {
          margin-left: 0 !important;
          margin-right: 162px !important;
        }
        .rtl .pixelstrap .mega .full-mega-menu.layout-3 {
          margin-right: 0 !important;
        }
      }

      @media (max-width: 1367px) {
        .pixelstrap .full-mega-menu.layout-3 {
          width: 1079px !important;
        }
        .pixelstrap a {
          font-size: 14px;
        }
        .pixelstrap a:hover,
        .pixelstrap a:active {
          font-size: 14px;
        }
      }

      @media (max-width: 1199px) {
        .mega-box .link-section .demo ul li a span img {
          top: 30px;
          right: -60px;
        }
        .sm-horizontal {
          position: fixed;
          background-color: #fff;
          width: 300px;
          border-radius: 0;
          border: 1px solid #eee;
          top: 0;
          height: 100vh;
          right: -300px;
          z-index: 99;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          overflow: scroll;
        }
        .sm-horizontal .mobile-back {
          padding: 20px;
          font-size: 18px;
          color: #222222;
          font-weight: 700;
          text-transform: uppercase;
          border-bottom: 1px solid #efefef;
          cursor: pointer;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: end;
          -ms-flex-pack: end;
          justify-content: flex-end;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .mega-box.col {
          -ms-flex-preferred-size: unset;
          flex-basis: unset;
        }
        .pixelstrap .feature-menu.product-menu {
          width: 100% !important;
        }
        .pixelstrap .mega {
          position: unset !important;
        }
        .pixelstrap .mega .full-mega-menu {
          margin-left: 0 !important;
        }
        .pixelstrap .mega ul {
          margin-left: 0 !important;
        }
        .pixelstrap .full-mega-menu,
        .pixelstrap .clothing-menu {
          width: 100% !important;
          padding: 0 30px !important;
        }
        .pixelstrap a.highlighted .sub-arrow:before {
          content: "-";
        }
        .pixelstrap a .sub-arrow {
          right: 0;
        }
        .pixelstrap a .sub-arrow:before {
          content: "+";
        }
        .pixelstrap > li > a {
          font-weight: 700;
        }
        .pixelstrap > li > a:hover,
        .pixelstrap > li > a:focus,
        .pixelstrap > li > a:active {
          font-weight: 700;
        }
        .pixelstrap .link-section .menu-title h5 {
          cursor: pointer;
          font-weight: 500;
          text-transform: uppercase;
          margin-bottom: 0;
        }
        .pixelstrap .link-section .menu-title.active .according-menu {
          font: bold 16px/34px monospace !important;
        }
        .pixelstrap .link-section .menu-title.active .according-menu:before {
          content: "-";
          position: absolute;
          right: -18px;
        }
        .pixelstrap .link-section .menu-title .according-menu {
          font: bold 16px/34px monospace !important;
        }
        .pixelstrap .link-section .menu-title .according-menu:before {
          content: "+";
          position: absolute;
          right: -18px;
        }
        .pixelstrap .link-section .menu-content a {
          text-transform: capitalize;
        }
        .pixelstrap .link-section ul {
          background-color: unset;
        }
        .pixelstrap .link-section h5 {
          font-weight: 700;
        }
        .pixelstrap .full-mega-menu .mega-box {
          border-right: none;
          margin-bottom: 0;
        }
        .pixelstrap .category-menu a img {
          width: 30% !important;
        }
        .pixelstrap .clothing-menu {
          background: none;
        }
        .pixelstrap li .lable-nav {
          left: 15px;
          top: -8px;
        }
        .pixelstrap li a {
          padding: 10px 15px;
          font-size: 16px;
        }
        .pixelstrap li a:hover {
          font-size: 16px;
          padding: 10px 15px;
        }
        .pixelstrap li ul li a {
          padding: 5px 35px;
          font-size: 14px;
          color: #222222;
          font-weight: 400;
        }
        .pixelstrap li ul li a:hover {
          color: var(--theme-deafult);
          font-size: 14px;
          padding: 5px 35px;
        }
        .pixelstrap .category-menu a:hover img {
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        .pixelstrap.sm-vertical a .sub-arrow {
          margin-top: -18px;
        }
        .pixelstrap .mega ul {
          max-width: 100%;
        }
        .pixelstrap ul li {
          border-top: none;
        }
        .sidenav {
          overflow-y: auto;
        }
        .sidenav .pixelstrap li ul li a {
          padding: 5px 45px;
        }
        .sidenav .pixelstrap li ul li a:hover,
        .sidenav .pixelstrap li ul li a.highlighted {
          padding: 5px 45px;
        }
        .sidenav .pixelstrap li a {
          padding: 10px 25px;
        }
        .sidenav .pixelstrap li a:hover {
          padding: 10px 25px;
        }
        .main-menu.border-section {
          border: none;
        }
        .main-menu .menu-left .main-menu-right .toggle-nav {
          position: absolute;
          z-index: 2;
          right: 145px;
          top: 6px;
        }
        .main-menu .menu-left .main-menu-right .toggle-nav .sidebar-name {
          font-size: 18px;
          padding-left: 5px;
          text-transform: uppercase;
        }
        .main-nav-center .toggle-nav {
          position: absolute;
          z-index: 99;
          right: 175px;
          top: -105px;
        }
        .layout3-menu .main-menu .menu-left .main-menu-right .toggle-nav {
          right: unset;
          top: -1px;
        }
        .rtl .mega-box .link-section .demo ul li a span img {
          left: -70px;
        }
        .rtl .sm li {
          text-align: right;
        }
        .rtl .pixelstrap a .sub-arrow {
          right: unset;
          left: 0;
        }
        .rtl .pixelstrap li .lable-nav {
          left: unset;
          right: 15px;
        }
        .rtl .pixelstrap li .lable-nav:before {
          left: unset;
          right: 5px;
        }
      }

      @media (max-width: 991px) {
        .top-header .header-contact {
          display: none;
        }
      }

      @media (min-width: 578px) {
        .main-menu .menu-right .icon-nav .mobile-search i,
        .main-menu .menu-right .icon-nav .mobile-cart i,
        .main-menu .menu-right .icon-nav .mobile-setting i {
          display: none;
        }
        .main-menu .menu-right .icon-nav .mobile-search .close-circle i,
        .main-menu .menu-right .icon-nav .mobile-cart .close-circle i,
        .main-menu .menu-right .icon-nav .mobile-setting .close-circle i {
          display: block;
        }
        .main-menu
          .menu-right
          .icon-nav
          .mobile-search
          .show-div
          .form-inline
          button
          i {
          display: inline-block;
        }
      }

      @media (max-width: 577px) {
        .top-header {
          height: 0;
        }
        .main-nav-center .toggle-nav {
          right: 15px;
          top: -85px;
        }
        .mobile-fix-option {
          position: fixed;
          bottom: 0;
          left: 0;
          height: 60px;
          background-color: #333333;
          width: 100vw;
          z-index: 9;
          -webkit-box-shadow: 0 2px 5px 0 #a8a8a8;
          box-shadow: 0 2px 5px 0 #a8a8a8;
        }
        .header-5 .top-header .header-dropdown .mobile-wishlist img,
        .header-5 .top-header .header-dropdown .mobile-account img {
          -webkit-filter: brightness(5);
          filter: brightness(5);
        }
        .header-5 .main-menu .brand-logo {
          margin: 0;
          left: 0;
          -webkit-transform: unset;
          transform: unset;
        }
        .top-header .header-dropdown .mobile-account,
        .top-header .header-dropdown .mobile-wishlist {
          position: fixed;
          bottom: 20px;
          right: 32%;
          font-size: 0;
          padding: 0;
          z-index: 9;
        }
        .top-header .header-dropdown .mobile-account i,
        .top-header .header-dropdown .mobile-wishlist i {
          font-size: 22px;
          font-family: themify;
          color: #999999;
        }
        .top-header .header-dropdown .mobile-account i:before,
        .top-header .header-dropdown .mobile-wishlist i:before {
          content: "\\e602";
        }
        .top-header .header-dropdown .mobile-account .onhover-show-div,
        .top-header .header-dropdown .mobile-wishlist .onhover-show-div {
          top: unset;
          bottom: 42px;
          right: 0;
        }
        .top-header .header-dropdown .mobile-account:hover i,
        .top-header .header-dropdown .mobile-wishlist:hover i {
          color: #999999;
        }
        .top-header .header-dropdown .mobile-wishlist {
          right: 64%;
        }
        .top-header .header-dropdown .mobile-wishlist i {
          font-family: themify;
          color: #999999 !important;
        }
        .top-header .header-dropdown .mobile-wishlist i:before {
          content: "\\e634";
        }
        .main-menu .menu-left.category-nav-right .navbar {
          padding-left: 0 !important;
        }
        .main-menu .menu-left .navbar {
          padding: 30px 45px 30px 0 !important;
        }
        .main-menu .menu-right .icon-nav .mobile-setting,
        .main-menu .menu-right .icon-nav .mobile-cart,
        .main-menu .menu-right .icon-nav .mobile-search {
          position: fixed;
          bottom: 20px;
          right: 16%;
          font-size: 0;
          padding: 0;
        }
        .main-menu .menu-right .icon-nav .mobile-setting .show-div,
        .main-menu .menu-right .icon-nav .mobile-cart .show-div,
        .main-menu .menu-right .icon-nav .mobile-search .show-div {
          top: -58px;
          left: 0;
        }
        .main-menu
          .menu-right
          .icon-nav
          .mobile-setting
          .show-div.shopping-cart,
        .main-menu .menu-right .icon-nav .mobile-cart .show-div.shopping-cart,
        .main-menu
          .menu-right
          .icon-nav
          .mobile-search
          .show-div.shopping-cart {
          top: unset;
          bottom: 42px;
          left: -118px !important;
        }
        .main-menu .menu-right .icon-nav .mobile-setting i {
          display: inline-block;
          font-size: 22px;
          color: #999999;
        }
        .main-menu .menu-right .icon-nav .mobile-setting > div img {
          display: none;
        }
        .main-menu .menu-right .icon-nav .mobile-setting .setting {
          top: unset;
          bottom: 42px;
          left: unset !important;
        }
        .main-menu .menu-right .icon-nav .mobile-cart {
          right: 48%;
        }
        .main-menu .menu-right .icon-nav .mobile-cart .close-circle i {
          font-size: 14px;
        }
        .main-menu .menu-right .icon-nav .mobile-cart i {
          display: inline-block;
          font-size: 22px;
          color: #999999;
        }
        .main-menu .menu-right .icon-nav .mobile-cart > div img {
          display: none;
        }
        .main-menu .menu-right .icon-nav .mobile-search {
          right: 80%;
          z-index: 1;
        }
        .main-menu .menu-right .icon-nav .mobile-search i {
          display: inline-block;
          font-size: 22px;
          color: #999999;
        }
        .main-menu .menu-right .icon-nav .mobile-search img {
          display: none;
        }
        .main-menu .menu-right .icon-nav .mobile-search .show-div .form-group {
          margin-bottom: 0;
        }
        .main-menu
          .menu-right
          .icon-nav
          .mobile-search
          .show-div
          .form-inline
          button
          i {
          font-size: 14px;
        }
        .brand-logo {
          position: absolute;
          left: 50%;
          margin-right: -50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
          padding-top: 30px !important;
          padding-bottom: 30px !important;
        }
        .toggle-nav {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .rtl .main-nav-center .toggle-nav {
          right: unset;
          left: 15px;
        }
        .rtl .main-menu .menu-right .icon-nav .mobile-setting,
        .rtl .main-menu .menu-right .icon-nav .mobile-cart,
        .rtl .main-menu .menu-right .icon-nav .mobile-search {
          right: unset;
          left: 16%;
        }
        .rtl .main-menu .menu-right .icon-nav .mobile-setting .show-div,
        .rtl .main-menu .menu-right .icon-nav .mobile-cart .show-div,
        .rtl .main-menu .menu-right .icon-nav .mobile-search .show-div {
          left: unset;
          right: 0;
        }
        .rtl
          .main-menu
          .menu-right
          .icon-nav
          .mobile-setting
          .show-div.shopping-cart,
        .rtl
          .main-menu
          .menu-right
          .icon-nav
          .mobile-cart
          .show-div.shopping-cart,
        .rtl
          .main-menu
          .menu-right
          .icon-nav
          .mobile-search
          .show-div.shopping-cart {
          left: unset !important;
          right: -118px !important;
        }
        .rtl .main-menu .menu-right .icon-nav .mobile-setting .setting {
          left: unset !important;
        }
        .rtl .main-menu .menu-right .icon-nav .mobile-cart {
          right: unset;
          left: 48%;
        }
        .rtl .main-menu .menu-right .icon-nav .mobile-search {
          right: unset;
          left: 80%;
        }
        .rtl .main-menu .menu-left .navbar {
          padding: 30px 0 30px 25px !important;
        }
        .rtl .top-header .header-dropdown .mobile-account,
        .rtl .top-header .header-dropdown .mobile-wishlist {
          right: unset;
          left: 32%;
        }
        .rtl .top-header .header-dropdown .mobile-account .onhover-show-div,
        .rtl .top-header .header-dropdown .mobile-wishlist .onhover-show-div {
          right: 0;
        }
        .rtl .top-header .header-dropdown .mobile-wishlist {
          right: unset;
          left: 64%;
        }
      }

      @media (max-width: 480px) {
        .brand-logo img {
          height: 25px;
        }
      }

      /*=====================
          29.Responsive CSS start
      ==========================*/
      @media (min-width: 1630px) {
        body.christmas .container {
          max-width: 1600px;
        }
      }

      @media (max-width: 1630px) {
        body.christmas .home-slider .slider-details {
          width: 400px;
          height: 400px;
        }
      }

      @media (min-width: 1430px) {
        .container {
          max-width: 1400px;
        }
      }

      @media (max-width: 1430px) {
        header.left-header .top-header {
          padding-left: 0;
        }
        header.left-header .top-header .header-contact {
          display: none;
        }
        header.left-header .sidenav {
          left: -300px;
        }
        header.left-header .sidenav.open-side {
          left: 0;
        }
        header.left-header .sidenav .sidebar-back {
          display: block;
          color: black;
          border-bottom: 1px dashed #dddddd;
        }
        header.left-header .sidenav .brand-logo {
          display: none;
        }
        header.left-header .sidenav .left-sidebar_center {
          padding: 0 0 25px 25px;
        }
        header.left-header .main-menu .menu-left .navbar {
          display: block;
        }
        header.left-header .main-menu .menu-left .mobile-logo {
          display: block;
          border: none;
        }
        header.left-header .search-overlay {
          padding-left: 0;
        }
        .blog-section .review-box .review-content p {
          margin-bottom: 35px;
        }
        .left-sidebar_space {
          padding-left: 0;
        }
        .banner-slider .height-banner {
          height: unset;
        }
        .box-product .theme-card .offer-slider .media .media-body .rating i {
          padding-right: 0;
        }
        .box-product
          .full-box
          .theme-card
          .offer-slider
          .product-box2
          .media
          .media-body
          h4 {
          font-size: 16px;
        }
        .pet-parallax .pet-decor {
          left: 60px;
          bottom: -125px;
        }
        .pet-parallax .pet-decor img {
          width: 240px;
        }
        .tools_slider .home-slider .slider-contain {
          margin-left: 80px;
        }
        .tools_slider .home-slider .home .tools-parts img,
        .tools_slider .home-slider .home .tools-parts1 img {
          width: 250px;
        }
        .tools_slider .home-slider .home .tools-parts {
          right: 0;
        }
        .tools_slider .home-slider .home .tools-parts1 {
          right: 10%;
        }
        .tools_slider .home-slider .home #tools-move2 {
          right: 7%;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .search-count {
          width: 100%;
          border-left: 1px solid #dddddd;
          border-bottom: 1px solid #dddddd;
          text-align: center;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-view {
          width: 20%;
          padding-right: 0 !important;
          border-left: 1px solid #dddddd;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-grid-view {
          padding: 20px !important;
          padding-left: 0 !important;
          width: 20%;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-grid-view
          ul
          li:last-child {
          display: none;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter {
          border-right: 1px solid #dddddd;
          width: 30%;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view {
          width: 30%;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .collection-view {
          width: 10%;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view {
          width: 25%;
        }
        .cart-section .cart-buttons > div:last-child {
          padding-right: 38px;
        }
        .cart-section tbody tr td {
          min-width: 175px;
        }
        .cart-section tbody tr td .qty-box .input-group .form-control {
          width: 75px;
        }
        .cart-section tfoot tr td {
          padding-right: 41px;
        }
        .product-right .product-icon .product-social li {
          padding-right: 10px;
        }
        .product-form-box .timer {
          padding-left: 17px;
        }
        .product-form-box .timer span {
          width: 55px;
        }
        .rtl .cart-section .cart-buttons > div:last-child,
        .rtl .wishlist-section .cart-buttons > div:last-child {
          padding-left: 41px;
        }
        .rtl
          .collection-product-wrapper
          .product-filter-content
          .collection-view {
          border-left: none;
          border-right: 1px solid #dddddd;
        }
        .rtl
          .collection-product-wrapper
          .product-filter-content
          .product-page-filter {
          border-left: 1px solid #dddddd;
          border-right: none;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .search-count {
          border-right: 1px solid #dddddd;
          padding-right: 20px;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .search-count
          h5 {
          text-align: center;
        }
        .rtl .product-right .product-icon .product-social li {
          padding-left: 10px;
        }
        .rtl header.left-header .sidenav {
          right: -300px;
          left: unset;
        }
        .rtl header.left-header .sidenav.open-side {
          right: 0;
          left: unset;
        }
        .rtl header.left-header .top-header {
          padding-right: 0;
        }
        .rtl .left-sidebar_space {
          padding-right: 0;
          padding-left: 0;
        }
        .rtl .loader_skeleton .left-sidebar_space {
          padding-right: 0;
        }
        .dark
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-view {
          border-color: #404040;
        }
        .dark
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter {
          border-color: #404040;
        }
      }

      @media (max-width: 1430px) and (min-width: 1368px) {
        .banner-timer .timer {
          margin-top: 45px;
        }
      }

      @media (max-width: 1430px) and (min-width: 1200px) {
        .layout3-menu {
          max-width: 100%;
        }
        .layout3-menu .main-menu .menu-left .navbar {
          padding: 40px 10px 40px 0;
        }
        .layout3-menu .pixelstrap > a {
          padding-right: 38px;
        }
        .portfolio-section.metro-section .product-box .cart-wrap a i {
          padding: 5px;
        }
        .portfolio-section.metro-section .product-box .cart-wrap i {
          font-size: 14px;
        }
        .portfolio-section.metro-section .product-box .cart-wrap button i {
          padding: 5px;
        }
        .rtl .layout3-menu .main-menu .menu-left .navbar {
          padding: 40px 0 40px 35px;
        }
      }

      @media (max-width: 1367px) {
        h2 {
          font-size: 32px;
        }
        .title1 .title-inner1 {
          padding-bottom: 10px;
        }
        .title1 .title-inner1:after {
          height: 2px;
        }
        .title3 .line {
          height: 3px;
        }
        .title3 .line:after,
        .title3 .line:before {
          height: 3px;
        }
        .title3 .title-inner3 {
          margin-bottom: 10px;
        }
        .title4 .title-inner4 {
          padding-bottom: 15px;
        }
        .title1.title5 hr[role="tournament6"] {
          margin: 10px auto 30px auto;
        }
        hr.style1 {
          height: 1px;
          margin-top: 7px;
          margin-bottom: 7px;
        }
        .home-slider .slider-details {
          right: 14%;
        }
        .home-slider:hover .slick-prev,
        .home-slider:hover .slick-next {
          -webkit-transform: scale(1.8);
          transform: scale(1.8);
        }
        .product-box .product-detail .rating i,
        .product-box .product-info .rating i,
        .product-wrap .product-detail .rating i,
        .product-wrap .product-info .rating i {
          padding-right: 0;
        }
        .blog-details h4 {
          margin-top: 20px;
        }
        .blog-details p {
          font-size: 16px;
        }
        .service-block h4 {
          font-size: 16px;
          margin-bottom: 5px;
        }
        .banner-timer {
          background-position: right;
        }
        .banner-timer .banner-text h2 {
          font-size: 28px;
        }
        .collection-product-wrapper .product-wrapper-grid .product-five {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 33.33%;
          flex: 0 0 33.33%;
          max-width: 33.33%;
          position: relative;
          width: 100%;
          min-height: 1px;
          padding-right: 15px;
          padding-left: 15px;
        }
        .subscribe-form .form-control {
          width: 215px;
        }
        .category-bg .image-block.even:after {
          bottom: 91%;
        }
        .category-bg .contain-block h2 {
          font-size: 30px;
        }
        .category-bg .contain-block.even:after {
          top: 91%;
        }
        .category-bg .contain-block .category-btn {
          margin-bottom: 20px;
          margin-top: 20px;
        }
        .category-bg .contain-block:after {
          bottom: 91%;
        }
        .full-banner .banner-contain h2 {
          font-size: 90px;
        }
        .full-banner .banner-contain h3 {
          font-size: 55px;
        }
        .full-banner .banner-contain h4 {
          font-size: 24px;
          padding-top: 8px;
        }
        .full-banner .banner-contain .color {
          padding-top: 0;
        }
        .collection-banner .contain-banner.banner-3 {
          padding-left: 45px;
          padding-right: 45px;
        }
        .collection-banner .contain-banner.banner-3 h2 {
          font-size: 30px;
        }
        .collection-banner .contain-banner.banner-4 {
          padding-left: 45px;
          padding-right: 45px;
        }
        .collection-banner .contain-banner.banner-4 h2 {
          font-size: 28px;
        }
        .collection-banner .contain-banner h2 {
          font-size: 55px;
          letter-spacing: 0.01em;
        }
        .collection-banner .contain-banner h4 {
          letter-spacing: 0.01em;
        }
        .collection-banner.christmas-banner .contain-banner > div {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 25px 40px;
        }
        .footer-theme2 .contact-details li {
          padding: 0 40px;
        }
        .footer-theme2 .footer-mobile-title {
          display: none !important;
        }
        .footer-theme .sub-title h4 {
          font-size: 16px;
        }
        .footer-theme .sub-title .contact-list li {
          line-height: 20px;
        }
        .footer-theme .sub-title .contact-list i {
          top: 17px;
        }
        .theme-card .offer-slider .media .media-body h4 {
          margin-top: 10px;
        }
        .theme-card .offer-slider .media .media-body a h6 {
          margin-right: 50px;
        }
        .full-box
          .theme-card
          .offer-slider
          .product-box2
          .media
          .media-body
          a
          h6 {
          margin-right: 0;
        }
        .theme-tab .tab-content .product-tab .tab-box .product-box2 img {
          height: 160px;
        }
        .theme-tab
          .tab-content
          .product-tab
          .tab-box
          .product-box2
          .media
          .media-body
          .color-variant
          li {
          margin-top: 15px;
        }
        .blog-page .blog-media .blog-right h4 {
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .blog-page .blog-media .blog-right h6 {
          margin-bottom: 5px;
        }
        .blog-page .blog-media .blog-right ul {
          margin-bottom: 10px;
        }
        .blog-page .blog-media .blog-right p {
          line-height: 1.4;
        }
        .pro_sticky_info {
          padding: 10px;
        }
        .is_stuck {
          margin-top: 30px;
        }
      }

      @media (max-width: 1199px) {
        header.header-gym .pixelstrap > li > a {
          color: black !important;
          padding: 10px 15px;
        }
        section,
        .section-t-space {
          padding-top: 60px;
        }
        .section-b-space {
          padding-bottom: 60px;
        }
        .portfolio-padding {
          padding-bottom: 30px;
        }
        .partition1 {
          margin-bottom: -25px;
        }
        .partition1 > div {
          margin-bottom: 25px;
        }
        .title1 h4 {
          padding-bottom: 8px;
        }
        .title1 .title-inner1 {
          padding-bottom: 12px;
          margin-bottom: 25px;
        }
        .title1.title5 hr[role="tournament6"] {
          margin: 12px auto 25px auto;
        }
        .title2 h4 {
          padding-bottom: 8px;
        }
        .title2 .title-inner2 {
          margin-bottom: 25px;
        }
        .title3 h4 {
          padding-bottom: 8px;
        }
        .title3 .title-inner3 {
          margin-bottom: 10px;
        }
        .title3 .line {
          margin-bottom: 25px;
        }
        .title4 .title-inner4 {
          padding-bottom: 15px;
        }
        .title4 .line {
          margin-bottom: 25px;
        }
        .title-borderless {
          margin-bottom: 25px;
        }
        footer.footer-black .below-section {
          padding-top: 105px;
        }
        header.header-6 .mobile-search {
          display: inline-block;
        }
        header.header-7 .main-nav-center .toggle-nav {
          top: -94px;
        }
        header.header-7 .pixelstrap.sm-horizontal > li > a {
          color: black;
        }
        header.header-7 .pixelstrap.sm-horizontal > li > a:hover,
        header.header-7 .pixelstrap.sm-horizontal > li > a:active {
          color: var(--theme-deafult);
        }
        header.header-tools .toggle-nav {
          padding-top: 25px;
          padding-bottom: 25px;
        }
        header.header-tools .pixelstrap > li > a {
          padding: 10px 15px !important;
        }
        header.header-tools .pixelstrap > li > a:hover,
        header.header-tools .pixelstrap > li > a:active,
        header.header-tools .pixelstrap > li > a:focus,
        header.header-tools .pixelstrap > li > a.highlighted {
          padding: 10px 15px;
        }
        header.header-tools .pixelstrap li .lable-nav {
          top: 5px;
        }
        header.video-header #main-nav {
          position: absolute;
          right: 0;
          top: 3px;
        }
        header.video-header .main-menu .menu-right .icon-nav {
          padding-right: 40px;
        }
        header.header-christmas .pixelstrap > li > a {
          color: black !important;
          padding: 10px 15px;
        }
        .tools-parallax-product.full-banner {
          padding-top: 90px;
          padding-bottom: 90px;
        }
        .tools-parallax-product .tools-description h3 {
          font-size: 17px;
        }
        .form_search {
          display: none;
        }
        .tab-left .theme-tab {
          display: block;
        }
        .tab-left .theme-tab .left-side {
          width: 100%;
        }
        .tab-left .theme-tab .left-side li {
          width: unset;
          border-bottom: none;
          padding: 0 5px;
        }
        .tab-left .theme-tab .left-side li:first-child {
          border-top: none;
        }
        .tab-left .theme-tab .left-side .tab-title {
          margin-right: 0;
          text-align: center;
        }
        .tab-left .theme-tab .tab-content-cls {
          width: 100%;
        }
        .absolute_banner .collection-banner .absolute-contain h3 {
          font-size: 22px;
          margin-bottom: 0;
        }
        .absolute_banner .collection-banner .absolute-contain h4 {
          font-size: 16px;
        }
        .box-product .full-box .row > div:nth-last-child(-n + 2) {
          margin-top: 30px;
        }
        .header-gym .toggle-nav {
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .gym-product .part-cls > div:nth-last-child(-n + 2) .product-box {
          margin-top: 30px;
        }
        .gym-product .partition-cls > div:nth-child(-n + 4) {
          margin-bottom: 0;
        }
        .gym-product .partition-cls > div .product-box {
          margin-top: 30px;
        }
        .gym-product .partition-cls > div:nth-child(-n + 2) .product-box {
          margin-top: 0;
        }
        .pet-parallax .pet-decor {
          left: 45px;
          bottom: -105px;
        }
        .pet-parallax .pet-decor img {
          width: 200px;
        }
        .about-text p {
          margin-bottom: 25px;
        }
        .banner-timer .timer {
          padding-top: 12px;
          padding-bottom: 12px;
          padding-left: 30px;
          bottom: 8px;
          margin-top: 38px;
        }
        .footer-social li {
          padding-right: 38px;
        }
        .footer-theme2 p {
          line-height: 25px;
        }
        .footer-theme2 .subscribe-block {
          padding: 10px 70px;
        }
        .footer-theme2 .footer-mobile-title {
          display: none !important;
        }
        .footer-theme2 .contact-details li {
          line-height: 25px;
          padding: 0 10px;
        }
        .footer-theme2 .footer-link li {
          padding-right: 25px;
        }
        .footer-theme2.section-light .footer-block .subscribe-white {
          padding: 50px;
        }
        .social-white li {
          padding-left: 12px;
          padding-right: 12px;
        }
        .service-block svg,
        .service-block1 svg {
          width: 50px;
          height: 50px;
        }
        .service-block1 svg {
          margin-bottom: 15px;
        }
        .category-border div .category-banner .category-box h2 {
          padding: 13px 27px;
        }
        .category-bg .image-block.even:after {
          bottom: 87%;
        }
        .category-bg .contain-block.even:after {
          top: 87%;
        }
        .category-bg .contain-block:after {
          bottom: 87%;
        }
        .no-slider .product-box {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 33.33%;
          flex: 0 0 33.33%;
          max-width: calc(33.33% - 30px);
          margin: 0 15px 30px;
        }
        .no-slider.five-product .product-box {
          width: 100%;
          -webkit-box-flex: 0;
          -ms-flex: 0 0 33.33%;
          flex: 0 0 33.33%;
          max-width: calc(33.33% - 30px);
          margin: 0 15px 30px;
        }
        .no-slider.five-product .product-box:nth-last-child(-n + 5) {
          margin: 0 15px 30px;
        }
        .no-slider.five-product .product-box:nth-last-child(-n + 3) {
          margin: 0 15px 0;
        }
        .absolute-product .no-slider .product-box:nth-last-child(-n + 4) {
          margin: 0 15px 30px;
        }
        .absolute-product .no-slider .product-box:nth-last-child(-n + 2) {
          margin: 0 15px 0;
        }
        .theme-tab .tab-title2 {
          font-size: 22px;
        }
        .theme-tab .tab-title2:after {
          top: 17px;
        }
        .theme-tab .tab-content .product-tab .tab-box {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 50%;
          flex: 0 0 50%;
          max-width: calc(50% - 10px);
        }
        .theme-tab .tab-content .product-tab .tab-box:nth-last-child(-n + 2) {
          margin: 0 5px 0;
        }
        .theme-tab .tab-content .product-tab .tab-box:nth-last-child(-n + 4) {
          margin: 0 5px 10px;
        }
        .theme-tab .tab-content .product-tab .tab-box .product-box2 img {
          height: 280px;
        }
        .blog-section .review-box {
          padding: 15px;
        }
        .blog-section .review-box .review-content p {
          margin-top: 0;
        }
        .full-banner .banner-contain h2 {
          font-size: 85px;
        }
        .full-banner .banner-contain h3 {
          font-size: 50px;
        }
        .full-banner .banner-contain h4 {
          font-size: 22px;
          padding-top: 5px;
        }
        .full-banner .santa-img img {
          width: 200px;
        }
        .full-banner.feature-banner .feature-object li,
        .full-banner.feature-banner .feature-object-right li {
          margin-right: 0;
        }
        .instagram .insta-decor {
          display: none;
        }
        .logo-section .logo-decor {
          display: none;
        }
        .blog-section .review-box .santa-img {
          display: none;
        }
        .collection-banner .contain-banner.banner-3 {
          padding-left: 35px;
          padding-right: 35px;
        }
        .collection-banner .contain-banner.banner-3 h2 {
          font-size: 25px;
        }
        .collection-banner .contain-banner.banner-3 h4 {
          font-size: 12px;
        }
        .collection-banner .contain-banner.banner-4 {
          padding-left: 35px;
          padding-right: 35px;
        }
        .collection-banner .contain-banner.banner-4 h2 {
          font-size: 24px;
        }
        .collection-banner .contain-banner.banner-4 h4 {
          font-size: 16px;
        }
        .collection-banner .contain-banner h2 {
          font-size: 40px;
        }
        .home-slider .home {
          height: 70vh;
        }
        .home-slider .slider-contain {
          height: 70vh;
        }
        .home-slider .slider-contain h1 {
          font-size: 50px;
        }
        .height-85 .home-slider .home {
          height: 80vh;
        }
        .height-85 .home-slider .slider-contain {
          height: 80vh;
        }
        .background .contain-bg {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .theme-card .offer-slider .media .media-body a h6 {
          margin-right: 20px;
        }
        .theme-card .offer-slider .media .media-body .rating i {
          padding-right: 3px;
        }
        .theme-card.card-border .offer-slider {
          padding-top: 0;
        }
        .full-box .theme-card .offer-slider img {
          padding: 15px 0 15px 0;
        }
        .full-box .theme-card .offer-slider .product-box2 .media img {
          height: 250px;
        }
        .full-box
          .theme-card
          .offer-slider
          .product-box2
          .media
          .media-body
          .color-variant {
          margin-top: 5px;
        }
        .full-box
          .theme-card
          .offer-slider
          .product-box2
          .media
          .media-body
          .color-variant
          li {
          margin-top: 5px;
        }
        .home-slider .slider-details {
          width: 335px !important;
          height: 335px !important;
        }
        .home-slider .slider-details h1 {
          font-size: 50px;
        }
        .home-slider .slider-details h2 {
          font-size: 36px;
        }
        .home-slider .slider-details .btn-white {
          margin-top: 0;
        }
        .home-slider.fullpage .home .slider-contain h1 {
          font-size: 35px;
        }
        .home-slider.fullpage .home .slider-contain p {
          max-width: 450px;
          font-size: 14px;
        }
        .home-slider.fullpage .home .slider-contain .btn-solid {
          padding: 10px 15px;
        }
        .about-section h2 {
          font-size: 22px;
        }
        .about-section .about-text p {
          line-height: 24px;
        }
        .about-section .service .service-block1 svg {
          margin-bottom: 5px;
        }
        .about-section .service .service-block1 h5 {
          line-height: 18px;
        }
        .about-section .small-section {
          padding-top: 20px;
        }
        .layout7-product .product-box .details-product {
          background-color: rgba(255, 255, 255, 0.5);
          padding: 5px;
        }
        .padding-bottom-cls {
          padding-bottom: 30px;
        }
        .layout-8 {
          padding: 0 40px;
        }
        .add_to_cart.top,
        .add_to_cart.bottom {
          left: -300px;
          top: 0;
          height: 100vh;
          width: 300px;
        }
        .add_to_cart.top .cart-inner,
        .add_to_cart.bottom .cart-inner {
          height: 100vh;
          overflow: auto;
        }
        .add_to_cart.top .cart-inner .cart_top,
        .add_to_cart.bottom .cart-inner .cart_top {
          padding: 20px !important;
          margin-bottom: 20px;
        }
        .add_to_cart.top .cart-inner .cart_media,
        .add_to_cart.bottom .cart-inner .cart_media {
          padding: 0 20px !important;
          display: block;
        }
        .add_to_cart.top .cart-inner .cart_media .cart_product,
        .add_to_cart.bottom .cart-inner .cart_media .cart_product {
          padding: 0;
          width: 100%;
          display: block;
          overflow-y: hidden;
        }
        .add_to_cart.top .cart-inner .cart_media .cart_product li,
        .add_to_cart.bottom .cart-inner .cart_media .cart_product li {
          min-width: 100%;
          max-width: 100%;
          margin-right: 0;
          padding-bottom: 10px;
        }
        .add_to_cart.top .cart-inner .cart_media .cart_total,
        .add_to_cart.bottom .cart-inner .cart_media .cart_total {
          padding: 0;
          width: 100%;
        }
        .add_to_cart.top.open-side,
        .add_to_cart.bottom.open-side {
          left: 0;
        }
        .cart-section tbody tr td,
        .wishlist-section tbody tr td {
          min-width: 186px;
        }
        .blog-detail-page .comment-section li {
          padding-top: 45px;
          padding-bottom: 45px;
        }
        .product-wrapper-grid.list-view .product-box .img-wrapper,
        .product-wrapper-grid.list-view .product-box .img-block {
          width: 50%;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .search-count {
          width: 100%;
          border-left: 1px solid #dddddd;
          border-bottom: 1px solid #dddddd;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-view {
          width: 20%;
          padding-right: 0 !important;
          border-left: 1px solid #dddddd;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-grid-view {
          padding: 20px !important;
          padding-left: 0 !important;
          width: 20%;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-grid-view
          ul
          li:last-child {
          display: none;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter {
          width: 30%;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view {
          width: 30%;
        }
        .cart-section tbody tr td {
          min-width: 140px;
        }
        .cart-section tbody tr td .qty-box .input-group .form-control {
          width: 52px;
        }
        .cart-section tfoot tr td {
          padding-right: 25px;
        }
        .collection-collapse-block
          .collection-collapse-block-content
          .collection-brand-filter
          .category-list
          li:first-child {
          margin-top: 15px;
        }
        .collection-filter-block .product-service .media .media-body h4 {
          font-size: 16px;
        }
        .product-right h2 {
          font-size: 20px;
        }
        .testimonial .testimonial-slider .media .media-body {
          padding: 30px;
        }
        .testimonial .testimonial-slider .media .media-body p {
          line-height: 1.5;
        }
        .search-product > div:nth-last-child(1),
        .search-product > div:nth-last-child(2),
        .search-product > div:nth-last-child(3) {
          margin-top: 30px;
        }
        .blog-page .blog-media {
          margin-bottom: 20px;
        }
        .blog-page .blog-media .blog-right {
          display: block;
          margin-top: 15px;
        }
        .blog-page .blog-media .blog-right p {
          line-height: 1.3;
        }
        .tab-product .tab-content.nav-material .single-product-tables table {
          width: 50%;
        }
        .product-description-box .border-product {
          padding-top: 10px;
          padding-bottom: 15px;
        }
        .product-description-box .product-icon .product-social li {
          padding-right: 4px;
        }
        .product-description-box .product-icon .wishlist-btn span {
          padding-left: 4px;
        }
        .product-form-box .border-product {
          padding-top: 10px;
          padding-bottom: 15px;
        }
        .product-form-box .timer {
          padding-left: 17px;
        }
        .product-form-box .timer span {
          width: 55px;
        }
        .product-form-box .product-buttons .btn-solid,
        .product-form-box .product-buttons .btn-outline {
          padding: 7px 13px;
        }
        .product-accordion .single-product-tables table {
          width: 70%;
        }
        .tab-product .flex-column {
          -webkit-box-orient: unset !important;
          -webkit-box-direction: unset !important;
          -ms-flex-direction: unset !important;
          flex-direction: unset !important;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .tab-product .nav-material.nav-tabs {
          border-bottom: 1px solid #dddddd;
          border-right: 0;
        }
        .tab-product .nav-material.nav-tabs .nav-item .nav-link.active {
          background-color: unset;
        }
        .tab-border {
          padding-top: 0;
        }
        .dashboard-section .counter-section .counter-box {
          padding: 20px;
        }
        .dashboard-section .counter-section .counter-box img {
          height: 40px;
          margin-right: 10px;
        }
        .theme-card .offer-slider img {
          height: 120px;
        }
        .container-fluid.custom-container {
          padding-left: 50px;
          padding-right: 50px;
        }
        .layout-8 .loader_skeleton {
          padding: 0 40px;
        }
        .loader_skeleton .category-ldr .row .category-block {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 20%;
          flex: 0 0 20%;
          max-width: 20%;
        }
        .loader_skeleton .product-top-filter .row > div:first-child {
          border-left: 1px solid #f3f3f3;
          border-right: 1px solid #f3f3f3;
          border-bottom: 1px solid #f3f3f3;
        }
        .loader_skeleton .product-top-filter .row > div:last-child {
          border-right: 1px solid #f3f3f3;
        }
        .loader_skeleton .tab-product.vertical-tab ul li {
          display: inline-block;
          width: 16%;
          height: 30px;
          margin-top: 0;
          margin-right: 10px;
        }
        .rtl header.video-header #main-nav {
          right: unset;
          left: 0;
        }
        .rtl header.video-header .main-menu .menu-right .icon-nav {
          padding-left: 40px;
          padding-right: 0;
        }
        .rtl .cart-section .cart-buttons > div:last-child,
        .rtl .wishlist-section .cart-buttons > div:last-child {
          padding-left: 17px;
        }
        .rtl .tab-border .nav-border {
          border-left: none;
        }
        .rtl
          .collection-product-wrapper
          .product-filter-content
          .collection-view {
          padding-right: 20px !important;
        }
        .rtl .footer-social li {
          padding-right: 0;
          padding-left: 38px;
        }
        .rtl .footer-theme2 .social-white li {
          padding-left: 12px;
          padding-right: 12px;
        }
        .rtl .tab-left .theme-tab .left-side .tab-title {
          text-align: center;
          margin-left: 0;
        }
        .dark .sm-horizontal {
          background-color: #2b2b2b;
          border-color: #404040;
        }
        .dark .sm-horizontal .mobile-back {
          border-color: #404040;
          color: #e7eaec;
        }
        .dark .sm-horizontal.pixelstrap ul {
          background-color: #2b2b2b;
        }
        .dark .tab-product .nav-material.nav-tabs {
          background-color: #2b2b2b;
        }
        .dark header.left-header .pixelstrap ul {
          background-color: #232323;
        }
      }

      @media (min-width: 992px) {
        .demo-modal .modal-lg {
          max-width: 1400px;
        }
        .exit-modal .modal-lg {
          max-width: 600px;
        }
        .rtl .service_slide .service-home .offset-lg-2 {
          margin-right: 16.6666666667%;
          margin-left: 0;
        }
      }

      @media (max-width: 991px) and (min-width: 767px) {
        .partition-f > div + div + div {
          margin-top: 30px;
        }
        .lookbook .lookbook-block .lookbook-dot .dot-showbox {
          width: 80px;
        }
        .lookbook .lookbook-block .lookbook-dot .dot-showbox .dot-info h5 {
          line-height: 15px;
        }
      }

      @media (max-width: 991px) {
        h2 {
          font-size: 28px;
        }
        section,
        .section-t-space {
          padding-top: 50px;
        }
        .section-b-space {
          padding-bottom: 50px;
        }
        .portfolio-padding {
          padding-bottom: 20px;
        }
        .small-section {
          padding: 30px 0;
        }
        header.header-tools {
          position: relative;
          top: 0;
        }
        header.header-tools .top-header {
          background-color: var(--theme-deafult);
        }
        header.header-tools .top-header .container {
          background-color: transparent;
        }
        header.header-tools .logo-menu-part {
          background-color: white;
        }
        header.header-tools .logo-menu-part > .container {
          border-bottom: none;
        }
        header.header-christmas {
          position: relative;
          background-color: #e34041;
          margin-bottom: -50px;
        }
        .tools_slider .home-slider .slider-contain {
          margin-top: 0;
        }
        footer.footer-5 .footer-theme2 .subscribe-block {
          border-left: none;
          border-right: none;
        }
        footer.footer-black .below-section {
          padding-top: 95px;
        }
        footer.footer-black.footer-light .subscribe {
          border-right: none;
        }
        footer.footer-classic .upper-footer .small-section {
          padding: 30px 0;
        }
        .absolute_banner .collection-banner .absolute-contain h3 {
          font-size: 16px;
        }
        .absolute_banner .collection-banner .absolute-contain h4 {
          font-size: 14px;
        }
        .tools_product .multiple-slider > div:nth-child(-n + 2) {
          margin-bottom: 0;
        }
        .tools_product .tools-grey {
          margin-top: 30px;
        }
        .tools_product .banner-tools {
          margin-left: 10px;
          margin-right: 10px;
        }
        .tools-service .service-block + .service-block {
          border-left: none;
        }
        .tools-service .service-block svg,
        .tools-service .service-block1 svg {
          margin-bottom: 0;
        }
        .tools-brand .row {
          margin: 0 10px;
          padding: 10px 0;
        }
        .tools_slider .home-slider .slider-contain {
          margin-left: 40px;
        }
        .tools_slider .home-slider .home .tools-parts,
        .tools_slider .home-slider .home .tools-parts1 {
          margin-top: 20px;
        }
        .tools_slider .home-slider .home .tools-parts img,
        .tools_slider .home-slider .home .tools-parts1 img {
          width: 180px;
        }
        .tools_slider .home-slider .home .tools-parts {
          right: 0;
        }
        .tools_slider .home-slider .home .tools-parts1 {
          right: 10%;
        }
        .tools_slider .home-slider .home #tools-move2 {
          right: 7%;
        }
        .tools-parallax-product .tools-description h3 {
          text-align: center;
        }
        .tools-parallax-product .tools-description .tools-form {
          text-align: center;
        }
        .tools-parallax-product .tools-description .tools-form .search-box {
          margin: 20px auto 20px;
        }
        .tools-parallax-product .tools-description .tools-form .btn-find {
          background-size: 1100px;
        }
        .tools-parallax-product .tools-grey {
          -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
          margin-bottom: 30px;
        }
        .tools-parallax-product.full-banner {
          padding-top: 75px;
          padding-bottom: 75px;
        }
        .pet-parallax .pet-decor {
          left: 34px;
          bottom: -86px;
        }
        .pet-parallax .pet-decor img {
          width: 165px;
        }
        .pet-parallax .banner-contain p {
          max-width: 100%;
        }
        .service_slide .service-home {
          position: relative;
        }
        .service_slide .service-home .service-block1 {
          padding: 0;
        }
        .service_slide .partition4 > div + div {
          margin-top: 0;
        }
        .service_slide .partition4 > div + div + div {
          margin-top: 30px;
        }
        .product-full-tab {
          padding-top: 50px !important;
        }
        .blog-section .review-box {
          margin-top: 30px;
        }
        .blog-section .review-box .review-content p {
          margin-bottom: 45px;
        }
        hr.style1 {
          margin-top: 12px;
          margin-bottom: 12px;
        }
        h4 {
          font-size: 16px;
        }
        .gym-banner .collection-banner .contain-banner {
          padding-left: 30px;
          padding-right: 30px;
        }
        .blog-details h4 {
          margin-top: 17px;
          font-size: 13px;
        }
        .blog-details p {
          font-size: 15px;
          line-height: 1.3;
          margin-top: 10px;
        }
        .service-block svg,
        .service-block1 svg {
          margin-bottom: 20px;
          height: auto;
          width: 46px;
        }
        .partition_3 > div + div {
          margin-top: 30px;
        }
        .partition4 > div + div + div {
          margin-top: 30px;
        }
        .banner-timer .banner-text h2 {
          font-size: 20px;
        }
        .banner-timer .timer span {
          width: 65px;
        }
        .banner-timer .timer p {
          font-size: 14px;
        }
        .about-text p {
          line-height: 24px;
        }
        .footer-light .subscribe {
          text-align: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          border: none;
          margin-bottom: 5px;
        }
        .footer-light .subscribe p {
          display: none;
        }
        .footer-light .subscribe-form {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          margin-bottom: 0;
        }
        .footer-theme .col {
          max-width: 50%;
          -ms-flex-preferred-size: unset;
          flex-basis: unset;
        }
        .footer-theme .footer-logo {
          margin-bottom: 30px;
        }
        .footer-theme .sub-title h4 {
          margin-bottom: 10px;
        }
        .footer-social {
          margin-top: 15px;
        }
        .subscribe-wrapper {
          -webkit-box-ordinal-group: 1;
          -ms-flex-order: 0;
          order: 0;
          padding-top: 20px;
          padding-bottom: 20px;
        }
        .footer-theme2 .footer-mobile-title {
          display: none !important;
        }
        .footer-theme2 h4 {
          padding-bottom: 10px;
        }
        .footer-theme2 .col {
          -ms-flex-preferred-size: unset;
          flex-basis: unset;
          padding: 20px 0;
        }
        .footer-theme2.section-light .footer-block h4 {
          padding-bottom: 15px;
        }
        .footer-theme2.section-light .footer-block .subscribe-white {
          border: none;
        }
        .footer-theme2 .footer-logo {
          margin-bottom: 20px;
        }
        .footer-theme2 .subscribe-block {
          border: none;
        }
        .social-white li {
          padding-left: 10px;
          padding-right: 10px;
        }
        .category-border div .category-banner .category-box h2 {
          padding: 5px 15px;
          font-size: 30px;
        }
        .category-bg .image-block.even:after {
          bottom: 85%;
        }
        .category-bg .image-block:after {
          width: 35px;
        }
        .category-bg .image-block:hover:after {
          height: 70px;
        }
        .category-bg .contain-block h2 {
          font-size: 20px;
          margin-top: 8px;
        }
        .category-bg .contain-block:after {
          width: 35px;
        }
        .category-bg .contain-block.even:after {
          top: 85%;
        }
        .category-bg .contain-block .category-btn {
          margin-bottom: 15px;
          margin-top: 15px;
          letter-spacing: 0.2em;
          padding: 10px 15px;
        }
        .category-bg .contain-block:after {
          bottom: 85%;
        }
        .category-bg .contain-block:hover:after {
          height: 70px;
        }
        .no-slider .product-box {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 50%;
          flex: 0 0 50%;
          max-width: calc(50% - 30px);
          margin: 0 15px 30px !important;
        }
        .no-slider .product-box:nth-last-child(-n + 2) {
          margin: 0 15px 0 !important;
        }
        .no-slider.five-product .product-box {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 50%;
          flex: 0 0 50%;
          max-width: calc(50% - 30px);
          margin: 0 15px 30px !important;
        }
        .no-slider.five-product .product-box:nth-last-child(-n + 2) {
          margin: 0 15px 0 !important;
        }
        .full-banner {
          padding-top: 180px;
          padding-bottom: 180px;
        }
        .full-banner.parallax-layout {
          padding-top: 180px;
          padding-bottom: 180px;
        }
        .full-banner.feature-banner .feature-object li:nth-child(2),
        .full-banner.feature-banner .feature-object-right li:nth-child(2) {
          padding-right: 0;
          padding-left: 0;
        }
        .full-banner.feature-banner .feature-object li:nth-child(3),
        .full-banner.feature-banner .feature-object-right li:nth-child(3) {
          padding-right: 0;
          padding-left: 0;
        }
        .full-banner.feature-banner .center-img {
          display: none;
        }
        .full-banner.feature-banner .feature-object-right {
          margin-left: 0;
        }
        .full-banner.feature-banner .banner-decor .left-img img,
        .full-banner.feature-banner .banner-decor .right-img img {
          width: 100px;
        }
        .full-banner.feature-banner h2 {
          margin-bottom: 30px;
        }
        .full-banner .banner-contain h2 {
          font-size: 60px;
        }
        .full-banner .banner-contain h3 {
          font-size: 35px;
        }
        .full-banner .banner-contain h4 {
          font-size: 20px;
          padding-top: 5px;
        }
        .full-banner .decor {
          display: none;
        }
        .collection-banner .contain-banner {
          padding-left: 60px;
          padding-right: 60px;
        }
        .collection-banner .contain-banner.banner-3 {
          padding-left: 30px;
          padding-right: 30px;
        }
        .collection-banner .contain-banner.banner-3 h2 {
          font-size: 20px;
        }
        .collection-banner .contain-banner.banner-4 {
          padding-left: 40px;
          padding-right: 40px;
        }
        .collection-banner .contain-banner.banner-4 h2 {
          font-size: 18px;
        }
        .collection-banner .contain-banner.banner-4 h4 {
          font-size: 18px;
        }
        .collection-banner .contain-banner h2 {
          font-size: 25px;
        }
        .collection-collapse-block {
          border-bottom: 1px solid #dddddd !important;
        }
        .service_slide .home-slider .slider-contain {
          height: 65vh;
        }
        .home-slider .home {
          height: 65vh;
        }
        .home-slider .slider-contain {
          height: 65vh;
        }
        .home-slider .slider-contain h1 {
          font-size: 36px;
        }
        .home-slider .slider-contain .btn-solid,
        .home-slider .slider-contain .btn-outline {
          margin-top: 17px;
        }
        .home-slider .slider-details {
          top: 20%;
          padding: 0;
          width: 260px !important;
          height: 260px !important;
        }
        .home-slider .slider-details h1 {
          line-height: 1;
          font-size: 30px;
          margin: 5px 0;
        }
        .home-slider .slider-details h2 {
          font-size: 24px;
        }
        .home-slider .slider-details h3 {
          font-size: 20px;
        }
        .home-slider .slider-details h4 {
          font-size: 18px;
          line-height: 1;
          margin-bottom: 2px;
        }
        .home-slider .slider-details .btn-white {
          padding: 7px 14px;
          margin-top: 5px;
        }
        .home-slider:hover .slick-next {
          right: 90px;
        }
        .home-slider:hover .slick-prev {
          left: 90px;
        }
        .height-85 .home-slider .home {
          height: 70vh;
        }
        .height-85 .home-slider .slider-contain {
          height: 70vh;
        }
        .background .contain-bg {
          padding-top: 25px;
          padding-bottom: 25px;
        }
        .background .contain-bg h4 {
          font-size: 16px;
        }
        .theme-tab .tab-content .product-tab .tab-box .product-box2 img {
          height: 210px;
        }
        .beauty-about .about-text p {
          text-align: center;
        }
        .theme-card .offer-slider img {
          padding: 10px 10px 10px 0;
        }
        .theme-card.card-border .offer-slider img {
          padding: 10px 10px 10px 30px;
        }
        .multiple-slider > div:nth-child(-n + 2) {
          margin-bottom: 30px;
        }
        .full-box .center-slider .offer-slider .product-box .product-info h4 {
          padding-bottom: 5px;
        }
        .full-box
          .center-slider
          .offer-slider
          .product-box
          .product-info
          .btn-outline {
          padding: 7px 20px;
        }
        .full-box .theme-card .offer-slider .product-box2 .media img {
          height: 150px;
        }
        .full-box
          .theme-card
          .offer-slider
          .product-box2
          .media
          .media-body
          .color-variant
          li {
          margin-top: 0;
        }
        .layout-8 .layout-8-bg {
          padding: 0;
        }
        .alert {
          max-width: 45% !important;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .offer-content
          img {
          margin-bottom: 20px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .offer-content
          h2 {
          margin-bottom: 18px;
        }
        .theme-modal.cart-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg {
          padding: 15px;
        }
        .theme-modal.cart-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg.addtocart
          .media
          .media-body
          .buttons
          a {
          font-size: 13px;
          padding: 4px 10px;
          margin: 3px 6px;
        }
        .theme-modal.exit-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg {
          padding: 20px;
        }
        .parallax-cls .banner-contain {
          background-color: rgba(255, 255, 255, 0.5);
          padding: 35px;
        }
        .parallax-cls section .banner-contain {
          margin-top: 0;
        }
        .about-section {
          padding-top: 30px;
        }
        .about-section h2 {
          text-align: center;
        }
        .product-box .cart-info {
          bottom: 20px;
        }
        .absolute-banner {
          margin-top: -60px;
        }
        .login-page .authentication-right {
          height: auto;
        }
        .testimonial .testimonial-slider .media .media-body {
          padding: 0 30px;
          height: 100%;
          -ms-flex-item-align: center;
          align-self: center;
        }
        .testimonial .testimonial-slider .media .media-body p {
          margin-bottom: 0;
        }
        .testimonial
          .testimonial-slider
          .slick-track
          .slick-slide:nth-child(even)
          .media {
          border-left: none;
          padding-left: 0;
        }
        .blog-detail-page .blog-advance ul {
          margin-bottom: 20px;
        }
        .blog-detail-page .blog-advance p:last-child {
          margin-bottom: 0;
        }
        .top-banner-content h4 {
          font-size: 20px;
        }
        .collection-product-wrapper .product-top-filter {
          border-top: none;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .search-count {
          border-top: 1px solid #dddddd;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-view {
          display: none;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .collection-grid-view {
          display: none;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view,
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter {
          width: 50%;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view:before,
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter:before {
          right: 15px !important;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view
          select,
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter
          select {
          border-left: 1px solid #dddddd;
          padding: 21px 34px 21px 34px;
          border-top: none;
          border-bottom: none;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view
          select {
          border-right: none !important;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view,
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter {
          border-top: 1px solid #dddddd;
        }
        .filter-main-btn {
          display: block;
        }
        .collection-filter {
          position: fixed;
          height: 100vh;
          top: 0;
          left: -350px;
          background-color: white;
          z-index: 99;
          overflow-y: scroll;
          padding: 15px 0 15px 15px;
          max-width: 350px;
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
          -webkit-box-shadow: 1px 0 5px #ddd;
          box-shadow: 1px 0 5px #ddd;
        }
        .collection-filter .collection-sidebar-banner {
          text-align: center;
        }
        .collection-filter .theme-card {
          padding-left: 30px;
          padding-right: 30px;
        }
        .collection-filter .collection-sidebar-banner {
          padding: 0 30px;
        }
        .collection-filter-block {
          border: none;
        }
        .collection-mobile-back {
          display: block;
        }
        .collection .section-t-space {
          padding-top: 30px;
        }
        .collection .partition-collection > div:nth-last-child(1) {
          margin-top: 30px;
        }
        .collection .partition-collection > div:nth-last-child(2) {
          margin-top: 30px;
        }
        .right-login {
          margin-top: 30px;
        }
        .contact-page .map iframe {
          height: 350px;
        }
        .contact-page .contact-right {
          padding-bottom: 0;
        }
        .contact-page .contact-right ul li {
          padding-left: 0;
          border-bottom: 1px solid #dddddd;
          text-align: center;
          padding-bottom: 10px;
          margin-top: 15px;
        }
        .contact-page .contact-right ul li .contact-icon {
          position: relative;
          margin: 0 auto;
          border-right: 0;
        }
        .contact-page .contact-right ul li p {
          margin-bottom: 10px;
        }
        .cart-section .cart-table thead th:last-child {
          display: none;
        }
        .cart-section tbody tr td {
          min-width: 135px;
        }
        .cart-section tbody tr td:last-child {
          display: none;
        }
        .cart-section .cart-buttons > div:last-child {
          padding-right: 15px;
        }
        .cart-section tfoot tr td {
          padding-right: 0;
        }
        .wishlist-section tbody tr td {
          min-width: 138px;
        }
        .product-right h2 {
          margin-top: 15px;
        }
        .product-right {
          text-align: center;
          margin: 20px 0 10px 0;
        }
        .product-right .detail-section,
        .product-right .product-icon {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .product-right .product-description .qty-box {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .product-right .size-text {
          text-align: left;
        }
        .product-right .timer {
          text-align: left;
        }
        .product-right .product-icon .product-social li {
          padding-right: 20px;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .sidebar-popup {
          width: 55%;
          padding-top: 10px;
          padding-bottom: 10px;
          text-align: center;
          margin-bottom: 20px;
          background: none var(--theme-deafult);
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .sidebar-popup
          .open-popup {
          text-align: left;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .sidebar-popup
          > a {
          color: #ffffff;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .sidebar-popup
          .collection-filter {
          height: 100vh;
          left: -350px;
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .search-count {
          width: 100%;
          padding: 10px 0;
          text-align: center;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .collection-view,
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .collection-grid-view {
          display: none;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view,
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter {
          width: 50%;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view
          select,
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter
          select {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view:before,
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter:before {
          top: 13px;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter:before {
          left: unset;
          right: 35px;
        }
        .tab-product {
          padding-top: 0;
        }
        .tab-product .nav-material.nav-tabs {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .pro_sticky_info {
          border: none;
          padding: 10px 0;
        }
        .product-form-box {
          margin-bottom: 10px;
        }
        .dashboard-left {
          position: fixed;
          height: 100vh;
          top: 0;
          left: -350px;
          background-color: white;
          z-index: 99;
          padding: 0 35px 35px;
          max-width: 350px;
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
          -webkit-box-shadow: 0 0 8px 0 #dddddd;
          box-shadow: 0 0 8px 0 #dddddd;
        }
        .dashboard-left .block-title h2 {
          display: none;
        }
        .dashboard-left .block-content {
          border: none;
          padding: 0;
          margin-top: 20px;
        }
        .dashboard-left .block-content ul li:hover {
          padding-left: 0;
        }
        .account-sidebar {
          display: block;
        }
        .typography_section .row > div:first-child .typography-box:last-child {
          margin-bottom: 30px;
        }
        .product-slick .slick-prev,
        .product-slick .slick-next,
        .rtl-product-slick .slick-prev,
        .rtl-product-slick .slick-next,
        .product-right-slick .slick-prev,
        .product-right-slick .slick-next,
        .rtl-product-right-slick .slick-prev,
        .rtl-product-right-slick .slick-next {
          opacity: 1;
        }
        .product-slick .slick-prev,
        .rtl-product-slick .slick-prev,
        .product-right-slick .slick-prev,
        .rtl-product-right-slick .slick-prev {
          left: 20px;
        }
        .product-slick .slick-next,
        .rtl-product-slick .slick-next,
        .product-right-slick .slick-next,
        .rtl-product-right-slick .slick-next {
          right: 20px;
        }
        .order-up {
          -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
        }
        .bundle .bundle_img {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .bundle .bundle_detail .theme_checkbox {
          padding: 0 20%;
        }
        .checkout-page .checkout-form .checkout-details {
          margin-top: 30px;
        }
        .vendor-cover .bg-size {
          height: 270px;
        }
        .vendor-profile .profile-left {
          display: block;
        }
        .vendor-profile .profile-left .profile-image {
          margin: 0 auto;
          width: 100%;
        }
        .vendor-profile .profile-left .profile-detail {
          margin: 0 auto;
          text-align: center;
          margin-left: 0;
          padding-left: 0;
          border-left: none;
          border-top: 1px solid #efefef;
          padding-top: 15px;
          width: 100%;
          margin-top: 15px;
        }
        .vendor-profile .profile-left .vendor-contact {
          width: 100%;
          text-align: center;
          margin-left: 0;
          padding-left: 0;
          border-left: none;
          border-top: 1px solid #efefef;
          padding-top: 15px;
          margin-top: 15px;
        }
        .vendor-profile .profile-left .vendor-contact .footer-social {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .vendor-profile .profile-left .vendor-contact .footer-social li {
          padding: 0 5px;
        }
        .become-vendor h4 {
          margin-bottom: 20px;
        }
        .become-vendor .step-bg .row {
          margin-left: -15px;
          margin-right: -15px;
        }
        .become-vendor .step-bg .row > div {
          padding-left: 15px;
          padding-right: 15px;
        }
        .become-vendor .step-bg .row > div:nth-child(2) {
          margin-top: 0;
          margin-bottom: 30px;
        }
        .become-vendor .step-bg .row > div:nth-child(1) {
          margin-bottom: 30px;
        }
        .become-vendor .step-bg .row > div:nth-child(3) {
          margin-bottom: 0;
        }
        .become-vendor .step-bg:before {
          -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
        }
        .dashboard-section .dashboard-sidebar .faq-tab .nav-tabs {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          width: 100%;
          background-color: #f8f8f8;
        }
        .dashboard-section .counter-section {
          margin-top: 20px;
        }
        .faq-tab .nav-tabs .nav-item .nav-link.active {
          border-bottom: 2px solid var(--theme-deafult);
          border-right: none;
        }
        .bg-title .theme-tab .bg-title-part {
          margin-top: 30px;
        }
        .loader_skeleton .collection-banner .contain-banner {
          padding-left: 40px;
          padding-right: 40px;
        }
        .loader_skeleton .category-ldr .row .category-block {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 25%;
          flex: 0 0 25%;
          max-width: 25%;
        }
        .loader_skeleton .product-top-filter {
          border-top: 1px solid #f3f3f3;
        }
        .loader_skeleton .product-top-filter .row > div:nth-child(3) {
          border-right: 1px solid #f3f3f3;
        }
        .loader_skeleton .product-page .product-right h2,
        .loader_skeleton .product-page .product-right h3,
        .loader_skeleton .product-page .product-right h4 {
          margin-left: auto;
          margin-right: auto;
        }
        .loader_skeleton .product-page .product-right .btn-group {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .loader_skeleton .tab-product {
          margin-top: 25px !important;
        }
        .loader_skeleton .blog-page .order-sec .product-box .media {
          display: block;
        }
        .loader_skeleton .blog-page .order-sec .product-box .img-wrapper {
          width: 100%;
        }
        .rtl
          .tools-parallax-product
          .tools-description
          .tools-form
          .search-button {
          text-align: center;
        }
        .rtl .tools-service .service-block + .service-block {
          border-right: none;
        }
        .rtl
          .testimonial
          .testimonial-slider
          .slick-track
          .slick-slide:nth-child(even)
          .media {
          border-right: none;
          padding-right: 0;
        }
        .rtl .contact-page .contact-right ul li {
          padding-right: 0;
        }
        .rtl .contact-page .contact-right ul li .contact-icon {
          border-left: none;
        }
        .rtl .contact-page .contact-right ul li p {
          text-align: center;
        }
        .rtl .rtl-text .product-right .color-variant {
          text-align: center;
        }
        .rtl .rtl-text .product-right .size-box {
          text-align: center;
        }
        .rtl .rtl-text .product-right .product-buttons {
          text-align: center;
        }
        .rtl .rtl-text .product-right .border-product {
          text-align: center;
        }
        .rtl .product-accordion .card-header h5 {
          text-align: center;
        }
        .rtl .image-swatch {
          text-align: center;
        }
        .rtl .product-right h4,
        .rtl .product-right h2,
        .rtl .product-right h3,
        .rtl .product-right p,
        .rtl .product-right .product-title {
          text-align: center;
        }
        .rtl .product-right .detail-section,
        .rtl .product-right .product-icon {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .rtl .product-right .size-text {
          text-align: right;
        }
        .rtl .product-right .product-description .qty-box {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
        .rtl .product-right .payment-card-bottom {
          text-align: center;
        }
        .rtl .product-right .rating {
          text-align: center;
        }
        .rtl .single-product-tables table tr td {
          text-align: center;
        }
        .rtl .tab-product {
          padding-top: 30px;
        }
        .rtl
          .collection-product-wrapper
          .product-filter-content
          .product-page-filter {
          border-left: none;
        }
        .rtl
          .collection-product-wrapper
          .product-filter-content
          .collection-view {
          padding-right: 20px !important;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter
          select,
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view
          select,
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter
          select,
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view
          select {
          padding: 21px 34px 21px 34px;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view,
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view {
          border-right: 1px solid #dddddd;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view {
          border-right: none;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .search-count
          h5 {
          text-align: center;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter
          select,
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view
          select {
          padding: 10px 34px 10px 34px;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .sidebar-popup {
          background: none var(--theme-deafult);
        }
        .rtl .banner-timer .timer {
          padding-left: 10px;
        }
        .rtl .banner-timer .timer span {
          width: 55px;
        }
        .rtl
          .full-box
          .theme-card
          .offer-slider
          .product-box2
          .media
          .media-body
          .color-variant
          li {
          margin-left: 5px;
          margin-right: unset;
        }
        .rtl
          .full-box
          .theme-card
          .offer-slider
          .product-box2
          .media
          .media-body
          .rating
          i {
          padding: 0;
        }
        .rtl .beauty-about .text-center {
          text-align: center !important;
        }
        .rtl .beauty-about .about-text p {
          text-align: center;
        }
        .rtl .footer-light .subscribe {
          border-left: none;
        }
        .rtl .loader_skeleton .product-page .product-right ul {
          text-align: center;
        }
        .dark .collection-filter {
          background-color: #2b2b2b;
        }
        .dark
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view
          select,
        .dark
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter
          select {
          border-color: #404040;
        }
        .dark .collection-mobile-back {
          border-color: #404040;
        }
        .dark .collection-mobile-back span {
          color: #929292;
        }
        .dark .collection-collapse-block {
          border-color: #404040 !important;
        }
        .dark .collection-filter {
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .dark .contact-page .contact-right ul li {
          border-color: #404040;
        }
        .dark .dashboard-left {
          background-color: #232323;
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .dark header.header-tools .logo-menu-part {
          background-color: #2b2b2b;
        }
      }

      @media (max-width: 767px) {
        .container-fluid.custom-container {
          padding-left: 30px;
          padding-right: 30px;
        }
        .theme-modal.cart-modal .product-section {
          display: none;
        }
        .addtocart_count .product-box:hover .cart-info a:nth-child(1) i,
        .addtocart_count .product-box:hover .cart-info a:nth-child(2) i,
        .addtocart_count .product-box:hover .cart-info a:nth-child(3) i {
          -webkit-animation: none;
          animation: none;
        }
        .addtocart_count .center-slider .offer-slider .add-button,
        .addtocart_count .center-slider .offer-slider .cart-info {
          display: none;
        }
        .addtocart_count
          .center-slider
          .offer-slider
          .product-box
          .product-detail
          .rating {
          margin-top: 25px;
        }
        .absolute_banner {
          margin-bottom: 0;
        }
        .absolute_banner .collection-banner .absolute-contain {
          bottom: 25px;
        }
        .absolute_banner .collection-banner .absolute-contain h3 {
          font-size: 20px;
        }
        .absolute_banner .collection-banner .absolute-contain h4 {
          font-size: 16px;
        }
        .box-product .full-box .row > div:nth-last-child(-n + 3) {
          margin-top: 30px;
        }
        .advertise-section .full-banner .banner-contain h2 {
          font-size: 60px;
          margin-top: -10px;
        }
        footer.footer-classic .upper-footer .small-section {
          padding: 20px 0;
        }
        footer.footer-classic .subscribe-form .form-control {
          padding: 8px;
        }
        .insta-title {
          width: 170px;
          height: 30px;
        }
        .insta-title h4 {
          font-size: 14px;
        }
        .tools_slider .home-slider .home .tools-parts,
        .tools_slider .home-slider .home .tools-parts1 {
          display: none;
        }
        .tools_slider .home-slider .slider-contain {
          margin-left: 0;
          -webkit-box-pack: center !important;
          -ms-flex-pack: center !important;
          justify-content: center !important;
        }
        .tools-service .service-block + .service-block {
          margin-top: 0;
        }
        .tools-service .service-block + .service-block + .service-block {
          margin-top: 20px;
        }
        .tools-grey .product-box .img-wrapper {
          padding-bottom: 35px;
        }
        .tools-grey .product-box .cart-info {
          bottom: 10px;
        }
        .tools-grey .product-box .cart-info button {
          font-size: 0;
          width: unset;
          background-color: #eef0f1;
        }
        .tools-grey .product-box .cart-info button i {
          display: block;
        }
        .tools-grey .product-box .cart-info button:hover i {
          color: #ffffff;
        }
        .tools-grey .product-box .cart-info .mobile-quick-view {
          display: block;
          margin-left: 5px;
        }
        .tools-grey .product-box .quick-view-part {
          display: none;
        }
        .tools-grey .product-box:hover .img-wrapper .front img {
          opacity: 1;
        }
        .tools-grey .product-box:hover .ribbon {
          display: block;
        }
        .tools-parallax-product .tools-grey .slick-prev,
        .tools-parallax-product .tools-grey .slick-next {
          display: none !important;
        }
        .tools-parallax-product.full-banner {
          padding-top: 60px;
          padding-bottom: 60px;
        }
        .pet-parallax .pet-decor {
          display: none;
        }
        .j-box .product-box .cart-info {
          bottom: 0;
          position: relative;
          opacity: 1;
        }
        .j-box .product-box .cart-info a i {
          padding: 10px;
        }
        .pets-box .product-box .img-wrapper .cart-info {
          -webkit-transform: none;
          transform: none;
        }
        .pets-box .product-box .img-wrapper .cart-info i {
          font-size: 16px;
        }
        .layout3-menu {
          max-width: 100%;
        }
        .layout3-menu .main-menu .brand-logo img {
          height: 25px;
        }
        .game-product .product-box .cart-info {
          right: 5px;
        }
        .game-product .product-box .cart-info a i {
          margin: 7px 0;
          padding: 7px;
          font-size: 14px;
        }
        .game-product .product-box .add-button {
          bottom: 0;
        }
        .game-product .product-box .img-wrapper {
          padding-bottom: 37px;
        }
        .game-product .product-box:hover .cart-info a:nth-child(1) i {
          -webkit-animation: none;
          animation: none;
        }
        .game-product .theme-tab .tab-title .current a,
        .game-product .theme-tab .tab-title2 .current a {
          border-bottom: none;
          padding-bottom: 0;
        }
        .gym-product .product-box .img-wrapper .cart-info {
          display: block;
          height: unset;
          top: unset;
          left: unset;
          right: 0;
        }
        .gym-product .product-box .img-wrapper .cart-info i {
          background: none;
          color: #6f6f6f;
        }
        .gym-product .product-box .img-wrapper .cart-info button:hover i,
        .gym-product .product-box .img-wrapper .cart-info a:hover i {
          color: var(--theme-deafult);
        }
        .gym-product .product-box:hover .img-wrapper .cart-info button {
          -webkit-animation: none;
          animation: none;
        }
        .gym-product
          .product-box:hover
          .img-wrapper
          .cart-info
          a:nth-child(2)
          i {
          -webkit-animation: none;
          animation: none;
        }
        .gym-product
          .product-box:hover
          .img-wrapper
          .cart-info
          a:nth-child(3)
          i {
          -webkit-animation: none;
          animation: none;
        }
        .gym-product
          .product-box:hover
          .img-wrapper
          .cart-info
          a:nth-child(4)
          i {
          -webkit-animation: none;
          animation: none;
        }
        .game-banner .banner-timer .banner-text {
          background-color: transparent;
        }
        .detail-cannabis .detail_section {
          margin-top: 30px;
          text-align: center;
        }
        .detail-cannabis .row > div:first-child .detail_section {
          margin-top: 0;
        }
        .border-box.tools-grey .product-box .img-wrapper {
          padding-bottom: 0;
        }
        .border-box.tools-grey .product-box .cart-info a,
        .border-box.tools-grey .product-box .cart-info button {
          background-color: #ffffff;
        }
        .service_slide .home-slider .slider-contain {
          height: 60vh;
        }
        .portfolio-section.metro-section .product-box .cart-wrap a i {
          opacity: 1;
          font-size: 16px;
          padding: 5px;
        }
        .portfolio-section.metro-section .product-box .cart-wrap button i {
          font-size: 16px;
          padding: 5px;
        }
        .portfolio-section.metro-section .product-box .product-detail {
          opacity: 1;
          bottom: 15px;
          background-color: rgba(255, 255, 255, 0.5);
        }
        .portfolio-section.metro-section .product-box .product-detail h6 {
          color: #000000;
        }
        .portfolio-section.metro-section .product-box:hover .product-detail {
          opacity: 1;
        }
        .portfolio-section.metro-section
          .product-box:hover
          .cart-wrap
          a:nth-child(2)
          i,
        .portfolio-section.metro-section
          .product-box:hover
          .cart-wrap
          a:nth-child(3)
          i,
        .portfolio-section.metro-section
          .product-box:hover
          .cart-wrap
          a:nth-child(4)
          i {
          -webkit-animation: none;
          animation: none;
        }
        header.header-metro .metro .layout3-menu {
          max-width: 540px;
        }
        header.left-header .top-header .header-dropdown li {
          padding: 15px;
        }
        header.left-header .main-menu .menu-right .icon-nav li {
          padding-left: 15px;
        }
        footer.footer-5 .sub-footer > .container {
          border-top: none;
        }
        footer.footer-5 .dark-layout .footer-title {
          border-bottom: 1px solid #ffffff;
        }
        footer.footer-black .upside .small-section .center-thing {
          display: inline-block;
          width: 100%;
        }
        footer.footer-black .footer-title h4 {
          color: #ffffff;
        }
        footer.footer-black.footer-light .subscribe {
          height: auto;
          margin-bottom: 10px;
        }
        footer.footer-black.footer-light .subscribe-form {
          height: auto;
        }
        footer.footer-black .below-section {
          padding-top: 85px;
        }
        section,
        .section-t-space {
          padding-top: 40px;
        }
        .section-b-space {
          padding-bottom: 40px;
        }
        .portfolio-padding {
          padding-bottom: 10px;
        }
        .product-full-tab {
          padding-top: 30px !important;
        }
        .small-section {
          padding: 20px 0;
        }
        .theme-tab .tab-title a,
        .theme-tab .tab-title2 a {
          text-transform: capitalize;
        }
        .about-cls .service.border-section {
          border-bottom: none;
        }
        .about-cls .service.small-section {
          padding-bottom: 0;
        }
        .service-block .media {
          display: block;
          text-align: center;
          padding-top: 0;
          padding-bottom: 0;
        }
        .service-block svg {
          margin-right: 0;
        }
        .service-block + .service-block {
          border-left: 0;
          margin-top: 20px;
        }
        .service-block:last-child .media .media-body p {
          margin-bottom: 5px;
        }
        .partition2 {
          margin-bottom: -25px;
        }
        .partition2 > div {
          margin-bottom: 25px;
        }
        .partition3 > div + div {
          margin-top: 30px;
        }
        .partition4 > div + div {
          margin-top: 30px;
        }
        .center-slider {
          border-left: none;
          border-right: none;
        }
        .about-text p {
          line-height: 25px;
        }
        .banner-timer {
          padding-top: 5px;
          padding-bottom: 5px;
        }
        .banner-timer .banner-text {
          padding-top: 15px;
          padding-bottom: 15px;
          background-color: rgba(255, 255, 255, 0.65);
        }
        .banner-timer .banner-text h2 {
          font-size: 15px;
        }
        .banner-timer .timer-box {
          text-align: center;
        }
        .banner-timer .timer {
          margin-top: 5px;
          padding-top: 6px;
          padding-bottom: 6px;
          padding-left: 20px;
        }
        .banner-timer .timer p {
          font-size: 14px;
        }
        .banner-timer .timer span {
          width: 40px;
        }
        .banner-timer .timer span .padding-l {
          padding-left: 10px;
        }
        .darken-layout .footer-title,
        .dark-layout .footer-title {
          border-bottom: 1px solid #525252;
        }
        .darken-layout .subscribe-wrapper,
        .dark-layout .subscribe-wrapper {
          padding-bottom: 10px;
        }
        .footer-title {
          margin-top: 10px;
          text-align: left;
          border-bottom: 1px solid #dddddd;
          position: relative;
        }
        .footer-title.footer-mobile-title {
          margin-top: 0;
        }
        .footer-title h4 {
          text-transform: uppercase;
          font-weight: 700;
          cursor: pointer;
        }
        .footer-title.active .according-menu {
          font: normal normal normal 14px/1 FontAwesome;
        }
        .footer-title.active .according-menu:before {
          content: "\\f106";
          position: absolute;
          right: 2px;
          top: 2px;
        }
        .footer-title .according-menu {
          font: normal normal normal 14px/1 FontAwesome;
        }
        .footer-title .according-menu:before {
          content: "\\f107";
          position: absolute;
          right: 2px;
          top: 2px;
        }
        .banner-slider .home-banner > div img {
          margin-top: 30px;
        }
        .banner-slider .home-banner > div:last-child img {
          margin-top: 30px;
        }
        .lookbook .row > div:last-child .lookbook-block {
          margin-top: 30px;
        }
        .lookbook-section
          .row
          > div:first-child
          .lookbook-img
          > div:last-child {
          margin-bottom: 25px;
        }
        .lookbook-section .lookbook-img > div:last-child img {
          margin-top: 0;
        }
        .full-scroll-footer .sub-footer p {
          padding: 0;
          line-height: 25px;
        }
        .box-layout-body .box-layout {
          margin-top: -40px;
        }
        .layout-20 {
          padding: 15px;
        }
        .home-slider .slider-details {
          top: 15%;
          right: 8%;
          padding: 0px;
          width: 225px !important;
          height: 225px !important;
        }
        .home-slider .slider-details h1 {
          font-size: 25px;
          margin: 5px 0;
        }
        .home-slider .slider-details h2 {
          font-size: 20px;
        }
        .home-slider .slider-details h3 {
          font-size: 18px;
        }
        .home-slider .slider-details h3:before,
        .home-slider .slider-details h3:after {
          width: 8px;
          height: 8px;
          top: 5px;
        }
        .home-slider .slider-details h4 {
          font-size: 16px;
        }
        .home-slider .slider-details .btn-white {
          padding: 5px 10px;
          font-size: 14px;
        }
        .home-slider.fullpage .slick-dots {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          bottom: 70px;
          top: unset;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
        }
        .home-slider.fullpage .slick-dots li button:before {
          color: #0a0100;
        }
        .footer-contant {
          text-align: left;
        }
        .footer-contant .footer-logo {
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .footer-contant li {
          text-align: left;
        }
        .footer-contant .footer-social ul {
          margin: unset;
        }
        .footer-contant .footer-social ul li {
          padding-right: 25px;
          padding-left: 0;
        }
        .social-white li:first-child {
          padding-left: 0;
        }
        .footer-theme {
          text-align: center;
        }
        .footer-theme .footer-mobile-title {
          display: block !important;
        }
        .footer-theme .col {
          max-width: 100%;
          -ms-flex-preferred-size: unset;
          flex-basis: unset;
        }
        .footer-theme .footer-social {
          margin-bottom: 15px;
        }
        .footer-theme .sub-title li {
          padding-top: 7px;
        }
        .footer-theme .sub-title .contact-list i {
          position: relative;
          top: 0;
          margin-right: 10px;
        }
        .footer-theme .sub-title .contact-list li {
          padding-left: 0;
        }
        .footer-social ul {
          margin: 0 auto;
        }
        .footer-social li {
          padding: 0 15px;
        }
        .footer-end {
          text-align: center;
        }
        .sub-footer .payment-card-bottom {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding-bottom: 25px;
        }
        .subscribe-wrapper {
          margin: 10px 0 0 0;
          -webkit-box-ordinal-group: 1;
          -ms-flex-order: 0;
          order: 0;
        }
        .footer-theme2 p {
          margin-bottom: 10px;
        }
        .footer-theme2 .footer-mobile-title {
          display: block !important;
        }
        .footer-theme2 .p-set {
          padding: 0 15px !important;
        }
        .footer-theme2 .col {
          padding: 0;
        }
        .footer-theme2 .footer-link li {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          padding-top: 10px;
        }
        .footer-theme2 .footer-link h4 {
          padding-bottom: 10px;
        }
        .footer-theme2 .contact-details li {
          padding-left: 0;
          padding-top: 10px;
        }
        .footer-theme2 .footer-link-b li {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          padding-top: 10px;
        }
        .footer-theme2 .footer-link-b h4 {
          margin-top: 0;
          padding-bottom: 10px;
        }
        .footer-theme2.section-light .footer-block h4 {
          padding-bottom: 10px;
        }
        .footer-theme2.section-light .footer-block .subscribe-white {
          padding: 40px 65px;
        }
        .footer-theme2.section-light .footer-block .subscribe-white h2 {
          margin-bottom: 20px;
        }
        .footer-theme2.section-light
          .footer-block
          .subscribe-white
          .form-group {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .footer-theme2.section-light
          .footer-block
          .subscribe-white
          .form-group
          .btn-solid,
        .footer-theme2.section-light
          .footer-block
          .subscribe-white
          .form-group
          .btn-outline {
          margin-top: 0;
        }
        .footer-theme2 .subscribe-block h2 {
          margin-bottom: 20px;
        }
        .footer-theme2 h4 {
          padding-bottom: 10px;
        }
        .darken-layout .footer-theme .footer-mobile-title h4 {
          color: #ffffff;
        }
        .dark-layout .small-section {
          padding-bottom: 40px;
        }
        .dark-layout section {
          padding-top: 0;
        }
        .dark-layout .section-b-space {
          border: none;
          padding-bottom: 0;
        }
        .dark-layout .subscribe-wrapper {
          -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
        }
        .dark-layout .footer-theme2 .subscribe-wrapper .subscribe-block {
          padding: 10px 60px;
        }
        .dark-layout .footer-theme2 .subscribe-wrapper .subscribe-block h2 {
          display: none;
        }
        .dark-layout
          .footer-theme2
          .subscribe-wrapper
          .subscribe-block
          .form-group {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .dark-layout
          .footer-theme2
          .subscribe-wrapper
          .subscribe-block
          .form-group
          .btn-solid,
        .dark-layout
          .footer-theme2
          .subscribe-wrapper
          .subscribe-block
          .form-group
          .btn-outline {
          margin-top: 0;
        }
        .social-white {
          margin-bottom: 10px;
        }
        .category-border div .category-banner .category-box h2 {
          font-size: 25px;
        }
        .pet-layout-footer .footer-theme2 .footer-link .social-white {
          margin-top: 30px;
          margin-bottom: 20px;
        }
        .pet-layout-footer .footer-theme2 .footer-link .social-white li {
          display: unset;
        }
        .box-layout .small-section {
          padding-top: 0;
        }
        .white-layout .footer-theme2 > div:nth-child(2) {
          -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
        }
        .white-layout .footer-theme2.footer-border {
          padding: 0;
          border: none;
        }
        .white-layout .footer-theme2 .footer-block .footer-container {
          max-width: 540px;
          width: 100%;
        }
        .white-layout
          .footer-theme2
          .footer-block
          .footer-container
          .footer-mobile-title {
          margin-top: 20px;
        }
        .white-layout .footer-theme2 .footer-block .subscribe-white h2 {
          display: none;
        }
        .category-bg {
          padding: 30px 40px;
        }
        .category-bg .image-block.even:after {
          bottom: 85%;
        }
        .category-bg .image-block:after {
          width: 25px;
          margin-top: -25px;
        }
        .category-bg .image-block:hover:after {
          height: 50px;
        }
        .category-bg .contain-block h2 {
          font-size: 18px;
          margin-top: 8px;
        }
        .category-bg .contain-block h6 {
          letter-spacing: 0.1em;
          font-size: 12px;
        }
        .category-bg .contain-block:after {
          width: 25px;
        }
        .category-bg .contain-block.even:after {
          top: 87%;
        }
        .category-bg .contain-block .category-btn {
          margin-bottom: 10px;
          margin-top: 10px;
          letter-spacing: 0.1em;
          padding: 5px 15px;
        }
        .category-bg .contain-block:after {
          bottom: 87%;
        }
        .category-bg .contain-block:hover:after {
          height: 50px;
        }
        .layout9-box .product-box .img-block {
          min-height: unset;
        }
        .product-box .cart-detail,
        .product-wrap .cart-detail {
          top: 5px;
          right: 10px;
        }
        .product-box:hover .product-info .add-btn,
        .product-wrap:hover .product-info .add-btn {
          -webkit-animation: none;
          animation: none;
        }
        .product-box .img-block {
          min-height: 350px;
        }
        .product-box .cart-info,
        .product-box .cart-detail {
          opacity: 1;
        }
        .product-box .img-wrapper .cart-box {
          opacity: 1;
        }
        .product-box:hover .img-wrapper .cart-box {
          -webkit-animation: none;
          animation: none;
        }
        .product-box:hover .cart-info button,
        .product-box:hover .cart-detail button {
          -webkit-animation: none;
          animation: none;
        }
        .product-box:hover .cart-info a i,
        .product-box:hover .cart-detail a i {
          -webkit-animation: none;
          animation: none;
        }
        .product-box:hover .cart-info a:nth-child(2) i,
        .product-box:hover .cart-detail a:nth-child(2) i {
          -webkit-animation: none;
          animation: none;
        }
        .product-box:hover .cart-info a:nth-child(3) i,
        .product-box:hover .cart-detail a:nth-child(3) i {
          -webkit-animation: none;
          animation: none;
        }
        .product-box:hover .cart-info a:nth-child(4) i,
        .product-box:hover .cart-detail a:nth-child(4) i {
          -webkit-animation: none;
          animation: none;
        }
        .product-box .product-info .add-btn,
        .product-wrap .product-info .add-btn {
          opacity: 1;
        }
        .theme-tab .tab-title2 {
          font-size: 20px;
        }
        .theme-tab .tab-title2 li {
          padding-left: 15px;
          padding-right: 15px;
        }
        .theme-tab .tab-title2:after {
          top: 15px;
        }
        .multiple-slider > div:nth-child(-n + 3) {
          margin-bottom: 30px;
        }
        .full-banner {
          padding-top: 120px;
          padding-bottom: 120px;
        }
        .full-banner.parallax-layout {
          padding-top: 120px;
          padding-bottom: 120px;
        }
        .full-banner.feature-banner .banner-decor .left-img,
        .full-banner.feature-banner .banner-decor .right-img {
          display: none;
        }
        .full-banner.feature-banner h2 {
          margin-bottom: 35px;
        }
        .full-banner .banner-contain h2 {
          font-size: 75px;
        }
        .full-banner .santa-img img {
          width: 125px;
        }
        .pet-parallax .full-banner {
          padding-top: 120px;
          padding-bottom: 120px;
        }
        .collection-banner .contain-banner {
          padding-left: 60px;
          padding-right: 60px;
        }
        .collection-banner .contain-banner.banner-3 {
          padding-left: 40px;
          padding-right: 40px;
        }
        .collection-banner .contain-banner.banner-3 h2 {
          font-size: 20px;
        }
        .collection-banner .contain-banner.banner-3 h4 {
          font-size: 18px;
        }
        .collection-banner .contain-banner.banner-4 {
          padding-left: 45px;
          padding-right: 45px;
        }
        .collection-banner .contain-banner.banner-4 h2 {
          font-size: 18px;
        }
        .collection-banner .contain-banner h2 {
          font-size: 35px;
        }
        .home-slider .home {
          height: 60vh;
        }
        .home-slider .slider-contain {
          height: 60vh;
        }
        .home-slider .slider-contain h1 {
          font-size: 35px;
          margin-top: 5px;
        }
        .home-slider .slider-contain .btn-solid,
        .home-slider .slider-contain .btn-outline {
          margin-top: 10px;
          padding: 10px 25px;
        }
        .home-slider:hover .slick-next {
          right: 80px;
        }
        .home-slider:hover .slick-prev {
          left: 80px;
        }
        .height-85 .home-slider .home {
          height: 65vh;
        }
        .height-85 .home-slider .slider-contain {
          height: 65vh;
        }
        .background .col {
          -ms-flex-preferred-size: unset;
          flex-basis: unset;
        }
        .background .contain-bg {
          margin: 10px 0;
        }
        .full-box .center-slider .offer-slider {
          text-align: center;
        }
        .full-box .center-slider .offer-slider .product-box {
          border: none;
          display: inline-block;
        }
        .full-box .center-slider .offer-slider .product-box .img-wrapper {
          text-align: center;
        }
        .full-box .center-slider .offer-slider .product-box .img-wrapper img {
          height: 200px;
        }
        .full-box .center-slider .offer-slider .product-box:hover {
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .full-box .theme-card .offer-slider .sec-1 {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .full-box
          .theme-card
          .offer-slider
          .sec-1
          .product-box2
          .media
          .media-body
          .color-variant
          li {
          height: 18px;
          width: 18px;
          padding-right: 3px;
        }
        .full-box
          .theme-card
          .offer-slider
          .sec-1
          .product-box2
          + .product-box2 {
          border-top: none;
        }
        .theme-tab .tab-title li,
        .theme-tab .tab-title2 li {
          padding-left: 5px;
          padding-right: 5px;
        }
        .theme-tab .tab-content .product-tab .tab-box .product-box2 img {
          height: 150px;
          padding: 5px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .age-content
          h2 {
          margin-bottom: 20px;
          padding-bottom: 20px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .age-content
          h4 {
          margin-bottom: 20px;
          font-size: 15px;
        }
        .filter-main-btn span {
          font-size: 16px;
        }
        .tap-top {
          bottom: 70px;
          right: 20px;
        }
        .footer-theme2 .footer-link li,
        .footer-theme2 .footer-link-b li {
          padding-left: 0;
        }
        .product-christmas .product-box .cart-wrap {
          background-color: var(--theme-deafult);
          bottom: 0;
          opacity: 1;
        }
        .blog-detail-page .comment-section li {
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .product-pagination .pagination {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          border-left: 1px solid #dddddd;
        }
        .testimonial {
          background-color: #f7f7f7;
        }
        .testimonial .testimonial-slider .media .media-body {
          padding: 30px 30px 30px 30px;
        }
        .about-page {
          text-align: center;
        }
        .about-page p {
          line-height: 1.5;
        }
        .team h2 {
          font-size: 25px;
        }
        .layout2-logo {
          padding-right: 70px;
        }
        .faq-section .theme-accordion .card .card-body p {
          line-height: 1.5 !important;
        }
        .faq-section .theme-accordion .card .card-header button {
          font-size: 14px !important;
          white-space: normal;
          width: 100%;
          padding: 16px 30px 16px 18px !important;
        }
        .product-wrapper-grid.list-view .product-box {
          display: block;
          border: 1px solid #eee;
          padding: 15px;
        }
        .product-wrapper-grid.list-view .product-box .img-wrapper,
        .product-wrapper-grid.list-view .product-box .img-block {
          margin: 0 auto 15px;
        }
        .product-wrapper-grid.list-view .product-box .product-detail {
          padding-left: 0;
        }
        .register-page .theme-card {
          padding: 25px;
        }
        .register-page .theme-card .theme-form input {
          margin-bottom: 25px;
          padding: 13px 18px;
        }
        .collection .partition-collection > div:nth-last-child(1),
        .collection .partition-collection > div:nth-last-child(2),
        .collection .partition-collection > div:nth-last-child(3) {
          margin-top: 30px;
        }
        .collection-product-wrapper
          .product-pagination
          .pagination
          .page-item
          a {
          padding: 15px 18px;
        }
        .collection-product-wrapper
          .product-pagination
          .product-search-count-bottom {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding-right: 0;
        }
        .collection-product-wrapper
          .product-pagination
          .product-search-count-bottom
          h5 {
          padding: 10px 0;
        }
        .collection-product-wrapper
          .product-pagination
          .theme-paggination-block
          nav {
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
        }
        .cart-section tbody tr td a,
        .wishlist-section tbody tr td a {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .cart-section .cart-table thead th:nth-last-child(-n + 4) {
          display: none;
        }
        .cart-section tbody tr td:nth-last-child(-n + 4) {
          display: none;
        }
        .cart-section tbody tr td .mobile-cart-content {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .wishlist-section .cart-table thead th:nth-last-child(-n + 3) {
          display: none;
        }
        .wishlist-section tbody tr td:nth-last-child(-n + 3) {
          display: none;
        }
        .wishlist-section tbody tr td .mobile-cart-content {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .search-product > div:nth-last-child(4) {
          margin-top: 30px;
        }
        .blog-page .order-sec {
          -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
        }
        .blog-page .blog-media:last-child {
          margin-bottom: 30px;
        }
        .blog-page .blog-sidebar ul li {
          display: block;
        }
        .tab-pane iframe {
          width: 100%;
        }
        .product-order .product-order-detail img {
          height: auto;
        }
        .typography_section
          .typography-box
          .typo-content.product-pagination
          .pagination {
          border-left: none;
        }
        .typography_section
          .typography-box
          .typo-content.typo-buttons
          a:last-child {
          margin-top: 5px;
        }
        .loader_skeleton .collection-banner .row > div {
          margin-top: 30px;
        }
        .loader_skeleton .collection-banner .row > div:first-child {
          margin-top: 0;
        }
        .loader_skeleton
          .banner-slider
          .home-banner
          > div:first-child
          .home-slider {
          margin-top: 25px;
        }
        .loader_skeleton .category-ldr .row .category-block {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 33.33%;
          flex: 0 0 33.33%;
          max-width: 33.33%;
        }
        .loader_skeleton .box-layout .small-section {
          padding-top: 20px;
        }
        .loader_skeleton .center-slider .product-box {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          margin-top: 25px;
          margin-bottom: 25px;
        }
        .loader_skeleton .center-slider .product-box .img-wrapper {
          height: calc(50px + (250 - 50) * ((100vw - 320px) / (1920 - 320)));
          width: calc(120px + (230 - 150) * ((100vw - 320px) / (1920 - 320)));
          margin-right: 15px;
        }
        .loader_skeleton .center-slider .product-box .product-detail {
          -ms-flex-item-align: center !important;
          align-self: center !important;
        }
        .loader_skeleton .center-slider .product-box .product-detail h4,
        .loader_skeleton .center-slider .product-box .product-detail h6 {
          margin-left: unset;
          margin-right: unset;
        }
        .loader_skeleton .service-block h4,
        .loader_skeleton .service-block p {
          margin-left: auto;
          margin-right: auto;
        }
        .dashboard-section .counter-section .row > div {
          margin-bottom: 20px;
        }
        .dashboard-section .counter-section .row > div:last-child {
          margin-bottom: 0;
        }
        .dashboard-section .apexcharts-canvas {
          margin: 0 auto;
        }
        .rtl .service-block svg {
          margin-right: 0;
        }
        .rtl .service-block + .service-block {
          border-right: 0;
        }
        .rtl .service-block .media .media-body h4,
        .rtl .service-block .media .media-body p {
          text-align: center;
        }
        .rtl
          .collection-product-wrapper
          .product-pagination
          .theme-paggination-block
          nav {
          border-right: none;
          border-left: 1px solid #dddddd;
        }
        .rtl
          .collection-product-wrapper
          .product-pagination
          .product-search-count-bottom {
          padding-left: 5px;
          padding-right: 5px;
        }
        .rtl .footer-title.active .according-menu:before {
          right: unset;
          left: 2px;
        }
        .rtl .footer-title .according-menu:before {
          right: unset;
          left: 2px;
        }
        .rtl .footer-end p {
          text-align: center;
        }
        .rtl .sub-footer .payment-card-bottom li {
          padding-left: 7px;
          padding-right: 7px;
        }
        .rtl .footer-theme2.section-light .footer-block h4 {
          text-align: right;
        }
        .rtl .footer-theme2.section-light .footer-block .footer-logo {
          text-align: right;
        }
        .rtl .footer-theme2 .footer-title h4 {
          text-align: right;
        }
        .rtl .footer-contant li {
          text-align: right;
        }
        .rtl .footer-contant .footer-social ul li {
          padding-right: 0;
          padding-left: 25px;
        }
        .rtl .dark-layout .footer-contant .footer-logo {
          text-align: right;
        }
        .rtl .dark-layout .footer-contant p {
          text-align: right;
        }
        .rtl .footer-theme .sub-title .contact-list i {
          margin-right: 0;
          margin-left: 10px;
        }
        .rtl .footer-theme .sub-title .contact-list li {
          padding-right: 0;
        }
        .rtl .layout2-logo {
          padding-left: 70px;
          padding-right: 0;
        }
        .rtl
          .full-box
          .theme-card
          .offer-slider
          .sec-1
          .product-box2
          + .product-box2 {
          border-left: none;
          border-right: none;
        }
        .rtl header.left-header .main-menu .menu-right .icon-nav li {
          padding-right: 15px;
          padding-left: 0;
        }
        .rtl .tools-grey .product-box .cart-info .mobile-quick-view {
          margin-left: 0;
          margin-right: 5px;
        }
        .dark
          .collection-product-wrapper
          .product-pagination
          .theme-paggination-block
          nav {
          border-color: #404040;
        }
        .dark .product-pagination .pagination {
          border-color: #404040;
        }
      }

      @media (max-width: 577px) {
        .container-fluid.custom-container {
          padding-left: 15px;
          padding-right: 15px;
        }
        .detail-cannabis .detail_section > div {
          padding: 30px 25px;
        }
        #fb-root {
          display: none;
        }
        .section-b-space {
          padding-bottom: 30px;
        }
        section,
        .section-t-space {
          padding-top: 30px;
        }
        header.left-header .top-header {
          height: 70px;
        }
        header.left-header .top-header .header-dropdown li {
          padding: 0;
        }
        header.left-header .top-header .header-dropdown .mobile-wishlist img,
        header.left-header .top-header .header-dropdown .mobile-account img {
          display: none;
        }
        header.left-header .top-header .header-dropdown .mobile-wishlist i,
        header.left-header .top-header .header-dropdown .mobile-account i {
          display: block;
        }
        header.left-header .main-menu .menu-left .mobile-logo {
          position: absolute;
          padding: 0 !important;
          -webkit-transform: unset;
          transform: unset;
          right: unset;
          left: 15px;
          margin-right: 0;
          top: 16px;
        }
        header.left-header .main-menu .menu-left .navbar {
          position: absolute;
          right: 15px;
          padding: 0 !important;
          top: 22px;
        }
        header.video-header .top-header .header-dropdown li {
          padding: 0;
        }
        header.header-tools .top-header .header-dropdown li {
          padding: 0;
        }
        .demo-right a {
          right: 14px;
          width: 30px;
          height: 44px;
          line-height: 15px;
          letter-spacing: 2px;
          font-size: 12px;
          padding: 8px 4px 10px;
        }
        .offer-box {
          display: none;
        }
        .advertise-section .full-banner {
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .advertise-section .full-banner .banner-contain {
          padding: 30px 10px;
        }
        .advertise-section .full-banner .banner-contain h2 {
          font-size: 40px;
          margin-bottom: 0;
          margin-top: -7px;
        }
        .advertise-section .full-banner .banner-contain h3 {
          font-size: 20px;
          margin-bottom: 3px;
        }
        .advertise-section .full-banner .banner-contain h4 {
          font-size: 16px;
          letter-spacing: 0.03em;
        }
        .setting-sidebar {
          width: 35px;
          height: 35px;
        }
        .setting-sidebar i {
          font-size: 19px;
        }
        .dark-light {
          width: 35px;
          height: 35px;
        }
        .portfolio-padding {
          padding-bottom: 15px;
        }
        .portfolio-section .isotopeSelector {
          margin-bottom: 15px;
        }
        .portfolio-section .filter-button {
          padding: 0 15px;
          font-size: 16px;
          line-height: 30px;
        }
        .service_slide .home-slider .slider-contain {
          height: 58vh;
        }
        .portfolio-section.metro-section .product-box .cart-wrap a i {
          font-size: 18px;
          padding: 7px;
        }
        .portfolio-section.metro-section .product-box .cart-wrap button i {
          font-size: 18px;
          padding: 7px;
        }
        .filter-section .filter-container ul.filter > li {
          padding: 0 10px;
        }
        .filter-section .filter-container ul.filter > li > a {
          font-size: 16px;
          line-height: 30px;
        }
        .tab-left .theme-tab .left-side .left-tab-title {
          margin-bottom: 15px;
        }
        h2 {
          font-size: 24px;
        }
        .tools-service.absolute-banner .absolute-bg {
          padding-bottom: 20px;
          -webkit-box-shadow: 0 0 8px 0 #ddd;
          box-shadow: 0 0 8px 0 #ddd;
        }
        .tools-service .service-block + .service-block {
          margin-top: 20px;
        }
        .tools-service .service-block svg,
        .tools-service .service-block1 svg {
          margin-bottom: 7px;
        }
        .top-header .header-dropdown li i {
          padding-right: 0;
          font-size: 18px;
        }
        .tools-parallax-product.full-banner {
          padding-top: 45px;
          padding-bottom: 45px;
        }
        header.header-gym {
          position: relative;
          background-color: #000000;
        }
        header.header-gym .main-menu {
          padding: 0;
          z-index: 9;
        }
        header.header-gym .main-menu .brand-logo {
          left: 0;
          -webkit-transform: unset;
          transform: unset;
        }
        header.header-gym .top-header .header-dropdown li a i {
          padding-right: 0;
        }
        header.header-6 .main-menu .brand-logo {
          position: relative;
          left: 0;
          -webkit-transform: none;
          transform: none;
        }
        header.header-7 {
          position: relative;
          z-index: unset;
          background-color: #333333;
        }
        header.header-7 .main-menu .menu-left .navbar {
          padding: 15px 45px 15px 0 !important;
        }
        header.header-7 .main-nav-center .toggle-nav {
          top: -70px;
        }
        header.header-7 .game-layout {
          background-color: #333333;
        }
        header.green-gradient .top-header .header-dropdown li {
          padding: 0;
        }
        header.header-christmas .main-menu .brand-logo {
          position: relative;
        }
        .gym-banner .collection-banner .contain-banner {
          padding-left: 15px;
          padding-right: 15px;
        }
        .gym-banner .collection-banner .contain-banner h2 {
          font-size: 25px;
          margin-bottom: -3px;
        }
        .banner-furniture.gym-banner {
          padding-left: 0;
          padding-right: 0;
        }
        .gym-product .part-cls {
          margin-top: -20px;
        }
        .gym-product .part-cls > div:nth-last-child(-n + 3) .product-box {
          margin-top: 20px;
        }
        .gym-product .partition-cls,
        .gym-product .part-cls {
          margin-left: -10px;
          margin-right: -10px;
        }
        .gym-product .partition-cls > div,
        .gym-product .part-cls > div {
          padding-left: 10px;
          padding-right: 10px;
        }
        .gym-product .partition-cls > div .product-box,
        .gym-product .part-cls > div .product-box {
          margin-top: 20px;
        }
        .gym-product .product-box:hover {
          -webkit-transform: unset;
          transform: unset;
        }
        .layout3-menu .main-menu .menu-left {
          width: calc(100vw - 32px);
        }
        .layout3-menu .main-menu .menu-left .main-menu-right .toggle-nav {
          right: 15px;
        }
        .layout3-menu
          .main-menu
          .menu-left
          .main-menu-right
          .toggle-nav
          .sidebar-name {
          display: none;
        }
        .layout3-menu .main-menu > div:nth-child(2) {
          position: absolute;
          left: 54%;
          right: 50%;
          -webkit-transform: translate(-50%, 0);
          transform: translate(-50%, 0);
          top: 0;
        }
        .layout3-menu .main-menu > div:nth-child(3) {
          height: 0;
        }
        .layout3-menu .brand-logo {
          left: 35%;
        }
        .search-overlay > div .closebtn {
          top: 15px;
          right: 30px;
        }
        .btn-solid,
        .btn-outline {
          padding: 7px 15px;
        }
        .product-box .product-detail .color-variant,
        .product-box .product-info .color-variant,
        .product-wrap .product-detail .color-variant,
        .product-wrap .product-info .color-variant {
          padding-top: 10px;
        }
        footer {
          margin-bottom: 60px;
        }
        footer .btn-solid {
          padding: 13px 29px;
        }
        footer p {
          line-height: 20px;
        }
        footer.footer-black .below-section {
          padding-top: 75px;
        }
        footer.footer-black.footer-light .subscribe h4 {
          margin-bottom: 0;
        }
        .partition1 {
          margin-bottom: -15px;
        }
        .partition1 > div {
          margin-bottom: 15px;
        }
        .theme-modal .modal-dialog .quick-view-modal .product-right {
          margin: 15px 0 10px 0;
        }
        .theme-modal .modal-dialog .quick-view-modal .product-right h2 {
          font-size: 18px;
          margin-bottom: 10px;
        }
        .theme-modal .modal-dialog .quick-view-modal .product-right h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }
        .theme-modal
          .modal-dialog
          .quick-view-modal
          .product-right
          .color-variant
          li {
          height: 25px;
          width: 25px;
        }
        .theme-modal
          .modal-dialog
          .quick-view-modal
          .product-right
          .border-product {
          padding-top: 10px;
          padding-bottom: 15px;
        }
        .theme-modal .modal-dialog .quick-view-modal .product-right .size-box {
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .theme-modal
          .modal-dialog
          .quick-view-modal
          .product-right
          .product-description
          .qty-box {
          margin-top: 5px;
        }
        .theme-modal.cart-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg.addtocart
          .media
          a
          img {
          max-width: 105px;
          margin-bottom: 10px;
        }
        .theme-modal.cart-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg.addtocart
          .media
          .media-body
          .buttons
          a {
          padding: 4px 5px;
        }
        .theme-modal.exit-modal .media {
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .theme-modal.exit-modal .media img {
          width: 25%;
        }
        .theme-modal.exit-modal .media .media-body h4 {
          font-size: 16px;
          margin-bottom: 0;
        }
        .theme-modal.exit-modal .media .media-body h2 {
          margin-bottom: 2px;
        }
        .theme-modal.exit-modal .media .media-body h5 {
          font-size: 16px;
          line-height: 18px;
        }
        .theme-modal.exit-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg {
          padding: 12px;
        }
        .dark-layout .footer-theme2 .col {
          padding: 0 15px;
        }
        .dark-layout .footer-theme2 .subscribe-wrapper .subscribe-block {
          padding: 10px 20px 20px 10px;
        }
        .white-layout .small-section .footer-theme2 .col {
          padding: 0 15px;
        }
        .footer-theme2 .col {
          padding: 0 15px;
        }
        .footer-theme2 .form-p {
          padding: 0;
        }
        .footer-theme2.footer-border {
          padding: 15px 0;
        }
        .footer-theme2 .subscribe-block {
          padding: 0 75px;
        }
        .footer-theme2 .footer-link h4 {
          padding-bottom: 10px;
        }
        .footer-theme2 .footer-link li {
          padding-right: 20px;
        }
        .footer-theme2 .footer-link-b h4 {
          padding-bottom: 15px;
        }
        .footer-theme2 .footer-link-b li {
          padding-right: 20px;
        }
        .social-white {
          margin-top: 25px;
        }
        .category-border div .category-banner .category-box h2 {
          font-size: 30px;
          padding: 10px 20px;
        }
        .filter-main-btn span {
          font-size: 14px;
        }
        .category-bg .image-block:after {
          display: none;
        }
        .category-bg .contain-block:after {
          display: none;
        }
        .category-bg .order-section div {
          -webkit-box-ordinal-group: 2;
          -ms-flex-order: 1;
          order: 1;
        }
        .category-bg .order-section div:nth-child(2) {
          -webkit-box-ordinal-group: 5;
          -ms-flex-order: 4;
          order: 4;
          margin-bottom: 30px;
        }
        .category-bg .order-section div:nth-child(3) {
          -webkit-box-ordinal-group: 4;
          -ms-flex-order: 3;
          order: 3;
        }
        .category-bg .order-section div:nth-child(4) {
          -webkit-box-ordinal-group: 3;
          -ms-flex-order: 2;
          order: 2;
          margin-bottom: 30px;
        }
        .category-bg .order-section div:nth-child(5) {
          -webkit-box-ordinal-group: 6;
          -ms-flex-order: 5;
          order: 5;
        }
        .category-bg .order-section div:nth-child(6) {
          -webkit-box-ordinal-group: 7;
          -ms-flex-order: 6;
          order: 6;
        }
        .category-bg .contain-block {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .theme-tab .tab-title {
          margin-bottom: 25px;
        }
        .full-banner {
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .full-banner.parallax-layout {
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .full-banner .banner-contain {
          background-color: rgba(255, 255, 255, 0.2);
          padding: 25px;
        }
        .full-banner .banner-contain .btn-solid,
        .full-banner .banner-contain .btn-outline {
          padding: 10px 20px;
        }
        .full-banner.p-left .banner-contain,
        .full-banner.p-right .banner-contain {
          float: none;
        }
        .full-banner .banner-contain h2 {
          font-size: 65px;
        }
        .full-banner .banner-contain h3 {
          font-size: 40px;
        }
        .full-banner .banner-contain h4 {
          font-size: 18px;
          padding-top: 0;
          letter-spacing: 0.3em;
        }
        .full-banner.feature-banner .feature-object {
          text-align: left;
          margin-left: 0;
          margin-bottom: 30px;
        }
        .full-banner.feature-banner .feature-object li .media .media-body {
          text-align: left;
        }
        .full-banner.feature-banner .feature-object li .media img {
          -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
          margin-right: 15px;
          margin-left: 0;
        }
        .pet-parallax .full-banner {
          padding-top: 50px;
          padding-bottom: 50px;
        }
        .home-slider .home {
          height: 58vh;
        }
        .home-slider .slider-contain {
          height: 58vh;
        }
        .home-slider .slider-contain h1 {
          font-size: 30px;
        }
        .home-slider .slider-details {
          top: 18%;
          right: 8%;
          width: 180px !important;
          height: 180px !important;
        }
        .home-slider .slider-details h1 {
          font-size: 22px;
          margin: 5px 0;
        }
        .home-slider .slider-details h2 {
          font-size: 18px;
        }
        .home-slider .slider-details h3 {
          font-size: 16px;
        }
        .home-slider .slider-details h4 {
          display: none;
        }
        .home-slider .slider-details .btn-white {
          padding: 4px 8px;
        }
        .home-slider:hover .slick-next {
          right: 70px;
        }
        .home-slider:hover .slick-prev {
          left: 70px;
        }
        .home-slider:hover .slick-prev,
        .home-slider:hover .slick-next {
          -webkit-transform: scale(1.5);
          transform: scale(1.5);
        }
        .home-slider.fullpage .slick-dots {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          bottom: 60px;
          top: unset;
          left: 50%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
        }
        .home-slider.fullpage .home .slider-contain {
          text-align: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding-left: 0;
        }
        .home-slider.fullpage .home .slider-contain > div {
          background-color: rgba(0, 0, 0, 0.15);
          padding: 30px 50px;
        }
        .home-slider.fullpage .home .slider-contain h1,
        .home-slider.fullpage .home .slider-contain p {
          color: #ffffff;
        }
        .home-slider.fullpage .home .slider-contain h1 {
          font-size: 22px;
        }
        .home-slider.fullpage .home .slider-contain p {
          max-width: 330px;
          font-size: 12px;
        }
        .home-slider.fullpage .home .slider-contain .btn-solid {
          padding: 10px 15px;
        }
        .height-85 .home-slider .home {
          height: 60vh;
        }
        .height-85 .home-slider .slider-contain {
          height: 60vh;
        }
        .background .contain-bg {
          background-color: unset;
          padding-top: 0;
          padding-bottom: 0;
          margin: 10px 0;
        }
        .background .contain-bg:hover {
          background-color: unset;
        }
        .theme-tab .tab-content .product-tab .tab-box {
          -webkit-box-flex: 0;
          -ms-flex: 0 0 100%;
          flex: 0 0 100%;
          max-width: calc(100% - 10px);
        }
        .theme-tab .tab-content .product-tab .tab-box:nth-last-child(-n + 2) {
          margin: 0 5px 10px;
        }
        .theme-tab .tab-content .product-tab .tab-box:nth-last-child(-n + 1) {
          margin: 0 5px 0;
        }
        .theme-tab .tab-content .product-tab .tab-box .product-box2 img {
          height: 150px;
        }
        .theme-tab
          .tab-content
          .product-tab
          .tab-box
          .product-box2
          .media
          .media-body
          a
          h6 {
          margin-right: 10px;
        }
        .theme-tab
          .tab-content
          .product-tab
          .tab-box
          .product-box2
          .media
          .media-body
          .color-variant
          li {
          margin-top: 7px;
          height: 18px;
          width: 18px;
        }
        .alert {
          right: 0 !important;
          left: 0;
          max-width: 90% !important;
        }
        .tap-top {
          width: 35px;
          height: 35px;
          padding: 2px;
          font-size: 19px;
        }
        .layout2-logo {
          padding-right: 0;
        }
        .absolute-banner {
          margin-top: 0;
        }
        .absolute-banner .absolute-bg {
          -webkit-box-shadow: none;
          box-shadow: none;
          padding-bottom: 0;
        }
        .absolute-banner.banner-padding {
          padding-top: 0;
        }
        .box-layout-body .box-layout {
          margin-top: 0;
        }
        .full-scroll-menu .container-fluid {
          padding-left: 15px;
          padding-right: 15px;
        }
        .layout-8 {
          padding: 0 15px;
        }
        .layout-20 {
          padding: 0;
        }
        .addcart_btm_popup {
          display: none !important;
        }
        .color-picker a.handle {
          width: 30px;
          height: 35px;
        }
        .color-picker a.handle i {
          margin-left: 7px;
          font-size: 17px;
        }
        .full-scroll-footer {
          display: none;
        }
        .template-password #container #login {
          margin-bottom: 0;
        }
        .error-section {
          padding: 100px 0;
        }
        .error-section h1 {
          font-size: 100px;
        }
        .error-section h2 {
          margin: 20px 0;
          font-size: 18px;
        }
        .about-page .about-head {
          display: inline-block;
          width: 100%;
          text-align: center;
        }
        .about-page .about-head .theme-breadcrumb .breadcrumb {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding-top: 10px;
          padding-bottom: 0;
        }
        .blog-detail-page .blog-detail .post-social li {
          display: block;
        }
        .blog-detail-page .blog-detail .post-social li + li {
          padding-left: 0;
          margin-left: 0;
          border-left: none;
        }
        .collection .collection-block .collection-content p {
          margin-bottom: 10px;
        }
        .collection .collection-block .collection-content h4,
        .collection .collection-block .collection-content h3 {
          margin-bottom: 5px;
        }
        .collection-product-wrapper .product-wrapper-grid .product-box {
          margin-top: 30px;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .search-count {
          padding: 10px 20px 10px 20px;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .search-count
          h5 {
          font-size: 14px;
          line-height: 20px;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view,
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter {
          width: 100%;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view
          select,
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter
          select {
          padding: 10px 20px 10px 20px;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view:before,
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter:before {
          top: 11px;
        }
        .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view {
          border-right: 1px solid #dddddd !important;
          border-bottom: 1px solid #dddddd;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .search-count {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view {
          border-bottom: 1px solid #dddddd;
          width: 100%;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view
          select {
          border-right: none;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view:before {
          top: 14px;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter {
          width: 100%;
          border-top: none;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter
          select {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-filter:before {
          left: unset;
          right: 35px !important;
          top: 14px;
        }
        .cart-section .cart-buttons > div:last-child {
          padding-right: 15px;
        }
        .cart-section .cart-buttons .btn-solid {
          padding: 7px 8px;
        }
        .wishlist-section .btn-solid {
          padding: 7px 8px;
        }
        .collection-wrapper .order-up {
          -webkit-box-ordinal-group: 0;
          -ms-flex-order: -1;
          order: -1;
        }
        .checkout-page .checkout-form .checkout-details {
          padding: 15px;
        }
        .search-product > div:nth-last-child(5) {
          margin-top: 30px;
        }
        .product-box .img-wrapper .lable-block .lable3 {
          font-size: 12px;
          padding: 13px 8px;
        }
        .product-box .img-block .lable-wrapper .lable1,
        .product-box .img-block .lable-wrapper .lable2 {
          padding: 6px 9px 8px 15px;
          font-size: 12px;
        }
        .tab-product .tab-content.nav-material p,
        .product-full-tab .tab-content.nav-material p {
          padding: 15px 0;
        }
        .tab-product .tab-content.nav-material p {
          line-height: 1.3;
        }
        .slider-right-nav .slick-slide:first-child > div {
          margin-top: 15px;
        }
        .lookbook .lookbook-block .lookbook-dot .dot-showbox {
          width: 90px;
          top: -70px;
        }
        .lookbook .lookbook-block .lookbook-dot .dot-showbox .dot-info h5 {
          line-height: 16px;
        }
        .layout7-product .product-box .details-product {
          padding: 5px;
        }
        .layout7-product .product-box:hover .details-product {
          -webkit-animation: none;
          animation: none;
        }
        .padding-cls {
          padding-left: 15px;
          padding-right: 15px;
        }
        .success-text i {
          font-size: 40px;
        }
        .success-text p {
          font-size: 16px;
          margin-bottom: 10px;
          line-height: 1.2;
        }
        .success-text h2 {
          margin-bottom: 10px;
        }
        .order-success-sec > div {
          margin-top: 15px;
        }
        .delivery-sec {
          padding: 15px;
          margin-top: 15px;
        }
        .delivery-sec h3,
        .delivery-sec h2 {
          font-size: 20px;
        }
        .product-order h3 {
          font-size: 20px;
        }
        .product-order .product-order-detail .order_detail h4,
        .product-order .product-order-detail .order_detail h5 {
          font-size: 14px;
          line-height: 1.2;
        }
        .product-order .total-sec ul li {
          font-size: 16px;
        }
        .product-order .final-total h3 {
          font-size: 16px;
        }
        .beauty-about .service .service-block1 {
          margin-bottom: 20px;
        }
        .beauty-about .service .service-block1:last-child {
          margin-bottom: 0;
        }
        .main-menu .menu-left .navbar i {
          font-size: 24px;
        }
        .typography_section
          .typography-box
          .typo-content.typo-buttons
          a:last-child {
          margin-top: 0;
        }
        .typography_section
          .typography-box
          .typo-content.typo-buttons
          .btn-solid.btn-sm {
          padding: 3px 12px;
        }
        .bundle .bundle_img .img-box img {
          max-width: 70px;
        }
        .bundle .bundle_detail .theme_checkbox {
          padding: 0;
        }
        .vendor-cover .bg-size {
          height: 250px;
        }
        .vendor-profile {
          margin-top: -50px;
        }
        .start-selling form .row > div:nth-child(2) {
          margin-top: 15px;
        }
        .become-vendor .step-bg .step-box .steps {
          margin: 0 auto 15px auto;
        }
        .bg-title .theme-tab .bg-title-part {
          display: block;
          text-align: center;
        }
        .bg-title .theme-tab .bg-title-part .tab-title {
          margin-left: unset;
          text-align: center;
        }
        .bg-title .theme-tab .bg-title-part .tab-title li {
          padding-left: 5px;
          padding-right: 5px;
        }
        .loader_skeleton header.header-gym {
          top: 0;
          background-color: black;
        }
        .loader_skeleton .header-dropdown {
          display: none;
        }
        .layout-8 .loader_skeleton {
          padding: 0 0;
        }
        .rtl .breadcrumb-section .page-title h2 {
          text-align: center;
        }
        .rtl .blog-detail-page .blog-detail .post-social li + li {
          padding-right: 0;
          margin-right: 0;
          border-right: none;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter {
          border-right: 1px solid #dddddd;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view
          select,
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-filter
          select {
          padding: 10px 34px 10px 34px;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view {
          border-left: none;
        }
        .rtl
          .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .product-page-per-view:before {
          left: 25px;
        }
        .rtl .home-slider .slick-next,
        .rtl .center-slider .slick-next {
          right: unset;
          left: 1px;
        }
        .rtl .home-slider .slick-prev,
        .rtl .center-slider .slick-prev {
          left: unset;
          right: 1px;
        }
        .rtl .home-slider:hover .slick-next,
        .rtl .center-slider:hover .slick-next {
          right: unset;
          left: 30px;
        }
        .rtl .home-slider:hover .slick-prev,
        .rtl .center-slider:hover .slick-prev {
          left: unset;
          right: 30px;
        }
        .rtl .layout2-logo {
          padding-left: 0;
        }
        .rtl
          .main-menu
          .menu-right
          .icon-nav
          .mobile-cart
          .show-div.shopping-cart {
          left: unset !important;
          right: -118px !important;
        }
        .rtl .main-menu .menu-right .icon-nav .onhover-div .show-div.setting {
          right: unset;
          left: 0 !important;
        }
        .rtl .layout3-menu .main-menu .menu-left .main-menu-right .toggle-nav {
          right: unset;
          left: 15px;
        }
        .rtl .layout3-menu .brand-logo {
          -webkit-transform: translateX(-15%);
          transform: translateX(-15%);
        }
        .rtl .top-header .header-dropdown li i {
          padding-left: 0;
        }
        .rtl .top-header .header-dropdown .mobile-account .onhover-show-div {
          right: unset;
          left: 0;
        }
        .rtl .bg-title .theme-tab .bg-title-part .title-border {
          text-align: center;
        }
        .rtl .bg-title .theme-tab .bg-title-part .tab-title {
          margin-right: auto;
          text-align: center;
          margin-left: auto;
        }
        .rtl .bg-title .theme-tab .bg-title-part .tab-title li {
          padding-left: 5px;
          padding-right: 5px;
        }
        .dark
          .collection-product-wrapper
          .product-top-filter
          .product-filter-content
          .product-page-per-view {
          border-color: #404040 !important;
        }
        .dark .tools-service.absolute-banner .absolute-bg {
          -webkit-box-shadow: none;
          box-shadow: none;
        }
        .dark .full-banner .banner-contain {
          background-color: rgba(0, 0, 0, 0.2);
        }
      }

      @media (min-width: 577px) {
        .rtl .onhover-dropdown:before {
          right: unset;
          left: 3px;
        }
        .rtl .onhover-dropdown .onhover-show-div {
          right: unset;
          left: 0;
        }
        .rtl .main-menu .menu-left .navbar {
          padding: 40px 0 40px 45px;
        }
        .rtl .main-menu .category-nav-right .navbar {
          padding: 40px 45px 40px 0;
        }
        .rtl .main-menu .menu-right .icon-nav li {
          padding-left: 0;
          padding-right: 20px;
        }
        .rtl .main-menu .menu-right .onhover-div .show-div.shopping-cart,
        .rtl .main-menu .menu-right .onhover-div .show-div.setting {
          left: 0;
          right: unset;
        }
        .rtl
          .main-menu
          .menu-right
          .onhover-div
          .show-div.shopping-cart
          li
          .close-circle {
          right: unset;
          left: 0;
        }
        .rtl
          .main-menu
          .menu-right
          .onhover-div
          .show-div.shopping-cart
          li
          .total
          h5
          span {
          float: left;
        }
      }

      @media (max-width: 575px) {
        .breadcrumb-section .page-title {
          text-align: center;
          margin: 0 auto;
          vertical-align: middle;
          display: unset;
        }
        .breadcrumb-section .page-title h2 {
          margin-top: -2px;
        }
        .breadcrumb-section .breadcrumb {
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          padding: 0;
          line-height: 1;
          margin-top: 10px;
        }
      }

      @media (max-width: 480px) {
        .title1 .title-inner1 {
          margin-bottom: 20px;
        }
        .title1.title5 hr[role="tournament6"] {
          margin: 12px auto 20px auto;
        }
        .title2 .title-inner2 {
          margin-bottom: 20px;
        }
        .title3 .line {
          margin-bottom: 20px;
        }
        .title4 .line {
          margin-bottom: 20px;
        }
        .title-borderless {
          margin-bottom: 20px;
        }
        .service_slide .home-slider .slider-contain {
          height: 55vh;
        }
        .advertise-section .full-banner {
          padding-top: 40px;
          padding-bottom: 40px;
        }
        header.left-header .main-menu .menu-left .mobile-logo {
          top: 22px;
        }
        .gym-banner .collection-banner .contain-banner > div {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 10px;
        }
        .gym-banner .collection-banner .contain-banner h2 {
          font-size: 20px;
          margin-top: 4px;
        }
        .gym-banner .collection-banner .contain-banner h4 {
          font-size: 14px;
        }
        .subscribe-form.classic-form .form-control {
          margin-left: 0;
        }
        .product-box .img-block {
          min-height: 190px;
        }
        .theme-tab .tab-title li {
          padding-left: 5px;
          padding-right: 5px;
        }
        .theme-tab .tab-title2 {
          margin-bottom: 30px;
          font-size: 18px;
          font-weight: 400;
        }
        .theme-tab .tab-title2 li {
          padding-left: 15px;
          padding-right: 15px;
        }
        .theme-tab .tab-title2:after {
          display: none;
        }
        .blog-details {
          padding-left: 0;
          padding-right: 0;
        }
        .full-banner {
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .full-banner.parallax-layout {
          padding-top: 4px;
          padding-bottom: 40px;
        }
        .full-banner .banner-contain h2 {
          font-size: 60px;
        }
        .full-banner .banner-contain h4 {
          font-size: 18px;
        }
        .full-banner .santa-img {
          bottom: -20px;
          left: 10px;
        }
        .full-banner .santa-img img {
          width: 76px;
        }
        .pet-parallax .full-banner {
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .collection-banner .contain-banner {
          padding-left: 30px;
          padding-right: 30px;
        }
        .collection-banner .contain-banner h2 {
          font-size: 24px;
        }
        .home-slider .home {
          height: 55vh;
        }
        .home-slider .slider-details {
          width: 150px !important;
          height: 150px !important;
        }
        .home-slider .slider-details h1 {
          font-size: 20px;
        }
        .home-slider .slider-details h2 {
          font-size: 16px;
        }
        .home-slider .slider-details h3 {
          font-size: 14px;
        }
        .home-slider .slider-contain {
          height: 55vh;
        }
        .home-slider .slider-contain h1 {
          font-size: 28px;
        }
        .home-slider .slider-contain h4 {
          letter-spacing: 0.1em;
        }
        .home-slider .slider-contain .btn-solid,
        .home-slider .slider-contain .btn-outline {
          margin-top: 5px;
        }
        .home-slider:hover .slick-prev,
        .home-slider:hover .slick-next {
          -webkit-transform: scale(1.2);
          transform: scale(1.2);
        }
        .home-slider:hover .slick-next {
          right: 60px;
        }
        .home-slider:hover .slick-prev {
          left: 60px;
        }
        .height-85 .home-slider .home {
          height: 55vh;
        }
        .height-85 .home-slider .slider-contain {
          height: 55vh;
        }
        .white-layout .footer-theme2 .footer-block .footer-container {
          max-width: 448px;
        }
        .footer-theme2.section-light .footer-block .subscribe-white {
          padding: 30px 30px;
        }
        .footer-theme2.section-light
          .footer-block
          .subscribe-white
          .form-control {
          letter-spacing: 3px;
        }
        .theme-modal .modal-dialog .modal-content .modal-body .modal-bg {
          padding: 35px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .offer-content
          img {
          margin-bottom: 10px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .offer-content
          h2 {
          margin-bottom: 15px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .age-content
          form
          .form-control {
          height: 40px;
          padding: 0;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .age-content
          form
          .btn-solid,
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .age-content
          form
          .btn-outline {
          padding: 8px 15px;
        }
        .theme-modal.cart-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg.addtocart
          .media {
          display: block;
          text-align: center;
        }
        .theme-tab
          .tab-content
          .product-tab
          .tab-box
          .product-box2
          .media
          .media-body
          h4 {
          font-size: 15px;
        }
        .tab-bg,
        .bg-block {
          padding: 35px 25px 30px 25px;
        }
        .setting-box {
          width: 280px;
        }
        .setting-sidebar.open-icon {
          right: 278px;
        }
        .setting-box .setting-contant .setting_buttons {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .setting-box .setting-contant .setting_buttons li {
          width: 40% !important;
        }
        .select_input select {
          padding: 12px 15px;
          margin-bottom: 18px;
        }
        .about-page p {
          line-height: 1.5;
          margin-bottom: 0;
        }
        .testimonial .testimonial-slider .media {
          display: inline-block;
        }
        .testimonial .testimonial-slider .media img {
          margin: 0 auto;
          height: 100px;
          width: 100px;
        }
        .testimonial .testimonial-slider .media .media-body {
          padding: 0;
          text-align: center;
        }
        .blog-detail-page .blog-contact h2 {
          font-size: 30px;
          margin-bottom: 25px;
        }
        .blog-detail-page .blog-contact .theme-form input,
        .blog-detail-page .blog-contact .theme-form textarea {
          padding: 12px 20px;
          margin-bottom: 20px;
        }
        .blog-detail-page .blog-detail h3 {
          font-size: 20px;
          margin-bottom: 15px;
        }
        .blog-detail-page .blog-detail img {
          margin-bottom: 25px;
        }
        .blog-detail-page .blog-advance ul {
          line-height: 1.5;
        }
        .blog-detail-page .blog-advance img {
          margin-bottom: 20px;
          margin-top: 10px;
        }
        .blog-detail-page .blog-advance p {
          line-height: 1.5;
        }
        .blog-detail-page .comment-section li {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .blog-detail-page .comment-section li p {
          line-height: 1.5;
        }
        .blog-detail-page .comment-section li h6 {
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .blog-detail-page .comment-section li h6 span {
          display: inherit;
          margin-left: 0;
        }
        .blog-detail-page .comment-section .media {
          display: inline-block;
          text-align: center;
        }
        .faq-section .theme-accordion .card .card-body p {
          line-height: 1.5 !important;
        }
        .faq-section .theme-accordion .card .card-header button {
          line-height: 1.3;
          padding: 12px 35px 12px 12px !important;
        }
        .faq-section
          .accordion.theme-accordion
          .card
          .card-header
          button:before {
          top: 20px;
        }
        .pwd-page {
          padding: 70px 0;
        }
        .pwd-page h2 {
          font-size: 25px;
          margin-bottom: 15px;
        }
        .login-page .authentication-right h6 {
          margin-bottom: 10px;
        }
        .login-page .theme-card {
          padding: 25px;
        }
        .register-page .theme-card {
          padding: 18px;
        }
        .register-page .theme-card .theme-form input {
          margin-bottom: 20px;
          padding: 12px 15px;
        }
        .search-block .btn-solid {
          padding: 10px 15px;
        }
        .contact-page .map iframe {
          height: 275px;
        }
        .contact-page .theme-form input {
          padding: 12px 15px;
          margin-bottom: 18px;
        }
        .blog-page .blog-media .blog-right h6 {
          margin-bottom: 0;
        }
        .blog-page .blog-media .blog-right p {
          line-height: 1.3;
        }
        .blog-page .blog-media .blog-right h4 {
          margin-bottom: 5px;
        }
        .blog-page .blog-media .blog-right ul {
          margin-bottom: 5px;
        }
        .blog-page .blog-media .blog-right ul li {
          display: block;
        }
        .blog-page .blog-media .blog-right ul li + li {
          padding-left: 0;
          margin-left: 0;
          border-left: none;
        }
        .account-sidebar {
          width: 45%;
        }
        .success-text h2 {
          font-size: 20px;
        }
        .success-text p {
          font-size: 14px;
        }
        .delivery-sec h3,
        .delivery-sec h2 {
          font-size: 18px;
        }
        .typography_section .typography-box .typo-content.typo-buttons a {
          margin: 5px 0;
        }
        .dashboard-section .dashboard-box .dashboard-detail ul li .details {
          display: block;
        }
        .dashboard-section
          .dashboard-box
          .dashboard-detail
          ul
          li
          .details
          .left {
          width: auto;
        }
        .dashboard-section
          .dashboard-box
          .dashboard-detail
          ul
          li
          .details
          .left
          h6 {
          font-weight: 600;
        }
        .theme-card .offer-slider img {
          max-width: 130px;
          height: auto;
        }
        .rtl .theme-tab .tab-title2 {
          -webkit-padding-start: 0;
        }
        .rtl .blog-page .blog-media .blog-right ul li + li {
          padding-right: 0;
          margin-right: 0;
          border-right: 0;
        }
        .rtl .blog-detail-page .comment-section li p,
        .rtl .blog-detail-page .comment-section li h6 {
          text-align: center;
        }
        .rtl .product-right .product-icon .product-social li {
          padding-left: 16px;
        }
        .rtl .tab-product .nav-material.nav-tabs .nav-item .nav-link {
          text-align: right;
        }
        .rtl .tab-product .nav-material.nav-tabs .nav-item .nav-link,
        .rtl .product-full-tab .nav-material.nav-tabs .nav-item .nav-link {
          padding: 15px;
        }
        .rtl .testimonial .testimonial-slider .media .media-body p {
          text-align: center;
        }
        .rtl .full-banner .santa-img {
          right: 10px;
        }
      }

      @media (max-width: 420px) {
        h2 {
          font-size: 22px;
        }
        .product-pagination {
          margin: 30px 0;
        }
        .margin-res {
          margin-left: -10px;
          margin-right: -10px;
        }
        .margin-res > div {
          padding-left: 10px;
          padding-right: 10px;
        }
        .portfolio-section.metro-section .product-box .product-detail {
          width: 95%;
          bottom: 5px;
        }
        .portfolio-section.metro-section .product-box .product-detail h6,
        .portfolio-section.metro-section .product-box .product-detail h4 {
          font-size: 12px;
        }
        .portfolio-section.metro-section .product-box .cart-wrap button i,
        .portfolio-section.metro-section .product-box .cart-wrap a i {
          font-size: 10px;
          padding: 5px;
        }
        .collection-product-wrapper .product-wrapper-grid .product-box {
          margin-top: 20px;
        }
        .subscribe h4 {
          display: block;
        }
        footer .btn-solid {
          padding: 7px 8px;
        }
        footer p {
          line-height: 25px;
        }
        footer.footer-black .subscribe-form .form-control {
          height: 35px;
          width: 220px;
        }
        .blog-details p {
          font-size: 14px;
          line-height: 1.3;
        }
        .no-slider {
          margin-left: -10px !important;
          margin-right: -10px !important;
        }
        .no-slider .product-box {
          margin: 0 10px 20px !important;
          max-width: calc(50% - 20px);
        }
        .no-slider .product-box:nth-last-child(-n + 4) {
          margin: 0 10px 0 !important;
        }
        .no-slider.five-product .product-box {
          margin: 0 10px 20px !important;
          max-width: calc(50% - 20px);
        }
        .no-slider.five-product .product-box:nth-last-child(-n + 5) {
          margin: 0 10px 0 !important;
        }
        .product-m .slick-list {
          margin-left: -10px;
          margin-right: -10px;
        }
        .product-m .slick-slide > div {
          margin: 0 10px;
        }
        .product-box .cart-detail i,
        .product-wrap .cart-detail i {
          padding-top: 5px;
          padding-bottom: 5px;
          font-size: 14px;
        }
        .product-box .cart-info i,
        .product-box .cart-wrap i,
        .product-wrap .cart-info i,
        .product-wrap .cart-wrap i {
          padding: 5px;
          font-size: 13px;
        }
        .product-box .img-wrapper .lable-block .lable4,
        .product-wrap .img-wrapper .lable-block .lable4 {
          font-size: 10px;
        }
        .product-box .img-wrapper .cart-box i,
        .product-wrap .img-wrapper .cart-box i {
          font-size: 16px;
          padding-left: 4px;
          padding-right: 4px;
        }
        .product-box .product-detail .rating,
        .product-box .product-info .rating,
        .product-wrap .product-detail .rating,
        .product-wrap .product-info .rating {
          margin-top: 5px;
        }
        .product-box .product-detail h6,
        .product-box .product-info h6,
        .product-wrap .product-detail h6,
        .product-wrap .product-info h6 {
          font-size: 14px;
        }
        .product-box .product-detail h4,
        .product-box .product-info h4,
        .product-wrap .product-detail h4,
        .product-wrap .product-info h4 {
          font-size: 15px;
        }
        .product-box .product-detail .color-variant,
        .product-box .product-info .color-variant,
        .product-wrap .product-detail .color-variant,
        .product-wrap .product-info .color-variant {
          padding-top: 3px;
        }
        .product-box .product-detail .color-variant li,
        .product-box .product-info .color-variant li,
        .product-wrap .product-detail .color-variant li,
        .product-wrap .product-info .color-variant li {
          height: 14px;
          width: 14px;
          margin-right: 3px;
        }
        .product-box .cart-info.cart-wrap i,
        .product-box .cart-wrap.cart-wrap i,
        .product-wrap .cart-info.cart-wrap i,
        .product-wrap .cart-wrap.cart-wrap i {
          padding: 5px;
          font-size: 13px;
        }
        .absolute_banner .collection-banner .absolute-contain {
          padding: 10px;
          bottom: 10px;
        }
        .absolute-product .product-box .product-detail .cart-bottom i {
          padding-right: 4px;
          padding-left: 4px;
          font-size: 16px;
        }
        .layout7-product .no-slider .product-box {
          max-width: calc(100% - 20px);
          -webkit-box-flex: 0;
          -ms-flex: 0 0 100%;
          flex: 0 0 100%;
        }
        .bag-product .product-box .img-wrapper,
        .bag-product .product-wrap .img-wrapper {
          margin-bottom: 40px;
        }
        .bag-product .product-box .product-info .add-btn,
        .bag-product .product-wrap .product-info .add-btn {
          bottom: 90px;
        }
        .bag-product .product-box .product-info .add-btn .btn-outline,
        .bag-product .product-wrap .product-info .add-btn .btn-outline {
          padding: 4px 5px;
        }
        .addtocart_count .product-box .cart-info a i {
          margin: 4px 0;
          padding: 5px;
          font-size: 14px;
        }
        .addtocart_count .product-box .add-button {
          font-size: 14px;
        }
        .timer span .padding-l {
          padding-left: 5px;
        }
        .about-text p {
          line-height: 22px;
        }
        .service_slide .service-home .service-block1 svg {
          width: 40px;
          height: 40px;
        }
        .footer-theme .sub-title h4 {
          margin-bottom: 5px;
        }
        .footer-theme .sub-title .contact-list li {
          line-height: 25px;
        }
        .footer-theme2 p {
          line-height: 25px;
        }
        .breadcrumb-section {
          padding: 15px 0;
        }
        .footer-light .subscribe-form .form-control {
          width: 280px;
        }
        .white-layout .footer-theme2 .footer-block .footer-container {
          max-width: 388px;
        }
        .white-layout .footer-theme2 .footer-block .subscribe-white .btn-solid,
        .white-layout
          .footer-theme2
          .footer-block
          .subscribe-white
          .btn-outline {
          padding: 13px 8px;
        }
        .dark-layout
          .footer-theme2
          .subscribe-wrapper
          .subscribe-block
          .btn-solid,
        .dark-layout
          .footer-theme2
          .subscribe-wrapper
          .subscribe-block
          .btn-outline {
          padding: 13px 8px;
        }
        .footer-theme2 .subscribe-block .form-control {
          letter-spacing: 3px;
        }
        .subscribe-form {
          display: inline-block;
        }
        .subscribe-form .form-group {
          margin-bottom: 10px;
        }
        .category-border div .category-banner .category-box h2 {
          font-size: 25px;
        }
        .tools-grey .product-box .product-info {
          padding: 8px;
        }
        .tools-grey .product-box .product-info h4 {
          font-size: 13px;
        }
        .j-box .product-box .product-detail {
          padding-left: 8px;
          padding-bottom: 8px;
        }
        .j-box .product-box .product-detail .rating {
          padding-top: 8px;
        }
        .full-banner .banner-contain h2 {
          font-size: 55px;
        }
        .full-banner .banner-contain h3 {
          font-size: 36px;
        }
        .home-slider .slider-contain h1 {
          font-size: 25px;
          margin-top: 10px;
        }
        .home-slider .slider-contain h4 {
          letter-spacing: 0.01em;
        }
        .home-slider .slider-contain .btn-solid,
        .home-slider .slider-contain .btn-outline {
          margin-top: 10px;
          padding: 5px 18px;
        }
        .home-slider .slider-details {
          width: 120px !important;
          height: 120px !important;
          top: 24%;
        }
        .home-slider .slider-details h1 {
          font-size: 18px;
        }
        .home-slider .slider-details h2 {
          font-size: 14px;
        }
        .home-slider .slider-details h3 {
          font-size: 12px;
        }
        .home-slider .slider-details .btn-white {
          padding: 0px 2px;
          margin-top: 0;
          font-size: 10px;
        }
        .home-slider:hover .slick-prev,
        .home-slider:hover .slick-next {
          -webkit-transform: scale(1.5);
          transform: scale(1.5);
        }
        .home-slider:hover .slick-next {
          right: 50px;
        }
        .home-slider:hover .slick-prev {
          left: 50px;
        }
        .theme-card.center-align {
          display: unset;
          height: unset;
          -webkit-box-align: unset;
          -ms-flex-align: unset;
          align-items: unset;
        }
        .theme-card.card-border .offer-slider img {
          padding: 0 15px 0 15px;
        }
        .full-box .center-slider .offer-slider .product-box {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          border-bottom: 1px solid #f1f5f4;
          border-top: 1px solid #f1f5f4;
        }
        .full-box .center-slider .offer-slider .product-box .img-wrapper img {
          height: 120px;
        }
        .full-box .center-slider .offer-slider .product-box .product-info {
          text-align: left;
        }
        .full-box .center-slider .offer-slider .product-box .product-info h6 {
          padding-top: 5px;
        }
        .full-box
          .center-slider
          .offer-slider
          .product-box
          .product-info
          .color-variant {
          padding-top: 2px;
        }
        .full-box
          .center-slider
          .offer-slider
          .product-box
          .product-info
          .color-variant
          li {
          height: 15px;
          width: 15px;
          padding-right: 3px;
        }
        .full-box .center-slider .offer-slider .product-box .product-detail {
          padding-left: 0;
        }
        .full-box .center-slider .offer-slider .product-box .product-detail h4 {
          font-size: 20px;
        }
        .full-box
          .center-slider
          .offer-slider
          .product-box
          .product-detail
          .color-variant {
          padding-top: 0;
        }
        .full-box
          .center-slider
          .offer-slider
          .product-box:hover
          .product-info
          .btn-outline {
          display: none;
        }
        .full-box
          .center-slider
          .offer-slider
          .product-box:hover
          .product-info
          .color-variant {
          opacity: 1;
        }
        .full-box .theme-card .offer-slider .sec-1 {
          display: inline;
        }
        .full-box .theme-card .offer-slider .sec-1 .product-box2 {
          border-bottom: 1px solid #f1f5f4;
        }
        .full-box .theme-card .offer-slider .sec-1 .product-box2:last-child {
          border-bottom: none;
        }
        .full-box
          .theme-card
          .offer-slider
          .sec-1
          .product-box2
          + .product-box2 {
          border-left: none;
        }
        .center-slider .offer-slider .product-box .product-detail {
          text-align: left !important;
        }
        .center-slider .offer-slider .product-box .product-detail .rating i {
          padding-right: 3px;
        }
        .center-slider .offer-slider .product-box .product-detail h4 {
          padding-bottom: 0.5rem;
        }
        .center-slider
          .offer-slider
          .product-box
          .product-detail
          .color-variant
          li {
          height: 18px;
          width: 18px;
          padding-right: 3px;
        }
        .center-slider .offer-slider .product-box .img-wrapper .cart-box {
          display: none;
        }
        .product-box .img-wrapper .lable-block .lable3 {
          font-size: 10px;
          padding: 10px 5px;
        }
        .product-box .img-wrapper .cart-box {
          padding: 8px 8px;
          bottom: 10px;
        }
        .product-box .img-block .lable-wrapper {
          top: 20px;
        }
        .product-box .img-block .lable-wrapper .lable1,
        .product-box .img-block .lable-wrapper .lable2 {
          padding: 5px 5px 5px 8px;
          font-size: 12px;
        }
        .product-box .cart-info {
          bottom: 10px;
        }
        .team h6 {
          line-height: 15px;
        }
        .theme-modal .modal-dialog .modal-content .modal-body .modal-bg {
          padding: 30px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .offer-content
          h2 {
          font-size: 30px;
        }
        .login-page .authentication-right p {
          line-height: 1.5;
        }
        .login-page .theme-card .theme-form input {
          padding: 15px 20px;
          margin-bottom: 25px;
        }
        .tab-product .nav-material.nav-tabs {
          display: block;
        }
        .tab-product .nav-material.nav-tabs .nav-item {
          width: 100%;
        }
        .tab-product .nav-material.nav-tabs .nav-item .nav-link {
          padding: 10px 20px;
        }
        .vertical-tab.tab-product .nav-material.nav-tabs .nav-item .nav-link,
        .vertical-tab
          .product-full-tab
          .nav-material.nav-tabs
          .nav-item
          .nav-link {
          padding: 10px 20px;
        }
        .product-right .product-buttons .btn-solid,
        .product-right .product-buttons .btn-outline {
          padding: 7px 13px;
        }
        .product-right.product-form-box .timer {
          padding-left: 29px;
        }
        .product-right.product-form-box .timer span {
          width: 45px;
        }
        .product-right .timer {
          padding-left: 35px;
        }
        .product-right .timer span {
          width: 45px;
        }
        .product-right .product-icon .product-social {
          margin-top: 0;
        }
        .product-right .product-icon .product-social li {
          padding-right: 5px;
        }
        .product-right .product-icon .product-social li a i {
          font-size: 14px;
        }
        .product-right .product-icon .wishlist-btn i {
          font-size: 14px;
          padding-left: 10px;
          margin-left: 5px;
        }
        .product-right .product-icon .wishlist-btn span {
          font-size: 14px;
        }
        .tab-product .theme-form input,
        .tab-product .theme-form textarea {
          font-size: 12px;
          padding: 8px 15px;
        }
        .order-box .sub-total .shipping {
          width: unset;
          float: unset;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }
        .order-box .sub-total .shipping .shopping-option:last-child {
          padding-left: 20px;
        }
        .checkout-page .checkout-form .form-group {
          margin-bottom: 15px;
        }
        .checkout-page .checkout-form input[type="text"],
        .checkout-page .checkout-form input[type="email"],
        .checkout-page .checkout-form input[type="password"],
        .checkout-page .checkout-form input[type="tel"],
        .checkout-page .checkout-form input[type="number"],
        .checkout-page .checkout-form input[type="url"] {
          height: 40px;
        }
        .checkout-page .checkout-form select,
        .checkout-page .checkout-form textarea {
          height: 40px;
        }
        .grid-products {
          margin-left: -10px;
          margin-right: -10px;
        }
        .grid-products .product-box {
          padding-left: 10px;
          padding-right: 10px;
        }
        .game-product .product-box .add-button {
          font-size: 14px;
          bottom: 6px;
        }
        .rtl
          .full-box
          .center-slider
          .offer-slider
          .product-box
          .product-detail
          .rating,
        .rtl
          .full-box
          .center-slider
          .offer-slider
          .product-box
          .product-detail
          h4,
        .rtl
          .full-box
          .center-slider
          .offer-slider
          .product-box
          .product-detail
          h6,
        .rtl
          .full-box
          .center-slider
          .offer-slider
          .product-box
          .product-detail
          .color-variant {
          text-align: right !important;
        }
        .rtl .order-box .sub-total .shopping-option label {
          padding-right: 0;
        }
      }

      @media (max-width: 360px) {
        .btn-solid,
        .btn-outline {
          padding: 10px 15px;
        }
        h2 {
          font-size: 25px;
        }
        .advertise-section .full-banner {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .category-button .col {
          -ms-flex-preferred-size: unset;
          flex-basis: unset;
        }
        .gym-banner .collection-banner .contain-banner h2 {
          font-size: 18px;
        }
        .service_slide .home-slider .slider-contain {
          height: 50vh;
        }
        .tools-parallax-product .tools-description .tools-form .search-box {
          width: 92%;
        }
        .footer-theme2 .subscribe-block {
          padding: 0 30px;
        }
        .white-layout .small-section .footer-theme2 .col {
          padding: 0 15px;
        }
        .white-layout .footer-theme2 .footer-block .footer-container {
          max-width: 330px;
        }
        .footer-theme2.section-light .footer-block .subscribe-white {
          padding: 20px 20px;
        }
        .dark-layout
          .footer-theme2
          .subscribe-wrapper
          .subscribe-block
          .form-group
          .form-control {
          border: none;
        }
        .footer-end p {
          font-size: 13px;
        }
        .category-border div .category-banner .category-box h2 {
          padding: 7px 15px;
        }
        .full-banner {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .full-banner.parallax-layout {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .full-banner .banner-contain h2 {
          font-size: 55px;
        }
        .full-banner .banner-contain h3 {
          font-size: 30px;
        }
        .pet-parallax .full-banner {
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .home-slider .home {
          height: 50vh;
        }
        .home-slider .slider-contain {
          height: 50vh;
        }
        .home-slider .slider-contain h1 {
          font-size: 25px;
        }
        .home-slider .slider-contain .btn-solid,
        .home-slider .slider-contain .btn-outline {
          margin-top: 8px;
          padding: 5px 15px;
        }
        .home-slider .slider-details {
          top: 20%;
        }
        .home-slider .slider-details h1 {
          font-size: 16px;
        }
        .home-slider .slider-details h2 {
          font-size: 13px;
        }
        .home-slider:hover .slick-prev,
        .home-slider:hover .slick-next {
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
        .home-slider:hover .slick-next {
          right: 40px;
        }
        .home-slider:hover .slick-prev {
          left: 40px;
        }
        .height-85 .home-slider .home {
          height: 50vh;
        }
        .height-85 .home-slider .slider-contain {
          height: 50vh;
        }
        .layout-7 .home .slider-contain {
          height: 50vh;
        }
        .theme-tab
          .tab-content
          .product-tab
          .tab-box
          .product-box2
          .media
          .media-body
          a
          h6 {
          font-size: 13px;
        }
        .theme-tab
          .tab-content
          .product-tab
          .tab-box
          .product-box2
          .media
          .media-body
          .color-variant
          li {
          height: 12px;
          width: 12px;
        }
        .theme-tab .tab-content .product-tab .tab-box .product-box2 img {
          height: 115px;
        }
        .blog-detail-page .blog-detail p {
          line-height: 1.5;
        }
        .blog-detail-page .blog-contact h2 {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .about-page p {
          line-height: 1.2;
        }
        .theme-modal .modal-dialog .modal-content .modal-body {
          padding: 10px;
        }
        .theme-modal .modal-dialog .modal-content .modal-body .modal-bg {
          padding: 20px;
        }
        .theme-modal .modal-dialog .modal-content .modal-body .modal-bg .close {
          right: 10px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .offer-content
          form
          .form-group
          .form-control {
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .theme-modal
          .modal-dialog
          .modal-content
          .modal-body
          .modal-bg
          .offer-content
          h2 {
          font-size: 20px;
          margin-bottom: 10px;
        }
        .login-page .theme-card {
          padding: 18px;
        }
        .search-block .btn-solid {
          padding: 10px 5px;
        }
        .search-block .form-header .input-group input {
          padding: 10px 12px;
        }
        .contact-page .map iframe {
          height: 200px;
        }
        .collection-product-wrapper
          .product-pagination
          .pagination
          .page-item
          a {
          padding: 15px 13px;
        }
        .collection-product-wrapper
          .product-pagination
          .product-search-count-bottom {
          padding-left: 10px;
        }
        .collection-product-wrapper
          .product-pagination
          .product-search-count-bottom
          h5 {
          line-height: 15px;
        }
        .collection-product-wrapper
          .product-top-filter
          .popup-filter
          .sidebar-popup {
          width: 80%;
        }
        .cart-section tbody tr td,
        .wishlist-section tbody tr td {
          min-width: 115px;
        }
        .cart-section tbody tr td .mobile-cart-content .col-xs-3,
        .wishlist-section tbody tr td .mobile-cart-content .col-xs-3 {
          margin-left: 5px;
          margin-right: 5px;
        }
        .cart-section tbody tr td a img,
        .wishlist-section tbody tr td a img {
          height: 80px;
        }
        .cart-section tfoot tr td,
        .wishlist-section tfoot tr td {
          padding-right: 27px;
        }
        .cart-section tfoot tr td h2,
        .wishlist-section tfoot tr td h2 {
          font-size: 21px;
        }
        .wishlist-section .wishlist-buttons:last-child a {
          margin-left: 0;
        }
        .product-buttons .btn-solid,
        .product-buttons .btn-outline {
          padding: 7px 16px;
        }
        .product-description .qty-box .input-group {
          width: 100%;
        }
        .single-product-tables.detail-section table {
          width: 70%;
        }
        .product-right .timer {
          padding-left: 25px;
        }
        .product-right .timer span .padding-l {
          padding-left: 10px;
        }
        .product-form-box .timer span {
          width: 47px;
        }
        .product-form-box .timer span .padding-l {
          padding-left: 9px;
        }
        .product-form-box .product-buttons .btn-solid,
        .product-form-box .product-buttons .btn-outline {
          padding: 5px 5px;
        }
        .product-form-box .timer span,
        .border-product .timer span {
          width: 45px;
        }
        .product-form-box .timer span .padding-l,
        .border-product .timer span .padding-l {
          padding-right: 5px;
        }
        .rtl .product-right .product-icon .product-social li {
          padding-left: 7px;
        }
        .rtl .banner-timer .timer {
          padding-left: 0;
          padding-right: 20px;
        }
        .rtl .banner-timer .timer span {
          width: 50px;
        }
      }

      @media (max-width: 320px) {
        .home-slider .slider-details {
          top: 16%;
        }
        .footer-theme .footer-logo {
          margin-bottom: 20px;
        }
        .footer-theme2 .col {
          padding: 10px 5px;
        }
        .white-layout .footer-theme2 .col {
          padding: 0 15px;
        }
        .white-layout .footer-theme2 .footer-block .footer-container {
          max-width: 290px;
        }
        .dark-layout
          .footer-theme2
          .subscribe-wrapper
          .subscribe-block
          .form-group
          .form-control {
          letter-spacing: 1px;
        }
        .footer-theme2.section-light
          .footer-block
          .subscribe-white
          .form-control {
          letter-spacing: 1px;
        }
        .collection-banner .contain-banner.banner-3 {
          padding-left: 25px;
          padding-right: 25px;
        }
        .collection-banner .contain-banner.banner-3 h2 {
          font-size: 15px;
        }
        .collection-banner .contain-banner.banner-4 {
          padding-left: 35px;
          padding-right: 35px;
        }
        .collection-banner .contain-banner.banner-4 h2 {
          font-size: 15px;
        }
      }
      .view-cart {
        color: black !important;
      }
      .block {
        display: block;
      }

      .navbar-brand {
        transition: 0.5s ease;
        text-transform: uppercase;
        color: black;
        font-weight: bold;
      }
      @media screen and (max-width: 768px) {
        .footer-contant,
        footer-link,
        .footer-title,
        .footer-contant {
          text-align: center;
          border-bottom: 0 !important;
        }
        .footer-title {
          margin-top: 30px;
        }
      }
      #header-nav {
        display: block !important;
      }
      .cart_media{
        height:auto!important;
      }
    `}</style>
  );
};
