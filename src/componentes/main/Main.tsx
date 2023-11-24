import React, {useEffect, useState} from "react"
import axios from "axios"
import Filme from "../filme/Filme"
import './Main.css'

type FilmesTypes = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

const URL_API = "http://localhost:3000/filmes"; 

export default function Main(){
    //hook
    const [texto, setTexto] = useState("")
    const [filmes, setFilmes] = useState<FilmesTypes[]>([]);

    useEffect(() => {
      const buscarFilmes = async () => {
        try {
          const resposta = await axios.get<FilmesTypes[]>(URL_API);
          setFilmes(resposta.data);
        } catch (error) {
          console.log('Erro ao buscar os dados:');
        }
      };
  
      buscarFilmes();
    }, []);

//     const filmes:FilmesTypes[] = [{ 
//         id:1,
//         titulo:"Barbie", 
//         sinopse: "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.", 
//         imagem:"/barbie.png"
//     },
//     {
//         id:2,
//         titulo:"transformers",
//         sinopse:"O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam.", 
//         imagem:"/transformerBanner.jpg"
//     },
//     {
//         id:3,
//         titulo:"Behind the scene", 
//         sinopse: "O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam.",
//         imagem:"/transformerBanner.jpg"
//     },
//     {
//         id:4,
//         titulo:"In the soop", 
//         sinopse: "O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam.",
//         imagem:"/transformerBanner.jpg"
//     },
//     {
//         id:5,
//         titulo:"bring the soul", 
//         sinopse: "O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam.",
//         imagem:"/transformerBanner.jpg"
//     }
// ];


    //A função recebe um atributo chamado e de "event"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto(e.target.value)
    }
    return(
        <>
            <div className="pesquisa">
                <p>Buscar Filme</p>
                <input className='barrapesquisa' type='text' onChange={mudaTexto}/>
                <div>
                    <p className='texto_digitado'>pesquisa: {texto}</p>
                </div>
            </div>
            <main className="content-main">
            {filmes.filter((filmes)=>filmes.titulo.toLowerCase().includes(texto.toLowerCase())).map((filmes:FilmesTypes)=><Filme key={filmes.id} titulo={filmes.titulo} sinopse={filmes.sinopse} imagem={filmes.imagem}/>)}
            </main>
        </>
    )
}