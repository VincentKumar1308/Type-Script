
//global user
let currentUser:UserDetails
let currentGroceryID:number;


//local cart
let localCart:Array<TemporaryCart>=new Array<TemporaryCart>();
//interface for the user details

interface UserDetails{
userID:any
userName:string
email:string
phoneNo:string
balance:number
photo:string[]
password:string

}

//interface for the order details

interface OrderDetails{
    orderID:any
    customerName:string
    productID:number[]
    productName:string[]
    productQuantity:number[]
    price:number[]
    totalPrice:number
   
}

//interface for the grocery details

interface GroceryDetails{
    groceryID:any
    groceryName:string
    availableQuantity:number
    unitPrice:number
    purchaseDate:Date
    expiryDate:Date
    groceryPhoto:string[]

}

//interface for the cart details
interface Cart{
    productName:string
    productID:Number
    productPrice:Number
    productQuantity:Number
    userID:Number
    cartID:any

}


//temp cart item
interface TemporaryCart{
    productName:string
    productID:number
    productPrice:number
    productQuantity:number
    userID:number
}
//functions for the personal details

async function addUserDetails(user:UserDetails): Promise<void> {
    const response=await fetch('http://localhost:5108/api/UserDetails', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    });
    if(!response.ok){
        throw new Error('Failed to add user');
    }
   
}


async function fetchUserDetails(): Promise<UserDetails[]> {
    const apiUrl= 'http://localhost:5108/api/UserDetails';
    const response=await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch user details');
    }
    return await response.json();
}


async function updateUserDetails(id: Number, user: UserDetails): Promise<void> {
    const response = await fetch(`http://localhost:5108/api/UserDetails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Failed to update user details');
    }
   
  }

  //grocery function
  
async function fetchGroceryDetails(): Promise<GroceryDetails[]> {
    const apiUrl= 'http://localhost:5108/api/GroceryDetails';
    const response=await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch Grocery details');
    }
    return await response.json();
}

async function addGroceryDetails(grocery:GroceryDetails): Promise<void> {
    const response=await fetch('http://localhost:5108/api/GroceryDetails', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(grocery)
    });
    if(!response.ok){
        throw new Error('Failed to add grocery');
    }
   
}

async function deleteGroceryDetails(id:number): Promise<void> {
    const response= await fetch(`http://localhost:5108/api/GroceryDetails/${id}`,{
    method: 'DELETE'
  });
  if(!response.ok){
    throw new Error('Failed to delete the grocery details');
  }
}

async function updateGroceryDetails(id: Number, grocery: GroceryDetails): Promise<void> {
    const response = await fetch(`http://localhost:5108/api/GroceryDetails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grocery)
    });
    if (!response.ok) {
      throw new Error('Failed to update grocery details');
    }
   
  }

  
  //function for the cart

async function addCartDetails(cart:Cart): Promise<void> {
    const response=await fetch('http://localhost:5108/api/Cart', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(cart)
    });
    if(!response.ok){
        throw new Error('Failed to add Cart');
    }
   
}

async function updateCartDetails(id: Number, cart: Cart): Promise<void> {
    const response = await fetch(`http://localhost:5108/api/Cart/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cart)
    });
    if (!response.ok) {
      throw new Error('Failed to update cart details');
    }
   
  }


  

  async function fetchCartDetails(): Promise<Cart[]> {
    const apiUrl= 'http://localhost:5108/api/Cart';
    const response=await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch cart details');
    }
    return await response.json();
}

async function deleteCartDetails(id:number): Promise<void> {
    const response= await fetch(`http://localhost:5108/api/Cart/${id}`,{
    method: 'DELETE'
  });
  if(!response.ok){
    throw new Error('Failed to delete the cart details');
  }
}

//function for the order details
async function addOrderDetails(order:OrderDetails): Promise<void> {
    const response=await fetch('http://localhost:5108/api/OrderDetails', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(order)
    });
    if(!response.ok){
        throw new Error('Failed to add order details');
    }
   
}

async function updateOrderDetails(id: Number, order: OrderDetails): Promise<void> {
    const response = await fetch(`http://localhost:5108/api/OrderDetails/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    });
    if (!response.ok) {
      throw new Error('Failed to update cart details');
    }
   
  }

   
async function fetchOrderDetails(): Promise<OrderDetails[]> {
    const apiUrl= 'http://localhost:5108/api/OrderDetails';
    const response=await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch Grocery details');
    }
    return await response.json();
}



  //sign up page
  function signup(){
    
    //displaying  the sign up page
    let signuppage=document.getElementById("sign-up") as HTMLDivElement;
    signuppage.style.display="block";

    let signinpage=document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="none";

  }

  //signup submit
  function  signupSubmit(){
    
    //validating the  inputs and adding to the  data base
    let userName=document.getElementById("username") as HTMLInputElement;
    let mailID=document.getElementById("mailid") as HTMLInputElement;
    let phoneNo=document.getElementById("phoneno") as HTMLInputElement;
    let password=document.getElementById("password") as HTMLInputElement;
    let confirmPassword=document.getElementById("confirmpassword") as HTMLInputElement;
   
    if(password.value!=confirmPassword.value){
        alert("mismatch in password confirmation");
    }

    else if(userName.value!="" && mailID.value!="" && phoneNo.value!="" && password.value!="" && confirmPassword.value!=""){
        alert("Sign Up successful");
        
        let newUserProfile=document.getElementById("userphoto") as HTMLInputElement;
        const file = newUserProfile.files?.[0];
        let base64String: any = "";
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
        reader.onload = function (event) {
            base64String = event.target?.result;
            console.log(base64String);

        //creating the object and storing
        let user:UserDetails={userID:undefined,userName:userName.value,email:mailID.value,phoneNo:phoneNo.value,balance:0,photo:[base64String],password:password.value};
        addUserDetails(user);
       
         //hiding the sign up page
         let signuppage=document.getElementById("sign-up") as HTMLDivElement;
         signuppage.style.display="none"; 
 
         //displaying the navigation bar
        let navigationBar=document.getElementById("nav-bar") as HTMLDivElement;
        navigationBar.style.display="flex";

        }
       
    }

  }
}

//sign in 
function signin(){
    //displaying the sign in page
    let signinpage=document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="block";

    //hiding the sign up page
    let signuppage=document.getElementById("sign-up") as HTMLDivElement;
    signuppage.style.display="none";
}

//sign in submit

//sign in submit  button

async function signinSubmit(){
    let username=document.getElementById("sign-in-username") as HTMLInputElement;
    let password=document.getElementById("sign-in-password") as HTMLInputElement;

    //checking the available details in the stored list
    let isAlreadyLogged:Boolean=false;
    const userList=await fetchUserDetails()
    for(let users of userList){
        if(username.value==users.userName && password.value==users.password){
            isAlreadyLogged=true;
            currentUser=users;
            
        }
    }
    if(isAlreadyLogged){
        alert("login successful");

       //displaying the navigation bar
       let navigationBar=document.getElementById("nav-bar") as HTMLDivElement;
       navigationBar.style.display="flex";
       navigationBar.style.justifyContent="center";

       //hiding the index pages
       let signuppage=document.getElementById("sign-up") as HTMLDivElement;
       signuppage.style.display="none"; 
       let signinpage=document.getElementById("sign-in") as HTMLDivElement;
       signinpage.style.display="none";
       let indexpage=document.getElementById("index-page") as HTMLDivElement;
       indexpage.style.display="none";
       let walletrechargetable=document.getElementById("walletrechargetable") as HTMLDivElement;
      walletrechargetable.style.display="none";

    }
    else if(username.value=="" || password.value==""){
        alert("no blank values are allowed");
    }
    else{
        alert("mismatch in username or password");
    }

}

function homepage(){

    //hiding the sign in and sign up
    let signinpage=document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="none";
    let signuppage=document.getElementById("sign-up") as HTMLDivElement;
    signuppage.style.display="none"; 
    let walletbalance=document.getElementById("walletbalancetable") as HTMLDivElement;
    walletbalance.style.display="none";
    let walletrechargetable=document.getElementById("walletrechargetable") as HTMLDivElement;
    walletrechargetable.style.display="none";
    
    
    //logic
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="block";
    homepage.innerHTML=`
    <h1>Welcome ${currentUser.userName}</h1>`;
    homepage.innerHTML+=
    `<br><img src=${currentUser.photo[0]} alt="rpsadf" height="100px" width="200px">`;

}
function walletbalance(){

    //hiding the  other tables
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let walletrechargetable=document.getElementById("walletrechargetable") as HTMLDivElement;
    walletrechargetable.style.display="none";

    //displaying the  wallet balance
    let walletbalance=document.getElementById("walletbalancetable") as HTMLDivElement;
    walletbalance.style.display="block";
    walletbalance.innerHTML=`<h1>Welcome ${currentUser.userName} Your Balance is ${currentUser.balance}</h1>`
}

function recharge(){
    //hiding the other table
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let walletbalance=document.getElementById("walletbalancetable") as HTMLDivElement;
    walletbalance.style.display="none";
    

    //displaying the  wallet recharge table
    let walletrechargetable=document.getElementById("walletrechargetable") as HTMLDivElement;
    walletrechargetable.style.display="block";

}

function validaterecharge(){
    let rechargeamt=document.getElementById("rechargeamt") as HTMLInputElement;
    if(Number(rechargeamt.value)>0){
        currentUser.balance+=Number(rechargeamt.value);
      updateUserDetails(currentUser.userID,currentUser);
      alert("recharge successful");
    }
    else{
        alert("invallid entered amount");
    }
    //hiding the recharge table
    let walletrechargetable=document.getElementById("walletrechargetable") as HTMLDivElement;
    walletrechargetable.style.display="none";
    let walletbalance=document.getElementById("walletbalancetable") as HTMLDivElement;
    walletbalance.style.display="none";
}

async function grocery(){
 let grocerydetailstable=document.getElementById("grocerydetailstable") as HTMLDivElement;
 grocerydetailstable.style.display="block";
 let grocerytable=document.getElementById("grocerytable") as HTMLDivElement;
 grocerytable.innerHTML=
`<tr>
    <td>Grocery Name</td>
    <td>Available Quantity</td>
    <td>Unit Price</td>
    <td>Purchase Date</td>
    <td>ExpiryDate</td>
    <td>Grocery Photo</td>
    <td>Action</td>
</tr>`;
let groceryList=await fetchGroceryDetails();
for(let grocery of groceryList){
    grocerytable.innerHTML+=
    `<tr>
        <td>${grocery.groceryName}</td>
        <td>${grocery.availableQuantity}</td>
        <td>${grocery.unitPrice}</td>
        <td>${grocery.purchaseDate.toString().split('T')[0]}</td>
        <td>${grocery.expiryDate.toString().split('T')[0]}</td>
        <td><img src=${grocery.groceryPhoto} alt="Product Image" height="300px" width="300px"></td>
        <td><button onclick="grocerydetailsedit(${grocery.groceryID})">Edit</button><br><br><button onclick="grocerydetailsdelete('${grocery.groceryID}')">Delete</button></td>
    </tr>`
}

 //hiding the otherpages
 let signuppage=document.getElementById("sign-up") as HTMLDivElement;
 let signinpage=document.getElementById("sign-in") as HTMLDivElement;
 let walletrechargetable=document.getElementById("walletrechargetable") as HTMLDivElement;
 let walletbalance=document.getElementById("walletbalancetable") as HTMLDivElement;
 let grocerydetailsaddtable=document.getElementById("groceryedit") as HTMLDivElement;
 let grocerydetailsedittable=document.getElementById("groceryedit") as HTMLDivElement;
 let purchase=document.getElementById("purchasetable") as HTMLDivElement;
    

 
 signuppage.style.display="none"; 
 signinpage.style.display="none";
 walletbalance.style.display="none";
 walletrechargetable.style.display="none";
 grocerydetailsaddtable.style.display="none";
 grocerydetailsedittable.style.display="none";
 purchase.style.display="none";
 
}

async function  grocerydetailsedit(groceryid:Number){
    //display the table
    let grocerydetailsedittable=document.getElementById("groceryedit") as HTMLDivElement;
    grocerydetailsedittable.style.display="block";
    currentGroceryID=Number(groceryid);

    let groceryname=document.getElementById("grocerynameedit") as HTMLInputElement;
    let availableqty=document.getElementById("groceryqtyedit") as HTMLInputElement;
    let unitprice=document.getElementById("grocerypriceedit") as HTMLInputElement;
    let purchasedate=document.getElementById("purchasedateedit") as HTMLInputElement;
    let expiryDate=document.getElementById("expirydateedit") as HTMLInputElement;

    let groceryList=await fetchGroceryDetails();
    for(let grocery of groceryList){
        if(grocery.groceryID==groceryid){
            groceryname.value=grocery.groceryName;
            availableqty.value=String(grocery.availableQuantity);
            purchasedate.value=`${grocery.purchaseDate.toString().split('T')[0]}`;
            expiryDate.value=`${grocery.expiryDate.toString().split('T')[0]}`;
            unitprice.value=String(grocery.unitPrice);
         
        }
    }
    
    //hiding the other tables
    let grocerydetailsaddtable=document.getElementById("grocerydetailsaddtable") as HTMLDivElement;
    grocerydetailsaddtable.style.display="none";
    let grocerydetailstable=document.getElementById("grocerydetailstable") as HTMLDivElement;
    grocerydetailstable.style.display="none";
}

async function groceryeditsubmit(){
    let groceryList=await fetchGroceryDetails();
    let groceryname=document.getElementById("grocerynameedit") as HTMLInputElement;
    let availableqty=document.getElementById("groceryqtyedit") as HTMLInputElement;
    let unitprice=document.getElementById("grocerypriceedit") as HTMLInputElement;
    let purchasedate=document.getElementById("purchasedateedit") as HTMLInputElement;
    let expiryDate=document.getElementById("expirydateedit") as HTMLInputElement;
    let intermediatepurchase:string[]=purchasedate.value.split('-');
    let intermediateexpiry:string[]=expiryDate.value.split('-');
   if(groceryname.value=="" || availableqty.value==""|| unitprice.value==""){
    alert("no blank values are allowed");
    }
    let groceryphoto=document.getElementById("groceryphotoedit") as HTMLInputElement;
    const file=groceryphoto.files?.[0];
    let base64String:any="";
    if(file){
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=function(event){
        base64String=event.target?.result;
        console.log(base64String);
        let grocery:GroceryDetails={groceryID:currentGroceryID,groceryName:groceryname.value,availableQuantity:Number(availableqty.value),unitPrice:Number(unitprice.value),purchaseDate:new Date(Number(intermediatepurchase[0])),expiryDate:new Date(Number(intermediateexpiry[0])),groceryPhoto:[base64String]};
        updateGroceryDetails(currentGroceryID,grocery);
        alert("updated successfully");

        //hiding tables
        let grocerydetailsedittable=document.getElementById("groceryedit") as HTMLDivElement;
       grocerydetailsedittable.style.display="none";

    }
        
    }
}

function grocerydetailsaddtable(){
    let grocerydetailsaddtable=document.getElementById("grocerydetailsaddtable") as HTMLDivElement;
    grocerydetailsaddtable.style.display="block";

    //hiding the grocery page
    let grocerydetailstable=document.getElementById("grocerydetailstable") as HTMLDivElement;
    grocerydetailstable.style.display="none";
    
}

function AddgrocerySubmit(){
let groceryname=document.getElementById("groceryname") as HTMLInputElement;
let availableqty=document.getElementById("availablequantity") as HTMLInputElement;
let unitprice=document.getElementById("unitprice") as HTMLInputElement;
let purchasedate=document.getElementById("purchasedate") as HTMLInputElement;
let expirydate=document.getElementById("expirydate") as HTMLInputElement;
let intermediatepurchasedate:string[]=purchasedate.value.split('-');
console.log(intermediatepurchasedate);
let intermediateexpirydate:string[]=expirydate.value.split('-');

let groceryphoto=document.getElementById("groceryphoto") as HTMLInputElement;
const file=groceryphoto.files?.[0];
let base64String:any="";
if(file){
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=function(event){
        base64String=event.target?.result;
        console.log(base64String);
   

let grocery:GroceryDetails={groceryID:undefined,groceryName:groceryname.value,availableQuantity:Number(availableqty.value),unitPrice:Number(unitprice.value),purchaseDate:new Date(Number(intermediatepurchasedate[0]),Number(intermediatepurchasedate[1]),Number(intermediatepurchasedate[2])),expiryDate:new Date(Number(intermediateexpirydate[0]),Number(intermediateexpirydate[1]),Number(intermediateexpirydate[2])),groceryPhoto:[base64String]};
addGroceryDetails(grocery);
alert("added successfully");

}
}
//hiding the table
let grocerydetailsaddtable=document.getElementById("grocerydetailsaddtable") as HTMLDivElement;
let purchase=document.getElementById("purchasetable") as HTMLDivElement;
    purchase.style.display="none";
    grocerydetailsaddtable.style.display="none";
}

function grocerydetailsdelete(groceryid:Number){
    deleteGroceryDetails(Number(groceryid));
    alert("Deleted successfully");
   grocery();
}

async function purchase(){
    let purchase=document.getElementById("purchasetable") as HTMLDivElement;
    purchase.style.display="flex";
    purchase.innerHTML="";
    purchase.style.flexWrap="wrap";
    let groceryList=await fetchGroceryDetails();
    for(let grocery of  groceryList){
        purchase.innerHTML+=
        `<div><img src=\"${grocery.groceryPhoto}\" height="300px"><br>${grocery.unitPrice} <br id="alignment">${grocery.groceryName}<br><button onclick="gettingqty('${grocery.groceryID}')" >Add To Cart</button></div>`
    }

    //hiding  the other details
    let grocerydetailstable=document.getElementById("grocerydetailstable") as HTMLDivElement;
    grocerydetailstable.style.display="none";
    let localcart=document.getElementById("localcart") as HTMLTableColElement;
    localcart.style.display="none";
}

function gettingqty(groceryid:Number){
    //hiding the purchase table
    let purchase=document.getElementById("purchasetable") as HTMLDivElement;
    purchase.style.display="none";


    let gettingqtytable=document.getElementById("quantity") as HTMLDivElement;
    gettingqtytable.style.display="block";
    gettingqtytable.innerHTML=`
    <p>Enter the quantity</p>
    <input type="number" id=qty>
    <button onclick="addtocart(${Number(groceryid)})">Submit</button>`;
    alert("added successfully");

}


async function addtocart(groceryid:Number){
    let quantity=document.getElementById("qty") as HTMLInputElement;
let groceryList=await fetchGroceryDetails();
for(let grocery of groceryList){
    if(grocery.groceryID==groceryid){
        let tempcart:TemporaryCart={userID:currentUser.userID,productName:grocery.groceryName,productID:grocery.groceryID,productQuantity:Number(quantity.value),productPrice:grocery.unitPrice*Number(quantity.value)};
        localCart.push(tempcart);
        alert("added successfully");
        grocery.availableQuantity=grocery.availableQuantity-Number(quantity.value);
    }

    //hiding the tables
    let purchase=document.getElementById("purchasetable") as HTMLDivElement;
    purchase.style.display="none";
    let gettingqtytable=document.getElementById("quantity") as HTMLDivElement;
    gettingqtytable.style.display="none";
    let localcart=document.getElementById("localcart") as HTMLTableColElement;
    localcart.style.display="none";

}
}


function cart(){

    let localcart=document.getElementById("localcart") as HTMLTableColElement;
    localcart.style.display="block";
    localcart.innerHTML=
    `<tr>
        <td>Product ID</td>
        <td>Product Name</td>
        <td>User ID</td>
        <td>Product Quantity</td>
        <td>Product Price</td>
    </tr>`
    let totalprice:Number=0
    for(let cartitem of localCart){
        localcart.innerHTML+=
            `<tr>
                <td>${cartitem.productID}</td>
                <td>${cartitem.productName}</td>
                <td>${cartitem.userID}</td>
                <td>${cartitem.productQuantity}</td>
                <td>${cartitem.productPrice}</td>
            </tr>`;
    }
    localcart.innerHTML+=
    `<button onclick="validatebalance()">Buy</button>`

    //hiding the tables
    let purchase=document.getElementById("purchasetable") as HTMLDivElement;
    purchase.style.display="none";
    
}


//validate balance
async function validatebalance(){
    let amount:number=0;
    for(let cart of localCart){
       amount+=cart.productPrice;
    }
    if(currentUser.balance<amount){
        alert("Not having the sufficient balance");
    }
    else{
        currentUser.balance=currentUser.balance-amount;
        
        let productIDs:number []=[];
        let customerName:string;
        let productName:string[]=[];
        let productqty:number[]=[];
        let price:number[]=[];

        for(let cart of localCart){
            productIDs.push(cart.productID);
            productName.push(cart.productName);
            productqty.push(cart.productQuantity);
            price.push(cart.productPrice);
        }
        let order:OrderDetails={orderID:undefined,customerName:currentUser.userName,productID:productIDs,price:price,productName:productName,productQuantity:productqty,totalPrice:amount};
        addOrderDetails(order);
        alert("Ordered successfully");        
        
    }
}

async function purchasehistory(){
    let purchasehistory=document.getElementById("orderhistory") as HTMLTableElement;
    purchasehistory.style.display="block";
    purchasehistory.innerHTML=
    `<tr>
        <td>OrderID</td>
        <td>CustomerName</td>
        <td>Product ID</td>
        <td>Product Name</td>
        <td>Product Quantity</td>
        <td>Price</td>
        <td>Total Price</td>
    </tr>`;
    let historytable=await fetchOrderDetails();
    for(let history of historytable){
        purchasehistory.innerHTML+=
        `<tr>
            <td>${history.orderID}</td>
            <td>${history.customerName}</td>
            <td>${history.productName}</td>
            <td>${history.productQuantity}</td>
            <td>${history.price}</td>
            <td>${history.totalPrice}</td>
        </tr>`
    }
}


function logout(){

    //display page
    let indexpage=document.getElementById("index-page") as HTMLDivElement;
    indexpage.style.display="block";

    //hiding the  other pages
    let signuppage=document.getElementById("sign-up") as HTMLDivElement;
    let signinpage=document.getElementById("sign-in") as HTMLDivElement;
    let walletrechargetable=document.getElementById("walletrechargetable") as HTMLDivElement;
    let walletbalance=document.getElementById("walletbalancetable") as HTMLDivElement;
    let navigationBar=document.getElementById("nav-bar") as HTMLDivElement;
    navigationBar.style.display="none";
    signuppage.style.display="none"; 
    signinpage.style.display="none";
    walletbalance.style.display="none";
    walletrechargetable.style.display="none";
}

