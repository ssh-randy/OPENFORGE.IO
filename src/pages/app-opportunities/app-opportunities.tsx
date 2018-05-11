import { Component, State, Event, EventEmitter, Listen } from '@stencil/core';

@Component({
  tag: 'app-opportunities',
  styleUrl: 'app-opportunities.scss',
})
export class AppOpportunities {
  @State() isDisabled: boolean = true;
  @State() canRequestInterview: boolean;
  @State() formSubmitting: boolean = false;
  @State() formSubmitted: boolean = false;

  formValues: {
    angular: number;
    node: number;
    ionic: number;
    html: number;
    css: number;
    name: string;
    email: string;
    phone: string;
    github: string;
  };

  formData = new FormData();

  componentDidLoad() {
    this.resetFormValues();
  }

  @Event() valueChange: EventEmitter;
  @Listen('valueChange')
  valueChangeHandler(event) {
    const { field, value } = event.detail;
    this.formValues[field] = value;

    if (
      this.formValues.angular > 85 &&
      this.formValues.node > 85 &&
      this.formValues.ionic > 85 &&
      this.formValues.html > 85 &&
      this.formValues.css > 85
    ) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  handleSliders(e) {
    e.preventDefault();
    this.canRequestInterview = true;
  }

  handleFile(e) {
    const file = e.target.files;
    this.formData.append('file', file[0]);
  }

  async handleSubmit(e) {
    e.preventDefault();

    for (const value in this.formValues) {
      this.formData.append('formValues', this.formValues[value]);
    }

    try {
      this.formSubmitting = true;
      await fetch('', {
        method: 'POST',
        headers: {
          Accept:
            'application/json, application/xml, text/play, text/html, *.*',
          'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        body: this.formData,
      });

      e.target.reset();
      this.resetFormValues();

      this.formSubmitting = false;
      this.formSubmitted = true;
    } catch (error) {
      console.log('Error', error);
    }
  }

  render() {
    return (
      <div>
        {/* header - hero */}
        <app-hero background-url="assets/bg-hero-mountain.jpg">
          <span slot="header">Look for a new adventure?</span>
          <span slot="body">
            OpenForge is hiring two mid-level developers. Want to know if you're
            the right fit for the team? Keep reading!
          </span>
        </app-hero>

        {/* section - intro */}
        <section>
          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-suck.jpg"
              reverse={true}
            >
              <h3 slot="header">
                From our work to our interview process, we break the norm.
              </h3>
            </content-graphic-lg>

            <content-graphic-lg img-url="assets/graphic-opportunities-codemaster.jpg">
              <h3 slot="header">
                <span>Instead of asking you a million questions,</span> we'd
                rather get to know you another way: by putting you to the test.
              </h3>
            </content-graphic-lg>

            <h2>The Challenge</h2>
            <p>
              should you choose to accept, will be to develop a 3-page app in
              ionic framework
            </p>

            <content-graphic-lg img-url="assets/graphic-opportunities-ionic.jpg">
              <h3 slot="header">Why? Because we value our partnerships</h3>
            </content-graphic-lg>
          </div>
        </section>

        {/* section - form */}
        <section>
          <div class="container">
            <content-graphic-lg
              img-url="assets/graphic-opportunities-sword.png"
              reverse={true}
            >
              <h3 slot="header">
                We're looking for someone who’s ready to hit the ground running
                - someone who wants to turn big ideas into realities. But first,
                we need to make sure you’ve got the skills to make it happen.
              </h3>
            </content-graphic-lg>

            {!this.canRequestInterview ? (
              <form onSubmit={this.handleSliders.bind(this)}>
                <h3 class="font-weight-bold pt-5">
                  Move the sliders to the position that aligns with your
                  capabilities to continue.
                </h3>
                <app-slider name="angular" label="Angular" />
                <app-slider name="node" label="Node" />
                <app-slider name="ionic" label="Ionic" />
                <app-slider name="html" label="HTML" />
                <app-slider name="css" label="CSS" />

                <h4 class="form-group text-center">
                  {!this.isDisabled ? (
                    <p>You're all set! Let's get started.</p>
                  ) : (
                    <p>Not quite...keep sliding!</p>
                  )}
                </h4>

                <div class="form-group text-center">
                  <button
                    type="submit"
                    disabled={this.isDisabled}
                    id="requestInterview"
                  >
                    Request an interview
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div class="form-group">
                  <textarea placeholder="Hello, I would like" />
                  <div class="form-group text-left">
                    <input type="file" onInput={this.handleFile.bind(this)} />
                  </div>
                  <app-input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    required={true}
                  />
                  <app-input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    required={true}
                  />
                  <app-input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required={true}
                  />
                  <app-input
                    name="github"
                    type="text"
                    placeholder="GitHub Link"
                    required={true}
                  />
                </div>
                <div class="form-group text-left">
                  <button type="submit">Submit</button>
                </div>
              </form>
            )}
          </div>
        </section>
      </div>
    );
  }

  private resetFormValues() {
    this.formValues = {
      angular: parseFloat(''),
      node: parseFloat(''),
      ionic: parseFloat(''),
      html: parseFloat(''),
      css: parseFloat(''),
      name: '',
      email: '',
      phone: '',
      github: '',
    };
  }
}