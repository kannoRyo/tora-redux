import React, {useCallback, useState,useEffect, useMemo} from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { PrimaryButton } from '../UIkit/index';
import { useDispatch, useSelector } from 'react-redux';
import  { registerCard, retrievePaymentMethod} from '../../reducks/payments/operations'
import {TextDetail} from '../UIkit/index'
import { getPaymentMethodId, getCustomerId } from '../../reducks/users/selectors'

const PaymentEdit = ()=>{
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const paymentMethodId = getPaymentMethodId(selector)
    const customerId = getCustomerId(selector)

    const stripe = useStripe()
    const elements = useElements()

    const [ card, setCard ] = useState({})

    const register = useCallback(()=> {
        dispatch(registerCard(stripe, elements, customerId))
    }, [stripe, elements, customerId])

    const transition = useCallback((path)=>{
        dispatch(push(path))
    }, [dispatch])

    useEffect(()=> {  
      (async () => {
        const cardData = await retrievePaymentMethod(paymentMethodId)
        if(cardData) {
          setCard(cardData)
        }
      })()
    },[paymentMethodId])

    const  cardNum = useMemo(()=> {
      if(card.last4){
        return "**** **** ****" + card.last4
      } else {
        return  "未登録"
      }
    },[card])

    return (
        <section className="c-section-container">
            <h2 className="u-text__headline u-text-center">
            クレジットカード情報の登録・編集
            </h2>
            <div className="module-spacer--medium" />
            <h3>現在登録されてるカード情報</h3>
            <div className="module-spacer--medium" />
            <TextDetail 
                label={typeof card.brand  === "string" ? card.brand.toUpperCase() : "" }
                value={cardNum}
            />
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton
                    label="カード情報を保存する"
                    onClick={register}
                />
                <PrimaryButton
                    label="マイページに戻る"
                    onClick={()=> transition('/user/mypage')}
                />
            </div>
        </section>
    )
}

export default PaymentEdit