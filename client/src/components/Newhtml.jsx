import React from "react";
import bluebird from '../icons/BlueBird.svg'
import styles from './Newhtml.module.css'


export default function Newhtml() {

    const orderEmail = "javierferrarimezher@gmail.com";
    const amount = 150000;
    const username = "Javier Ferrari";
    const name = "Zapato Azul";
    return (
    <div style="display: flex;flex-direction: column;align-items: center;;text-align: center;background-color: rgb(106, 203, 233);width: 400px;">
    <div style="display: flex;flex-direction: column;align-items: center;;text-align: center;background-color: rgb(106, 203, 233);width: 400px;">
    <h1 style="color:white;text-shadow: white 2px 5px;font-size:46px;font-family: sans-serif;">Thank you for your Purchase</h1>
    </div>
    <div style="background-color: white;width: 350px;border-radius: 15px;border-right: 1px solid red;
    border-left: 1px solid red;border-top: 1px solid red;">
    <p style="font-family: sans-serif;font-weight: bold;">Detail:</p>
    <ul>
    <li style="font-family: sans-serif;font-weight: bold;"> Username: ${orderEmail}</li> <li style="font-family: sans-serif;">Full Name: </li>
    <li style="font-family: sans-serif;font-weight: bold;"> Amount: $ ${amount}</li>
    <li style="font-family: sans-serif;font-weight: bold;"><a href="http://localhost:3000/" class="button">Detalle de tu compra</a></li>
    </ul>
    <form action="http://localhost:3000/">
    <input type="submit" value="Purchase Detail" />
    </form>
    </div>
    </div>



        // <div className={styles.container} >
        // <div className={styles.head}>
        //     <img src={bluebird} alt="not found" width="150" height="auto" ></img>
        //     <div className={styles.textuser}>{username}</div>
        // </div>

        //     <h1>Thank you for your Purchase</h1>
        
        // <div className={styles.body}>
        // <div>

        // <p className={styles.textuser}>Detail:</p>
        // <div>
        // <h3>{name}</h3>
        // <img width="200px" height="200px" src='https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/colorway/en-US/images/2IHiDmlyovHVN6TiBovsPM/1' alt='not found'></img>

        // </div>
        // <ul>
        // {/* <li className={styles.textuser}> Username: {orderEmail}</li> */}
        // <li className={styles.textuser}> Total Amount: ${amount}</li>
        // </ul>
        // </div>

        // </div>

        // </div>
    )
}

