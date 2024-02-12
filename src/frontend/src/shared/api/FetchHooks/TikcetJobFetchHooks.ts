import {
  InputJobTicket,
  JobTicket,
  NotFoundResponse,
} from "@/shared/interfaces";
import axios from "axios";
import { BASE_API_URL } from "../base";

const PATH_URL = "ticket/job";

const useTicketJobListHook = async () => {
  const { data } = await axios.get<JobTicket[]>(`${BASE_API_URL}/${PATH_URL}`);
  return data;
};

const useTicketJobByIdHook = async (id: string) => {
  const { data, status } = await axios.get<JobTicket | NotFoundResponse>(
    `${BASE_API_URL}/${PATH_URL}/${id}`,
  );
  if (status >= 200 && status < 300) return data as JobTicket;

  return null;
};

const useTicketJobCreateHook = async (ticketJobData: InputJobTicket) => {
  const { data } = await axios.post<JobTicket>(
    `${BASE_API_URL}/${PATH_URL}/`,
    ticketJobData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    },
  );
  return data;
};

export { useTicketJobByIdHook, useTicketJobCreateHook, useTicketJobListHook };
