"use client"
export default function Servicos(){
    return (
        <>
        <section id="servicos" className="py-10"> 
            <div className=" flex flex-col bg-white items-center px-12">
                <div className="flex flex-col w-full mx-auto prose text-left prose-blue">
                    <div className="w-full mx-auto pt-12">
                        <p className="text-5xl font-bold py-5">Serviços .</p>
                        <p className="text-2xl font-bold">Quais os serviços que oferecemos .</p>
                        <p className="">Todos serviços que oferemos são serviços de excelência com os 
                        mais completos serviços especializados e com uma infra-estrutura confortável 
                        e moderna, além de profissionais treinados para identificar as necessidades 
                        de cada hóspede.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center  mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                    <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.408 7.5h.01m-6.876 0h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM4.6 11a5.5 5.5 0 0 0 10.81 0H4.6Z"/>
                    </svg>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <p className="text-2xl font-bold">Terapia Ocupacional.</p>
                        <p>Atividades terapêuticas para ajudar as pessoas a melhorar sua capacidade de realizar atividades diárias significativas, promovendo a saúde, reabilitação e inclusão social.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                    <>
                        <svg fill="#000000" width="50px" height="50px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3,16H8v5a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V8H3A1,1,0,0,0,2,9v6A1,1,0,0,0,3,16Zm1-6H9a1,1,0,0,0,1-1V4h4V9a1,1,0,0,0,1,1h5v4H15a1,1,0,0,0-1,1v5H10V15a1,1,0,0,0-1-1H4Z"/></svg>
                    </>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <p className="text-2xl font-bold">Médicos e  Enfemeiras 24 Horas.</p>
                        <p>Com médicos e enfermeiros 24 horas por dia,  altamente capacitados e treinados para cuidar de nossos hóspedes, promovendo uma qualidade de vida e saúde entre nossos hóspedes .</p>
                    </div>
                </div>
                <div className="flex flex-col items-center pb-10 mx-auto my-10 border-b border-gray-200 max-w-7xl sm:flex-row">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-20 h-20 text-neutral-600 rounded-full bg-gray-50 sm:mr-10">
                        <>
                        <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"/>
                        </svg>
                        </>
                    </div>
                    <div className="flex-grow mt-6 prose text-center sm:text-left sm:mt-0 prose-md">
                        <p className="text-2xl font-bold">Cuidadores treinados</p>
                        <p>Todos nossos cuidadores estão habilitados em todas normas, treinamentos e requisitos para oferecer o melhor para nossos hóspedes, onde auxliam no conforto e qualidade de vida para todos</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}