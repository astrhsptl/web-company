interface InputJobTicket {
  first_name: string;
  middle_name?: string;
  last_name: string;
  position: string;
  accompanying: string;
  salary_bottom?: number;
  salary_top?: number;
  resume?: File;
  resume_link?: string;
}

export { type InputJobTicket };
