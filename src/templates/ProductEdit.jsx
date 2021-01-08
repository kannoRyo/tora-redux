import React, {useState, useCallback, useEffect} from 'react'
import { useDispatch} from 'react-redux'
import {
    TextInput,
    SelectBox,
    PrimaryButton
} from '../components/UIkit/index'
import {
    ImageArea,
    SetSizeArea
} from '../components/Products/index'
import {saveProduct} from '../reducks/products/operations'
import {db} from '../firebase/index'

const ProductEdit = ()=>{
    const dispatch = useDispatch()

    let id = window.location.pathname.split('/product/edit')[1];

    useEffect(()=>{
        if (id !== "") {
            id = id.split('/')[1]
        }        
    },[])
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState('')
    const [gender, setGender] = useState('')
    const [price, setPrice] = useState('')
    const [images, setImages] = useState([])
    const [sizes, setSizes] = useState([])

    const inputName = useCallback((e)=>{
        setName(e.target.value)
    },[setName])

    const inputDescription = useCallback((e)=>{
        setDescription(e.target.value)
    },[setDescription])

    const inputPrice = useCallback((e)=>{
        setPrice(e.target.value)
    },[setPrice])

    

    const genders =[
        {id: "male" , name: "男性"},
        {id: "female" , name: "女性"},
        {id: "all" , name: "ユニセックス"},
    ]

    useEffect(()=>{
        if(id !== ""){
            db.collection('products').doc(id).get()
                .then((snapshot)=>{
                    const data = snapshot.data()
                    console.log()
                    setImages(data.images)
                    setName(data.name)
                    setDescription(data.description)
                    setGender(data.gender)
                    setCategory(data.category)
                    setPrice(data.price)
                    setSizes(data.sizes)
                })
        }
    },[])

    useEffect(() => {
        db.collection('categories').orderBy("order", "asc").get().then(snapshots => {
            const list = []
            snapshots.forEach(snapshot => {
                list.push(snapshot.data())
            })
            setCategories(list)
        });
    },[])


    return(
        <section>
            <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
            <div className="c-section-container">
                <ImageArea images={images} setImages={setImages}/>
                <TextInput
                    fullWidth={true} label={"商品名"} multiline={false} rows={1}
                    required={true} type={"text"} value={name} onChange={inputName}
                />
                <TextInput
                    fullWidth={true} label={"商品説明"} multiline={true} rows={5}
                    required={true} type={"text"} value={description} onChange={inputDescription}
                />
                 <SelectBox
                    label={"カテゴリー"} options={categories} required={true} select={setCategory} value={category}
                />
                <SelectBox
                    label={"性別"} options={genders} required={true} select={setGender} value={gender}
                />
                <TextInput
                    fullWidth={true} label={"価格"} multiline={false} rows={1}
                    required={true} type={"number"} value={price} onChange={inputPrice}
                />
                <div className="module-spacer--medium"></div>
                <SetSizeArea
                    sizes={sizes}
                    setSizes={setSizes}
                />
                <div className="module-spacer--small"></div>
                <div className="center">
                <PrimaryButton
                    label="商品状態を保存"
                    onClick={()=> dispatch(saveProduct(id, name,description,category,gender,price,images,sizes))}
                />
                </div>
            </div>
        </section>
    )
}

export default ProductEdit