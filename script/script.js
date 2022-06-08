// поиск DOM элементов и вложение их в переменные
const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button ');
//
const profileName = document.querySelector('.profile__name');
const profileSubtitle = document.querySelector('.profile__subtitle');
const popupSubmitButton = document.querySelector('.popup__submit-button');
const inputName = document.querySelector('.popup__field_input_name');
const inputSubtitle = document.querySelector('.popup__field_input_subtitle');
// функция открытия попапа
function openPopup(){
  popup.classList.add('popup_hidden');
  inputName.value = profileName.textContent;
  inputSubtitle.value = profileSubtitle.textContent;
}
// функция закрытия попапа
function closePopup(){
  popup.classList.remove('popup_hidden');

}
//по клику на кнопку редактировать открывается попап
profileEditButton.addEventListener('click', function() {
  openPopup();
  
});
//по клику на крестик попап закрывается
popupCloseButton.addEventListener('click', function() {
  closePopup();
});
//по клику на любую зону вне попапа - попап закрывается
popup.addEventListener('click', function(e) {
  if (e.target === e.currentTarget){
    closePopup();
  }
});
//функция сохранения введённых данных и закрытия попапа
function submitPopup(){
  profileName.textContent = inputName.value;
  profileSubtitle.textContent = inputSubtitle.value;
  popup.classList.remove('popup_hidden');
}
//по клику на кнопку сохранить - данные сохраняются - попап закрывается
popupSubmitButton.addEventListener('click', function() {
  submitPopup();
})

