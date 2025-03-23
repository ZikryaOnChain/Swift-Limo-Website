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
    console.log('Submitting form data:', formData);
    
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

    const data = await response.json();

    if (!response.ok) {
      console.error('Server error response:', data);
      throw new Error(data.error || 'Server error occurred');
    }

    console.log('Form submission successful:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}