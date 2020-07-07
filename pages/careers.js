import styled from "styled-components";
import { useTranslation } from "react-i18next";

import Container from "../components/Container";
import Layout from "../components/Layout";
import { ParagraphLarge, Display2 } from "../components/Typography";
import ImageGrid from "../components/ImageGrid";
import WorkWithUs from "../components/WorkWithUs";

import { getInstagramImages } from "../lib/api";

const DisplayWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Subdisplay = styled(ParagraphLarge)`
  color: ${(props) => props.theme.colors.contentSecondary};
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const StyledParagraphLarge = styled(ParagraphLarge)`
  color: ${(props) => props.theme.colors.accent};
`;

const Image = styled.img`
  width: 100%;
`;

const Link = styled.a`
  color: ${(props) => props.theme.colors.accent};
`;

const EMAIL = "careers@ministryofprogramming.com";

function Careers(props) {
  const { images } = props;
  const { t } = useTranslation();

  return (
    <Layout>
      <Container>
        <DisplayWrapper>
          <Display2>{t("Join our team")}</Display2>
          <Subdisplay>
            {t(
              "At MOP we welcome Hackers, Designers, Product Strategists and all other creative people that want to build products that have significant impact!"
            )}
          </Subdisplay>
        </DisplayWrapper>
        <Section>
          <StyledParagraphLarge>
            {t("Who are we and what do we do?")}
          </StyledParagraphLarge>
          <ParagraphLarge>
            {t(
              "Ministry of Programming is a technical co-founding business that specializes in building and growing start-ups from the first line of code into established brands and companies. The company was voted the most innovative company in Bosnia and Herzegovina by the Foreign Investors Council (FCI) and our vision is to bring massive and positive socio-economic change to the world through technology."
            )}
          </ParagraphLarge>
          <Image src="team-player.png" />
          <ParagraphLarge>
            {t(
              "At Ministry of Programming, who we are, how we collaborate with our team and business partners as well as our shared vision is at least as important as our other skill sets. We are extremely proud of our culture and in order to excel and thrive here you need to demonstrate a consistently high level of delivery, be disciplined and show a humble approach (where helping your colleagues and business partner is like a second nature to you). Due to the nature of our business, there is an absolute need for you to adapt to changing environments, work hard and show engagement at all times. In return, you get to work with exceptional people and work with some of the coolest technologies and products both within Bosnia and Herzegovina and across Europe!"
            )}
          </ParagraphLarge>
          <ParagraphLarge>
            {t(
              "We are a supercharged team of 100+ creative people and we are looking forward to hiring a new colleague who wants to help us achieve ambitious goals! At Ministry of Programming, you are more then just an employee. We are building next-generation web and mobile applications that have a real impact on people's lives and you will have large responsibilities from day one, where what you do will have an effect and your opinions and ideas will matter."
            )}
          </ParagraphLarge>
        </Section>
        <Section>
          <StyledParagraphLarge>
            {t("What’s in it for you?")}
          </StyledParagraphLarge>
          <ParagraphLarge>
            {t("We won’t say a lot, take a look")}:
          </ParagraphLarge>
          <Image src="infographic.png" />
          <ParagraphLarge>
            {t(
              "Do you want to be a part of this journey and help shape the future? Then you may well be who we are looking for! Give us a shout at"
            )}{" "}
            <Link href={`mailto:${EMAIL}`}>
              careers@ministryofprogramming.com
            </Link>
            .
          </ParagraphLarge>
        </Section>
        <StyledParagraphLarge>{t("Sweet moments")}</StyledParagraphLarge>
        <ParagraphLarge>{t("Straight from Instagram")}</ParagraphLarge>
        <Section>{images && <ImageGrid images={JSON.parse(images)} />}</Section>
        <WorkWithUs question={t("You have a project?")} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const images = (await getInstagramImages()) || [];

  return {
    props: { images },
  };
}

export default Careers;
