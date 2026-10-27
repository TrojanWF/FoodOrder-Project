import { menuArray  } from "./data.js";


const menuList = document.querySelector('.menu-list')
const checkoutSection = document.querySelector('.checkout-section')
const orderItemArr = menuArray.map(item=>({...item, quantity:0, isOrdered:false, totalPrice:0}))
const paymentContainer = document.querySelector('.payment-container')

document.addEventListener('click',function(e){
    orderItemArr.forEach(orderItem => {
        if(e.target.classList.contains(orderItem.id) && e.target.classList.contains('add-btn') 
        ){
            orderItem.quantity++
            orderItem.isOrdered= true
            orderItem.totalPrice= orderItem.price*orderItem.quantity
            checkoutSection.innerHTML=getCheckoutHtmlString(orderItemArr)
        }
        
        if(e.target.classList.contains(orderItem.id) && e.target.classList.contains('remove-btn') 
        ){
            if(orderItem.quantity>0){
                orderItem.quantity--
                orderItem.totalPrice= orderItem.price*orderItem.quantity}

            if(orderItem.quantity===0){
                orderItem.isOrdered=false

            }
        }
    });
    
    if(e.target.classList.contains('complete-order-btn')){
        paymentContainer.style.display= 'block'

    }
    

    checkoutSection.innerHTML=getCheckoutHtmlString(orderItemArr)
})

paymentContainer.addEventListener('submit',e=>{
    e.preventDefault()
    console.log(e.target.classList)
    paymentContainer.style.display='none'
    document.querySelector('.checkout-section-container').style.display='none'
    document.querySelector('.checkout-message').innerHTML=`<h1 class='center-align'>Thanks, ${document.querySelector('#name').value }! Your order
                                                            is on its way!  </h1>`
    document.querySelector('.checkout-message').style.display='block'
    orderItemArr.forEach(item => {
        item.quantity=0,
        item.isOrdered=false,
        item.totalPrice=0
    });
    e.target.reset()

    checkoutSection.innerHTML=getCheckoutHtmlString(orderItemArr)
    setTimeout(()=>{document.querySelector('.checkout-section-container').style.display='block'
                    document.querySelector('.checkout-message').style.display='none'
                }, 5000)
})

function getMenuHtmlString(menuArray){

    const htmlString = menuArray.map((item)=>{
                return `<div class='food-container'>

                            <div class='food-emoji'>
                                <p>${item.emoji}</p>
                            </div>

                            <div class ="food-info">
                                <h2 class="Name">${item.name}</h2>
                                <p class="ingredients">${item.ingredients}</p>
                                <h3 class="cost">$${item.price}</h3>
                            </div>

                            <div class='add-btn-container '>
                                <button class='add-btn ${item.id}'>+</button>
                            </div>
                        
                        </div>`
    }).join("")
    return htmlString
}

function getCheckoutHtmlString(orderItemArr){
    let htmlString =''
    let totalPrice=0
    orderItemArr.forEach(item => {
        totalPrice+= item.totalPrice
        if(item.isOrdered){
            htmlString+=    `<div class='bill-item-container'>
                                <h2>${item.name}</h2>
                                <button class='remove-btn ${item.id}'>remove</button>
                                <h3 class='price'>${item.totalPrice}</h3>
                            </div>`
                            
        }
    });

    if(htmlString===''){
            return `<h3 class='center-align'>Your Order Will Appear Here</h3>`}

    htmlString+= `  <div class='bill-total-container'>
                    <h1>Total:</h1> 
                    <h3 class='price'>${totalPrice}</h3>
                    </div>
                    <button class="complete-order-btn">Complete order</button>`
            
   

    return htmlString
      
}





menuList.innerHTML= getMenuHtmlString(menuArray)
checkoutSection.innerHTML = getCheckoutHtmlString(orderItemArr);

    