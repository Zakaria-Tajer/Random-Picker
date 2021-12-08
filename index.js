const lucky = document.querySelector('.lucky')
const btn = document.querySelector('.numberOfNames')
const container = document.querySelector('.container')
const h2_containers = document.querySelector('.h2-containers')
const gene = document.querySelector('.gene')
const copyButton = document.getElementById('copyButton')
const copied = document.getElementById('copied')
const noti = document.querySelector('.noti')





const List = [
    'Hamza Gassai',
    'Mehdi LAGDIMI',
    'Ibrahim Benjarmoun',
    'Omar Baabouj',
    'Mohamed Ibnahmad',
    'HSSINI	Lhoussaine',
    'Fatma Karkach',
    'Abderrahmane Dachoucha',
    'Rachid	NAIM',
    'Elmahdi Gliouine',
    'Zineb Aboumejd',
    'MOHAMED BALIZI',
    'reda bensaltana',
    'Mohammed amine	Elazzab',
    'Yassine Touti',
    'Abdelghafour ETTAQUI',
    'Fahd Roussafi',
    'Wafae Belgazzar',
    'Zakaria Tajer',
    'Sifaw Boumezough',
    'Nadia Elhadri',
    'SOUMAYA AMGHAR',
    'MOHAMMED OUASMINE',
    'imane moultamiss'
]

btn.addEventListener('click', typing)

// const button = document.createElement('button')
// button.addEventListener('click', copy)

copyButton.addEventListener('click', Notified)


/////show the random names generated in a h2 tags with a button that can copy names automaticly
function typing(random){
    const input_field = document.getElementById('input_name').value
    ///Creating Cards
    for (let i = 0; i < input_field; i++) {
        reset()
        console.log(input_field);
        if(input_field<25){
            const flip_card = document.createElement('div')
            const flip_card_inner = document.createElement('div')
            const flip_card_front = document.createElement('div')
            const flip_card_back = document.createElement('div')
            const Hover = document.createElement('h2')
            const Person = document.createElement('h1')
            const sorry = document.createElement('h2')
            const sorryForMe = document.createElement('h2')

            //container of all divs and h1/h2 elements
            container.appendChild(flip_card)
            flip_card.appendChild(flip_card_inner)
            flip_card_inner.appendChild(flip_card_front)
            flip_card_front.appendChild(Hover)
            flip_card_inner.appendChild(flip_card_back)
            flip_card_back.appendChild(Person)
            flip_card_back.appendChild(sorry)
            flip_card_back.appendChild(sorryForMe)

            ///Creating Class for styling
            container.classList.add('container')
            flip_card.classList.add('flip-card')
            flip_card_inner.classList.add('flip-card-inner')
            flip_card_front.classList.add('flip-card-front')
            Hover.classList.add('Hover')
            flip_card_back.classList.add('flip-card-back')
            Person.classList.add('Person')
            sorry.classList.add('srry')
            sorryForMe.classList.add('sorryForMe')
            
            sorry.textContent = "Im Not Even Sorry"
            
            random = List[Math.floor(Math.random()*List.length)]
            Person.textContent = random

            
            const names = document.createElement('h2')
            h2_containers.appendChild(names)
            names.textContent = random
            names.classList.add('h2-Elements')

            copyButton.style.display = "block"
            
        }else {
            alert("Enter a number a less or equal to 24")
            break
        }
    
        function reset(){
            document.getElementById('input_name').value = ""
        }
       
    }
     
}

function Notified(){
    copied.style.display = "block"
    copied.style.transform = "rotate(0deg)"
    easeInOut(20000)
    
}
function easeInOut(t){
    return t > 0.5 ? 4*Math.pow((t-1),3)+1 : 4*Math.pow(t,3);
  }