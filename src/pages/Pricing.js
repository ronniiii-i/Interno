import Banner from "../components/Banner";
import Plan from "../components/Pricing/Plan";

function Pricing() {
  const content1 = [
    "<li>General living space advices</li>",
    "<li>Rennovation advices</li>",
    "<li>Interior design advices</li>",
    "<li>Furniture reorganization</li>",
    "<li>Up to 5 hours meetings</li>",
  ];
  const content2 = [
    "<li>Complete home redesign</li>",
    "<li>Interior and exterior works</li>",
    "<li>Modular interior planning</li>",
    "<li>Kitchen design</li>",
    "<li>Garages organization</li>",
  ];
  const content3 = [
    "Furniture for living room",
    "Furniture refurbishment",
    "Sofas and amchairs",
    "Tables and chairs",
    "Kitchens",
  ];

  function createMarkup(html) {
    return (
      <>
        {html.map((item, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </>
    );
  }

  return (
    <main>
      <Banner
        title="Pricing & Plan"
        url="/pricing"
        name="Pricing"
        classn="pricing"
      />
      <section id="prices">
        <div className="inner flex align-center justify-center wrap">
          <Plan
            tag="Design advices"
            price={29}
            content={createMarkup(content1)}
          />
          <Plan
            tag="Complete Interior"
            price={39}
            content={createMarkup(content2)}
          />
          <Plan
            tag="Furniture Design"
            price={59}
            content={createMarkup(content3)}
          />
        </div>
      </section>
    </main>
  );
}

export default Pricing;
