localStorage.clear()
let arr = [
    {category: "ASIA",
    countries: [
        {
            images: "https://i.pinimg.com/564x/c3/e5/6a/c3e56a4e1152593dc56d08c8f0b9c15d.jpg",
            countryName: "Türkiye",
            countryCapital: "Ankara",
            countryArea: "759,805 km2",
            date: "12 Jan 2024, 16:21:44"
        },
        {
            images: "https://i.pinimg.com/736x/80/35/81/803581ec71e88b4e5b18c3d44abf0bb3.jpg",
            countryName: "Russia",
            countryCapital: "Moscow",
            countryArea: "13,083,100 km2",
            date: "25 Aug 2024, 11:49:02"
        },
        {
            images: "https://i.pinimg.com/564x/42/4d/84/424d84a5c153fbc799ec2c3ca791a274.jpg",
            countryName: "Philippines",
            countryCapital: "Manila",
            countryArea: "300,000 km2",
            date: "22 Nov 2024, 6:33:55"
        },
        {
            images: "https://i.pinimg.com/564x/2b/94/57/2b9457fc9091a62f88738a4536cb7d05.jpg",
            countryName: "Vietnam",
            countryCapital: "Hanoi",
            countryArea: "331,212 km2",
            date: "17 Apr 2024, 2:41:38"
        }
        ]},
    {category: "AFRICA",
    countries: [
        {
            images: "https://i.pinimg.com/564x/98/1e/fa/981efaff7bea9b0f1074a32c4fb2a8d3.jpg",
            countryName: "Algeria",
            countryCapital: "Algiers",
            countryArea: "2,381,741 km2",
            date: "19 Oct 2024, 10:11:24"
        },
        {
            images: "https://i.pinimg.com/564x/81/4e/06/814e06cec4070ed3027f94572ab0321b.jpg",
            countryName: "Mali",
            countryCapital: "Bamako",
            countryArea: "1,240,192 km2",
            date: "20 June 2024, 19:46:27"
        },
        {
            images: "https://i.pinimg.com/564x/55/64/ec/5564ecca8c97bb6aa2878fd9814ed779.jpg",
            countryName: "Madagascar",
            countryCapital: "Antananarivo",
            countryArea: "587,041 km2",
            date: "16 Mar 2024, 16:03:19"
        },
        {
            images: "https://i.pinimg.com/564x/c9/5f/46/c95f4650bd821773c14288c61a2322d4.jpg",
            countryName: "Morocco",
            countryCapital: "Rabat",
            countryArea: "446,550 km2",
            date: "17 Dec 2024, 12:42:30"
        }
        ]},
    {category: "N. AMERICA",
    countries: [
        {
            images: "https://i.pinimg.com/564x/d7/fd/b9/d7fdb96e91390d0b381e4309ba4f0cc0.jpg",
            countryName: "Canada",
            countryCapital: "Ottawa",
            countryArea: "9,984,670 km2",
            date: "1 Jan 2024, 1:31:59"
        },
        {
            images: "https://i.pinimg.com/736x/8d/65/ee/8d65ee0c163160db7775651ea8a5981b.jpg",
            countryName: "United States",
            countryCapital: "Washington",
            countryArea: "9,518,644 km2",
            date: "28 Sep 2024, 17:48:37"
        },
        {
            images: "https://i.pinimg.com/564x/83/1c/67/831c676fceeb23e10732c3e2608851db.jpg",
            countryName: "Mexico",
            countryCapital: "Mexico City",
            countryArea: "1,964,375 km2",
            date: "15 Jul 2024, 3:28:54"
        },
        {
            images: "https://i.pinimg.com/564x/b5/e4/d6/b5e4d68846d4b5d14530394c780968a1.jpg",
            countryName: "Costa Rica",
            countryCapital: "San José",
            countryArea: "51,100 km2",
            date: "13 Apr 2024, 12:17:20"
        }
        ]},
    {category: "S. AMERICA",
    countries: [
        {
            images: "https://i.pinimg.com/564x/01/0e/17/010e173d6c87084bded0ec9d9bdbbca0.jpg",
            countryName: "Brazil",
            countryCapital: "Brasília",
            countryArea: "8,510,346 km2",
            date: "16 Feb 2024, 18:23:40"
        },
        {
            images: "https://i.pinimg.com/564x/3c/25/e6/3c25e63de9e17551088db1ba96682076.jpg",
            countryName: "Argentina",
            countryCapital: "Buenos Aires",
            countryArea: "2,796,427 km2",
            date: "18 Aug 2024, 14:42:07"
        },
        {
            images: "https://i.pinimg.com/564x/ae/a9/f7/aea9f71a19c31d183d8fb322c779d1a2.jpg",
            countryName: "Peru",
            countryCapital: "Lima",
            countryArea: "1,285,216 km2",
            date: "27 Dec 2024, 8:32:57"
        },
        {
            images: "https://i.pinimg.com/564x/f2/48/72/f24872932371989720cd585f3353c20e.jpg",
            countryName: "Bolivia",
            countryCapital: "Sucre",
            countryArea: "1,098,581 km2",
            date: "14 Mar 2024, 15:43:03"
        }
        ]},
    {category: "EUROPE",
    countries: [
        {
            images: "https://i.pinimg.com/736x/9f/e2/ea/9fe2ea0ff1dba69b410373a04d7d9304.jpg",
            countryName: "France",
            countryCapital: "Paris",
            countryArea: "543,941 km2",
            date: "16 June 2024, 12:01:48"
        },
        {
            images: "https://i.pinimg.com/564x/74/02/42/740242e4d491df749f976a553bd7d80f.jpg",
            countryName: "Spain",
            countryCapital: "Madrid",
            countryArea: "498,485 km2",
            date: "20 Oct 2024, 18:43:42"
        },
        {
            images: "https://i.pinimg.com/564x/23/10/41/231041e17d20f1a35ecb4479141bf67e.jpg",
            countryName: "Italy",
            countryCapital: "Rome",
            countryArea: "301,958 km2",
            date: "17 Nov 2024, 16:23:56"
        },
        {
            images: "https://i.pinimg.com/564x/26/49/02/26490286ff80f1866f0fe9165a8000af.jpg",
            countryName: "Germany",
            countryCapital: "Berlin",
            countryArea: "357,581 km2",
            date: "28 Mar 2024, 9:42:35"
        }
        ]},
    {category: "AUSTRALIA",
    countries: [
        {
            images: "https://i.pinimg.com/564x/eb/47/94/eb4794251c5c438f2c02412339519cc4.jpg",
            countryName: "Fiji",
            countryCapital: "Suva",
            countryArea: "18,275 km2",
            date: "2 Aug 2024, 12:07:37"
        },
        {
            images: "https://i.pinimg.com/564x/83/29/d2/8329d2f33bc824c53f52c0686a0e692e.jpg",
            countryName: "New Zealand",
            countryCapital: "Wellington",
            countryArea: "268,021 km2",
            date: "24 Apr 2024, 18:19:28"
        },
        {
            images: "https://i.pinimg.com/564x/e1/b9/fb/e1b9fb7f20a8edf5355d741b44918c06.jpg",
            countryName: "Samoa",
            countryCapital: "Apia",
            countryArea: "2,841 km2",
            date: "4 Oct 2024, 15:32:35"
        },
        {
            images: "https://i.pinimg.com/564x/3e/e2/82/3ee282973ab508fdcbb65402d70c5d2e.jpg",
            countryName: "Vanuatu",
            countryCapital: "Port Vila",
            countryArea: "12,199 km2",
            date: "13 Feb 2024, 11:48:08"
        }
        ]},
]
localStorage.setItem("categories", JSON.stringify(arr))

$(document).ready(function () {
    let categories = localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")):[];
    let asia = categories.find((obj) => {
        return obj.category == "ASIA"
    })
    $("#image")[0].innerHTML= ""
        asia.countries.forEach(country => {
            $("#image")[0].innerHTML += `<div class="countries">
            <img src="${country.images}">
            <h3 class="countryName">${country.countryName}</h3>
            <p class="countryCapital">${country.countryCapital}</p>
            <p class="countryArea">${country.countryArea}</p>
            <p class="date">${country.date}</p>
        </div>
        `});
    $("#box p").click(function (event) {
        let categories = localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")):[];
        let categoryImages = categories.find((obj) => {
            return obj.category == event.target.innerHTML
        })
        $("#image")[0].innerHTML= ""
        categoryImages.countries.forEach(country => {
            $("#image")[0].innerHTML += `<div class="countries">
            <img src="${country.images}">
            <h3 class="countryName">${country.countryName}</h3>
            <p class="countryCapital">${country.countryCapital}</p>
            <p class="countryArea">${country.countryArea}</p>
            <p class="date">${country.date}</p>
        </div> `
        });
    });
});

let save = document.getElementById("save")
save.addEventListener("click", (e) => {
    e.preventDefault()
    let formBox = document.getElementById("formBox")
    let formData = new FormData(formBox)
    let addCountry = {}
    for (const [key, value] of formData.entries()) {
        addCountry[key] = value
    }

    let today = new Date();
    const day = today.getDate();
    const monthIndex = today.getMonth();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = months[monthIndex];
    const year = today.getFullYear();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    let fullDate = `${day} ${month} ${year}, ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    addCountry.date = fullDate
    console.log(addCountry);
    

    let localCategories = localStorage.getItem("categories") ? JSON.parse(localStorage.getItem("categories")) : [];
    let sameCategory = localCategories.find((obj) => {
        return obj.category.toLowerCase() == addCountry.category.toLowerCase()
    });
    if (sameCategory) {
        delete addCountry.category
        sameCategory.countries.push(addCountry);
    } else {
        localCategories.push({ category: addCountry.category, countries: [...others,addCountry] });
    }
    localStorage.setItem("categories", JSON.stringify(localCategories))
    formBox.reset();
    $("#image")[0].innerHTML += `<div class="countries">
        <img src="${addCountry.images}">
        <h3 class="countryName">${addCountry.countryName}</h3>
        <p class="countryCapital">${addCountry.countryCapital}</p>
        <p class="countryArea">${addCountry.countryArea}</p>
        <p class="date">${addCountry.date}</p>
        </div> `;
})