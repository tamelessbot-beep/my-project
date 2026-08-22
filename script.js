const orderTriggers = [document.getElementById("topOrderBtn"), document.getElementById("mainOrderBtn")];

orderTriggers.forEach(btn => {
    if(btn) {
        btn.addEventListener("click", function() {
            alert("☕ Terminal Active: Connecting securely to Scooter's Kitchen Order Queue system...");
        });
    }
});
