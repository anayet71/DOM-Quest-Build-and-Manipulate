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
        if(getFeniAmount > 0){
            getFeniAmount =  parseFloat(getFeniAmount)
            feniTk = parseFloat(feniTk)
            companyBalance = parseFloat(companyBalance)
            feniLeftBalance = feniTk - getFeniAmount
            compnayNewBalance = getFeniAmount +  companyBalance
            document.getElementById("feniBalance").innerText = feniLeftBalance
            document.getElementById('default-balance').innerText = compnayNewBalance

        }else {
            alert("Invalid donation amount");
        }
    })

