
import FacebookIcon from "../res/facebook.png";
import GoogleIcon from "../res/google.png";
import InstagramIcon from "../res/instagram.png";

export const data = [ {
    img: FacebookIcon,
    name: "facebook",
    href: "auth/facebook",
    alt: "facebook-icon",
    color: "#3B5899",
    txt: "Login with Facebook"
},  {
    img: GoogleIcon,
    name: "google",
    href: "auth/google",
    alt: "google-icon",
    color: "#CB4024",
    txt: "Login with Google"
}, {
    img: InstagramIcon,
    name: "instagram",
    href: "auth/instagram",
    alt: "instagram-icon",
    colors: {
        leftBot: "#fec564",
        leftTop: "#5258cf",
        rightTop: "#893dc2",
        rightBot: "#d9317a",
        baseCoat: "linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
    },
    color: "#d9317a",
    txt: "Login with Instagram"
}];