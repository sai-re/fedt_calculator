let c;
const Csv = {
    variables: {
        save: document.getElementById("save-js"),
        answer: document.getElementById("answer-js")
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
        const date = `${getDate.getDate()}/${months[getDate.getMonth()]}/${getDate.getFullYear()}`;
        
        //get info from navigator obj  
        const usrAgent = navigator.userAgent;
        let browser = "";

        //array to store csv values
        const arr = [];

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

        //resolve promise from fetch
        Promise.all([getIP]).then(data => {
            c.save.addEventListener('click', e => {
                const ip = data[0].ip;
                const sum = Number(c.answer.textContent);
                //push object containing value to array
                arr.push({sum, ip, date, browser});

                console.log(arr);
            })
        })
    }
}

export {Csv};