import { css } from '@emotion/react';
import HOME_BG from '~/assets/home-bg.jpg';
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
      <nav
        css={css`
          display: flex;
          justify-content: space-around;
        `}
      >
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </nav>
      <main
        css={css`
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        `}
      >
        <div css={css``}>
          <div>
            <h1
              css={css`
                font-size: 72px;
                text-shadow: 1px 1px 1px #333;
                color: #fff;
              `}
            >
              西红柿
            </h1>
            <span>12313212</span>
          </div>
          <aside>
            <div>Look Homeward, Angel</div>
            <div>wechat</div>
            <div>github</div>
            <div>message</div>
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
