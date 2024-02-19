export const BASE_API_URL = "https://api.labofdev.ru/api/v1";

export const createQueryArgumentString = (searchArgs: object): string => {
  let queryParams = "?";

  for (const [argument, value] of Object.entries(searchArgs)) {
    queryParams += `${argument}=${value}`;
  }

  return queryParams;
};
