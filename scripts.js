document.addEventListener('DOMContentLoaded', () => {
    const additionalInfoModal = document.getElementById('additional-info-modal');
    const additionalInfoButton = document.getElementById('additional-info-button');
    const additionalInfoClose = document.getElementsByClassName('close-button')[0];

    additionalInfoButton.onclick = function() {
        additionalInfoModal.style.display = 'block';
    }

    additionalInfoClose.onclick = function() {
        additionalInfoModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == additionalInfoModal) {
            additionalInfoModal.style.display = 'none';
        }
    }

    const lectureInfoModal = document.getElementById('lecture-info-modal');
    const editLectureLinks = document.querySelectorAll('.edit-lecture');
    const lectureInfoClose = document.getElementsByClassName('close-button')[1];

    editLectureLinks.forEach(link => {
        link.onclick = function(event) {
            event.preventDefault();
            lectureInfoModal.style.display = 'block';
        }
    });

    lectureInfoClose.onclick = function() {
        lectureInfoModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == lectureInfoModal) {
            lectureInfoModal.style.display = 'none';
        }
    }

    const academyPhotoInput = document.getElementById('academy-photo');
    const academyPhotoPreview = document.getElementById('academy-photo-preview');

    academyPhotoInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                academyPhotoPreview.src = e.target.result;
                academyPhotoPreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        } else {
            academyPhotoPreview.style.display = 'none';
        }
    });

    const toggleButton = document.getElementById('toggle-academy-info-form');
    const form = document.getElementById('academy-info-form');

    toggleButton.addEventListener('click', () => {
        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });
});
