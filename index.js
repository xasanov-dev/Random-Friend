let friends = [];

document.getElementById('add-friend').addEventListener('click', function(e){
    e.preventDefault();

    let friend = document.getElementById('friend-input').value;

    friends.push(friend);

    document.getElementById('friend-list').innerText = friends;

    document.getElementById('friend-input').value = "";
});

document.getElementById('select-friend').addEventListener('click', function() {

    let randomNumber = Math.floor(Math.random() * friends.length);

    document.getElementById('random-friend').innerText = friends[randomNumber];
});
