const Convertbutton = document.querySelector(".convertbutton")
const Selectoption = document.querySelector(".currency-select")
const Selectoption2 = document.querySelector(".currency-select2")

function Changecurrency2() {
    const CurrencyName1 = document.getElementById("currency-name1")
    const CurrencyImage1 = document.getElementById("currency-img1")

    if(Selectoption2.value == "real1") {
        CurrencyName1.innerHTML = "Real"
        CurrencyImage1.src = "./assets/Real.png"
    }

    if(Selectoption2.value == "dolar1") {
        CurrencyName1.innerHTML = "Dólar"
        CurrencyImage1.src = "./assets/Dolar.png" 
    }

    if(Selectoption2.value == "euro1") {
        CurrencyName1.innerHTML = "Euro"
        CurrencyImage1.src = "./assets/Euro.png"
    }

    if(Selectoption2.value == "libra1") {
        CurrencyName1.innerHTML = "Libra"
        CurrencyImage1.src = "./assets/Libra.png" 
    }

    if(Selectoption2.value == "iene1") {
        CurrencyName1.innerHTML = "Iene"
        CurrencyImage1.src = "./assets/Iene.png"    
    }

    if(Selectoption2.value == "bitcoin1") {
        CurrencyName1.innerHTML = "Bitcoin"
        CurrencyImage1.src = "./assets/Bitcoin.png"     
    }
}

function Changecurrency() {
    const CurrencyName = document.getElementById("currency-name")
    const CurrencyImage = document.getElementById("currency-img")

    if(Selectoption.value == "real") {
        CurrencyName.innerHTML = "Real"
        CurrencyImage.src = "./assets/Real.png"
    }

    if(Selectoption.value == "dolar") {
        CurrencyName.innerHTML = "Dólar"
        CurrencyImage.src = "./assets/Dolar.png"

    }

    if(Selectoption.value == "euro") {
        CurrencyName.innerHTML = "Euro"
        CurrencyImage.src = "./assets/Euro.png"
    }

    if(Selectoption.value == "libra") {
        CurrencyName.innerHTML = "Libra"
        CurrencyImage.src = "./assets/Libra.png"
    }

    if(Selectoption.value == "iene") {
        CurrencyName.innerHTML = "Iene"
        CurrencyImage.src = "./assets/Iene.png"
    }

    if(Selectoption.value == "bitcoin") {
        CurrencyName.innerHTML = "Bitcoin"
        CurrencyImage.src = "./assets/Bitcoin.png"
    }
}

function convertValues1() {
    const inputValue = document.querySelector(".input-currency").value
    const Valorconverter = document.querySelector(".currency-value1")
    const Valorconvertido = document.querySelector(".currency-value")

    const realToday =  1
    const dolarToday = 5.7
    const euroToday = 6.2
    const libraToday = 7.40
    const ieneToday = 0.037
    const bitcoinToday = 389427.91


    if(Selectoption2.value == "dolar1" && Selectoption.value == "real") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dolarToday*inputValue)    
    }

    if(Selectoption2.value == "euro1" && Selectoption.value == "real") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(euroToday*inputValue) 
    }

    if(Selectoption2.value == "libra1" && Selectoption.value == "real") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(libraToday*inputValue) 
    }

    if(Selectoption2.value == "iene1" && Selectoption.value == "real") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(ieneToday*inputValue) 
    }

    if(Selectoption2.value == "bitcoin1" && Selectoption.value == "real") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(bitcoinToday*inputValue) 
    }

    if(Selectoption2.value == "real1" && Selectoption.value == "dolar") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)    
    }

    if(Selectoption2.value == "real1" && Selectoption.value == "euro") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday) 
    }

    if(Selectoption2.value == "real1" && Selectoption.value == "libra") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday) 
    }

    if(Selectoption2.value == "real1" && Selectoption.value == "iene") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValue / ieneToday) 
    }

    if(Selectoption2.value == "real1" && Selectoption.value == "bitcoin") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcoinToday) 
    }

    if(Selectoption2.value == "real1" && Selectoption.value == "real") {
        Valorconvertido.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue) 
    }

    Valorconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}

Selectoption2.addEventListener("change", Changecurrency2)
Selectoption.addEventListener("change", Changecurrency)
Convertbutton.addEventListener("click", convertValues1)
