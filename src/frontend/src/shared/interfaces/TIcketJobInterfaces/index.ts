interface InputJobTicket {
  first_name: string;
  middle_name?: string;
  last_name: string;
  position: string;
  accompanying: string;
  salary_bottom?: number;
  salary_top?: number;
  resume_link?: string;
}

interface JobTicket extends InputJobTicket {
  id: string | number;
}

export { type InputJobTicket, type JobTicket };
