let responseTime = 850;
let SLA = 1000;
let slaStatus = responseTime <= SLA ? "within SLA" : "SLA breached" ;

console.log(`Response: ${responseTime}ms -- ${slaStatus}`);


//suggest a print for template literal for above example
