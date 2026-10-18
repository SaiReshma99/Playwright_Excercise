let statuscode = 400;
let category = 

    statuscode < 300 ? "success": 
    statuscode < 400 ? "Redirect" :
    statuscode < 500 ? "clienterror" : "ServerError";

    console.log(`Status ${statuscode} : ${category}`);


    //output is client error 