function makeFriendsList(friends) {
      const ulElement = document.createElement('ul');
    friends.forEach(friend => {
        const liElement = document.createElement('li');
        liElement.textContent = `${friend.firstName} ${friend.lastName}`;
        ulElement.appendChild(liElement);
    });
    return ulElement;
}
