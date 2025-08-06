import { founders } from '@/data';
import AboutComponent from '../components/About';
import FeaturedDoctorsSection from '@/components/FeaturedDoctorsSection';

export default function AboutUs() {
    return <>
        <AboutComponent founders={founders} />
        <FeaturedDoctorsSection />
    </>
}
