//console.info('worker created');
self.onmessage = (e) => {

    if (e.data == '574') {
        self.postMessage(`more`);
    } else if (e.data = '0') {
        self.postMessage(`top`);
    }
}