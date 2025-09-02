import { featuredDoctors, founders } from '@/data';
import AboutComponent from '../components/About';

export default function AboutUs() {
    return <>
        <AboutComponent
            founders={founders}
            advisors={featuredDoctors.slice(0, 2)}
        />
    </>
}
