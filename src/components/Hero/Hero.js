import hero from "../../assets/hero-image_50.jpg";
import { HeroContainer, HeroText, HeroImageBox, HeroImage } from "./style";
const Hero = ({ heroText }) => {
    return (
        <HeroContainer>
            <HeroText>{heroText}</HeroText>
            <HeroImageBox>
                <HeroImage src={hero} />
            </HeroImageBox>
        </HeroContainer>
    );
};
export default Hero;
