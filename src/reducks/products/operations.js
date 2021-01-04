import { 
    FirebaseTimestamp,
    db
} from "../../firebase/index"
import {push} from 'connected-react-router'

const productsRef = db.collection('products')

export const saveProduct = (id, name,description,category,gender,price,images,sizes) =>{
    return async (dispatch)=>{
        const timestamp = FirebaseTimestamp.now()

        const data = {
            category: category,
            description: description,
            gender: gender,
            name: name,
            price: parseInt(price, 10),
            images: images,
            updated_at: timestamp,
            sizes: sizes
        }

        if(id === ""){
            const ref = productsRef.doc()
            id = ref.id
            data.id = id
            data.created_at = timestamp
        }

        return productsRef.doc(id).set(data, {merge: true})
            .then(()=>{
                console.log('success')
                dispatch(push('/'))
            }).catch((error)=>{
                console.log('fail')
                throw new Error(error)
            })
    }
}