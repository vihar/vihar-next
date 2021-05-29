// layout
import { SiteLayout } from 'layouts';
// react bootstrap
import { Image } from 'react-bootstrap';

function AboutPage() {
  return (
    <SiteLayout>
      <Image
        className="rounded-3 img-fluid my-5 mx-auto d-block"
        src="/vihar_color.jpg"
        width="300"
      />

      <p className="text-muted p-small">
        Hi, I'm Vihar Kurama. I'm a developer, writer, and creator.
        <br />
        <br />
        Right now, I'm building scalable products at Caravel.AI and Soulpage IT. My primary work
        involves managing dev teams, architecturing applications and doing heavy frontend
        engineering.
        <br />
        <br />
        I'm also passionate about Machine Learning as well. I'm consulting at Eprosoft America Inc,
        where I lead the ML division, working on projects related to Information Extraction, NER and
        Speech.
        <br />
        <br />
        Apart from these, I've written several articles relating to programming languages, web
        development and machine learning at Auth0, Paperspace, BuiltIn, Medium and Nanonets. <br />
        You can find me on Twitter where I talk about design and development, or on GitHub, where
        I'm building in the open.
      </p>
    </SiteLayout>
  );
}

export default AboutPage;
