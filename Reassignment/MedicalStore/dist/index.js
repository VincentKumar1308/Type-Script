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
//
let userID = 5;
let orderID = 100;
let medicineID = 100;
let currentUser;
;
//sign up 
function signup() {
    //showing  sign up page
    let signUpPage = document.getElementById("sign-up");
    signUpPage.style.display = "block";
    //hiding otherpages
    let indexPage = document.getElementById("index-page");
    indexPage.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
}
function signupSubmit() {
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
        //creating the object and storing
        let user = { userID: undefined, userName: userName.value, userMailID: mailID.value, userPhoneNo: (phoneNo.value), password: password.value, balance: 0 };
        addUserDetails(user);
        //hidding the display of the sign up page
        let signUpPage = document.getElementById("sign-up");
        signUpPage.style.display = "none";
        //showing the index page
        let indexPage = document.getElementById("index-page");
        indexPage.style.display = "block";
    }
    else {
        alert("no blank values are allowed");
    }
}
function addUserDetails(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5291/api/userDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add contact');
        }
    });
}
function fetchUserDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5291/api/userDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch contacts');
        }
        return yield response.json();
    });
}
function updateUserDetails(id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5291/api/userDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to update order details');
        }
    });
}
//sign in
function signin() {
    //displaying the sign in page
    let signInPage = document.getElementById("sign-in");
    signInPage.style.display = "block";
    //hiding other pages
    let indexPage = document.getElementById("index-page");
    indexPage.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let balancetable = document.getElementById("balance-table");
    balancetable.style.display = "none";
    let purchasetable = document.getElementById("purchase-table");
    purchasetable.style.display = "none";
    let purchasetablequantity = document.getElementById("purchasebuytable");
    purchasetablequantity.style.display = "none";
    let orderhistory1 = document.getElementById("orderhistorys");
    orderhistory1.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
}
//sign in submit  button
function signinSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
        let userName = document.getElementById("sign-in-username");
        let password = document.getElementById("sign-in-password");
        //checking the available details in the stored list
        let isAlreadyLogged = false;
        const userList = yield fetchUserDetails();
        for (let user of userList) {
            if (userName.value == user.userName && password.value == user.password) {
                isAlreadyLogged = true;
                currentUser = user;
            }
        }
        if (isAlreadyLogged) {
            alert("login successful");
            //hiding the sign in page
            let signInPage = document.getElementById("sign-in");
            signInPage.style.display = "none";
            //displaying the navigation bar
            let navigationBar = document.getElementById("nav-bar");
            navigationBar.style.display = "flex";
        }
        //if null value
        else if (userName.value == "" || password.value == "") {
            alert("No blank values are allowed");
        }
        else {
            alert("Mismatch in password or user name");
        }
    });
}
//home page
function homepage() {
    //displaying the homepage
    let homepage = document.getElementById("homepage");
    homepage.style.display = "block";
    //hidding the other tables
    let medicineDetails = document.getElementById("medicinetable");
    medicineDetails.style.display = "none";
    let medicineAddTable = document.getElementById("medicineAdd");
    medicineAddTable.style.display = "none";
    let medicineDetailsEdit = document.getElementById("medicineedit");
    medicineDetailsEdit.style.display = "none";
    let topuptable = document.getElementById("top-up");
    topuptable.style.display = "none";
    let balancetable = document.getElementById("balance-table");
    balancetable.style.display = "none";
    let purchasetable = document.getElementById("purchase-table");
    purchasetable.style.display = "none";
    let purchasetablequantity = document.getElementById("purchasebuytable");
    purchasetablequantity.style.display = "none";
    let orderhistory1 = document.getElementById("orderhistorys");
    orderhistory1.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
    //printing the details in the home page
    let userName = currentUser.userName;
    homepage.innerHTML = `<h1 style="text-align:center"> Welcome ${userName}</h1>`;
}
//medicine details
function medicineDetails() {
    //adding the add button
    //adding details  to the medicine table
    let medicineDetails = document.getElementById("medicinetable");
    medicineDetails.style.display = "block";
    medicinedetailstable();
    //hiding the other tables
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let medicineAddTable = document.getElementById("medicineAdd");
    medicineAddTable.style.display = "none";
    let medicineDetailsEdit = document.getElementById("medicineedit");
    medicineDetailsEdit.style.display = "none";
    let topuptable = document.getElementById("top-up");
    topuptable.style.display = "none";
    let balancetable = document.getElementById("balance-table");
    balancetable.style.display = "none";
    let purchasetable = document.getElementById("purchase-table");
    purchasetable.style.display = "none";
    let purchasetablequantity = document.getElementById("purchasebuytable");
    purchasetablequantity.style.display = "none";
    let orderhistory1 = document.getElementById("orderhistorys");
    orderhistory1.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
}
//medicine details table
function medicinedetailstable() {
    return __awaiter(this, void 0, void 0, function* () {
        let medicineDetailsTable = document.getElementById("medicinedetailstable");
        medicineDetailsTable.innerHTML = `
    <tr id="row-align">
        <th class="col-align">${"Medicine  Name"}</th>
        <th class="col-align">${"Price"}</th>
        <th class="col-align">${"Quantity"}</th>
        <th clas=col-align">${"ExpiryDate"}</th>
        <th class="col-align">${"Action"}</th>
    </tr>`;
        const medicineList = yield fetchMedicineDetails();
        for (let medicine of medicineList) {
            medicineDetailsTable.innerHTML +=
                `<tr>
            <td class="col-align">${medicine.medicineName}</td>
            <td class="col-align">${medicine.medicinePrice}</td>
            <td class="col-align">${medicine.medicineQuantity}</td>
           <td class="col-align">${medicine.medicineExpiry}</td>
        <td class="col-align"><button  id="edit-btn" onclick="medicinedetailsedit('${medicine.medicineID}')">Edit</button><button id="delete-btn" onclick="medicinedetailsdelete(${medicine.medicineID})">Delete</button></td>
        </tr>`;
        }
    });
}
function addMedicineDetails(medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5291/api/medicine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to add medicine details');
        }
        medicinedetailstable();
    });
}
function fetchMedicineDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5291/api/medicine';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch medicine details');
        }
        return yield response.json();
    });
}
function updateMedicineDetails(id, medicine) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5291/api/medicine/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(medicine)
        });
        if (!response.ok) {
            throw new Error('Failed to update medicine details');
        }
    });
}
function deleteMedicineDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5291/api/medicine/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete the medicine details');
        }
        medicinedetailstable();
    });
}
//edit table
function medicinedetailsedit(medicineid) {
    return __awaiter(this, void 0, void 0, function* () {
        //displaying the edit table
        let medicineDetailsEdit = document.getElementById("medicineedit");
        medicineDetailsEdit.style.display = "block";
        console.log(medicineid);
        //hiding the other tables
        let homepage = document.getElementById("homepage");
        homepage.style.display = "none";
        let medicineDetails = document.getElementById("medicinetable");
        medicineDetails.style.display = "none";
        let medicineAddTable = document.getElementById("medicineAdd");
        medicineAddTable.style.display = "none";
        let topuptable = document.getElementById("top-up");
        topuptable.style.display = "none";
        let balancetable = document.getElementById("balance-table");
        balancetable.style.display = "none";
        let purchasetable = document.getElementById("purchase-table");
        purchasetable.style.display = "none";
        let purchasetablequantity = document.getElementById("purchasebuytable");
        purchasetablequantity.style.display = "none";
        let orderhistory1 = document.getElementById("orderhistorys");
        orderhistory1.style.display = "none";
        let cancelorder = document.getElementById("cancelorders");
        cancelorder.style.display = "none";
        //medicine details  list
        const medicineList = yield fetchMedicineDetails();
        for (let medicine of medicineList) {
            if (medicine.medicineID == medicineid) {
                let medicinename = document.getElementById("medicinenameedit");
                medicinename.value = medicine.medicineName;
                let medicineprice = document.getElementById("medicinepriceedit");
                console.log(medicine.medicinePrice);
                medicineprice.value = String(medicine.medicinePrice);
                let medicinequantity = document.getElementById("medicinequantityedit");
                medicinequantity.value = String(medicine.medicineQuantity);
                let medicineexpirydate = document.getElementById("medicinedateedit");
                let intermediateexpiry = medicine.medicineExpiry.toString().split('T')[0];
                medicineexpirydate.value = `${intermediateexpiry}`;
            }
        }
        //storing medicine id
        let medicineId = document.getElementById("medicineid");
        medicineId.value = String(medicineid);
    });
}
//deleting the medicine table
function medicinedetailsdelete(medicineid) {
    deleteMedicineDetails(medicineid);
    alert("deleted");
}
//table display and get input when user clicks the add button
function medicineeditsubmit() {
    let medicinename = document.getElementById("medicinenameedit");
    let medicineid = document.getElementById("medicineid");
    let medicineprice = document.getElementById("medicinepriceedit");
    let medicineexpiry = document.getElementById("medicinedateedit");
    let medicinequantity = document.getElementById("medicinequantityedit");
    if (medicinename.value != "" && medicineprice.value != "" && medicinequantity.value != "") {
        alert("updated successfully");
        let med1 = { medicineID: Number(medicineid.value), medicineName: medicinename.value, medicinePrice: Number(medicineprice.value), medicineQuantity: Number(medicinequantity.value), medicineExpiry: new Date(medicineexpiry.value) };
        updateMedicineDetails(Number(medicineid.value), med1);
        //hiding the edit table
        let medicineDetailsEdit = document.getElementById("medicineedit");
        medicineDetailsEdit.style.display = "none";
        let topuptable = document.getElementById("top-up");
        topuptable.style.display = "none";
        let balancetable = document.getElementById("balance-table");
        balancetable.style.display = "none";
        let purchasetable = document.getElementById("purchase-table");
        purchasetable.style.display = "none";
        let purchasetablequantity = document.getElementById("purchasebuytable");
        purchasetablequantity.style.display = "none";
        let orderhistory1 = document.getElementById("orderhistorys");
        orderhistory1.style.display = "none";
        let cancelorder = document.getElementById("cancelorders");
        cancelorder.style.display = "none";
    }
    else {
        alert("no blank values are allowed");
    }
}
function medicineAdd() {
    //displaying the table
    let medicineAddTable = document.getElementById("medicineAdd");
    medicineAddTable.style.display = "block";
    //hiding the medicinedetails table
    let medicineDetails = document.getElementById("medicinetable");
    medicineDetails.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let medicineDetailsEdit = document.getElementById("medicineedit");
    medicineDetailsEdit.style.display = "none";
    let topuptable = document.getElementById("top-up");
    topuptable.style.display = "none";
    let balancetable = document.getElementById("balance-table");
    balancetable.style.display = "none";
    let purchasetable = document.getElementById("purchase-table");
    purchasetable.style.display = "none";
    let purchasetablequantity = document.getElementById("purchasebuytable");
    purchasetablequantity.style.display = "none";
    let orderhistory1 = document.getElementById("orderhistorys");
    orderhistory1.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
}
//function medicine edit submit
//medicine add Submit button
function medicineAddSubmit() {
    let medicinename = document.getElementById("medicinenameadd");
    let medicineprice = document.getElementById("medicinepriceadd");
    let medicinequantity = document.getElementById("medicinequantityadd");
    let medicineexpirydate = document.getElementById("medicinedateadd");
    let expirydate = medicineexpirydate.value.split('-');
    if (medicinename.value != "" && medicineprice.value != "" && medicinequantity.value != "" && medicinequantity.value != "" && medicineexpirydate.value != "") {
        let medicine1 = { medicineID: undefined, medicineName: medicinename.value, medicinePrice: Number(medicineprice.value), medicineQuantity: Number(medicinequantity.value), medicineExpiry: new Date(Number(expirydate[0]), Number(expirydate[1]), Number(expirydate[1])) };
        addMedicineDetails(medicine1);
        alert("added successfully");
        //hiding the added table 
        let medicineAddTable = document.getElementById("medicineAdd");
        medicineAddTable.style.display = "none";
        let topuptable = document.getElementById("top-up");
        topuptable.style.display = "none";
        let balancetable = document.getElementById("balance-table");
        balancetable.style.display = "none";
        let purchasetable = document.getElementById("purchase-table");
        purchasetable.style.display = "none";
        let purchasetablequantity = document.getElementById("purchasebuytable");
        purchasetablequantity.style.display = "none";
        let orderhistory1 = document.getElementById("orderhistorys");
        orderhistory1.style.display = "none";
        let cancelorder = document.getElementById("cancelorders");
        cancelorder.style.display = "none";
    }
    else {
        alert("no blank values are allowed");
    }
}
//recharge
function topup() {
    //displaying the top up table
    let topuptable = document.getElementById("top-up");
    topuptable.style.display = "block";
    //hiding the other tables
    let medicineDetails = document.getElementById("medicinetable");
    medicineDetails.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let medicineDetailsEdit = document.getElementById("medicineedit");
    medicineDetailsEdit.style.display = "none";
    let medicineAddTable = document.getElementById("medicineAdd");
    medicineAddTable.style.display = "none";
    let balancetable = document.getElementById("balance-table");
    balancetable.style.display = "none";
    let purchasetable = document.getElementById("purchase-table");
    purchasetable.style.display = "none";
    let purchasetablequantity = document.getElementById("purchasebuytable");
    purchasetablequantity.style.display = "none";
    let orderhistory1 = document.getElementById("orderhistorys");
    orderhistory1.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
}
//validating the top up
function validateTopUp() {
    let amt = document.getElementById("rechargeamt");
    if (Number(amt.value) > 0) {
        currentUser.balance += Number(amt.value);
        alert("recharge successful and your current balance is " + currentUser.balance);
        updateUserDetails(currentUser.userID, currentUser);
        fetchUserDetails();
        //hiding the top up table
        let topuptable = document.getElementById("top-up");
        topuptable.style.display = "none";
        let balancetable = document.getElementById("balance-table");
        balancetable.style.display = "none";
        let purchasetable = document.getElementById("purchase-table");
        purchasetable.style.display = "none";
        let purchasetablequantity = document.getElementById("purchasebuytable");
        purchasetablequantity.style.display = "none";
        let orderhistory1 = document.getElementById("orderhistorys");
        orderhistory1.style.display = "none";
        let cancelorder = document.getElementById("cancelorders");
        cancelorder.style.display = "none";
    }
    else {
        alert("Invalid recharge amount");
    }
}
//balance display
function balancetable() {
    let balancetable = document.getElementById("balance-table");
    balancetable.innerHTML = `<p style="font-size:2rem;text-align:center">Your Current Balance is ${currentUser.balance}</p>`;
    //displaying the balance table
    balancetable.style.display = "block";
    //hiding the other tables
    let medicineDetails = document.getElementById("medicinetable");
    medicineDetails.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let medicineDetailsEdit = document.getElementById("medicineedit");
    medicineDetailsEdit.style.display = "none";
    let medicineAddTable = document.getElementById("medicineAdd");
    medicineAddTable.style.display = "none";
    let topuptable = document.getElementById("top-up");
    topuptable.style.display = "none";
    let purchasetable = document.getElementById("purchase-table");
    purchasetable.style.display = "none";
    let purchasetablequantity = document.getElementById("purchasebuytable");
    purchasetablequantity.style.display = "none";
    let orderhistory1 = document.getElementById("orderhistorys");
    orderhistory1.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
}
//purchase 
function purchase() {
    return __awaiter(this, void 0, void 0, function* () {
        let purchasetable = document.getElementById("purchase-table");
        purchasetable.style.display = "block";
        let purchasetableproduct = document.getElementById("purchasedisplaytable");
        purchasetableproduct.innerHTML = `<tr>
    <td>${"Name"}</td>
    <td>${"Price"}</td>
    <td>${"Quantity"}</td>
    <td>${"Expiry Date"}</td>
    <td>${"Action"}</td>
    </tr>`;
        const medicineList = yield fetchMedicineDetails();
        for (let medicine of medicineList) {
            purchasetableproduct.innerHTML +=
                `<tr>
            <td class="col-align">${medicine.medicineName}</td>
            <td class="col-align">${medicine.medicinePrice}</td>
            <td class="col-align">${medicine.medicineQuantity}</td>
           <td class="col-align">${medicine.medicineExpiry.toString().substring(0, 10)}</td>
           <td><button onclick="purchasetablequantity('${medicine.medicineID}')">Buy</button></td>
        </tr>`;
        }
        //hiding other tables
        let medicineDetails = document.getElementById("medicinetable");
        medicineDetails.style.display = "none";
        let homepage = document.getElementById("homepage");
        homepage.style.display = "none";
        let medicineDetailsEdit = document.getElementById("medicineedit");
        medicineDetailsEdit.style.display = "none";
        let medicineAddTable = document.getElementById("medicineAdd");
        medicineAddTable.style.display = "none";
        let topuptable = document.getElementById("top-up");
        topuptable.style.display = "none";
        let purchasetablequantity = document.getElementById("purchasebuytable");
        purchasetablequantity.style.display = "none";
        let balancetable = document.getElementById("balance-table");
        balancetable.style.display = "none";
        let orderhistory1 = document.getElementById("orderhistorys");
        orderhistory1.style.display = "none";
        let cancelorder = document.getElementById("cancelorders");
        cancelorder.style.display = "none";
    });
}
//purchase table quantity
function purchasetablequantity(medicineid) {
    //displaying the  quantity table
    let purchasetablequantity = document.getElementById("purchasebuytable");
    purchasetablequantity.style.display = "block";
    purchasetablequantity.innerHTML = `
    <label for="purchaseQuantity"> Enter the Quantity</label><br>
    <input type="number" id="purchasequantity" name="purchaseQuantity"><br><br>
    <button onclick="purchaseconfirm('${medicineid}')">Submit</button><br><br>
    <button onclick="cancelpurchase()" style="background-color: red">Cancel</button>
    `;
    //hiding the purchase table
    let purchasetable = document.getElementById("purchase-table");
    purchasetable.style.display = "none";
    let orderhistory1 = document.getElementById("orderhistorys");
    orderhistory1.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
}
//cancel purchase
function cancelpurchase() {
    //hiding the purchase table product
    let purchasetablequantity = document.getElementById("purchasebuytable");
    purchasetablequantity.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
}
//confirming purchase
function purchaseconfirm(medicineid) {
    return __awaiter(this, void 0, void 0, function* () {
        let quantity = document.getElementById("purchasequantity");
        const medicineList = yield fetchMedicineDetails();
        for (let medicine of medicineList) {
            if (medicineid == medicine.medicineID) {
                if (Number(quantity.value) > Number(medicine.medicineQuantity)) {
                    alert("not enough quantity");
                    //hiding the tables
                    let purchasetablequantity = document.getElementById("purchasebuytable");
                    purchasetablequantity.style.display = "none";
                    let purchasetable = document.getElementById("purchase-table");
                    purchasetable.style.display = "none";
                    break;
                }
                else {
                    if (Number(medicine.medicinePrice) * Number(quantity.value) > currentUser.balance) {
                        alert("Not sufficient balance");
                        //hiding the tables
                        let purchasetablequantity = document.getElementById("purchasebuytable");
                        purchasetablequantity.style.display = "none";
                        let purchasetable = document.getElementById("purchase-table");
                        purchasetable.style.display = "none";
                        break;
                    }
                    else {
                        alert("purchased successfully");
                        currentUser.balance = currentUser.balance - (Number(medicine.medicinePrice) * Number(quantity.value));
                        updateUserDetails(currentUser.userID, currentUser);
                        //hiding the tables
                        let purchasetablequantity = document.getElementById("purchasebuytable");
                        purchasetablequantity.style.display = "none";
                        let purchasetable = document.getElementById("purchase-table");
                        purchasetable.style.display = "none";
                        //adding the products to the order details
                        let productsordered = { orderID: undefined, productID: Number(medicine.medicineID), productName: medicine.medicineName, productPrice: Number(medicine.medicinePrice), productQuantity: Number(quantity.value), status: "ordered", userID: Number(currentUser.userID) };
                        medicine.medicineQuantity = Number(medicine.medicineQuantity) - Number(quantity.value);
                        productsordered.productQuantity = Number(quantity.value);
                        addOrderDetails(productsordered);
                        updateMedicineDetails(Number(medicine.medicineID), medicine);
                        break;
                    }
                }
            }
        }
    });
}
function addOrderDetails(order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5291/api/orderDetails', {
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
//orderhistory
function orderhistory() {
    return __awaiter(this, void 0, void 0, function* () {
        let orderhistory1 = document.getElementById("orderhistorys");
        orderhistory1.style.display = "block";
        let orderhistorytable = document.getElementById("orderhistorytable");
        orderhistorytable.innerHTML = `
    <tr>
        <td>${"Order ID"}</td>
        <td>${"Product Name"}</td>
        <td>${"Total Price"}</td>
        <td>${"Product Quantity"}</td>
        <td>${"order Status"}</td>
    </tr>`;
        const orderList = yield fetchorderDetails();
        for (let orderdetails of orderList) {
            if (orderdetails.userID == currentUser.userID) {
                orderhistorytable.innerHTML += `
            <tr>
                <td>${orderdetails.orderID}</td>
                <td>${orderdetails.productName}</td>
                <td>${orderdetails.productPrice}</td>
                <td>${orderdetails.productQuantity}</td>
                <td>${orderdetails.status}</td>
                </tr>`;
            }
        }
        //hiding the other tables
        let medicineDetails = document.getElementById("medicinetable");
        medicineDetails.style.display = "none";
        let homepage = document.getElementById("homepage");
        homepage.style.display = "none";
        let medicineDetailsEdit = document.getElementById("medicineedit");
        medicineDetailsEdit.style.display = "none";
        let medicineAddTable = document.getElementById("medicineAdd");
        medicineAddTable.style.display = "none";
        let topuptable = document.getElementById("top-up");
        topuptable.style.display = "none";
        let purchasetablequantity = document.getElementById("purchasebuytable");
        purchasetablequantity.style.display = "none";
        let balancetable = document.getElementById("balance-table");
        balancetable.style.display = "none";
        let cancelorder = document.getElementById("cancelorders");
        cancelorder.style.display = "none";
        let purchasetable = document.getElementById("purchase-table");
        purchasetable.style.display = "none";
    });
}
//cancelling the order
function cancelorder() {
    return __awaiter(this, void 0, void 0, function* () {
        let cancelorder = document.getElementById("cancelorders");
        cancelorder.style.display = "block";
        let cancelordertable = document.getElementById("cancelordertable");
        cancelordertable.innerHTML = `
    <tr>
        <td>${"order ID"}</td>
        <td>${"Product Name"}</td>
        <td>${"Product Price"}</td>
        <td>${"Product Quantity"}</td>
        <td>${"Status"}</td>
    </tr>`;
        const orderlist = yield fetchorderDetails();
        for (let orderdetails of orderlist) {
            if (orderdetails.userID == currentUser.userID && orderdetails.status == "ordered") {
                cancelordertable.innerHTML += `
            <tr>
                <td>${orderdetails.orderID}</td>
                <td>${orderdetails.productName}</td>
                <td>${orderdetails.productPrice}</td>
                <td>${orderdetails.productQuantity}</td>
                <td>${orderdetails.status}</td>
            </tr>`;
            }
        }
        cancelordertable.innerHTML +=
            `<label for="orderidcancel" style="margin:auto;margin-top:2%">Enter the order ID to cancel</label>
    <input type="text" id="orderidcancel" name="orderidcancel">
    <button onclick="validatecancelorder()">submit</button>`;
        //hiding the other tables
        let medicineDetails = document.getElementById("medicinetable");
        medicineDetails.style.display = "none";
        let homepage = document.getElementById("homepage");
        homepage.style.display = "none";
        let medicineDetailsEdit = document.getElementById("medicineedit");
        medicineDetailsEdit.style.display = "none";
        let medicineAddTable = document.getElementById("medicineAdd");
        medicineAddTable.style.display = "none";
        let topuptable = document.getElementById("top-up");
        topuptable.style.display = "none";
        let purchasetablequantity = document.getElementById("purchasebuytable");
        purchasetablequantity.style.display = "none";
        let balancetable = document.getElementById("balance-table");
        balancetable.style.display = "none";
        let orderhistory1 = document.getElementById("orderhistorys");
        orderhistory1.style.display = "none";
    });
}
//validating the cancel order
function validatecancelorder() {
    return __awaiter(this, void 0, void 0, function* () {
        let isvalidorderid = false;
        let cancellingorderid = document.getElementById("orderidcancel");
        const orderlist = yield fetchorderDetails();
        for (let ordertable of orderlist) {
            if (Number(cancellingorderid.value) == Number(ordertable.orderID)) {
                isvalidorderid = true;
                ordertable.status = "cancelled";
                alert("order cancelled successfully");
                currentUser.balance = currentUser.balance + ordertable.productPrice * ordertable.productQuantity;
                const medicinelist = yield fetchMedicineDetails();
                for (let medicine of medicinelist) {
                    if (medicine.medicineID == ordertable.productID) {
                        (medicine.medicineQuantity) = Number(ordertable.productQuantity) + Number(medicine.medicineQuantity);
                        updateMedicineDetails(Number(medicine.medicineID), medicine);
                        updateOrderDetails(ordertable.orderID, ordertable);
                        break;
                    }
                }
            }
        }
        if (!isvalidorderid) {
            alert("invalid order id ");
        }
    });
}
function fetchorderDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5291/api/orderDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch medicine details');
        }
        return yield response.json();
    });
}
function updateOrderDetails(id, order) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5291/api/orderDetails/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            throw new Error('Failed to update order details');
        }
    });
}
//logout
function logout() {
    //displaying the index page
    let indexPage = document.getElementById("index-page");
    indexPage.style.display = "block";
    //hiding the navbar
    let navigationBar = document.getElementById("nav-bar");
    navigationBar.style.display = "none";
    //hiding the other tables
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let medicineDetails = document.getElementById("medicinetable");
    medicineDetails.style.display = "none";
    let cancelorder = document.getElementById("cancelorders");
    cancelorder.style.display = "none";
}
