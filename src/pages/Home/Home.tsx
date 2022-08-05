import { css } from '@emotion/react';
import HOME_BG from '~/assets/home-bg.jpg';
import GITHUB_ICON from '~/assets/github.svg';
import MESSAGE_ICON from '~/assets/message.svg';
import WECHAT_ICON from '~/assets/wechat.svg';
import HOME_ICON from '~/assets/home.svg';
function Home() {
  return (
    <div
      css={css`
        height: 100%;
        background-image: url(${HOME_BG});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      <div
        css={css`
          color: #fff;
          text-align: center;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        <div>
          <h1
            css={css`
              margin: 0;
              font-size: 4.2rem;
              text-shadow: 1px 1px 1px #333;
            `}
          >
            西红柿
          </h1>
          <div
            css={css`
              font-size: 2rem;
            `}
          >
            Look Homeward, Angel
          </div>
          <a
            css={css`
              color: #024237;
              cursor: pointer;
              font-style: italic;
            `}
            href='#'
          >
            查看文章....
          </a>
        </div>
        <aside
          css={css`
            margin-top: 0.8rem;
            display: flex;
            height: 2rem;
            > div {
              cursor: pointer;
              width: 2rem;
            }
            > div:not(:last-child) {
              margin-right: 0.8rem;
            }
          `}
        >
          <div>
            <img src={HOME_ICON} alt='微信' />
          </div>
          <div>
            <img src={WECHAT_ICON} alt='微信' />
          </div>
          <div>
            <a href='https://github.com/makeqiuqiu' target='_black'>
              <img src={GITHUB_ICON} alt='github' />
            </a>
          </div>
          <div>
            <img src={MESSAGE_ICON} alt='留言' />
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Home;
