var indexNumber = 0;
const avatar = ['https://pickaface.net/gallery/avatar/unr_fffs4_170405_1843_ytkav.png', 'https://pickaface.net/gallery/avatar/18912967_200425_2052_8zwhj9.png', 'https://pickaface.net/gallery/avatar/unr_male3_210901_1818_a4qjkx.png'];
const title = ['COMMENTER (RYANHEROOFTIME)', 'COMMENTER (PEACH1019)', 'THEWRAP (ALONSO DURALDE)'];
const review = ['Far From Home is an amazing spiderman film. It\'s is one of my Favorite MCU Films. It a great transition from the Infinity Saga into the next phase.', 'Amazing movie! Adds humor and is nice that they decided to do something new with Spider-Man unlike doing the whole story again which we all know.', 'If anything, and this is a compliment, the film frequently feels like a charming teen road-trip comedy that occasionally turns into a superhero movie.'];
function updateUI() {
    document.getElementById('avatar-img').src = avatar[indexNumber];
    document.getElementById('text').innerHTML = review[indexNumber];
    document.getElementById('title').innerHTML = title[indexNumber];
}
function increase() {
    indexNumber == avatar.length - 1 ? indexNumber = 0 : indexNumber++;
    updateUI();
}
function decrease() {
    indexNumber == 0 ? indexNumber = avatar.length - 1 : indexNumber--;
    updateUI();
}