import levi from "../../assets/imgs/about_page/team/levi.png";
import nat from "../../assets/imgs/about_page/team/nat.png";
import john from "../../assets/imgs/about_page/team/john.png";
import nora from "../../assets/imgs/about_page/team/nora.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Team() {
  return (
    <section id="team">
      <div className="inner">
        <h2>What the People Thinks About Us</h2>
        <div className="row">
          <div className="person">
            <img src={levi} alt="Levi Smith" />
            <div className="details">
              <div className="top">
                <h3>Levi Smith</h3>
                <p>Sydney, Australia</p>
              </div>
              <div className="socials">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
              <div className="contact">
                <a href="tel:+1 123-456-7890">(123)-456-7890</a>
                <a href="mailto:levismith@interno.com">levismith@interno.com</a>
              </div>
            </div>
          </div>
          <div className="person">
            <img src={nat} alt="Nattasha Julie" />
            <div className="details">
              <div className="top">
                <h3>Nattasha Julie</h3>
                <p>Sydney, Australia</p>
              </div>
              <div className="socials">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
              <div className="contact">
                <a href="tel:+1 123-098-7654">(123)-098-7654</a>
                <a href="mailto:nattashajulie@interno.com">
                  nattashajulie@interno.com
                </a>
              </div>
            </div>
          </div>
          <div className="person">
            <img src={john} alt="John Wright" />
            <div className="details">
              <div className="top">
                <h3>John Wright</h3>
                <p>Sydney, Australia</p>
              </div>
              <div className="socials">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
              <div className="contact">
                <a href="tel:+1 123-654-0987">(123)-654-0987</a>
                <a href="mailto:johnwright@interno.com">
                  johnwright@interno.com
                </a>
              </div>
            </div>
          </div>
          <div className="person">
            <img src={nora} alt="Nora Owen" />
            <div className="details">
              <div className="top">
                <h3>Nora Owen</h3>
                <p>Sydney, Australia</p>
              </div>
              <div className="socials">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
              <div className="contact">
                <a href="tel:+1 123-890-4567">(123)-890-4567</a>
                <a href="mailto:noraowen@interno.com">noraowen@interno.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
