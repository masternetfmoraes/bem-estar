export default function Footer(){
    return(
        <>
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Casa de Repouso Bem Estar™</a>. <a href="https://wa.me/5519987164353">(19) 98716-4353</a>.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.google.com/maps/dir/-23.9626867,-46.4135354/casa+de+repouso+bem+estar/@-23.4267715,-47.460042,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x94c8b98511613355:0x3d893f69a8d23526!2m2!1d-47.1638268!2d-22.8941464?entry=ttu" className="hover:underline">R. Cícero Ramos Meira, 186 - Jardim Nossa Sra. de Fatima, Hortolândia - SP, 13185-432</a>
                </li>
            </ul>
        </footer>
        </>
    )
}