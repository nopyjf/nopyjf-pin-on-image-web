window.onload = () => {
    const cv = document.getElementById('main-canvas');
    const ctx = cv.getContext('2d');
    const img = new Image();
    const pin = new Image();
    const pins = [];

    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        ctx.drawImage(pin, 10, 30);
    }

    // This image is from https://pixabay.com/photos/phone-display-apps-applications-292994/
    img.src = 'main-image.jpg';

    // This image is from https://www.flaticon.com/free-icon/pin_2377922?term=pin&page=1&position=13&origin=search&related_id=2377922
    pin.src = 'pin.png';

    cv.addEventListener('click', (ev) => {
        // Create pin
        const pin = new Image();
        pin.src = 'pin.png';

        // Calculate position for centering pin
        const x = ev.pageX - pin.width / 2;
        const y = ev.pageY - pin.height / 2;
        
        // Draw Pin
        ctx.drawImage(pin, x, y);

        // Add pin in list
        pins.push({pin, x: ev.pageX, y: ev.pageY});

        const pinUl = document.getElementById('pin-ul');
        const pinLi = document.createElement('li');
        pinLi.appendChild(document.createTextNode(`${ev.pageX}, ${ev.pageY}`));
        pinUl.appendChild(pinLi);
    });
};
