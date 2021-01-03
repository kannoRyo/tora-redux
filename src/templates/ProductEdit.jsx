import React, {useState, useCallback} from 'react'
import { useDispatch} from 'react-redux'
import {
    TextInput,
    SelectBox,
    PrimaryButton
} from '../components/UIkit/index'
import {ImageArea} from '../components/Products/index'
import {saveProduct} from '../reducks/products/operations'

const ProductEdit = ()=>{
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [gender, setGender] = useState('')
    const [price, setPrice] = useState('')
    const [images, setImages] = useState([])

    const inputName = useCallback((e)=>{
        setName(e.target.value)
    },[setName])

    const inputDescription = useCallback((e)=>{
        setDescription(e.target.value)
    },[setDescription])

    const inputPrice = useCallback((e)=>{
        setPrice(e.target.value)
    },[setPrice])

    const categories =[
        {id: "tops" , name: "トップス"},
        {id: "shirts" , name: "シャツ"},
        {id: "pants" , name: "パンツ"},
    ]

    const genders =[
        {id: "male" , name: "男性"},
        {id: "female" , name: "女性"},
        {id: "all" , name: "ユニセックス"},
    ]

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
                    label={"カテゴリー"} required={true} options={categories} value={category} select={setCategory}
                />
                <SelectBox
                    label={"性別"} required={true} options={genders} value={gender} select={setGender}
                />
                <TextInput
                    fullWidth={true} label={"価格"} multiline={false} rows={1}
                    required={true} type={"number"} value={price} onChange={inputPrice}
                />
                <div className="module-spacer--medium "></div>
                <div className="center">
                <PrimaryButton
                    label="商品状態を保存"
                    onClick={()=> dispatch(saveProduct(name,description,category,gender,price,images))}
                />
                </div>
            </div>
        </section>
    )
}

export default ProductEdit