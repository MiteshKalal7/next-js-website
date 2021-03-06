import Link from 'next/link'
export default function () {
  return (
    <section class="why-choose pad-tb">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="common-heading">
              <span>We Are Awesome</span>
              <h2 class="mb30">
                <Link href="/why-epagestore">Why Choose Us</Link>
              </h2>
            </div>
          </div>
        </div>
        <div class="row upset">
          <div class="col-lg-3 col-sm-6 mt30">
            <div class="s-block up-hor">
              <div class="s-card-icon">
                <img
                  src="/images/icons/research.svg"
                  alt="service"
                  class="img-fluid"
                />
              </div>
              <h4>Reasearch and Analysis</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt30">
            <div class="s-block up-hor">
              <div class="s-card-icon">
                <img
                  src="/images/icons/chat.svg"
                  alt="service"
                  class="img-fluid"
                />
              </div>
              <h4>Negotiation and power</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt30">
            <div class="s-block up-hor">
              <div class="s-card-icon">
                <img
                  src="/images/icons/monitor.svg"
                  alt="service"
                  class="img-fluid"
                />
              </div>
              <h4>Creative and innovative solutions</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 mt30">
            <div class="s-block up-hor">
              <div class="s-card-icon">
                <img
                  src="/images/icons/trasparency.svg"
                  alt="service"
                  class="img-fluid"
                />
              </div>
              <h4>Trasparency and ease of work</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
