function reply(id, name) {
    const title = document.getElementById('title');
    title.innerHTML = "Reply to " + name;
   /*  document.getElementById('reply_id').value = id; */
    document.addEventListener('DOMContentLoaded', function() {
        const replyButtons = document.querySelectorAll('.reply');
        replyButtons.forEach(button => {
          button.addEventListener('click', function() {
            const commentId = this.getAttribute('data-comment-id');
            const commentName = this.getAttribute('data-comment-name');
            reply(commentId, commentName);
          });
        });
      });
      function reply(commentId, commentName) {
        // Implement your reply logic here
        console.log('Replying to comment', commentId, 'by', commentName);
    }
}
//added with chat
//function sendComment() {
// const editorContent = document.querySelector('.editor').textContent;
//  const title = document.getElementById('title').value;

  // Invia i dati al server (modifica questo codice per adattarlo alle tue esigenze)
//  console.log(`Invio il titolo: ${title}`);
//  console.log(`Invio il contenuto del commento: ${editorContent}`);

  // Aggiungi codice per inviare i dati al server
//}