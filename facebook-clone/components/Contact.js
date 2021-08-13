import Image from "next/image";

function Contact({ contact }) {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image
                className="rounded-full"
                objectFit="cover"
                src={contact.src}
                height={50}
                width={50}
                layout="fixed"
            />
            <p>{contact.name}</p>
            <div className="absolute bottom-2 left-7 bg-green-500 h-3 w-3 rounded-full animate-bounce" />
        </div>
    )
}

export default Contact
