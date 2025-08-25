document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('http://localhost:8000/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });

                if (response.ok) {
                    alert('Poruka uspješno poslana!');
                    contactForm.reset();
                } else {
                    alert('Došlo je do pogreške prilikom slanja poruke.');
                }
            } catch (error) {
                alert('Došlo je do pogreške prilikom slanja poruke.');
            }
        });
    }
});
