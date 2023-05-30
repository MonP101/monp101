import React from 'react'
import pagecss from '../style/homePage.scss'
import Image from 'next/image'

const dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard__menu">
          <div className="dashboard__menu-logo">
            <Image src="/svg-export/logo_transparent.png" width={50} height={50} />
          </div>
          <div className="dashboard__menu-project">
            <div className="item">
              <Image src="/svg-export/Vector.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/portfolio.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/stonks.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/terminal.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/chat.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/Spotify.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/Figma.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/Dribbble.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/Twitch.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/plus.svg" width={100} height={25} />
            </div>
            <div className="item">
              <Image src="/svg-export/logout.svg" width={100} height={25} />
            </div>
          </div>
        </div>
        <div className="dashboard__content">
          <div className="top">
            <div className="date">
              <Image src="/svg-export/clound.svg" width={30} height={30} />
              <span>Monday, 20 Feb 2023</span>
            </div>
            <div className="control">
              <div className="search-box">
                <Image src="/svg-export/search.svg" width={20} height={20} />
                <input type="text" placeholder="Seach" />
              </div>
              <div className="action">
                <Image src="/svg-export/moon.svg" width={25} height={25} />
                <Image src="/svg-export/mic.svg" width={25} height={25} />
                <Image src="/svg-export/bell.svg" width={25} height={25} />
              </div>
              <div className="profile">
                <div className="avatar">
                  <Image src="/svg-export/logo.png" width={36} height={36} />
                </div>
                <div className="description">
                  <div className="name">
                    <h3>Admin</h3>
                    <Image src="/svg-export/angle-down.svg" width={15} height={20} />
                  </div>
                  <div className="email">
                    <p>Admin123@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="main-left">
              <div className="overall">
                <div className="title">
                  <h3>Overall Portfolio</h3>
                </div>
                <div className="btn">
                  <div className="btn-action">
                    <a>Withdraw</a>
                  </div>
                  <div className="btn-action">
                    <a>Desposit </a>
                    <Image src="/svg-export/plus.svg" width={100} height={25} />
                  </div>
                </div>
              </div>
              <div className="data">
                <div className="data-item">
                  <div className="title">
                    <p>
                      My Balance{' '}
                      <span>
                        <Image src="/svg-export/28%.svg" width={100} height={25} />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="overview"></div>
            </div>
            <div className="main-right"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboard
