// Card 1
document.getElementById('DonateNowBtn')
    .addEventListener('click', function () {

        getAmount = document.getElementById('donateAmount').value
        noakhaliTK = document.getElementById('noakhaliBalance').innerText
        companyBalance = document.getElementById('default-balance').innerText
        getAmount = parseFloat(getAmount)
        noakhaliTK = parseFloat(noakhaliTK)
        companyBalance = parseFloat(companyBalance)

        if (getAmount > 0 && getAmount <= noakhaliTK) {
            noakhaliLeftBalance = noakhaliTK - getAmount;
            compnayNewBalance = getAmount + companyBalance;
            document.getElementById('noakhaliBalance').innerText = noakhaliLeftBalance;
            document.getElementById('default-balance').innerText = compnayNewBalance;

            // add to transaction history


            let div = document.createElement('div');

            // Get the current date and time
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // Months are zero-based
            const day = currentDate.getDate();
            const hours = currentDate.getHours();
            const minutes = currentDate.getMinutes();
            
            // Format the date and time
            const dateTimeString = ` 
            Date: (${day}-${month}-${year} )  Time: (${hours}:${minutes})`;
            
            // Add content with date and time
            div.innerText = `Added: ${getAmount} Tk. for flood-affected people at Noakhali, Bangladesh${dateTimeString}`;
            
            console.log(div);
            
            // Add CSS classes to the div
            div.classList.add('p-6', 'mb-6', 'border-2', 'border-gray-100', 'rounded-md');
            
            // Append the div to the history container
            document.getElementById('history').appendChild(div);
            


        } else {
            alert("Invalid donation amount");
        }

    })
// Card 2
document.getElementById('feniDonateNowBtn')
    .addEventListener('click', function () {

        feniTk = document.getElementById("feniBalance").innerText
        getFeniAmount = document.getElementById('feniDonateAmount').value
        companyBalance = document.getElementById('default-balance').innerText
        getFeniAmount = parseFloat(getFeniAmount)
        feniTk = parseFloat(feniTk)
        companyBalance = parseFloat(companyBalance)
        if (getFeniAmount > 0 && getFeniAmount <= feniTk) {
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

//  Card 3
document.getElementById('quotaDonateNowBtn').addEventListener('click', function () {
    quotaTK = document.getElementById('quotaBalance').innerText
    getQuotaAmount = document.getElementById('quotaDonateAmount').value
    companyBalance = document.getElementById('default-balance').innerText
    getQuotaAmount = parseFloat(getQuotaAmount)
    quotaTK = parseFloat(quotaTK)
    companyBalance = parseFloat(companyBalance)
    if (getQuotaAmount > 0 && getQuotaAmount <= quotaTK) {
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
//  Card 4
document.getElementById('rohingaDonateBtn').addEventListener('click', function () {
    rohingaTk = document.getElementById('rohinaBalance').innerText
    getRhoingaAmount = document.getElementById('rohingaDonateAmount').value
    companyBalance = document.getElementById('default-balance').innerText
    getRhoingaAmount = parseFloat(getRhoingaAmount)
    rohingaTk = parseFloat(rohingaTk)
    companyBalance = parseFloat(companyBalance)
    if (getRhoingaAmount > 0 && getRhoingaAmount <= rohingaTk) {
        rohingaLeftBalance = rohingaTk - getRhoingaAmount
        compnayNewBalance = getRhoingaAmount + companyBalance
        document.getElementById('rohinaBalance').innerText = rohingaLeftBalance
        document.getElementById('default-balance').innerText = compnayNewBalance

        const p = document.createElement('p')
        p.innerText = `Added: ${getRhoingaAmount} Tk. for Rohingya refugee people at Cox's Bazar, Banladesh`;
        console.log(p)
        document.getElementById('history').appendChild(p)
        p.classList.add('p-6', 'mb-6', 'border-2', 'border-gray-100', 'rounded-md')
    } else {
        alert("Invalid donation amount");
    }
})