<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <link rel="stylesheet" href="estilosp.css" />
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Brygada+1918&family=Calligraffitti&family=Press+Start+2P&family=Roboto:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <title >Ectoplasmic Adventure</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n\t\tbody {\n\t\t  background-image: url('Pixel_Art_Background.jpg'); /* Reemplaza 'tu-archivo.gif' con la ruta de tu archivo GIF */\n\t\t  background-size: cover;\n\t\t  background-repeat: no-repeat;\n\t\t  background-attachment: fixed;\n\t\t}\n\t\n\t\t/* Estilos para el contenido en el fondo */\n\t\t.contenido {\n\t\t  text-align: center;\n\t\t  padding: 100px;\n\t\t  color: white;\n\t\t  font-size: 24px;\n\t\t}\n\t  "
    }}
  />
  {/*Añadir Redes Sociales*/}
  <div className="social">
    <ul>
      <li>
        <a
          href="https://twitter.com/i/flow/login?redirect_after_login=%2Fectoplasma86248"
          className="twitter"
        />
      </li>
    </ul>
  </div>
  {/*Añadir Redes Sociales*/}
  {/*Navegador*/}
  <nav className="menu" id="menu">
    <div className="contenedor contenedor-botones-menu">
      <button id="btn-menu-barras" className="btn-menu-barras">
        <i className="fas fa-bars" />
      </button>
      <button id="btn-menu-cerrar" className="btn-menu-cerrar">
        <i className="fas fa-times" />
      </button>
    </div>
    <div className="contenedor contenedor-enlaces-nav">
      <div className="btn-departamentos" id="btn-departamentos">
        <p>
          <img src="Solanaa.png" alt="solana" width="50px" height="50px" />{" "}
          <span>Solana</span>
        </p>
        <i className="fas fa-caret-down" />
      </div>
      <div className="enlaces">
        <button className="btn-abrir-popup" id="btn-abrir-popup">
          Integrantes
        </button>
        <button className="juego1" id="juego1">
          <a href="./Snake Game/index.html" id="Snake">
            Ectoplasmic Adventure
          </a>
        </button>
        <button className="juego2" id="juego2">
          <a href="http://localhost:3001/" id="Dino">
            Transacciones
          </a>
        </button>
      </div>
      {/*Navegador*/}
      {/*Popup De Los Integrantes*/}
      <div className="overlay" id="overlay">
        <div className="popup" id="popup">
          <a href="#" id="btn-cerrar-popup" className="btn-cerrar-popup">
            <i className="fa-regular fa-xmark">X</i>
          </a>
          <h3 className="titulo-pop">INTEGRANTES:</h3>
          <h4 className="integrantes-pop">1 Diego Antonio Torres Moreno</h4>
          <h4 className="integrantes-pop">2 Angel Orlando Aguilar Sanchez</h4>
          <h4 className="integrantes-pop">
            3 Cristofer Joel Santiago Siqueiros
          </h4>
          <h4 className="integrantes-pop">4 Jose Daniel Garcia Nunez</h4>
          <h4 className="integrantes-pop">5 Marlon Alexis Diaz Bautista</h4>
        </div>
      </div>
    </div>
    {/*Fin del POPUP*/}
    <div className="contenedor contenedor-grid">
      <div className="grid" id="grid">
        <div className="categorias">
          <button className="btn-regresar">
            <i className="fas fa-arrow-left" /> Regresar
          </button>
          <h3 className="subtitulo">Categorias</h3>
          <a href="#" data-categoria="historia">
            Mercado <i className="fas fa-angle-right" />
          </a>
          <a href="#" data-categoria="impacto">
            Donaciones <i className="fas fa-angle-right" />
          </a>
        </div>
        {/*SUBCATEGORIAS*/}
        <div className="contenedor-subcategorias">
          <div className="subcategoria " data-categoria="historia">
            <div className="enlaces-subcategoria">
              <button className="btn-regresar">
                <i className="fas fa-arrow-left" />
                Regresar
              </button>
              <h3 className="subtitulo">Mercado</h3>
              <button className="btn-info" id="botonv" onclick="mostrarv();">
                Productos de videojuegos
              </button>
            </div>
          </div>
          <div className="subcategoria" data-categoria="impacto">
            <div className="enlaces-subcategoria">
              <button className="btn-regresar">
                <i className="fas fa-arrow-left" />
                Regresar
              </button>
              <h3 className="subtitulo">Donaciones</h3>
              <button className="btn-info" id="botoni" onclick="mostrari();">
                Dona aqui
              </button>
            </div>
          </div>
          {/*Subcategoria de desarrollo*/}
          <div className="subcategoria" data-categoria="desarrollo">
            <div className="enlaces-subcategoria">
              <button className="btn-regresar">
                <i className="fas fa-arrow-left" />
                Regresar
              </button>
            </div>
            <div className="subcategoria" data-categoria="industria">
              <div className="enlaces-subcategoria">
                <button className="btn-regresar">
                  <i className="fas fa-arrow-left" />
                  Regresar
                </button>
                <button
                  className="btn-info"
                  id="botonli"
                  onclick="mostrarli();"
                >
                  La Industria
                </button>
                <button
                  className="btn-info"
                  id="botonis"
                  onclick="mostraris();"
                >
                  Impacto Economico y Social
                </button>
                <button
                  className="btn-info"
                  id="botonad"
                  onclick="mostrarad();"
                >
                  Algunos Desafios
                </button>
                <button
                  className="btn-info"
                  id="botonmx"
                  onclick="mostrarmx();"
                >
                  Cuanto Tiempo Pasan los Mexicanos Jugando
                </button>
              </div>
              <div className="banner-subcategoria">
                <a href="#">
                  <img src="./Img/industria-ban.jpg" alt="" />
                </a>
              </div>
              <div className="galeria-subcategoria">
                <a href="#">
                  <img src="./Img/industria1.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="./Img/industria2.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="./Img/industria3.jpg" alt="" />
                </a>
                <a href="#">
                  <img src="./Img/industria4.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  {/*Article*/}
  <main className="contenedor">
    <article>
      <div id="pantalla">
        <div className="container">
          <div className="cubo">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="loading">
            <div>
              <br />
              <br />
              <h1 className="h1-cubo">
                Entrando <br /> <br /> a Solana
              </h1>
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    "\n\t\t\t\t\t\t.loader {\n\t\t\t\t\t\t  display: flex;\n\t\t\t\t\t\t  justify-content: center;\n\t\t\t\t\t\t  align-items: center;\n\t\t\t\t\t\t  height: 100vh;\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t.dot {\n\t\t\t\t\t\t  width: 15px;\n\t\t\t\t\t\t  height: 15px;\n\t\t\t\t\t\t  background-color: #ffffff;\n\t\t\t\t\t\t  border-radius: 50%;\n\t\t\t\t\t\t  margin: 0 5px;\n\t\t\t\t\t\t  animation: bounce 1s infinite ease-in-out;\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t.dot:nth-child(2) {\n\t\t\t\t\t\t  animation-delay: 0.2s;\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t.dot:nth-child(3) {\n\t\t\t\t\t\t  animation-delay: 0.4s;\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t.dot:nth-child(4) {\n\t\t\t\t\t\t  animation-delay: 0.6s;\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t.dot:nth-child(5) {\n\t\t\t\t\t\t  animation-delay: 0.8s;\n\t\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t\t@keyframes bounce {\n\t\t\t\t\t\t  0%, 100% {\n\t\t\t\t\t\t\ttransform: translateY(0);\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t  50% {\n\t\t\t\t\t\t\ttransform: translateY(-20px);\n\t\t\t\t\t\t  }\n\t\t\t\t\t\t}\n\t\t\t\t\t  "
                }}
              />
              <div className="loader">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
      {/*Info de la historia de los videojuegos*/}
      <div id="infov">
        <h1
          className="lines-effect"
          id="botonv"
          onclick="mostrarv(); ocultarcub();"
        >
          Productos Disponibles
        </h1>
        <br />
        <br />
        <p />
        <br />
        <img src="pingu1.png" alt="" />
        <img src="pingu5.png" alt="" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarv(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infoe">
        <br />
        <h1
          className="lines-effect"
          id="botone"
          onclick="mostrare(); ocultarcub();"
        >
          1970-1979 La Eclosion De Los Videojuegos
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/space.jpg" alt="" />
        <img src="./Img/asteroids.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultare(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="info8b">
        <br />
        <h1
          className="lines-effect"
          id="boton8b"
          onclick="mostrar8b(); ocultarcub();"
        >
          1980-1989 La Decada De Los 8-Bits
        </h1>
        <br />
        <br />
        <p />
        <br />
        <img src="./Img/8bits.jpg" alt="" />
        <img src="./Img/8bits2.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultar8b(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="info3d">
        <br />
        <h1
          className="lines-effect"
          id="boton3d"
          onclick="mostrar3d(); ocultarcub();"
        >
          1990-1999 La Revolucion Del 3D
        </h1>
        <br />
        <br />
        <p />
        <br />
        <img src="./Img/3d1.jpg" alt="" />
        <img src="./Img/3d2.jpg" alt="" align="right" />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultar3d(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infons">
        <br />
        <h1
          className="lines-effect"
          id="botonns"
          onclick="mostrarns(); ocultarcub();"
        >
          Desde el:2000 El Comienzo De Un Nuevo Siglo
        </h1>
        <br />
        <br />
        <p />
        <br />
        <img src="./Img/nuevos.jpg" alt="" />
        <img src="./Img/nuevos2.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarns(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      {/*info del impacto social*/}
      <div id="infoi">
        <br />
        <h1
          className="lines-effect"
          id="botoni"
          onclick="mostrari(); ocultarcub();"
        >
          Dona aqui
        </h1>
        <br />
        <br />
        <p />
        <br />
        <img src="solana.png" alt="" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultari(); mostrarcub();"
        >
          Ocultar info
        </button>
      </div>
      <div id="infom">
        <br />
        <h1
          className="lines-effect"
          id="botonm"
          onclick="mostrarm(); ocultarcub();"
        >
          Mejora de las Capacidades Cognitivas
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/mejora1.jpg" alt="" />
        <img src="./Img/mejora2.webp" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarm(); mostrarcub();"
        >
          Ocultar info
        </button>
      </div>
      <div id="infor">
        <br />
        <h1
          className="lines-effect"
          id="botonr"
          onclick="mostrarr(); ocultarcub();"
        >
          Reflejos de la Sociedad
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/reflejos.jfif" alt="" />
        <img src="./Img/reflejos2.jfif" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarr(); mostrarcub();"
        >
          Ocultar info
        </button>
      </div>
      <div id="infoa">
        <br />
        <h1
          className="lines-effect"
          id="botona"
          onclick="mostrara(); ocultarcub();"
        >
          Adiccion a Los Videojuegos
        </h1>
        <br />
        <br />
        <p>info</p>
        <h4>sub</h4>
        <p>info</p>
        <br />
        <img src="./Img/adiccioni.jpg" alt="" />
        <img src="./Img/adiccioni2.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultara(); mostrarcub();"
        >
          Ocultar info
        </button>
      </div>
      {/*Info de desarrollo de videojuegos*/}
      <div id="infod">
        <br />
        <h1
          className="lines-effect"
          id="botond"
          onclick="mostrard(); ocultarcub();"
        >
          Desarrollo De Los Videojuegos
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/desarrolloi1.jpg" alt="" />
        <img src="./Img/desarrolloi2.webp" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultard(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infof1">
        <br />
        <h1
          className="lines-effect"
          id="botond"
          onclick="mostrarf1(); ocultarcub();"
        >
          Fase De Concepción
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/concepcion.png" alt="" />
        <img src="./Img/concepcion2.png" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarf1(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infof2">
        <br />
        <h1
          className="lines-effect"
          id="botonf2"
          onclick="mostrarf2(); ocultarcub();"
        >
          Fase De Diseño
        </h1>
        <br />
        <br />
        <p>ifo</p>
        <br />
        <img src="./Img/diseño.jpg" alt="" />
        <img src="./Img/diseño2.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarf2(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infof3">
        <br />
        <h1
          className="lines-effect"
          id="botonf3"
          onclick="mostrarf3(); ocultarcub();"
        >
          Fase de Planificacion
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/planificacion.png" alt="" />
        <img src="./Img/planificacion2.png" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarf3(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infof4">
        <br />
        <h1
          className="lines-effect"
          id="botonf4"
          onclick="mostrarf4(); ocultarcub();"
        >
          Fase de Produccion
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/produccion2.jpg" alt="" />
        <img src="./Img/produccion.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarf4(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infof5">
        <br />
        <h1
          className="lines-effect"
          id="botonf5"
          onclick="mostrarf5(); ocultarcub();"
        >
          Fase de Pruebas
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/pruebas.jpeg" alt="" />
        <img src="./Img/pruebas2.jpeg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarf5(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infof6">
        <br />
        <h1
          className="lines-effect"
          id="botonf6"
          onclick="mostrarf6(); ocultarcub();"
        >
          Fase de Distribucion/Marketing
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/market.jfif" alt="" />
        <img src="./Img/market2.jfif" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarf6(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infof7">
        <br />
        <h1
          className="lines-effect"
          id="botonf7"
          onclick="mostrarf7(); ocultarcub();"
        >
          Fase de Mantenimiento
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/mantenimiento.jfif" alt="" />
        <img src="./Img/mantenimiento.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarf7(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      {/*Industria de los videojuegos*/}
      <div id="infoli">
        <br />
        <h1
          className="lines-effect"
          id="botonli"
          onclick="mostrarli(); ocultarcub();"
        >
          La Industria
        </h1>
        <br />
        <br />
        <p>info</p>
        <p>info</p>
        <br />
        <img src="./Img/industriai.jfif" alt="" />
        <img src="./Img/industriai2.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarli(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infois">
        <br />
        <h1
          className="lines-effect"
          id="botonis"
          onclick="mostraris(); ocultarcub();"
        >
          Impacto Economico y Social
        </h1>
        <br />
        <p></p>
        <ul>
          <li />
          <li />
        </ul>
        <p />
        <br />
        <img src="./Img/economico.jpg" alt="" />
        <img src="./Img/economico2.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultaris(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infoad">
        <br />
        <h1
          className="lines-effect"
          id="botonad"
          onclick="mostrarad(); ocultarcub();"
        >
          Algunos Desafios
        </h1>
        <br />
        <br />
        <p>ifo</p>
        <br />
        <img src="./Img/Desafios.png" alt="" />
        <img src="./Img/Desafios2.png" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarad(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
      <div id="infomx">
        <br />
        <h1
          className="lines-effect"
          id="botonmx"
          onclick="mostrarmx(); ocultarcub();"
        >
          Cuanto Tiempo Pasan Los Mexicanos Jugando
        </h1>
        <br />
        <br />
        <p>info</p>
        <br />
        <img src="./Img/mexicanos.jpg" alt="" />
        <img src="./Img/mexicanos2.jpg" alt="" align="right" />
        <br />
        <br />
        <button
          className="btn-cerrar"
          id="cerrar"
          onclick="ocultarmx(); mostrarcub();"
        >
          Ocultar Info
        </button>
      </div>
    </article>
  </main>
</>

import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
    Connection,
    SystemProgram,
    Transaction,
    PublicKey,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
    SendTransactionError,
} from "@solana/web3.js";
import { useStorageUpload } from "@thirdweb-dev/react";

import axios from "axios";

const SOLANA_NETWORK = "devnet";

const Home = () => {
    const [publicKey, setPublicKey] = useState(null);
    const router = useRouter();
    const [balance, setBalance] = useState(0);
    const [receiver, setReceiver] = useState(null);
    const [amount, setAmount] = useState(null);
    const [explorerLink, setExplorerLink] = useState(null);

    const [uploadUrl, setUploadUrl] = useState(null);
    const [url, setUrl] = useState(null);
    const [statusText, setStatusText] = useState("");

    useEffect(() => {
        let key = window.localStorage.getItem("publicKey"); //obtiene la publicKey del localStorage
        setPublicKey(key);
        if (key) getBalances(key);
        if (explorerLink) setExplorerLink(null);
    }, []);

    const handleReceiverChange = (event) => {
        setReceiver(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleSubmit = async () => {
        console.log("Este es el receptor", receiver);
        console.log("Este es el monto", amount);
        sendTransaction();
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
        console.log("Si se esta seteando la URL", url);
    };

    //Funcion para Iniciar sesion con nuestra Wallet de Phantom

    const signIn = async () => {
        //Si phantom no esta instalado
        const provider = window?.phantom?.solana;
        const { solana } = window;

        if (!provider?.isPhantom || !solana.isPhantom) {
            toast.error("Phantom no esta instalado");
            setTimeout(() => {
                window.open("https://phantom.app/", "_blank");
            }, 2000);
            return;
        }
        //Si phantom esta instalado
        let phantom;
        if (provider?.isPhantom) phantom = provider;

        const { publicKey } = await phantom.connect(); //conecta a phantom
        console.log("publicKey", publicKey.toString()); //muestra la publicKey
        setPublicKey(publicKey.toString()); //guarda la publicKey en el state
        window.localStorage.setItem("publicKey", publicKey.toString()); //guarda la publicKey en el localStorage

        toast.success("Tu Wallet esta conectada 👻");

        getBalances(publicKey);
    };

    //Funcion para cerrar sesion con nuestra Wallet de Phantom

    const signOut = async () => {
        if (window) {
            const { solana } = window;
            window.localStorage.removeItem("publicKey");
            setPublicKey(null);
            solana.disconnect();
            router.reload(window?.location?.pathname);
        }
    };

    //Funcion para obtener el balance de nuestra wallet

    const getBalances = async (publicKey) => {
        try {
            const connection = new Connection(
                clusterApiUrl(SOLANA_NETWORK),
                "confirmed"
            );

            const balance = await connection.getBalance(
                new PublicKey(publicKey)
            );

            const balancenew = balance / LAMPORTS_PER_SOL;
            setBalance(balancenew);
        } catch (error) {
            console.error("ERROR GET BALANCE", error);
            toast.error("Something went wrong getting the balance");
        }
    };

    //Funcion para enviar una transaccion
    const sendTransaction = async () => {
        try {
            //Consultar el balance de la wallet
            getBalances(publicKey);
            console.log("Este es el balance", balance);

            //Si el balance es menor al monto a enviar
            if (balance < amount) {
                toast.error("No tienes suficiente balance");
                return;
            }

            const provider = window?.phantom?.solana;
            const connection = new Connection(
                clusterApiUrl(SOLANA_NETWORK),
                "confirmed"
            );

            //Llaves

            const fromPubkey = new PublicKey(publicKey);
            const toPubkey = new PublicKey(receiver);

            //Creamos la transaccion
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey,
                    toPubkey,
                    lamports: amount * LAMPORTS_PER_SOL,
                })
            );
            console.log("Esta es la transaccion", transaction);

            //Traemos el ultimo blocke de hash
            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = fromPubkey;

            //Firmamos la transaccion
            const transactionsignature = await provider.signTransaction(
                transaction
            );

            //Enviamos la transaccion
            const txid = await connection.sendRawTransaction(
                transactionsignature.serialize()
            );
            console.info(`Transaccion con numero de id ${txid} enviada`);

            //Esperamos a que se confirme la transaccion
            const confirmation = await connection.confirmTransaction(txid, {
                commitment: "singleGossip",
            });

            const { slot } = confirmation.value;

            console.info(
                `Transaccion con numero de id ${txid} confirmado en el bloque ${slot}`
            );

            const solanaExplorerLink = `https://explorer.solana.com/tx/${txid}?cluster=${SOLANA_NETWORK}`;
            setExplorerLink(solanaExplorerLink);

            toast.success("Transaccion enviada con exito :D ");

            //Actualizamos el balance
            getBalances(publicKey);
            setAmount(null);
            setReceiver(null);

            return solanaExplorerLink;
        } catch (error) {
            console.error("ERROR SEND TRANSACTION", error);
            toast.error("Error al enviar la transaccion");
        }
    };

    //Función para subir archivos a IPFS

    const { mutateAsync: upload } = useStorageUpload();

    const uploadToIpfs = async (file) => {
        setStatusText("Subiendo a IPFS...");
        const uploadUrl = await upload({
            data: [file],
            options: {
                uploadWithGatewayUrl: true,
                uploadWithoutDirectory: true,
            },
        });
        return uploadUrl[0];
    };

    // URL a Blob
    const urlToBLob = async (file) => {
        setStatusText("Transformando url...");
        await fetch(url)
            .then((res) => res.blob())
            .then((myBlob) => {
                // logs: Blob { size: 1024, type: "image/jpeg" }

                myBlob.name = "blob.png";

                file = new File([myBlob], "image.png", {
                    type: myBlob.type,
                });
            });

        const uploadUrl = await uploadToIpfs(file);
        console.log("uploadUrl", uploadUrl);

        setStatusText(`La url de tu archivo es: ${uploadUrl} `);
        setUploadUrl(uploadUrl);

        return uploadUrl;
    };

    //Funcion para crear un NFT
    const generateNFT = async () => {
        try {
            setStatusText("Creando tu NFT...❤");
            const mintedData = {
                name: "Mi primer NFT con Superteam MX",
                imageUrl: uploadUrl,
                publicKey,
            };
            console.log("Este es el objeto mintedData:", mintedData);
            setStatusText(
                "Minteando tu NFT en la blockchain Solana 🚀 Porfavor espera..."
            );
            const { data } = await axios.post("/api/mintnft", mintedData);
            const { signature: newSignature } = data;
            const solanaExplorerUrl = `https://solscan.io/tx/${newSignature}?cluster=${SOLANA_NETWORK}`;
            console.log("solanaExplorerUrl", solanaExplorerUrl);
            setStatusText(
                "¡Listo! Tu NFT se a creado, revisa tu Phantom Wallet 🖖"
            );
        } catch (error) {
            console.error("ERROR GENERATE NFT", error);
            toast.error("Error al generar el NFT");
        }
    };

    return (
        <div className="h-screen bg-purple-500">
            <div className="flex flex-col  w-auto h-auto  bg-purple-800">
                <div className="flex flex-col py-24 place-items-center justify-center">
                    <h1 className="text-5xl font-bold pb-10 text-purple-500">
                        Transacciones
                    </h1>

                    {publicKey ? (
                        <div className="flex flex-col py-24 place-items-center justify-center">
                            <br />

                            <h1 className="text-2xl font-bold text-white">
                                Tu numero de Wallet es {publicKey}
                            </h1>

                            <br />

                            <h1 className="text-2xl font-bold text-white">
                                Tu balance es {balance} SOL
                            </h1>
                            <br />
                            <h1 className="text-2xl  text-white">
                                Para comprar algo envie al Wallet: 4mEnBNpVmuUorJoRwbmXXQ5W1CTaxmebMQxE4dShryFJ
                            </h1>

                            <input
                                className="h-8 w-72 mt-4   border-2 border-black "
                                type="text"
                                onChange={handleReceiverChange}
                            />
                            <br />
                            <h1 className="text-2xl  text-white">
                                Cantidad de SOL a enviar:
                            </h1>
                            <input
                                className="h-8 w-72 mt-4   border-2 border-black "
                                type="text"
                                onChange={handleAmountChange}
                                
                            />
                            <br />
                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
                                onClick={() => {
                                    handleSubmit();
                                }}
                            >
                                Enviar ⚡
                            </button>
                            <br />

                            <a href={explorerLink}>
                                <h1 className="text-md font-bold text-sky-500">
                                    {explorerLink}
                                </h1>
                            </a>
                            <br />
                            <br />
                            <button
                                onClick={() => {
                                    urlToBLob();
                                }}
                            >
                            </button>

                            <br />

                            <p>
                                {statusText}
                            </p>

                            <br />

                            {uploadUrl ? (
                                <button
                                    className="inline-flex h-8 w-52 justify-center bg-purple-800 font-bold text-white"
                                    onClick={() => {
                                        generateNFT();
                                    }}
                                >
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        toast.error(
        
                                        );
                                    }}
                                >
                                </button>
                            )}

                            <br />
                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
                                onClick={() => {
                                    signOut();
                                }}
                            >
                                Desconecta tu wallet 👻
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col place-items-center justify-center">
                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-purple-600 font-bold text-white"
                                onClick={() => {
                                    signIn();
                                }}
                            >
                                Conecta tu wallet 👻
                            </button>
                        </div>
                    )}
                </div>
                <Toaster position="bottom-center" />
            </div>
        </div>
    );
};

export default Home;
