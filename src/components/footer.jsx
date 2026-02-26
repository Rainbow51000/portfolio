import githubIcon from '@/assets/github-icon.svg';
import linkedinIcon from '@/assets/linkedin-icon.svg';

/**
 * Footer with basic links and info
 * @returns {React.JSX.Element}
 */
export default function Footer() {
    return (
        <footer className="w-full bg-black ">
            <img src={githubIcon}  alt={"Icône GitHub"}/>
            <img src={linkedinIcon}  alt={"Icône LinkedIn"}/>
        </footer>
    )
}