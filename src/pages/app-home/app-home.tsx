import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
})
export class AppHome {
  members = [
    {
      name: 'Jedi Weller',
      image: './../../assets/headshot-jedi.jpg',
      color: '#fa8928',
      title: 'Founder and Head of Technology',
      mail: 'jedi@openforge.io',
      twitter: 'https://twitter.com/jedihacks',
      github: 'https://github.com/jedihacks',
    },
    {
      name: 'Rachel Bennett',
      image: './../../assets/headshot-rachel.jpg',
      color: '#638593',
      title: 'Designer',
      mail: 'rachel@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Geoffery Melle',
      image: './../../assets/headshot-geoff.jpg',
      color: '#d8aa0c',
      title: 'Account Manager',
      mail: 'geoff@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Joni Leho',
      image: './../../assets/headshot-joni.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: 'joni@openforge.io',
      twitter: 'https://twitter.com/lehto_joni',
    },
    {
      name: 'Auvo Severinkangas',
      image: './../../assets/headshot-auvo.jpg',
      color: '#638593',
      title: 'Software Engineer',
      mail: 'auvo@openforge.io',
      twitter: '',
      github: '',
    },
    {
      name: 'Elizabeth Cottrell',
      image: './../../assets/headshot-eliza.jpg',
      color: '#d8aa0c',
      title: 'Front End Developer',
      mail: 'elizabeth@openforge.io',
      twitter: 'https://twitter.com/_elizacottrell',
      github: 'https://github.com/LizCottrell',
    },
    {
      name: 'Paulina Gallo',
      image: './../../assets/headshot-paulina.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: 'paulina@openforge.io',
      twitter: 'https://twitter.com/paulpaultweets',
      github: 'https://github.com/paulpauldevelops',
    },
    {
      name: 'Mohammad Alfatih',
      image: './../../assets/headshot-mohammad.jpg',
      color: '#638593',
      title: 'Software Engineer',
      mail: 'mo@jawami.com',
      twitter: 'https://twitter.com/webdevffw',
      github: 'https://github.com/Mohammad-alfatih',
    },
    {
      name: 'Meredith Alcorn',
      image: './../../assets/headshot-meredith.jpg',
      color: '#d8aa0c',
      title: 'Software Engineer',
      mail: 'meredith@openforge.io',
      github: 'https://github.com/mmalcorn',
    },
    {
      name: 'Fernando Del Olmo',
      image: './../../assets/headshot-fernando.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: 'fernando@openforge.io',
      twitter: 'https://twitter.com/fdom92',
      github: 'https://github.com/Fdom92',
    },
    {
      name: 'William Holloran',
      image: './../../assets/headshot-billy.jpg',
      color: '#638593',
      title: 'Project Manager / QA Engineer',
      mail: 'william@openforge.io',
    },
    {
      name: 'Luis Chacon',
      image: './../../assets/headshot-luis.jpg',
      color: '#d8aa0c',
      title: 'Software Engineer',
      mail: 'luis@openforge.io',
      github: 'https://github.com/luiskcs89',
    },
    {
      name: 'Claudio Del Valle',
      image: './../../assets/headshot-claudio.jpg',
      color: '#fa8928',
      title: 'Software Engineer',
      mail: 'claudio@openforge.io',
      github: 'https://github.com/daftclaud',
    },
    {
      name: 'Yanying Zhu',
      image: './../../assets/headshot-yanying.jpg',
      color: '#638593',
      title: 'Designer',
      mail: 'yanying@openforge.io',
      twitter: '',
      github: '',
    },
  ];

  componentDidLoad() {
    let hrefArray;
    try {
      hrefArray = Array.from(document.querySelectorAll('a[href^="#"]'));
      hrefArray.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            block: 'start',
            behavior: 'smooth',
          });
        });
      });
    } catch (e) {
      console.error('caught error componentDidLoad app-home', e);
    }
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero-home>
          <span slot="header">We are Thinkers. Makers. Doers.</span>
          <span slot="body">
            Work with our team of highly skilled designers, developers, and
            consultants to develop solutions and processes that fit your
            business requirements.
          </span>
          <span slot="link">Let's Get Started</span>
        </app-hero-home>

        {/* section - services */}
        <section id="services">
          <div class="container services">
            <h2>What do we provide?</h2>
            <p>
              Whether you are a start up, an enterprise, or somewhere in
              between, we will work with you every step of the way. Choose your
              path below to learm more about our custom services.
              {/* Technology is constantly changing; Let us help you change with it. */}
            </p>
            <nav class="nav" role="navigation">
              <div class="nav nav-tabs nav-fill" id="nav-tab">
                <a
                  class="nav-item nav-link active"
                  id="nav-startup-tab"
                  data-toggle="tab"
                  href="#nav-startup"
                  role="tab"
                  aria-controls="nav-startup"
                  aria-selected="true"
                >
                  <img
                    class="img-fluid"
                    src="assets/graphic-services-startup.png"
                    alt=""
                  />
                  <div>
                    Start Up <i class="fa fa-plus" aria-hidden="true" />
                  </div>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-smallteam-tab"
                  data-toggle="tab"
                  href="#nav-smallteam"
                  role="tab"
                  aria-controls="nav-smallteam"
                  aria-selected="false"
                >
                  <img
                    class="img-fluid"
                    src="assets/graphic-services-small.png"
                    alt=""
                  />
                  <div>
                    Small Team <i class="fa fa-plus" aria-hidden="true" />
                  </div>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-midteam-tab"
                  data-toggle="tab"
                  href="#nav-midteam"
                  role="tab"
                  aria-controls="nav-midteam"
                  aria-selected="false"
                >
                  <img
                    class="img-fluid"
                    src="assets/graphic-services-midsize.png"
                    alt=""
                  />
                  <div>
                    Mid-Size Team <i class="fa fa-plus" aria-hidden="true" />
                  </div>
                </a>
                <a
                  class="nav-item nav-link"
                  id="nav-enterprise-tab"
                  data-toggle="tab"
                  href="#nav-enterprise"
                  role="tab"
                  aria-controls="nav-enterprise"
                  aria-selected="false"
                >
                  <img
                    class="img-fluid"
                    src="assets/graphic-services-enterprise.png"
                    alt=""
                  />
                  <div>
                    Enterprise <i class="fa fa-plus" aria-hidden="true" />
                  </div>
                </a>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-startup"
                role="tabpanel"
                aria-labelledby="nav-startup-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3> What you need: </h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed odio non turpis volutpat suscipit. Duis rutrum
                      fringilla scelerisque. Duis eget ex faucibus, egestas eros
                      non, fermentum ex. Quisque lobortis venenatis metus, vitae
                      ornare turpis. Phasellus sed convallis dolor. Fusce in
                      ante vitae nisl porta vestibulum vel eget tellus. Quisque
                      varius in felis ut pulvinar. Donec aliquet, nisi eget
                      tempor accumsan, risus felis viverra tortor, eget euismod
                      metus risus ac velit.
                    </div>

                    <div class="col-md-4">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                        <li>Guerilla Marketing Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-smallteam"
                role="tabpanel"
                aria-labelledby="nav-smallteam-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3> What you need: </h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed odio non turpis volutpat suscipit. Duis rutrum
                      fringilla scelerisque. Duis eget ex faucibus, egestas eros
                      non, fermentum ex. Quisque lobortis venenatis metus, vitae
                      ornare turpis. Phasellus sed convallis dolor. Fusce in
                      ante vitae nisl porta vestibulum vel eget tellus. Quisque
                      varius in felis ut pulvinar. Donec aliquet, nisi eget
                      tempor accumsan, risus felis viverra tortor, eget euismod
                      metus risus ac velit.
                    </div>

                    <div class="col-md-4">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                        <li>Guerilla Marketing Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-midteam"
                role="tabpanel"
                aria-labelledby="nav-midteam-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3> What you need: </h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed odio non turpis volutpat suscipit. Duis rutrum
                      fringilla scelerisque. Duis eget ex faucibus, egestas eros
                      non, fermentum ex. Quisque lobortis venenatis metus, vitae
                      ornare turpis. Phasellus sed convallis dolor. Fusce in
                      ante vitae nisl porta vestibulum vel eget tellus. Quisque
                      varius in felis ut pulvinar. Donec aliquet, nisi eget
                      tempor accumsan, risus felis viverra tortor, eget euismod
                      metus risus ac velit.
                    </div>

                    <div class="col-md-4">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                        <li>Guerilla Marketing Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="nav-enterprise"
                role="tabpanel"
                aria-labelledby="nav-enterprise-tab"
              >
                <div class="services-content">
                  <div class="row justify-content-center">
                    <div class="col-md-6">
                      <h3> What you need: </h3>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi sed odio non turpis volutpat suscipit. Duis rutrum
                      fringilla scelerisque. Duis eget ex faucibus, egestas eros
                      non, fermentum ex. Quisque lobortis venenatis metus, vitae
                      ornare turpis. Phasellus sed convallis dolor. Fusce in
                      ante vitae nisl porta vestibulum vel eget tellus. Quisque
                      varius in felis ut pulvinar. Donec aliquet, nisi eget
                      tempor accumsan, risus felis viverra tortor, eget euismod
                      metus risus ac velit.
                    </div>

                    <div class="col-md-4">
                      <h3>What we provide:</h3>
                      <ul>
                        <li>Startup Consulting</li>
                        <li>Enhanced Mobile &amp; Web Designs</li>
                        <li>UI/UX Audits &amp; Recommendations </li>
                        <li>Mobile Application Development</li>
                        <li>Web Application Development</li>
                        <li>Customer Engagement Strategy</li>
                        <li>Guerilla Marketing Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <section id="learn-about">
          <app-cta link-url="#about">
            <span slot="header">Want to learn more about us?</span>
            <span slot="link">Get to know us</span>
          </app-cta>
        </section>

        {/* section - process */}
        <section id="process" class="bg-gray">
          <div class="container process">
            <h2>Our Process</h2>

            <content-graphic-lg img-url="assets/graphic-home-discovery.png">
              <h3 slot="header">Discovery</h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-consulting.png">
              <h3 slot="header">Development Consulting</h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-development.png">
              <h3 slot="header">Development</h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-deployment.png">
              <h3 slot="header">Deployment</h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-home-feedback.png">
              <h3 slot="header">User Feedback</h3>
              <p slot="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - persepectives */}
        <section class="bg-black">
          <div class="container perspectives">
            <img class="img-fluid" src="assets/graphic-home-icons.png" alt="" />
            <h2>We Are Powered by Multiple Perspectives</h2>
            <p>
              Our individual skills, backgrounds, and life experiences have
              shaped us into the company that we are today. Maintaining a
              diverse team helps us to perform better, attract top talent, and
              make smarter decisions.
            </p>
          </div>
        </section>

        {/* section - about */}
        <section id="about" class="bg-gray">
          <div class="container about">
            <h2>Meet the Team</h2>
            <p>
              There's no doubt that our team is made up of brilliant and
              talented individuals who are passionate about technology and
              design thinking. Together we design, code, grow, and evolve.
            </p>

            <app-members members={this.members} />
          </div>
        </section>

        {/* section - partners */}
        <section>
          <div class="container partners">
            <h2>Our Industry Partners</h2>
            <p>
              Here are some of our trusted partners. We frequently work with
              these companies to ensure the highest quality to our products and
              to use the program that best fits your app's needs.
            </p>

            <div class="partners--logos">
              <img
                class="img-fluid"
                src="assets/logo-ionic-black.png"
                alt="Ionic"
              />
              <img
                class="img-fluid"
                src="assets/logo-angular-black.png"
                alt="Angular"
              />
              <img
                class="img-fluid"
                src="assets/logo-capacitor-black.png"
                alt="Capacitor"
              />
              <img
                class="img-fluid"
                src="assets/logo-stencil-black.png"
                alt="Stencil"
              />
              <img
                class="img-fluid"
                src="assets/logo-mysql-black.png"
                alt="Mysql"
              />
              <img
                class="img-fluid"
                src="assets/logo-mongodb-black.png"
                alt="MongoDB"
              />
              <img
                class="img-fluid"
                src="assets/logo-nodejs-black.png"
                alt="Node JS"
              />
              <img
                class="img-fluid"
                src="assets/logo-aws-black.png"
                alt="AWS"
              />
            </div>
          </div>
        </section>

        {/* aside - cta */}
        <app-cta link-url="/contact">
          <span slot="header">Ready to work with us?</span>
          <span slot="link">Get in touch</span>
        </app-cta>
      </div>
    );
  }
}
