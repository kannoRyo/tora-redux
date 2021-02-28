const headers = new Headers()
headers.set('Content-type', 'application/json')
const BASE_URL = 'https://ec-app-76b2a.web.app'
import { CardElement } from '@stripe/react-stripe-js'
import { db } from '../../firebase/index'
import {push} from 'connected-react-router'
import {updateUserStateAction} from '../users/actions'


const createCustomer = async (email, paymentMethodId, uid) => {
    const response = await fetch( BASE_URL + "/v1/customer", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            email: email,
            paymentMethod: paymentMethodId,
            userId: uid,
        })
    })
    
    const customerResponse = await response.json()
    
    return JSON.parse(customerResponse.body)
}

export const retrievePaymentMethod = async (paymentMethodId) => {
    const response = await fetch( BASE_URL + "/v1/paymentMethod", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            paymentMethodId: paymentMethodId,
        })
    })
    
    const paymentResponse = await response.json()
    const paymentMethod = JSON.parse(paymentResponse.body)
    return paymentMethod.card
}

export const updatePaymentMethod = async (customerId, prevPaymentMethodId, nextPaymentMethodId) => {
    const response = await fetch(BASE_URL + "/v1/updatePaymentMethod",{
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            customerId: customerId,
            prevPaymentMethodId: prevPaymentMethodId,
            nextPaymentMethodId: nextPaymentMethodId
        })
    })

    const paymentMethodResponse = await response.json();
    console.log(paymentMethodResponse)
    const paymentMethod = JSON.parse(paymentMethodResponse.body);
    return paymentMethod.card
}

export const registerCard = (stripe, elements, customerId) => {
    return async (dispatch, getState) => {
        const user = getState().users
        const email = user.email
        const uid = user.uid

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
      
        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

    
        if (error) {
            return 
        } 

        const paymentMethodId = paymentMethod.id

        if(customerId === ""){
            const customerData = await createCustomer(email, paymentMethodId, uid)
    
            if(!customerData.id){
                alert("カード情報の登録に失敗しました")
                return
            }else{
                const updateUserState = {
                    customer_Id: customerData.id,
                    payment_method_Id: paymentMethodId
                }
    
                db.collection('users').doc(uid)
                    .update(updateUserState)
                    .then(()=>{
                        dispatch(updateUserStateAction(updateUserState))
                        dispatch(push('/user/mypage'))
                    }).catch((err)=>{
                        // Delete Stripe cutomer
    
                        alert("カード情報の登録に失敗しました。")
                        return 
                    })
            } 
        } else {
            const prevPaymentMethodId = getState().users.payment_method_Id
            const updatedPaymentMethod = await updatePaymentMethod(customerId, prevPaymentMethodId, paymentMethodId)
            
            if(!updatedPaymentMethod){
                alert("お客様情報の更新に失敗しました1")
            } else {
                const userState = { 
                    payment_method_Id: paymentMethodId,

                }

                db.collection('users').doc(uid)
                    .update(userState)
                    .then(() => {
                        dispatch(updateUserStateAction(userState))
                        alert("お客様情報を更新しました")
                        dispatch(push('/user/mypage'))
                    }).catch(()=> {
                        alert("お客様情報の更新に失敗しました2")
                    })
            }
        }

    }
}
