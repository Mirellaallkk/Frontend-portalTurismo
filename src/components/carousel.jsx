import React from "react";  // Importa o React
import CardService from "./cardService";  // Importa o componente CardService que será usado para exibir cada card
import { Swiper, SwiperSlide } from 'swiper/react'  // Importa componentes Swiper para o carrossel
import 'swiper/css'  // Importa estilos padrão do Swiper

// Importa imagens para usar nos cards
import catedral from "../assets/imagens/catedral.jpg"
import cristo from "../assets/imagens/cristo.jpg"
import marques from "../assets/imagens/marques.jpg"
import mercadao from "../assets/imagens/mercadao.jpg"
import praca from "../assets/imagens/praca.jpg"
import teatro from "../assets/imagens/teatro.jpg"

// Array de objetos com dados dos pontos turísticos (imagem, título e descrição)
const tourist_places = [
    { Image: catedral, title: " catedral de pouso alegre", description: " Ponto turistico religioso" },
    { Image: cristo, title: " Cristo redentor", description: " Ponto turistico religioso" },
    { Image: marques, title: "Marques Plaza", description: "Hotel 4 estrelas" },
    { Image: mercadao, title: "Mercadão Municipal", description: "Melhor lugar para comprar presentes" },
    { Image: praca, title: " Praça de pouso alegre", description: "Praça Senador José Bento" },
    { Image: teatro, title: "Teatro Municipal", description: "Venha prestigiar nossos artistas municipais" },
]

// Componente funcional Carousel que renderiza o carrossel dos pontos turísticos
const Carousel = () => {

    return (
        <>
            {/* Container principal com z-index alto para sobreposição */}
            <div className=" relative z-10 ">
                {/* Título principal da seção */}
                <h1 className=" text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                    Pontos turísticos locais mais visitados
                </h1>

                <div>
                    {/* Condicional para verificar se há mais de 3 pontos turísticos */}
                    {tourist_places.length > 3 ? (
                        // Caso tenha mais de 3, exibe o Swiper configurado para mostrar 2 ou 3 cards conforme a largura da tela
                        <Swiper
                            slidesPerView={2}  // Número inicial de slides visíveis
                            spaceBetween={20}  // Espaçamento entre os slides
                            loop={true}        // Faz o carrossel loopar infinitamente
                            breakpoints={{     // Configuração responsiva dos slides por view e espaçamento
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {/* Mapeia cada ponto turístico para um slide */}
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    {/* Renderiza o card do ponto turístico */}
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        // Caso tenha 3 ou menos pontos turísticos, configura o Swiper para mostrar menos cards
                        <Swiper
                            slidesPerView={2}  // Número inicial de slides visíveis
                            spaceBetween={20}  // Espaçamento entre os slides
                            loop={true}        // Loop infinito
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,  // Em telas pequenas mostra só 1 slide
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,  // Em telas maiores mostra 2 slides
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {tourist_places.map((place, index) => (
                                <SwiperSlide key={index}>
                                    <CardService
                                        img={place.Image}
                                        alt={place.description}
                                        titulo={place.title}
                                        descricao={place.description}
                                        link="#"
                                        botao="Saiba Mais"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    )}
                </div>
            </div>
        </>
    )
}

export default Carousel  // Exporta o componente para uso externo
