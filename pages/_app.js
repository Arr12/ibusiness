import React from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '../src/assets/fonts/cera-round-pro-cufonfonts-webfont/style.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import '../src/index.css'
import "../src/assets/css/meili-search.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default App;
