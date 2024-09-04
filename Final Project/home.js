
let signupForm = document.getElementById("signupForm")
let loginForm = document.getElementById("loginForm")
function signUp() {
    let signupFormData = new FormData(signupForm);
    let user = {};
    for (const [key, value] of signupFormData.entries()) {
      user[key] = value;
    }
    let userJson = JSON.stringify(user);
    localStorage.setItem("user", userJson);
    alert("Your account created successfully! Please log in...")
    window.location.href = 'login.html';
}
function logIn() {
    const localUserJson = localStorage.getItem("user");
    if (localUserJson) {
        const localUser = JSON.parse(localUserJson);
        const userName = document.getElementById('username');
        const userPassword = document.getElementById('password');
        if (userName.value === localUser.username && userPassword.value === localUser.password) {
            alert('You are logged in.');
            localStorage.setItem("currentUsername", userName.value);
            window.location.href = 'home.html';
        } else {
            alert('Account could not found...');
            loginForm.reset()
        }
    } else {
        alert('No user data found in local storage.');
        loginForm.reset()
    }
}
$("#signout").on("click", function() {
    if(confirm("Signing out...")) {
        localStorage.removeItem("currentUsername");
        window.location.href = 'home.html'
    }
})




let arr = [
    {country: "Turkiye",
    cities: [
        {
            images: "https://i.pinimg.com/564x/98/c1/40/98c140dcfc210a3e2bbadba6e0d46b0e.jpg",
            cityName: "Istanbul",
            price: "234$",
            tourType: "Group",
            days: "12"
        },
        {
            images: "https://i.pinimg.com/564x/72/ef/9f/72ef9fc3ebec6e0da2988ba08a01f72f.jpg",
            cityName: "Antalya",
            price: "214$",
            tourType: "Private",
            days: "10"
        },
        {
            images: "https://i.pinimg.com/564x/c9/ae/65/c9ae651d243f49f1e3ab15283289bf3c.jpg",
            cityName: "Ankara",
            price: "134$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/564x/81/0d/97/810d974ae065af5a3cf82ae76622efd1.jpg",
            cityName: "Konya",
            price: "104$",
            tourType: "Group",
            days: "5"
        },
        {
            images: "https://i.pinimg.com/564x/4c/65/49/4c65492dcac70d62b4d09b783d4e79da.jpg",
            cityName: "Izmir",
            price: "275$",
            tourType: "Group",
            days: "15"
        },
        {
            images: "https://i.pinimg.com/736x/21/f0/84/21f0841fff1036b69b156b360c23d5e4.jpg",
            cityName: "Bodrum",
            price: "300$",
            tourType: "Group",
            days: "11"
        },
        {
            images: "https://i.pinimg.com/736x/e4/ec/26/e4ec26202ca4f415c27ff6354f1d9140.jpg",
            cityName: "Bursa",
            price: "114$",
            tourType: "Group",
            days: "4"
        },
        {
            images: "https://i.pinimg.com/564x/43/04/b5/4304b52d543e17bd74a8b86f9c77eda4.jpg",
            cityName: "Trabzon",
            price: "130$",
            tourType: "Group",
            days: "5"
        },
        {
            images: "https://i.pinimg.com/564x/33/73/1b/33731b4f5919a4a93a4a53f5666f3cbe.jpg",
            cityName: "Gaziantep",
            price: "128$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/564x/b0/12/6a/b0126a02b6b0cbec84115d1745fc40fc.jpg",
            cityName: "Eskişehir",
            price: "110$",
            tourType: "Group",
            days: "6"
        },
        ]},
    {country: "France",
    cities: [
        {
            images: "https://i.pinimg.com/736x/1b/98/88/1b988822076454c4afc212c68d0a5884.jpg",
            cityName: "Paris",
            price: "450$",
            tourType: "Private",
            days: "18"
        },
        {
            images: "https://i.pinimg.com/564x/e7/ab/f7/e7abf7ec581185223a8c6e9335d2b749.jpg",
            cityName: "Lyon",
            price: "300$",
            tourType: "Group",
            days: "12"
        },
        {
            images: "https://i.pinimg.com/564x/d9/de/e0/d9dee0e4f75d2127ea7a17b4f5ad9753.jpg",
            cityName: "Marseille",
            price: "290$",
            tourType: "Group",
            days: "10"
        },
        {
            images: "https://i.pinimg.com/564x/35/56/be/3556be8b93ff63255e56dbba07432f5f.jpg",
            cityName: "Lille",
            price: "285$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/29/ba/8b/29ba8b59c4aace342446b567331a9db3.jpg",
            cityName: "Toulouse",
            price: "310$",
            tourType: "Group",
            days: "9"
        },
        {
            images: "https://i.pinimg.com/564x/53/7c/55/537c55b14e796ac0d20345ab210c6ffe.jpg",
            cityName: "Nice",
            price: "280$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/564x/e9/f2/ff/e9f2ffc70eec6fb1542e5253b0b33ec7.jpg",
            cityName: "Bordeaux",
            price: "295$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/42/4d/10/424d10c253735ce2a5420b1dfb5d04eb.jpg",
            cityName: "Nantes",
            price: "270$",
            tourType: "Group",
            days: "4"
        },
        {
            images: "https://i.pinimg.com/564x/cf/c1/59/cfc15947f93f47d6dad024f994baee1a.jpg",
            cityName: "Strasbourg",
            price: "278$",
            tourType: "Group",
            days: "3"
        },
        {
            images: "https://i.pinimg.com/564x/59/39/61/5939615d9298b1ce17884d0314ecd01d.jpg",
            cityName: "Toulon",
            price: "260$",
            tourType: "Group",
            days: "2"
        },
        ]},
    {country: "Russia",
    cities: [
        {
            images: "https://i.pinimg.com/564x/29/2d/e2/292de231f2d4bb8572813423294bae60.jpg",
            cityName: "Moscow",
            price: "200$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/25/b1/fc/25b1fc77a69de623ab85bc9c78172bd1.jpg",
            cityName: "St. Petersburg",
            price: "220$",
            tourType: "Private",
            days: "10"
        },
        {
            images: "https://i.pinimg.com/564x/64/10/6d/64106d8360a32923776097a07aa84f20.jpg",
            cityName: "Novosibirsk",
            price: "180$",
            tourType: "Group",
            days: "5"
        },
        {
            images: "https://i.pinimg.com/564x/85/e2/94/85e29482328f31e73275483d1ba627eb.jpg",
            cityName: "Yekaterinburg",
            price: "200$",
            tourType: "Group",
            days: "4"
        },
        {
            images: "https://i.pinimg.com/564x/60/77/31/607731399faa38f3175244e55543a302.jpg",
            cityName: "N. Novgorod",
            price: "186$",
            tourType: "Group",
            days: "3"
        },
        {
            images: "https://i.pinimg.com/564x/f8/cb/a7/f8cba7e0104704b1572cfdf5626e09c8.jpg",
            cityName: "Kazan",
            price: "160$",
            tourType: "Group",
            days: "2"
        },
        {
            images: "https://i.pinimg.com/564x/a9/ca/52/a9ca52718503c23619e9500ea63b83ab.jpg",
            cityName: "Chelyabinsk",
            price: "150$",
            tourType: "Group",
            days: "3"
        },
        {
            images: "https://i.pinimg.com/564x/64/94/2c/64942c5c80d129e3232bb40f7ad4eb0f.jpg",
            cityName: "Omsk",
            price: "140$",
            tourType: "Group",
            days: "2"
        },
        {
            images: "https://i.pinimg.com/564x/11/88/c3/1188c389136d8a96fc582ab9d813b164.jpg",
            cityName: "Samara",
            price: "125$",
            tourType: "Group",
            days: "3"
        },
        {
            images: "https://i.pinimg.com/564x/f8/dc/fe/f8dcfe11149e151dfe96a832d0701d00.jpg",
            cityName: "Rostov on Don",
            price: "122$",
            tourType: "Group",
            days: "2"
        },
        ]},
    {country: "USA",
    cities: [
        {
            images: "https://i.pinimg.com/564x/5a/70/07/5a70070aece4a33399d9e28e79724859.jpg",
            cityName: "New York",
            price: "656$",
            tourType: "Group",
            days: "16"
        },
        {
            images: "https://i.pinimg.com/564x/14/6a/fc/146afcd5b90910f62d76a1d7dc2c53b2.jpg",
            cityName: "Los Angeles",
            price: "629$",
            tourType: "Group",
            days: "13"
        },
        {
            images: "https://i.pinimg.com/736x/01/5b/76/015b765a38aab635f49f31c0337e6e8b.jpg",
            cityName: "Las Vegas",
            price: "635$",
            tourType: "Private",
            days: "11"
        },
        {
            images: "https://i.pinimg.com/564x/e7/54/03/e75403d1faa3bbf0010e0179d039dec7.jpg",
            cityName: "Chicago",
            price: "617$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/08/5f/03/085f031ab7c52732c97ccdd105a95c1b.jpg",
            cityName: "Boston",
            price: "605$",
            tourType: "Group",
            days: "7"
        },
        {
            images: "https://i.pinimg.com/564x/9b/68/0e/9b680e4d1cd352d94ec15128e87deaa7.jpg",
            cityName: "Philadelphia",
            price: "610$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/564x/de/eb/46/deeb46813a4fb7463dcd0411e1389838.jpg",
            cityName: "Houston",
            price: "604$",
            tourType: "Group",
            days: "7"
        },
        {
            images: "https://i.pinimg.com/564x/37/17/3a/37173a45b938a715c0df87e4eb1e90aa.jpg",
            cityName: "San Antonio",
            price: "607$",
            tourType: "Group",
            days: "4"
        },
        {
            images: "https://i.pinimg.com/564x/00/94/b0/0094b0c1cd6ed5f1a1474721c38ba4c0.jpg",
            cityName: "Dallas",
            price: "608$",
            tourType: "Group",
            days: "5"
        },
        {
            images: "https://i.pinimg.com/564x/5b/2d/12/5b2d126ccb9e4e18a2151b1fd410787c.jpg",
            cityName: "San Jose",
            price: "603$",
            tourType: "Group",
            days: "4"
        },
        ]},
    {country: "Greece",
    cities: [
        {
            images: "https://i.pinimg.com/736x/e4/89/22/e48922be06f3c6bc49757c38d37222c1.jpg",
            cityName: "Corfu Town",
            price: "460$",
            tourType: "Group",
            days: "14"
        },
        {
            images: "https://i.pinimg.com/564x/76/d1/8a/76d18a0599793e3bcd2a8a1c18df3132.jpg",
            cityName: "Athens",
            price: "480$",
            tourType: "Private",
            days: "18"
        },
        {
            images: "https://i.pinimg.com/736x/55/7b/71/557b7175391dc9a6feb06642dfbb58f7.jpg",
            cityName: "Kalambaka",
            price: "450$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/bf/f3/e1/bff3e1ad201371e5005c15f6d5fb0f84.jpg",
            cityName: "Rhodes Town",
            price: "438$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/564x/19/85/6a/19856aa430fb3200c70424fb0bc54381.jpg",
            cityName: "Heraklion",
            price: "440$",
            tourType: "Group",
            days: "9"
        },
        {
            images: "https://i.pinimg.com/564x/91/0a/46/910a4609e0955b3c7842828cecc7cdf4.jpg",
            cityName: "Nafplio",
            price: "432$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/9a/4a/cd/9a4acdaa04bf7270e913024a9f68b053.jpg",
            cityName: "Agora",
            price: "448$",
            tourType: "Private",
            days: "7"
        },
        {
            images: "https://i.pinimg.com/564x/88/17/e2/8817e2c3b3570e5bcba927b0a2fc2e6d.jpg",
            cityName: "Ermoupolis",
            price: "420$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/736x/f7/f7/7d/f7f77d2b0d8fe45394b58070fa5668ae.jpg",
            cityName: "Nafpaktos",
            price: "417$",
            tourType: "Group",
            days: "7"
        },
        {
            images: "https://i.pinimg.com/564x/80/fb/67/80fb67b49d09a5169f40cd31439041a7.jpg",
            cityName: "Ioannina",
            price: "415$",
            tourType: "Group",
            days: "5"
        },
        ]},
    {country: "Brazil",
    cities: [
        {
            images: "https://i.pinimg.com/564x/83/e2/e5/83e2e581908bd0be3a5360b8425ab7ce.jpg",
            cityName: "Sao Paulo",
            price: "666$",
            tourType: "Private",
            days: "16"
        },
        {
            images: "https://i.pinimg.com/736x/8d/d7/ad/8dd7ad712850abfbd2b36f4526af41c9.jpg",
            cityName: "Rio de Janeiro",
            price: "678$",
            tourType: "Group",
            days: "14"
        },
        {
            images: "https://i.pinimg.com/564x/f4/f0/be/f4f0be92cef501053187e747b43bccf4.jpg",
            cityName: "Salvador",
            price: "635$",
            tourType: "Group",
            days: "7"
        },
        {
            images: "https://i.pinimg.com/564x/e3/a1/09/e3a109d4b46ca1b3ba67453b96163157.jpg",
            cityName: "Fortaleza",
            price: "632$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/f7/ae/d4/f7aed44d398bebefa0e78a0234e4a24a.jpg",
            cityName: "Belo Horizonte",
            price: "625$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/96/9e/d7/969ed7196f6eab4bde829d30c0fc4cce.jpg",
            cityName: "Brasilia",
            price: "630$",
            tourType: "Group",
            days: "7"
        },
        {
            images: "https://i.pinimg.com/564x/01/c4/ca/01c4caf29c9e542c6a97626e1ab0fef4.jpg",
            cityName: "Curitiba",
            price: "604$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/564x/c1/82/13/c18213cd81fe04fc93ec7567e5c50e74.jpg",
            cityName: "Manaus",
            price: "606$",
            tourType: "Group",
            days: "4"
        },
        {
            images: "https://i.pinimg.com/564x/cd/81/43/cd8143e4875edd4891bbadb8750c263d.jpg",
            cityName: "Porto Alegre",
            price: "638$",
            tourType: "Group",
            days: "5"
        },
        {
            images: "https://i.pinimg.com/564x/b9/a8/2f/b9a82fc4aeed9418796c64baf3166635.jpg",
            cityName: "Guarulhos",
            price: "619$",
            tourType: "Group",
            days: "7"
        },
        ]},
    {country: "Italy",
    cities: [
        {
            images: "https://i.pinimg.com/564x/37/3d/dc/373ddca9c9fc9f26dba60fb784c17a2d.jpg",
            cityName: "Rome",
            price: "574$",
            tourType: "Private",
            days: "19"
        },
        {
            images: "https://i.pinimg.com/736x/9b/b1/f0/9bb1f071426d2d419ea5a37adf9cbe57.jpg",
            cityName: "Milan",
            price: "549$",
            tourType: "Group",
            days: "16"
        },
        {
            images: "https://i.pinimg.com/564x/07/65/94/076594bcbfe658762d480649c090ab36.jpg",
            cityName: "Naples",
            price: "547$",
            tourType: "Group",
            days: "10"
        },
        {
            images: "https://i.pinimg.com/564x/7b/da/90/7bda901643c706f2d7718345cb1c09f3.jpg",
            cityName: "Turin",
            price: "536$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/736x/ae/5a/c0/ae5ac0516f8c7fc9612f3f8ae4128dc4.jpg",
            cityName: "Palermo",
            price: "535$",
            tourType: "Group",
            days: "9"
        },
        {
            images: "https://i.pinimg.com/564x/50/bc/f6/50bcf6449a56eb2c5b10ba5b0c90a960.jpg",
            cityName: "Genoa",
            price: "503$",
            tourType: "Group",
            days: "7"
        },
        {
            images: "https://i.pinimg.com/564x/95/c5/12/95c512a8723312449e9b7b0c4c9e8ed1.jpg",
            cityName: "Bologna",
            price: "528$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/564x/3a/63/ba/3a63bafa3bfa3c00d8d2af123c917851.jpg",
            cityName: "Florence",
            price: "540$",
            tourType: "Group",
            days: "11"
        },
        {
            images: "https://i.pinimg.com/564x/4e/81/ca/4e81ca1f28c7775762162381572d8491.jpg",
            cityName: "Catania",
            price: "527$",
            tourType: "Group",
            days: "5"
        },
        {
            images: "https://i.pinimg.com/564x/ac/00/ae/ac00aea954c858915aba3c9321f5c743.jpg",
            cityName: "Venice",
            price: "555$",
            tourType: "Private",
            days: "12"
        },
        ]},
    {country: "Spain",
    cities: [
        {
            images: "https://i.pinimg.com/564x/8c/4d/2e/8c4d2e3bab2b57ea8ec410dcb4c4b7d5.jpg",
            cityName: "Madrid",
            price: "578$",
            tourType: "Group",
            days: "18"
        },
        {
            images: "https://i.pinimg.com/736x/77/fc/31/77fc3111ca1d16b5014bead27839c075.jpg",
            cityName: "Barcelona",
            price: "572$",
            tourType: "Private",
            days: "16"
        },
        {
            images: "https://i.pinimg.com/736x/71/33/23/713323c8ac2a5b4bf8d840f27e063d3c.jpg",
            cityName: "Valencia",
            price: "469$",
            tourType: "Group",
            days: "9"
        },
        {
            images: "https://i.pinimg.com/564x/ad/ca/dd/adcadd3541582e9a6eb0dad395214ae5.jpg",
            cityName: "Seville",
            price: "537$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/564x/1c/bd/82/1cbd82360bcabc955d9556da36372b50.jpg",
            cityName: "Mallorca",
            price: "562$",
            tourType: "Private",
            days: "10"
        },
        {
            images: "https://i.pinimg.com/736x/90/65/21/906521c3f85f872db91c239ea9af1960.jpg",
            cityName: "Malaga",
            price: "480$",
            tourType: "Group",
            days: "9"
        },
        {
            images: "https://i.pinimg.com/736x/0b/95/73/0b9573d589f13ee00a7b02bd8a51de82.jpg",
            cityName: "Zaragoza",
            price: "473$",
            tourType: "Group",
            days: "7"
        },
        {
            images: "https://i.pinimg.com/564x/cf/1c/d1/cf1cd1c929b94578216c6f6393d7af4e.jpg",
            cityName: "Bilbao",
            price: "464$",
            tourType: "Group",
            days: "6"
        },
        {
            images: "https://i.pinimg.com/564x/a5/3f/c7/a53fc7a46333157cebb4032d92538462.jpg",
            cityName: "Murcia",
            price: "459$",
            tourType: "Group",
            days: "8"
        },
        {
            images: "https://i.pinimg.com/736x/24/b0/c2/24b0c2ecd70ef0482ad102fcff3a415e.jpg",
            cityName: "S. Sebastian",
            price: "580$",
            tourType: "Private",
            days: "7"
        },
        ]},
]
if(!localStorage.getItem("countries")) {
    localStorage.setItem("countries", JSON.stringify(arr))
}

$(document).ready(function () {
    let countries = localStorage.getItem("countries")?JSON.parse(localStorage.getItem("countries")):[];
    let turkiye = countries.find((obj) => {
        return obj.country == "Turkiye"
    })
    $("#boxes")[0].innerHTML= ""
        turkiye.cities.forEach(city => {
            $("#boxes")[0].innerHTML += `<div class="cities">
            <img src="${city.images}">
            <h3 class="cityName">${city.cityName}</h3>
            <p class="price">${city.price}</p>
            <p class="tourType">${city.tourType}</p>
            <p class="days">Days: ${city.days}</p>
            <a class="btn btn-primary btn-sm" role="button" style="font-size: 40%; background-color: rgb(106, 126, 157); border: rgb(106, 126, 157); margin-top: 3px;" data-toggle="modal" data-target="#myModal">Explore</a>
        </div>
        `});
    $("#myList li").click(function (event) {
        let countries = localStorage.getItem("countries")?JSON.parse(localStorage.getItem("countries")):[];
        $("#myList li").removeClass("selected");
        $(this).addClass("selected");
        let categoryImages = countries.find((obj) => {
            return obj.country == event.target.innerHTML
        })
        $("#boxes")[0].innerHTML= ""
        categoryImages.cities.forEach(city => {
            $("#boxes")[0].innerHTML += `<div class="cities">
            <img src="${city.images}">
            <h3 class="cityName">${city.cityName}</h3>
            <p class="price">${city.price}</p>
            <p class="tourType">${city.tourType}</p>
            <p class="days">Days: ${city.days}</p>
            <a class="btn btn-primary btn-sm" role="button" style="font-size: 40%; background-color: rgb(106, 126, 157); border: rgb(106, 126, 157); margin-top: 3px;" data-toggle="modal" data-target="#myModal">Explore</a>
        </div> `
        });
    });
});
function addCity(countryName, newCity) {
    let countries = JSON.parse(localStorage.getItem("countries")) || [];
    let country = countries.find(c => c.country === countryName);
    if (country) {
        country.cities.push(newCity);
    } else {
        countries.push({ country: countryName, cities: [newCity] });
    }
    localStorage.setItem("countries", JSON.stringify(countries));
}

let table = $('#datatable').DataTable({
    data: JSON.parse(localStorage.getItem("datatableData")) || [],})

    $('#datatable-search-input').on('keyup', function () {
        $('#datatable').DataTable().search(this.value).draw();
    });


$('#images').on('input', function() {
$('.image-preview').css("visibility","visible")
const imageUrl = $(this).val();
$('#image-preview-img').attr('src', imageUrl);
});


let id = localStorage.getItem("lastId") ? parseInt(localStorage.getItem("lastId")) : 1000;
let formBox = document.getElementById("formBox")
let save = document.getElementById("save")
save.addEventListener("click", (e) => {
    alert("New city added succesfully!")
    e.preventDefault()
    let formData = new FormData(formBox)
    let addCity = {}
    for (const [key, value] of formData.entries()) {
        addCity[key] = value
    }
    id++; 
    localStorage.setItem("lastId", id.toString());
    let newId = localStorage.getItem("lastId") ? parseInt(localStorage.getItem("lastId")) : id;
    let newRow = [`${newId}`,`${addCity.cityName}`,`<img src="${addCity.images}" style="width: 100px; height: 60px;" data-toggle="modal" data-target="#myModals"  onclick="zooming(this)">`,`${addCity.price}`,`<a class="btn btn-primary btn-sm" href="#" role="button"
        style="font-size: 80%; background-color: cadetblue; border: cadetblue" onclick="deleteRow(this)">Remove</a>
        <a class="btn btn-primary btn-sm" href="#" role="button"
        style="font-size: 80%; background-color: rgb(106, 126, 157); border: cadetblue" data-toggle="modal" data-target="#exampleModalCenter" onclick="change()">Change</a>`]

        
        table.row.add(newRow).draw();
        let data = table.rows().data().toArray();
        localStorage.setItem("datatableData", JSON.stringify(data));
        let countries = localStorage.getItem("countries") ? JSON.parse(localStorage.getItem("countries")) : [];
        let sameCategory = countries.find((obj) => {
          return obj.country.toLowerCase() == addCity.country.toLowerCase();
        });
      
        if (sameCategory) {
          sameCategory.cities.push(addCity);
        } else {
          countries.push({ country: addCity.country, cities: [addCity] });
        }
      
        localStorage.setItem("countries", JSON.stringify(countries));
        addCity(addCity.country, addCity.cities);
    })
    function zooming(element) {
        console.log(element);
        
        const imageSrc = element.getAttribute('src');
        if (imageSrc) {
            document.querySelector("#myModals #modalImage").src = imageSrc;
            $('#myModals').modal('show');
        } else {
            console.error('Image source not found or is empty.');
        }
    }
    function resetForm() {
    formBox.reset()
    $('.image-preview').css("visibility","hidden")
}
function deleteRow(e) {
    if(confirm("Removing city...")) {
        if (table.data().count() > 0) {
            let lastRow = table.data().toArray()[table.data().count()];
            let lastRowIndex = table.row(lastRow).index();
            table.row(lastRowIndex).remove().draw();
            localStorage.removeItem("datatableData");
          }
    }
}

function send() {
    let comment = document.getElementById("comment").value.trim();
    
    let today = new Date();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[monthIndex];
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    let fullDate = `${day} ${month}, ${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const uniqueId = 'message-' + new Date().getTime();
    let currentUsernamee = localStorage.getItem("currentUsername");
    let message = `<div id="userComments">
        <div id="${uniqueId}">
            <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="User Icon">
            <div>
                <h2 class="user" id="namee">${currentUsernamee}</h2>
                <p>${fullDate}</p>
                <p>${comment}</p>
                <a class="btn btn-primary btn-sm delete" href="#" role="button" style="font-size: 30%; background-color: cadetblue; border: cadetblue; margin-top:10px; padding:2px" onclick="deleteComment('${uniqueId}'); return false;">Delete</a>
            </div>
        </div></div><br>`;
        let usercomments = document.getElementById("usercomments");
        document.getElementById("usercomments").style.visibility = "visible";
        let existingMessages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];
        existingMessages.push({ id: uniqueId, content: message });
        localStorage.setItem('messages', JSON.stringify(existingMessages));
        document.getElementById("comment").value = '';
        loadMessages();
}

function loadMessages() {
  let usercomments = document.getElementById("usercomments");
  usercomments.innerHTML = '';
  let existingMessages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];
  existingMessages.forEach(messageObj => {
      usercomments.innerHTML += messageObj.content;
  });
}
window.onload = loadMessages;
function deleteComment(id) {
  let existingMessages = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];
  existingMessages = existingMessages.filter(messageObj => messageObj.id !== id);
  localStorage.setItem('messages', JSON.stringify(existingMessages));
  loadMessages();
}