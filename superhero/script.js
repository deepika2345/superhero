// https://superheroapi.com/api/access-token
// a2d0423e72e1199dcec781a6a50fb974-access token
let newHero = document.getElementById('newHero');
let heroImg=document.getElementById('heroImg');
let heroName=document.getElementById('heroName')
const base_url = `https://superheroapi.com/api.php/a2d0423e72e1199dcec781a6a50fb974`

let getstatsHtml=(character)=>{
    let statemoji={
        intelligence:'🧠',
        strength:'💪',
        speed:'⚡',
        durability:'🏋️',
        power:'📊',
        combat:'⚔️'
    }
    let res=""
    // for(stat in character.powerstats){
    //     res+=`<p> ${stat} : ${character.powerstats[stat]} </p>`
    // }
    // return res
    Object.keys(character.powerstats).map(stat=>{
        res+=`<p> ${statemoji[stat]}  ${stat.toUpperCase()} : ${character.powerstats[stat]} </p>`    
    })
    return res;
}
const getSuperHero = (id) => {
    fetch(`${base_url}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            heroName.innerText=`${json.name}`
        // let powerstats=json.powerstats
            let powerstats=getstatsHtml(json)
            heroImg.innerHTML = `<img src="${json.image.url}" height=300 width=300/><br><p>PoweStats ${powerstats}</p>`
        })

}
const randomHero=()=>{
    let num = Math.floor(Math.random() * 731) + 1
    console.log(num)
    return num
}
// newHero.onclick = () => {
//     // let numbers=[1,2,3,4,5]
//     // numbers.forEach(num=>{
//     //     console.log(num);
//     //     getSuperHero(num)
//     //     console.log(num);

//     // })
//     console.log("hi")
//     getSuperHero(randomHero())
//     console.log("hi")

// }
function newHero1(){
    getSuperHero(randomHero())    
}
// let img=
// "https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg"
let getSearchSuperHero=(name)=>{
    fetch(`${base_url}/search/${name}`)
    .then(response=>response.json())
    .then(json=>{
        heroName.innerText=`${json.results[0].name}`
        // let powerstats=json.results[0].powerstats
        let powerstats=getstatsHtml(json.results[0])
        const hero=json.results[0]
        console.log(hero)

        heroImg.innerHTML = `<img src="${hero.image.url}" height=300 width=300/><br><p>PoweStats ${powerstats}</p>`

    })
}
let search=document.getElementById('search');
let searchInput=document.getElementById('searchInput');
search.onclick=()=>{
    getSearchSuperHero(searchInput.value)
}