export async function get(request) {
    // 1. Replace with your actual Nextcloud calendar API URL
    const calendarApiUrl = 'YOUR_NEXTCLOUD_CALENDAR_API_URL';
  
    try {
      const response = await fetch(calendarApiUrl);
      const data = await response.json();
  
      // 2. Transform the data into the format your Events component expects
      const events = data.map((event) => ({
        id: event.id,
        title: event.title,
        date: event.date,
        time: event.time,
        description: event.description,
      }));
  
      return {
        body: JSON.stringify(events),
      };
    } catch (error) {
      return {
        status: 500,
        body: JSON.stringify({ error: 'Failed to fetch events.' }),
      };
    }
  }