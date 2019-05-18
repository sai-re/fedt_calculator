let c;
const Csv = {
    variables: {
        save: document.getElementById("save-js"),
    },

    init: function() {
        x = this.variables;
        this.toCSV();
    },

    toCSV: function() {
        const getIP = fetch('https://api.ipify.org?format=json').then(response => response.json());
        const getDate = new Date();
        const date = `${getDate.getDate()}, ${getDate.getMonth()}, ${getDate.getFullYear()}`;

        console.log(date);

        Promise.all([getIP]).then(data => {
            console.log(data[0].ip);
        })
    }
}

export {Csv};