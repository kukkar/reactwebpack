import React from "react";

export default class Layout extends React.Component {

  render() {
    return (
    <aside class="nav_sidebar">
            <div class="menu_wrapper">
                <div class="header_top">
                    <div class="toggle_icon hidden-xs"><span class="lnr lnr-menu"></span></div>
                    <div class="head_img_wrap">
                        <img src="https://photos.google.com/photo/AF1QipNdiurAHUTSqJ-oAV8B9G2jmg4kytHYxjRWTx3l" alt="Images"/>
                    </div>
                    <p class="name">Jonathon Doe</p>
                </div>

                <div class="main_menu">
                    <ul>
                        <li class=""><a href="#"><span class="lnr lnr-home"></span><p>Home</p></a></li>
                        <li class=""><a href="#"><span class="lnr lnr-user"></span><p>about me</p></a></li>
                        <li class="active"><a href="#"><span class="lnr lnr-book"></span><p>resume</p></a></li>
                        <li><a href="#"><span class="lnr lnr-cog"></span><p>services</p></a></li>
                        <li><a href="https://aazztech.com/demos/themes/html/rida/rida/index3.html#portfolio"><span class="lnr lnr-briefcase"></span><p>portfolio</p></a></li>
                        <li><a href="https://aazztech.com/demos/themes/html/rida/rida/index3.html#blog"><span class="lnr lnr-leaf"></span><p>blog</p></a></li>
                        <li><a href="https://aazztech.com/demos/themes/html/rida/rida/index3.html#contact"><span class="lnr lnr-envelope"></span><p>contact</p></a></li>
                    </ul>

                    <div class="social">
                        <ul>
                            <li><a href="https://aazztech.com/demos/themes/html/rida/rida/index3.html"><span class="fa fa-facebook"></span></a></li>
                            <li><a href="https://aazztech.com/demos/themes/html/rida/rida/index3.html"><span class="fa fa-twitter"></span></a></li>
                            <li><a href="https://aazztech.com/demos/themes/html/rida/rida/index3.html"><span class="fa fa-google-plus"></span></a></li>
                            <li><a href="https://aazztech.com/demos/themes/html/rida/rida/index3.html"><span class="fa fa-linkedin"></span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
  }
}