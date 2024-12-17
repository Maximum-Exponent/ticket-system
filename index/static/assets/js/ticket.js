const maxChars = 2000;
    
    function execCmd(command, value = null) {
        document.execCommand(command, false, value);
    }

    function updateCharacterCount(editor) {
        const text = editor.innerText || editor.textContent;
        const remainingChars = maxChars - text.length;
        const charCountElement = document.getElementById('charCount');

        if (remainingChars >= 0) {
            charCountElement.textContent = remainingChars;
        } else {
            editor.innerText = text.substring(0, maxChars);
            charCountElement.textContent = 0;
        }
    }

    function limitCharacters(event) {
        const editor = document.querySelector('.editor');
        const text = editor.innerText || editor.textContent;
        if (text.length >= maxChars && event.key !== 'Backspace' && event.key !== 'Delete') {
            event.preventDefault();
        }
    }

const sendTicketButton = document.getElementById('sendTicketButton');
const errorMessage = document.getElementById('error-message');
const messagePlaceholder = document.getElementById('message-placeholder');

sendTicketButton.addEventListener('click', sendTicket);

/* function sendTicket() {
    const editor = document.querySelector('.editor');
    const text = editor.innerText || editor.textContent;
  
    if (text.trim() === '') {
      messagePlaceholder.style.color = 'red';
      errorMessage.style.display = 'block';
    } else {
      // Send the ticket
      console.log('Ticket sent!');
      //sendComment();
    }
  } */
  