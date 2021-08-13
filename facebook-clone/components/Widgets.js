import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Contact from './Contact';


const contacts = [
    { src: "https://links.papareact.com/f0p", name: "Jef Bezoz" },
    { src: "https://links.papareact.com/kxk", name: "Elon Mask" },
    { src: "https://links.papareact.com/zvy", name: "Bill Gates" },
    { src: "https://links.papareact.com/snf", name: "Mark Zakuerburg" },
    { src: "https://links.papareact.com/d0c", name: "Harry Potter" },
    { src: "https://links.papareact.com/6gg", name: "The Queen" },
    { src: "https://links.papareact.com/r57", name: "James Bond" },
]


function Widgets() {
    return (
        <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
            <div className="flex justify-between items-center text-gray-500 mb-5">
                <h2 className="text-xl">Contacts</h2>
                <VideoCameraIcon className="h-6" />
                <SearchIcon className="h-6" />
                <DotsHorizontalIcon className="h-6" />
            </div>

            {contacts.map(contact => (
                <Contact key={contact.src} contact={contact} />
            ))}
        </div>
    )
}

export default Widgets
