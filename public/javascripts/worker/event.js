if (typeof (Worker) !== "undefined") {
    // Yes! Web worker support!
    // Some code.....

    let branches = document.querySelectorAll('.branches');
    for (let i = 3; i < branches.length; i++) {
        branches[i].style.display = 'none';
    }
    let w = new Worker("../public/javascripts/worker/wokerLoadMore.js");
    window.addEventListener("scroll", function (event) {
        var top = this.scrollY; // 574
        //console.log(top);
        if (top > 0) {
            w.onmessage = (e) => {
                if (e.data == 'more') {
                    for (let i = 3; i < branches.length; i++) {
                        branches[i].style.display = 'block';
                    }
                }
            }
            w.postMessage('574');
        } else if (top == 0) {
            w.onmessage = (e) => {
                if (e.data == 'top') {
                    for (let i = 3; i < branches.length; i++) {
                        branches[i].style.display = 'none';
                    }
                }
            }
            w.postMessage('0');
        }
    }, false);
} else {
    // Sorry! No Web Worker support..
    alert('No Web Worker support');
}