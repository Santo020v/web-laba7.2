import React from "react"
import styles from "./styles.css"

function GoodsCard() {
    return (
        <><Cards image="https://i.pinimg.com/originals/a3/f9/6b/a3f96b85d302cf3d4f375bbd105fddec.png" name="Mango" price="125" />
        <Cards image="https://freepngimg.com/save/156031-pink-guava-free-download-png-hq/1600x1120" name="Guava" price="230" />
        <Cards image="https://www.nicepng.com/png/full/197-1971210_dragon-fruit-png-image.png" name="Dragon Fruit" price="352" />
        <Cards image="https://www.pngmart.com/files/3/Papaya-PNG-File.png" name="Papaya" price="250" />
        <Cards image="https://freepngimg.com/save/9742-avocado-png-clipart/900x900" name="Avocado" price="100" />
        <Cards image="https://avatanplus.com/files/resources/original/584534a84b048158ce55b173.png" name="Marakuya" price="310" /></>
    )
}

export default GoodsCard

function Cards(props) {
    return (
    <div id="info">
        <div id="cards">
            <img src={props.image}></img>
            <h3>{props.name}</h3>
            <br />
            <h2>Cost: {props.price} UAH</h2>
        </div>
    </div>
    )
  }