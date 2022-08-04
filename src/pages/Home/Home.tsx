import { css } from '@emotion/react';
import HOME_BG from '~/assets/home-bg.jpg';
import GITHUB_ICON from '~/assets/github.svg';
import MESSAGE_ICON from '~/assets/message.svg';
import WECHAT_ICON from '~/assets/wechat.svg';
function Home() {
  return (
    <div
      css={css`
        height: 100%;
        background-image: url(${HOME_BG});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
      `}
    >
      <main
        css={css`
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          css={css`
            color: #fff;
            text-align: center;
          `}
        >
          <div>
            <h1
              css={css`
                margin: 0;
                font-size: 4.5rem;
                text-shadow: 1px 1px 1px #333;
              `}
            >
              西红柿
            </h1>
            <div>Look Homeward, Angel</div>
            <a
              css={css`
                color: #666;
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
              justify-content: space-around;
              height: 2rem;
              > div {
                cursor: pointer;
                width: 2rem;
              }
            `}
          >
            <div
              css={css`
                background: url(${WECHAT_ICON});
              `}
            />
            <div
              css={css`
                background: url(${GITHUB_ICON});
              `}
            />
            <div
              css={css`
                background: url(${MESSAGE_ICON});
              `}
            />
          </aside>
        </div>
      </main>
      <footer>
        <div>2nianban</div>
        <div>github</div>
        <div>message</div>
      </footer>
    </div>
  );
}

export default Home;
