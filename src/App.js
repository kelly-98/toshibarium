import logo from "./assets/img/logo.svg";
import buy from "./assets/img/buy-header.svg";
import introLeft from "./assets/img/intro-left.svg";
import introRight from "./assets/img/intro.svg";
import visionLeft from "./assets/img/vision-left.svg";
import vision from "./assets/img/vision.svg";
import shibanomics from "./assets/img/shibanomics.svg";
import roadmap from "./assets/img/roadmap.svg";
import utility from "./assets/img/Utility.png";
import community from "./assets/img/Community.png";
import transparency from "./assets/img/Transparency.png";
import price from "./assets/img/price.svg";
import e1 from "./assets/img/e-1.svg";
import e2 from "./assets/img/e-2.svg";
import e3 from "./assets/img/e-3.svg";
import et1 from "./assets/img/e-t-1.png";
import et2 from "./assets/img/e-t-2.png";
import et3 from "./assets/img/e-t-3.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <ul className="header-menu font-joti">
            <li>
              <a>ECOSYSTEM</a>
            </li>
            <li>
              <a>DOGENIMICS</a>
            </li>
            <li>
              <a>ROADMAP</a>
            </li>
          </ul>
          <div className="header-action">
            <a className="header-action-buy">
              <img src={buy} alt="" />
            </a>
            <div className="header-action-social">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none">
                  <path
                    d="M29.9583 0.499674C29.8334 0.176646 29.7084 0.0958983 29.5418 0.0555197C29.0836 -0.105994 28.3754 0.136282 28.3754 0.136282C28.3754 0.136282 2.04832 9.26183 0.548681 10.2713C0.215427 10.4732 0.132114 10.6347 0.0488004 10.7558C-0.20114 11.4827 0.590338 11.8057 0.590338 11.8057L7.38039 13.9457C7.38039 13.9457 7.63033 13.9861 7.71364 13.9457C9.25494 13.017 23.2099 4.45679 24.0014 4.17414C24.1264 4.13376 24.2097 4.17412 24.2097 4.25488C23.8765 5.3451 11.7543 15.8032 11.7543 15.8032C11.7543 15.8032 11.7127 15.8435 11.671 15.9243L11.0462 22.4252C11.0462 22.4252 10.7962 24.4038 12.8374 22.4252C14.2954 21.012 15.7117 19.841 16.3782 19.2757C18.711 20.8505 21.2104 22.5464 22.2935 23.4751C22.835 23.9192 23.2933 24 23.6682 24C24.7096 23.9596 25.0012 22.8694 25.0012 22.8694C25.0012 22.8694 29.7917 4.17413 29.9583 1.67066C29.9583 1.42839 30 1.26687 30 1.10535C30 0.822703 30 0.62081 29.9583 0.499674Z"
                    fill="#060606"
                  />
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="30"
                  viewBox="0 0 37 30"
                  fill="none">
                  <path
                    d="M11.3732 29.7542C25.021 29.7542 32.4653 18.4662 32.4653 8.66674C32.4653 8.33596 32.4653 8.04652 32.4239 7.71574C33.8714 6.68204 35.1121 5.3589 36.1047 3.87038C34.7813 4.44925 33.3338 4.86273 31.8449 5.02812C33.3751 4.11847 34.5331 2.67129 35.1121 0.934678C33.6646 1.80298 32.0931 2.38185 30.3974 2.75399C29.0326 1.30681 27.1302 0.397156 24.9796 0.397156C20.8853 0.397156 17.5767 3.70499 17.5767 7.79843C17.5767 8.3773 17.6595 8.95617 17.7835 9.4937C11.6213 9.20426 6.16219 6.22721 2.52277 1.76164C1.90241 2.83668 1.53019 4.11847 1.53019 5.48295C1.53019 8.04652 2.85362 10.3207 4.83875 11.6438C3.6394 11.6024 2.48141 11.2717 1.48884 10.7341C1.48884 10.7755 1.48884 10.7755 1.48884 10.8168C1.48884 14.4141 4.05299 17.3911 7.44427 18.0941C6.82391 18.2595 6.1622 18.3422 5.50048 18.3422C5.0042 18.3422 4.54926 18.3008 4.09433 18.2181C5.04554 21.1538 7.77512 23.3039 11.001 23.3452C8.47818 25.3299 5.25234 26.529 1.77835 26.529C1.19935 26.529 0.578999 26.4877 0 26.4463C3.26721 28.5137 7.15477 29.7542 11.3732 29.7542Z"
                    fill="#060606"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="intro">
          <div className="container">
            <div className="intro-left">
              <img src={introLeft} alt="" />
              <h1>
                TOSHIBARIUM <br /> ECOSYSTEM
              </h1>
              <p>
                The Meme tokens thrive on Shibarium. We are representing not
                just a novel cryptocurrency, but an ecosystem filled with
                laughter and community spirit. Our vision is to establish a
                cryptocurrency world that is not only safe and inclusive but
                also a source of endless enjoyment.
              </p>
            </div>
            <div className="intro-right">
              <img src={introRight} alt="" />
            </div>
          </div>
        </section>

        <section className="vision">
          <div className="section-title">
            <img src={vision} alt="" />
          </div>
          <div className="container">
            <div className="vision-left">
              <img src={visionLeft} alt="" />
            </div>
            <ul className="vision-right">
              <li className="vision-right-item vision-right-item-1">
                <div>
                  <img src={utility} alt="" />
                </div>
                <p>
                  With the goal of sustainability and longevity, Toshibarium's
                  ecosystem will provide utilities that will further the
                  adoption of Decentralized Finance on Shibarium.
                </p>
              </li>
              <li className="vision-right-item vision-right-item-2">
                <div>
                  <img src={community} alt="" />
                </div>
                <p>
                  Every member of our community comes first and is integral to
                  Toshibarium success. No matter where you are from, everyone is
                  welcome to be part of the Ecosystem.
                </p>
              </li>
              <li className="vision-right-item vision-right-item-3">
                <div>
                  <img src={transparency} alt="" />
                </div>
                <p>
                  The decentralized ecosystem is driven by users. The developer
                  team will operate with complete transparency and every
                  decision will be aligned with Toshibarium's mission.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="shibanomics">
          <div className="section-title">
            <img src={shibanomics} alt="" />
          </div>
          <div className="container">
            <div className="shibanomics-price">
              <div className="shibanomics-price-icon">
                <img src={price} alt="" />
              </div>
              <p>
                <span>Price</span>
                <span>$0.00</span>
              </p>
            </div>
            <div className="shibanomics-info">
              <ul className="shibanomics-info-left">
                <li>
                  <h3>Token Name</h3>
                  <p>Toshibarium</p>
                </li>
                <li>
                  <h3>Token Symbol</h3>
                  <p>$TSHIBA</p>
                </li>
                <li>
                  <h3>Total Supply</h3>
                  <p>100.000.000.000</p>
                </li>
                <li>
                  <h3>Network</h3>
                  <p>Shibarium</p>
                </li>
              </ul>
              <ul className="shibanomics-info-right">
                <li>
                  <span>Marketcap</span>
                  <span>$0.00</span>
                </li>
                <li>
                  <span>Total Burned</span>
                  <span>$0.00</span>
                </li>
                <li>
                  <span>Circulating Supply</span>
                  <span>$0.00</span>
                </li>
              </ul>
            </div>

            <div className="shibanomics-ecosystem">
              <h3 className="shibanomics-ecosystem-title">
                TOSHIBARIUM COMPLETED ECOSYSTEM
              </h3>
              <ul className="shibanomics-ecosystem-box">
                <li className="shibanomics-ecosystem-box-item shibanomics-ecosystem-box-item-1">
                  <div className="shibanomics-ecosystem-box-item-img">
                    <img src={e1} alt="" />
                  </div>
                  <div className="shibanomics-ecosystem-box-item-right">
                    <div className="shibanomics-ecosystem-box-item-right-title">
                      <img src={et1} alt="" />
                    </div>
                    <p>
                      Toshiswap is a decentralized exchange that allows users to
                      swap tokens on Shibarium based on the AMM automated market
                      creation protocol.
                    </p>
                  </div>
                </li>
                <li className="shibanomics-ecosystem-box-item shibanomics-ecosystem-box-item-2">
                  <div className="shibanomics-ecosystem-box-item-right">
                    <div className="shibanomics-ecosystem-box-item-right-title">
                      <img src={et2} alt="" />
                    </div>
                    <p>
                      Toshiswap is a decentralized exchange that allows users to
                      swap tokens on Shibarium based on the AMM automated market
                      creation protocol.
                    </p>
                  </div>
                  <div className="shibanomics-ecosystem-box-item-img">
                    <img src={e2} alt="" />
                  </div>
                </li>
                <li className="shibanomics-ecosystem-box-item shibanomics-ecosystem-box-item-3">
                  <div className="shibanomics-ecosystem-box-item-img">
                    <img src={e3} alt="" />
                  </div>
                  <div className="shibanomics-ecosystem-box-item-right">
                    <div className="shibanomics-ecosystem-box-item-right-title">
                      <img src={et3} alt="" />
                    </div>
                    <p>
                      Toshiswap is a decentralized exchange that allows users to
                      swap tokens on Shibarium based on the AMM automated market
                      creation protocol.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="roadmap">
          <div className="section-title">
            <img src={roadmap} alt="" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
