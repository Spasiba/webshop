import axios from "axios";
import  React,{ createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const CustomContext = createContext();

export const Context = (props) =>{

    const [shop,setShop] = useState([])
    const [user,setUser] = useState({
        login: '',
    })

    const [product, setProduct] = useState({})
    const [order, setOrder] = useState({})
    const [cart, setCart] = useState([])
    const [ticket,setTicket] = useState([])

    const getAllClothes = () => {
        axios('http://localhost:8080/clothes')
       .then(({data}) => setShop(data))
    }

    const addCart  = (product) => {

        let idx = cart.findIndex((item) => item.id === product.id && item.color === product.color && item.size === product.size)
        
        if (idx >= 0){
           setCart(cart.map((item) => {
               if(item.id === product.id && item.color === product.color && item.size === product.size){
                   return {...item, count: +item.count + +product.count}
               }else{
                   return item
               }
           }))
        }else{
            setCart([...cart, product])
        }
        
    }

    const delateCart = (id, color , size) => {
        setCart(cart.filter((item) => {
            return item.id !== id && item.color !== color && item.size !== size
        }))
    }

    const updateCart = (id, color, size, count) => {
        setCart(cart.map((item) => {
            if(item.id === id && item.color === color && item.size === size){
                return {...item, count: count}
            }else{
                return item
            }
        }
        ))
    }
    


    const [status,setStatus] = useState('all')
    const [page,setPage] = useState(1)

    const navigate = useNavigate()

    useEffect(() => {
       if (localStorage.getItem('user') != null){
        setUser(JSON.parse(localStorage.getItem('user')))
       }

       if (localStorage.getItem('cart') != null){
         setCart(JSON.parse(localStorage.getItem('cart')))
       }

       getAllClothes()

    },[])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

    const registerUser = (data) => {
        axios.post('http://localhost:8080/register', {...data, orders:[]})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
       }

       const loginUser = (data) => {
        axios.post('http://localhost:8080/login', data)
            .then((res)=>{
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
           
       }

    const logOutUser = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
        setUser({
            login:''
        })
    }

    const value ={
        user,
        setUser,
        registerUser,
        logOutUser,
        loginUser,
        cart,
        setCart,
        addCart,
        delateCart,
        updateCart,
        ticket,
        setTicket,

        shop,
        status,
        setStatus,
        page,
        setPage,
        product,
        setProduct,
        order,
        setOrder,
        getAllClothes
    }

    return <CustomContext.Provider value={value}>
            {props.children}
    </CustomContext.Provider>

} 