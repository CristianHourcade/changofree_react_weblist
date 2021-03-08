import css from 'styled-jsx/css'

export const HeaderStyleTemplate1 = () => {
    return <style jsx="true">{`
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
        content: "\f107";
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
        background: url("/assets/imagesdropdown.png") no-repeat 5%;
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
        background: url("/assets/imagesdropdown.png") no-repeat 5%;
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
        background: url("/assets/imagesdropdown.png") no-repeat 5%;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .product-page-filter
        select {
        background: url("/assets/imagesdropdown.png") no-repeat 5%;
      }

      .rtl
        .collection-product-wrapper
        .product-top-filter
        .popup-filter
        .sidebar-popup {
        text-align: right;
        background: url("/assets/imagesdropdown.png") no-repeat 5%;
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
        background: url("/assets/imagesdropdown.png") no-repeat 3%;
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
          content: "\f107";
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
          content: "\f105";
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
          content: "\f105";
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
          content: "\f105";
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
          content: "\e602";
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
          content: "\e634";
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
          content: "\f106";
          position: absolute;
          right: 2px;
          top: 2px;
        }
        .footer-title .according-menu {
          font: normal normal normal 14px/1 FontAwesome;
        }
        .footer-title .according-menu:before {
          content: "\f107";
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

      .block {
        display: block;
      }

      a {
        font-family: fontBold;
        color: #5b5b5b;
      }

      .count {
        position: absolute;
        background: #ff5f32;
        min-width: 20px;
        min-height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        color: white;
        right: -15px;
        top: -15px;
      }

      .top-header {
        background-color: #3a3a3a ;
      }
      #header-nav{
        display: block!important;
    }
    `}</style>
}