import { Link } from 'react-router-dom';

function App() {
  return (
    <div id="hero" className="min-h-screen bg-slate-50 dark:bg-zinc-900/100 dark:text-white">
      <header className="text-white sticky top-0 z-10 backdrop-blur-sm">
        <section className="max-w-6xl mx-auto py-6 px-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Global Automation</h1>

          <a
            href="https://wa.me/5511942476485?text=Olá%2C%20vi%20sua%20campanha%20do%20no%20site%21"
            className="bg-blue-500 px-8 py-2 rounded-lg text-black whitespace-nowrap"
          >
            Entrar em Contato
          </a>
        </section>

        <hr className="border-t border-gray-700 mt-1" />
      </header>

      <main className="max-w-4xl mx-auto mt-40">
        <section className="flex flex-col items-center gap-6 text-center py-20">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-8xl font-bold text-white">
              Automações <br /> Para sua empresa
            </h1>

            <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
              Automações com o n8n e criação de chatbots
            </p>
          </div>

          <a
            href="https://wa.me/5511942476485?text=Olá%2C%20vi%20sua%20campanha%20do%20no%20site%21"
            className="mt-4 text-sm md:text-base lg:text-lg bg-blue-500 px-8 py-2 rounded-lg text-black whitespace-nowrap shadow-[0_15px_25px_-5px_rgba(59,130,246,0.4)]"
          >
            Fale conosco
          </a>
        </section>

        {/* ------------------ POLÍTICA DE PRIVACIDADE ------------------ */}
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <h2>Política de Privacidade</h2>

          <p>
            A sua privacidade é importante para nós. É política do Global Automation respeitar a sua
            privacidade em relação a qualquer informação sua que possamos coletar no site Global
            Automation, e outros sites que possuímos e operamos.
          </p>

          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe
            fornecer um serviço. Fazemos isso por meios justos e legais, com o seu conhecimento e
            consentimento. Também informamos por que estamos coletando e como será usado.
          </p>

          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço
            solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente
            aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou
            modificação não autorizados.
          </p>

          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros,
            exceto quando exigido por lei.
          </p>

          <h3>Compromisso do Usuário</h3>

          <ul>
            <li>Não se envolver em atividades ilegais ou contrárias à boa fé;</li>
            <li>Não difundir conteúdo racista, xenofóbico ou ilegal;</li>
            <li>
              Não causar danos aos sistemas do Global Automation, introduzir vírus ou softwares
              maliciosos.
            </li>
          </ul>

          <h3>Mais informações</h3>

          <p>
            Esta política é efetiva a partir de <strong>10 de Dezembro de 2025</strong>.
          </p>
        </div>


        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed mt-20">

            <h2>1. Termos</h2>
            <p>
              Ao acessar o site <a href="https://global-automation.onrender.com/">Global Automation</a>,
              você concorda em cumprir estes termos de serviço, todas as leis aplicáveis e concorda que é
              responsável pelo cumprimento das leis locais. Se você não concordar com algum desses termos,
              está proibido de usar ou acessar este site. Os materiais são protegidos por direitos autorais
              e marcas comerciais.
            </p>

            <h2>2. Uso de Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou
              software) do site apenas para uso pessoal e não comercial. Esta licença não permite:
            </p>
            <ol>
              <li>Modificar ou copiar os materiais;</li>
              <li>Usar os materiais para fins comerciais;</li>
              <li>Tentar engenharia reversa de qualquer software do site;</li>
              <li>Remover notas de direitos autorais;</li>
              <li>Transferir os materiais para outra pessoa ou espelhá-los em outro servidor.</li>
            </ol>
            <p>
              Esta licença será automaticamente rescindida se você violar qualquer restrição.
            </p>

            <h2>3. Isenção de Responsabilidade</h2>
            <ol>
              <li>
                Os materiais do site são fornecidos "como estão". A Global Automation não oferece garantias
                expressas ou implícitas.
              </li>
              <li>
                A Global Automation não garante precisão ou confiabilidade dos materiais ou sites vinculados.
              </li>
            </ol>

            <h2>4. Limitações</h2>
            <p>
              Em nenhum caso a Global Automation será responsável por danos decorrentes do uso ou incapacidade
              de usar o site, mesmo que avisada da possibilidade desses danos.
            </p>

            <h2>5. Precisão dos Materiais</h2>
            <p>
              Os materiais podem conter erros técnicos, tipográficos ou fotográficos. A Global Automation
              pode alterar conteúdos a qualquer momento sem aviso.
            </p>

            <h2>6. Links</h2>
            <p>
              A Global Automation não é responsável pelos conteúdos de sites vinculados. O uso de qualquer
              link externo é por conta e risco do usuário.
            </p>

            <h3>Modificações</h3>
            <p>
              A Global Automation pode revisar estes termos a qualquer momento sem aviso prévio. Ao usar o site,
              você concorda com a versão atual.
            </p>

            <h3>Lei Aplicável</h3>
            <p>
              Estes termos são regidos pelas leis da Global Automation e você se submete à jurisdição dos
              tribunais locais.
            </p>

          </div>

      </main>
    </div>
  );
}

export default App;
