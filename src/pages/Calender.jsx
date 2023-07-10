import {
  Box,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "fullcalendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

function Calender() {
  const theme = useTheme();
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box
      height={"100%"}
      width={"100%"}
      display={"flex"}
      justifyContent={"space-between"}
      p={"2rem"}
    >
      <Box flex={"1 1 20%"}>
        <Typography variant="h5">Events</Typography>
        <List>
          {currentEvents.map((event) => {
            return (
              <ListItem
                sx={{
                  mb: "1rem",
                  borderRadius: "4px",
                  bgcolor: `${theme.palette.success.light}`,
                }}
                key={event.id}
              >
                <ListItemText
                  primary={
                    <Typography variant="body2" style={{ color: "#FFFFFF" }}>
                      {event.title}
                    </Typography>
                  }
                  secondary={
                    <Typography color={theme.palette.common.white}>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Box>

      <Box flex={"1 1 100%"} ml={"1rem"}>
        <FullCalendar
          height={"90%"}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          select={handleDateClick}
          eventClick={handleEventClick}
          eventsSet={(events) => setCurrentEvents(events)}
          initialEvents={[
            {
              id: "12315",
              title: "All-day event",
              date: "2022-09-14",
            },
            {
              id: "5123",
              title: "Timed event",
              date: "2022-09-28",
            },
          ]}
        ></FullCalendar>
      </Box>
    </Box>
  );
}

export default Calender;
