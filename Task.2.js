const sign_up_email = document.querySelector('#sign_up_email')
const sign_up_name = document.querySelector('#sign_up_name')
const sign_up_number = document.querySelector('#sign_up_number')
const sign_up_password = document.querySelector('#sign_up_password')
const sign_up_btn = document.querySelector('#sign_up_btn')
const sign_up_msg = document.querySelector('#sign_up_msg')
const sign_in_email = document.querySelector('#sign_in_email')
const sign_in_password = document.querySelector('#sign_in_password')
const sign_in_btn = document.querySelector('#sign_in_btn')
const sign_in_mesage = document.querySelector('#sign_in_mesage')

const users =[

    {
        id:1,
        name: 'Elnur Aliyev',
        email:'e@a.com',
        password:123,
        number:'11.11.2003'
    },
    {
        id:2,
        name: 'Nihad Qasimli',
        email:'n@q.com',
        password:123,
        number:'04.11.2003'
    },
    {
        id:3,
        name: 'Rustem Gasanov',
        email:'r@g.com',
        password:123,
        number:'11.11.2003'
    },
    {
        id:4,
        name: 'Elvin Mahharamli',
        email:'e@m.com',
        password:123,
        number:'11.11.2003'
    },
    
]

sign_up_btn.addEventListener('click', ()=>{

    if(sign_up_email.value != '' && sign_up_name.value !='' && sign_up_number.value!=''&& sign_up_password.value!=''){
        
        const checkemail = users.find(user=>user.email ==sign_up_email.value )
        if(!checkemail){
            const newUser={
                id:users.lenght+1,
                name:sign_up_name.value,
                email:sign_up_email.value,
                password:sign_up_password.value,
                number:sign_up_number.value
            }
            users.push(newUser)
            sign_up_msg.innerHTML='Succesful'
        }else{
            sign_up_msg.innerHTML='Email already in use'
        }
    }else{
        sign_up_msg.innerHTML='Fill in the inputs'
    }
})

sign_in_btn.addEventListener('click', ()=>{

    if(sign_in_email.value != '' && sign_in_password.value !=''){
        const checkEmail = user.find(user=>user.email == sign_in_email.value)
        console.log(checkEmail);
        if(checkEmail){
            if(checkEmail.password==sign_in_password.value){
                sign_in_mesage.innerHTML=checkEmail.name
            }else{
                sign_in_mesage.innerHTML='Password is incorrect'
            }
        }else{
            sign_in_mesage.innerHTML = 'Email does not exist'
        }
    }else{
        sign_in_mesage.innerText='Fill in the inputs'
        
    }
})