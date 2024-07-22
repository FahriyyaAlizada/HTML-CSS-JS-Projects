localStorage.clear()
let arr = [
    {category: "RED",
    images: [
        "https://i.pinimg.com/736x/50/b7/1f/50b71f913877f034b878780c221d5572.jpg",
        "https://i.pinimg.com/474x/80/8b/30/808b3061b1ca660f9185521fcf5f10af.jpg",
        "https://i.pinimg.com/474x/36/e1/50/36e150c5a4a196ec6dd10805c78a3841.jpg",
        "https://i.pinimg.com/474x/9c/d0/07/9cd00738fe39bf68e870c26497d42dd5.jpg"]},
    {category: "BLACK",
    images: [
        "https://i.pinimg.com/474x/c8/c5/e8/c8c5e8fc4f25f2131036506b76a1b752.jpg",
        "https://i.pinimg.com/474x/c6/67/4c/c6674cdfa12daa5ad7abecdbbbde63a5.jpg",
        "https://i.pinimg.com/474x/07/91/16/0791165cda4dde4f7b70e39b1358d5c4.jpg",
        "https://i.pinimg.com/474x/c1/2d/09/c12d09a56e33d82464fcb76935723927.jpg"]},
    {category: "BLUE",
    images: [
        "https://i.pinimg.com/474x/36/89/4c/36894c37237f50e88f14365d64513966.jpg",
        "https://i.pinimg.com/236x/66/58/d2/6658d20d8d9920b2e8b259f42e5d36c6.jpg",
        "https://i.pinimg.com/236x/4b/e4/69/4be4696fa1b09d00aabdf796d1c742fb.jpg",
        "https://i.pinimg.com/236x/58/b8/e7/58b8e79ad92d066e2180f5f002965ebe.jpg"]},
    {category: "PINK",
    images: [
        "https://i.pinimg.com/236x/f5/e3/de/f5e3ded836f9c37f7578d2a7cca1a852.jpg",
        "https://i.pinimg.com/236x/eb/f5/3a/ebf53a977d07a7deece74d42edbbcb01.jpg",
        "https://i.pinimg.com/474x/77/cc/9e/77cc9e72764c8bac09206e7e064b3939.jpg",
        "https://i.pinimg.com/236x/b3/af/a4/b3afa4647b3920aa7753575efc905f16.jpg"]},
    {category: "GREEN",
    images: [
        "https://i.pinimg.com/236x/ed/64/af/ed64afa68be8b5ac3b96aaccf01c2b13.jpg",
        "https://i.pinimg.com/236x/e3/98/3b/e3983b0ad0a71b06709db35ca4873e45.jpg",
        "https://i.pinimg.com/236x/64/94/de/6494de9ab8b2b942c9bb491efe3ea06d.jpg",
        "https://i.pinimg.com/236x/28/e2/e0/28e2e03bcca0835960459260cc6e41bb.jpg"]},
    {category: "YELLOW",
    images: [
        "https://i.pinimg.com/236x/2c/52/00/2c5200322d4508d81ab960f48b1bc96d.jpg",
        "https://i.pinimg.com/236x/f1/7d/d6/f17dd6561e16f6f0c57030a2cbf38b7e.jpg",
        "https://i.pinimg.com/236x/12/a9/03/12a90359d3e71cffcc5ed6cfb80a646f.jpg",
        "https://i.pinimg.com/236x/ab/37/65/ab3765daa7d89f62d8b6a7d970868293.jpg"]},
    {category: "ORANGE",
    images: [
        "https://i.pinimg.com/236x/d4/f9/f3/d4f9f30e93e51abaa687d69d31ddec94.jpg",
        "https://i.pinimg.com/236x/5c/f2/0b/5cf20ba1bc1aa2d8991b19245927a0af.jpg",
        "https://i.pinimg.com/474x/14/e8/0a/14e80abd36368f4600704001f998b905.jpg",
        "https://i.pinimg.com/236x/9c/f4/5c/9cf45c8f4fd16e726055121b03a13ab9.jpg"]},
    {category: "WHITE",
    images: [
        "https://i.pinimg.com/236x/8e/aa/67/8eaa67fbd46d478ad5900cb6aec7efff.jpg",
        "https://i.pinimg.com/236x/29/48/59/29485940f36d97898f3ada08d304e0ac.jpg",
        "https://i.pinimg.com/236x/c6/b1/db/c6b1db19299f1c75e08f34f7f18146e7.jpg",
        "https://i.pinimg.com/236x/c3/3d/ae/c33daedc60cb5c218a97a10c69259f8d.jpg"]},
]
localStorage.setItem("categories", JSON.stringify(arr))

$(document).ready(function () {
    let categories = localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")):[];
    let red = categories.find((obj) => {
        return obj.category == "RED"
    })
    $("#images")[0].innerHTML= ""
        red.images.forEach(src => {
            $("#images")[0].innerHTML += `<img src="${src}" alt="">`
        });
    $("p").click(function (event) {
        let categories = localStorage.getItem("categories")?JSON.parse(localStorage.getItem("categories")):[];
        let categoryImages = categories.find((obj) => {
            return obj.category == event.target.innerHTML
        })
        $("#images")[0].innerHTML= ""
        categoryImages.images.forEach(src => {
            $("#images")[0].innerHTML += `<img src="${src}" alt="">`
        });
    });
});