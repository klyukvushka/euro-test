import { createGlobalStyle } from "styled-components";

import LatoLight from "../fonts/Lato/LatoLight.woff";
import LatoLightWoff2 from "../fonts/Lato/LatoLight.woff2";
import LatoRegular from "../fonts/Lato/LatoRegular.woff";
import LatoRegularWoff2 from "../fonts/Lato/LatoRegular.woff2";
import LatoBold from "../fonts/Lato/LatoBold.woff";
import LatoBoldWoff2 from "../fonts/Lato/LatoBold.woff2";
import LatoBlack from "../fonts/Lato/LatoBlack.woff";
import LatoBlackWoff2 from "../fonts/Lato/LatoBlack.woff2";
import MerriweatherBlack from "../fonts/Merriweather/Merriweather-Black.woff";
import MerriweatherBlackWoff2 from "../fonts/Merriweather/Merriweather-Black.woff2";
import MerriweatherBold from "../fonts/Merriweather/Merriweather-Bold.woff";
import MerriweatherBoldWoff2 from "../fonts/Merriweather/Merriweather-Bold.woff2";

export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: "Lato";
        src: url('${LatoLightWoff2}') format('woff2'),
        url('${LatoLight}') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "Lato";
        src: url('${LatoRegularWoff2}') format('woff2'),
        url('${LatoRegular}') format('woff');
        font-weight: 400;
        font-style: normal;
    }

     @font-face {
        font-family: "Lato";
        src: url('${LatoBoldWoff2}') format('woff2'),
        url('${LatoBold}') format('woff');
        font-weight: 700;
        font-style: normal;
    }

     @font-face {
        font-family: "Lato";
     src:  url("${LatoBlackWoff2}") format('woff2'),
        url("${LatoBlack}") format('woff');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
    font-family: 'Merriweather';
    src: url('${MerriweatherBoldWoff2}') format('woff2'),
    url('${MerriweatherBold}') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Merriweather';
    src: url("${MerriweatherBlackWoff2}") format('woff2'),
        url('${MerriweatherBlack}') format('woff');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
}
`;
