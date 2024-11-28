let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();
    const todayDate = currentDate.getDate();

    function renderCalendar() {
      const monthYearElement = document.getElementById('month-year');
      const calendarGrid = document.getElementById('calendar-grid');

      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      monthYearElement.innerText = `${monthNames[currentMonth]} ${currentYear}`;

      calendarGrid.innerHTML = "";

      const firstDay = new Date(currentYear, currentMonth, 1);
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const numberOfDays = lastDay.getDate();
      const startingDay = firstDay.getDay();

      const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      weekdays.forEach(day => {
        const weekdayHeader = document.createElement('div');
        weekdayHeader.classList.add('weekdays');
        weekdayHeader.textContent = day;
        calendarGrid.appendChild(weekdayHeader);
      });

      for (let i = 0; i < startingDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.classList.add('empty');
        calendarGrid.appendChild(emptyDiv);
      }

      for (let day = 1; day <= numberOfDays; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = day;

        // Only highlight the "today" date if it's the current day
        if (day === todayDate && currentMonth === currentDate.getMonth() && currentYear === currentDate.getFullYear()) {
          dayDiv.classList.add('today');
        }

        calendarGrid.appendChild(dayDiv);
      }
    }

    function changeMonth(direction) {
      currentMonth += direction;

      if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
      } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
      }

      renderCalendar();
    }

    renderCalendar();