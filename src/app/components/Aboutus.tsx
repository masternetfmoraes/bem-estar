"use client"
import { InView } from "react-intersection-observer";
export default function Multiple() {
  //triggerOnce={true}
  return (
    <>
    <section id="sobre" className="pb-12">
    <div className="w-full p-10 overflow-hidden rounded-lg bg-white shadow">
      <InView triggerOnce={true}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <p
              className={`pt-10 text-center ${
                inView ? "top-to-bottom" : "hidden"
              } text-black text-3xl pt-5 font-bold`}
            >Sobre nós
            </p>
            <div
              className={`py-5  lg:mb-8  ${
                inView ? "bottom-to-top" : "hidden"
              }`}
            >
              <p className="text-start font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400  text-black">
              A Casa de Repouso Bem Estar, localizada em Hortolândia, é a melhor opção na região de Campinas para quem deseja um cuidado especial e dedicado para os idosos. Os moradores dessa casa de repouso têm acesso a uma estrutura confortável e segura, além de um atendimento personalizado e com muito amor e carinho.
            </p>
            <p className="text-start font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400  text-black">
              A equipe de profissionais da Casa de Repouso Bem Estar é altamente capacitada e especializada para cuidar daqueles que já passaram dos 60 anos. Eles se dedicam com muita atenção e dedicação para garantir que os idosos tenham uma vida plena e feliz, com cuidados médicos, alimentação balanceada e atividades recreativas.
            </p>
            <p className="text-start font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400  text-black">
              Os moradores da Casa de Repouso Bem Estar também contam com a companhia de outros residentes, o que torna a convivência mais agradável e cheia de diversão. Além disso, a casa de repouso disponibiliza atividades regulares e passeios para que eles possam desfrutar da região e conhecer novos lugares.
            </p>
            <p className="text-start font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400  text-black">
              Em resumo, a Casa de Repouso Bem Estar é a melhor opção na região de Campinas para quem busca um cuidado especial e carinhoso para seus idosos. Com uma equipe altamente qualificada e instalações confortáveis, essa casa de repouso se dedica a garantir que os idosos recebam todo o cuidado que precisam para ter uma vida plena e feliz.
            </p>
            </div>
          </div>
        )}
      </InView>
    </div>
    <hr className="h-px my-2 bg-blue-100 shadow-xl border-0 dark:bg-gray-700"></hr>
    </section>
    </>
  );
}
