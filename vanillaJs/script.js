const updateLength = () => {
    const slider = document.getElementById('slider')
   document.getElementById('passwordLength').innerText = slider.value;
    calculateStrength();
}

const generatePassword = () => {
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;


    if(!uppercase && !lowercase && !numbers && !symbols) {
        alert('Please select at least one option');
        return;
    }

    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbersList = '0123456789';
    const symbolsList = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    let characters = '';
    let password = '';

    

    if (uppercase) characters += uppercaseLetters;
    if (lowercase) characters += lowercaseLetters;
    if (numbers) characters += numbersList;
    if (symbols) characters += symbolsList;

    let length = document.getElementById('slider').value;

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('password').innerText = password;
    calculateStrength();
}

const calculateStrength = () => {
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    let strength = 0;
    if (uppercase) strength += 26;
    if (lowercase) strength += 26;
    if (numbers) strength += 10;
    if (symbols) strength += 32;

    let length = document.getElementById('slider').value;

    strength *= length;
    strength = Math.floor(strength / 235);

    document.getElementById('st1').classList.remove('selected');
    document.getElementById('st2').classList.remove('selected');
    document.getElementById('st3').classList.remove('selected');
    document.getElementById('st4').classList.remove('selected');

    switch(strength) {
        case 1:
            document.getElementById('st1').classList.add('selected');
            break;
        case 2:
            document.getElementById('st1').classList.add('selected');
            document.getElementById('st2').classList.add('selected');
            break;
        case 3:
            document.getElementById('st1').classList.add('selected');
            document.getElementById('st2').classList.add('selected');
            document.getElementById('st3').classList.add('selected');
            break;
        case 4:
            document.getElementById('st1').classList.add('selected');
            document.getElementById('st2').classList.add('selected');
            document.getElementById('st3').classList.add('selected');
            document.getElementById('st4').classList.add('selected');
            break;
    }

}

const copyPassword = () => {
    navigator.clipboard.writeText(document.getElementById('password').innerText);
}