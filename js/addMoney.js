document.getElementById('DonateNowBtn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        getAmount = document.getElementById('donateAmount').value
        noakhaliTK = document.getElementById('noakhaliBalance').innerText
        companyBalance = document.getElementById('default-balance').innerText

        if (getAmount > 0) {
            getAmount = parseFloat(getAmount)
            noakhaliTK = parseFloat(noakhaliTK)
            companyBalance = parseFloat(companyBalance)
            noakhaliLeftBalance = noakhaliTK - getAmount;
            compnayNewBalance = getAmount + companyBalance;
            document.getElementById('noakhaliBalance').innerText = noakhaliLeftBalance;
            document.getElementById('default-balance').innerText = compnayNewBalance;

            // add to transaction history
            let div = document.createElement('div')
            div.innerText = `Added: ${getAmount} Tk. for flood affected people at Noakhali, Banladesh`;       
            console.log(div)
            div.classList.add('p-6', 'mb-6', 'border-2', 'border-gray-100', 'rounded-md')
            document.getElementById('history').appendChild(div)

            
            
        } else {
            alert("Invalid donation amount");
        }

    })

document.getElementById('feniDonateNowBtn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        feniTk = document.getElementById("feniBalance").innerText
        getFeniAmount = document.getElementById('feniDonateAmount').value
        companyBalance = document.getElementById('default-balance').innerText
        if (getFeniAmount > 0) {
            getFeniAmount = parseFloat(getFeniAmount)
            feniTk = parseFloat(feniTk)
            companyBalance = parseFloat(companyBalance)
            feniLeftBalance = feniTk - getFeniAmount
            compnayNewBalance = getFeniAmount + companyBalance
            document.getElementById("feniBalance").innerText = feniLeftBalance
            document.getElementById('default-balance').innerText = compnayNewBalance

            const p = document.createElement('p')
            p.innerText = `Added: ${getFeniAmount} Tk. for flood affected people at Feni, Banladesh`;       
            console.log(p)
            p.classList.add('p-6', 'mb-6', 'border-2', 'border-gray-100', 'rounded-md')
            document.getElementById('history').appendChild(p)

        } else {
            alert("Invalid donation amount");
        }
    })

document.getElementById('quotaDonateNowBtn').addEventListener('click', function (event)
{event.preventDefault() 
        quotaTK = document.getElementById('quotaBalance').innerText
        getQuotaAmount = document.getElementById('quotaDonateAmount').value
        companyBalance = document.getElementById('default-balance').innerText
        if(getQuotaAmount > 0){
            getQuotaAmount =  parseFloat(getQuotaAmount)
            quotaTK = parseFloat(quotaTK)
            companyBalance = parseFloat(companyBalance)
            quotaLeftBalance = quotaTK - getQuotaAmount
            compnayNewBalance = getQuotaAmount + companyBalance
            document.getElementById('quotaBalance').innerText = quotaLeftBalance
            document.getElementById('default-balance').innerText = compnayNewBalance

            const p = document.createElement('p')
            p.innerText = `Added: ${getQuotaAmount} Tk. for Quota movement injured people at Dhaka, Banladesh`;       
            console.log(p)
            document.getElementById('history').appendChild(p)
            p.classList.add('p-6', 'mb-6', 'border-2', 'border-gray-100', 'rounded-md')

        } else {
            alert("Invalid donation amount");
        }
    })

document.getElementById('rohingaDonateBtn').addEventListener('click', function(){
    rohingaTk = document.getElementById('rohinaBalance').innerText
    getRhoingaAmount = document.getElementById('rohingaDonateAmount').value
    companyBalance = document.getElementById('default-balance').innerText
    if(getRhoingaAmount >0 ){
        getRhoingaAmount = parseFloat(getRhoingaAmount)
        rohingaTk = parseFloat(rohingaTk)
        companyBalance = parseFloat(companyBalance)
        rohingaLeftBalance = rohingaTk - getRhoingaAmount
        compnayNewBalance = getRhoingaAmount + companyBalance
        document.getElementById('rohinaBalance').innerText = rohingaLeftBalance
        document.getElementById('default-balance').innerText = compnayNewBalance

        const p = document.createElement('p')
            p.innerText = `Added: ${getRhoingaAmount} Tk. for Rohingya refugee people at Cox's Bazar, Banladesh`;       
            console.log(p)
            document.getElementById('history').appendChild(p)
            p.classList.add('p-6', 'mb-6', 'border-2', 'border-gray-100', 'rounded-md')
    }else {
        alert("Invalid donation amount");
    }
})