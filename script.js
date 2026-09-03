document.addEventlistener('DOMContentLoaded', () => {
		const profileCard= documen.querySelector('.profile-card');
		const badge = document.querySelector('.profile-img');
		const socialButtons  = document.querySelectorAll('.btn');

		profileImg.addEvenListener('click', () => {
			profileImg.style.transition = 'transform 0.4s ease';
			profileImg.style.transform = 'scale(1.1) rotate(5deg)';

			setTimeout(() => {
				profileImg.style.transform = 'scale(1) rotate(0deg)';
			}, 400);
		});

		socialButtons.forEach(button => {
			button.addEvenListener('click', (event) => {
				const platform = button.textContent;
				alert('Anda memilih untuk membuka tautan ${platform}.');
			});
		});
		
		badge.addEventListener('mouseenter', ()=> {
			badge.style.cursor = 'pointer';
			badge.innerText = ' let\'s Connect!';
		}):	

		badge.addEvenListener('mouseleave', () => {
			badge.innerText = 'Ready to Code';
		});
	}):	
