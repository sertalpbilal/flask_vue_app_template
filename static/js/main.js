
var app = new Vue({
    el: '#app',
    data: {
        data: undefined
    },
    computed: {
        my_attr() {
            return 1
        }
    },
    methods: {
        myMethod() {
            
        }
    }
})

function read_local_file(url) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "GET",
            url: url,
            async: true,
            success: function(data) {
                resolve(data);
            },
            error: function() {
                reject("No data");
            }
        });
    });
}

$(document).ready(() => {
    read_local_file("static/data/my_data.csv").then((d) => {
        app.data = d
    })
})
