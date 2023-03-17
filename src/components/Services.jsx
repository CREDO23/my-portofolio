import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import uiux from "../assets/ux-ui.png";

export default function () {
  return (
    <section id="Services" className="services">
      <h2>What Services I'm Providing ?</h2>
      <div className="content">
        <div data-aos='zoom-out' className="frontend">
          <img src={frontend} alt="" srcset="" />

          <h5>Frontend</h5>

          <div className="comments">
            <div>
              <p>
                I like code things from scratch , and enjoy bringing ideas to
                file in browser.
              </p>

              <p>
                <b>Language</b> : Javascript with NextJs, ReactJs, Redux Toolkit, TailwindCss
              </p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="ui-ux">
          <img src={uiux} alt="" srcset="" />

          <h5>UX / UI</h5>

          <div className="comments">
            <div>
              <p>I value simple content structure , clean desugn patterns .</p>
              <p>
                <b>Tools</b> : Figma , Photoshop
              </p>
            </div>
          </div>
        </div>
        <div data-aos='zoom-out' className="backend">
          <img src={backend} alt="" srcset="" />
          <h5>Backend</h5>
          <div className="comments">
            <div>
              <p>
                Apart from doing the frontend , I also do the backend well and I
                fell very comfortable on the backend side
              </p>
              <p>
                <b>Languages</b> : Javascript with NodeJs/ExpressJs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
