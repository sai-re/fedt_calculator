let c;
const Csv = {
    variables: {
        save: document.getElementById("save-js"),
    },

    init: function() {
        c = this.variables;
        this.toCSV();
    },

    toCSV: function() {
        //Fetch IP from third part
        const getIP = fetch('https://api.ipify.org?format=json').then(response => response.json());

        //Create date string
        const getDate = new Date();
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const date = `${getDate.getDate()}, ${months[getDate.getMonth()]}, ${getDate.getFullYear()}`;
        
        //get info from navigator obj  
        const usrAgent = navigator.userAgent;
        let browser = "";

        //if statements to get first match of browser in user agent, (order is important for chrome and safari)
        if (usrAgent.indexOf("Firefox") > -1) {
            browser = "Mozilla Firefox";
        } else if (usrAgent.indexOf("Opera") > -1 || usrAgent.indexOf("OPR") > -1) {
            browser = "Opera";
        } else if (usrAgent.indexOf("Trident") > -1) {
            browser = "Microsoft Internet Explorer";
        } else if (usrAgent.indexOf("Edge") > -1) {
            browser = "Microsoft Edge";
        } else if (usrAgent.indexOf("Chrome") > -1) {
            browser = "Google Chrome";
        } else if (usrAgent.indexOf("Safari") > -1) {
            browser = "Apple Safari";
        } else {
            browser = "unknown";
        }

        console.log(browser);
        console.log(date);
        console.log(usrAgent);

        Promise.all([getIP]).then(data => {
            console.log(data[0].ip);
        })
    }
}

export {Csv};