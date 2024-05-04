import testimonialImg from '../assets/home-image.png'

const Testimonial = () => {
  return (
    <div>
          {/* testimnonial design */}
          <div className="testimonial-container">
          <h2 className="heading">
            Valuable <span>Testimonial</span>
          </h2>
          <div className="testimonial-wrapper">
            <div className="testimonial-box mySwiper">
              <div className="testimonial-content swiper-wrapper">
                <div className="testimonial-slide swiper-slide">
                  <img src={testimonialImg} alt="" />
                  <h3>Jackson Levi</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi sapiente odit, deleniti ab in, est ratione eos
                    atque at iure architecto autem sequi. Obcaecati sunt numquam
                    totam adipisci. Earum libero, aliquid, voluptatum maiores
                    vero eos qui quo mollitia eaque eius unde, suscipit
                    perspiciatis ex explicabo tempore delectus praesentium ad
                    rem.
                  </p>
                </div>
                <div className="testimonial-slide swiper-slide">
                  <img src={testimonialImg} alt="" />
                  <h3>U. Remy</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi sapiente odit, deleniti ab in, est ratione eos
                    atque at iure architecto autem sequi. Obcaecati sunt numquam
                    totam adipisci. Earum libero, aliquid, voluptatum maiores
                    vero eos qui quo mollitia eaque eius unde, suscipit
                    perspiciatis ex explicabo tempore delectus praesentium ad
                    rem.
                  </p>
                </div>
                <div className="testimonial-slide swiper-slide">
                  <img src={testimonialImg} alt="" />
                  <h3>N. Christian</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi sapiente odit, deleniti ab in, est ratione eos
                    atque at iure architecto autem sequi. Obcaecati sunt numquam
                    totam adipisci. Earum libero, aliquid, voluptatum maiores
                    vero eos qui quo mollitia eaque eius unde, suscipit
                    perspiciatis ex explicabo tempore delectus praesentium ad
                    rem.
                  </p>
                </div>
                <div className="testimonial-slide swiper-slide">
                  <img src={testimonialImg} alt="" />
                  <h3>J. Prince</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi sapiente odit, deleniti ab in, est ratione eos
                    atque at iure architecto autem sequi. Obcaecati sunt numquam
                    totam adipisci. Earum libero, aliquid, voluptatum maiores
                    vero eos qui quo mollitia eaque eius unde, suscipit
                    perspiciatis ex explicabo tempore delectus praesentium ad
                    rem.
                  </p>
                </div>
                <div className="testimonial-slide swiper-slide">
                  <img src={testimonialImg} alt="" />
                  <h3>Peace M</h3>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Excepturi sapiente odit, deleniti ab in, est ratione eos
                    atque at iure architecto autem sequi. Obcaecati sunt numquam
                    totam adipisci. Earum libero, aliquid, voluptatum maiores
                    vero eos qui quo mollitia eaque eius unde, suscipit
                    perspiciatis ex explicabo tempore delectus praesentium ad
                    rem.
                  </p>
                </div>
              </div>
              <div className="swiper-button-next" />
              <div className="swiper-button-prev" />
              <div className="swiper-pagination" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonial
