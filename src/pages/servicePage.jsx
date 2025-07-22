import React from "react";  // Importa React
import Footer from "../components/footer";  // Importa o componente Footer (rodapé)
import Hero from "../components/hero";      // Importa o componente Hero (banner/área principal)
import Navbar from "../components/navbar";  // Importa o componente Navbar (barra de navegação)
import bgCachoeira from '../assets/imagens/bgCachoeira.png'  // Importa a imagem de fundo para o Hero
import Carousel from "../components/carousel";  // Importa o componente Carousel (carrossel de pontos turísticos)

// Componente funcional ServicePage que representa a página de serviços
const ServicePage = () => {
    return (
        <>
            {/* Container principal que usa flexbox para coluna e ocupa toda a altura da tela */}
            <div className="flex flex-col min-h-screen">
                
                {/* Navbar no topo da página */}
                <Navbar/>

                <div>
                    {/* Componente Hero, que recebe props para configurar o fundo, título, texto, rota do botão e texto do botão */}
                    <Hero 
                        Background={bgCachoeira} 
                        titulo="Portal de Serviços" 
                        paragrafo="Venha conhecer os mais diversos serviços de turismo" 
                        rota="#" 
                        botao="Conhecer Agora" 
                    />

                    <div>
                        {/* Carrossel que mostra os pontos turísticos */}
                        <Carousel/>
                    </div>
                </div>

                {/* Rodapé da página */}
                <Footer />
            </div>
        </>
    )
}

export default ServicePage  // Exporta o componente para ser usado em outras partes da aplicação
