interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  pickup: string;
  dropoff: string;
  vehicle: string;
  area?: string;
  event?: string;
  notes?: string;
}

export async function submitToGoogleSheets(formData: FormData) {
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...formData
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error };
  }
}