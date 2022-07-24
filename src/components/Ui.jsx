import React, {useState} from 'react'
import img1 from "../img/img1.png"

function Ui() {
    const[letter,setLetter] = useState(false)
    const[simbol,setSimbol] = useState(false)
    function checbox_change1 (e) {
        if(e.target.checked) {
            setLetter(true)
        } else {
            setLetter(false)
        }
    }
    function checbox_change3 (e) {
        if(e.target.checked) {
            setSimbol(true)
        } else {
            setSimbol(false)
        }
    }
  

function Generate (x) {
          let password = document.querySelector('.result');
          if (x ==='') {
            console.log('44')
            document.querySelector('.input').value = 6
          }

    function generateLetter () {
        if (letter === true) {
            let array_letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O','P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
            let random_letter = Math.abs(Math.floor(Math.random() * 25)+1)
            return array_letter[random_letter]
        } 
    }
    function generateSimbol () {
         if (simbol === true) {
            let simbol_array = ['!','@','#','$','%','^','&','*','(',')','_','+','|','}','{','"',':',';','/','.',',',"'"]
            let random_simbol = Math.abs(Math.floor(Math.random() * 21)+1)
            return simbol_array[random_simbol]
        } 
    }
    function generateNumber () {
            let random_number = Math.abs(Math.floor(Math.random() * 9)+1)
            return random_number
    }
    let calledFunction
    function genNumOrSimbolOrLetter () {
        let r_number = Math.abs(Math.floor(Math.random() * 3)+1)
            switch(r_number) {
            case 1: calledFunction = generateNumber(); break;


            case 2:  
            if (letter === false) {
                calledFunction = generateNumber() 
            } else {
                calledFunction = generateLetter()
            } break;
            case 3: 
            

            if (simbol === false) {
                calledFunction = generateNumber()
            } 
            else {
                calledFunction = generateSimbol()
            } break;

            default: calledFunction = 'not work';
        }
            return calledFunction
    }
        if (x > 1000) {
            alert('Значение в поле ввода должно быть не больше 1000 \r\n The value in the input field must not exceed 1000')
        }
        if (x > 0 && x !== 0 && x !== '' && x < 1001) {
            let value = []
            while (x !== 0) {
                value.push(genNumOrSimbolOrLetter())
                x--;
            }
            password.textContent = value.join('')
        }

    }

    function Copied_function () {
        let copyText = document.querySelector('.result').textContent;
        navigator.clipboard.writeText(copyText)
         .then(text => {
             // `text` содержит текст, прочитанный из буфера обмена
         })
         .catch(err => {
             // возможно, пользователь не дал разрешение на чтение данных из буфера обмена
         console.log('Eroooooooooor', err);
  });
    }

  
  return (
    <div className='main_Ui_wrapper'>
        <div className='wrapper_items'>
            <div className='input_wrapper'>
                <input className='input' type="number" placeholder="Введите количество символов для генерации пароля " autoFocus/>
            </div>
            <div className='radio_wrapper'>
                <div><input onChange={checbox_change1} className='check' type="checkbox" />буквы </div>
                <div><input onChange={checbox_change3} className='check' type="checkbox" />символы</div>
            </div>
            <div className='buton_wrapper'>
                <button className="button" onClick={() => {
                    let x = document.querySelector('.input').value
                    Generate(x)
                }} >Generate</button>
            </div>
            <div className='result_wrapper'>
                <div className='result'>Здесь будет сгенерированный пароль</div>
                <div onClick={() => Copied_function()} className='copy_icons'>
                    <img className='img'  src={img1} alt="" />
                </div>
            </div>
        </div>
        {/* <div className='notif_1'>
                <div className='notif_1_text'>Copied !</div>
        </div> */}
        <input type="text" className='input_for_copy' />
    </div>
  )
}

export default Ui