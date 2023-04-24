import SocialIcons from "../general/SocialIcons";

export default function Footer() {


    return (
        <footer className="w-full px-10 lg:px-20 py-5 flex flex-col md:flex-row gap-5 justify-between items-center text-white/50 bg-[#4C4E52] text-white">
            <p>Made by Olaf &quot;Narei&quot; Król</p>

            <SocialIcons />
        </footer>
    )
}