const elem = document.getElementById('scan');
const elem2 = document.getElementById('text1');
const elem3 = document.getElementById('text2');
window.addEventListener('resize', move);
function move(){
    if (document.documentElement.clientWidth < 1000) {
        elem.innerHTML='Съёмка видео';
        elem2.innerHTML='Обширный ассортимент чехлов лля каждой модели. Цветовая гамма, отличное качество, премиальные материалы и дополнительные возможности призваны удовлетворить даже самый притязательный вкус.';
        elem3.innerHTML='Беспроводная зарядная станция Duo Pad быстро заряжает одновременно два устройства, одно из которых охлаждается.';
    }
    else{
        elem.innerHTML='Сканер отпечатка в экране';
        elem2.innerHTML='Для любителей роскоши, модель S10+ будет выпускаться в керамическом корпусе черного и белого цветов.';
        elem3.innerHTML='Для любителей роскоши, модель S10+ будет выпускаться в керамическом корпусе черного и белого цветов.';
    }
    if (document.documentElement.clientWidth < 719) {
        document.getElementById("img1").src="Images/ImageMobile3.png";
        document.getElementById("img2").src="Images/ImageMobile2.png";
        document.getElementById("img3").src="Images/ImageMobile1.png";
    }
    else{
        document.getElementById("img1").src="Images/scan_image3.png";
        document.getElementById("img2").src="Images/scan_image2.png";
        document.getElementById("img3").src="Images/scan_image1.png";
    }
    
}

