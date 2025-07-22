import React from "react";

// Componente funcional CardService que recebe props para renderizar um cartão de serviço/ponto turístico
const CardService = (props) => {
    return (
        <>
            {/* Container principal do card com largura máxima responsiva e estilos de borda, sombra e arredondamento */}
            <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white 
                            border-gray-200 rounded-2xl shadow-md overflow-hidden m-2 flex flex-col ml-auto mr-auto">
                
                {/* Imagem do cartão com largura total, altura responsiva e estilo para cobrir o espaço disponível */}
                <img
                    src={props.img}    // Fonte da imagem passada via props
                    alt={props.alt}    // Texto alternativo da imagem (acessibilidade)
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                />

                {/* Container interno para conteúdo textual com padding e layout em coluna que cresce para preencher o espaço */}
                <div className="p-4 flex flex-col flex-grow">
                    
                    {/* Título do cartão com tamanho de texto responsivo e fonte em negrito */}
                    <h1 className="text-lg sm:text-x1 font-semibold text-gray-950">{props.titulo}</h1>

                    {/* Descrição do cartão com cor cinza e margem superior */}
                    <p className="text-gray-800 mt-2 text-sm sm:text-base">{props.descricao}</p>

                    {/* Link estilizado como botão com cor de fundo verde, texto branco, padding, bordas arredondadas e efeito hover */}
                    <a
                        href={props.link}   // URL para onde o botão deve levar
                        className="mt-4 inline-block bg-green-500 text-white px-4 py-4 rounded-3xl text-center
                                   hover:bg-green-300 transition duration-300"
                    >
                        {props.botao}  {/* Texto do botão passado via props */}
                    </a>
                </div>
            </div>
        </>
    );
};

export default CardService;
