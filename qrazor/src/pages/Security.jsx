import React from "react";
import styled from 'styled-components';

import Navbar from '../components/Navbar.jsx';
import PageHero from '../components/PageHero.jsx';
import PageContent from '../components/PageContent.jsx';
import Footer from '../components/Footer.jsx';


const Disclaimer = () => {
  return(
    <>
      <Navbar />
      <PageHero
        title="QR SECURITY"
       />
       <PageContent
       title1="Potential Security Risks"
        para1="QR codes are internet links in real world, leading you to a web site or a resource hosted on the web. You, as a user, should always exercise the same caution as you would while browsing online and encountering links."
        para2="QR technology cannot be hacked, however, the security risk for the user does not stem from the QR code itself, but from the online website or resource the QR code will lead you too. In short - QR code could lead you to a suspicious website or malicious code."
        para3="Malicious actors could distribute fake flyers or posters or place them in public places. These fake flyers, posters or other marketing material could contain QR codes which would lead you to a malicious website or a malware. Malicious actors could also print their own QR codes on stickers and place them on legitimate posters and flyers, over the original QR codes."
        title2="How to Stay Safe?"
        para4="QR codes are readable only by machines. Unlike links on the Internet, a user, You, cannot just read them and identify the suspicious links."
        para5="However, you can still protect your self from security risks."
        para6="- Don't scan QR codes from sources you can't verify, e.g. from spam e-mails or from public posters or marketing material of the companies you can't identify or verify."
        para7="- If the QR code is displayed on a poster, flyer, billboard etc, check if the QR code is a part of the original design. Look for the signs of tempering, such as previously mentioned QR code stickers."
        para8="- When a QR code leads you to a landing page of a web site, check the URL, make sure it look authentic."
        para9="- Disable the “open website automatically” function on your phone. That way, when a QR code directs you to a web page, you can view the URL first and check if it’s a legitimate link."
        title3="Conclusion"
        para10="Safety, caution and common sense are always required when you are online. QR codes are no different. Stay safe and enjoy the benefits the QR code has to offer you, as a user, customer and entrepreneur."
       />
      <Footer />
    </>
  );
}

export default Disclaimer;
