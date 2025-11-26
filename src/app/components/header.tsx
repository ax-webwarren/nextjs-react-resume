import styles from './styles.module.css';
import NavigationComponent from '@/components/navigation';

export default function HeaderComponent() {
    return (
        <nav className="navbar navbar-expand-md epic-top-nav grid-cols-2 grid bg-black fixed lg:relative max-h-120 w-auto">
            <div className="tagline flex gap-3 text-white m-5 p-4">
                <span className="tagline-indicator">//</span>
                <div id="hs_cos_wrapper_module_1591647324229284_" className="hs_cos_wrapper hs_cos_wrapper_widget hs_cos_wrapper_type_inline_text" data-hs-cos-general-type="widget" data-hs-cos-type="inline_text" data-hs-cos-field="tagline">PROBLEMS? CREATE SOLUTIONS.</div>
            </div>
            <div className="ml-auto epic-nav m-5">
                <NavigationComponent />
            </div>
        </nav>
    )
}

