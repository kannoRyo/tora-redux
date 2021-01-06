import { makeStyles } from '@material-ui/core'
import React,{useState, useCallback, useEffect} from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import {db, FirebaseTimestamp} from '../firebase/index'
import HTMLReactParser from 'html-react-parser'
import {ImageSwiper, SizeTable} from '../components/Products/index'
import {addProductToCart} from '../reducks/users/operations'

const useStyle  = makeStyles((theme)=>({
    sliderBox:{
        [theme.breakpoints.down('sm')]:{
            margin: '0 auto 24px auto',
            width: 320,
            height: 320,
        },
        [theme.breakpoints.up('sm')]:{
            margin: '0 auto',
            width: 400,
            height: 400           
        }
    },
    detail:{
        textAlign:{
            textAlign:'left'
        },
        [theme.breakpoints.down('sm')]:{
            margin: '0 auto 16px auto',
            height: 'auto',
            width: 320
        },
        [theme.breakpoints.up('sm')]:{
            margin: '0 auto',
            height: 'auto',
            width: 400           
        }
    },
    price:{
        fontSize:36
    }

}))  


const returnCodeToBr = (text)=>{
    if(text === ''){
        return text
    }else{
        return HTMLReactParser(text.replace(/\r?\n/g, '<br/>'))
    }
}

const ProductDetail = (props)=>{
    const dispatch = useDispatch()
    const classes = useStyle()
    const selector = useSelector((state) => state)
    const path = selector.router.location.pathname 
    const id = path.split('/product/')[1]
    
    const [product ,setProduct] = useState(null)
    
    const addProduct = useCallback((selectedSize)=>{
        const timestamp = FirebaseTimestamp.now()
        dispatch(addProductToCart({
            added_at: timestamp,
            description: product.description,
            gender: product.gender,
            images: product.images,
            name: product.name,
            price: product.price,
            productId: product.id,
            quantity: 1,
            size: selectedSize
        }))
    },[product])

    useEffect(()=>{
        db.collection('products').doc(id).get()
            .then(doc=>{
                const data = doc.data()
                setProduct(data)
            })
    },[])

    return(
        <section className="c-section-wrapin">
            {
                product && (
                    <div className="p-grid__row">
                        <div className={classes.sliderBox}>
                            <ImageSwiper images={product.images}/> 
                        </div>
                        <div className={classes.detail}>
                            <h2 className="u-text__headline">{product.name}</h2>
                            <p className={classes.price}>{product.price.toLocaleString()}</p>
                            <div className="module-space--small" />
                            <SizeTable addProduct={addProduct} sizes={product.sizes}/>
                            <div className="module-space--small" />
                            <p>{returnCodeToBr(product.description)}</p>
                        </div>
                    </div>
                )
            }
        </section>
    )
}

export default ProductDetail