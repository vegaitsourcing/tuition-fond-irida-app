import { HashLink } from 'react-router-hash-link'
import { StyledFooterContactSection } from "./Footer.style";
import { ReactComponent as LinkedinIcon } from "assets/images/linkedin.svg";
import { ReactComponent as FacebookIcon } from "assets/images/facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/images/instagram.svg";
import { IconButton } from "../IconButton/IconButton";

export const FooterContactSection = () => {
    return (
        <StyledFooterContactSection>
            <HashLink className="contact-us" to="/kontakt#contact-us-form">Kontaktiraj nas</HashLink>
            <div className="footer-contact-section-socials">
                <IconButton icon={<LinkedinIcon />} url="https://linkedin.com" />
                <IconButton icon={<FacebookIcon />} url="https://facebook.com" />
                <IconButton icon={<InstagramIcon />} url="https://instagram.com" />
            </div>

            <div className="footer-contact-section-info">
                <a href="tel:+38166556565">+381 66556565</a>
                <a href="tel:+38166556565">+381 66556565</a>
                <a href="https://google.com">Adresa Adresa 45</a>
                <a href="https://google.com">FondPutDev@gmail.com</a>
            </div>
        </StyledFooterContactSection>
    );
};
