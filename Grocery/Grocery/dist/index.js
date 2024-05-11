"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//global user
let currentUser;
let currentGroceryID;
//local cart
let localCart = new Array();
//functions for the personal details
function addUserDetails(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5108/api/UserDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add user');
        }
    });
}
function fetchUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5108/api/UserDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch user details');
        }
        return yield response.json();
    });
}
function updateUserDetails(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5108/api/UserDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update user details');
        }
    });
}
//grocery function
function fetchGroceryDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5108/api/GroceryDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Grocery details');
        }
        return yield response.json();
    });
}
function addGroceryDetails(grocery) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5108/api/GroceryDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grocery)
        });
        if (!response.ok) {
            throw new Error('Failed to add grocery');
        }
    });
}
function deleteGroceryDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5108/api/GroceryDetails/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete the grocery details');
        }
    });
}
function updateGroceryDetails(id, grocery) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5108/api/GroceryDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(grocery)
        });
        if (!response.ok) {
            throw new Error('Failed to update grocery details');
        }
    });
}
//function for the cart
function addCartDetails(cart) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5108/api/Cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        });
        if (!response.ok) {
            throw new Error('Failed to add Cart');
        }
    });
}
function updateCartDetails(id, cart) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5108/api/Cart/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        });
        if (!response.ok) {
            throw new Error('Failed to update cart details');
        }
    });
}
function fetchCartDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5108/api/Cart';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch cart details');
        }
        return yield response.json();
    });
}
function deleteCartDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5108/api/Cart/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete the cart details');
        }
    });
}
//function for the order details
function addOrderDetails(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5108/api/OrderDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to add order details');
        }
    });
}
function updateOrderDetails(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5108/api/OrderDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update cart details');
        }
    });
}
function fetchOrderDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5108/api/OrderDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Grocery details');
        }
        return yield response.json();
    });
}
//sign up page
function signup() {
    //displaying  the sign up page
    let signuppage = document.getElementById("sign-up");
    signuppage.style.display = "block";
    let signinpage = document.getElementById("sign-in");
    signinpage.style.display = "none";
}
//signup submit
function signupSubmit() {
    var _a;
    //validating the  inputs and adding to the  data base
    let userName = document.getElementById("username");
    let mailID = document.getElementById("mailid");
    let phoneNo = document.getElementById("phoneno");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmpassword");
    if (password.value != confirmPassword.value) {
        alert("mismatch in password confirmation");
    }
    else if (userName.value != "" && mailID.value != "" && phoneNo.value != "" && password.value != "" && confirmPassword.value != "") {
        alert("Sign Up successful");
        let newUserProfile = document.getElementById("userphoto");
        const file = (_a = newUserProfile.files) === null || _a === void 0 ? void 0 : _a[0];
        let base64String = "";
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (event) {
                var _a;
                base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                console.log(base64String);
                //creating the object and storing
                let user = { userID: undefined, userName: userName.value, email: mailID.value, phoneNo: phoneNo.value, balance: 0, photo: [base64String], password: password.value };
                addUserDetails(user);
                //hiding the sign up page
                let signuppage = document.getElementById("sign-up");
                signuppage.style.display = "none";
                //displaying the navigation bar
                let navigationBar = document.getElementById("nav-bar");
                navigationBar.style.display = "flex";
            };
        }
    }
}
//sign in 
function signin() {
    //displaying the sign in page
    let signinpage = document.getElementById("sign-in");
    signinpage.style.display = "block";
    //hiding the sign up page
    let signuppage = document.getElementById("sign-up");
    signuppage.style.display = "none";
}
//sign in submit
//sign in submit  button
function signinSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
        let username = document.getElementById("sign-in-username");
        let password = document.getElementById("sign-in-password");
        //checking the available details in the stored list
        let isAlreadyLogged = false;
        const userList = yield fetchUserDetails();
        for (let users of userList) {
            if (username.value == users.userName && password.value == users.password) {
                isAlreadyLogged = true;
                currentUser = users;
            }
        }
        if (isAlreadyLogged) {
            alert("login successful");
            //displaying the navigation bar
            let navigationBar = document.getElementById("nav-bar");
            navigationBar.style.display = "flex";
            navigationBar.style.justifyContent = "center";
            //hiding the index pages
            let signuppage = document.getElementById("sign-up");
            signuppage.style.display = "none";
            let signinpage = document.getElementById("sign-in");
            signinpage.style.display = "none";
            let indexpage = document.getElementById("index-page");
            indexpage.style.display = "none";
            let walletrechargetable = document.getElementById("walletrechargetable");
            walletrechargetable.style.display = "none";
        }
        else if (username.value == "" || password.value == "") {
            alert("no blank values are allowed");
        }
        else {
            alert("mismatch in username or password");
        }
    });
}
function homepage() {
    //hiding the sign in and sign up
    let signinpage = document.getElementById("sign-in");
    signinpage.style.display = "none";
    let signuppage = document.getElementById("sign-up");
    signuppage.style.display = "none";
    let walletbalance = document.getElementById("walletbalancetable");
    walletbalance.style.display = "none";
    let walletrechargetable = document.getElementById("walletrechargetable");
    walletrechargetable.style.display = "none";
    //logic
    let homepage = document.getElementById("homepage");
    homepage.style.display = "block";
    homepage.innerHTML = `
    <h1>Welcome ${currentUser.userName}</h1>`;
    homepage.innerHTML +=
        `<br><img src=${currentUser.photo[0]} alt="rpsadf" height="100px" width="200px">`;
}
function walletbalance() {
    //hiding the  other tables
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let walletrechargetable = document.getElementById("walletrechargetable");
    walletrechargetable.style.display = "none";
    //displaying the  wallet balance
    let walletbalance = document.getElementById("walletbalancetable");
    walletbalance.style.display = "block";
    walletbalance.innerHTML = `<h1>Welcome ${currentUser.userName} Your Balance is ${currentUser.balance}</h1>`;
}
function recharge() {
    //hiding the other table
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let walletbalance = document.getElementById("walletbalancetable");
    walletbalance.style.display = "none";
    //displaying the  wallet recharge table
    let walletrechargetable = document.getElementById("walletrechargetable");
    walletrechargetable.style.display = "block";
}
function validaterecharge() {
    let rechargeamt = document.getElementById("rechargeamt");
    if (Number(rechargeamt.value) > 0) {
        currentUser.balance += Number(rechargeamt.value);
        updateUserDetails(currentUser.userID, currentUser);
        alert("recharge successful");
    }
    else {
        alert("invallid entered amount");
    }
    //hiding the recharge table
    let walletrechargetable = document.getElementById("walletrechargetable");
    walletrechargetable.style.display = "none";
    let walletbalance = document.getElementById("walletbalancetable");
    walletbalance.style.display = "none";
}
function grocery() {
    return __awaiter(this, void 0, void 0, function* () {
        let grocerydetailstable = document.getElementById("grocerydetailstable");
        grocerydetailstable.style.display = "block";
        let grocerytable = document.getElementById("grocerytable");
        grocerytable.innerHTML =
            `<tr>
    <td>Grocery Name</td>
    <td>Available Quantity</td>
    <td>Unit Price</td>
    <td>Purchase Date</td>
    <td>ExpiryDate</td>
    <td>Grocery Photo</td>
    <td>Action</td>
</tr>`;
        let groceryList = yield fetchGroceryDetails();
        for (let grocery of groceryList) {
            grocerytable.innerHTML +=
                `<tr>
        <td>${grocery.groceryName}</td>
        <td>${grocery.availableQuantity}</td>
        <td>${grocery.unitPrice}</td>
        <td>${grocery.purchaseDate.toString().split('T')[0]}</td>
        <td>${grocery.expiryDate.toString().split('T')[0]}</td>
        <td><img src=${grocery.groceryPhoto} alt="Product Image" height="300px" width="300px"></td>
        <td><button onclick="grocerydetailsedit(${grocery.groceryID})">Edit</button><br><br><button onclick="grocerydetailsdelete('${grocery.groceryID}')">Delete</button></td>
    </tr>`;
        }
        //hiding the otherpages
        let signuppage = document.getElementById("sign-up");
        let signinpage = document.getElementById("sign-in");
        let walletrechargetable = document.getElementById("walletrechargetable");
        let walletbalance = document.getElementById("walletbalancetable");
        let grocerydetailsaddtable = document.getElementById("groceryedit");
        let grocerydetailsedittable = document.getElementById("groceryedit");
        let purchase = document.getElementById("purchasetable");
        signuppage.style.display = "none";
        signinpage.style.display = "none";
        walletbalance.style.display = "none";
        walletrechargetable.style.display = "none";
        grocerydetailsaddtable.style.display = "none";
        grocerydetailsedittable.style.display = "none";
        purchase.style.display = "none";
    });
}
function grocerydetailsedit(groceryid) {
    return __awaiter(this, void 0, void 0, function* () {
        //display the table
        let grocerydetailsedittable = document.getElementById("groceryedit");
        grocerydetailsedittable.style.display = "block";
        currentGroceryID = Number(groceryid);
        let groceryname = document.getElementById("grocerynameedit");
        let availableqty = document.getElementById("groceryqtyedit");
        let unitprice = document.getElementById("grocerypriceedit");
        let purchasedate = document.getElementById("purchasedateedit");
        let expiryDate = document.getElementById("expirydateedit");
        let groceryList = yield fetchGroceryDetails();
        for (let grocery of groceryList) {
            if (grocery.groceryID == groceryid) {
                groceryname.value = grocery.groceryName;
                availableqty.value = String(grocery.availableQuantity);
                purchasedate.value = `${grocery.purchaseDate.toString().split('T')[0]}`;
                expiryDate.value = `${grocery.expiryDate.toString().split('T')[0]}`;
                unitprice.value = String(grocery.unitPrice);
            }
        }
        //hiding the other tables
        let grocerydetailsaddtable = document.getElementById("grocerydetailsaddtable");
        grocerydetailsaddtable.style.display = "none";
        let grocerydetailstable = document.getElementById("grocerydetailstable");
        grocerydetailstable.style.display = "none";
    });
}
function groceryeditsubmit() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        let groceryList = yield fetchGroceryDetails();
        let groceryname = document.getElementById("grocerynameedit");
        let availableqty = document.getElementById("groceryqtyedit");
        let unitprice = document.getElementById("grocerypriceedit");
        let purchasedate = document.getElementById("purchasedateedit");
        let expiryDate = document.getElementById("expirydateedit");
        let intermediatepurchase = purchasedate.value.split('-');
        let intermediateexpiry = expiryDate.value.split('-');
        if (groceryname.value == "" || availableqty.value == "" || unitprice.value == "") {
            alert("no blank values are allowed");
        }
        let groceryphoto = document.getElementById("groceryphotoedit");
        const file = (_a = groceryphoto.files) === null || _a === void 0 ? void 0 : _a[0];
        let base64String = "";
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (event) {
                var _a;
                base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                console.log(base64String);
                let grocery = { groceryID: currentGroceryID, groceryName: groceryname.value, availableQuantity: Number(availableqty.value), unitPrice: Number(unitprice.value), purchaseDate: new Date(Number(intermediatepurchase[0])), expiryDate: new Date(Number(intermediateexpiry[0])), groceryPhoto: [base64String] };
                updateGroceryDetails(currentGroceryID, grocery);
                alert("updated successfully");
                //hiding tables
                let grocerydetailsedittable = document.getElementById("groceryedit");
                grocerydetailsedittable.style.display = "none";
            };
        }
    });
}
function grocerydetailsaddtable() {
    let grocerydetailsaddtable = document.getElementById("grocerydetailsaddtable");
    grocerydetailsaddtable.style.display = "block";
    //hiding the grocery page
    let grocerydetailstable = document.getElementById("grocerydetailstable");
    grocerydetailstable.style.display = "none";
}
function AddgrocerySubmit() {
    var _a;
    let groceryname = document.getElementById("groceryname");
    let availableqty = document.getElementById("availablequantity");
    let unitprice = document.getElementById("unitprice");
    let purchasedate = document.getElementById("purchasedate");
    let expirydate = document.getElementById("expirydate");
    let intermediatepurchasedate = purchasedate.value.split('-');
    console.log(intermediatepurchasedate);
    let intermediateexpirydate = expirydate.value.split('-');
    let groceryphoto = document.getElementById("groceryphoto");
    const file = (_a = groceryphoto.files) === null || _a === void 0 ? void 0 : _a[0];
    let base64String = "";
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (event) {
            var _a;
            base64String = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            console.log(base64String);
            let grocery = { groceryID: undefined, groceryName: groceryname.value, availableQuantity: Number(availableqty.value), unitPrice: Number(unitprice.value), purchaseDate: new Date(Number(intermediatepurchasedate[0]), Number(intermediatepurchasedate[1]), Number(intermediatepurchasedate[2])), expiryDate: new Date(Number(intermediateexpirydate[0]), Number(intermediateexpirydate[1]), Number(intermediateexpirydate[2])), groceryPhoto: [base64String] };
            addGroceryDetails(grocery);
            alert("added successfully");
        };
    }
    //hiding the table
    let grocerydetailsaddtable = document.getElementById("grocerydetailsaddtable");
    let purchase = document.getElementById("purchasetable");
    purchase.style.display = "none";
    grocerydetailsaddtable.style.display = "none";
}
function grocerydetailsdelete(groceryid) {
    deleteGroceryDetails(Number(groceryid));
    alert("Deleted successfully");
    grocery();
}
function purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        let purchase = document.getElementById("purchasetable");
        purchase.style.display = "flex";
        purchase.innerHTML = "";
        purchase.style.flexWrap = "wrap";
        let groceryList = yield fetchGroceryDetails();
        for (let grocery of groceryList) {
            purchase.innerHTML +=
                `<div><img src=\"${grocery.groceryPhoto}\" height="300px"><br>${grocery.unitPrice} <br id="alignment">${grocery.groceryName}<br><button onclick="gettingqty('${grocery.groceryID}')" >Add To Cart</button></div>`;
        }
        //hiding  the other details
        let grocerydetailstable = document.getElementById("grocerydetailstable");
        grocerydetailstable.style.display = "none";
        let localcart = document.getElementById("localcart");
        localcart.style.display = "none";
    });
}
function gettingqty(groceryid) {
    //hiding the purchase table
    let purchase = document.getElementById("purchasetable");
    purchase.style.display = "none";
    let gettingqtytable = document.getElementById("quantity");
    gettingqtytable.style.display = "block";
    gettingqtytable.innerHTML = `
    <p>Enter the quantity</p>
    <input type="number" id=qty>
    <button onclick="addtocart(${Number(groceryid)})">Submit</button>`;
    alert("added successfully");
}
function addtocart(groceryid) {
    return __awaiter(this, void 0, void 0, function* () {
        let quantity = document.getElementById("qty");
        let groceryList = yield fetchGroceryDetails();
        for (let grocery of groceryList) {
            if (grocery.groceryID == groceryid) {
                let tempcart = { userID: currentUser.userID, productName: grocery.groceryName, productID: grocery.groceryID, productQuantity: Number(quantity.value), productPrice: grocery.unitPrice * Number(quantity.value) };
                localCart.push(tempcart);
                alert("added successfully");
                grocery.availableQuantity = grocery.availableQuantity - Number(quantity.value);
            }
            //hiding the tables
            let purchase = document.getElementById("purchasetable");
            purchase.style.display = "none";
            let gettingqtytable = document.getElementById("quantity");
            gettingqtytable.style.display = "none";
            let localcart = document.getElementById("localcart");
            localcart.style.display = "none";
        }
    });
}
function cart() {
    let localcart = document.getElementById("localcart");
    localcart.style.display = "block";
    localcart.innerHTML =
        `<tr>
        <td>Product ID</td>
        <td>Product Name</td>
        <td>User ID</td>
        <td>Product Quantity</td>
        <td>Product Price</td>
    </tr>`;
    let totalprice = 0;
    for (let cartitem of localCart) {
        localcart.innerHTML +=
            `<tr>
                <td>${cartitem.productID}</td>
                <td>${cartitem.productName}</td>
                <td>${cartitem.userID}</td>
                <td>${cartitem.productQuantity}</td>
                <td>${cartitem.productPrice}</td>
            </tr>`;
    }
    localcart.innerHTML +=
        `<button onclick="validatebalance()">Buy</button>`;
    //hiding the tables
    let purchase = document.getElementById("purchasetable");
    purchase.style.display = "none";
}
//validate balance
function validatebalance() {
    return __awaiter(this, void 0, void 0, function* () {
        let amount = 0;
        for (let cart of localCart) {
            amount += cart.productPrice;
        }
        if (currentUser.balance < amount) {
            alert("Not having the sufficient balance");
        }
        else {
            currentUser.balance = currentUser.balance - amount;
            let productIDs = [];
            let customerName;
            let productName = [];
            let productqty = [];
            let price = [];
            for (let cart of localCart) {
                productIDs.push(cart.productID);
                productName.push(cart.productName);
                productqty.push(cart.productQuantity);
                price.push(cart.productPrice);
            }
            let order = { orderID: undefined, customerName: currentUser.userName, productID: productIDs, price: price, productName: productName, productQuantity: productqty, totalPrice: amount };
            addOrderDetails(order);
            alert("Ordered successfully");
        }
    });
}
function purchasehistory() {
    return __awaiter(this, void 0, void 0, function* () {
        let purchasehistory = document.getElementById("orderhistory");
        purchasehistory.style.display = "block";
        purchasehistory.innerHTML =
            `<tr>
        <td>OrderID</td>
        <td>CustomerName</td>
        <td>Product ID</td>
        <td>Product Name</td>
        <td>Product Quantity</td>
        <td>Price</td>
        <td>Total Price</td>
    </tr>`;
        let historytable = yield fetchOrderDetails();
        for (let history of historytable) {
            purchasehistory.innerHTML +=
                `<tr>
            <td>${history.orderID}</td>
            <td>${history.customerName}</td>
            <td>${history.productName}</td>
            <td>${history.productQuantity}</td>
            <td>${history.price}</td>
            <td>${history.totalPrice}</td>
        </tr>`;
        }
    });
}
function logout() {
    //display page
    let indexpage = document.getElementById("index-page");
    indexpage.style.display = "block";
    //hiding the  other pages
    let signuppage = document.getElementById("sign-up");
    let signinpage = document.getElementById("sign-in");
    let walletrechargetable = document.getElementById("walletrechargetable");
    let walletbalance = document.getElementById("walletbalancetable");
    let navigationBar = document.getElementById("nav-bar");
    navigationBar.style.display = "none";
    signuppage.style.display = "none";
    signinpage.style.display = "none";
    walletbalance.style.display = "none";
    walletrechargetable.style.display = "none";
}
