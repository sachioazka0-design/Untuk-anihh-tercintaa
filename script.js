const openButton = document.getElementById('openButton');
const welcome = document.getElementById('welcome');
const letter = document.getElementById('letter');
const videoWrap = document.getElementById('videoWrap');

openButton.addEventListener('click', () => {
  welcome.hidden = true;
  letter.hidden = false;
  videoWrap.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/2Vv-BfVoq4g?autoplay=1&rel=0" title="Perfect - Ed Sheeran" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
  letter.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.querySelectorAll('.photo-upload').forEach((input) => {
  input.addEventListener('change', () => {
    const file = input.files && input.files[0];
    if (!file || !file.type.startsWith('image/')) return;

    const frame = input.closest('.photo-frame');
    const image = frame.querySelector('.photo');
    image.src = URL.createObjectURL(file);
    image.hidden = false;
    frame.querySelector('.photo-placeholder').hidden = true;
  });
});
