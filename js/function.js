document.getElementById("history-btn").addEventListener('click', function(){
    document.getElementById('history').classList.remove("hidden")
    document.getElementById('donation').classList.add('hidden')
})
document.getElementById("donation-btn").addEventListener('click', function(){
    document.getElementById('history').classList.add("hidden")
    document.getElementById('donation').classList.remove('hidden')
})
