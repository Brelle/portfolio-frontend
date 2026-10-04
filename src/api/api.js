const API_URL = 'https://portfolio-backend-production-2c6a.up.railway.app/api';

export async function getSkills() {
  const res = await fetch(`${API_URL}/skills/`);
  return res.json();
}

export async function getProjects() {
  const res = await fetch(`${API_URL}/projects/`);
  return res.json();
}

export async function getExperiences() {
  const res = await fetch(`${API_URL}/experiences/`);
  return res.json();
}

export async function getEducations() {
  const res = await fetch(`${API_URL}/educations/`);
  return res.json();
}

export async function sendContactMessage(data) {
  const res = await fetch(`${API_URL}/contact/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Erreur lors de l\'envoi');
  return res.json();
}