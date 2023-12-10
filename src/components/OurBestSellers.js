import React from 'react'
import "../styles/ourBestsellers.css"
import { store } from '../productsStore/Store'
import { useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { cartActions } from '../redux/redux-store'
const OurBestSellers = () => {

    const dispatch = useDispatch();
    return (
        <div className='products-container'>
            <p className='fs-1 fw-semibold text-center mt-3'>OUR BESTSELLERS</p>
            <div className="ourBestsellers-products my-5">
                {store?.map((item) => {
                    if (item.type === "ourBestSellers")
                        return (
                            <div className="card p-4 rounded-4 position-relative border-0 ourBestCart">
                                <Link to={`/${item.id}`} key={item.id} className=''>
                                    <img src={item.primaryImage} alt="" />  
                                    <p className="text-center fw-bold fs-5 mt-3">{item.name}</p>
                                    <p className="fs-5 fw-medium text-center my-2">{item.price}$</p>
                                </Link> 
                            <div style={{display:'flex',alignItems:'flex-start'}} className="text-center fw-bold fs-5 mt-3" >      
                                <a style={{margin:50}} target='_blank' href={item.Amazon}>Amazon</a>
                                <a style={{margin:50}} href="https://in.iherb.com/pr/sukin-signature-facial-moisturiser-4-23-fl-oz-125-ml/82900?gad_source=1&gclid=CjwKCAiAvdCrBhBREiwAX6-6UrbKmn8_XV7bfcvCKVplIql0G2ciDtrIopMXUK2Xr8TFkMNWiRb1YhoCcW8QAvD_BwE&gclsrc=aw.ds">iHerb</a>
                                <a style={{margin:50}} href="https://in.iherb.com/pr/sukin-signature-facial-moisturiser-4-23-fl-oz-125-ml/82900?gad_source=1&gclid=CjwKCAiAvdCrBhBREiwAX6-6UrbKmn8_XV7bfcvCKVplIql0G2ciDtrIopMXUK2Xr8TFkMNWiRb1YhoCcW8QAvD_BwE&gclsrc=aw.ds">iHerb</a>
                                <a style={{margin:50}} href="https://in.iherb.com/pr/sukin-signature-facial-moisturiser-4-23-fl-oz-125-ml/82900?gad_source=1&gclid=CjwKCAiAvdCrBhBREiwAX6-6UrbKmn8_XV7bfcvCKVplIql0G2ciDtrIopMXUK2Xr8TFkMNWiRb1YhoCcW8QAvD_BwE&gclsrc=aw.ds">iHerb</a></div>
                                <button className="btn btn-dark" onClick={() => dispatch(cartActions.addToCart(item))} >BUY NOW</button>
                            </div>
                        )
                })}
            </div>
        </div>
    )
}

export default OurBestSellers