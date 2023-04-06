import Banner from '../components/Banner'
import Works from '../components/Services/Services'
import HWW from '../components/Services/HWW'
import CTA from '../components/CTA'

const Services = () => {
  return (
    <main className='service-page'>
      <Banner url="/services" name="Services" title="Services" classn="services" />
      <Works />
      <HWW />
      <CTA />
    </main>
  )
}

export default Services
