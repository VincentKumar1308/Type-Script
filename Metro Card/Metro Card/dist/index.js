"use strict";
//
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let cardNo = 1;
let currentUser;
;
;
;
//functions for the personal details
function addPersonalDetails(person) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5154/api/PersonalInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        });
        if (!response.ok) {
            throw new Error('Failed to add person');
        }
    });
}
function fetchPersonalDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5154/api/PersonalInfo';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch personal details');
        }
        return yield response.json();
    });
}
function updatePersonalDetails(id, person) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`http://localhost:5154/api/PersonalInfo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(person)
        });
        if (!response.ok) {
            throw new Error('Failed to update personal details');
        }
    });
}
function signup() {
    let signuppage = document.getElementById("sign-up");
    signuppage.style.display = "block";
    //hiding the other pages
    let signinpage = document.getElementById("sign-in");
    signinpage.style.display = "none";
    let indexpage = document.getElementById("index-page");
    indexpage.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let ticketfair = document.getElementById("ticketfair");
    ticketfair.style.display = "none";
    let balance = document.getElementById("balancetable");
    balance.style.display = "none";
    let travelhistory = document.getElementById("travelhistory");
    travelhistory.style.display = "none";
}
//sign up submit
function signupSubmit() {
    let userName = document.getElementById("username");
    let phoneNo = document.getElementById("phoneno");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmpassword");
    if (password.value != confirmPassword.value) {
        alert("mismatch in password confirmation");
    }
    else if (userName.value != "" && phoneNo.value != "" && password.value != "" && confirmPassword.value != "") {
        alert("Sign Up successful");
        //creating  the  object and storing
        let person = { cardNo: undefined, userName: userName.value, password: password.value, PhonNo: phoneNo.value, balance: 0 };
        addPersonalDetails(person);
        //hidding the display of the sign up page
        let signinpage = document.getElementById("sign-in");
        signinpage.style.display = "none";
        let signuppage = document.getElementById("sign-up");
        signuppage.style.display = "none";
        let homepage = document.getElementById("homepage");
        homepage.style.display = "none";
        let ticketfair = document.getElementById("ticketfair");
        ticketfair.style.display = "none";
        let balance = document.getElementById("balancetable");
        balance.style.display = "none";
        let travelhistory = document.getElementById("travelhistory");
        travelhistory.style.display = "none";
        //displaying the nav-bar
        let navigationBar = document.getElementById("nav-bar");
        navigationBar.style.display = "flex";
    }
    else {
        alert("no blank values are allowed");
    }
}
function siginin() {
    let signinpage = document.getElementById("sign-in");
    signinpage.style.display = "block";
    //hiding the other page
    let signuppage = document.getElementById("sign-up");
    signuppage.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let ticketfair = document.getElementById("ticketfair");
    ticketfair.style.display = "none";
    let indexpage = document.getElementById("index-page");
    indexpage.style.display = "none";
    let recharge = document.getElementById("rechargetable");
    recharge.style.display = "none";
    let balance = document.getElementById("balancetable");
    balance.style.display = "none";
    let travelhistory = document.getElementById("travelhistory");
    travelhistory.style.display = "none";
}
//sign in submit  button
function signinSubmit() {
    return __awaiter(this, void 0, void 0, function* () {
        let username = document.getElementById("sign-in-username");
        let password = document.getElementById("sign-in-password");
        //checking the available details in the stored list
        let isAlreadyLogged = false;
        const userList = yield fetchPersonalDetails();
        for (let user of userList) {
            if (username.value == user.userName && password.value == user.password) {
                isAlreadyLogged = true;
                currentUser = user;
            }
        }
        if (isAlreadyLogged) {
            alert("login successful");
            //hiding the other page
            let signInPage = document.getElementById("sign-in");
            signInPage.style.display = "none";
            let indexPage = document.getElementById("index-page");
            indexPage.style.display = "none";
            let homepage = document.getElementById("homepage");
            homepage.style.display = "none";
            let ticketfair = document.getElementById("ticketfair");
            ticketfair.style.display = "none";
            let recharge = document.getElementById("rechargetable");
            recharge.style.display = "none";
            let balance = document.getElementById("balancetable");
            balance.style.display = "none";
            let travelhistory = document.getElementById("travelhistory");
            travelhistory.style.display = "none";
            //displaying the navigation bar
            let navigationBar = document.getElementById("nav-bar");
            navigationBar.style.display = "flex";
        }
        //if null value
        else if (username.value == "" || password.value == "") {
            alert("No blank values are allowed");
        }
        else {
            alert("Mismatch in password or user name");
        }
    });
}
//home page
function homepage() {
    let homepage = document.getElementById("homepage");
    homepage.style.display = "block";
    let personName = currentUser.userName;
    homepage.innerHTML = `<h1 style="text-align:center; font-size: 2rem; font-weight: bold;"> Welcome ${personName}</h1>`;
    //hiding other pages
    //hiding the other page
    let signInPage = document.getElementById("sign-in");
    signInPage.style.display = "none";
    let indexPage = document.getElementById("index-page");
    indexPage.style.display = "none";
    let ticketfair = document.getElementById("ticketfair");
    ticketfair.style.display = "none";
    let recharge = document.getElementById("rechargetable");
    recharge.style.display = "none";
    let balance = document.getElementById("balancetable");
    balance.style.display = "none";
    let travelhistory = document.getElementById("travelhistory");
    travelhistory.style.display = "none";
}
//function for the ticket details
function fetchTicketDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5154/api/TicketFair';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch Ticket Fair details');
        }
        return yield response.json();
    });
}
//ticket fair 
function ticket() {
    return __awaiter(this, void 0, void 0, function* () {
        //displaying the required table
        let ticketfair = document.getElementById("ticketfair");
        ticketfair.style.display = "block";
        let tickettable = document.getElementById("ticketfairtable");
        tickettable.innerHTML = `
    <tr id="row-align">
        <th class="col-align">${"Ticket ID"}</th>
        <th class="col-align">${"From Location"}</th>
        <th class="col-align">${"To  Location"}</th>
        <th clas=col-align">${"Ticket Price"}</th>
        <th class="col-align">${"Travel"}</th>
    </tr>`;
        const ticketList = yield fetchTicketDetails();
        for (let ticket of ticketList) {
            tickettable.innerHTML +=
                `<tr>
            <td class="col-align">${ticket.ticketID}</td>
            <td class="col-align">${ticket.fromLocation}</td>
            <td class="col-align">${ticket.toLocation}</td>
           <td class="col-align">${ticket.ticketPrice}</td>
           <td><button onclick="traveldetailslist('${ticket.ticketID}')"style="height:90%">Travel</button></td>
        </tr>`;
        }
        //hiding  the  other tables
        let signInPage = document.getElementById("sign-in");
        signInPage.style.display = "none";
        let indexPage = document.getElementById("index-page");
        indexPage.style.display = "none";
        let homepage = document.getElementById("homepage");
        homepage.style.display = "none";
        let recharge = document.getElementById("rechargetable");
        recharge.style.display = "none";
        let balance = document.getElementById("balancetable");
        balance.style.display = "none";
        let travelhistory = document.getElementById("travelhistory");
        travelhistory.style.display = "none";
    });
}
//travel confirmed table
function traveldetailslist(ticketid) {
    return __awaiter(this, void 0, void 0, function* () {
        const ticketList = yield fetchTicketDetails();
        for (let ticket of ticketList) {
            if (ticket.ticketID == ticketid) {
                if (currentUser.balance > ticket.ticketPrice) {
                    alert("Enjoy Your Journey");
                    //updating the user wallet balance
                    currentUser.balance = currentUser.balance - ticket.ticketPrice;
                    updatePersonalDetails(currentUser.cardNo, currentUser);
                    //creating object for the travel details
                    let travel = { travelID: undefined, travelDate: new Date(), travelCost: ticket.ticketPrice, fromLocation: ticket.fromLocation, toLocation: ticket.toLocation, cardNo: currentUser.cardNo };
                    addTravelDetails(travel);
                }
                else if (currentUser.balance < ticket.ticketPrice) {
                    alert("insufficient balance please recharge");
                }
            }
        }
    });
}
//functions for the travel details
function addTravelDetails(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:5154/api/TravelDetails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        if (!response.ok) {
            throw new Error('Failed to add the travel details');
        }
    });
}
function fetchTravelDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiUrl = 'http://localhost:5154/api/TravelDetails';
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch the travel details');
        }
        return yield response.json();
    });
}
//recharge
function recharge() {
    let recharge = document.getElementById("rechargetable");
    recharge.style.display = "block";
    recharge.innerHTML = `<p>
    Enter the  Amount to recharge</p><br>
    <input type="number" id="rechargeamt" placeholder="Enter the  recharge amount"><br>
    <button onclick="confirmRecharge()">Submit</button>`;
    //hiding the other tables
    let signInPage = document.getElementById("sign-in");
    signInPage.style.display = "none";
    let indexPage = document.getElementById("index-page");
    indexPage.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let balance = document.getElementById("balancetable");
    balance.style.display = "none";
    let travelhistory = document.getElementById("travelhistory");
    travelhistory.style.display = "none";
    let ticketfair = document.getElementById("ticketfair");
    ticketfair.style.display = "none";
}
function confirmRecharge() {
    let rechargeamt = document.getElementById("rechargeamt");
    currentUser.balance += Number(rechargeamt.value);
    updatePersonalDetails(currentUser.cardNo, currentUser);
    alert("Recharge Successful");
    //hiding the recharge page
    let recharge = document.getElementById("rechargetable");
    recharge.style.display = "none";
    let signInPage = document.getElementById("sign-in");
    signInPage.style.display = "none";
    let indexPage = document.getElementById("index-page");
    indexPage.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let balance = document.getElementById("balancetable");
    balance.style.display = "none";
    let travelhistory = document.getElementById("travelhistory");
    travelhistory.style.display = "none";
    let ticketfair = document.getElementById("ticketfair");
    ticketfair.style.display = "none";
}
//show balance table
function balance() {
    let balance = document.getElementById("balancetable");
    balance.style.display = "block";
    balance.innerHTML =
        `<p>Welcome ${currentUser.userName} Your Current balance is ${currentUser.balance}</p>`;
    //hiding  the other pages
    let recharge = document.getElementById("rechargetable");
    recharge.style.display = "none";
    let signInPage = document.getElementById("sign-in");
    signInPage.style.display = "none";
    let indexPage = document.getElementById("index-page");
    indexPage.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let travelhistory = document.getElementById("travelhistory");
    travelhistory.style.display = "none";
    let ticketfair = document.getElementById("ticketfair");
    ticketfair.style.display = "none";
}
//travel history
function travelhistory() {
    return __awaiter(this, void 0, void 0, function* () {
        let travelhistory = document.getElementById("travelhistory");
        travelhistory.style.display = "block";
        let travelhistorytable = document.getElementById("travelhistorytable");
        travelhistorytable.innerHTML =
            `
        <tr>
            <th>${"Travel ID"}</th>
            <th>${"Card Number"}</th>
            <th>${"From Location"}</th>
            <th>${"To Location"}</th>
            <th>${"Date"}</th>
            <th>${"Travel Cost"}</th>
        </tr>`;
        const travelhistoryList = yield fetchTravelDetails();
        for (let travel of travelhistoryList) {
            travelhistorytable.innerHTML +=
                `<tr>
                <td>${travel.travelID}</td>
                <td>${travel.cardNo}</td>
                <td>${travel.fromLocation}</td>
                <td>${travel.toLocation}</td>
                <td>${travel.travelDate.toString().split('T')[0]}</td>
                <td>${travel.travelCost}</td>
            </tr>`;
        }
        //hiding other tables
        let recharge = document.getElementById("rechargetable");
        recharge.style.display = "none";
        let signInPage = document.getElementById("sign-in");
        signInPage.style.display = "none";
        let indexPage = document.getElementById("index-page");
        indexPage.style.display = "none";
        let homepage = document.getElementById("homepage");
        homepage.style.display = "none";
        let balance = document.getElementById("balancetable");
        balance.style.display = "none";
        let ticketfair = document.getElementById("ticketfair");
        ticketfair.style.display = "none";
    });
}
//logout
function logout() {
    //displaying only the index page
    let indexPage = document.getElementById("index-page");
    indexPage.style.display = "flex";
    //hiding the other page
    let recharge = document.getElementById("rechargetable");
    recharge.style.display = "none";
    let signInPage = document.getElementById("sign-in");
    signInPage.style.display = "none";
    let homepage = document.getElementById("homepage");
    homepage.style.display = "none";
    let balance = document.getElementById("balancetable");
    balance.style.display = "none";
    let ticketfair = document.getElementById("ticketfair");
    ticketfair.style.display = "none";
}
