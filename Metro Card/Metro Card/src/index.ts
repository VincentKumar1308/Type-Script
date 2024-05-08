//

let  cardNo=1;
let currentUser:PersonalInfo;

//class for the personal details
interface PersonalInfo{
    cardNo:any
    userName:string
    PhonNo:string
    password:string
    balance:number
};


//class for the ticket details
interface TicketFair{
    ticketID:any
    fromLocation:string
    toLocation:string
    ticketPrice:number
};

//class for the travel details
interface TravelDetails{
    travelID:any
    cardNo:number
    fromLocation:string
    toLocation:string
    travelCost:number
    travelDate:Date
};

//functions for the personal details

async function addPersonalDetails(person:PersonalInfo): Promise<void> {
    const response=await fetch('http://localhost:5154/api/PersonalInfo', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(person)
    });
    if(!response.ok){
        throw new Error('Failed to add person');
    }
   
}


async function fetchPersonalDetails(): Promise<PersonalInfo[]> {
    const apiUrl= 'http://localhost:5154/api/PersonalInfo';
    const response=await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch personal details');
    }
    return await response.json();
}


async function updatePersonalDetails(id: Number, person: PersonalInfo): Promise<void> {
    const response = await fetch(`http://localhost:5154/api/PersonalInfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(person)
    });
    if (!response.ok) {
      throw new Error('Failed to update personal details');
    }
   
  }

function signup(){
    let signuppage=document.getElementById("sign-up") as HTMLDivElement;
    signuppage.style.display="block";

    //hiding the other pages
    let signinpage=document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="none";
    let indexpage=document.getElementById("index-page") as HTMLDivElement;
    indexpage.style.display="none";
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
    ticketfair.style.display="none";
    let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
   
}

//sign up submit

function signupSubmit(){
    let userName=document.getElementById("username") as HTMLInputElement;
    let phoneNo=document.getElementById("phoneno") as HTMLInputElement;
    let password=document.getElementById("password") as HTMLInputElement;
    let confirmPassword=document.getElementById("confirmpassword") as HTMLInputElement;
   
    if(password.value!=confirmPassword.value){
        alert("mismatch in password confirmation");
    }

    else if(userName.value!="" && phoneNo.value!="" && password.value!="" && confirmPassword.value!=""){
        alert("Sign Up successful");

    //creating  the  object and storing
    let person:PersonalInfo={cardNo:undefined,userName:userName.value,password:password.value,PhonNo:phoneNo.value,balance:0};
    addPersonalDetails(person);

    
    //hidding the display of the sign up page
    let signinpage=document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="none";
    let signuppage=document.getElementById("sign-up") as HTMLDivElement;
    signuppage.style.display="none";
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
    ticketfair.style.display="none";
    let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
     

    //displaying the nav-bar
    let navigationBar=document.getElementById("nav-bar") as HTMLDivElement;
    navigationBar.style.display="flex";

    }

    
    else{
        alert("no blank values are allowed");
    }
   
}

function siginin(){
    let signinpage=document.getElementById("sign-in") as HTMLDivElement;
    signinpage.style.display="block";

    //hiding the other page
    let signuppage=document.getElementById("sign-up") as HTMLDivElement;
    signuppage.style.display="none";
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
    ticketfair.style.display="none";
    let indexpage=document.getElementById("index-page") as HTMLDivElement;
    indexpage.style.display="none";
    let recharge=document.getElementById("rechargetable") as HTMLDivElement;
    recharge.style.display="none";
    let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
  
     
}


//sign in submit  button

async function signinSubmit(){
    let username=document.getElementById("sign-in-username") as HTMLInputElement;
    let password=document.getElementById("sign-in-password") as HTMLInputElement;

    //checking the available details in the stored list
    let isAlreadyLogged:Boolean=false;
    const userList=await fetchPersonalDetails()
    for(let user of userList){
        if(username.value==user.userName && password.value==user.password){
            isAlreadyLogged=true;
            currentUser=user;
            
        }
    }
    if(isAlreadyLogged){
        alert("login successful");

        //hiding the other page
        let signInPage=document.getElementById("sign-in") as HTMLDivElement;
       signInPage.style.display="none";
       let indexPage=document.getElementById("index-page") as HTMLDivElement;
       indexPage.style.display="none";
       let homepage=document.getElementById("homepage") as HTMLDivElement;
       homepage.style.display="none";
       let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
       ticketfair.style.display="none";
       let recharge=document.getElementById("rechargetable") as HTMLDivElement;
       recharge.style.display="none";
       let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
        
   


       //displaying the navigation bar
       let navigationBar=document.getElementById("nav-bar") as HTMLDivElement;
       navigationBar.style.display="flex";
    }

    
    //if null value

    else if(username.value=="" || password.value==""){
        alert("No blank values are allowed");
    }

    else{
        alert("Mismatch in password or user name");
    }
}

//home page
function homepage(){
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="block";

    let personName=currentUser.userName;
    homepage.innerHTML=`<h1 style="text-align:center; font-size: 2rem; font-weight: bold;"> Welcome ${personName}</h1>`

    //hiding other pages
     //hiding the other page
     let signInPage=document.getElementById("sign-in") as HTMLDivElement;
     signInPage.style.display="none";
     let indexPage=document.getElementById("index-page") as HTMLDivElement;
     indexPage.style.display="none";
     let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
    ticketfair.style.display="none";
    let recharge=document.getElementById("rechargetable") as HTMLDivElement;
    recharge.style.display="none";
    let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
     
}

//function for the ticket details
async function fetchTicketDetails(): Promise<TicketFair[]> {
    const apiUrl= 'http://localhost:5154/api/TicketFair';
    const response=await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch Ticket Fair details');
    }
    return await response.json();
}

//ticket fair 
async function ticket(){

    //displaying the required table
    let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
    ticketfair.style.display="block";

    let tickettable=document.getElementById("ticketfairtable") as HTMLTableElement
    tickettable.innerHTML=`
    <tr id="row-align">
        <th class="col-align">${"Ticket ID"}</th>
        <th class="col-align">${"From Location"}</th>
        <th class="col-align">${"To  Location"}</th>
        <th clas=col-align">${"Ticket Price"}</th>
        <th class="col-align">${"Travel"}</th>
    </tr>`;
    const ticketList=await fetchTicketDetails()
    for(let ticket of ticketList){
      
        tickettable.innerHTML+=
        `<tr>
            <td class="col-align">${ticket.ticketID}</td>
            <td class="col-align">${ticket.fromLocation}</td>
            <td class="col-align">${ticket.toLocation}</td>
           <td class="col-align">${ticket.ticketPrice}</td>
           <td><button onclick="traveldetailslist('${ticket.ticketID}')"style="height:90%">Travel</button></td>
        </tr>`
    }


    //hiding  the  other tables
    let signInPage=document.getElementById("sign-in") as HTMLDivElement;
    signInPage.style.display="none";
    let indexPage=document.getElementById("index-page") as HTMLDivElement;
    indexPage.style.display="none";
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let recharge=document.getElementById("rechargetable") as HTMLDivElement;
    recharge.style.display="none";
    let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
    

}

//travel confirmed table
async function traveldetailslist(ticketid:number){
    const ticketList=await fetchTicketDetails();
    for(let ticket of ticketList){
        if(ticket.ticketID==ticketid){
            if(currentUser.balance>ticket.ticketPrice){
                alert("Enjoy Your Journey");

                //updating the user wallet balance
                currentUser.balance=currentUser.balance-ticket.ticketPrice;
                updatePersonalDetails(currentUser.cardNo,currentUser);

                //creating object for the travel details
                let travel:TravelDetails={travelID:undefined,travelDate:new Date(),travelCost:ticket.ticketPrice,fromLocation:ticket.fromLocation,toLocation:ticket.toLocation,cardNo:currentUser.cardNo};
                addTravelDetails(travel);

                
            }
            else if(currentUser.balance<ticket.ticketPrice){
                alert("insufficient balance please recharge");
            }
        }
    }
}

//functions for the travel details

async function addTravelDetails(user:TravelDetails): Promise<void> {
    const response=await fetch('http://localhost:5154/api/TravelDetails', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(user)
    });
    if(!response.ok){
        throw new Error('Failed to add the travel details');
    }
   
}

async function fetchTravelDetails(): Promise<TravelDetails[]> {
    const apiUrl= 'http://localhost:5154/api/TravelDetails';
    const response=await fetch(apiUrl);
    if(!response.ok){
        throw new Error('Failed to fetch the travel details');
    }
    return await response.json();
}

//recharge
function recharge(){
    let recharge=document.getElementById("rechargetable") as HTMLDivElement;
    recharge.style.display="block";
    recharge.innerHTML=`<p>
    Enter the  Amount to recharge</p><br>
    <input type="number" id="rechargeamt" placeholder="Enter the  recharge amount"><br>
    <button onclick="confirmRecharge()">Submit</button>`;

    //hiding the other tables
    let signInPage=document.getElementById("sign-in") as HTMLDivElement;
    signInPage.style.display="none";
    let indexPage=document.getElementById("index-page") as HTMLDivElement;
    indexPage.style.display="none";
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
    let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
    ticketfair.style.display="none";
}

function confirmRecharge(){

    let rechargeamt=document.getElementById("rechargeamt") as HTMLInputElement;
    currentUser.balance+=Number(rechargeamt.value);
    updatePersonalDetails(currentUser.cardNo,currentUser);
    alert("Recharge Successful");

    //hiding the recharge page
    let recharge=document.getElementById("rechargetable") as HTMLDivElement;
    recharge.style.display="none";
    let signInPage=document.getElementById("sign-in") as HTMLDivElement;
    signInPage.style.display="none";
    let indexPage=document.getElementById("index-page") as HTMLDivElement;
    indexPage.style.display="none";
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
    let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
    ticketfair.style.display="none";

}

//show balance table
function balance(){
    let balance=document.getElementById("balancetable") as HTMLDivElement;
    balance.style.display="block";
    balance.innerHTML=
    `<p>Welcome ${currentUser.userName} Your Current balance is ${currentUser.balance}</p>`


    //hiding  the other pages
    let recharge=document.getElementById("rechargetable") as HTMLDivElement;
    recharge.style.display="none";
    let signInPage=document.getElementById("sign-in") as HTMLDivElement;
    signInPage.style.display="none";
    let indexPage=document.getElementById("index-page") as HTMLDivElement;
    indexPage.style.display="none";
    let homepage=document.getElementById("homepage") as HTMLDivElement;
    homepage.style.display="none";
    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="none";
    let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
    ticketfair.style.display="none";

}


//travel history
async function travelhistory(){

    let travelhistory=document.getElementById("travelhistory") as HTMLDivElement;
    travelhistory.style.display="block";
    let travelhistorytable=document.getElementById("travelhistorytable") as HTMLTableElement;
    travelhistorytable.innerHTML=
    `
        <tr>
            <th>${"Travel ID"}</th>
            <th>${"Card Number"}</th>
            <th>${"From Location"}</th>
            <th>${"To Location"}</th>
            <th>${"Date"}</th>
            <th>${"Travel Cost"}</th>
        </tr>`

        const travelhistoryList=await fetchTravelDetails();
        for(let travel of travelhistoryList){
            travelhistorytable.innerHTML+=
            `<tr>
                <td>${travel.travelID}</td>
                <td>${travel.cardNo}</td>
                <td>${travel.fromLocation}</td>
                <td>${travel.toLocation}</td>
                <td>${travel.travelDate.toString().split('T')[0]}</td>
                <td>${travel.travelCost}</td>
            </tr>`

        }

        //hiding other tables
        let recharge=document.getElementById("rechargetable") as HTMLDivElement;
        recharge.style.display="none";
        let signInPage=document.getElementById("sign-in") as HTMLDivElement;
        signInPage.style.display="none";
        let indexPage=document.getElementById("index-page") as HTMLDivElement;
        indexPage.style.display="none";
        let homepage=document.getElementById("homepage") as HTMLDivElement;
        homepage.style.display="none";
        let balance=document.getElementById("balancetable") as HTMLDivElement;
        balance.style.display="none";
        let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
        ticketfair.style.display="none";
      
    
    
}

//logout
function logout(){
    //displaying only the index page
    let indexPage=document.getElementById("index-page") as HTMLDivElement;
    indexPage.style.display="flex";


    //hiding the other page

        let recharge=document.getElementById("rechargetable") as HTMLDivElement;
        recharge.style.display="none";
        let signInPage=document.getElementById("sign-in") as HTMLDivElement;
        signInPage.style.display="none";
        let homepage=document.getElementById("homepage") as HTMLDivElement;
        homepage.style.display="none";
        let balance=document.getElementById("balancetable") as HTMLDivElement;
        balance.style.display="none";
        let ticketfair=document.getElementById("ticketfair") as HTMLDivElement;
        ticketfair.style.display="none";
    
    

}
