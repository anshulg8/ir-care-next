import { founders } from '@/data';
import AboutComponent from '../components/About';

export default function About() {
    return <>
        <AboutComponent founders={founders.slice(1, 3)} />;
    </>
}
